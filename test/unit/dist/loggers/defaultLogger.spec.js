"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for DefaultLogger.
 */
const Chai = require("chai");
const Sinon = require("sinon");
const defaultLogger_1 = require("../../../../dist/loggers/defaultLogger");
describe("DefaultLogger", () => {
    let sandbox;
    let originalConsoleLog;
    let consoleLogStub;
    let logMessages;
    beforeEach(() => {
        sandbox = Sinon.createSandbox();
        /* tslint:disable:no-console */
        originalConsoleLog = console.log;
        consoleLogStub = sandbox.stub(console, "log");
        consoleLogStub.callsFake((message, ...optionalParams) => {
            logMessages.push(`message${optionalParams && optionalParams.length > 0 ? ` ${optionalParams.join(" ")}` : ""}`);
        });
        logMessages = [];
    });
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        sandbox.restore();
        /* tslint:disable:no-console */
        console.log = originalConsoleLog;
    }));
    it("can be created", () => {
        const obj = new defaultLogger_1.DefaultLogger();
        Chai.should().exist(obj);
    });
    describe("log", () => {
        it("can work with undefined", () => {
            defaultLogger_1.DefaultLogger.log(undefined);
            Chai.expect(logMessages.length).to.equal(1);
        });
        it("can work with null", () => {
            defaultLogger_1.DefaultLogger.log(null);
            Chai.expect(logMessages.length).to.equal(1);
        });
        it("can work with message", () => {
            defaultLogger_1.DefaultLogger.log("message");
            Chai.expect(logMessages.length).to.equal(1);
            Chai.expect(logMessages[0]).to.equal("message");
        });
        it("can work with message and args", () => {
            defaultLogger_1.DefaultLogger.log("message", 1, true);
            Chai.expect(logMessages.length).to.equal(1);
            Chai.expect(logMessages[0]).to.equal("message 1 true");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix5RUFBc0U7QUFFdEUsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxPQUEyQixDQUFDO0lBQ2hDLElBQUksa0JBQXFFLENBQUM7SUFDMUUsSUFBSSxjQUErQixDQUFDO0lBQ3BDLElBQUksV0FBcUIsQ0FBQztJQUUxQixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQywrQkFBK0I7UUFDL0Isa0JBQWtCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQWEsRUFBRSxHQUFHLGNBQXFCLEVBQUUsRUFBRTtZQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwSCxDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQiwrQkFBK0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztJQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDakIsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtZQUMvQiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtZQUMxQiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtZQUM3Qiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLEVBQUU7WUFDdEMsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJsb2dnZXJzL2RlZmF1bHRMb2dnZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHMgZm9yIERlZmF1bHRMb2dnZXIuXG4gKi9cbmltcG9ydCAqIGFzIENoYWkgZnJvbSBcImNoYWlcIjtcbmltcG9ydCAqIGFzIFNpbm9uIGZyb20gXCJzaW5vblwiO1xuaW1wb3J0IHsgRGVmYXVsdExvZ2dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyXCI7XG5cbmRlc2NyaWJlKFwiRGVmYXVsdExvZ2dlclwiLCAoKSA9PiB7XG4gICAgbGV0IHNhbmRib3g6IFNpbm9uLlNpbm9uU2FuZGJveDtcbiAgICBsZXQgb3JpZ2luYWxDb25zb2xlTG9nOiAobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB2b2lkO1xuICAgIGxldCBjb25zb2xlTG9nU3R1YjogU2lub24uU2lub25TdHViO1xuICAgIGxldCBsb2dNZXNzYWdlczogc3RyaW5nW107XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgc2FuZGJveCA9IFNpbm9uLmNyZWF0ZVNhbmRib3goKTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tY29uc29sZSAqL1xuICAgICAgICBvcmlnaW5hbENvbnNvbGVMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgICAgY29uc29sZUxvZ1N0dWIgPSBzYW5kYm94LnN0dWIoY29uc29sZSwgXCJsb2dcIik7XG4gICAgICAgIGNvbnNvbGVMb2dTdHViLmNhbGxzRmFrZSgobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBsb2dNZXNzYWdlcy5wdXNoKGBtZXNzYWdlJHtvcHRpb25hbFBhcmFtcyAmJiBvcHRpb25hbFBhcmFtcy5sZW5ndGggPiAwID8gYCAke29wdGlvbmFsUGFyYW1zLmpvaW4oXCIgXCIpfWAgOiBcIlwifWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsb2dNZXNzYWdlcyA9IFtdO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5sb2cgPSBvcmlnaW5hbENvbnNvbGVMb2c7XG4gICAgfSk7XG5cbiAgICBpdChcImNhbiBiZSBjcmVhdGVkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IERlZmF1bHRMb2dnZXIoKTtcbiAgICAgICAgQ2hhaS5zaG91bGQoKS5leGlzdChvYmopO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoXCJsb2dcIiwgKCkgPT4ge1xuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggdW5kZWZpbmVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbnVsbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhudWxsKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHdvcmsgd2l0aCBtZXNzYWdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKFwibWVzc2FnZVwiKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlc1swXSkudG8uZXF1YWwoXCJtZXNzYWdlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbWVzc2FnZSBhbmQgYXJnc1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhcIm1lc3NhZ2VcIiwgMSwgdHJ1ZSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXNbMF0pLnRvLmVxdWFsKFwibWVzc2FnZSAxIHRydWVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
