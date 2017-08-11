/**
 * Parameter validation.
 */
import { ILogger } from "../interfaces/ILogger";
import { ColorHelper } from "./colorHelper";

export class ParameterValidation {
    public static checkPackageName(logger: ILogger, name: string, value: string | undefined | null): boolean {
        // Rules from here https://docs.npmjs.com/files/package.json
        // here https://github.com/npm/validate-npm-package-name
        // and here https://github.com/npm/npm-registry-couchapp/
        // blob/b31793881ff95c5bca5966a0a8bf8e5f7a801247/registry/modules.js#L93
        if (value === undefined || value === null || value.length === 0) {
            logger.error(name, "parameter is missing.");
            return false;
        }

        if (value.length > 214) {
            logger.error(name, "must be less than or equal to 214 characters.");
            return false;
        }

        if (value.toLowerCase() !== value) {
            logger.error(name, "must not have uppercase letters in it.");
            return false;
        }

        if (value[0] === "." || value[0] === "-" || value[0] === "_") {
            logger.error(name, "must not start with a dot, hyphen or underscore.");
            return false;
        }

        if (value.match(/[\/\\\(\)&\?#\|<>@:%\s\*'"!~`]/)) {
            logger.error(name, "must not have any special characters.");
            return false;
        }

        if (encodeURIComponent(value) !== value) {
            logger.error(name, "can't contain any non-URL-safe characters.");
            return false;
        }

        logger.info(name, { value });

        return true;
    }

    public static checkPattern(logger: ILogger, name: string, value: string | undefined | null, pattern: RegExp, patternExplain: string): boolean {
        if (value === undefined || value === null || value.length === 0) {
            logger.error(name, "parameter is missing.");
            return false;
        }

        if (pattern === undefined || pattern === null) {
            logger.error(name, "pattern is missing.");
            return false;
        }

        if (!pattern.test(value)) {
            logger.error(name, `does not match pattern ${patternExplain}.`);
            return false;
        }

        logger.info(name, { value });

        return true;
    }

    public static checkOneOf<T extends string>(logger: ILogger, name: string, value: T | undefined | null, values: T[], error?: string): boolean {
        if (value === undefined || value === null || value.length === 0) {
            logger.error(name, "parameter is missing.");
            return false;
        }

        if (values === undefined || values === null || values.length === 0) {
            logger.error(name, "values are missing.");
            return false;
        }

        if (values.indexOf(value) === -1) {
            if (error) {
                logger.error(name, error);
            } else {
                logger.error(name, `does not match any of the possible values. [${values.join(",")}]`);
            }
            return false;
        }

        logger.info(name, { value });

        return true;
    }

    public static notEmpty(logger: ILogger, name: string, value: string | string[] | undefined | null): boolean {
        if (value === undefined || value === null || value.length === 0) {
            logger.error(name, "parameter is missing.");
            return false;
        }

        logger.info(name, { value });

        return true;
    }

    public static notEmptyNumber(logger: ILogger, name: string, value: number | undefined | null): boolean {
        if (value === undefined || value === null) {
            logger.error(name, "parameter is missing.");
            return false;
        }

        if (value <= 0) {
            logger.error(name, "must be greater than zero.");
            return false;
        }

        logger.info(name, { value });

        return true;
    }

    public static isColor(logger: ILogger, name: string, value: string | undefined | null): boolean {
        if (value === undefined || value === null || value.length === 0) {
            logger.error(name, "parameter is missing.");
            return false;
        }

        if (!ColorHelper.isHex(value)) {
            logger.error(name, "is not a hex color.");
            return false;
        }

        logger.info(name, { value });

        return true;
    }
}
