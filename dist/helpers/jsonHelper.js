"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Json helper methods
 */
class JsonHelper {
    static stringify(object, space) {
        // eliminates any recursion in the stringify
        const cache = [];
        const replacer = (key, value) => {
            if (typeof value === "object" && value !== null && value !== undefined) {
                if (cache.indexOf(value) !== -1) {
                    // circular reference found, discard key
                    return;
                }
                else {
                    cache.push(value);
                }
            }
            return value;
        };
        return JSON.stringify(object, replacer, space);
    }
    static codify(object) {
        if (object === undefined) {
            return object;
        }
        else {
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
    static parseCode(text) {
        if (text === undefined || text === null) {
            return text;
        }
        else {
            // first substitue embedded single quotes with FFFF
            let jsonText = text.replace(/\\'/g, "\uFFFF");
            // add double quotes to property names
            jsonText = jsonText.replace(/\n(?:\s*)([a-zA-Z_$][a-zA-Z0-9_$]+):\s/g, "\"$1\":");
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
exports.JsonHelper = JsonHelper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNIO0lBQ1csTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBdUI7UUFDeEQsNENBQTRDO1FBQzVDLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3BFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDN0Isd0NBQXdDO29CQUN4QyxPQUFPO2lCQUNWO3FCQUFNO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFXO1FBQzVCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNqQjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELG1EQUFtRDtZQUNuRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEMsdUNBQXVDO1lBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdELHVEQUF1RDtZQUN2RCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0IsMkRBQTJEO1lBQzNELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2Qyw2Q0FBNkM7WUFDN0MsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFZO1FBQ2hDLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILG1EQUFtRDtZQUNuRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QyxzQ0FBc0M7WUFDdEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMseUNBQXlDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEYsdURBQXVEO1lBQ3ZELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QywyREFBMkQ7WUFDM0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLG9DQUFvQztZQUNwQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFM0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztDQUNKO0FBekRELGdDQXlEQyIsImZpbGUiOiJoZWxwZXJzL2pzb25IZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEpzb24gaGVscGVyIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGNsYXNzIEpzb25IZWxwZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5naWZ5KG9iamVjdDogYW55LCBzcGFjZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XG4gICAgICAgIGNvbnN0IGNhY2hlOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHJlcGxhY2VyID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCByZXBsYWNlciwgc3BhY2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29kaWZ5KG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmplY3QsIHVuZGVmaW5lZCwgXCJcXHRcIik7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWJzdGl0dWUgZW1iZWRkZWQgZG91YmxlIHF1b3RlcyB3aXRoIEZGRkZcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1xcXFxcIi9nLCBcIlxcdUZGRkZcIik7XG4gICAgICAgICAgICAvLyBub3cgcmVwbGFjZSBhbGwgcHJvcGVydHkgbmFtZSBxdW90ZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1wiKFthLXpBLVpfJF1bYS16QS1aMC05XyRdKylcIjovZywgXCIkMTpcIik7XG4gICAgICAgICAgICAvLyBub3cgcmVwbGFjZSBhbGwgb3RoZXIgZG91YmxlIHF1b3RlcyB3aXRoIHNpbmdsZSBvbmVzXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG4gICAgICAgICAgICAvLyBhbmQgZmluYWxseSByZXBsYWNlIHRoZSBGRkZGIHdpdGggZW1iZWRkZWQgZG91YmxlIHF1b3Rlc1xuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvXFx1RkZGRi9nLCBcIlxcXFxcXFwiXCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlbW92ZSBxdW90ZXMgZm9yIGtub3duIGNvZGUgdmFyaWFibGVzXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC8nX19kaXJuYW1lJy9nLCBcIl9fZGlybmFtZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZUNvZGUodGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCB0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IHN1YnN0aXR1ZSBlbWJlZGRlZCBzaW5nbGUgcXVvdGVzIHdpdGggRkZGRlxuICAgICAgICAgICAgbGV0IGpzb25UZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFxcJy9nLCBcIlxcdUZGRkZcIik7XG4gICAgICAgICAgICAvLyBhZGQgZG91YmxlIHF1b3RlcyB0byBwcm9wZXJ0eSBuYW1lc1xuICAgICAgICAgICAganNvblRleHQgPSBqc29uVGV4dC5yZXBsYWNlKC9cXG4oPzpcXHMqKShbYS16QS1aXyRdW2EtekEtWjAtOV8kXSspOlxccy9nLCBcIlxcXCIkMVxcXCI6XCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlcGxhY2UgYWxsIG90aGVyIHNpbmdsZSBxdW90ZXMgd2l0aCBkb3VibGUgb25lc1xuICAgICAgICAgICAganNvblRleHQgPSBqc29uVGV4dC5yZXBsYWNlKC8nL2csIFwiXFxcIlwiKTtcbiAgICAgICAgICAgIC8vIGFuZCBmaW5hbGx5IHJlcGxhY2UgdGhlIEZGRkYgd2l0aCBlbWJlZGRlZCBzaW5nbGUgcXVvdGVzXG4gICAgICAgICAgICBqc29uVGV4dCA9IGpzb25UZXh0LnJlcGxhY2UoL1xcdUZGRkYvZywgXCInXCIpO1xuICAgICAgICAgICAgLy8gbm93IGFkZCBxdW90ZXMgdG8ga25vd24gdmFyaWFibGVzXG4gICAgICAgICAgICBqc29uVGV4dCA9IGpzb25UZXh0LnJlcGxhY2UoL19fZGlybmFtZS9nLCBcIlxcXCJfX2Rpcm5hbWVcXFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
