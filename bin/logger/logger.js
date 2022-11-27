"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const util_1 = __importDefault(require("util"));
class Logger {
    static info(s) {
        console.log(s);
    }
    static deepInfo(s) {
        console.log(util_1.default.inspect(s, false, null, true));
    }
    static title(s) {
        console.log(chalk_1.default.blue(s));
    }
    static warn(s) {
        console.log(chalk_1.default.yellow(s));
    }
    static success(s) {
        console.log(chalk_1.default.green(s));
    }
    static error(s) {
        console.log(chalk_1.default.red(s));
    }
    static emptyLine() {
        console.log();
    }
}
exports.default = Logger;
