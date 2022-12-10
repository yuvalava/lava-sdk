import Logger from "../logger/logger";

// Fetch from lava-sdk package
import LavaSDK from "../sdk/sdk";

async function run() {
  const privKey =
    "db36be489c8f2a8663c42a51a22a77926440bdc77bff6ef5ac236d7093180827";
  const endpoint = "localhost:26657";
  const chainID = "LAV1";

  // Create lavaSDK
  const lavaSDK = await new LavaSDK({privateKey:privKey, chainID:chainID, endpoint:endpoint});

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
