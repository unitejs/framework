"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for ObjectHelper.
 */
const Chai = require("chai");
const objectHelper_1 = require("../../../../dist/helpers/objectHelper");
describe("ObjectHelper", () => {
    it("can be created", () => {
        const obj = new objectHelper_1.ObjectHelper();
        Chai.should().exist(obj);
    });
    describe("getClassName", () => {
        it("can return no object if the object is undefined", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(undefined)).to.equal("<no object>");
        });
        it("can return no object if the object is null", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(null)).to.equal("<no object>");
        });
        it("can return String if the object is an empty string", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName("")).to.equal("String");
        });
        it("can return String if the object is a value string", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName("hello")).to.equal("String");
        });
        it("can return Number if the object is a number", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(10)).to.equal("Number");
        });
        it("can return Boolean if the object is a true boolean", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(true)).to.equal("Boolean");
        });
        it("can return Boolean if the object is a false boolean", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(false)).to.equal("Boolean");
        });
        it("can return Date if the object is a Date", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(new Date())).to.equal("Date");
        });
        it("can return ObjectHelper if the object is a ObjectHelper", () => {
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(new objectHelper_1.ObjectHelper())).to.equal("ObjectHelper");
        });
        it("can return no object if the object is an empty function", () => {
            const emptyFunction = () => "hello";
            Chai.expect(objectHelper_1.ObjectHelper.getClassName(emptyFunction)).to.equal("<no object>");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLHdFQUFxRTtBQUVyRSxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGNBQWMsRUFBRTtRQUNyQixFQUFFLENBQUMsaURBQWlELEVBQUU7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUU7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMscURBQXFELEVBQUU7WUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHlEQUF5RCxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSwyQkFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseURBQXlELEVBQUU7WUFDMUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxPQUFPLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImhlbHBlcnMvb2JqZWN0SGVscGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3RzIGZvciBPYmplY3RIZWxwZXIuXG4gKi9cbmltcG9ydCAqIGFzIENoYWkgZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7IE9iamVjdEhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCI7XG5cbmRlc2NyaWJlKFwiT2JqZWN0SGVscGVyXCIsICgpID0+IHtcbiAgICBpdChcImNhbiBiZSBjcmVhdGVkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IE9iamVjdEhlbHBlcigpO1xuICAgICAgICBDaGFpLnNob3VsZCgpLmV4aXN0KG9iaik7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcImdldENsYXNzTmFtZVwiLCAoKSA9PiB7XG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBubyBvYmplY3QgaWYgdGhlIG9iamVjdCBpcyB1bmRlZmluZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh1bmRlZmluZWQpKS50by5lcXVhbChcIjxubyBvYmplY3Q+XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gbm8gb2JqZWN0IGlmIHRoZSBvYmplY3QgaXMgbnVsbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKG51bGwpKS50by5lcXVhbChcIjxubyBvYmplY3Q+XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gU3RyaW5nIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUoXCJcIikpLnRvLmVxdWFsKFwiU3RyaW5nXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gU3RyaW5nIGlmIHRoZSBvYmplY3QgaXMgYSB2YWx1ZSBzdHJpbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZShcImhlbGxvXCIpKS50by5lcXVhbChcIlN0cmluZ1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIE51bWJlciBpZiB0aGUgb2JqZWN0IGlzIGEgbnVtYmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUoMTApKS50by5lcXVhbChcIk51bWJlclwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIEJvb2xlYW4gaWYgdGhlIG9iamVjdCBpcyBhIHRydWUgYm9vbGVhblwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHRydWUpKS50by5lcXVhbChcIkJvb2xlYW5cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBCb29sZWFuIGlmIHRoZSBvYmplY3QgaXMgYSBmYWxzZSBib29sZWFuXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUoZmFsc2UpKS50by5lcXVhbChcIkJvb2xlYW5cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBEYXRlIGlmIHRoZSBvYmplY3QgaXMgYSBEYXRlXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUobmV3IERhdGUoKSkpLnRvLmVxdWFsKFwiRGF0ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIE9iamVjdEhlbHBlciBpZiB0aGUgb2JqZWN0IGlzIGEgT2JqZWN0SGVscGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUobmV3IE9iamVjdEhlbHBlcigpKSkudG8uZXF1YWwoXCJPYmplY3RIZWxwZXJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBubyBvYmplY3QgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBmdW5jdGlvblwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbXB0eUZ1bmN0aW9uID0gKCkgPT4gXCJoZWxsb1wiO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZShlbXB0eUZ1bmN0aW9uKSkudG8uZXF1YWwoXCI8bm8gb2JqZWN0PlwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
