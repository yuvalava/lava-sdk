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
const sdk_1 = __importDefault(require("../sdk/sdk"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const privKey = "db36be489c8f2a8663c42a51a22a77926440bdc77bff6ef5ac236d7093180827";
        const endpoint = "localhost:26657";
        const chainID = "LAV1";
        // Create lavaSDK
        const lavaSDK = yield new sdk_1.default({ privateKey: privKey, chainID: chainID, endpoint: endpoint });
        // Send relay
        const statusResponse = yield lavaSDK.sendRelay("status", []);
        const blockResponse = yield lavaSDK.sendRelay("block", ["5"]);
        // Print relay
        console.log("StatusResponse: ", statusResponse);
        console.log("BlockResponse: ", blockResponse);
    });
}
run()
    .then()
    .catch((err) => {
    logger_1.default.error(err);
});
