/**
 * Default logger for when no logger exists
 */
export class DefaultLogger {
    public static log(message: string, ...args: any[]): void {
        // tslint:disable-next-line:no-console
        console.log(message, ...args);
    }
}
