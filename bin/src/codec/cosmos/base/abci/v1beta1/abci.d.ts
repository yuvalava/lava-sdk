import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Block } from "../../../../tendermint/types/block";
export declare const protobufPackage = "cosmos.base.abci.v1beta1";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
    /** The block height */
    height: Long;
    /** The transaction hash. */
    txhash: string;
    /** Namespace for the Code */
    codespace: string;
    /** Response code. */
    code: number;
    /** Result bytes, if any. */
    data: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    rawLog: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs: ABCIMessageLog[];
    /** Additional information. May be non-deterministic. */
    info: string;
    /** Amount of gas requested for transaction. */
    gasWanted: Long;
    /** Amount of gas consumed by transaction. */
    gasUsed: Long;
    /** The request transaction bytes. */
    tx?: Any;
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp: string;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
     */
    events: Event[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
    msgIndex: number;
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     */
    events: StringEvent[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
    type: string;
    attributes: Attribute[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
    key: string;
    value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
    /** GasWanted is the maximum units of work we allow this tx to perform. */
    gasWanted: Long;
    /** GasUsed is the amount of gas actually consumed. */
    gasUsed: Long;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     * Deprecated. This field is still populated, but prefer msg_response instead
     * because it also contains the Msg response typeURL.
     *
     * @deprecated
     */
    data: Uint8Array;
    /** Log contains the log information from message or handler execution. */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     */
    events: Event[];
    /**
     * msg_responses contains the Msg handler responses type packed in Anys.
     *
     * Since: cosmos-sdk 0.46
     */
    msgResponses: Any[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
    gasInfo?: GasInfo;
    result?: Result;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @deprecated
 */
export interface MsgData {
    msgType: string;
    data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
    /**
     * data field is deprecated and not populated.
     *
     * @deprecated
     */
    data: MsgData[];
    /**
     * msg_responses contains the Msg handler responses packed into Anys.
     *
     * Since: cosmos-sdk 0.46
     */
    msgResponses: Any[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
    /** Count of all txs */
    totalCount: Long;
    /** Count of txs in current page */
    count: Long;
    /** Index of current page, start from 1 */
    pageNumber: Long;
    /** Count of total pages */
    pageTotal: Long;
    /** Max count txs per page */
    limit: Long;
    /** List of txs in current page */
    txs: TxResponse[];
}
/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResult {
    /** Count of all blocks */
    totalCount: Long;
    /** Count of blocks in current page */
    count: Long;
    /** Index of current page, start from 1 */
    pageNumber: Long;
    /** Count of total pages */
    pageTotal: Long;
    /** Max count blocks per page */
    limit: Long;
    /** List of blocks in current page */
    blocks: Block[];
}
export declare const TxResponse: {
    encode(message: TxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse;
    fromJSON(object: any): TxResponse;
    toJSON(message: TxResponse): unknown;
    create<I extends {
        height?: string | number | Long | undefined;
        txhash?: string | undefined;
        codespace?: string | undefined;
        code?: number | undefined;
        data?: string | undefined;
        rawLog?: string | undefined;
        logs?: {
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        info?: string | undefined;
        gasWanted?: string | number | Long | undefined;
        gasUsed?: string | number | Long | undefined;
        tx?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        timestamp?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K in Exclude<keyof I["height"], keyof Long>]: never; }) | undefined;
        txhash?: string | undefined;
        codespace?: string | undefined;
        code?: number | undefined;
        data?: string | undefined;
        rawLog?: string | undefined;
        logs?: ({
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_1 in Exclude<keyof I["logs"][number]["events"][number]["attributes"][number], keyof Attribute>]: never; })[] & { [K_2 in Exclude<keyof I["logs"][number]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["logs"][number]["events"][number], keyof StringEvent>]: never; })[] & { [K_4 in Exclude<keyof I["logs"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["logs"][number], keyof ABCIMessageLog>]: never; })[] & { [K_6 in Exclude<keyof I["logs"], keyof {
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        info?: string | undefined;
        gasWanted?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_7 in Exclude<keyof I["gasWanted"], keyof Long>]: never; }) | undefined;
        gasUsed?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_8 in Exclude<keyof I["gasUsed"], keyof Long>]: never; }) | undefined;
        tx?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_9 in Exclude<keyof I["tx"], keyof Any>]: never; }) | undefined;
        timestamp?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & { [K_10 in Exclude<keyof I["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_11 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_13 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof TxResponse>]: never; }>(base?: I | undefined): TxResponse;
    fromPartial<I_1 extends {
        height?: string | number | Long | undefined;
        txhash?: string | undefined;
        codespace?: string | undefined;
        code?: number | undefined;
        data?: string | undefined;
        rawLog?: string | undefined;
        logs?: {
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        info?: string | undefined;
        gasWanted?: string | number | Long | undefined;
        gasUsed?: string | number | Long | undefined;
        tx?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        timestamp?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_15 in Exclude<keyof I_1["height"], keyof Long>]: never; }) | undefined;
        txhash?: string | undefined;
        codespace?: string | undefined;
        code?: number | undefined;
        data?: string | undefined;
        rawLog?: string | undefined;
        logs?: ({
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_16 in Exclude<keyof I_1["logs"][number]["events"][number]["attributes"][number], keyof Attribute>]: never; })[] & { [K_17 in Exclude<keyof I_1["logs"][number]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I_1["logs"][number]["events"][number], keyof StringEvent>]: never; })[] & { [K_19 in Exclude<keyof I_1["logs"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I_1["logs"][number], keyof ABCIMessageLog>]: never; })[] & { [K_21 in Exclude<keyof I_1["logs"], keyof {
            msgIndex?: number | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        info?: string | undefined;
        gasWanted?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_22 in Exclude<keyof I_1["gasWanted"], keyof Long>]: never; }) | undefined;
        gasUsed?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_23 in Exclude<keyof I_1["gasUsed"], keyof Long>]: never; }) | undefined;
        tx?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_24 in Exclude<keyof I_1["tx"], keyof Any>]: never; }) | undefined;
        timestamp?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & { [K_25 in Exclude<keyof I_1["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_26 in Exclude<keyof I_1["events"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I_1["events"][number], keyof Event>]: never; })[] & { [K_28 in Exclude<keyof I_1["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof TxResponse>]: never; }>(object: I_1): TxResponse;
};
export declare const ABCIMessageLog: {
    encode(message: ABCIMessageLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog;
    fromJSON(object: any): ABCIMessageLog;
    toJSON(message: ABCIMessageLog): unknown;
    create<I extends {
        msgIndex?: number | undefined;
        log?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        msgIndex?: number | undefined;
        log?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K in Exclude<keyof I["events"][number]["attributes"][number], keyof Attribute>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["events"][number], keyof StringEvent>]: never; })[] & { [K_3 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ABCIMessageLog>]: never; }>(base?: I | undefined): ABCIMessageLog;
    fromPartial<I_1 extends {
        msgIndex?: number | undefined;
        log?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        msgIndex?: number | undefined;
        log?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["events"][number]["attributes"][number], keyof Attribute>]: never; })[] & { [K_6 in Exclude<keyof I_1["events"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["events"][number], keyof StringEvent>]: never; })[] & { [K_8 in Exclude<keyof I_1["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof ABCIMessageLog>]: never; }>(object: I_1): ABCIMessageLog;
};
export declare const StringEvent: {
    encode(message: StringEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent;
    fromJSON(object: any): StringEvent;
    toJSON(message: StringEvent): unknown;
    create<I extends {
        type?: string | undefined;
        attributes?: {
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        type?: string | undefined;
        attributes?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & { [K in Exclude<keyof I["attributes"][number], keyof Attribute>]: never; })[] & { [K_1 in Exclude<keyof I["attributes"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof StringEvent>]: never; }>(base?: I | undefined): StringEvent;
    fromPartial<I_1 extends {
        type?: string | undefined;
        attributes?: {
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        type?: string | undefined;
        attributes?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["attributes"][number], keyof Attribute>]: never; })[] & { [K_4 in Exclude<keyof I_1["attributes"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof StringEvent>]: never; }>(object: I_1): StringEvent;
};
export declare const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    create<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Attribute>]: never; }>(base?: I | undefined): Attribute;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Attribute>]: never; }>(object: I_1): Attribute;
};
export declare const GasInfo: {
    encode(message: GasInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo;
    fromJSON(object: any): GasInfo;
    toJSON(message: GasInfo): unknown;
    create<I extends {
        gasWanted?: string | number | Long | undefined;
        gasUsed?: string | number | Long | undefined;
    } & {
        gasWanted?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K in Exclude<keyof I["gasWanted"], keyof Long>]: never; }) | undefined;
        gasUsed?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_1 in Exclude<keyof I["gasUsed"], keyof Long>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof GasInfo>]: never; }>(base?: I | undefined): GasInfo;
    fromPartial<I_1 extends {
        gasWanted?: string | number | Long | undefined;
        gasUsed?: string | number | Long | undefined;
    } & {
        gasWanted?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_3 in Exclude<keyof I_1["gasWanted"], keyof Long>]: never; }) | undefined;
        gasUsed?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_4 in Exclude<keyof I_1["gasUsed"], keyof Long>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof GasInfo>]: never; }>(object: I_1): GasInfo;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    create<I extends {
        data?: Uint8Array | undefined;
        log?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
        msgResponses?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        data?: Uint8Array | undefined;
        log?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & { [K in Exclude<keyof I["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_3 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        msgResponses?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_4 in Exclude<keyof I["msgResponses"][number], keyof Any>]: never; })[] & { [K_5 in Exclude<keyof I["msgResponses"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Result>]: never; }>(base?: I | undefined): Result;
    fromPartial<I_1 extends {
        data?: Uint8Array | undefined;
        log?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
        msgResponses?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        data?: Uint8Array | undefined;
        log?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            } & { [K_7 in Exclude<keyof I_1["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_8 in Exclude<keyof I_1["events"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["events"][number], keyof Event>]: never; })[] & { [K_10 in Exclude<keyof I_1["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        msgResponses?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_11 in Exclude<keyof I_1["msgResponses"][number], keyof Any>]: never; })[] & { [K_12 in Exclude<keyof I_1["msgResponses"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof Result>]: never; }>(object: I_1): Result;
};
export declare const SimulationResponse: {
    encode(message: SimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse;
    fromJSON(object: any): SimulationResponse;
    toJSON(message: SimulationResponse): unknown;
    create<I extends {
        gasInfo?: {
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } | undefined;
        result?: {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        gasInfo?: ({
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } & {
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K in Exclude<keyof I["gasInfo"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_1 in Exclude<keyof I["gasInfo"]["gasUsed"], keyof Long>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["gasInfo"], keyof GasInfo>]: never; }) | undefined;
        result?: ({
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["result"]["events"][number], keyof Event>]: never; })[] & { [K_6 in Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msgResponses?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_7 in Exclude<keyof I["result"]["msgResponses"][number], keyof Any>]: never; })[] & { [K_8 in Exclude<keyof I["result"]["msgResponses"], keyof {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["result"], keyof Result>]: never; }) | undefined;
    } & { [K_10 in Exclude<keyof I, keyof SimulationResponse>]: never; }>(base?: I | undefined): SimulationResponse;
    fromPartial<I_1 extends {
        gasInfo?: {
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } | undefined;
        result?: {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        gasInfo?: ({
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } & {
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_11 in Exclude<keyof I_1["gasInfo"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_12 in Exclude<keyof I_1["gasInfo"]["gasUsed"], keyof Long>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["gasInfo"], keyof GasInfo>]: never; }) | undefined;
        result?: ({
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & { [K_14 in Exclude<keyof I_1["result"]["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_15 in Exclude<keyof I_1["result"]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["result"]["events"][number], keyof Event>]: never; })[] & { [K_17 in Exclude<keyof I_1["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msgResponses?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_18 in Exclude<keyof I_1["result"]["msgResponses"][number], keyof Any>]: never; })[] & { [K_19 in Exclude<keyof I_1["result"]["msgResponses"], keyof {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I_1["result"], keyof Result>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof SimulationResponse>]: never; }>(object: I_1): SimulationResponse;
};
export declare const MsgData: {
    encode(message: MsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgData;
    fromJSON(object: any): MsgData;
    toJSON(message: MsgData): unknown;
    create<I extends {
        msgType?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        msgType?: string | undefined;
        data?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof MsgData>]: never; }>(base?: I | undefined): MsgData;
    fromPartial<I_1 extends {
        msgType?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        msgType?: string | undefined;
        data?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgData>]: never; }>(object: I_1): MsgData;
};
export declare const TxMsgData: {
    encode(message: TxMsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData;
    fromJSON(object: any): TxMsgData;
    toJSON(message: TxMsgData): unknown;
    create<I extends {
        data?: {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
        msgResponses?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        data?: ({
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["data"][number], keyof MsgData>]: never; })[] & { [K_1 in Exclude<keyof I["data"], keyof {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
        msgResponses?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I["msgResponses"][number], keyof Any>]: never; })[] & { [K_3 in Exclude<keyof I["msgResponses"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof TxMsgData>]: never; }>(base?: I | undefined): TxMsgData;
    fromPartial<I_1 extends {
        data?: {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
        msgResponses?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        data?: ({
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        } & { [K_5 in Exclude<keyof I_1["data"][number], keyof MsgData>]: never; })[] & { [K_6 in Exclude<keyof I_1["data"], keyof {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
        msgResponses?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_7 in Exclude<keyof I_1["msgResponses"][number], keyof Any>]: never; })[] & { [K_8 in Exclude<keyof I_1["msgResponses"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof TxMsgData>]: never; }>(object: I_1): TxMsgData;
};
export declare const SearchTxsResult: {
    encode(message: SearchTxsResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult;
    fromJSON(object: any): SearchTxsResult;
    toJSON(message: SearchTxsResult): unknown;
    create<I extends {
        totalCount?: string | number | Long | undefined;
        count?: string | number | Long | undefined;
        pageNumber?: string | number | Long | undefined;
        pageTotal?: string | number | Long | undefined;
        limit?: string | number | Long | undefined;
        txs?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        totalCount?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K in Exclude<keyof I["totalCount"], keyof Long>]: never; }) | undefined;
        count?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_1 in Exclude<keyof I["count"], keyof Long>]: never; }) | undefined;
        pageNumber?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_2 in Exclude<keyof I["pageNumber"], keyof Long>]: never; }) | undefined;
        pageTotal?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_3 in Exclude<keyof I["pageTotal"], keyof Long>]: never; }) | undefined;
        limit?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_4 in Exclude<keyof I["limit"], keyof Long>]: never; }) | undefined;
        txs?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_5 in Exclude<keyof I["txs"][number]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_6 in Exclude<keyof I["txs"][number]["logs"][number]["events"][number]["attributes"][number], keyof Attribute>]: never; })[] & { [K_7 in Exclude<keyof I["txs"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["txs"][number]["logs"][number]["events"][number], keyof StringEvent>]: never; })[] & { [K_9 in Exclude<keyof I["txs"][number]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["txs"][number]["logs"][number], keyof ABCIMessageLog>]: never; })[] & { [K_11 in Exclude<keyof I["txs"][number]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_12 in Exclude<keyof I["txs"][number]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_13 in Exclude<keyof I["txs"][number]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_14 in Exclude<keyof I["txs"][number]["tx"], keyof Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & { [K_15 in Exclude<keyof I["txs"][number]["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_16 in Exclude<keyof I["txs"][number]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I["txs"][number]["events"][number], keyof Event>]: never; })[] & { [K_18 in Exclude<keyof I["txs"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_19 in Exclude<keyof I["txs"][number], keyof TxResponse>]: never; })[] & { [K_20 in Exclude<keyof I["txs"], keyof {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I, keyof SearchTxsResult>]: never; }>(base?: I | undefined): SearchTxsResult;
    fromPartial<I_1 extends {
        totalCount?: string | number | Long | undefined;
        count?: string | number | Long | undefined;
        pageNumber?: string | number | Long | undefined;
        pageTotal?: string | number | Long | undefined;
        limit?: string | number | Long | undefined;
        txs?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        totalCount?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_22 in Exclude<keyof I_1["totalCount"], keyof Long>]: never; }) | undefined;
        count?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_23 in Exclude<keyof I_1["count"], keyof Long>]: never; }) | undefined;
        pageNumber?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_24 in Exclude<keyof I_1["pageNumber"], keyof Long>]: never; }) | undefined;
        pageTotal?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_25 in Exclude<keyof I_1["pageTotal"], keyof Long>]: never; }) | undefined;
        limit?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_26 in Exclude<keyof I_1["limit"], keyof Long>]: never; }) | undefined;
        txs?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_27 in Exclude<keyof I_1["txs"][number]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_28 in Exclude<keyof I_1["txs"][number]["logs"][number]["events"][number]["attributes"][number], keyof Attribute>]: never; })[] & { [K_29 in Exclude<keyof I_1["txs"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_30 in Exclude<keyof I_1["txs"][number]["logs"][number]["events"][number], keyof StringEvent>]: never; })[] & { [K_31 in Exclude<keyof I_1["txs"][number]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I_1["txs"][number]["logs"][number], keyof ABCIMessageLog>]: never; })[] & { [K_33 in Exclude<keyof I_1["txs"][number]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_34 in Exclude<keyof I_1["txs"][number]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_35 in Exclude<keyof I_1["txs"][number]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_36 in Exclude<keyof I_1["txs"][number]["tx"], keyof Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & { [K_37 in Exclude<keyof I_1["txs"][number]["events"][number]["attributes"][number], keyof import("../../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_38 in Exclude<keyof I_1["txs"][number]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I_1["txs"][number]["events"][number], keyof Event>]: never; })[] & { [K_40 in Exclude<keyof I_1["txs"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_41 in Exclude<keyof I_1["txs"][number], keyof TxResponse>]: never; })[] & { [K_42 in Exclude<keyof I_1["txs"], keyof {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_43 in Exclude<keyof I_1, keyof SearchTxsResult>]: never; }>(object: I_1): SearchTxsResult;
};
export declare const SearchBlocksResult: {
    encode(message: SearchBlocksResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchBlocksResult;
    fromJSON(object: any): SearchBlocksResult;
    toJSON(message: SearchBlocksResult): unknown;
    create<I extends {
        totalCount?: string | number | Long | undefined;
        count?: string | number | Long | undefined;
        pageNumber?: string | number | Long | undefined;
        pageTotal?: string | number | Long | undefined;
        limit?: string | number | Long | undefined;
        blocks?: {
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        totalCount?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K in Exclude<keyof I["totalCount"], keyof Long>]: never; }) | undefined;
        count?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_1 in Exclude<keyof I["count"], keyof Long>]: never; }) | undefined;
        pageNumber?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_2 in Exclude<keyof I["pageNumber"], keyof Long>]: never; }) | undefined;
        pageTotal?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_3 in Exclude<keyof I["pageTotal"], keyof Long>]: never; }) | undefined;
        limit?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_4 in Exclude<keyof I["limit"], keyof Long>]: never; }) | undefined;
        blocks?: ({
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } & {
                    block?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_5 in Exclude<keyof I["blocks"][number]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                    app?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_6 in Exclude<keyof I["blocks"][number]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["blocks"][number]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                chainId?: string | undefined;
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_8 in Exclude<keyof I["blocks"][number]["header"]["height"], keyof Long>]: never; }) | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_9 in Exclude<keyof I["blocks"][number]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["blocks"][number]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & { [K_11 in Exclude<keyof I["blocks"][number]["header"], keyof import("../../../../tendermint/types/types").Header>]: never; }) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & { [K_12 in Exclude<keyof I["blocks"][number]["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["blocks"][number]["data"], "txs">]: never; }) | undefined;
            evidence?: ({
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicateVoteEvidence?: ({
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        voteA?: ({
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_14 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_15 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_16 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & { [K_17 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("../../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        voteB?: ({
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_18 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_19 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_20 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & { [K_21 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("../../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_22 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        validatorPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_23 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_24 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("../../../../tendermint/types/evidence").DuplicateVoteEvidence>]: never; }) | undefined;
                    lightClientAttackEvidence?: ({
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflictingBlock?: ({
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } & {
                            signedHeader?: ({
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } & {
                                        block?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_25 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                                        app?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_26 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                                    } & { [K_27 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_28 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>]: never; }) | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_29 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_30 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & { [K_31 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../../../tendermint/types/types").Header>]: never; }) | undefined;
                                commit?: ({
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_32 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>]: never; }) | undefined;
                                    round?: number | undefined;
                                    blockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_33 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_34 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                                    signatures?: ({
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & { [K_35 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_36 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>]: never; }) | undefined;
                                } & { [K_37 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../../../tendermint/types/types").Commit>]: never; }) | undefined;
                            } & { [K_38 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../../../tendermint/types/types").SignedHeader>]: never; }) | undefined;
                            validatorSet?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_39 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_40 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_41 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_42 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>]: never; })[] & { [K_43 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[]>]: never; }) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_44 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_45 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_46 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_47 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>]: never; }) | undefined;
                                totalVotingPower?: string | number | (Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long) => Long;
                                    and: (other: string | number | Long) => Long;
                                    compare: (other: string | number | Long) => number;
                                    comp: (other: string | number | Long) => number;
                                    divide: (divisor: string | number | Long) => Long;
                                    div: (divisor: string | number | Long) => Long;
                                    equals: (other: string | number | Long) => boolean;
                                    eq: (other: string | number | Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long) => boolean;
                                    gt: (other: string | number | Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                                    gte: (other: string | number | Long) => boolean;
                                    ge: (other: string | number | Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    eqz: () => boolean;
                                    lessThan: (other: string | number | Long) => boolean;
                                    lt: (other: string | number | Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long) => boolean;
                                    lte: (other: string | number | Long) => boolean;
                                    le: (other: string | number | Long) => boolean;
                                    modulo: (other: string | number | Long) => Long;
                                    mod: (other: string | number | Long) => Long;
                                    rem: (other: string | number | Long) => Long;
                                    multiply: (multiplier: string | number | Long) => Long;
                                    mul: (multiplier: string | number | Long) => Long;
                                    negate: () => Long;
                                    neg: () => Long;
                                    not: () => Long;
                                    countLeadingZeros: () => number;
                                    clz: () => number;
                                    countTrailingZeros: () => number;
                                    ctz: () => number;
                                    notEquals: (other: string | number | Long) => boolean;
                                    neq: (other: string | number | Long) => boolean;
                                    ne: (other: string | number | Long) => boolean;
                                    or: (other: string | number | Long) => Long;
                                    shiftLeft: (numBits: number | Long) => Long;
                                    shl: (numBits: number | Long) => Long;
                                    shiftRight: (numBits: number | Long) => Long;
                                    shr: (numBits: number | Long) => Long;
                                    shiftRightUnsigned: (numBits: number | Long) => Long;
                                    shru: (numBits: number | Long) => Long;
                                    shr_u: (numBits: number | Long) => Long;
                                    rotateLeft: (numBits: number | Long) => Long;
                                    rotl: (numBits: number | Long) => Long;
                                    rotateRight: (numBits: number | Long) => Long;
                                    rotr: (numBits: number | Long) => Long;
                                    subtract: (subtrahend: string | number | Long) => Long;
                                    sub: (subtrahend: string | number | Long) => Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long;
                                    xor: (other: string | number | Long) => Long;
                                } & { [K_48 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                            } & { [K_49 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../../../tendermint/types/validator").ValidatorSet>]: never; }) | undefined;
                        } & { [K_50 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("../../../../tendermint/types/types").LightBlock>]: never; }) | undefined;
                        commonHeight?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_51 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>]: never; }) | undefined;
                        byzantineValidators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & { [K_52 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                            votingPower?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_53 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                            proposerPriority?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_54 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                        } & { [K_55 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("../../../../tendermint/types/validator").Validator>]: never; })[] & { [K_56 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[]>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_57 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_58 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("../../../../tendermint/types/evidence").LightClientAttackEvidence>]: never; }) | undefined;
                } & { [K_59 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"][number], keyof import("../../../../tendermint/types/evidence").Evidence>]: never; })[] & { [K_60 in Exclude<keyof I["blocks"][number]["evidence"]["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_61 in Exclude<keyof I["blocks"][number]["evidence"], "evidence">]: never; }) | undefined;
            lastCommit?: ({
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_62 in Exclude<keyof I["blocks"][number]["lastCommit"]["height"], keyof Long>]: never; }) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_63 in Exclude<keyof I["blocks"][number]["lastCommit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_64 in Exclude<keyof I["blocks"][number]["lastCommit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                signatures?: ({
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_65 in Exclude<keyof I["blocks"][number]["lastCommit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_66 in Exclude<keyof I["blocks"][number]["lastCommit"]["signatures"], keyof {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_67 in Exclude<keyof I["blocks"][number]["lastCommit"], keyof import("../../../../tendermint/types/types").Commit>]: never; }) | undefined;
        } & { [K_68 in Exclude<keyof I["blocks"][number], keyof Block>]: never; })[] & { [K_69 in Exclude<keyof I["blocks"], keyof {
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_70 in Exclude<keyof I, keyof SearchBlocksResult>]: never; }>(base?: I | undefined): SearchBlocksResult;
    fromPartial<I_1 extends {
        totalCount?: string | number | Long | undefined;
        count?: string | number | Long | undefined;
        pageNumber?: string | number | Long | undefined;
        pageTotal?: string | number | Long | undefined;
        limit?: string | number | Long | undefined;
        blocks?: {
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        totalCount?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_71 in Exclude<keyof I_1["totalCount"], keyof Long>]: never; }) | undefined;
        count?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_72 in Exclude<keyof I_1["count"], keyof Long>]: never; }) | undefined;
        pageNumber?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_73 in Exclude<keyof I_1["pageNumber"], keyof Long>]: never; }) | undefined;
        pageTotal?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_74 in Exclude<keyof I_1["pageTotal"], keyof Long>]: never; }) | undefined;
        limit?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_75 in Exclude<keyof I_1["limit"], keyof Long>]: never; }) | undefined;
        blocks?: ({
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } & {
                    block?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_76 in Exclude<keyof I_1["blocks"][number]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                    app?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_77 in Exclude<keyof I_1["blocks"][number]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                } & { [K_78 in Exclude<keyof I_1["blocks"][number]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                chainId?: string | undefined;
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_79 in Exclude<keyof I_1["blocks"][number]["header"]["height"], keyof Long>]: never; }) | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_80 in Exclude<keyof I_1["blocks"][number]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_81 in Exclude<keyof I_1["blocks"][number]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & { [K_82 in Exclude<keyof I_1["blocks"][number]["header"], keyof import("../../../../tendermint/types/types").Header>]: never; }) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & { [K_83 in Exclude<keyof I_1["blocks"][number]["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_84 in Exclude<keyof I_1["blocks"][number]["data"], "txs">]: never; }) | undefined;
            evidence?: ({
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicateVoteEvidence?: ({
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        voteA?: ({
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_85 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_86 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_87 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & { [K_88 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("../../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        voteB?: ({
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_89 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_90 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_91 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } & { [K_92 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("../../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_93 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        validatorPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_94 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_95 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("../../../../tendermint/types/evidence").DuplicateVoteEvidence>]: never; }) | undefined;
                    lightClientAttackEvidence?: ({
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflictingBlock?: ({
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } & {
                            signedHeader?: ({
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } & {
                                        block?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_96 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                                        app?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_97 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                                    } & { [K_98 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_99 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>]: never; }) | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_100 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_101 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & { [K_102 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../../../tendermint/types/types").Header>]: never; }) | undefined;
                                commit?: ({
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_103 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>]: never; }) | undefined;
                                    round?: number | undefined;
                                    blockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_104 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_105 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                                    signatures?: ({
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & { [K_106 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_107 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>]: never; }) | undefined;
                                } & { [K_108 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../../../tendermint/types/types").Commit>]: never; }) | undefined;
                            } & { [K_109 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../../../tendermint/types/types").SignedHeader>]: never; }) | undefined;
                            validatorSet?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_110 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_111 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_112 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_113 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>]: never; })[] & { [K_114 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[]>]: never; }) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_115 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_116 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_117 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_118 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>]: never; }) | undefined;
                                totalVotingPower?: string | number | (Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long) => Long;
                                    and: (other: string | number | Long) => Long;
                                    compare: (other: string | number | Long) => number;
                                    comp: (other: string | number | Long) => number;
                                    divide: (divisor: string | number | Long) => Long;
                                    div: (divisor: string | number | Long) => Long;
                                    equals: (other: string | number | Long) => boolean;
                                    eq: (other: string | number | Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long) => boolean;
                                    gt: (other: string | number | Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                                    gte: (other: string | number | Long) => boolean;
                                    ge: (other: string | number | Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    eqz: () => boolean;
                                    lessThan: (other: string | number | Long) => boolean;
                                    lt: (other: string | number | Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long) => boolean;
                                    lte: (other: string | number | Long) => boolean;
                                    le: (other: string | number | Long) => boolean;
                                    modulo: (other: string | number | Long) => Long;
                                    mod: (other: string | number | Long) => Long;
                                    rem: (other: string | number | Long) => Long;
                                    multiply: (multiplier: string | number | Long) => Long;
                                    mul: (multiplier: string | number | Long) => Long;
                                    negate: () => Long;
                                    neg: () => Long;
                                    not: () => Long;
                                    countLeadingZeros: () => number;
                                    clz: () => number;
                                    countTrailingZeros: () => number;
                                    ctz: () => number;
                                    notEquals: (other: string | number | Long) => boolean;
                                    neq: (other: string | number | Long) => boolean;
                                    ne: (other: string | number | Long) => boolean;
                                    or: (other: string | number | Long) => Long;
                                    shiftLeft: (numBits: number | Long) => Long;
                                    shl: (numBits: number | Long) => Long;
                                    shiftRight: (numBits: number | Long) => Long;
                                    shr: (numBits: number | Long) => Long;
                                    shiftRightUnsigned: (numBits: number | Long) => Long;
                                    shru: (numBits: number | Long) => Long;
                                    shr_u: (numBits: number | Long) => Long;
                                    rotateLeft: (numBits: number | Long) => Long;
                                    rotl: (numBits: number | Long) => Long;
                                    rotateRight: (numBits: number | Long) => Long;
                                    rotr: (numBits: number | Long) => Long;
                                    subtract: (subtrahend: string | number | Long) => Long;
                                    sub: (subtrahend: string | number | Long) => Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long;
                                    xor: (other: string | number | Long) => Long;
                                } & { [K_119 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                            } & { [K_120 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../../../tendermint/types/validator").ValidatorSet>]: never; }) | undefined;
                        } & { [K_121 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("../../../../tendermint/types/types").LightBlock>]: never; }) | undefined;
                        commonHeight?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_122 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>]: never; }) | undefined;
                        byzantineValidators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & { [K_123 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                            votingPower?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_124 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                            proposerPriority?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_125 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                        } & { [K_126 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("../../../../tendermint/types/validator").Validator>]: never; })[] & { [K_127 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[]>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_128 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_129 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("../../../../tendermint/types/evidence").LightClientAttackEvidence>]: never; }) | undefined;
                } & { [K_130 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"][number], keyof import("../../../../tendermint/types/evidence").Evidence>]: never; })[] & { [K_131 in Exclude<keyof I_1["blocks"][number]["evidence"]["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_132 in Exclude<keyof I_1["blocks"][number]["evidence"], "evidence">]: never; }) | undefined;
            lastCommit?: ({
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_133 in Exclude<keyof I_1["blocks"][number]["lastCommit"]["height"], keyof Long>]: never; }) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_134 in Exclude<keyof I_1["blocks"][number]["lastCommit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_135 in Exclude<keyof I_1["blocks"][number]["lastCommit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>]: never; }) | undefined;
                signatures?: ({
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_136 in Exclude<keyof I_1["blocks"][number]["lastCommit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_137 in Exclude<keyof I_1["blocks"][number]["lastCommit"]["signatures"], keyof {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_138 in Exclude<keyof I_1["blocks"][number]["lastCommit"], keyof import("../../../../tendermint/types/types").Commit>]: never; }) | undefined;
        } & { [K_139 in Exclude<keyof I_1["blocks"][number], keyof Block>]: never; })[] & { [K_140 in Exclude<keyof I_1["blocks"], keyof {
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/validator").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_141 in Exclude<keyof I_1, keyof SearchBlocksResult>]: never; }>(object: I_1): SearchBlocksResult;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
