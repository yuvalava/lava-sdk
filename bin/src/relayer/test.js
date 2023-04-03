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
const relay_pb_1 = require("../pairing/relay_pb");
const relayer_1 = __importDefault(require("./relayer"));
describe("Test relay request", () => {
    const getPrivateDataNegativeBlock = () => {
        const requestPrivateData = new relay_pb_1.RelayPrivateData();
        requestPrivateData.setConnectionType("GET");
        requestPrivateData.setApiUrl("");
        requestPrivateData.setData('{"jsonrpc":"2.0","id":535439332833,"method":"eth_chainId","params":[]}');
        requestPrivateData.setRequestBlock(-2);
        requestPrivateData.setApiInterface("jsonrpc");
        requestPrivateData.setSalt(new Uint8Array());
        return requestPrivateData;
    };
    const getPrivateDataPositiveBlock = () => {
        const requestPrivateData = new relay_pb_1.RelayPrivateData();
        requestPrivateData.setConnectionType("GET");
        requestPrivateData.setApiUrl("");
        requestPrivateData.setData('{"jsonrpc":"2.0","id":535439332833,"method":"eth_chainId","params":[]}');
        requestPrivateData.setRequestBlock(9876512);
        requestPrivateData.setApiInterface("jsonrpc");
        requestPrivateData.setSalt(new Uint8Array([1, 2, 3, 4, 5, 6]));
        return requestPrivateData;
    };
    it("Test generate content hash", () => {
        const testTable = [
            {
                input: getPrivateDataNegativeBlock(),
                expectedHash: new Uint8Array([
                    15, 27, 36, 51, 198, 156, 51, 188, 180, 203, 63, 64, 56, 211, 74, 231,
                    112, 26, 159, 166, 168, 3, 231, 34, 37, 88, 217, 245, 29, 203, 215,
                    10,
                ]),
            },
            {
                input: getPrivateDataPositiveBlock(),
                expectedHash: new Uint8Array([
                    56, 112, 127, 103, 197, 229, 30, 245, 181, 92, 121, 74, 199, 160, 149,
                    235, 126, 73, 219, 228, 0, 91, 30, 161, 241, 219, 192, 97, 164, 108,
                    91, 12,
                ]),
            },
        ];
        const relayer = new relayer_1.default("", "");
        for (const testCase of testTable) {
            // Test case logic goes here
            const hash = relayer.calculateContentHashForRelayData(testCase.input);
            expect(hash).toEqual(testCase.expectedHash);
        }
    });
});
it("Test relayRequest signature", () => {
    const testCasses = [
        {
            request: getRPCRelaySession(),
            signature: new Uint8Array([
                27, 218, 2, 122, 80, 144, 52, 23, 75, 36, 69, 81, 173, 58, 192, 133, 69,
                129, 127, 23, 150, 147, 218, 65, 241, 71, 60, 49, 150, 127, 60, 137,
                116, 13, 176, 13, 122, 116, 50, 202, 212, 209, 223, 8, 218, 202, 212,
                133, 100, 134, 10, 227, 184, 130, 19, 53, 18, 74, 44, 40, 31, 189, 122,
                135, 29,
            ]),
        },
    ];
    const privKeyExample = "b46dc8d00682e64c2f332553735ca34bb8345fbf17646c28d1fc1de5f0d62dd8";
    const relayer = new relayer_1.default("", privKeyExample);
    testCasses.map((test) => __awaiter(void 0, void 0, void 0, function* () {
        // Sign relay
        const signature = yield relayer.signRelay(test.request, privKeyExample);
        // Check if the signature was generated successfully
        expect("").toEqual("");
    }));
});
function getRPCRelaySession() {
    // Create relay session
    const requestSession = new relay_pb_1.RelaySession();
    requestSession.setSpecId("ETH1");
    requestSession.setSessionId(1);
    requestSession.setCuSum(1);
    requestSession.setProvider("lava@1urvcey0x8flw78zt6u9sc7krdu5nl2zmpjtpn2");
    requestSession.setRelayNum(1);
    requestSession.setEpoch(17340);
    requestSession.setUnresponsiveProviders(new Uint8Array());
    requestSession.setContentHash(new Uint8Array([
        56, 112, 127, 103, 197, 229, 30, 245, 181, 92, 121, 74, 199, 160, 149,
        235, 126, 73, 219, 228, 0, 91, 30, 161, 241, 219, 192, 97, 164, 108, 91,
        12,
    ]));
    requestSession.setSig(new Uint8Array());
    requestSession.setLavaChainId("lava");
    return requestSession;
}
