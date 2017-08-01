/**
 * Color helper methods
 */
export class ColorHelper {
    public static isHex(hex: string): boolean {
        if (hex === null || hex === undefined || hex.length === 0) {
            return false;
        } else {
            return /#([a-f0-9]{3}){1,2}\b/i.test(hex);
        }
    }

    public static parseHex(hex: string): { r: number; g: number; b: number} {
        if (ColorHelper.isHex(hex)) {
            if (hex.length === 4) {
                return {
                    r: parseInt(hex.substring(1, 2), 16),
                    g: parseInt(hex.substring(2, 3), 16),
                    b: parseInt(hex.substring(3, 4), 16)
                };
            } else {
                return {
                    r: parseInt(hex.substring(1, 3), 16),
                    g: parseInt(hex.substring(3, 5), 16),
                    b: parseInt(hex.substring(5, 7), 16)
                };
            }
        } else {
            return undefined;
        }
    }
}
