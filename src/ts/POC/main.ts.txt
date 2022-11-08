import { Tendermint34Client,WebsocketClient } from '@cosmjs/tendermint-rpc'
import * as lava_sdk from './lava_sdk';
import * as lava_sdk_ws from './lava_sdk_ws';
import * as lava_sdk_pb from './lava_sdk_pb';

const grpc = "public-rpc.lavanet.xyz:9090"
const rest_rpc = "http://public-rpc.lavanet.xyz:80/rest/"
const tendermint_rpc = "http://public-rpc.lavanet.xyz:80/rpc/"
const ws_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc/websocket"
const ws_tm_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc"

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const RestEpochStateTracker = async function() { // sdk working implementation for rest client
    console.log("Rest")
    const tm_client = await Tendermint34Client.connect(tendermint_rpc);
    var block_info = await tm_client.block();
    var starting_height = block_info.block.header.height
    console.log("Testing client", ", height:", block_info.block.header.height, "chain-id:", block_info.block.header.chainId);
    var starting_epoch = (await lava_sdk.getEpochDetails(rest_rpc)).EpochDetails.startBlock;
    console.log("Starting Epoch: ", starting_epoch)
    while (true) {
        var current_epoch = (await lava_sdk.getEpochDetails(rest_rpc)).EpochDetails.startBlock;
        if (current_epoch != starting_epoch) {
            console.log("[Epoch Change Event]: Epoch changed from ", starting_epoch, " to ", current_epoch)
            
            console.log("Query ETH1 Client Pairings: ",(await lava_sdk.getPairingClients(rest_rpc, "ETH1")))
            starting_epoch = current_epoch;
        } else {
            var block_info = await tm_client.block();
            var current_height = block_info.block.header.height
            console.log("Waiting for Epoch Change Current Height: ", current_height, "Epoch Height: ", current_epoch)
        }
        await delay(10000);
    }
}

const WebSocketEpochStateTracker = async function() {
    var ws = new lava_sdk_ws.WebSocketConnection(ws_tendermint_rpc)
    await ws.waitForOpenConnection()
    ws.ws.send(`{"jsonrpc":"2.0","id":0,"method":"subscribe","params":{"query":"tm.event = 'NewBlock'"}}`)
    // future send: {"jsonrpc":"2.0","id":0,"method":"subscribe","params":{"query":"tm.event = 'NewBlock' AND lava_new_epoch.description = 'New Block Epoch Started'"}}
    var lava_current_epoch = 0

    // LavaPbClient
    const pb_client = new lava_sdk_pb.LavaPbClient(tendermint_rpc)
    await pb_client.setup()

    while (true) {
        await delay(10000)
        console.log("checking response:",ws.ws_response_data)
        if (ws.ws_response_data?.result?.events?.["lava_new_epoch.height"]) {
            if (lava_current_epoch != ws.ws_response_data.result.events["lava_new_epoch.height"]) {
                lava_current_epoch = ws.ws_response_data.result.events["lava_new_epoch.height"]
                console.log("Epoch Changed!!:", lava_current_epoch)
                await pb_client.getPairingClients("ETH1")
            }
        } else {
            if (ws.ws_response_data?.result?.events)
            {
                var current_height =  ws.ws_response_data?.result?.data?.value?.block?.header?.height // if not found its undefined
                console.log("Same Epoch, Current Block:", current_height)
            }
        }
    }
}

const runAll = async(): Promise<void> => {
    console.log("Hello Lava SDK!");
    WebSocketEpochStateTracker()
}

runAll()
