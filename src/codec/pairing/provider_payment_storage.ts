/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UniquePaymentStorageClientProvider } from "./unique_payment_storage_client_provider";

export const protobufPackage = "lavanet.lava.pairing";

export interface ProviderPaymentStorage {
  index: string;
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider[];
  epoch: Long;
  unresponsivenessComplaints: string[];
}

function createBaseProviderPaymentStorage(): ProviderPaymentStorage {
  return { index: "", uniquePaymentStorageClientProvider: [], epoch: Long.UZERO, unresponsivenessComplaints: [] };
}

export const ProviderPaymentStorage = {
  encode(message: ProviderPaymentStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.uniquePaymentStorageClientProvider) {
      UniquePaymentStorageClientProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }
    for (const v of message.unresponsivenessComplaints) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderPaymentStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderPaymentStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.uniquePaymentStorageClientProvider.push(
            UniquePaymentStorageClientProvider.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.epoch = reader.uint64() as Long;
          break;
        case 4:
          message.unresponsivenessComplaints.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProviderPaymentStorage {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      uniquePaymentStorageClientProvider: Array.isArray(object?.uniquePaymentStorageClientProvider)
        ? object.uniquePaymentStorageClientProvider.map((e: any) => UniquePaymentStorageClientProvider.fromJSON(e))
        : [],
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      unresponsivenessComplaints: Array.isArray(object?.unresponsivenessComplaints)
        ? object.unresponsivenessComplaints.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ProviderPaymentStorage): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.uniquePaymentStorageClientProvider) {
      obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider.map((e) =>
        e ? UniquePaymentStorageClientProvider.toJSON(e) : undefined
      );
    } else {
      obj.uniquePaymentStorageClientProvider = [];
    }
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    if (message.unresponsivenessComplaints) {
      obj.unresponsivenessComplaints = message.unresponsivenessComplaints.map((e) => e);
    } else {
      obj.unresponsivenessComplaints = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProviderPaymentStorage>, I>>(object: I): ProviderPaymentStorage {
    const message = createBaseProviderPaymentStorage();
    message.index = object.index ?? "";
    message.uniquePaymentStorageClientProvider =
      object.uniquePaymentStorageClientProvider?.map((e) => UniquePaymentStorageClientProvider.fromPartial(e)) || [];
    message.epoch = (object.epoch !== undefined && object.epoch !== null) ? Long.fromValue(object.epoch) : Long.UZERO;
    message.unresponsivenessComplaints = object.unresponsivenessComplaints?.map((e) => e) || [];
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
