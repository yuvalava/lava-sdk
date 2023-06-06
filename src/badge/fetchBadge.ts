// import { RelayerClient, Relayer } from "../pairing/relay_pb_service.js";
// import { GenerateBadgeRequest, GenerateBadgeResponse } from "../pairing/relay_pb.js";
import { BadgeGenerator } from "./badges_pb_service";
import { GenerateBadgeRequest, GenerateBadgeResponse } from "./badges_pb";
import { grpc } from "@improbable-eng/grpc-web";
import transport from "../util/browser";

// const serverAddress = "http://localhost:8080";

// Function to send the gRPC request
export async function fetchBadge(
  serverAddress: string,
  badgeUser: string,
  projectKey: string
): Promise<GenerateBadgeResponse> {
  // Create a new GenerateBadgeRequest
  const request = new GenerateBadgeRequest();
  request.setBadgeAddress(badgeUser);
  request.setProjectId(projectKey);
  // request.setChainId("LAV1");
  const requestPromise = new Promise<GenerateBadgeResponse>(
    (resolve, reject) => {
      grpc.invoke(BadgeGenerator.GenerateBadge, {
        request: request,
        host: serverAddress,
        transport: transport,
        onMessage: (message: GenerateBadgeResponse) => {
          resolve(message);
        },
        onEnd: (code: grpc.Code, msg: string | undefined) => {
          if (code == grpc.Code.OK || msg == undefined) {
            return;
          }
          reject(new Error(msg));
        },
      });
    }
  );
  return relayWithTimeout(2000, requestPromise);
}

async function relayWithTimeout(timeLimit: number, task: any) {
  let timeout;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeout = setTimeout(() => {
      reject(new Error("Timeout exceeded"));
    }, timeLimit);
  });
  const response = await Promise.race([task, timeoutPromise]);
  if (timeout) {
    //the code works without this but let's be safe and clean up the timeout
    clearTimeout(timeout);
  }
  return response;
}
