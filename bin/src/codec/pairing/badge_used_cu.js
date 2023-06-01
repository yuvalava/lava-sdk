"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeUsedCu = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "lavanet.lava.pairing";
function createBaseBadgeUsedCu() {
    return { badgeUsedCuKey: new Uint8Array(), usedCu: long_1.default.UZERO };
}
exports.BadgeUsedCu = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.badgeUsedCuKey.length !== 0) {
            writer.uint32(10).bytes(message.badgeUsedCuKey);
        }
        if (!message.usedCu.isZero()) {
            writer.uint32(16).uint64(message.usedCu);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBadgeUsedCu();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.badgeUsedCuKey = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.usedCu = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            badgeUsedCuKey: isSet(object.badgeUsedCuKey) ? bytesFromBase64(object.badgeUsedCuKey) : new Uint8Array(),
            usedCu: isSet(object.usedCu) ? long_1.default.fromValue(object.usedCu) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.badgeUsedCuKey !== undefined &&
            (obj.badgeUsedCuKey = base64FromBytes(message.badgeUsedCuKey !== undefined ? message.badgeUsedCuKey : new Uint8Array()));
        message.usedCu !== undefined && (obj.usedCu = (message.usedCu || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.BadgeUsedCu.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBadgeUsedCu();
        message.badgeUsedCuKey = (_a = object.badgeUsedCuKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.usedCu = (object.usedCu !== undefined && object.usedCu !== null)
            ? long_1.default.fromValue(object.usedCu)
            : long_1.default.UZERO;
        return message;
    },
};
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
