import { createWallet, createDynamicWallet, LavaWallet } from "../wallet/wallet";
import SDKErrors from "./errors";
import { AccountData } from "@cosmjs/proto-signing";
import Relayer from "../relayer/relayer";
import { fetchBadge } from "../badge/fetchBadge"
import { RelayReply } from "../pairing/relay_pb";
import { SessionManager, ConsumerSessionWithProvider } from "../types/types";
import {
  isValidChainID,
  fetchRpcInterface,
  isNetworkValid,
} from "../util/chains";
import { LavaProviders } from "../lavaOverLava/providers";
import {
  LAVA_CHAIN_ID,
  DEFAULT_LAVA_PAIRING_NETWORK,
  DEFAULT_GEOLOCATION,
  DEFAULT_LAVA_CHAINID,
} from "../config/default";
import { QueryShowAllChainsResponse } from "../codec/spec/query";

export class LavaSDK {
  private privKey: string;
  private badge: { badgeServerAddress: string; projectId: string };
  private isBadge: boolean; // isBadge=false if privKey defined, isBadge=true if badge is defined
  private chainID: string;
  private rpcInterface: string;
  private network: string;
  private pairingListConfig: string;
  private geolocation: string;
  private lavaChainId: string;

  private lavaProviders: LavaProviders | Error;
  private account: AccountData | Error;
  private relayer: Relayer | Error;

  private activeSessionManager: SessionManager | Error;

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
    const { privateKey, badge, chainID, rpcInterface } = options;
    let { pairingListConfig, network, geolocation, lavaChainId } = options;

    // If network is not defined use default network
    network = network || DEFAULT_LAVA_PAIRING_NETWORK;

    // Validate network
    if (!isNetworkValid(network)) {
      throw SDKErrors.errNetworkUnsupported;
    }

    // if lava chain id is not defined use default
    lavaChainId = lavaChainId || DEFAULT_LAVA_CHAINID;

    // If geolocation is not defined use default geolocation
    geolocation = geolocation || DEFAULT_GEOLOCATION;

    // If lava pairing config not defined set as empty
    pairingListConfig = pairingListConfig || "";

    if (!badge && !privateKey) {
      throw SDKErrors.errPrivKeyAndBadgeNotInitialized;
    } else if (badge && privateKey) {
      throw SDKErrors.errPrivKeyAndBadgeBothInitialized;
    }

    // Initialize local attributes
    this.chainID = chainID;
    this.rpcInterface = rpcInterface ? rpcInterface : "";
    this.privKey = privateKey ? privateKey : "";
    this.badge = badge ? badge : { badgeServerAddress: "", projectId: "" };
    this.network = network;
    this.geolocation = geolocation;
    this.lavaChainId = lavaChainId;
    this.pairingListConfig = pairingListConfig;
    this.account = SDKErrors.errAccountNotInitialized;
    this.relayer = SDKErrors.errRelayerServiceNotInitialized;
    this.lavaProviders = SDKErrors.errLavaProvidersNotInitialized;
    this.activeSessionManager = SDKErrors.errSessionNotInitialized;
    this.isBadge = Boolean(badge);

