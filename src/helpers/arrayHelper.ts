/**
 * Array helper methods
 */
import { ObjectHelper } from "./objectHelper";

export class ArrayHelper {
    public static addRemove<T>(arr: T[], object: T, add: boolean, matcher?: (object: T, item: T) => boolean): void {
        if (arr !== undefined && arr !== null && object !== undefined && object !== null) {
            const idx = matcher ? arr.findIndex(item => matcher(object, item)) : arr.indexOf(object);
            if (add) {
                if (idx < 0) {
                    arr.push(object);
                }
            } else {
                if (idx >= 0) {
                    arr.splice(idx, 1);
                }
            }
        }
    }

    public static merge(obj1: any[], obj2: any[]) : any[] {
        if (obj1 === undefined || obj1 === null) {
            return obj2;
        } else if (obj2 === undefined || obj2 === null) {
            return obj1;
        } else {
            // If anything in the array is an object then merge by index
            if (obj2.filter(item => typeof item === "object").length > 0) {
                const newArray = [];
                for (let i = 0; i < Math.max(obj1.length, obj2.length); i++) {
                    const o1 = i < obj1.length ? obj1[i] : undefined;
                    const o2 = i < obj2.length ? obj2[i] : undefined;
                    newArray.push(ObjectHelper.merge(o1, o2));
                }
                return newArray;

            } else {
                obj2.forEach((item: any) => {
                    const idx = obj1.indexOf(item);
                    if (idx < 0) {
                        obj1.push(item);
                    }
                });
            }

            return obj1;
        }
    }
}
