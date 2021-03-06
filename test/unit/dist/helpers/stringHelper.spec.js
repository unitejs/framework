"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for StringHelper.
 */
const Chai = require("chai");
const stringHelper_1 = require("../../../../dist/helpers/stringHelper");
describe("StringHelper", () => {
    it("can be created", () => {
        const obj = new stringHelper_1.StringHelper();
        Chai.should().exist(obj);
    });
    describe("isString", () => {
        it("can return false if passed undefined", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(undefined)).to.equal(false);
        });
        it("can return false if passed null", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(null)).to.equal(false);
        });
        it("can return false if passed number", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(10)).to.equal(false);
        });
        it("can return false if passed true boolean", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(true)).to.equal(false);
        });
        it("can return false if passed false boolean", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(false)).to.equal(false);
        });
        it("can return false if passed Date", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(new Date())).to.equal(false);
        });
        it("can return false if passed object", () => {
            Chai.expect(stringHelper_1.StringHelper.isString(new stringHelper_1.StringHelper())).to.equal(false);
        });
        it("can return true if passed empty string", () => {
            Chai.expect(stringHelper_1.StringHelper.isString("")).to.equal(true);
        });
        it("can return true if passed value string", () => {
            Chai.expect(stringHelper_1.StringHelper.isString("hello")).to.equal(true);
        });
    });
    describe("toCamelCase", () => {
        it("can return undefined if passed undefined", () => {
            Chai.expect(stringHelper_1.StringHelper.toCamelCase(undefined)).to.equal(undefined);
        });
        it("can return null if passed null", () => {
            Chai.expect(stringHelper_1.StringHelper.toCamelCase(null)).to.equal(null);
        });
        it("can return camel cased string if passed single all lower", () => {
            Chai.expect(stringHelper_1.StringHelper.toCamelCase("hello")).to.equal("hello");
        });
        it("can return camel cased string if passed multi mixed case", () => {
            Chai.expect(stringHelper_1.StringHelper.toCamelCase("HelloYou")).to.equal("helloYou");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLHVFQUFvRTtBQUVwRSxRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUN0QixFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBRyxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHdDQUF3QyxFQUFFLEdBQUcsRUFBRTtZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxHQUFHLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtZQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRSxHQUFHLEVBQUU7WUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImhlbHBlcnMvc3RyaW5nSGVscGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3RzIGZvciBTdHJpbmdIZWxwZXIuXG4gKi9cbmltcG9ydCAqIGFzIENoYWkgZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7IFN0cmluZ0hlbHBlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXJcIjtcblxuZGVzY3JpYmUoXCJTdHJpbmdIZWxwZXJcIiwgKCkgPT4ge1xuICAgIGl0KFwiY2FuIGJlIGNyZWF0ZWRcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgU3RyaW5nSGVscGVyKCk7XG4gICAgICAgIENoYWkuc2hvdWxkKCkuZXhpc3Qob2JqKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKFwiaXNTdHJpbmdcIiwgKCkgPT4ge1xuICAgICAgICBpdChcImNhbiByZXR1cm4gZmFsc2UgaWYgcGFzc2VkIHVuZGVmaW5lZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChTdHJpbmdIZWxwZXIuaXNTdHJpbmcodW5kZWZpbmVkKSkudG8uZXF1YWwoZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gZmFsc2UgaWYgcGFzc2VkIG51bGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoU3RyaW5nSGVscGVyLmlzU3RyaW5nKG51bGwpKS50by5lcXVhbChmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBmYWxzZSBpZiBwYXNzZWQgbnVtYmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KFN0cmluZ0hlbHBlci5pc1N0cmluZygxMCkpLnRvLmVxdWFsKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIGZhbHNlIGlmIHBhc3NlZCB0cnVlIGJvb2xlYW5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoU3RyaW5nSGVscGVyLmlzU3RyaW5nKHRydWUpKS50by5lcXVhbChmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBmYWxzZSBpZiBwYXNzZWQgZmFsc2UgYm9vbGVhblwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChTdHJpbmdIZWxwZXIuaXNTdHJpbmcoZmFsc2UpKS50by5lcXVhbChmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBmYWxzZSBpZiBwYXNzZWQgRGF0ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChTdHJpbmdIZWxwZXIuaXNTdHJpbmcobmV3IERhdGUoKSkpLnRvLmVxdWFsKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIGZhbHNlIGlmIHBhc3NlZCBvYmplY3RcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoU3RyaW5nSGVscGVyLmlzU3RyaW5nKG5ldyBTdHJpbmdIZWxwZXIoKSkpLnRvLmVxdWFsKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIHRydWUgaWYgcGFzc2VkIGVtcHR5IHN0cmluZ1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChTdHJpbmdIZWxwZXIuaXNTdHJpbmcoXCJcIikpLnRvLmVxdWFsKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gdHJ1ZSBpZiBwYXNzZWQgdmFsdWUgc3RyaW5nXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KFN0cmluZ0hlbHBlci5pc1N0cmluZyhcImhlbGxvXCIpKS50by5lcXVhbCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcInRvQ2FtZWxDYXNlXCIsICgpID0+IHtcbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIHVuZGVmaW5lZCBpZiBwYXNzZWQgdW5kZWZpbmVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KFN0cmluZ0hlbHBlci50b0NhbWVsQ2FzZSh1bmRlZmluZWQpKS50by5lcXVhbCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gbnVsbCBpZiBwYXNzZWQgbnVsbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChTdHJpbmdIZWxwZXIudG9DYW1lbENhc2UobnVsbCkpLnRvLmVxdWFsKG51bGwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gY2FtZWwgY2FzZWQgc3RyaW5nIGlmIHBhc3NlZCBzaW5nbGUgYWxsIGxvd2VyXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KFN0cmluZ0hlbHBlci50b0NhbWVsQ2FzZShcImhlbGxvXCIpKS50by5lcXVhbChcImhlbGxvXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gY2FtZWwgY2FzZWQgc3RyaW5nIGlmIHBhc3NlZCBtdWx0aSBtaXhlZCBjYXNlXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KFN0cmluZ0hlbHBlci50b0NhbWVsQ2FzZShcIkhlbGxvWW91XCIpKS50by5lcXVhbChcImhlbGxvWW91XCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19
