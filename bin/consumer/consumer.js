"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("../codec/pairing/query");
const query_2 = require("../codec/epochstorage/query");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const types_1 = require("./types");
const errors_1 = __importDefault(require("./errors"));
const logger_1 = __importDefault(require("../logger/logger"));
const long_1 = __importDefault(require("long"));
class LavaConsumer {
    constructor(endpoint, chainID, rpcInterface) {
        this.endpoint = endpoint;
        this.chainID = chainID;
        this.rpcInterface = rpcInterface;
        this.account = errors_1.default.errAccountNotInitialized;
        this.queryService = errors_1.default.errQueryServiceNotInitialized;
        this.epochQueryService = errors_1.default.errEpochQueryServiceNotInitialized;
        this.tendermintClient = errors_1.default.errTendermintClientServiceNotInitialized;
    }
    // Initialize consumer
    init(account) {
        return __awaiter(this, void 0, void 0, function* () {
            // Initialize account
            this.account = account;
            // Initialize query service
            // TODO Tendermint34Client.connect returns ExperimentalWarning
            const tmClient = yield tendermint_rpc_1.Tendermint34Client.connect(this.endpoint);
            const queryClient = new stargate_1.QueryClient(tmClient);
            const rpcClient = (0, stargate_1.createProtobufRpcClient)(queryClient);
            this.queryService = new query_1.QueryClientImpl(rpcClient);
            this.epochQueryService = new query_2.QueryClientImpl(rpcClient);
            this.tendermintClient = tmClient;
        });
    }
    // Get pairing list for specified wallet in current epoch
    getPairing() {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if account was initialized
            if (this.account instanceof Error) {
                throw errors_1.default.errAccountNotInitialized;
            }
            if (this.tendermintClient instanceof Error) {
                throw errors_1.default.errTendermintClientServiceNotInitialized;
            }
            // Create pairing request for getPairing method
            const pairingRequest = {
                chainID: this.chainID,
                client: this.account.address
            };
            // Get pairing from the chain
            const pairingResponse = yield this.getPairingFromChain(pairingRequest);
            // Extract providers from pairing response
            const providers = pairingResponse.providers;
            // Initialize ConsumerSessionWithProvider array
            const pairing = [];
            // Fetch latest block
            const blockResponse = yield this.tendermintClient.block();
            // Fetch latest block number
            const latestBlockNumber = blockResponse.block.header.height;
            // fetch epoch size
            const epochNumber = yield this.getEpochNumber(latestBlockNumber);
            // create request for getting userEntity
            const userEntityRequest = {
                address: this.account.address,
                chainID: this.chainID,
                block: new long_1.default(latestBlockNumber)
            };
            // fetch max compute units
            const maxcu = yield this.getMaxCuForUser(userEntityRequest);
            //Iterate over providers to populate pairing list
            for (let provider of providers) {
                // Skip providers with no endpoints
                if (provider.endpoints.length == 0) {
                    continue;
                }
                // Initialize relevantEndpoints array
                let relevantEndpoints = [];
                //only take into account endpoints that use the same api interface
                for (let endpoint of provider.endpoints) {
                    if (endpoint.useType == this.rpcInterface) {
                        const convertedEndpoint = new types_1.Endpoint(endpoint.iPPORT, true, 0);
                        relevantEndpoints.push(convertedEndpoint);
                    }
                }
                // Skip providers with no relevant endpoints
                if (relevantEndpoints.length == 0) {
                    continue;
                }
                // Create a new pairing object
                const newPairing = new types_1.ConsumerSessionWithProvider(this.account.address, relevantEndpoints, maxcu, 0, false, epochNumber);
                // Add newly created pairing in the pairing list
                pairing.push(newPairing);
            }
            return pairing;
        });
    }
    pickRandomProvider(providers) {
        // Remove providers which does not match criteria
        let validProviders = providers.filter(item => item.MaxComputeUnits > 0);
        // TODO check with Ran how to know if provider is blocked?
        // Pick random provider
        const random = Math.floor(Math.random() * validProviders.length);
        // Print Random provider
        logger_1.default.success("Provider picked: ");
        logger_1.default.deepInfo(validProviders[random]);
        logger_1.default.emptyLine;
        return validProviders[random];
    }
    getPairingFromChain(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if query service was initialized
            if (this.queryService instanceof Error) {
                throw errors_1.default.errQueryServiceNotInitialized;
            }
            // Get pairing from the chain
            const queryResult = yield this.queryService.GetPairing(request);
            return queryResult;
        });
    }
    getMaxCuForUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if query service was initialized
            if (this.queryService instanceof Error) {
                throw errors_1.default.errQueryServiceNotInitialized;
            }
            // Get pairing from the chain
            const queryResult = yield this.queryService.UserEntry(request);
            // return maxCu from userEntry
            return queryResult.maxCU.low;
        });
    }
    getEpochNumber(latestBlockNumber) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Check if query service was initialized
            if (this.epochQueryService instanceof Error) {
                throw errors_1.default.errEpochQueryServiceNotInitialized;
            }
            // Create params request
            const epochRequst = {};
            // Get epoch params from the chain
            const queryResult = yield this.epochQueryService.Params(epochRequst);
            // Extract epoch size from params
            const epochSize = (_a = queryResult.params) === null || _a === void 0 ? void 0 : _a.epochBlocks.low;
            if (epochSize == undefined) {
                throw new Error("Epoch size undefined");
            }
            // Calculate epoch number
            const epochNumber = Math.trunc(latestBlockNumber / epochSize) + 1;
            return epochNumber;
        });
    }
    printParingList(pairing) {
        logger_1.default.emptyLine();
        logger_1.default.success("Paring list successfully fetched");
        logger_1.default.deepInfo(pairing);
        logger_1.default.emptyLine();
    }
}
exports.default = LavaConsumer;
