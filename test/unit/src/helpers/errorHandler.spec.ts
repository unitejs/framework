/**
 * Tests for ErrorHandler.
 */
import * as Chai from "chai";
import { ErrorHandler } from "../../../../dist/helpers/errorHandler";

describe("ErrorHandler", () => {
    it("can be created", () => {
        const obj = new ErrorHandler();
        Chai.should().exist(obj);
    });

    describe("format", () => {
        it("can return unknown error when called with null", () => {
            Chai.expect(ErrorHandler.format(null)).to.equal("unknown error");
        });

        it("can return unknown error when called with undefined", () => {
            Chai.expect(ErrorHandler.format(undefined)).to.equal("unknown error");
        });

        it("can return the message when called with an Error", () => {
            Chai.expect(ErrorHandler.format(new Error("the message"))).to.equal("the message");
        });

        it("can return the text when called with a string", () => {
            Chai.expect(ErrorHandler.format("the message")).to.equal("the message");
        });

        it("can return the JSON when called with a number", () => {
            Chai.expect(ErrorHandler.format(10)).to.equal(JSON.stringify(10));
        });

        it("can return the JSON when called with a boolean", () => {
            Chai.expect(ErrorHandler.format(true)).to.equal(JSON.stringify(true));
        });

        it("can return the JSON when called with an object", () => {
            Chai.expect(ErrorHandler.format({ p1: true, p2: 10})).to.equal(JSON.stringify({ p1: true, p2: 10}, undefined, "\t"));
        });
    });
});
