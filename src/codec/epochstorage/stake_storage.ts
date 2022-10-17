/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StakeEntry } from "./stake_entry";

export const protobufPackage = "lavanet.lava.epochstorage";

export interface StakeStorage {
  index: string;
  stakeEntries: StakeEntry[];
}

function createBaseStakeStorage(): StakeStorage {
  return { index: "", stakeEntries: [] };
}

export const StakeStorage = {
  encode(message: StakeStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.stakeEntries) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stakeEntries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeStorage {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      stakeEntries: Array.isArray(object?.stakeEntries)
        ? object.stakeEntries.map((e: any) => StakeEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StakeStorage): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map((e) => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeStorage>, I>>(object: I): StakeStorage {
    const message = createBaseStakeStorage();
    message.index = object.index ?? "";
    message.stakeEntries = object.stakeEntries?.map((e) => StakeEntry.fromPartial(e)) || [];
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
