/**
 * Interface for logging diagnostics.
 */
export interface ILogger {
    banner(message: string, args?: { [id: string]: any }): void;
    info(message: string, args?: { [id: string]: any }): void;
    warning(message: string, args?: { [id: string]: any }): void;
    error(message: string, err?: any, args?: { [id: string]: any }): void;
}
