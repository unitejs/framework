/**
 * Tests for ColorHelper.
 */
import * as Chai from "chai";
import { ColorHelper } from "../../../../src/helpers/colorHelper";

describe("ColorHelper", () => {
    it("can be created", () => {
        const obj = new ColorHelper();
        Chai.should().exist(obj);
    });

    describe("isHex", () => {
        it("can fail when called with null", () => {
            Chai.expect(ColorHelper.isHex(null)).to.equal(false);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ColorHelper.isHex(undefined)).to.equal(false);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ColorHelper.isHex("")).to.equal(false);
        });

        it("can fail when called with a valid just hash", () => {
            Chai.expect(ColorHelper.isHex("#")).to.equal(false);
        });

        it("can fail when called with a valid 1 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#A")).to.equal(false);
        });

        it("can fail when called with a valid 2 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#AB")).to.equal(false);
        });

        it("can be called with a valid 3 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#ABC")).to.equal(true);
        });

        it("can fail when called with a valid 4 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#ABCD")).to.equal(false);
        });

        it("can fail when called with a valid 5 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#ABCDE")).to.equal(false);
        });

        it("can be called with a valid 6 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#ABCDEF")).to.equal(true);
        });

        it("can be called with a valid 7 digit hex", () => {
            Chai.expect(ColorHelper.isHex("#ABCDEFA")).to.equal(false);
        });

        it("can fail when with digits that are not hex", () => {
            Chai.expect(ColorHelper.isHex("#ABCDEG")).to.equal(false);
        });
    });

    describe("parseHex", () => {
        it("can fail when called with null", () => {
            Chai.expect(ColorHelper.parseHex(null)).to.equal(undefined);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ColorHelper.parseHex(undefined)).to.equal(undefined);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ColorHelper.parseHex("")).to.equal(undefined);
        });

        it("can fail when called with a valid just hash", () => {
            Chai.expect(ColorHelper.parseHex("#")).to.equal(undefined);
        });

        it("can fail when called with a valid 1 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#A")).to.equal(undefined);
        });

        it("can fail when called with a valid 2 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#AB")).to.equal(undefined);
        });

        it("can be called with a valid 3 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#ABC")).to.deep.equal({ r: 10, g: 11, b: 12 });
        });

        it("can fail when called with a valid 4 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#ABCD")).to.equal(undefined);
        });

        it("can fail when called with a valid 5 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#ABCDE")).to.equal(undefined);
        });

        it("can be called with a valid 6 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#ABCDEF")).to.deep.equal({ r: 171, g: 205, b: 239 });
        });

        it("can be called with a valid 7 digit hex", () => {
            Chai.expect(ColorHelper.parseHex("#ABCDEFA")).to.equal(undefined);
        });

        it("can fail when with digits that are not hex", () => {
            Chai.expect(ColorHelper.parseHex("#ABCDEG")).to.equal(undefined);
        });
    });
});
