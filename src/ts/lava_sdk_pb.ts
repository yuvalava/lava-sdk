import { createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl } from "../codec/pairing/query"; // Replace with your own Msg import


export class LavaPbClient {
    private tm_client: any;
    private queryClient: any;
    private rpcClient: any;
    private endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
        this.tm_client = undefined; 
        this.queryClient = undefined;
        this.rpcClient = undefined;
    }
    async setup() {
        this.tm_client = (await Tendermint34Client.connect(this.endpoint));
        this.queryClient = new QueryClient(this.tm_client);
        this.rpcClient = createProtobufRpcClient(this.queryClient);
    }
    async getPairingClients(chainId: string) {
        const queryService = new QueryClientImpl(this.rpcClient);
        const queryResult = await queryService.Clients({chainID: chainId});
        console.log("Result:",queryResult);
        return queryResult;
    }
}
