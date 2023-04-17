import { ConsumerSessionWithProvider } from "../types/types";
import { RelayReply, RelaySession, RelayPrivateData } from "../pairing/relay_pb";
declare class Relayer {
    private chainID;
    private privKey;
    private lavaChainId;
    constructor(chainID: string, privKey: string, lavaChainId: string);
    sendRelay(options: SendRelayOptions, consumerProviderSession: ConsumerSessionWithProvider, cuSum: number, apiInterface: string): Promise<RelayReply>;
    byteArrayToString: (byteArray: Uint8Array) => string;
    signRelay(request: RelaySession, privKey: string): Promise<Uint8Array>;
    calculateContentHashForRelayData(relayRequestData: RelayPrivateData): Uint8Array;
    convertRequestedBlockToUint8Array(requestBlock: number): Uint8Array;
    encodeUtf8(str: string): Uint8Array;
    concatUint8Arrays(arrays: Uint8Array[]): Uint8Array;
    prepareRequest(request: RelaySession): Uint8Array;
}
/**
 * Options for send relay method.
 */
interface SendRelayOptions {
    data: string;
    url: string;
    connectionType: string;
}
export default Relayer;
