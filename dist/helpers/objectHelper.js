"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.ObjectHelper = ObjectHelper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0g7SUFDVyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQVc7UUFDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sV0FBVyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRyxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDeEUsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQVZELG9DQVVDIiwiZmlsZSI6ImhlbHBlcnMvb2JqZWN0SGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGNsYXNzIE9iamVjdEhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQgfHwgb2JqZWN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8bm8gb2JqZWN0PlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogXCI8bm8gb2JqZWN0PlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
