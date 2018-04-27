"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("./arrayHelper");
/**
 * Object helper methods
 */
class ObjectHelper {
    static getClassName(object) {
        if (object === undefined || object === null) {
            return "<no object>";
        }
        else {
            const constructor = typeof object === "function" ? object.toString() : object.constructor.toString();
            const results = constructor.match(/\w+/g);
            return (results && results.length > 1) ? results[1] : "<no object>";
        }
    }
    static addRemove(object, key, value, add) {
        if (object !== undefined && object !== null && key !== undefined && key !== null) {
            if (add) {
                object[key] = value;
            }
            else {
                if (object[key]) {
                    delete object[key];
                }
            }
        }
    }
    static sort(object) {
        if (object === undefined || object === null) {
            return object;
        }
        else {
            const newObject = {};
            const keys = Object.keys(object).sort();
            keys.forEach(key => {
                newObject[key] = object[key];
            });
            return newObject;
        }
    }
    static merge(obj1, obj2) {
        if (obj1 === undefined || obj1 === null) {
            return obj2;
        }
        else if (obj2 !== undefined && obj2 !== null) {
            if (Array.isArray(obj1) || Array.isArray(obj2)) {
                return arrayHelper_1.ArrayHelper.merge(obj1, obj2);
            }
            else {
                const keys = Object.keys(obj2);
                keys.forEach(key => {
                    if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
                        obj1[key] = arrayHelper_1.ArrayHelper.merge(obj1[key], obj2[key]);
                    }
                    else if (typeof obj1[key] === "object" || typeof obj2[key] === "object") {
                        obj1[key] = ObjectHelper.merge(obj1[key], obj2[key]);
                    }
                    else {
                        obj1[key] = obj2[key];
                    }
                });
            }
            return obj1;
        }
        else {
            return obj1;
        }
    }
}
exports.ObjectHelper = ObjectHelper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE0QztBQUM1Qzs7R0FFRztBQUNIO0lBQ1csTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFXO1FBQ2xDLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pDLE9BQU8sYUFBYSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxNQUFNLFdBQVcsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRyxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBSSxNQUFTLEVBQUUsR0FBWSxFQUFFLEtBQVUsRUFBRSxHQUFZO1FBQ3hFLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUM5RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNILElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNiLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUE2QjtRQUM1QyxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6QyxPQUFPLE1BQU0sQ0FBQztTQUNqQjthQUFNO1lBQ0gsTUFBTSxTQUFTLEdBQTZCLEVBQUUsQ0FBQztZQUMvQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBUyxFQUFFLElBQVM7UUFDcEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLHlCQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4QztpQkFBTTtnQkFDSCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcseUJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUN2RDt5QkFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDeEQ7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDekI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0NBQ0o7QUE1REQsb0NBNERDIiwiZmlsZSI6ImhlbHBlcnMvb2JqZWN0SGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi9hcnJheUhlbHBlclwiO1xuLyoqXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGNsYXNzIE9iamVjdEhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQgfHwgb2JqZWN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8bm8gb2JqZWN0PlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogXCI8bm8gb2JqZWN0PlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhZGRSZW1vdmU8VD4ob2JqZWN0OiBULCBrZXk6IGtleW9mIFQsIHZhbHVlOiBhbnksIGFkZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAob2JqZWN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0ICE9PSBudWxsICYmIGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3Rba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzb3J0KG9iamVjdDogeyBbaWQ6IHN0cmluZ106IGFueSB9KTogeyBbaWQ6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gdW5kZWZpbmVkIHx8IG9iamVjdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iamVjdDogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KS5zb3J0KCk7XG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZShvYmoxOiBhbnksIG9iajI6IGFueSkgOiBhbnkge1xuICAgICAgICBpZiAob2JqMSA9PT0gdW5kZWZpbmVkIHx8IG9iajEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmoyO1xuICAgICAgICB9IGVsc2UgaWYgKG9iajIgIT09IHVuZGVmaW5lZCAmJiBvYmoyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmoxKSB8fCBBcnJheS5pc0FycmF5KG9iajIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5SGVscGVyLm1lcmdlKG9iajEsIG9iajIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqMik7XG5cbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMVtrZXldKSB8fCBBcnJheS5pc0FycmF5KG9iajJba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iajFba2V5XSA9IEFycmF5SGVscGVyLm1lcmdlKG9iajFba2V5XSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqMVtrZXldID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmoyW2tleV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iajFba2V5XSA9IE9iamVjdEhlbHBlci5tZXJnZShvYmoxW2tleV0sIG9iajJba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmoxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9iajE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
