"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.SingleConsumerSession = exports.ConsumerSessionWithProvider = void 0;
class ConsumerSessionWithProvider {
    constructor(acc, endpoints, session, maxComputeUnits, usedComputeUnits, reliabilitySent, pairingEpoch) {
        this.Acc = acc;
        this.Endpoints = endpoints;
        this.Session = session;
        this.MaxComputeUnits = maxComputeUnits;
        this.UsedComputeUnits = usedComputeUnits;
        this.ReliabilitySent = reliabilitySent;
        this.PairingEpoch = pairingEpoch;
    }
}
exports.ConsumerSessionWithProvider = ConsumerSessionWithProvider;
class SingleConsumerSession {
    constructor(cuSum, latestRelayCu, sessionId, relayNum, endpoint, pairingEpoch) {
        this.CuSum = cuSum;
        this.LatestRelayCu = latestRelayCu;
        this.SessionId = sessionId;
        this.RelayNum = relayNum;
        this.Endpoint = endpoint;
        this.PairingEpoch = pairingEpoch;
    }
}
exports.SingleConsumerSession = SingleConsumerSession;
class Endpoint {
    // TODO Missing Client attribute
    constructor(addr, enabled, connectionRefusals) {
        this.Addr = addr;
        this.Enabled = enabled;
        this.ConnectionRefusals = connectionRefusals;
    }
}
exports.Endpoint = Endpoint;
