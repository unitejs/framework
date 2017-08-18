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
}
