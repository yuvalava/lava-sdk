"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consensus = exports.App = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.version";
function createBaseApp() {
    return { protocol: long_1.default.UZERO, software: "" };
}
exports.App = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.protocol.isZero()) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseApp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.protocol = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.software = reader.string();
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
            protocol: isSet(object.protocol) ? long_1.default.fromValue(object.protocol) : long_1.default.UZERO,
            software: isSet(object.software) ? String(object.software) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol !== undefined && (obj.protocol = (message.protocol || long_1.default.UZERO).toString());
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    create(base) {
        return exports.App.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseApp();
        message.protocol = (object.protocol !== undefined && object.protocol !== null)
            ? long_1.default.fromValue(object.protocol)
            : long_1.default.UZERO;
        message.software = (_a = object.software) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConsensus() {
    return { block: long_1.default.UZERO, app: long_1.default.UZERO };
}
exports.Consensus = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.block.isZero()) {
            writer.uint32(8).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.block = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.app = reader.uint64();
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
            block: isSet(object.block) ? long_1.default.fromValue(object.block) : long_1.default.UZERO,
            app: isSet(object.app) ? long_1.default.fromValue(object.app) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = (message.block || long_1.default.UZERO).toString());
        message.app !== undefined && (obj.app = (message.app || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.Consensus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseConsensus();
        message.block = (object.block !== undefined && object.block !== null) ? long_1.default.fromValue(object.block) : long_1.default.UZERO;
        message.app = (object.app !== undefined && object.app !== null) ? long_1.default.fromValue(object.app) : long_1.default.UZERO;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
