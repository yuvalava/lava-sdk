/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lavanet.lava.conflict";

export interface Provider {
  account: string;
  response: Uint8Array;
}

export interface Vote {
  Hash: Uint8Array;
  Result: Long;
}

export interface ConflictVote {
  index: string;
  clientAddress: string;
  voteDeadline: Long;
  voteStartBlock: Long;
  voteState: Long;
  chainID: string;
  apiUrl: string;
  requestData: Uint8Array;
  requestBlock: Long;
  firstProvider?: Provider;
  secondProvider?: Provider;
  votersHash: { [key: string]: Vote };
}

export interface ConflictVote_VotersHashEntry {
  key: string;
  value?: Vote;
}

function createBaseProvider(): Provider {
  return { account: "", response: new Uint8Array() };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.response = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      response: isSet(object.response) ? bytesFromBase64(object.response) : new Uint8Array(),
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.response !== undefined &&
      (obj.response = base64FromBytes(message.response !== undefined ? message.response : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.account = object.account ?? "";
    message.response = object.response ?? new Uint8Array();
    return message;
  },
};

function createBaseVote(): Vote {
  return { Hash: new Uint8Array(), Result: Long.ZERO };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Hash.length !== 0) {
      writer.uint32(10).bytes(message.Hash);
    }
    if (!message.Result.isZero()) {
      writer.uint32(16).int64(message.Result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Hash = reader.bytes();
          break;
        case 2:
          message.Result = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      Hash: isSet(object.Hash) ? bytesFromBase64(object.Hash) : new Uint8Array(),
      Result: isSet(object.Result) ? Long.fromValue(object.Result) : Long.ZERO,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.Hash !== undefined &&
      (obj.Hash = base64FromBytes(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    message.Result !== undefined && (obj.Result = (message.Result || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.Hash = object.Hash ?? new Uint8Array();
    message.Result = (object.Result !== undefined && object.Result !== null)
      ? Long.fromValue(object.Result)
      : Long.ZERO;
    return message;
  },
};

function createBaseConflictVote(): ConflictVote {
  return {
    index: "",
    clientAddress: "",
    voteDeadline: Long.UZERO,
    voteStartBlock: Long.UZERO,
    voteState: Long.ZERO,
    chainID: "",
    apiUrl: "",
    requestData: new Uint8Array(),
    requestBlock: Long.UZERO,
    firstProvider: undefined,
    secondProvider: undefined,
    votersHash: {},
  };
}

export const ConflictVote = {
  encode(message: ConflictVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.clientAddress !== "") {
      writer.uint32(18).string(message.clientAddress);
    }
    if (!message.voteDeadline.isZero()) {
      writer.uint32(24).uint64(message.voteDeadline);
    }
    if (!message.voteStartBlock.isZero()) {
      writer.uint32(32).uint64(message.voteStartBlock);
    }
    if (!message.voteState.isZero()) {
      writer.uint32(40).int64(message.voteState);
    }
    if (message.chainID !== "") {
      writer.uint32(50).string(message.chainID);
    }
    if (message.apiUrl !== "") {
      writer.uint32(58).string(message.apiUrl);
    }
    if (message.requestData.length !== 0) {
      writer.uint32(66).bytes(message.requestData);
    }
    if (!message.requestBlock.isZero()) {
      writer.uint32(72).uint64(message.requestBlock);
    }
    if (message.firstProvider !== undefined) {
      Provider.encode(message.firstProvider, writer.uint32(82).fork()).ldelim();
    }
    if (message.secondProvider !== undefined) {
      Provider.encode(message.secondProvider, writer.uint32(90).fork()).ldelim();
    }
    Object.entries(message.votersHash).forEach(([key, value]) => {
      ConflictVote_VotersHashEntry.encode({ key: key as any, value }, writer.uint32(106).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConflictVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConflictVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.clientAddress = reader.string();
          break;
        case 3:
          message.voteDeadline = reader.uint64() as Long;
          break;
        case 4:
          message.voteStartBlock = reader.uint64() as Long;
          break;
        case 5:
          message.voteState = reader.int64() as Long;
          break;
        case 6:
          message.chainID = reader.string();
          break;
        case 7:
          message.apiUrl = reader.string();
          break;
        case 8:
          message.requestData = reader.bytes();
          break;
        case 9:
          message.requestBlock = reader.uint64() as Long;
          break;
        case 10:
          message.firstProvider = Provider.decode(reader, reader.uint32());
          break;
        case 11:
          message.secondProvider = Provider.decode(reader, reader.uint32());
          break;
        case 13:
          const entry13 = ConflictVote_VotersHashEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.votersHash[entry13.key] = entry13.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConflictVote {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      clientAddress: isSet(object.clientAddress) ? String(object.clientAddress) : "",
      voteDeadline: isSet(object.voteDeadline) ? Long.fromValue(object.voteDeadline) : Long.UZERO,
      voteStartBlock: isSet(object.voteStartBlock) ? Long.fromValue(object.voteStartBlock) : Long.UZERO,
      voteState: isSet(object.voteState) ? Long.fromValue(object.voteState) : Long.ZERO,
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      apiUrl: isSet(object.apiUrl) ? String(object.apiUrl) : "",
      requestData: isSet(object.requestData) ? bytesFromBase64(object.requestData) : new Uint8Array(),
      requestBlock: isSet(object.requestBlock) ? Long.fromValue(object.requestBlock) : Long.UZERO,
      firstProvider: isSet(object.firstProvider) ? Provider.fromJSON(object.firstProvider) : undefined,
      secondProvider: isSet(object.secondProvider) ? Provider.fromJSON(object.secondProvider) : undefined,
      votersHash: isObject(object.votersHash)
        ? Object.entries(object.votersHash).reduce<{ [key: string]: Vote }>((acc, [key, value]) => {
          acc[key] = Vote.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ConflictVote): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.clientAddress !== undefined && (obj.clientAddress = message.clientAddress);
    message.voteDeadline !== undefined && (obj.voteDeadline = (message.voteDeadline || Long.UZERO).toString());
    message.voteStartBlock !== undefined && (obj.voteStartBlock = (message.voteStartBlock || Long.UZERO).toString());
    message.voteState !== undefined && (obj.voteState = (message.voteState || Long.ZERO).toString());
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.requestData !== undefined &&
      (obj.requestData = base64FromBytes(message.requestData !== undefined ? message.requestData : new Uint8Array()));
    message.requestBlock !== undefined && (obj.requestBlock = (message.requestBlock || Long.UZERO).toString());
    message.firstProvider !== undefined &&
      (obj.firstProvider = message.firstProvider ? Provider.toJSON(message.firstProvider) : undefined);
    message.secondProvider !== undefined &&
      (obj.secondProvider = message.secondProvider ? Provider.toJSON(message.secondProvider) : undefined);
    obj.votersHash = {};
    if (message.votersHash) {
      Object.entries(message.votersHash).forEach(([k, v]) => {
        obj.votersHash[k] = Vote.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConflictVote>, I>>(object: I): ConflictVote {
    const message = createBaseConflictVote();
    message.index = object.index ?? "";
    message.clientAddress = object.clientAddress ?? "";
    message.voteDeadline = (object.voteDeadline !== undefined && object.voteDeadline !== null)
      ? Long.fromValue(object.voteDeadline)
      : Long.UZERO;
    message.voteStartBlock = (object.voteStartBlock !== undefined && object.voteStartBlock !== null)
      ? Long.fromValue(object.voteStartBlock)
      : Long.UZERO;
    message.voteState = (object.voteState !== undefined && object.voteState !== null)
      ? Long.fromValue(object.voteState)
      : Long.ZERO;
    message.chainID = object.chainID ?? "";
    message.apiUrl = object.apiUrl ?? "";
    message.requestData = object.requestData ?? new Uint8Array();
    message.requestBlock = (object.requestBlock !== undefined && object.requestBlock !== null)
      ? Long.fromValue(object.requestBlock)
      : Long.UZERO;
    message.firstProvider = (object.firstProvider !== undefined && object.firstProvider !== null)
      ? Provider.fromPartial(object.firstProvider)
      : undefined;
    message.secondProvider = (object.secondProvider !== undefined && object.secondProvider !== null)
      ? Provider.fromPartial(object.secondProvider)
      : undefined;
    message.votersHash = Object.entries(object.votersHash ?? {}).reduce<{ [key: string]: Vote }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Vote.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseConflictVote_VotersHashEntry(): ConflictVote_VotersHashEntry {
  return { key: "", value: undefined };
}

export const ConflictVote_VotersHashEntry = {
  encode(message: ConflictVote_VotersHashEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Vote.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConflictVote_VotersHashEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConflictVote_VotersHashEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConflictVote_VotersHashEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Vote.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ConflictVote_VotersHashEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Vote.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConflictVote_VotersHashEntry>, I>>(object: I): ConflictVote_VotersHashEntry {
    const message = createBaseConflictVote_VotersHashEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Vote.fromPartial(object.value) : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
