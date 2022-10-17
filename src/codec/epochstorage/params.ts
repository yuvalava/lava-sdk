/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lavanet.lava.epochstorage";

/** Params defines the parameters for the module. */
export interface Params {
  unstakeHoldBlocks: Long;
  epochBlocks: Long;
  epochsToSave: Long;
  latestParamChange: Long;
}

function createBaseParams(): Params {
  return {
    unstakeHoldBlocks: Long.UZERO,
    epochBlocks: Long.UZERO,
    epochsToSave: Long.UZERO,
    latestParamChange: Long.UZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.unstakeHoldBlocks.isZero()) {
      writer.uint32(8).uint64(message.unstakeHoldBlocks);
    }
    if (!message.epochBlocks.isZero()) {
      writer.uint32(16).uint64(message.epochBlocks);
    }
    if (!message.epochsToSave.isZero()) {
      writer.uint32(24).uint64(message.epochsToSave);
    }
    if (!message.latestParamChange.isZero()) {
      writer.uint32(32).uint64(message.latestParamChange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unstakeHoldBlocks = reader.uint64() as Long;
          break;
        case 2:
          message.epochBlocks = reader.uint64() as Long;
          break;
        case 3:
          message.epochsToSave = reader.uint64() as Long;
          break;
        case 4:
          message.latestParamChange = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      unstakeHoldBlocks: isSet(object.unstakeHoldBlocks) ? Long.fromValue(object.unstakeHoldBlocks) : Long.UZERO,
      epochBlocks: isSet(object.epochBlocks) ? Long.fromValue(object.epochBlocks) : Long.UZERO,
      epochsToSave: isSet(object.epochsToSave) ? Long.fromValue(object.epochsToSave) : Long.UZERO,
      latestParamChange: isSet(object.latestParamChange) ? Long.fromValue(object.latestParamChange) : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unstakeHoldBlocks !== undefined &&
      (obj.unstakeHoldBlocks = (message.unstakeHoldBlocks || Long.UZERO).toString());
    message.epochBlocks !== undefined && (obj.epochBlocks = (message.epochBlocks || Long.UZERO).toString());
    message.epochsToSave !== undefined && (obj.epochsToSave = (message.epochsToSave || Long.UZERO).toString());
    message.latestParamChange !== undefined &&
      (obj.latestParamChange = (message.latestParamChange || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.unstakeHoldBlocks = (object.unstakeHoldBlocks !== undefined && object.unstakeHoldBlocks !== null)
      ? Long.fromValue(object.unstakeHoldBlocks)
      : Long.UZERO;
    message.epochBlocks = (object.epochBlocks !== undefined && object.epochBlocks !== null)
      ? Long.fromValue(object.epochBlocks)
      : Long.UZERO;
    message.epochsToSave = (object.epochsToSave !== undefined && object.epochsToSave !== null)
      ? Long.fromValue(object.epochsToSave)
      : Long.UZERO;
    message.latestParamChange = (object.latestParamChange !== undefined && object.latestParamChange !== null)
      ? Long.fromValue(object.latestParamChange)
      : Long.UZERO;
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