    // Init sdk
    return (async (): Promise<LavaSDK> => {
      await this.init();

      return this;
    })() as unknown as LavaSDK;
  }

  private async init() {
    let wallet: LavaWallet
    if (this.isBadge) {
      const { wallet, privKey } = await createDynamicWallet();
      const walletAddress = (await wallet.getConsumerAccount()).address
      console.log("walletAddress:", walletAddress)
      const badgeResponse = await fetchBadge(this.badge.badgeServerAddress, walletAddress, this.badge.projectId)
      console.log("badgeResponse: ", badgeResponse)

      // parsing badgeResponse
      const badge = badgeResponse.getBadge()
      const badgeSignerAddress = badgeResponse.getBadgeSignerAddress()
      const badgeUser = badge?.getAddress()
      console.log("badgeExtracted: ", badge)
      console.log("badgeSigner: ", badgeSignerAddress)
      console.log("badgeSignerAddress: ", badgeUser)

      // create relayer with badge user's private key
      const lavaRelayer = new Relayer(
        LAVA_CHAIN_ID,
        privKey,
        this.lavaChainId,
        badge,
      );
      console.log('lavaRelayer with BADGE: ', lavaRelayer)

      // Create new instance of lava providers
      const lavaProviders = await new LavaProviders(
        badgeSignerAddress,
        this.network,
        lavaRelayer,
        this.geolocation
      );
      console.log('lavaProviders with BADGE: ', lavaProviders)

      // Init lava providers
      await lavaProviders.init(this.pairingListConfig);

      console.log('lavaProviders after init with BADGE: ', lavaProviders)

      const sendRelayOptions = {
        data: this.generateRPCData("abci_query", [
          "/lavanet.lava.spec.Query/ShowAllChains",
          "",
          "0",
          false,
        ]),
        url: "",
        connectionType: "",
      };

      const info = await lavaProviders.SendRelayWithRetry(
        sendRelayOptions,
        lavaProviders.GetNextLavaProvider(),
        10,
        "tendermintrpc"
      );
      console.log("info with BADGE: ", info)

      const byteArrayResponse = this.base64ToUint8Array(
        info.result.response.value
      );
      console.log("byteArrayResponse with BADGE: ", byteArrayResponse)


      const parsedChainList =
        QueryShowAllChainsResponse.decode(byteArrayResponse);

      console.log("parsedChainList with BADGE: ", parsedChainList)
      // // Validate chainID
      // if (!isValidChainID(this.chainID, parsedChainList)) {
      //   throw SDKErrors.errChainIDUnsupported;
      // }

      // // If rpc is not defined use default for specified chainID
      // this.rpcInterface =
      //   this.rpcInterface || fetchRpcInterface(this.chainID, parsedChainList);

      // // Save lava providers as local attribute
      // this.lavaProviders = lavaProviders;

      // // Get pairing list for current epoch
      // this.activeSessionManager = await this.lavaProviders.getSession(
      //   this.chainID,
      //   this.rpcInterface
      // );

      // // Create relayer for querying network
      // this.relayer = new Relayer(this.chainID, this.privKey, this.lavaChainId);

    } else {
      wallet = await createWallet(this.privKey);
      // Get account from wallet
      this.account = await wallet.getConsumerAccount();
      console.log("this.account:", this.account.address)

      //
      // TODO: CARRY THIS OUTSIDE OF THE ELSE BLOCK
      //

      // Init relayer for lava providers
      const lavaRelayer = new Relayer(
        LAVA_CHAIN_ID,
        this.privKey,
        this.lavaChainId
      );
      console.log('lavaRelayer: ', lavaRelayer)
      // Create new instance of lava providers
      const lavaProviders = await new LavaProviders(
        this.account.address,
        this.network,
        lavaRelayer,
        this.geolocation
      );
      console.log('lavaProviders: ', lavaProviders)


      // Init lava providers
      await lavaProviders.init(this.pairingListConfig);
      console.log('lavaProviders after init: ', lavaProviders)

      const sendRelayOptions = {
        data: this.generateRPCData("abci_query", [
          "/lavanet.lava.spec.Query/ShowAllChains",
          "",
          "0",
          false,
        ]),
        url: "",
        connectionType: "",
      };

      const info = await lavaProviders.SendRelayWithRetry(
        sendRelayOptions,
        lavaProviders.GetNextLavaProvider(),
        10,
        "tendermintrpc"
      );
      console.log("info: ", info)

      const byteArrayResponse = this.base64ToUint8Array(
        info.result.response.value
      );
      console.log("byteArrayResponse: ", byteArrayResponse)

      const parsedChainList =
        QueryShowAllChainsResponse.decode(byteArrayResponse);

      console.log("parsedChainList: ", parsedChainList)

      // Validate chainID
      if (!isValidChainID(this.chainID, parsedChainList)) {
        throw SDKErrors.errChainIDUnsupported;
      }

      // If rpc is not defined use default for specified chainID
      this.rpcInterface =
        this.rpcInterface || fetchRpcInterface(this.chainID, parsedChainList);

      // Save lava providers as local attribute
      this.lavaProviders = lavaProviders;

      // Get pairing list for current epoch
      this.activeSessionManager = await this.lavaProviders.getSession(
        this.chainID,
        this.rpcInterface
      );
      console.log("this.activeSessionManager: ", this.activeSessionManager)

      // Create relayer for querying network
      this.relayer = new Relayer(this.chainID, this.privKey, this.lavaChainId);
      console.log("this.relayer: ", this.relayer)
    }

  }

  private async handleRpcRelay(options: SendRelayOptions): Promise<string> {
    try {
      if (this.rpcInterface === "rest") {
        throw SDKErrors.errRPCRelayMethodNotSupported;
      }
      // Extract attributes from options
      const { method, params } = options;

      // Get pairing list
      const pairingList = await this.getConsumerProviderSession();

      // Get cuSum for specified method
      const cuSum = this.getCuSumForMethod(method);

      const data = this.generateRPCData(method, params);

      // Check if relay was initialized
      if (this.relayer instanceof Error) {
        throw SDKErrors.errRelayerServiceNotInitialized;
      }

      // Construct send relay options
      const sendRelayOptions = {
        data: data,
        url: "",
        connectionType: this.rpcInterface === "jsonrpc" ? "POST" : "",
      };

      return await this.sendRelayWithRetries(
        sendRelayOptions,
        pairingList,
        cuSum
      );
    } catch (err) {
      throw err;
    }
  }

  private async handleRestRelay(
    options: SendRestRelayOptions
  ): Promise<string> {
    try {
      if (this.rpcInterface !== "rest") {
        throw SDKErrors.errRestRelayMethodNotSupported;
      }

      // Extract attributes from options
      const { method, url, data } = options;

      // Get pairing list
      const pairingList = await this.getConsumerProviderSession();

      // Get cuSum for specified method
      const cuSum = this.getCuSumForMethod(url);

      let query = "?";
      for (const key in data) {
        query = query + key + "=" + data[key] + "&";
      }

      // Construct send relay options
      const sendRelayOptions = {
        data: query,
        url: url,
        connectionType: method,
      };

      return await this.sendRelayWithRetries(
        sendRelayOptions,
        pairingList,
        cuSum
      );
    } catch (err) {
      throw err;
    }
  }

  // sendRelayWithRetries iterates over provider list and tries to send relay
  // if no provider return result it will result the error from the last provider
  private async sendRelayWithRetries(
    options: any,
    pairingList: ConsumerSessionWithProvider[],
    cuSum: number
  ) {
    // Check if relay was initialized
    if (this.relayer instanceof Error) {
      throw SDKErrors.errRelayerServiceNotInitialized;
    }
    let lastRelayResponse = null;

    for (let i = 0; i <= pairingList.length; i++) {
      try {
        // Send relay
        const relayResponse = await this.relayer.sendRelay(
          options,
          pairingList[i],
          cuSum,
          this.rpcInterface
        );

        // Return relay in json format
        return this.decodeRelayResponse(relayResponse);
      } catch (err) {
        // If error is instace of Error
        if (err instanceof Error) {
          // An error occurred during the sendRelay operation
          /*
          console.error(
            "Error during sendRelay: " + err.message,
            " from provider: " + pairingList[i].Session.Endpoint.Addr
          );
          */

          // Store the relay response
          lastRelayResponse = err;
        }
      }
    }

    // If an error occurred in all the operations, return the decoded response of the last operation
    throw lastRelayResponse;
  }

  /**
   * Send relay to network through providers.
   *
   * @async
   * @param options The options to use for sending relay.
   *
   * @returns A promise that resolves when the relay response has been returned, and returns a JSON string
   *
   */
  async sendRelay(
    options: SendRelayOptions | SendRestRelayOptions
  ): Promise<string> {
    if (this.isRest(options)) return await this.handleRestRelay(options);
    return await this.handleRpcRelay(options);
  }

  private generateRPCData(method: string, params: Array<any>): string {
    const stringifyMethod = JSON.stringify(method);
    const stringifyParam = JSON.stringify(params, (key, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    });
    // TODO make id changable
    return (
      '{"jsonrpc": "2.0", "id": 1, "method": ' +
      stringifyMethod +
      ', "params": ' +
      stringifyParam +
      "}"
    );
  }

  private decodeRelayResponse(relayResponse: RelayReply): string {
    // Decode relay response
    const dec = new TextDecoder();
    const decodedResponse = dec.decode(relayResponse.getData_asU8());

    return decodedResponse;
  }

  private getCuSumForMethod(method: string): number {
    // Check if activeSession was initialized
    if (this.activeSessionManager instanceof Error) {
      throw SDKErrors.errSessionNotInitialized;
    }
    // get cuSum for specified method
    const cuSum = this.activeSessionManager.getCuSumFromApi(
      method,
      this.chainID
    );

    // if cuSum is undefiend method does not exists in spec
    if (cuSum == undefined) {
      throw SDKErrors.errMethodNotSupported;
    }

    return cuSum;
  }

  private async getConsumerProviderSession(): Promise<
    ConsumerSessionWithProvider[]
  > {
    // Check if lava providers were initialized
    if (this.lavaProviders instanceof Error) {
      throw SDKErrors.errLavaProvidersNotInitialized;
    }

    // Check if state tracker was initialized
    if (this.account instanceof Error) {
      throw SDKErrors.errAccountNotInitialized;
    }

    // Check if activeSessionManager was initialized
    if (this.activeSessionManager instanceof Error) {
      throw SDKErrors.errSessionNotInitialized;
    }

    // Check if new epoch has started
    if (this.newEpochStarted()) {
      this.activeSessionManager = await this.lavaProviders.getSession(
        this.chainID,
        this.rpcInterface
      );
    }

    // Return randomized pairing list
    return this.lavaProviders.pickRandomProviders(
      this.activeSessionManager.PairingList
    );
  }

  private newEpochStarted(): boolean {
    // Check if activeSession was initialized
    if (this.activeSessionManager instanceof Error) {
      throw SDKErrors.errSessionNotInitialized;
    }

    // Get current date and time
    const now = new Date();

    // Return if new epoch has started
    return now.getTime() > this.activeSessionManager.NextEpochStart.getTime();
  }

  private isRest(
    options: SendRelayOptions | SendRestRelayOptions
  ): options is SendRestRelayOptions {
    return (options as SendRestRelayOptions).url !== undefined;
  }

  private base64ToUint8Array = (str: string): Uint8Array => {
    const buffer = Buffer.from(str, "base64");

    return new Uint8Array(buffer);
  };
}

