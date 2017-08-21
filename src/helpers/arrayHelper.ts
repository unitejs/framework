/**
 * Array helper methods
 */
export class ArrayHelper {
    public static addRemove(arr: any[], key: any, add: boolean): void {
        if (arr !== undefined && arr !== null && key !== undefined && key !== null) {
            const idx = arr.indexOf(key);
            if (add) {
                if (idx < 0) {
                    arr.push(key);
                }
            } else {
                if (idx >= 0) {
                    arr.splice(idx, 1);
                }
            }
        }
    }

    public static merge(obj1: any[], obj2: any[]) : any {
        if (obj1 === undefined || obj1 === null) {
            return obj2;
        } else if (obj2 === undefined || obj2 === null) {
            return obj1;
        } else {
            obj2.forEach((item: any) => {
                const idx = obj1.indexOf(item);
                if (idx < 0) {
                    obj1.push(item);
                }
            });

            return obj1;
        }
    }
}
