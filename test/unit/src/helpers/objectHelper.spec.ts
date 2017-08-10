/**
 * Tests for ObjectHelper.
 */
import * as Chai from "chai";
import { ObjectHelper } from "../../../../dist/helpers/objectHelper";

describe("ObjectHelper", () => {
    it("can be created", () => {
        const obj = new ObjectHelper();
        Chai.should().exist(obj);
    });

    describe("getClassName", () => {
        it("can return no object if the object is undefined", () => {
            Chai.expect(ObjectHelper.getClassName(undefined)).to.equal("<no object>");
        });

        it("can return no object if the object is null", () => {
            Chai.expect(ObjectHelper.getClassName(null)).to.equal("<no object>");
        });

        it("can return String if the object is an empty string", () => {
            Chai.expect(ObjectHelper.getClassName("")).to.equal("String");
        });

        it("can return String if the object is a value string", () => {
            Chai.expect(ObjectHelper.getClassName("hello")).to.equal("String");
        });

        it("can return Number if the object is a number", () => {
            Chai.expect(ObjectHelper.getClassName(10)).to.equal("Number");
        });

        it("can return Boolean if the object is a true boolean", () => {
            Chai.expect(ObjectHelper.getClassName(true)).to.equal("Boolean");
        });

        it("can return Boolean if the object is a false boolean", () => {
            Chai.expect(ObjectHelper.getClassName(false)).to.equal("Boolean");
        });

        it("can return Date if the object is a Date", () => {
            Chai.expect(ObjectHelper.getClassName(new Date())).to.equal("Date");
        });

        it("can return ObjectHelper if the object is a ObjectHelper", () => {
            Chai.expect(ObjectHelper.getClassName(new ObjectHelper())).to.equal("ObjectHelper");
        });

        it("can return no object if the object is an empty function", () => {
            const emptyFunction = () => "hello";
            Chai.expect(ObjectHelper.getClassName(emptyFunction)).to.equal("<no object>");
        });
    });
});
