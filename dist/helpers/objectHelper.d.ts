/**
 * Object helper methods
 */
export declare class ObjectHelper {
    static getClassName(object: any): string;
    static addRemove(object: any, key: any, value: any, add: boolean): void;
    static sort(object: {
        [id: string]: any;
    }): {
        [id: string]: any;
    };
    static merge(obj1: any, obj2: any): any;
}
