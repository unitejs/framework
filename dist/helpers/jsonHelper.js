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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQWEsVUFBVTtJQUNaLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBVyxFQUFFLEtBQXVCO1FBQ3hELDRDQUE0QztRQUM1QyxNQUFNLEtBQUssR0FBVSxFQUFFLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVSxFQUFFLEVBQUU7WUFDekMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUNwRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzdCLHdDQUF3QztvQkFDeEMsT0FBTztpQkFDVjtxQkFBTTtvQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyQjthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBVztRQUM1QixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUM7U0FDakI7YUFBTTtZQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxtREFBbUQ7WUFDbkQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLHVDQUF1QztZQUN2QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RCx1REFBdUQ7WUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLDJEQUEyRDtZQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkMsNkNBQTZDO1lBQzdDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNqRCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUNoQyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxtREFBbUQ7WUFDbkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUMsc0NBQXNDO1lBQ3RDLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xGLHVEQUF1RDtZQUN2RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsMkRBQTJEO1lBQzNELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxvQ0FBb0M7WUFDcEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRTNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7Q0FDSjtBQXpERCxnQ0F5REMiLCJmaWxlIjoiaGVscGVycy9qc29uSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBKc29uIGhlbHBlciBtZXRob2RzXG4gKi9cbmV4cG9ydCBjbGFzcyBKc29uSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ2lmeShvYmplY3Q6IGFueSwgc3BhY2U/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxuICAgICAgICBjb25zdCBjYWNoZTogYW55W10gPSBbXTtcblxuICAgICAgICBjb25zdCByZXBsYWNlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCwgcmVwbGFjZXIsIHNwYWNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvZGlmeShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCB1bmRlZmluZWQsIFwiXFx0XCIpO1xuICAgICAgICAgICAgLy8gZmlyc3Qgc3Vic3RpdHVlIGVtYmVkZGVkIGRvdWJsZSBxdW90ZXMgd2l0aCBGRkZGXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cXFxcXCIvZywgXCJcXHVGRkZGXCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlcGxhY2UgYWxsIHByb3BlcnR5IG5hbWUgcXVvdGVzXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cIihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSspXCI6L2csIFwiJDE6XCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlcGxhY2UgYWxsIG90aGVyIGRvdWJsZSBxdW90ZXMgd2l0aCBzaW5nbGUgb25lc1xuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuICAgICAgICAgICAgLy8gYW5kIGZpbmFsbHkgcmVwbGFjZSB0aGUgRkZGRiB3aXRoIGVtYmVkZGVkIGRvdWJsZSBxdW90ZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1xcdUZGRkYvZywgXCJcXFxcXFxcIlwiKTtcbiAgICAgICAgICAgIC8vIG5vdyByZW1vdmUgcXVvdGVzIGZvciBrbm93biBjb2RlIHZhcmlhYmxlc1xuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvJ19fZGlybmFtZScvZywgXCJfX2Rpcm5hbWVcIik7XG4gICAgICAgICAgICByZXR1cm4ganNvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VDb2RlKHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgdGV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWJzdGl0dWUgZW1iZWRkZWQgc2luZ2xlIHF1b3RlcyB3aXRoIEZGRkZcbiAgICAgICAgICAgIGxldCBqc29uVGV4dCA9IHRleHQucmVwbGFjZSgvXFxcXCcvZywgXCJcXHVGRkZGXCIpO1xuICAgICAgICAgICAgLy8gYWRkIGRvdWJsZSBxdW90ZXMgdG8gcHJvcGVydHkgbmFtZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvXFxuKD86XFxzKikoW2EtekEtWl8kXVthLXpBLVowLTlfJF0rKTpcXHMvZywgXCJcXFwiJDFcXFwiOlwiKTtcbiAgICAgICAgICAgIC8vIG5vdyByZXBsYWNlIGFsbCBvdGhlciBzaW5nbGUgcXVvdGVzIHdpdGggZG91YmxlIG9uZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvJy9nLCBcIlxcXCJcIik7XG4gICAgICAgICAgICAvLyBhbmQgZmluYWxseSByZXBsYWNlIHRoZSBGRkZGIHdpdGggZW1iZWRkZWQgc2luZ2xlIHF1b3Rlc1xuICAgICAgICAgICAganNvblRleHQgPSBqc29uVGV4dC5yZXBsYWNlKC9cXHVGRkZGL2csIFwiJ1wiKTtcbiAgICAgICAgICAgIC8vIG5vdyBhZGQgcXVvdGVzIHRvIGtub3duIHZhcmlhYmxlc1xuICAgICAgICAgICAganNvblRleHQgPSBqc29uVGV4dC5yZXBsYWNlKC9fX2Rpcm5hbWUvZywgXCJcXFwiX19kaXJuYW1lXFxcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
