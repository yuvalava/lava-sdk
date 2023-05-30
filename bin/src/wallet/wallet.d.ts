import { AccountData } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/launchpad";
declare class LavaWallet {
    private wallet;
    private privKey;
    constructor(privKey: string);
    init(): Promise<void>;
    getConsumerAccount(): Promise<AccountData>;
    printAccount(AccountData: AccountData): void;
}
export declare function createWallet(privKey: string): Promise<LavaWallet>;
interface AccountDataWithPrivkey extends AccountData {
    readonly privkey: Uint8Array;
}
export declare function createDynamicWallet(): Promise<Secp256k1HdWallet>;
export declare function getWalletPrivateKey(prefix: string, walletMnemonic: string): Promise<AccountDataWithPrivkey>;
export declare function rawSecp256k1PubkeyToRawAddress(pubkeyData: Uint8Array): Uint8Array;
export declare function byteArrayToString(byteArray: Uint8Array): string;
export {};
