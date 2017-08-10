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
            // first substitue embedded quotes with FFFF
            json = json.replace(/\\"/g, "\uFFFF");
            // now replace all property name quotes
            json = json.replace(/\"([a-zA-Z_$][a-zA-Z0-9_$]+)\":/g, "$1:");
            // now replace all other quotes with single ones
            json = json.replace(/\"/g, "'");
            // and finally replace the FFFF with original quotes
            json = json.replace(/\uFFFF/g, "\\\"");
            // only remove quotes for known code variables
            json = json.replace(/'__dirname'/g, "__dirname");
            return json;
        }
    }
}
exports.JsonHelper = JsonHelper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNIO0lBQ1csTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBdUI7UUFDeEQsNENBQTRDO1FBQzVDLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsd0NBQXdDO29CQUN4QyxNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFXO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELDRDQUE0QztZQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEMsdUNBQXVDO1lBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9ELGdEQUFnRDtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEMsb0RBQW9EO1lBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2Qyw4Q0FBOEM7WUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQXRDRCxnQ0FzQ0MiLCJmaWxlIjoiaGVscGVycy9qc29uSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBKc29uIGhlbHBlciBtZXRob2RzXG4gKi9cbmV4cG9ydCBjbGFzcyBKc29uSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ2lmeShvYmplY3Q6IGFueSwgc3BhY2U/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxuICAgICAgICBjb25zdCBjYWNoZTogYW55W10gPSBbXTtcblxuICAgICAgICBjb25zdCByZXBsYWNlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCwgcmVwbGFjZXIsIHNwYWNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvZGlmeShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCB1bmRlZmluZWQsIFwiXFx0XCIpO1xuICAgICAgICAgICAgLy8gZmlyc3Qgc3Vic3RpdHVlIGVtYmVkZGVkIHF1b3RlcyB3aXRoIEZGRkZcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1xcXFxcIi9nLCBcIlxcdUZGRkZcIik7XG4gICAgICAgICAgICAvLyBub3cgcmVwbGFjZSBhbGwgcHJvcGVydHkgbmFtZSBxdW90ZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1xcXCIoW2EtekEtWl8kXVthLXpBLVowLTlfJF0rKVxcXCI6L2csIFwiJDE6XCIpO1xuICAgICAgICAgICAgLy8gbm93IHJlcGxhY2UgYWxsIG90aGVyIHF1b3RlcyB3aXRoIHNpbmdsZSBvbmVzXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKTtcbiAgICAgICAgICAgIC8vIGFuZCBmaW5hbGx5IHJlcGxhY2UgdGhlIEZGRkYgd2l0aCBvcmlnaW5hbCBxdW90ZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1xcdUZGRkYvZywgXCJcXFxcXFxcIlwiKTtcbiAgICAgICAgICAgIC8vIG9ubHkgcmVtb3ZlIHF1b3RlcyBmb3Iga25vd24gY29kZSB2YXJpYWJsZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoLydfX2Rpcm5hbWUnL2csIFwiX19kaXJuYW1lXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
