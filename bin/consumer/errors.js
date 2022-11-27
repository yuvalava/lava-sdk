"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsumerErrors {
}
ConsumerErrors.errAccountNotInitialized = new Error("Account was not initialized");
ConsumerErrors.errQueryServiceNotInitialized = new Error("Query service was not initialized");
ConsumerErrors.errEpochQueryServiceNotInitialized = new Error("Epoch query service was not initialized");
ConsumerErrors.errTendermintClientServiceNotInitialized = new Error("Tendermint client service was not initialized");
exports.default = ConsumerErrors;
