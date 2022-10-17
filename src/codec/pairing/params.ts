/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lavanet.lava.pairing";

/** Params defines the parameters for the module. */
export interface Params {
  minStakeProvider: string;
  minStakeClient: string;
  mintCoinsPerCU: string;
  burnCoinsPerCU: string;
  fraudStakeSlashingFactor: string;
  fraudSlashingAmount: Long;
  servicersToPairCount: Long;
  epochBlocksOverlap: Long;
  stakeToMaxCUList: string;
  unpayLimit: string;
  slashLimit: string;
  dataReliabilityReward: string;
  QoSWeight: string;
}

function createBaseParams(): Params {
  return {
    minStakeProvider: "",
    minStakeClient: "",
    mintCoinsPerCU: "",
    burnCoinsPerCU: "",
    fraudStakeSlashingFactor: "",
    fraudSlashingAmount: Long.UZERO,
    servicersToPairCount: Long.UZERO,
    epochBlocksOverlap: Long.UZERO,
    stakeToMaxCUList: "",
    unpayLimit: "",
    slashLimit: "",
    dataReliabilityReward: "",
    QoSWeight: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minStakeProvider !== "") {
      writer.uint32(10).string(message.minStakeProvider);
    }
    if (message.minStakeClient !== "") {
      writer.uint32(18).string(message.minStakeClient);
    }
    if (message.mintCoinsPerCU !== "") {
      writer.uint32(26).string(message.mintCoinsPerCU);
    }
    if (message.burnCoinsPerCU !== "") {
      writer.uint32(34).string(message.burnCoinsPerCU);
    }
    if (message.fraudStakeSlashingFactor !== "") {
      writer.uint32(42).string(message.fraudStakeSlashingFactor);
    }
    if (!message.fraudSlashingAmount.isZero()) {
      writer.uint32(48).uint64(message.fraudSlashingAmount);
    }
    if (!message.servicersToPairCount.isZero()) {
      writer.uint32(56).uint64(message.servicersToPairCount);
    }
    if (!message.epochBlocksOverlap.isZero()) {
      writer.uint32(64).uint64(message.epochBlocksOverlap);
    }
    if (message.stakeToMaxCUList !== "") {
      writer.uint32(74).string(message.stakeToMaxCUList);
    }
    if (message.unpayLimit !== "") {
      writer.uint32(82).string(message.unpayLimit);
    }
    if (message.slashLimit !== "") {
      writer.uint32(90).string(message.slashLimit);
    }
    if (message.dataReliabilityReward !== "") {
      writer.uint32(98).string(message.dataReliabilityReward);
    }
    if (message.QoSWeight !== "") {
      writer.uint32(106).string(message.QoSWeight);
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
          message.minStakeProvider = reader.string();
          break;
        case 2:
          message.minStakeClient = reader.string();
          break;
        case 3:
          message.mintCoinsPerCU = reader.string();
          break;
        case 4:
          message.burnCoinsPerCU = reader.string();
          break;
        case 5:
          message.fraudStakeSlashingFactor = reader.string();
          break;
        case 6:
          message.fraudSlashingAmount = reader.uint64() as Long;
          break;
        case 7:
          message.servicersToPairCount = reader.uint64() as Long;
          break;
        case 8:
          message.epochBlocksOverlap = reader.uint64() as Long;
          break;
        case 9:
          message.stakeToMaxCUList = reader.string();
          break;
        case 10:
          message.unpayLimit = reader.string();
          break;
        case 11:
          message.slashLimit = reader.string();
          break;
        case 12:
          message.dataReliabilityReward = reader.string();
          break;
        case 13:
          message.QoSWeight = reader.string();
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
      minStakeProvider: isSet(object.minStakeProvider) ? String(object.minStakeProvider) : "",
      minStakeClient: isSet(object.minStakeClient) ? String(object.minStakeClient) : "",
      mintCoinsPerCU: isSet(object.mintCoinsPerCU) ? String(object.mintCoinsPerCU) : "",
      burnCoinsPerCU: isSet(object.burnCoinsPerCU) ? String(object.burnCoinsPerCU) : "",
      fraudStakeSlashingFactor: isSet(object.fraudStakeSlashingFactor) ? String(object.fraudStakeSlashingFactor) : "",
      fraudSlashingAmount: isSet(object.fraudSlashingAmount) ? Long.fromValue(object.fraudSlashingAmount) : Long.UZERO,
      servicersToPairCount: isSet(object.servicersToPairCount)
        ? Long.fromValue(object.servicersToPairCount)
        : Long.UZERO,
      epochBlocksOverlap: isSet(object.epochBlocksOverlap) ? Long.fromValue(object.epochBlocksOverlap) : Long.UZERO,
      stakeToMaxCUList: isSet(object.stakeToMaxCUList) ? String(object.stakeToMaxCUList) : "",
      unpayLimit: isSet(object.unpayLimit) ? String(object.unpayLimit) : "",
      slashLimit: isSet(object.slashLimit) ? String(object.slashLimit) : "",
      dataReliabilityReward: isSet(object.dataReliabilityReward) ? String(object.dataReliabilityReward) : "",
      QoSWeight: isSet(object.QoSWeight) ? String(object.QoSWeight) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minStakeProvider !== undefined && (obj.minStakeProvider = message.minStakeProvider);
    message.minStakeClient !== undefined && (obj.minStakeClient = message.minStakeClient);
    message.mintCoinsPerCU !== undefined && (obj.mintCoinsPerCU = message.mintCoinsPerCU);
    message.burnCoinsPerCU !== undefined && (obj.burnCoinsPerCU = message.burnCoinsPerCU);
    message.fraudStakeSlashingFactor !== undefined && (obj.fraudStakeSlashingFactor = message.fraudStakeSlashingFactor);
    message.fraudSlashingAmount !== undefined &&
      (obj.fraudSlashingAmount = (message.fraudSlashingAmount || Long.UZERO).toString());
    message.servicersToPairCount !== undefined &&
      (obj.servicersToPairCount = (message.servicersToPairCount || Long.UZERO).toString());
    message.epochBlocksOverlap !== undefined &&
      (obj.epochBlocksOverlap = (message.epochBlocksOverlap || Long.UZERO).toString());
    message.stakeToMaxCUList !== undefined && (obj.stakeToMaxCUList = message.stakeToMaxCUList);
    message.unpayLimit !== undefined && (obj.unpayLimit = message.unpayLimit);
    message.slashLimit !== undefined && (obj.slashLimit = message.slashLimit);
    message.dataReliabilityReward !== undefined && (obj.dataReliabilityReward = message.dataReliabilityReward);
    message.QoSWeight !== undefined && (obj.QoSWeight = message.QoSWeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minStakeProvider = object.minStakeProvider ?? "";
    message.minStakeClient = object.minStakeClient ?? "";
    message.mintCoinsPerCU = object.mintCoinsPerCU ?? "";
    message.burnCoinsPerCU = object.burnCoinsPerCU ?? "";
    message.fraudStakeSlashingFactor = object.fraudStakeSlashingFactor ?? "";
    message.fraudSlashingAmount = (object.fraudSlashingAmount !== undefined && object.fraudSlashingAmount !== null)
      ? Long.fromValue(object.fraudSlashingAmount)
      : Long.UZERO;
    message.servicersToPairCount = (object.servicersToPairCount !== undefined && object.servicersToPairCount !== null)
      ? Long.fromValue(object.servicersToPairCount)
      : Long.UZERO;
    message.epochBlocksOverlap = (object.epochBlocksOverlap !== undefined && object.epochBlocksOverlap !== null)
      ? Long.fromValue(object.epochBlocksOverlap)
      : Long.UZERO;
    message.stakeToMaxCUList = object.stakeToMaxCUList ?? "";
    message.unpayLimit = object.unpayLimit ?? "";
    message.slashLimit = object.slashLimit ?? "";
    message.dataReliabilityReward = object.dataReliabilityReward ?? "";
    message.QoSWeight = object.QoSWeight ?? "";
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
