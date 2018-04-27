"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * String helper methods
 */
class StringHelper {
    static isString(value) {
        return value === null || value === undefined
            ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    static toCamelCase(val) {
        return val && val.length > 0 ? val.substr(0, 1).toLowerCase() + val.substr(1) : val;
    }
}
exports.StringHelper = StringHelper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0g7SUFDVyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVU7UUFDN0IsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTO1lBQ3hDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztJQUM5RSxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXO1FBQ2pDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDeEYsQ0FBQztDQUNKO0FBVEQsb0NBU0MiLCJmaWxlIjoiaGVscGVycy9zdHJpbmdIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kc1xuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzU3RyaW5nKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9DYW1lbENhc2UodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsICYmIHZhbC5sZW5ndGggPiAwID8gdmFsLnN1YnN0cigwLCAxKS50b0xvd2VyQ2FzZSgpICsgdmFsLnN1YnN0cigxKSA6IHZhbDtcbiAgICB9XG59XG4iXX0=
