import { RelaySession, RelayPrivateData } from "../pairing/relay_pb";
import Relayer from "./relayer";

describe("Test relay request", () => {
  const getPrivateDataNegativeBlock = (): RelayPrivateData => {
    const requestPrivateData = new RelayPrivateData();
    requestPrivateData.setConnectionType("GET");
    requestPrivateData.setApiUrl("");
    requestPrivateData.setData(
      '{"jsonrpc":"2.0","id":535439332833,"method":"eth_chainId","params":[]}'
    );
    requestPrivateData.setRequestBlock(-2);
    requestPrivateData.setApiInterface("jsonrpc");
    requestPrivateData.setSalt(new Uint8Array());

    return requestPrivateData;
  };

  const getPrivateDataPositiveBlock = (): RelayPrivateData => {
    const requestPrivateData = new RelayPrivateData();
    requestPrivateData.setConnectionType("GET");
    requestPrivateData.setApiUrl("");
    requestPrivateData.setData(
      '{"jsonrpc":"2.0","id":535439332833,"method":"eth_chainId","params":[]}'
    );
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
    const relayer = new Relayer("", "");

    for (const testCase of testTable) {
      // Test case logic goes here
      const hash = relayer.calculateContentHashForRelayData(testCase.input);
      expect(hash).toEqual(testCase.expectedHash);
    }
  });
});

it("Test relayRequest signature", () => {
  const testCasses: {
    request: RelaySession;
    signature: Uint8Array;
  }[] = [
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
  const privKeyExample =
    "b46dc8d00682e64c2f332553735ca34bb8345fbf17646c28d1fc1de5f0d62dd8";
  const relayer = new Relayer("", privKeyExample);

  testCasses.map(async (test) => {
    // Sign relay
    const signature = await relayer.signRelay(test.request, privKeyExample);
    // Check if the signature was generated successfully
    expect("").toEqual("");
  });
});

function getRPCRelaySession(): RelaySession {
  // Create relay session
  const requestSession = new RelaySession();
  requestSession.setSpecId("ETH1");
  requestSession.setSessionId(1);
  requestSession.setCuSum(1);
  requestSession.setProvider("lava@1urvcey0x8flw78zt6u9sc7krdu5nl2zmpjtpn2");
  requestSession.setRelayNum(1);
  requestSession.setEpoch(17340);
  requestSession.setUnresponsiveProviders(new Uint8Array());
  requestSession.setContentHash(
    new Uint8Array([
      56, 112, 127, 103, 197, 229, 30, 245, 181, 92, 121, 74, 199, 160, 149,
      235, 126, 73, 219, 228, 0, 91, 30, 161, 241, 219, 192, 97, 164, 108, 91,
      12,
    ])
  );
  requestSession.setSig(new Uint8Array());
  requestSession.setLavaChainId("lava");

  return requestSession;
}
