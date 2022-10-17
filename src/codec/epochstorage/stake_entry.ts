/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Endpoint } from "./endpoint";

export const protobufPackage = "lavanet.lava.epochstorage";

export interface StakeEntry {
  stake?: Coin;
  address: string;
  deadline: Long;
  endpoints: Endpoint[];
  geolocation: Long;
  chain: string;
  vrfpk: string;
}

function createBaseStakeEntry(): StakeEntry {
  return {
    stake: undefined,
    address: "",
    deadline: Long.UZERO,
    endpoints: [],
    geolocation: Long.UZERO,
    chain: "",
    vrfpk: "",
  };
}

export const StakeEntry = {
  encode(message: StakeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(24).uint64(message.deadline);
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.vrfpk !== "") {
      writer.uint32(58).string(message.vrfpk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.deadline = reader.uint64() as Long;
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.uint64() as Long;
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 7:
          message.vrfpk = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeEntry {
    return {
      stake: isSet(object.stake) ? Coin.fromJSON(object.stake) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      deadline: isSet(object.deadline) ? Long.fromValue(object.deadline) : Long.UZERO,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      geolocation: isSet(object.geolocation) ? Long.fromValue(object.geolocation) : Long.UZERO,
      chain: isSet(object.chain) ? String(object.chain) : "",
      vrfpk: isSet(object.vrfpk) ? String(object.vrfpk) : "",
    };
  },

  toJSON(message: StakeEntry): unknown {
    const obj: any = {};
    message.stake !== undefined && (obj.stake = message.stake ? Coin.toJSON(message.stake) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.deadline !== undefined && (obj.deadline = (message.deadline || Long.UZERO).toString());
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.geolocation !== undefined && (obj.geolocation = (message.geolocation || Long.UZERO).toString());
    message.chain !== undefined && (obj.chain = message.chain);
    message.vrfpk !== undefined && (obj.vrfpk = message.vrfpk);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeEntry>, I>>(object: I): StakeEntry {
    const message = createBaseStakeEntry();
    message.stake = (object.stake !== undefined && object.stake !== null) ? Coin.fromPartial(object.stake) : undefined;
    message.address = object.address ?? "";
    message.deadline = (object.deadline !== undefined && object.deadline !== null)
      ? Long.fromValue(object.deadline)
      : Long.UZERO;
    message.endpoints = object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    message.geolocation = (object.geolocation !== undefined && object.geolocation !== null)
      ? Long.fromValue(object.geolocation)
      : Long.UZERO;
    message.chain = object.chain ?? "";
    message.vrfpk = object.vrfpk ?? "";
    return message;
  },
};

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
