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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix5RUFBc0U7QUFFdEUsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxPQUEyQixDQUFDO0lBQ2hDLElBQUksa0JBQXFFLENBQUM7SUFDMUUsSUFBSSxjQUErQixDQUFDO0lBQ3BDLElBQUksV0FBcUIsQ0FBQztJQUUxQixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2pDLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBYSxFQUFFLEdBQUcsY0FBcUIsRUFBRSxFQUFFO1lBQ2pFLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BILENBQUMsQ0FBQyxDQUFDO1FBRUgsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDakIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUM7SUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQ2pCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7WUFDL0IsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7WUFDN0IsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLDZCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibG9nZ2Vycy9kZWZhdWx0TG9nZ2VyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3RzIGZvciBEZWZhdWx0TG9nZ2VyLlxuICovXG5pbXBvcnQgKiBhcyBDaGFpIGZyb20gXCJjaGFpXCI7XG5pbXBvcnQgKiBhcyBTaW5vbiBmcm9tIFwic2lub25cIjtcbmltcG9ydCB7IERlZmF1bHRMb2dnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL2xvZ2dlcnMvZGVmYXVsdExvZ2dlclwiO1xuXG5kZXNjcmliZShcIkRlZmF1bHRMb2dnZXJcIiwgKCkgPT4ge1xuICAgIGxldCBzYW5kYm94OiBTaW5vbi5TaW5vblNhbmRib3g7XG4gICAgbGV0IG9yaWdpbmFsQ29uc29sZUxvZzogKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4gdm9pZDtcbiAgICBsZXQgY29uc29sZUxvZ1N0dWI6IFNpbm9uLlNpbm9uU3R1YjtcbiAgICBsZXQgbG9nTWVzc2FnZXM6IHN0cmluZ1tdO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHNhbmRib3ggPSBTaW5vbi5jcmVhdGVTYW5kYm94KCk7XG4gICAgICAgIG9yaWdpbmFsQ29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgICBjb25zb2xlTG9nU3R1YiA9IHNhbmRib3guc3R1Yihjb25zb2xlLCBcImxvZ1wiKTtcbiAgICAgICAgY29uc29sZUxvZ1N0dWIuY2FsbHNGYWtlKChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGxvZ01lc3NhZ2VzLnB1c2goYG1lc3NhZ2Uke29wdGlvbmFsUGFyYW1zICYmIG9wdGlvbmFsUGFyYW1zLmxlbmd0aCA+IDAgPyBgICR7b3B0aW9uYWxQYXJhbXMuam9pbihcIiBcIil9YCA6IFwiXCJ9YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvZ01lc3NhZ2VzID0gW107XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICAgICAgY29uc29sZS5sb2cgPSBvcmlnaW5hbENvbnNvbGVMb2c7XG4gICAgfSk7XG5cbiAgICBpdChcImNhbiBiZSBjcmVhdGVkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IERlZmF1bHRMb2dnZXIoKTtcbiAgICAgICAgQ2hhaS5zaG91bGQoKS5leGlzdChvYmopO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoXCJsb2dcIiwgKCkgPT4ge1xuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggdW5kZWZpbmVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbnVsbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhudWxsKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHdvcmsgd2l0aCBtZXNzYWdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKFwibWVzc2FnZVwiKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlc1swXSkudG8uZXF1YWwoXCJtZXNzYWdlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbWVzc2FnZSBhbmQgYXJnc1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhcIm1lc3NhZ2VcIiwgMSwgdHJ1ZSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXNbMF0pLnRvLmVxdWFsKFwibWVzc2FnZSAxIHRydWVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
