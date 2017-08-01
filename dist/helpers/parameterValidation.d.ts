/**
 * Parameter validation.
 */
import { IDisplay } from "../interfaces/IDisplay";
export declare class ParameterValidation {
    static checkPackageName(display: IDisplay, name: string, value: string | undefined | null): boolean;
    static checkPattern(display: IDisplay, name: string, value: string | undefined | null, pattern: RegExp, patternExplain: string): boolean;
    static checkOneOf<T extends string>(display: IDisplay, name: string, value: T | undefined | null, values: T[]): boolean;
    static notEmpty(display: IDisplay, name: string, value: string | string[] | undefined | null): boolean;
    static isNumeric(display: IDisplay, name: string, value: string | undefined | null): boolean;
    static isColor(display: IDisplay, name: string, value: string | undefined | null): boolean;
    static contains(display: IDisplay, name: string, values: string[], value: string | undefined | null, error: string): Promise<boolean>;
}
