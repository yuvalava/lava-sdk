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
const logger_1 = __importDefault(require("../logger/logger"));
// Fetch from lava-sdk package
const sdk_1 = require("../sdk/sdk");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const privKey = "9b1ebf4cc1053f8cfdb095f69967ac09f51bb7ef6c3f703d48fbe2d62672f43a";
        const endpoint = "localhost:26657";
        const chainID = "LAV1";
        //const rpcInterface = "tendermintrpc"; optional param
        // Create lavaSDK
        const lavaSDK = yield (0, sdk_1.createLavaSDK)(privKey, endpoint, chainID);
        // Send relay
        const statusResponse = yield lavaSDK.sendRelay("status", []);
        const blockResponse = yield lavaSDK.sendRelay("block", ["5"]);
        // Print relay
        var dec = new TextDecoder();
        console.log("StatusResponse: ", dec.decode(statusResponse.getData_asU8()));
        console.log("BlockResponse: ", dec.decode(blockResponse.getData_asU8()));
    });
}
run()
    .then()
    .catch((err) => {
    logger_1.default.error(err);
});
