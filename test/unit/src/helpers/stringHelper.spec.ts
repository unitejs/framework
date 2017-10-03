/**
 * Tests for StringHelper.
 */
import * as Chai from "chai";
import { StringHelper } from "../../../../src/helpers/stringHelper";

describe("StringHelper", () => {
    it("can be created", () => {
        const obj = new StringHelper();
        Chai.should().exist(obj);
    });

    describe("isString", () => {
        it("can return false if passed undefined", () => {
            Chai.expect(StringHelper.isString(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            Chai.expect(StringHelper.isString(null)).to.equal(false);
        });

        it("can return false if passed number", () => {
            Chai.expect(StringHelper.isString(10)).to.equal(false);
        });

        it("can return false if passed true boolean", () => {
            Chai.expect(StringHelper.isString(true)).to.equal(false);
        });

        it("can return false if passed false boolean", () => {
            Chai.expect(StringHelper.isString(false)).to.equal(false);
        });

        it("can return false if passed Date", () => {
            Chai.expect(StringHelper.isString(new Date())).to.equal(false);
        });

        it("can return false if passed object", () => {
            Chai.expect(StringHelper.isString(new StringHelper())).to.equal(false);
        });

        it("can return true if passed empty string", () => {
            Chai.expect(StringHelper.isString("")).to.equal(true);
        });

        it("can return true if passed value string", () => {
            Chai.expect(StringHelper.isString("hello")).to.equal(true);
        });
    });

    describe("toCamelCase", () => {
        it("can return undefined if passed undefined", () => {
            Chai.expect(StringHelper.toCamelCase(undefined)).to.equal(undefined);
        });

        it("can return null if passed null", () => {
            Chai.expect(StringHelper.toCamelCase(null)).to.equal(null);
        });

        it("can return camel cased string if passed single all lower", () => {
            Chai.expect(StringHelper.toCamelCase("hello")).to.equal("hello");
        });

        it("can return camel cased string if passed multi mixed case", () => {
            Chai.expect(StringHelper.toCamelCase("HelloYou")).to.equal("helloYou");
        });
    });
});
