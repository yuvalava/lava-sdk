// import { RelayerClient, Relayer } from "../pairing/relay_pb_service.js";
// import { GenerateBadgeRequest, GenerateBadgeResponse } from "../pairing/relay_pb.js";
import { BadgeGeneratorClient, BadgeGenerator } from "./badge_pb_service";
import { GenerateBadgeRequest, GenerateBadgeResponse } from "./badge_pb";
import { grpc } from "@improbable-eng/grpc-web";
import transport from "../util/browser";

// const serverAddress = "http://localhost:8080";

// Function to send the gRPC request
export async function fetchBadge(serverAddress: string, badgeUser: string, projectKey: string) : Promise<GenerateBadgeResponse> {
    console.log("entered sendRequest!")
    // Create a new instance of the BadgeGeneratorClient
    const client = new BadgeGeneratorClient(serverAddress);
    console.log("client: ", client)
    // Create a new GenerateBadgeRequest
    const request = new GenerateBadgeRequest();
    request.setUserId(badgeUser);
    request.setProjectKey(projectKey);
    // request.setChainId("LAV1");
    console.log("request: ", request)
    console.log("request.setUserId: ", request.getUserId())
    console.log("request.setProjectKey: ", request.getProjectKey())

    const requestPromise = new Promise<GenerateBadgeResponse>((resolve, reject) => {
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
    });
    console.log("reqProm: ", requestPromise)
    return relayWithTimeout(2000, requestPromise);
}

async function relayWithTimeout(timeLimit: number, task: any) {
    console.log("ENTERED HERE!")
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

// // Call the function to send the request
// fetchBadge()
//     .then((response) => {
//         processResponse(response);
//     })
//     .catch((error) => {
//         console.error("Error custom:", error);
//     });

// // Function to process the response
// function processResponse(response: GenerateBadgeResponse) {
//     console.log("Response:", response.toObject());
// }