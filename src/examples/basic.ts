/* 
                    Basic example
        This file shows basic usage of the future polygon-sdk library
        Currently we have implemented:
        1. Recreating account from private key
        2. Fetching paring list
*/
import Logger from "../logger/logger";

// Fetch from package
import { createLavaSDK } from "../sdk/sdk";

async function run() {
  const privKey =
    "6e754de60615f0834bcc14ce6f1275ab5a89f858e0b239ec3982bb7b56665a16";
  const endpoint = "localhost:26657";
  const chainID = "LAV1";
  const rpcInterface = "rest";

  // Create lavaSDK
  const lavaSDK = await createLavaSDK(endpoint, chainID, rpcInterface, privKey);

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
