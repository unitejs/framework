"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for ErrorHandler.
 */
const Chai = require("chai");
const errorHandler_1 = require("../../../../dist/helpers/errorHandler");
describe("ErrorHandler", () => {
    it("can be created", () => {
        const obj = new errorHandler_1.ErrorHandler();
        Chai.should().exist(obj);
    });
    describe("format", () => {
        it("can return unknown error when called with null", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format(null)).to.equal("unknown error");
        });
        it("can return unknown error when called with undefined", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format(undefined)).to.equal("unknown error");
        });
        it("can return the message when called with an Error", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format(new Error("the message"))).to.equal("the message");
        });
        it("can return the text when called with a string", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format("the message")).to.equal("the message");
        });
        it("can return the JSON when called with a number", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format(10)).to.equal(JSON.stringify(10));
        });
        it("can return the JSON when called with a boolean", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format(true)).to.equal(JSON.stringify(true));
        });
        it("can return the JSON when called with an object", () => {
            Chai.expect(errorHandler_1.ErrorHandler.format({ p1: true, p2: 10 })).to.equal(JSON.stringify({ p1: true, p2: 10 }, undefined, "\t"));
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvaGVscGVycy9lcnJvckhhbmRsZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLHdFQUFxRTtBQUVyRSxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUNmLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRTtZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrREFBa0QsRUFBRTtZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLCtDQUErQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLCtDQUErQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxnREFBZ0QsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0RBQWdELEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6SCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaGVscGVycy9lcnJvckhhbmRsZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHMgZm9yIEVycm9ySGFuZGxlci5cbiAqL1xuaW1wb3J0ICogYXMgQ2hhaSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2Rpc3QvaGVscGVycy9lcnJvckhhbmRsZXJcIjtcblxuZGVzY3JpYmUoXCJFcnJvckhhbmRsZXJcIiwgKCkgPT4ge1xuICAgIGl0KFwiY2FuIGJlIGNyZWF0ZWRcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgRXJyb3JIYW5kbGVyKCk7XG4gICAgICAgIENoYWkuc2hvdWxkKCkuZXhpc3Qob2JqKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKFwiZm9ybWF0XCIsICgpID0+IHtcbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIHVua25vd24gZXJyb3Igd2hlbiBjYWxsZWQgd2l0aCBudWxsXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEVycm9ySGFuZGxlci5mb3JtYXQobnVsbCkpLnRvLmVxdWFsKFwidW5rbm93biBlcnJvclwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIHVua25vd24gZXJyb3Igd2hlbiBjYWxsZWQgd2l0aCB1bmRlZmluZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoRXJyb3JIYW5kbGVyLmZvcm1hdCh1bmRlZmluZWQpKS50by5lcXVhbChcInVua25vd24gZXJyb3JcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiB0aGUgbWVzc2FnZSB3aGVuIGNhbGxlZCB3aXRoIGFuIEVycm9yXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEVycm9ySGFuZGxlci5mb3JtYXQobmV3IEVycm9yKFwidGhlIG1lc3NhZ2VcIikpKS50by5lcXVhbChcInRoZSBtZXNzYWdlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gdGhlIHRleHQgd2hlbiBjYWxsZWQgd2l0aCBhIHN0cmluZ1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChFcnJvckhhbmRsZXIuZm9ybWF0KFwidGhlIG1lc3NhZ2VcIikpLnRvLmVxdWFsKFwidGhlIG1lc3NhZ2VcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiB0aGUgSlNPTiB3aGVuIGNhbGxlZCB3aXRoIGEgbnVtYmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEVycm9ySGFuZGxlci5mb3JtYXQoMTApKS50by5lcXVhbChKU09OLnN0cmluZ2lmeSgxMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gdGhlIEpTT04gd2hlbiBjYWxsZWQgd2l0aCBhIGJvb2xlYW5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoRXJyb3JIYW5kbGVyLmZvcm1hdCh0cnVlKSkudG8uZXF1YWwoSlNPTi5zdHJpbmdpZnkodHJ1ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gdGhlIEpTT04gd2hlbiBjYWxsZWQgd2l0aCBhbiBvYmplY3RcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoRXJyb3JIYW5kbGVyLmZvcm1hdCh7IHAxOiB0cnVlLCBwMjogMTB9KSkudG8uZXF1YWwoSlNPTi5zdHJpbmdpZnkoeyBwMTogdHJ1ZSwgcDI6IDEwfSwgdW5kZWZpbmVkLCBcIlxcdFwiKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=