/**
 * Parameter validation.
 */
import { ILogger } from "../interfaces/ILogger";
export declare class ParameterValidation {
    static checkPackageName(logger: ILogger, name: string, value: string | undefined | null): boolean;
    static checkPattern(logger: ILogger, name: string, value: string | undefined | null, pattern: RegExp, patternExplain: string): boolean;
    static checkOneOf<T extends string>(logger: ILogger, name: string, value: T | undefined | null, values: T[], error?: string): boolean;
    static notEmpty(logger: ILogger, name: string, value: string | string[] | undefined | null): boolean;
    static notEmptyNumber(logger: ILogger, name: string, value: number | undefined | null): boolean;
    static isColor(logger: ILogger, name: string, value: string | undefined | null): boolean;
}
