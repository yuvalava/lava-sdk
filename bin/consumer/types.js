"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.ConsumerSessionWithProvider = void 0;
class ConsumerSessionWithProvider {
    constructor(acc, endpoints, maxComputeUnits, usedComputeUnits, reliabilitySent, pairingEpoch) {
        this.Acc = acc;
        this.Endpoints = endpoints;
        this.MaxComputeUnits = maxComputeUnits;
        this.UsedComputeUnits = usedComputeUnits;
        this.ReliabilitySent = reliabilitySent;
        this.PairingEpoch = pairingEpoch;
    }
}
exports.ConsumerSessionWithProvider = ConsumerSessionWithProvider;
class Endpoint {
    // TODO Missing Client attribute
    constructor(addr, enabled, connectionRefusals) {
        this.Addr = addr;
        this.Enabled = enabled;
        this.ConnectionRefusals = connectionRefusals;
    }
}
exports.Endpoint = Endpoint;
