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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvbG9nZ2Vycy9kZWZhdWx0TG9nZ2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix5RUFBc0U7QUFFdEUsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxPQUEyQixDQUFDO0lBQ2hDLElBQUksa0JBQXFFLENBQUM7SUFDMUUsSUFBSSxjQUErQixDQUFDO0lBQ3BDLElBQUksV0FBcUIsQ0FBQztJQUUxQixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQWEsRUFBRSxHQUFHLGNBQXFCLEVBQUUsRUFBRTtZQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwSCxDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxHQUFHLGtCQUFrQixDQUFDO0lBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNqQixFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO1lBQy9CLDZCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO1lBQzdCLDZCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtZQUN0Qyw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImxvZ2dlcnMvZGVmYXVsdExvZ2dlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUZXN0cyBmb3IgRGVmYXVsdExvZ2dlci5cbiAqL1xuaW1wb3J0ICogYXMgQ2hhaSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0ICogYXMgU2lub24gZnJvbSBcInNpbm9uXCI7XG5pbXBvcnQgeyBEZWZhdWx0TG9nZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NyYy9sb2dnZXJzL2RlZmF1bHRMb2dnZXJcIjtcblxuZGVzY3JpYmUoXCJEZWZhdWx0TG9nZ2VyXCIsICgpID0+IHtcbiAgICBsZXQgc2FuZGJveDogU2lub24uU2lub25TYW5kYm94O1xuICAgIGxldCBvcmlnaW5hbENvbnNvbGVMb2c6IChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHZvaWQ7XG4gICAgbGV0IGNvbnNvbGVMb2dTdHViOiBTaW5vbi5TaW5vblN0dWI7XG4gICAgbGV0IGxvZ01lc3NhZ2VzOiBzdHJpbmdbXTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBzYW5kYm94ID0gU2lub24uc2FuZGJveC5jcmVhdGUoKTtcbiAgICAgICAgb3JpZ2luYWxDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XG4gICAgICAgIGNvbnNvbGVMb2dTdHViID0gc2FuZGJveC5zdHViKGNvbnNvbGUsIFwibG9nXCIpO1xuICAgICAgICBjb25zb2xlTG9nU3R1Yi5jYWxsc0Zha2UoKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgbG9nTWVzc2FnZXMucHVzaChgbWVzc2FnZSR7b3B0aW9uYWxQYXJhbXMgJiYgb3B0aW9uYWxQYXJhbXMubGVuZ3RoID4gMCA/IGAgJHtvcHRpb25hbFBhcmFtcy5qb2luKFwiIFwiKX1gIDogXCJcIn1gKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9nTWVzc2FnZXMgPSBbXTtcbiAgICB9KTtcblxuICAgIGFmdGVyRWFjaChhc3luYyAoKSA9PiB7XG4gICAgICAgIHNhbmRib3gucmVzdG9yZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyA9IG9yaWdpbmFsQ29uc29sZUxvZztcbiAgICB9KTtcblxuICAgIGl0KFwiY2FuIGJlIGNyZWF0ZWRcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgRGVmYXVsdExvZ2dlcigpO1xuICAgICAgICBDaGFpLnNob3VsZCgpLmV4aXN0KG9iaik7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcImxvZ1wiLCAoKSA9PiB7XG4gICAgICAgIGl0KFwiY2FuIHdvcmsgd2l0aCB1bmRlZmluZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdExvZ2dlci5sb2codW5kZWZpbmVkKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHdvcmsgd2l0aCBudWxsXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKG51bGwpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXMubGVuZ3RoKS50by5lcXVhbCgxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gd29yayB3aXRoIG1lc3NhZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdExvZ2dlci5sb2coXCJtZXNzYWdlXCIpO1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QobG9nTWVzc2FnZXMubGVuZ3RoKS50by5lcXVhbCgxKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzWzBdKS50by5lcXVhbChcIm1lc3NhZ2VcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHdvcmsgd2l0aCBtZXNzYWdlIGFuZCBhcmdzXCIsICgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRMb2dnZXIubG9nKFwibWVzc2FnZVwiLCAxLCB0cnVlKTtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KGxvZ01lc3NhZ2VzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChsb2dNZXNzYWdlc1swXSkudG8uZXF1YWwoXCJtZXNzYWdlIDEgdHJ1ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
