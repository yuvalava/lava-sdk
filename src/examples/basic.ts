import Logger from "../logger/logger";

// Fetch from lava-sdk package
import { createLavaSDK } from "../sdk/sdk";

async function run() {
  const privKey =
    "9b1ebf4cc1053f8cfdb095f69967ac09f51bb7ef6c3f703d48fbe2d62672f43a";
  const endpoint = "localhost:26657";
  const chainID = "LAV1";
  //const rpcInterface = "tendermintrpc"; optional param

  // Create lavaSDK
  const lavaSDK = await createLavaSDK(privKey, endpoint, chainID);

  // Send relay
  const statusResponse = await lavaSDK.sendRelay("status", []);
  const blockResponse = await lavaSDK.sendRelay("block", ["5"]);

  // Print relay
  var dec = new TextDecoder();
  console.log("StatusResponse: ", dec.decode(statusResponse.getData_asU8()));
  console.log("BlockResponse: ", dec.decode(blockResponse.getData_asU8()));
}

run()
  .then()
  .catch((err) => {
    Logger.error(err);
  });
