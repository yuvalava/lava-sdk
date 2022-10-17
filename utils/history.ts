import { Tendermint34Client,WebsocketClient } from '@cosmjs/tendermint-rpc'


const grpc = "public-rpc.lavanet.xyz:9090"
const rest_rpc = "http://public-rpc.lavanet.xyz:80/rest/"
const tendermint_rpc = "http://public-rpc.lavanet.xyz:80/rpc/"
const ws_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc/websocket"
const ws_tm_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc"

async function tendermintClient() {
    const ws_client = new WebsocketClient(ws_tm_tendermint_rpc, (err)=>{console.log("Error Connecting:", err)})
    const tm_client = Tendermint34Client.create(ws_client);
    
    var new_block_subscribe = (await tm_client).subscribeNewBlock();
    var latestUpdate = {};
    var readLatestUpdate = true;
    new_block_subscribe.addListener(
        {
        next: i => {console.log(i); latestUpdate = i; readLatestUpdate = false;},
        error: err => console.error(err),
        complete: () => console.log('completed'),
    });
    // while(true) {
    //     if (readLatestUpdate) {
    //         // we got an update we can read it. 


    //     }

        // delay
    // }    
}