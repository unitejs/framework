/**
 * Tests for JsonHelper.
 */
import * as Chai from "chai";
import { JsonHelper } from "../../../../src/helpers/jsonHelper";

describe("JsonHelper", () => {
    it("can be created", () => {
        const obj = new JsonHelper();
        Chai.should().exist(obj);
    });

    describe("stringify", () => {
        it("can return JSON when called with undefined", () => {
            Chai.expect(JsonHelper.stringify(undefined)).to.equal(undefined);
        });

        it("can return JSON when called with null", () => {
            Chai.expect(JsonHelper.stringify(null)).to.equal("null");
        });

        it("can return JSON when called with a string", () => {
            Chai.expect(JsonHelper.stringify("hello")).to.equal(JSON.stringify("hello"));
        });

        it("can return JSON when called with a number", () => {
            Chai.expect(JsonHelper.stringify(10)).to.equal(JSON.stringify(10));
        });

        it("can return JSON when called with a boolean", () => {
            Chai.expect(JsonHelper.stringify(true)).to.equal(JSON.stringify(true));
        });

        it("can return JSON when called with an object", () => {
            Chai.expect(JsonHelper.stringify({ p1: true, p2: 10})).to.equal(JSON.stringify({ p1: true, p2: 10}));
        });

        it("can return JSON when called with a recursive object", () => {
            const obj: { p1: boolean; p2: number; p3: any } = { p1: true, p2: 10, p3: undefined};
            obj.p3 = obj;
            Chai.expect(JsonHelper.stringify(obj)).to.equal(JSON.stringify({ p1: true, p2: 10}));
        });

        it("can return formatted JSON when called with a recursive object", () => {
            const obj: { p1: boolean; p2: number; p3: any } = { p1: true, p2: 10, p3: undefined};
            obj.p3 = obj;
            Chai.expect(JsonHelper.stringify(obj, "\t")).to.equal(JSON.stringify({ p1: true, p2: 10}, undefined, "\t"));
        });
    });

    describe("codify", () => {
        it("can return undefined when called with undefined", () => {
            Chai.expect(JsonHelper.codify(undefined)).to.equal(undefined);
        });

        it("can return null when called with null", () => {
            Chai.expect(JsonHelper.codify(null)).to.equal("null");
        });

        it("can return JSON when called with a string", () => {
            Chai.expect(JsonHelper.codify("hello")).to.equal("'hello'");
        });

        it("can return JSON when called with a number", () => {
            Chai.expect(JsonHelper.codify(10)).to.equal(JSON.stringify(10));
        });

        it("can return JSON when called with a boolean", () => {
            Chai.expect(JsonHelper.codify(true)).to.equal(JSON.stringify(true));
        });

        it("can return formatted JSON when called with object", () => {
            Chai.expect(JsonHelper.codify({ p1: true, p2: 10})).to.equal("{\n\tp1: true,\n\tp2: 10\n}");
        });

        it("can not be confused with url", () => {
            Chai.expect(JsonHelper.codify({ p1: "http://a.b.com", p2: 10})).to.equal("{\n\tp1: \'http://a.b.com\',\n\tp2: 10\n}");
        });

        it("can return single quoted JSON when called with hyphenated property", () => {
            Chai.expect(JsonHelper.codify({ p1: true, p2: 10, "p-3": "hello"})).to.equal("{\n\tp1: true,\n\tp2: 10,\n\t'p-3': 'hello'\n}");
        });

        it("can remove quotes from __dirname property", () => {
            Chai.expect(JsonHelper.codify({ p1: "__dirname"})).to.equal("{\n\tp1: __dirname\n}");
        });
    });

    describe("parseCode", () => {
        it("can return undefined when called with undefined", () => {
            Chai.expect(JsonHelper.parseCode(undefined)).to.equal(undefined);
        });

        it("can return null when called with null", () => {
            Chai.expect(JsonHelper.parseCode(null)).to.equal(null);
        });

        it("can replace single quotes with double quotes", () => {
            Chai.expect(JsonHelper.parseCode("{\n\tp1: 'foo'\n, 'p2': 'b\\'ar'}")).to.deep.equal({ p1: "foo", p2: "b'ar"});
        });

        it("can add quotes to unquoted properties", () => {
            Chai.expect(JsonHelper.parseCode("{\n\tp1: \"foo\"\n, \"p2\": \"bar\"}")).to.deep.equal({ p1: "foo", p2: "bar"});
        });

        it("can not be confused by embedded url", () => {
            Chai.expect(JsonHelper.parseCode("{\n\tp1: \"http://a.b.com\"\n, \"p2\": \"bar\"}")).to.deep.equal({ p1: "http://a.b.com", p2: "bar"});
        });

        it("can add quotes to __dirname property", () => {
            Chai.expect(JsonHelper.parseCode("{\n\tp1: __dirname\n}")).to.deep.equal({ p1: "__dirname"});
        });
    });
});