/**
 * Options for sending RPC relay.
 */
export interface SendRelayOptions {
  method: string; // Required: The RPC method to be called
  params: Array<any>; // Required: An array of parameters to be passed to the RPC method
}

/**
 * Options for sending Rest relay.
 */
export interface SendRestRelayOptions {
  method: string; // Required: The HTTP method to be used (e.g., "GET", "POST")
  url: string; // Required: The URL to send the request to
  // eslint-disable-next-line
  data?: Record<string, any>; // Optional: An object containing data to be sent in the request body (applicable for methods like "POST" and "PUT")
}

/**
 * Options for initializing the LavaSDK.
 */
export interface LavaSDKOptions {
  privateKey?: string; // Required: The private key of the staked Lava client for the specified chainID
  badge?: {
    badgeServerAddress: string;
    projectId: string;
  };
  chainID: string; // Required: The ID of the chain you want to query
  rpcInterface?: string; // Optional: The interface that will be used for sending relays
  pairingListConfig?: string; // Optional: The Lava pairing list config used for communicating with the Lava network
  network?: string; // Optional: The network from pairingListConfig to be used ["mainnet", "testnet"]
  geolocation?: string; // Optional: The geolocation to be used ["1" for North America, "2" for Europe ]
  lavaChainId?: string; // Optional: The Lava chain ID (default value for Lava Testnet)
}
