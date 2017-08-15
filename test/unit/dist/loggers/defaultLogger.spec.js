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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiwwRUFBdUU7QUFFdkUsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN0QixJQUFJLE9BQTJCLENBQUM7SUFDaEMsSUFBSSxrQkFBcUUsQ0FBQztJQUMxRSxJQUFJLGNBQStCLENBQUM7SUFDcEMsSUFBSSxXQUFxQixDQUFDO0lBRTFCLFVBQVUsQ0FBQztRQUNQLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDakMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFhLEVBQUUsR0FBRyxjQUFxQjtZQUM3RCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEgsQ0FBQyxDQUFDLENBQUM7UUFFSCxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDO1FBQ04sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUM7SUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUNaLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtZQUMxQiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JCLDZCQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUU7WUFDeEIsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFDakMsNkJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJsb2dnZXJzL2RlZmF1bHRMb2dnZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHMgZm9yIERlZmF1bHRMb2dnZXIuXG4gKi9cbmltcG9ydCAqIGFzIENoYWkgZnJvbSBcImNoYWlcIjtcbmltcG9ydCAqIGFzIFNpbm9uIGZyb20gXCJzaW5vblwiO1xuaW1wb3J0IHsgRGVmYXVsdExvZ2dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaXN0L2xvZ2dlcnMvZGVmYXVsdExvZ2dlclwiO1xuXG5kZXNjcmliZShcIkRlZmF1bHRMb2dnZXJcIiwgKCkgPT4ge1xuICAgIGxldCBzYW5kYm94OiBTaW5vbi5TaW5vblNhbmRib3g7XG4gICAgbGV0IG9yaWdpbmFsQ29uc29sZUxvZzogKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4gdm9pZDtcbiAgICBsZXQgY29uc29sZUxvZ1N0dWI6IFNpbm9uLlNpbm9uU3R1YjtcbiAgICBsZXQgbG9nTWVzc2FnZXM6IHN0cmluZ1tdO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHNhbmRib3ggPSBTaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xuICAgICAgICBvcmlnaW5hbENvbnNvbGVMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgICAgY29uc29sZUxvZ1N0dWIgPSBzYW5kYm94LnN0dWIoY29uc29sZSwgXCJsb2dcIik7XG4gICAgICAgIGNvbnNvbGVMb2dTdHViLmNhbGxzRmFrZSgobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBsb2dNZXNzYWdlcy5wdXNoKGBtZXNzYWdlJHtvcHRpb25hbFBhcmFtcyAmJiBvcHRpb25hbFBhcmFtcy5sZW5ndGggPiAwID8gYCAke29wdGlvbmFsUGFyYW1zLmpvaW4oXCIgXCIpfWAgOiBcIlwifWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsb2dNZXNzYWdlcyA9IFtdO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nID0gb3JpZ2luYWxDb25zb2xlTG9nO1xuICAgIH0pO1xuXG4gICAgaXQoXCJjYW4gYmUgY3JlYXRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IG5ldyBEZWZhdWx0TG9nZ2VyKCk7XG4gICAgICAgIENoYWkuc2hvdWxkKCkuZXhpc3Qob2JqKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKFwibG9nXCIsICgpID0+IHtcbiAgICAgICAgaXQoXCJjYW4gd29yayB3aXRoIHVuZGVmaW5lZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyh1bmRlZmluZWQpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXMubGVuZ3RoKS50by5lcXVhbCgxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gd29yayB3aXRoIG51bGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdExvZ2dlci5sb2cobnVsbCk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiB3b3JrIHdpdGggbWVzc2FnZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0TG9nZ2VyLmxvZyhcIm1lc3NhZ2VcIik7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlcy5sZW5ndGgpLnRvLmVxdWFsKDEpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXNbMF0pLnRvLmVxdWFsKFwibWVzc2FnZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gd29yayB3aXRoIG1lc3NhZ2UgYW5kIGFyZ3NcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdExvZ2dlci5sb2coXCJtZXNzYWdlXCIsIDEsIHRydWUpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXMubGVuZ3RoKS50by5lcXVhbCgxKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzWzBdKS50by5lcXVhbChcIm1lc3NhZ2UgMSB0cnVlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19
