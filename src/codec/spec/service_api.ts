/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lavanet.lava.spec";

export enum parserFunc {
  EMPTY = 0,
  /** PARSE_BY_ARG - means parameters are ordered and flat expected areguments are: [param index] (example: PARAMS: [<#BlockNum>,"banana"]) */
  PARSE_BY_ARG = 1,
  /** PARSE_CANONICAL - means parameters are ordered and one of them has named properties, expected areguments are: [param index to object,propname in object] (example: PARAMS: ["banana",{propname:<#BlockNum>}]) */
  PARSE_CANONICAL = 2,
  /** PARSE_DICTIONARY - means parameters are named, expected arguments are [prop_name,separator] (example: PARAMS: {propname:<#BlockNum>,prop2:"banana"}) */
  PARSE_DICTIONARY = 3,
  /** PARSE_DICTIONARY_OR_ORDERED - means parameters are named expected arguments are [prop_name,separator,parameter order if not found] */
  PARSE_DICTIONARY_OR_ORDERED = 4,
  /** DEFAULT - means parameters are non related to block, and should fetch latest block */
  DEFAULT = 5,
  UNRECOGNIZED = -1,
}

export function parserFuncFromJSON(object: any): parserFunc {
  switch (object) {
    case 0:
    case "EMPTY":
      return parserFunc.EMPTY;
    case 1:
    case "PARSE_BY_ARG":
      return parserFunc.PARSE_BY_ARG;
    case 2:
    case "PARSE_CANONICAL":
      return parserFunc.PARSE_CANONICAL;
    case 3:
    case "PARSE_DICTIONARY":
      return parserFunc.PARSE_DICTIONARY;
    case 4:
    case "PARSE_DICTIONARY_OR_ORDERED":
      return parserFunc.PARSE_DICTIONARY_OR_ORDERED;
    case 5:
    case "DEFAULT":
      return parserFunc.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return parserFunc.UNRECOGNIZED;
  }
}

