import { AccountData } from "@cosmjs/proto-signing";
import { Secp256k1Wallet } from "@cosmjs/amino";
import { Secp256k1HdWallet } from "@cosmjs/launchpad";
import WalletErrors from "./errors";
import Logger from "../logger/logger";
import { fromHex } from "@cosmjs/encoding";
import {
  Bip39,
  EnglishMnemonic,
  HdPath,
  pathToString,
  Random,
  Secp256k1,
  Secp256k1Keypair,
  sha256,
  Slip10,
  Slip10Curve,
  stringToPath,
  ripemd160,
  Slip10RawIndex
} from "@cosmjs/crypto";
import { toBech32 } from "@cosmjs/encoding";

// prefix for lava accounts
const lavaPrefix = "lava@";

class LavaWallet {
  private wallet: Secp256k1Wallet | Error;
  private privKey: string;

  constructor(privKey: string) {
    this.privKey = privKey;
    this.wallet = WalletErrors.errWalletNotInitialized;
  }

  // Initialize client
  async init() {
    try {
      this.wallet = await Secp256k1Wallet.fromKey(
        fromHex(this.privKey),
        lavaPrefix
      );
    } catch (err) {
      throw WalletErrors.errInvalidPrivateKey;
    }
  }

  // Get consumer account from the wallet
  async getConsumerAccount(): Promise<AccountData> {
    try {
      // Check if wallet was initialized
      if (this.wallet instanceof Error) {
        throw WalletErrors.errWalletNotInitialized;
      }

      // Fetch account
      const account = await this.wallet.getAccounts();

      // Check if zero account exists
      if (account[0] == undefined) {
        throw WalletErrors.errZeroAccountDoesNotExists;
      }

      // Return zero account from wallet
      return account[0];
    } catch (err) {
      throw err;
    }
  }

  // Print account details
  printAccount(AccountData: AccountData) {
    Logger.info("INFO:");
    Logger.info("Address: " + AccountData.address);
    Logger.info("Public key: " + AccountData.pubkey);
    Logger.emptyLine();
  }
}

export async function createWallet(privKey: string): Promise<LavaWallet> {
  // Create lavaSDK
  const wallet = new LavaWallet(privKey);

  // Initialize wallet
  await wallet.init();

  return wallet;
}

interface AccountDataWithPrivkey extends AccountData {
  readonly privkey: Uint8Array;
}


export async function createDynamicWallet(): Promise<Secp256k1HdWallet> {
  const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: 'lava@' });
  console.log("Wallet created with Mnemonic:", wallet.mnemonic);

  return wallet
}

export async function getWalletPrivateKey(prefix: string, walletMnemonic: string): Promise<AccountDataWithPrivkey> {
  const { privkey, pubkey } = await getKeyPair([Slip10RawIndex.normal(0)], walletMnemonic);
  const address = toBech32(prefix, rawSecp256k1PubkeyToRawAddress(pubkey));
  return {
    algo: "secp256k1",
    privkey: privkey,
    pubkey: pubkey,
    address: address,
  };
}

async function getKeyPair(hdPath: HdPath, walletMnemonic: string): Promise<Secp256k1Keypair> {
  const mnemonicChecked = new EnglishMnemonic(walletMnemonic);
  const seed = await Bip39.mnemonicToSeed(mnemonicChecked);
  const { privkey } = Slip10.derivePath(Slip10Curve.Secp256k1, seed, hdPath);
  const { pubkey } = await Secp256k1.makeKeypair(privkey);
  return {
    privkey: privkey,
    pubkey: Secp256k1.compressPubkey(pubkey),
  };
}

export function rawSecp256k1PubkeyToRawAddress(pubkeyData: Uint8Array): Uint8Array {
  if (pubkeyData.length !== 33) {
    throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${pubkeyData.length}`);
  }
  return ripemd160(sha256(pubkeyData));
}

export function byteArrayToString(byteArray: Uint8Array): string {
  let output = "";
  for (let i = 0; i < byteArray.length; i++) {
    const byte = byteArray[i];
    if (byte === 0x09) {
      output += "\\t";
    } else if (byte === 0x0a) {
      output += "\\n";
    } else if (byte === 0x0d) {
      output += "\\r";
    } else if (byte === 0x5c) {
      output += "\\\\";
    } else if (byte >= 0x20 && byte <= 0x7e) {
      output += String.fromCharCode(byte);
    } else {
      output += "\\" + byte.toString(8).padStart(3, "0");
    }
  }
  return output;
};