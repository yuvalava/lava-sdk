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
const errors_1 = __importDefault(require("./errors"));
class JsonRPC {
    sendRequest(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(path, {
                method: "GET",
                headers: {
                    Accept: 'application/json'
                }
            });
            if (!res.ok) {
                // Return error
                return errors_1.default.errSendingRequest;
            }
            return yield res.json();
        });
    }
    getLatestBlock(rest_rpc) {
        return __awaiter(this, void 0, void 0, function* () {
            // Fetch abciInfo from the chain
            const abciInfo = yield this.sendRequest(rest_rpc + "/abci_info");
            if (abciInfo instanceof Error) {
                throw new Error(abciInfo.message + ", req: " + rest_rpc + "/abci_info");
            }
            // Extract and return blocks height
            return abciInfo.result.response.last_block_height;
        });
    }
}
exports.default = JsonRPC;
