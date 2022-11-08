import { Tendermint34Client,WebsocketClient } from '@cosmjs/tendermint-rpc'
import * as lava_sdk from './lava_sdk';

const grpc = "public-rpc.lavanet.xyz:9090"
const rest_rpc = "http://public-rpc.lavanet.xyz:80/rest/"
const tendermint_rpc = "http://public-rpc.lavanet.xyz:80/rpc/"
const ws_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc/websocket"
const ws_tm_tendermint_rpc = "ws://public-rpc.lavanet.xyz:80/rpc"
const mnemonic = ""
// function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }

const runAll = async(): Promise<void> => {
    console.log("Hello Lava SDK!");
    
}

runAll()
