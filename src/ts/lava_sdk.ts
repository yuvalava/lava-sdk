import { createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl, QueryClientsResponse, QueryGetPairingRequest, QueryGetPairingResponse } from "../codec/pairing/query"; // Replace with your own Msg import
import { RelayerClientImpl, RelayRequest } from "../codec/pairing/relay"
import { Endpoint } from "../codec/epochstorage/endpoint"
import { DirectSecp256k1HdWallet, Registry,AccountData } from "@cosmjs/proto-signing";


const lavaPrefix = "lava@"
export class LavaPbClient {
    private tmClient: any;
    private queryClient: any;
    private rpcClient: any;
    private endpoint: string;
    private queryService: QueryClientImpl | Error;
    private chainID: string;
    private mnemonic: string;
    private wallet: DirectSecp256k1HdWallet | Error;
    private apiInterface: string;
    constructor(endpoint: string, chainID: string, mnemonic: string, apiInterface: string) {
        this.endpoint = endpoint;
        this.tmClient = undefined; 
        this.queryClient = undefined;
        this.rpcClient = undefined;
        this.queryService = new Error("queryService was not initialized");
        this.chainID = chainID;
        this.apiInterface = apiInterface;
        this.mnemonic = mnemonic;
        this.wallet = new Error("wallet was not initialized");
    }
    async init() {
        this.tmClient = (await Tendermint34Client.connect(this.endpoint));
        this.queryClient = new QueryClient(this.tmClient);
        this.rpcClient = createProtobufRpcClient(this.queryClient);
        this.queryService = new QueryClientImpl(this.rpcClient);
        this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic,{ prefix: lavaPrefix });
    }
    async getConsumerAccount(): Promise<AccountData | Error> {
        if (this.wallet instanceof Error) {return this.wallet};
        var accountZero = (await this.wallet.getAccounts())[0];
        return accountZero;
    }
    async getPairingClients(): Promise<QueryClientsResponse | Error> {
        if (this.queryService instanceof Error) {return this.queryService};
        const queryResult = await this.queryService.Clients({chainID: this.chainID});
        return queryResult;
    }
    private async getPairingFromChain(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse | Error> {
        if (this.queryService instanceof Error) {return this.queryService};
        const queryResult = await this.queryService.GetPairing(request);
        return queryResult;
    }
    async getPairing(): Promise<any | Error> {
        let account = (await this.getConsumerAccount());
        if (account instanceof Error) {return account};
        let request = {
            chainID: this.chainID,
            client: account.address,
        };
        let res = (await this.getPairingFromChain(request));
        if (res instanceof Error) {return res};
        let providers = res.providers;
        for (let provider of providers) {
            if (provider.endpoints.length == 0) {
                console.log("skipping provider with no endpoints", provider.address, provider.chain)
                continue
            }

            let relevantEndpoints = []
            for (let endpoint of provider.endpoints) { 
                if (endpoint.useType == this.apiInterface) {
                    relevantEndpoints.push(endpoint)
                }
            }

            if (relevantEndpoints.length == 0) {
                console.log("skipping provider, No relevant endpoints for apiInterface", provider.address, provider.chain)
                continue
            }
            let maxCuForUser // getMaxCuForUser. 
            

        }


        return -1
    }
    async getRelay(relayRequest: RelayRequest) {
        const relayerClient = new RelayerClientImpl(this.rpcClient);
        const relayerResult = await relayerClient.Relay(relayRequest);
        console.log("Result:",relayerResult);
        return relayerResult;
    }
}
