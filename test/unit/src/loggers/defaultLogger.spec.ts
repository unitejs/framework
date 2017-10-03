/**
 * Tests for DefaultLogger.
 */
import * as Chai from "chai";
import * as Sinon from "sinon";
import { DefaultLogger } from "../../../../src/loggers/defaultLogger";

describe("DefaultLogger", () => {
    let sandbox: Sinon.SinonSandbox;
    let originalConsoleLog: (message?: any, ...optionalParams: any[]) => void;
    let consoleLogStub: Sinon.SinonStub;
    let logMessages: string[];

    beforeEach(() => {
        sandbox = Sinon.sandbox.create();
        originalConsoleLog = console.log;
        consoleLogStub = sandbox.stub(console, "log");
        consoleLogStub.callsFake((message?: any, ...optionalParams: any[]) => {
            logMessages.push(`message${optionalParams && optionalParams.length > 0 ? ` ${optionalParams.join(" ")}` : ""}`);
        });

        logMessages = [];
    });

    afterEach(async () => {
        sandbox.restore();
        console.log = originalConsoleLog;
    });

    it("can be created", () => {
        const obj = new DefaultLogger();
        Chai.should().exist(obj);
    });

    describe("log", () => {
        it("can work with undefined", () => {
            DefaultLogger.log(undefined);
            Chai.expect(logMessages.length).to.equal(1);
        });

        it("can work with null", () => {
            DefaultLogger.log(null);
            Chai.expect(logMessages.length).to.equal(1);
        });

        it("can work with message", () => {
            DefaultLogger.log("message");
            Chai.expect(logMessages.length).to.equal(1);
            Chai.expect(logMessages[0]).to.equal("message");
        });

        it("can work with message and args", () => {
            DefaultLogger.log("message", 1, true);
            Chai.expect(logMessages.length).to.equal(1);
            Chai.expect(logMessages[0]).to.equal("message 1 true");
        });
    });
});
