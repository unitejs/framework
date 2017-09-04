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
exports.JsonHelper = JsonHelper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNIO0lBQ1csTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBdUI7UUFDeEQsNENBQTRDO1FBQzVDLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsd0NBQXdDO29CQUN4QyxNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFXO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELG1EQUFtRDtZQUNuRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEMsdUNBQXVDO1lBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdELHVEQUF1RDtZQUN2RCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0IsMkRBQTJEO1lBQzNELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2Qyw2Q0FBNkM7WUFDN0MsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVk7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLG1EQUFtRDtZQUNuRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QyxzQ0FBc0M7WUFDdEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkUsdURBQXVEO1lBQ3ZELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QywyREFBMkQ7WUFDM0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLG9DQUFvQztZQUNwQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQXpERCxnQ0F5REMiLCJmaWxlIjoiaGVscGVycy9qc29uSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBKc29uIGhlbHBlciBtZXRob2RzXG4gKi9cbmV4cG9ydCBjbGFzcyBKc29uSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ2lmeShvYmplY3Q6IGFueSwgc3BhY2U/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxuICAgICAgICBjb25zdCBjYWNoZTogYW55W10gPSBbXTtcblxuICAgICAgICBjb25zdCByZXBsYWNlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCwgcmVwbGFjZXIsIHNwYWNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvZGlmeShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCB1bmRlZmluZWQsIFwiXFx0XCIpO1xuICAgICAgICAgICAgLy8gZmlyc3Qgc3Vic3RpdHVlIGVtYmVkZGVkIGRvdWJsZSBxdW90ZXMgd2l0aCBGRkZGXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cXFxcXCIvZywgXCJcXHVGRkZGXCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlcGxhY2UgYWxsIHByb3BlcnR5IG5hbWUgcXVvdGVzXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cIihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSspXCI6L2csIFwiJDE6XCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlcGxhY2UgYWxsIG90aGVyIGRvdWJsZSBxdW90ZXMgd2l0aCBzaW5nbGUgb25lc1xuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuICAgICAgICAgICAgLy8gYW5kIGZpbmFsbHkgcmVwbGFjZSB0aGUgRkZGRiB3aXRoIGVtYmVkZGVkIGRvdWJsZSBxdW90ZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1xcdUZGRkYvZywgXCJcXFxcXFxcIlwiKTtcbiAgICAgICAgICAgIC8vIG5vdyByZW1vdmUgcXVvdGVzIGZvciBrbm93biBjb2RlIHZhcmlhYmxlc1xuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvJ19fZGlybmFtZScvZywgXCJfX2Rpcm5hbWVcIik7XG4gICAgICAgICAgICByZXR1cm4ganNvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VDb2RlKHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgdGV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzdWJzdGl0dWUgZW1iZWRkZWQgc2luYmxlIHF1b3RlcyB3aXRoIEZGRkZcbiAgICAgICAgICAgIGxldCBqc29uVGV4dCA9IHRleHQucmVwbGFjZSgvXFxcXCcvZywgXCJcXHVGRkZGXCIpO1xuICAgICAgICAgICAgLy8gYWRkIGRvdWJsZSBxdW90ZXMgdG8gcHJvcGVydHkgbmFtZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvKFthLXpBLVpfJF1bYS16QS1aMC05XyRdKyk6L2csIFwiXFxcIiQxXFxcIjpcIik7XG4gICAgICAgICAgICAvLyBub3cgcmVwbGFjZSBhbGwgb3RoZXIgc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBvbmVzXG4gICAgICAgICAgICBqc29uVGV4dCA9IGpzb25UZXh0LnJlcGxhY2UoLycvZywgXCJcXFwiXCIpO1xuICAgICAgICAgICAgLy8gYW5kIGZpbmFsbHkgcmVwbGFjZSB0aGUgRkZGRiB3aXRoIGVtYmVkZGVkIHNpbmdsZSBxdW90ZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvXFx1RkZGRi9nLCBcIidcIik7XG4gICAgICAgICAgICAvLyBub3cgYWRkIHF1b3RlcyB0byBrbm93biB2YXJpYWJsZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvX19kaXJuYW1lL2csIFwiXFxcIl9fZGlybmFtZVxcXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25UZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
