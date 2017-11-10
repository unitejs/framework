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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNIO0lBQ1csTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBdUI7UUFDeEQsNENBQTRDO1FBQzVDLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsRUFBRTtZQUN6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLHdDQUF3QztvQkFDeEMsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBVztRQUM1QixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxtREFBbUQ7WUFDbkQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLHVDQUF1QztZQUN2QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RCx1REFBdUQ7WUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLDJEQUEyRDtZQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkMsNkNBQTZDO1lBQzdDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFZO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixtREFBbUQ7WUFDbkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUMsc0NBQXNDO1lBQ3RDLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xGLHVEQUF1RDtZQUN2RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsMkRBQTJEO1lBQzNELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxvQ0FBb0M7WUFDcEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRTNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUF6REQsZ0NBeURDIiwiZmlsZSI6ImhlbHBlcnMvanNvbkhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSnNvbiBoZWxwZXIgbWV0aG9kc1xuICovXG5leHBvcnQgY2xhc3MgSnNvbkhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBzdHJpbmdpZnkob2JqZWN0OiBhbnksIHNwYWNlPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgLy8gZWxpbWluYXRlcyBhbnkgcmVjdXJzaW9uIGluIHRoZSBzdHJpbmdpZnlcbiAgICAgICAgY29uc3QgY2FjaGU6IGFueVtdID0gW107XG5cbiAgICAgICAgY29uc3QgcmVwbGFjZXIgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QsIHJlcGxhY2VyLCBzcGFjZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb2RpZnkob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCwgdW5kZWZpbmVkLCBcIlxcdFwiKTtcbiAgICAgICAgICAgIC8vIGZpcnN0IHN1YnN0aXR1ZSBlbWJlZGRlZCBkb3VibGUgcXVvdGVzIHdpdGggRkZGRlxuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvXFxcXFwiL2csIFwiXFx1RkZGRlwiKTtcbiAgICAgICAgICAgIC8vIG5vdyByZXBsYWNlIGFsbCBwcm9wZXJ0eSBuYW1lIHF1b3Rlc1xuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvXCIoW2EtekEtWl8kXVthLXpBLVowLTlfJF0rKVwiOi9nLCBcIiQxOlwiKTtcbiAgICAgICAgICAgIC8vIG5vdyByZXBsYWNlIGFsbCBvdGhlciBkb3VibGUgcXVvdGVzIHdpdGggc2luZ2xlIG9uZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcbiAgICAgICAgICAgIC8vIGFuZCBmaW5hbGx5IHJlcGxhY2UgdGhlIEZGRkYgd2l0aCBlbWJlZGRlZCBkb3VibGUgcXVvdGVzXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC9cXHVGRkZGL2csIFwiXFxcXFxcXCJcIik7XG4gICAgICAgICAgICAvLyBub3cgcmVtb3ZlIHF1b3RlcyBmb3Iga25vd24gY29kZSB2YXJpYWJsZXNcbiAgICAgICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoLydfX2Rpcm5hbWUnL2csIFwiX19kaXJuYW1lXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlQ29kZSh0ZXh0OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZmlyc3Qgc3Vic3RpdHVlIGVtYmVkZGVkIHNpbmdsZSBxdW90ZXMgd2l0aCBGRkZGXG4gICAgICAgICAgICBsZXQganNvblRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwnL2csIFwiXFx1RkZGRlwiKTtcbiAgICAgICAgICAgIC8vIGFkZCBkb3VibGUgcXVvdGVzIHRvIHByb3BlcnR5IG5hbWVzXG4gICAgICAgICAgICBqc29uVGV4dCA9IGpzb25UZXh0LnJlcGxhY2UoL1xcbig/OlxccyopKFthLXpBLVpfJF1bYS16QS1aMC05XyRdKyk6XFxzL2csIFwiXFxcIiQxXFxcIjpcIik7XG4gICAgICAgICAgICAvLyBub3cgcmVwbGFjZSBhbGwgb3RoZXIgc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBvbmVzXG4gICAgICAgICAgICBqc29uVGV4dCA9IGpzb25UZXh0LnJlcGxhY2UoLycvZywgXCJcXFwiXCIpO1xuICAgICAgICAgICAgLy8gYW5kIGZpbmFsbHkgcmVwbGFjZSB0aGUgRkZGRiB3aXRoIGVtYmVkZGVkIHNpbmdsZSBxdW90ZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvXFx1RkZGRi9nLCBcIidcIik7XG4gICAgICAgICAgICAvLyBub3cgYWRkIHF1b3RlcyB0byBrbm93biB2YXJpYWJsZXNcbiAgICAgICAgICAgIGpzb25UZXh0ID0ganNvblRleHQucmVwbGFjZSgvX19kaXJuYW1lL2csIFwiXFxcIl9fZGlybmFtZVxcXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25UZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
