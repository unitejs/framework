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
        sandbox = Sinon.sandbox.create();
        originalConsoleLog = console.log;
        consoleLogStub = sandbox.stub(console, "log");
        consoleLogStub.callsFake((message, ...optionalParams) => {
            logMessages.push(`message${optionalParams && optionalParams.length > 0 ? ` ${optionalParams.join(" ")}` : ""}`);
        });
        logMessages = [];
    });
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        sandbox.restore();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix5RUFBc0U7QUFFdEUsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN0QixJQUFJLE9BQTJCLENBQUM7SUFDaEMsSUFBSSxrQkFBcUUsQ0FBQztJQUMxRSxJQUFJLGNBQStCLENBQUM7SUFDcEMsSUFBSSxXQUFxQixDQUFDO0lBRTFCLFVBQVUsQ0FBQztRQUNQLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDakMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFhLEVBQUUsR0FBRyxjQUFxQjtZQUM3RCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEgsQ0FBQyxDQUFDLENBQUM7UUFFSCxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDO1FBQ04sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUM7SUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUNaLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtZQUMxQiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JCLDZCQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUU7WUFDeEIsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFDakMsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJsb2dnZXJzL2RlZmF1bHRMb2dnZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHMgZm9yIERlZmF1bHRMb2dnZXIuXG4gKi9cbmltcG9ydCAqIGFzIENoYWkgZnJvbSBcImNoYWlcIjtcbmltcG9ydCAqIGFzIFNpbm9uIGZyb20gXCJzaW5vblwiO1xuaW1wb3J0IHsgRGVmYXVsdExvZ2dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyXCI7XG5cbmRlc2NyaWJlKFwiRGVmYXVsdExvZ2dlclwiLCAoKSA9PiB7XG4gICAgbGV0IHNhbmRib3g6IFNpbm9uLlNpbm9uU2FuZGJveDtcbiAgICBsZXQgb3JpZ2luYWxDb25zb2xlTG9nOiAobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB2b2lkO1xuICAgIGxldCBjb25zb2xlTG9nU3R1YjogU2lub24uU2lub25TdHViO1xuICAgIGxldCBsb2dNZXNzYWdlczogc3RyaW5nW107XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgc2FuZGJveCA9IFNpbm9uLnNhbmRib3guY3JlYXRlKCk7XG4gICAgICAgIG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgICBjb25zb2xlTG9nU3R1YiA9IHNhbmRib3guc3R1Yihjb25zb2xlLCBcImxvZ1wiKTtcbiAgICAgICAgY29uc29sZUxvZ1N0dWIuY2FsbHNGYWtlKChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGxvZ01lc3NhZ2VzLnB1c2goYG1lc3NhZ2Uke29wdGlvbmFsUGFyYW1zICYmIG9wdGlvbmFsUGFyYW1zLmxlbmd0aCA+IDAgPyBgICR7b3B0aW9uYWxQYXJhbXMuam9pbihcIiBcIil9YCA6IFwiXCJ9YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvZ01lc3NhZ2VzID0gW107XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICAgICAgY29uc29sZS5sb2cgPSBvcmlnaW5hbENvbnNvbGVMb2c7XG4gICAgfSk7XG5cbiAgICBpdChcImNhbiBiZSBjcmVhdGVkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IERlZmF1bHRMb2dnZXIoKTtcbiAgICAgICAgQ2hhaS5zaG91bGQoKS5leGlzdChvYmopO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoXCJsb2dcIiwgKCkgPT4ge1xuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggdW5kZWZpbmVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbnVsbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhudWxsKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHdvcmsgd2l0aCBtZXNzYWdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKFwibWVzc2FnZVwiKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlc1swXSkudG8uZXF1YWwoXCJtZXNzYWdlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbWVzc2FnZSBhbmQgYXJnc1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhcIm1lc3NhZ2VcIiwgMSwgdHJ1ZSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXNbMF0pLnRvLmVxdWFsKFwibWVzc2FnZSAxIHRydWVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
