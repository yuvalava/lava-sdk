#!/usr/bin/env node
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
const commander_1 = require("commander");
const sdk_1 = __importDefault(require("./sdk/sdk"));
const logger_1 = __importDefault(require("./logger/logger"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // Add an extra empty line at beginning of the program
        logger_1.default.emptyLine();
        // Initialize commander object
        const program = new commander_1.Command();
        // Initialize root command
        program
            .name('Lava SDK')
            .description('An SDK for interacting with Lava client')
            .version('0.0.1');
        // Initialize sub commands
        program.command('get-pairing')
            .description('Gets the pairing list for current epoch')
            .requiredOption('-e, --endpoint <endpoint>', 'An lava node Endpoint')
            .requiredOption('-c, --chainId <chain-id>', 'An lava network chain ID')
            .requiredOption('-p, --privateKey <privateKey>', 'The client private key')
            .requiredOption('-r, --rpcInterface <rpc-interface>', 'A used rpc interface')
            .action((option, _) => __awaiter(this, void 0, void 0, function* () {
            // Todo add validation for required params
            yield getPairing(option.endpoint, option.chainId, option.privateKey, option.rpcInterface);
        }));
        // Parse program
        program.parse();
    });
}
function getPairing(endpoint, chainID, privateKey, rpcInterface) {
    return __awaiter(this, void 0, void 0, function* () {
        const lavaSDK = new sdk_1.default(endpoint, chainID, privateKey, rpcInterface);
        yield lavaSDK.init();
    });
}
run()
    .then()
    .catch((err) => {
    logger_1.default.error(err);
});
