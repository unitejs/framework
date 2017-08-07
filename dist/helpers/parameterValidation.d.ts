/**
 * Parameter validation.
 */
import { ILogger } from "../interfaces/ILogger";
export declare class ParameterValidation {
    static checkPackageName(logger: ILogger, name: string, value: string | undefined | null): boolean;
    static checkPattern(logger: ILogger, name: string, value: string | undefined | null, pattern: RegExp, patternExplain: string): boolean;
    static checkOneOf<T extends string>(logger: ILogger, name: string, value: T | undefined | null, values: T[]): boolean;
    static notEmpty(logger: ILogger, name: string, value: string | string[] | undefined | null): boolean;
    static isNumeric(logger: ILogger, name: string, value: string | undefined | null): boolean;
    static isColor(logger: ILogger, name: string, value: string | undefined | null): boolean;
    static contains(logger: ILogger, name: string, values: string[], value: string | undefined | null, error: string): Promise<boolean>;
}
