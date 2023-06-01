// package: lavanet.lava.pairing
// file: pairing/badges.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as epochstorage_stake_entry_pb from "../epochstorage/stake_entry_pb";

export class Badge extends jspb.Message {
  getCuAllocation(): number;
  setCuAllocation(value: number): void;

  getEpoch(): number;
  setEpoch(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getLavaChainId(): string;
  setLavaChainId(value: string): void;

  getProjectSig(): Uint8Array | string;
  getProjectSig_asU8(): Uint8Array;
  getProjectSig_asB64(): string;
  setProjectSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Badge.AsObject;
  static toObject(includeInstance: boolean, msg: Badge): Badge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Badge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Badge;
  static deserializeBinaryFromReader(message: Badge, reader: jspb.BinaryReader): Badge;
}

export namespace Badge {
  export type AsObject = {
    cuAllocation: number,
    epoch: number,
    address: string,
    lavaChainId: string,
    projectSig: Uint8Array | string,
  }
}

export class GenerateBadgeRequest extends jspb.Message {
  getBadgeAddress(): string;
  setBadgeAddress(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getSpecId(): string;
  setSpecId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBadgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBadgeRequest): GenerateBadgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateBadgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBadgeRequest;
  static deserializeBinaryFromReader(message: GenerateBadgeRequest, reader: jspb.BinaryReader): GenerateBadgeRequest;
}

export namespace GenerateBadgeRequest {
  export type AsObject = {
    badgeAddress: string,
    projectId: string,
    specId: string,
  }
}

export class GenerateBadgeResponse extends jspb.Message {
  hasBadge(): boolean;
  clearBadge(): void;
  getBadge(): Badge | undefined;
  setBadge(value?: Badge): void;

  clearPairingListList(): void;
  getPairingListList(): Array<epochstorage_stake_entry_pb.StakeEntry>;
  setPairingListList(value: Array<epochstorage_stake_entry_pb.StakeEntry>): void;
  addPairingList(value?: epochstorage_stake_entry_pb.StakeEntry, index?: number): epochstorage_stake_entry_pb.StakeEntry;

  getBadgeSignerAddress(): string;
  setBadgeSignerAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBadgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBadgeResponse): GenerateBadgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateBadgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBadgeResponse;
  static deserializeBinaryFromReader(message: GenerateBadgeResponse, reader: jspb.BinaryReader): GenerateBadgeResponse;
}

export namespace GenerateBadgeResponse {
  export type AsObject = {
    badge?: Badge.AsObject,
    pairingListList: Array<epochstorage_stake_entry_pb.StakeEntry.AsObject>,
    badgeSignerAddress: string,
  }
}

