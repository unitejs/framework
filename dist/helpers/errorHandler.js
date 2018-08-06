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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUM7O0dBRUc7QUFDSCxNQUFhLFlBQVk7SUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVE7UUFDekIsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxlQUFlLENBQUM7U0FDMUI7YUFBTSxJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxJQUFJLDJCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixPQUFPLEdBQUcsQ0FBQzthQUNkO2lCQUFNO2dCQUNILE9BQU8sdUJBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7SUFDTCxDQUFDO0NBQ0o7QUFkRCxvQ0FjQyIsImZpbGUiOiJoZWxwZXJzL2Vycm9ySGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25IZWxwZXIgfSBmcm9tIFwiLi9qc29uSGVscGVyXCI7XG5pbXBvcnQgeyBTdHJpbmdIZWxwZXIgfSBmcm9tIFwiLi9zdHJpbmdIZWxwZXJcIjtcbi8qKlxuICogSGFuZGxlIGVycm9ycyBhcyBncmFjZWZ1bGx5IGFzIHBvc3NpYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0KGVycjogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidW5rbm93biBlcnJvclwiO1xuICAgICAgICB9IGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nSGVscGVyLmlzU3RyaW5nKGVycikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSnNvbkhlbHBlci5zdHJpbmdpZnkoZXJyLCBcIlxcdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
