import { ArrayHelper } from "./arrayHelper";
/**
 * Object helper methods
 */
export class ObjectHelper {
    public static getClassName(object: any): string {
        if (object === undefined || object === null) {
            return "<no object>";
        } else {
            const constructor = typeof object === "function" ? object.toString() : object.constructor.toString();
            const results = constructor.match(/\w+/g);
            return (results && results.length > 1) ? results[1] : "<no object>";
        }
    }

    public static addRemove(object: any, key: any, value: any, add: boolean): void {
        if (object !== undefined && object !== null && key !== undefined && key !== null) {
            if (add) {
                object[key] = value;
            } else {
                if (object[key]) {
                    delete object[key];
                }
            }
        }
    }

    public static sort(object: { [id: string]: any }): { [id: string]: any } {
        if (object === undefined || object === null) {
            return object;
        } else {
            const newObject: { [id: string]: string } = {};
            const keys = Object.keys(object).sort();
            keys.forEach(key => {
                newObject[key] = object[key];
            });
            return newObject;
        }
    }

    public static merge(obj1: any, obj2: any) : any {
        if (obj1 === undefined || obj1 === null) {
            return obj2;
        } else if (obj2 !== undefined && obj2 !== null) {
            if (Array.isArray(obj1) || Array.isArray(obj2)) {
                return ArrayHelper.merge(obj1, obj2);
            } else {
                const keys = Object.keys(obj2);

                keys.forEach(key => {
                    if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
                        obj1[key] = ArrayHelper.merge(obj1[key], obj2[key]);
                    } else if (typeof obj1[key] === "object" || typeof obj2[key] === "object") {
                        obj1[key] = ObjectHelper.merge(obj1[key], obj2[key]);
                    } else {
                        obj1[key] = obj2[key];
                    }
                });
            }
            return obj1;
        } else {
            return obj1;
        }
    }
}
