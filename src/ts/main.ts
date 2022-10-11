import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import * as lava_sdk from './lava_sdk';
import * as lava_sdk_ws from './lava_sdk_ws';

const grpc = "public-rpc.lavanet.xyz:9090"
const rest_rpc = "http://public-rpc.lavanet.xyz:80/rest/"
const tendermint_rpc = "http://public-rpc.lavanet.xyz:80/rpc/"
const ws_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc/websocket"

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const EpochStateTracker = async function() { // sdk working implementation for rest client
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

const runAll = async(): Promise<void> => {
    console.log("Hello World!");
    var ws = new lava_sdk_ws.WebSocketConnection(ws_tendermint_rpc)
    await ws.waitForOpenConnection()
    ws.ws.send(`{"jsonrpc":"2.0","id":0,"method":"subscribe","params":{"query":"tm.event = 'NewBlock'"}}`)
}
runAll()
