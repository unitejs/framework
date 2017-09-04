/**
 * Json helper methods
 */
export class JsonHelper {
    public static stringify(object: any, space?: string | number): string {
        // eliminates any recursion in the stringify
        const cache: any[] = [];

        const replacer = (key: string, value: any) => {
            if (typeof value === "object" && value !== null && value !== undefined) {
                if (cache.indexOf(value) !== -1) {
                    // circular reference found, discard key
                    return;
                } else {
                    cache.push(value);
                }
            }
            return value;
        };

        return JSON.stringify(object, replacer, space);
    }

    public static codify(object: any): string {
        if (object === undefined) {
            return object;
        } else {
            let json = JSON.stringify(object, undefined, "\t");
            // first substitue embedded double quotes with FFFF
            json = json.replace(/\\"/g, "\uFFFF");
            // now replace all property name quotes
            json = json.replace(/"([a-zA-Z_$][a-zA-Z0-9_$]+)":/g, "$1:");
            // now replace all other double quotes with single ones
            json = json.replace(/"/g, "'");
            // and finally replace the FFFF with embedded double quotes
            json = json.replace(/\uFFFF/g, "\\\"");
            // now remove quotes for known code variables
            json = json.replace(/'__dirname'/g, "__dirname");
            return json;
        }
    }

    public static parseCode(text: string): any {
        if (text === undefined || text === null) {
            return text;
        } else {
            // first substitue embedded sinble quotes with FFFF
            let jsonText = text.replace(/\\'/g, "\uFFFF");
            // add double quotes to property names
            jsonText = jsonText.replace(/([a-zA-Z_$][a-zA-Z0-9_$]+):/g, "\"$1\":");
            // now replace all other single quotes with double ones
            jsonText = jsonText.replace(/'/g, "\"");
            // and finally replace the FFFF with embedded single quotes
            jsonText = jsonText.replace(/\uFFFF/g, "'");
            // now add quotes to known variables
            jsonText = jsonText.replace(/__dirname/g, "\"__dirname\"");

            return JSON.parse(jsonText);
        }
    }
}
