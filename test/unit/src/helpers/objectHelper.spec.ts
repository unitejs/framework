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

    describe("addRemove", () => {
        it("can fail when called with null", () => {
            Chai.expect(ObjectHelper.addRemove(null, null, null, true)).to.equal(undefined);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ObjectHelper.addRemove(undefined, undefined, null, true)).to.equal(undefined);
        });

        it("can fail when called with an array and no key", () => {
            const arr = [1, 2, 3];
            ObjectHelper.addRemove(arr, undefined, undefined, true);
            Chai.expect(arr).to.deep.equal([1, 2, 3]);
        });

        it("can add the item if not existing", () => {
            const arr: any = { a: "1", b: "2" };
            ObjectHelper.addRemove(arr, "c", "3", true);
            Chai.expect(arr).to.deep.equal({ a: "1", b: "2", c: "3" });
        });

        it("can not add the item if already exists", () => {
            const arr = { a: "1", b: "2", c: "3" };
            ObjectHelper.addRemove(arr, "c", "3", true);
            Chai.expect(arr).to.deep.equal({ a: "1", b: "2", c: "3" });
        });

        it("can remove the item if existing", () => {
            const arr = { a: "1", b: "2", c: "3" };
            ObjectHelper.addRemove(arr, "c", "3", false);
            Chai.expect(arr).to.deep.equal({ a: "1", b: "2" });
        });

        it("can not remove the item if not existing", () => {
            const arr: any = { a: "1", b: "2" };
            ObjectHelper.addRemove(arr, "c", "3", false);
            Chai.expect(arr).to.deep.equal({ a: "1", b: "2" });
        });
    });

    describe("sort", () => {
        it("can fail when called with null", () => {
            Chai.expect(ObjectHelper.sort(null)).to.equal(null);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ObjectHelper.sort(undefined)).to.equal(undefined);
        });

        it("can succeed when called with an already sorted array", () => {
            Chai.expect(ObjectHelper.sort({ a: "1", b: "2" })).to.deep.equal({ a: "1", b: "2" });
        });

        it("can succeed when called with an unsorted array", () => {
            Chai.expect(ObjectHelper.sort({ b: "2", a: "1" })).to.deep.equal({ a: "1", b: "2" });
        });
    });

    describe("merge", () => {
        it("can fail when called with null", () => {
            Chai.expect(ObjectHelper.merge(null, null)).to.equal(null);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ObjectHelper.merge(undefined, undefined)).to.equal(undefined);
        });

        it("can fail when called with undefined left", () => {
            Chai.expect(ObjectHelper.merge(undefined, { a: "1", b: "2" })).to.deep.equal({ a: "1", b: "2" });
        });

        it("can fail when called with undefined right", () => {
            Chai.expect(ObjectHelper.merge({ a: "1", b: "2" }, undefined)).to.deep.equal({ a: "1", b: "2" });
        });

        it("can succeed when called with an overwrite property", () => {
            Chai.expect(ObjectHelper.merge({ a: "1", b: "2" }, { b: "3", c: "4" })).to.deep.equal({ a: "1", b: "3", c: "4" });
        });

        it("can succeed when called with a undefined left sub array", () => {
            Chai.expect(ObjectHelper.merge({}, { a: ["2", "3"] })).to.deep.equal({ a: ["2", "3"] });
        });

        it("can succeed when called with a undefined right sub array", () => {
            Chai.expect(ObjectHelper.merge({ a: ["2", "3"] }, {})).to.deep.equal({ a: ["2", "3"] });
        });

        it("can succeed when called with a sub array", () => {
            Chai.expect(ObjectHelper.merge({ a: ["1", "2"] }, { a: ["2", "3"] })).to.deep.equal({ a: ["1", "2", "3"] });
        });

        it("can succeed when called with a complex sub array", () => {
            const obj1 = { a: [
                { m: true, n: [1, 2] },
                { m: true, n: [2, 3] }
            ]};
            const obj2 = { a: [
                { m: true, n: [4, 5] }
            ]};
            Chai.expect(ObjectHelper.merge(obj1, obj2))
                .to.deep.equal({ a: [
                    { m: true, n: [1, 2, 4, 5] },
                    { m: true, n: [2, 3] }
                ] });
        });

        it("can succeed when called with top level arrays", () => {
            Chai.expect(ObjectHelper.merge([1, 2, 3], [3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
        });

        it("can succeed when called with a undefined left sub object", () => {
            Chai.expect(ObjectHelper.merge({}, { a: { m: "2", n: "3" } })).to.deep.equal({ a: { m: "2", n: "3" } });
        });

        it("can succeed when called with a undefined right sub object", () => {
            Chai.expect(ObjectHelper.merge({ a: { m: "2", n: "3" } }, {})).to.deep.equal({ a: { m: "2", n: "3" } });
        });

        it("can succeed when called with a sub object", () => {
            Chai.expect(ObjectHelper.merge({ a: { m: "2", n: "3" } }, { a: { n: "4", o: "5" } })).to.deep.equal({ a: { m: "2", n: "4", o: "5" } });
        });
    });
});
