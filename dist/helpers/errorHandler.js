"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptionBase_1 = require("./exceptionBase");
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
        else if (err instanceof exceptionBase_1.ExceptionBase) {
            return err.toString();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFnRDtBQUNoRCw2Q0FBMEM7QUFDMUMsaURBQThDO0FBQzlDOztHQUVHO0FBQ0g7SUFDVyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVE7UUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLDZCQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQWhCRCxvQ0FnQkMiLCJmaWxlIjoiaGVscGVycy9lcnJvckhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGNlcHRpb25CYXNlIH0gZnJvbSBcIi4vZXhjZXB0aW9uQmFzZVwiO1xuaW1wb3J0IHsgSnNvbkhlbHBlciB9IGZyb20gXCIuL2pzb25IZWxwZXJcIjtcbmltcG9ydCB7IFN0cmluZ0hlbHBlciB9IGZyb20gXCIuL3N0cmluZ0hlbHBlclwiO1xuLyoqXG4gKiBIYW5kbGUgZXJyb3JzIGFzIGdyYWNlZnVsbHkgYXMgcG9zc2libGVcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlciB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXQoZXJyOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZXJyID09PSBudWxsIHx8IGVyciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ1bmtub3duIGVycm9yXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyIGluc3RhbmNlb2YgRXhjZXB0aW9uQmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVyci50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nSGVscGVyLmlzU3RyaW5nKGVycikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSnNvbkhlbHBlci5zdHJpbmdpZnkoZXJyLCBcIlxcdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
