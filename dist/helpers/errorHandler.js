"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonHelper_1 = require("./jsonHelper");
const stringHelper_1 = require("./stringHelper");
/**
 * Handle errors as gracefully as possible
 */
class ErrorHandler {
    static format(err) {
        if (err === null || err === undefined) {
            return "unknown error";
        }
        else if (err instanceof Error) {
            return err.message;
        }
        else {
            if (stringHelper_1.StringHelper.isString(err)) {
                return err;
            }
            else {
                return jsonHelper_1.JsonHelper.stringify(err, "\t");
            }
        }
    }
}
exports.ErrorHandler = ErrorHandler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUM7O0dBRUc7QUFDSDtJQUNXLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBUTtRQUN6QixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLGVBQWUsQ0FBQztTQUMxQjthQUFNLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtZQUM3QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDdEI7YUFBTTtZQUNILElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0gsT0FBTyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7U0FDSjtJQUNMLENBQUM7Q0FDSjtBQWRELG9DQWNDIiwiZmlsZSI6ImhlbHBlcnMvZXJyb3JIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkhlbHBlciB9IGZyb20gXCIuL2pzb25IZWxwZXJcIjtcbmltcG9ydCB7IFN0cmluZ0hlbHBlciB9IGZyb20gXCIuL3N0cmluZ0hlbHBlclwiO1xuLyoqXG4gKiBIYW5kbGUgZXJyb3JzIGFzIGdyYWNlZnVsbHkgYXMgcG9zc2libGVcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlciB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXQoZXJyOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZXJyID09PSBudWxsIHx8IGVyciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ1bmtub3duIGVycm9yXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTdHJpbmdIZWxwZXIuaXNTdHJpbmcoZXJyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBKc29uSGVscGVyLnN0cmluZ2lmeShlcnIsIFwiXFx0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
