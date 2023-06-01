"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeGeneratorClientImpl = exports.GenerateBadgeResponse = exports.GenerateBadgeRequest = exports.Badge = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const stake_entry_1 = require("../epochstorage/stake_entry");
exports.protobufPackage = "lavanet.lava.pairing";
function createBaseBadge() {
    return { cuAllocation: long_1.default.UZERO, epoch: long_1.default.UZERO, address: "", lavaChainId: "", projectSig: new Uint8Array() };
}
exports.Badge = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.cuAllocation.isZero()) {
            writer.uint32(8).uint64(message.cuAllocation);
        }
        if (!message.epoch.isZero()) {
            writer.uint32(16).uint64(message.epoch);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.lavaChainId !== "") {
            writer.uint32(34).string(message.lavaChainId);
        }
        if (message.projectSig.length !== 0) {
            writer.uint32(42).bytes(message.projectSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBadge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.cuAllocation = reader.uint64();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.epoch = reader.uint64();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.lavaChainId = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.projectSig = reader.bytes();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            cuAllocation: isSet(object.cuAllocation) ? long_1.default.fromValue(object.cuAllocation) : long_1.default.UZERO,
            epoch: isSet(object.epoch) ? long_1.default.fromValue(object.epoch) : long_1.default.UZERO,
            address: isSet(object.address) ? String(object.address) : "",
            lavaChainId: isSet(object.lavaChainId) ? String(object.lavaChainId) : "",
            projectSig: isSet(object.projectSig) ? bytesFromBase64(object.projectSig) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.cuAllocation !== undefined && (obj.cuAllocation = (message.cuAllocation || long_1.default.UZERO).toString());
        message.epoch !== undefined && (obj.epoch = (message.epoch || long_1.default.UZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
        message.projectSig !== undefined &&
            (obj.projectSig = base64FromBytes(message.projectSig !== undefined ? message.projectSig : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.Badge.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBadge();
        message.cuAllocation = (object.cuAllocation !== undefined && object.cuAllocation !== null)
            ? long_1.default.fromValue(object.cuAllocation)
            : long_1.default.UZERO;
        message.epoch = (object.epoch !== undefined && object.epoch !== null) ? long_1.default.fromValue(object.epoch) : long_1.default.UZERO;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.lavaChainId = (_b = object.lavaChainId) !== null && _b !== void 0 ? _b : "";
        message.projectSig = (_c = object.projectSig) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseGenerateBadgeRequest() {
    return { badgeAddress: "", projectId: "", specId: "" };
}
exports.GenerateBadgeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.badgeAddress !== "") {
            writer.uint32(10).string(message.badgeAddress);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.specId !== "") {
            writer.uint32(26).string(message.specId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateBadgeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.badgeAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.specId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            badgeAddress: isSet(object.badgeAddress) ? String(object.badgeAddress) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            specId: isSet(object.specId) ? String(object.specId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.badgeAddress !== undefined && (obj.badgeAddress = message.badgeAddress);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.specId !== undefined && (obj.specId = message.specId);
        return obj;
    },
    create(base) {
        return exports.GenerateBadgeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenerateBadgeRequest();
        message.badgeAddress = (_a = object.badgeAddress) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.specId = (_c = object.specId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGenerateBadgeResponse() {
    return { badge: undefined, pairingList: [], badgeSignerAddress: "" };
}
exports.GenerateBadgeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.badge !== undefined) {
            exports.Badge.encode(message.badge, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.pairingList) {
            stake_entry_1.StakeEntry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.badgeSignerAddress !== "") {
            writer.uint32(26).string(message.badgeSignerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateBadgeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.badge = exports.Badge.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pairingList.push(stake_entry_1.StakeEntry.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.badgeSignerAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            badge: isSet(object.badge) ? exports.Badge.fromJSON(object.badge) : undefined,
            pairingList: Array.isArray(object === null || object === void 0 ? void 0 : object.pairingList) ? object.pairingList.map((e) => stake_entry_1.StakeEntry.fromJSON(e)) : [],
            badgeSignerAddress: isSet(object.badgeSignerAddress) ? String(object.badgeSignerAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.badge !== undefined && (obj.badge = message.badge ? exports.Badge.toJSON(message.badge) : undefined);
        if (message.pairingList) {
            obj.pairingList = message.pairingList.map((e) => e ? stake_entry_1.StakeEntry.toJSON(e) : undefined);
        }
        else {
            obj.pairingList = [];
        }
        message.badgeSignerAddress !== undefined && (obj.badgeSignerAddress = message.badgeSignerAddress);
        return obj;
    },
    create(base) {
        return exports.GenerateBadgeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenerateBadgeResponse();
        message.badge = (object.badge !== undefined && object.badge !== null) ? exports.Badge.fromPartial(object.badge) : undefined;
        message.pairingList = ((_a = object.pairingList) === null || _a === void 0 ? void 0 : _a.map((e) => stake_entry_1.StakeEntry.fromPartial(e))) || [];
        message.badgeSignerAddress = (_b = object.badgeSignerAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
class BadgeGeneratorClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "lavanet.lava.pairing.BadgeGenerator";
        this.rpc = rpc;
        this.GenerateBadge = this.GenerateBadge.bind(this);
    }
    GenerateBadge(request) {
        const data = exports.GenerateBadgeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GenerateBadge", data);
        return promise.then((data) => exports.GenerateBadgeResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.BadgeGeneratorClientImpl = BadgeGeneratorClientImpl;
var tsProtoGlobalThis = (() => {
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
