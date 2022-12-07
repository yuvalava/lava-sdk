import Logger from "../logger/logger";

// Fetch from lava-sdk package
import { createLavaSDK } from "../sdk/sdk";

async function run() {
  const privKey =
    "f148ba74d9c66000fd4f7f8081491ff54bb291102e2aa2626a6176aec4684f4e";
  const endpoint = "localhost:26657";
  const chainID = "LAV1";
  //const rpcInterface = "tendermintrpc"; optional param

  // Create lavaSDK
  const lavaSDK = await createLavaSDK(privKey, chainID, endpoint);

  // Send relay
  const statusResponse = await lavaSDK.sendRelay("status", []);
  const blockResponse = await lavaSDK.sendRelay("block", ["5"]);

  // Print relay
  console.log("StatusResponse: ", statusResponse);
  console.log("BlockResponse: ", blockResponse);
}

run()
  .then()
  .catch((err) => {
    Logger.error(err);
  });