export function parserFuncToJSON(object: parserFunc): string {
  switch (object) {
    case parserFunc.EMPTY:
      return "EMPTY";
    case parserFunc.PARSE_BY_ARG:
      return "PARSE_BY_ARG";
    case parserFunc.PARSE_CANONICAL:
      return "PARSE_CANONICAL";
    case parserFunc.PARSE_DICTIONARY:
      return "PARSE_DICTIONARY";
    case parserFunc.PARSE_DICTIONARY_OR_ORDERED:
      return "PARSE_DICTIONARY_OR_ORDERED";
    case parserFunc.DEFAULT:
      return "DEFAULT";
    case parserFunc.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ServiceApi {
  name: string;
  blockParsing?: BlockParser;
  computeUnits: Long;
  enabled: boolean;
  apiInterfaces: ApiInterface[];
  category?: SpecCategory;
  parsing?: Parsing;
}

export interface Parsing {
  functionTag: string;
  functionTemplate: string;
  resultParsing?: BlockParser;
}

export interface ApiInterface {
  interface: string;
  type: string;
  extraComputeUnits: Long;
}

export interface BlockParser {
  parserArg: string[];
  parserFunc: parserFunc;
}

export interface SpecCategory {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
}

function createBaseServiceApi(): ServiceApi {
  return {
    name: "",
    blockParsing: undefined,
    computeUnits: Long.UZERO,
    enabled: false,
    apiInterfaces: [],
    category: undefined,
    parsing: undefined,
  };
}

export const ServiceApi = {
  encode(message: ServiceApi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.blockParsing !== undefined) {
      BlockParser.encode(message.blockParsing, writer.uint32(18).fork()).ldelim();
    }
    if (!message.computeUnits.isZero()) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.apiInterfaces) {
      ApiInterface.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.category !== undefined) {
      SpecCategory.encode(message.category, writer.uint32(50).fork()).ldelim();
    }
    if (message.parsing !== undefined) {
      Parsing.encode(message.parsing, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceApi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.blockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 3:
          message.computeUnits = reader.uint64() as Long;
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.apiInterfaces.push(ApiInterface.decode(reader, reader.uint32()));
          break;
        case 6:
          message.category = SpecCategory.decode(reader, reader.uint32());
          break;
        case 7:
          message.parsing = Parsing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceApi {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      blockParsing: isSet(object.blockParsing) ? BlockParser.fromJSON(object.blockParsing) : undefined,
      computeUnits: isSet(object.computeUnits) ? Long.fromValue(object.computeUnits) : Long.UZERO,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      apiInterfaces: Array.isArray(object?.apiInterfaces)
        ? object.apiInterfaces.map((e: any) => ApiInterface.fromJSON(e))
        : [],
      category: isSet(object.category) ? SpecCategory.fromJSON(object.category) : undefined,
      parsing: isSet(object.parsing) ? Parsing.fromJSON(object.parsing) : undefined,
    };
  },

  toJSON(message: ServiceApi): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.blockParsing !== undefined &&
      (obj.blockParsing = message.blockParsing ? BlockParser.toJSON(message.blockParsing) : undefined);
    message.computeUnits !== undefined && (obj.computeUnits = (message.computeUnits || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.apiInterfaces) {
      obj.apiInterfaces = message.apiInterfaces.map((e) => e ? ApiInterface.toJSON(e) : undefined);
    } else {
      obj.apiInterfaces = [];
    }
    message.category !== undefined &&
      (obj.category = message.category ? SpecCategory.toJSON(message.category) : undefined);
    message.parsing !== undefined && (obj.parsing = message.parsing ? Parsing.toJSON(message.parsing) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServiceApi>, I>>(object: I): ServiceApi {
    const message = createBaseServiceApi();
    message.name = object.name ?? "";
    message.blockParsing = (object.blockParsing !== undefined && object.blockParsing !== null)
      ? BlockParser.fromPartial(object.blockParsing)
      : undefined;
    message.computeUnits = (object.computeUnits !== undefined && object.computeUnits !== null)
      ? Long.fromValue(object.computeUnits)
      : Long.UZERO;
    message.enabled = object.enabled ?? false;
    message.apiInterfaces = object.apiInterfaces?.map((e) => ApiInterface.fromPartial(e)) || [];
    message.category = (object.category !== undefined && object.category !== null)
      ? SpecCategory.fromPartial(object.category)
      : undefined;
    message.parsing = (object.parsing !== undefined && object.parsing !== null)
      ? Parsing.fromPartial(object.parsing)
      : undefined;
    return message;
  },
};

function createBaseParsing(): Parsing {
  return { functionTag: "", functionTemplate: "", resultParsing: undefined };
}

export const Parsing = {
  encode(message: Parsing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionTag !== "") {
      writer.uint32(10).string(message.functionTag);
    }
    if (message.functionTemplate !== "") {
      writer.uint32(18).string(message.functionTemplate);
    }
    if (message.resultParsing !== undefined) {
      BlockParser.encode(message.resultParsing, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parsing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTag = reader.string();
          break;
        case 2:
          message.functionTemplate = reader.string();
          break;
        case 3:
          message.resultParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parsing {
    return {
      functionTag: isSet(object.functionTag) ? String(object.functionTag) : "",
      functionTemplate: isSet(object.functionTemplate) ? String(object.functionTemplate) : "",
      resultParsing: isSet(object.resultParsing) ? BlockParser.fromJSON(object.resultParsing) : undefined,
    };
  },

  toJSON(message: Parsing): unknown {
    const obj: any = {};
    message.functionTag !== undefined && (obj.functionTag = message.functionTag);
    message.functionTemplate !== undefined && (obj.functionTemplate = message.functionTemplate);
    message.resultParsing !== undefined &&
      (obj.resultParsing = message.resultParsing ? BlockParser.toJSON(message.resultParsing) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Parsing>, I>>(object: I): Parsing {
    const message = createBaseParsing();
    message.functionTag = object.functionTag ?? "";
    message.functionTemplate = object.functionTemplate ?? "";
    message.resultParsing = (object.resultParsing !== undefined && object.resultParsing !== null)
      ? BlockParser.fromPartial(object.resultParsing)
      : undefined;
    return message;
  },
};

function createBaseApiInterface(): ApiInterface {
  return { interface: "", type: "", extraComputeUnits: Long.UZERO };
}

export const ApiInterface = {
  encode(message: ApiInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interface !== "") {
      writer.uint32(10).string(message.interface);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (!message.extraComputeUnits.isZero()) {
      writer.uint32(24).uint64(message.extraComputeUnits);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiInterface {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiInterface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interface = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.extraComputeUnits = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiInterface {
    return {
      interface: isSet(object.interface) ? String(object.interface) : "",
      type: isSet(object.type) ? String(object.type) : "",
      extraComputeUnits: isSet(object.extraComputeUnits) ? Long.fromValue(object.extraComputeUnits) : Long.UZERO,
    };
  },

  toJSON(message: ApiInterface): unknown {
    const obj: any = {};
    message.interface !== undefined && (obj.interface = message.interface);
    message.type !== undefined && (obj.type = message.type);
    message.extraComputeUnits !== undefined &&
      (obj.extraComputeUnits = (message.extraComputeUnits || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApiInterface>, I>>(object: I): ApiInterface {
    const message = createBaseApiInterface();
    message.interface = object.interface ?? "";
    message.type = object.type ?? "";
    message.extraComputeUnits = (object.extraComputeUnits !== undefined && object.extraComputeUnits !== null)
      ? Long.fromValue(object.extraComputeUnits)
      : Long.UZERO;
    return message;
  },
};

function createBaseBlockParser(): BlockParser {
  return { parserArg: [], parserFunc: 0 };
}

export const BlockParser = {
  encode(message: BlockParser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.parserArg) {
      writer.uint32(10).string(v!);
    }
    if (message.parserFunc !== 0) {
      writer.uint32(16).int32(message.parserFunc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parserArg.push(reader.string());
          break;
        case 2:
          message.parserFunc = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockParser {
    return {
      parserArg: Array.isArray(object?.parserArg) ? object.parserArg.map((e: any) => String(e)) : [],
      parserFunc: isSet(object.parserFunc) ? parserFuncFromJSON(object.parserFunc) : 0,
    };
  },

  toJSON(message: BlockParser): unknown {
    const obj: any = {};
    if (message.parserArg) {
      obj.parserArg = message.parserArg.map((e) => e);
    } else {
      obj.parserArg = [];
    }
    message.parserFunc !== undefined && (obj.parserFunc = parserFuncToJSON(message.parserFunc));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockParser>, I>>(object: I): BlockParser {
    const message = createBaseBlockParser();
    message.parserArg = object.parserArg?.map((e) => e) || [];
    message.parserFunc = object.parserFunc ?? 0;
    return message;
  },
};

function createBaseSpecCategory(): SpecCategory {
  return { deterministic: false, local: false, subscription: false, stateful: 0 };
}

export const SpecCategory = {
  encode(message: SpecCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deterministic === true) {
      writer.uint32(8).bool(message.deterministic);
    }
    if (message.local === true) {
      writer.uint32(16).bool(message.local);
    }
    if (message.subscription === true) {
      writer.uint32(24).bool(message.subscription);
    }
    if (message.stateful !== 0) {
      writer.uint32(32).uint32(message.stateful);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpecCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deterministic = reader.bool();
          break;
        case 2:
          message.local = reader.bool();
          break;
        case 3:
          message.subscription = reader.bool();
          break;
        case 4:
          message.stateful = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpecCategory {
    return {
      deterministic: isSet(object.deterministic) ? Boolean(object.deterministic) : false,
      local: isSet(object.local) ? Boolean(object.local) : false,
      subscription: isSet(object.subscription) ? Boolean(object.subscription) : false,
      stateful: isSet(object.stateful) ? Number(object.stateful) : 0,
    };
  },

  toJSON(message: SpecCategory): unknown {
    const obj: any = {};
    message.deterministic !== undefined && (obj.deterministic = message.deterministic);
    message.local !== undefined && (obj.local = message.local);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.stateful !== undefined && (obj.stateful = Math.round(message.stateful));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpecCategory>, I>>(object: I): SpecCategory {
    const message = createBaseSpecCategory();
    message.deterministic = object.deterministic ?? false;
    message.local = object.local ?? false;
    message.subscription = object.subscription ?? false;
    message.stateful = object.stateful ?? 0;
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
