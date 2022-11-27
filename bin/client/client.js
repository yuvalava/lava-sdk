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
const proto_signing_1 = require("@cosmjs/proto-signing");
const errors_1 = __importDefault(require("./errors"));
const logger_1 = __importDefault(require("../logger/logger"));
const lavaPrefix = "lava@";
class LavaClient {
    constructor(mnemonic) {
        this.mnemonic = mnemonic;
        this.wallet = errors_1.default.errWalletNotInitialized;
    }
    // Initialize client
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.wallet = yield proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: lavaPrefix });
        });
    }
    // Get consumer account from the wallet
    getConsumerAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            // check if wallet was initialized
            if (this.wallet instanceof Error) {
                return this.wallet;
            }
            ;
            // Return zero account from wallet
            var accountZero = (yield this.wallet.getAccounts())[0];
            return accountZero;
        });
    }
    // Print account details
    printAccount(AccountData) {
        logger_1.default.info("INFO:");
        logger_1.default.info("Address" + AccountData.address);
        logger_1.default.info("Public key" + AccountData.pubkey);
        logger_1.default.emptyLine();
    }
}
exports.default = LavaClient;
