// package: 
// file: badge.proto

import * as jspb from "google-protobuf";

export class GenerateBadgeRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getProjectKey(): string;
  setProjectKey(value: string): void;

  hasChainId(): boolean;
  clearChainId(): void;
  getChainId(): string;
  setChainId(value: string): void;

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
    userId: string,
    projectKey: string,
    chainId: string,
  }
}

export class GenerateBadgeResponse extends jspb.Message {
  getAllowedCu(): number;
  setAllowedCu(value: number): void;

  getEpoch(): number;
  setEpoch(value: number): void;

  getPublicKey(): string;
  setPublicKey(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  clearPolicyRestrictionsList(): void;
  getPolicyRestrictionsList(): Array<PolicyRestrictions>;
  setPolicyRestrictionsList(value: Array<PolicyRestrictions>): void;
  addPolicyRestrictions(value?: PolicyRestrictions, index?: number): PolicyRestrictions;

  clearPairingListList(): void;
  getPairingListList(): Array<PairingList>;
  setPairingListList(value: Array<PairingList>): void;
  addPairingList(value?: PairingList, index?: number): PairingList;

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
    allowedCu: number,
    epoch: number,
    publicKey: string,
    userId: string,
    sessionId: string,
    signature: Uint8Array | string,
    policyRestrictionsList: Array<PolicyRestrictions.AsObject>,
    pairingListList: Array<PairingList.AsObject>,
  }
}

export class PolicyRestrictions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRestrictions): PolicyRestrictions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRestrictions;
  static deserializeBinaryFromReader(message: PolicyRestrictions, reader: jspb.BinaryReader): PolicyRestrictions;
}

export namespace PolicyRestrictions {
  export type AsObject = {
  }
}

export class PairingList extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getGeolocation(): number;
  setGeolocation(value: number): void;

  getChain(): string;
  setChain(value: string): void;

  getVrfpk(): string;
  setVrfpk(value: string): void;

  getMoniker(): string;
  setMoniker(value: string): void;

  clearEndpointsList(): void;
  getEndpointsList(): Array<Endpoint>;
  setEndpointsList(value: Array<Endpoint>): void;
  addEndpoints(value?: Endpoint, index?: number): Endpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PairingList.AsObject;
  static toObject(includeInstance: boolean, msg: PairingList): PairingList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PairingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PairingList;
  static deserializeBinaryFromReader(message: PairingList, reader: jspb.BinaryReader): PairingList;
}

export namespace PairingList {
  export type AsObject = {
    address: string,
    geolocation: number,
    chain: string,
    vrfpk: string,
    moniker: string,
    endpointsList: Array<Endpoint.AsObject>,
  }
}

export class Endpoint extends jspb.Message {
  getIpPort(): string;
  setIpPort(value: string): void;

  getUsetype(): string;
  setUsetype(value: string): void;

  getGeolocation(): number;
  setGeolocation(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoint;
  static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
  export type AsObject = {
    ipPort: string,
    usetype: string,
    geolocation: number,
  }
}

