import { createWallet } from "../wallet/wallet";
import SDKErrors from "./errors";
import { AccountData } from "@cosmjs/proto-signing";
import Relayer from "../relayer/relayer";
import { RelayReply } from "../proto/relay_pb";
import { StateTracker, createStateTracker } from "../stateTracker/stateTracker";
import { isValidChainID, fetchRpcInterface } from "../util/chains";

class LavaSDK {
  private lavaEndpoint: string;
  private privKey: string;
  private chainID: string;
  private rpcInterface: string;

  private stateTracker: StateTracker | Error;
  private account: AccountData | Error;
  private relayer: Relayer | Error;

  constructor(
    endpoint: string,
    chainID: string,
    rpcInterface: string,
    privKey: string
  ) {
    this.chainID = chainID;
    this.rpcInterface = rpcInterface;
    this.privKey = privKey;
    this.lavaEndpoint = endpoint;

    this.account = SDKErrors.errAccountNotInitialized;
    this.relayer = SDKErrors.errRelayerServiceNotInitialized;
    this.stateTracker = SDKErrors.errStateTrackerServiceNotInitialized;
  }

  /**
   * Init lava-SDK
   *
   * @async
   * After creating LavaSDK manually with new LavaSDK(...)
   * it needs to be initializes with object.init()
   * 
   * Better approach is not to do this manually but to use createLavaSDK method
   *
  */
  async init() {
    // Initialize wallet

    // Create wallet
    const wallet = await createWallet(this.privKey);

    // Get account from wallet
    this.account = await wallet.getConsumerAccount();

    // print account detail
    wallet.printAccount(this.account);

    // Initialize state tracker

    // Create state stracker
    this.stateTracker = await createStateTracker(this.lavaEndpoint);

    // Initialize relayer

    // Get current consumer session
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
   * @param {string} method - RPC method name
   * @param {string[]} params - RPC params
   * 
   * @returns Promise object represents json response
   *
  */
  async sendRelay(method: string, params: string[]): Promise<RelayReply> {
    // Check if account was initialized
    if (this.relayer instanceof Error) {
      throw SDKErrors.errRelayerServiceNotInitialized;
    }

    // Check if state tracker was initialized
    if (this.stateTracker instanceof Error) {
      throw SDKErrors.errStateTrackerServiceNotInitialized;
    }

    // Check if state tracker was initialized
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

    return relayResponse;
  }
}

/**
 * Create Lava-SDK instance
 *
 * Lava-SDK is used for dAccess with provided network
 * You can find all supported networks and there chainIDs
 * in the (url)
 *
 * @async
 * @param {string} privateKey - Private key of lava network staked client
 * @param {string} chainID - ChainID for the network you want to query
 * @param {string} endpoint - Lava network public rpc endpoint (default: http://public-rpc.lavanet.xyz:80/rpc/)
 * @param {?string} rpcInterface - rpcInterface of provider, it's optional so if not set for cosmos-chains it will be tendermintRPC and for evm chains jsonRPC
 * 
 * @returns Promise object represents LavaSDK object
 */
export async function createLavaSDK(
  privateKey: string,
  chainID: string,
  endpoint: string,
  rpcInterface?: string
): Promise<LavaSDK> {
  // Validate chainID
  if (!isValidChainID(chainID)) {
    throw SDKErrors.errChainIDUnsupported;
  }

  // If the rpc is not defined used default for specified chainID
  if (typeof rpcInterface === "undefined") {
    rpcInterface = fetchRpcInterface(chainID);
  }

  // Create lavaSDK
  const lavaSDK = new LavaSDK(endpoint, chainID, rpcInterface, privateKey);

  // Initialize lavaSDK
  await lavaSDK.init();

  return lavaSDK;
}
