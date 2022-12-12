import { createWallet } from "../wallet/wallet";
import SDKErrors from "./errors";
import { AccountData } from "@cosmjs/proto-signing";
import Relayer from "../relayer/relayer";
import { StateTracker, createStateTracker } from "../stateTracker/stateTracker";
import { isValidChainID, fetchRpcInterface } from "../util/chains";
import { DEFAULT_LAVA_ENDPOINT } from "../config/default";

class LavaSDK {
  private lavaEndpoint: string;
  private privKey: string;
  private chainID: string;
  private rpcInterface: string;

  private stateTracker: StateTracker | Error;
  private account: AccountData | Error;
  private relayer: Relayer | Error;

  /**
   * Create Lava-SDK instance
   *
   * Use Lava-SDK for dAccess with a supported network. You can find a list of supported networks and their chain IDs at (url).
   *
   * @async
   * @param {LavaSDKOptions} options The options to use for initializing the LavaSDK.
   *
   * @returns A promise that resolves when the LavaSDK has been successfully initialized, returns LavaSDK object.
   */
  constructor(options: LavaSDKOptions) {
    // Extract attributes from options
    const { privateKey, chainID } = options;
    let { endpoint, rpcInterface } = options;

    // If lava endpoint is not set, use default
    endpoint = endpoint || DEFAULT_LAVA_ENDPOINT;

    // Validate chainID
    if (!isValidChainID(chainID)) {
      throw SDKErrors.errChainIDUnsupported;
    }

    // If the rpc is not defined used the default for specified chainID
    rpcInterface = rpcInterface || fetchRpcInterface(chainID);

    this.chainID = chainID;
    this.rpcInterface = rpcInterface;
    this.privKey = privateKey;
    this.lavaEndpoint = endpoint;

    this.account = SDKErrors.errAccountNotInitialized;
    this.relayer = SDKErrors.errRelayerServiceNotInitialized;
    this.stateTracker = SDKErrors.errStateTrackerServiceNotInitialized;

    return (async (): Promise<LavaSDK> => {
      await this.init();
      return this;
    })() as unknown as LavaSDK;
  }

  private async init() {
    // Create wallet
    const wallet = await createWallet(this.privKey);

    // Get account from wallet
    this.account = await wallet.getConsumerAccount();

    // Initialize state tracker
    this.stateTracker = await createStateTracker(this.lavaEndpoint);

    // Get active consumer session
    const consumerSession = await this.stateTracker.getConsumerSession(
      this.account,
      this.chainID,
      this.rpcInterface
    );

    // Create relayer
    this.relayer = new Relayer(consumerSession, this.chainID, this.privKey);
  }

  /**
   * Send relay to network through providers
   *
   * @async
   * @param {string} method - A string representing the RPC method name
   * @param {string[]} params - An array of strings representing the RPC parameters
   *
   * @returns A promise that resolves when the relay response has been returned, and returns a JSON string
   *
   */
  async sendRelay(method: string, params: string[]): Promise<string> {
    // Check if relayer was initialized
    if (this.relayer instanceof Error) {
      throw SDKErrors.errRelayerServiceNotInitialized;
    }

    // Check if state tracker was initialized
    if (this.stateTracker instanceof Error) {
      throw SDKErrors.errStateTrackerServiceNotInitialized;
    }

    // Check if account was initialized
    if (this.account instanceof Error) {
      throw SDKErrors.errAccountNotInitialized;
    }

    // For every relay get new current session
    // Todo in the future do this only on epoch change
    // And in the relay generate random session_id
    const consumerSession = await this.stateTracker.getConsumerSession(
      this.account,
      this.chainID,
      this.rpcInterface
    );

    this.relayer.setConsumerSession(consumerSession);

    // Send relay
    const relayResponse = await this.relayer.sendRelay(method, params);

    // Decode relay response
    const dec = new TextDecoder();
    const decodedResponse = dec.decode(relayResponse.getData_asU8());

    // Return relay in json format
    return decodedResponse;
  }
}

/**
 * Options for initializing the LavaSDK.
 */
interface LavaSDKOptions {
  privateKey: string;
  chainID: string;
  endpoint?: string;
  rpcInterface?: string;
}

export default LavaSDK;
