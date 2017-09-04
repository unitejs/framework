/**
 * Tests for ArrayHelper.
 */
import * as Chai from "chai";
import { ArrayHelper } from "../../../../dist/helpers/arrayHelper";

describe("ArrayHelper", () => {
    it("can be created", () => {
        const obj = new ArrayHelper();
        Chai.should().exist(obj);
    });

    describe("addRemove", () => {
        it("can fail when called with null", () => {
            Chai.expect(ArrayHelper.addRemove(null, null, true)).to.equal(undefined);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ArrayHelper.addRemove(undefined, undefined, true)).to.equal(undefined);
        });

        it("can fail when called with an array and no key", () => {
            const arr = [1, 2, 3];
            ArrayHelper.addRemove(arr, undefined, true);
            Chai.expect(arr).to.deep.equal([1, 2, 3]);
        });

        it("can add the item if not existing", () => {
            const arr = [1, 2];
            ArrayHelper.addRemove(arr, 3, true);
            Chai.expect(arr).to.deep.equal([1, 2, 3]);
        });

        it("can not add the item if already exists", () => {
            const arr = [1, 2, 3];
            ArrayHelper.addRemove(arr, 3, true);
            Chai.expect(arr).to.deep.equal([1, 2, 3]);
        });

        it("can remove the item if existing", () => {
            const arr = [1, 2, 3];
            ArrayHelper.addRemove(arr, 3, false);
            Chai.expect(arr).to.deep.equal([1, 2]);
        });

        it("can not remove the item if not existing", () => {
            const arr = [1, 2];
            ArrayHelper.addRemove(arr, 3, false);
            Chai.expect(arr).to.deep.equal([1, 2]);
        });

        it("can add the item if not existing with matcher", () => {
            const arr = [{ id: 1 }, { id: 2 }];
            ArrayHelper.addRemove(arr, { id: 3 }, true, (object, item) => object.id === item.id);
            Chai.expect(arr).to.deep.equal([{ id: 1 }, { id: 2 }, { id: 3 }]);
        });

        it("can not add the item if already exists with matcher", () => {
            const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
            ArrayHelper.addRemove(arr, { id: 3 }, true, (object, item) => object.id === item.id);
            Chai.expect(arr).to.deep.equal([{ id: 1 }, { id: 2 }, { id: 3 }]);
        });

        it("can remove the item if existing with matcher", () => {
            const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
            ArrayHelper.addRemove(arr, { id: 3 }, false, (object, item) => object.id === item.id);
            Chai.expect(arr).to.deep.equal([{ id: 1 }, { id: 2 }]);
        });

        it("can not remove the item if not existing with matcher", () => {
            const arr = [{ id: 1 }, { id: 2 }];
            ArrayHelper.addRemove(arr, { id: 3 }, false, (object, item) => object.id === item.id);
            Chai.expect(arr).to.deep.equal([{ id: 1 }, { id: 2 }]);
        });
    });

    describe("merge", () => {
        it("can do nothing when called with null", () => {
            Chai.expect(ArrayHelper.merge(null, null)).to.equal(null);
        });

        it("can do nothing when called with undefined", () => {
            Chai.expect(ArrayHelper.merge(undefined, undefined)).to.equal(undefined);
        });

        it("can return second array when called with undefined first array", () => {
            Chai.expect(ArrayHelper.merge(undefined, [1, 2, 3])).to.deep.equal([1, 2, 3]);
        });

        it("can return first array when called with undefined second array", () => {
            Chai.expect(ArrayHelper.merge([1, 2, 3], undefined)).to.deep.equal([1, 2, 3]);
        });

        it("can return combined when called with two arrays", () => {
            Chai.expect(ArrayHelper.merge([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
        });

        it("can return combined when called with two arrays and duplicates", () => {
            Chai.expect(ArrayHelper.merge([1, 2, 3], [2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
        });

        it("can return combined when called with a complex sub array first array shorter", () => {
            const obj1 = [
                { m: true, n: [1, 2] }
            ];
            const obj2 = [
                { m: true, n: [2, 3] },
                { m: true, n: [4, 5] }
            ];
            Chai.expect(ArrayHelper.merge(obj1, obj2))
                .to.deep.equal([
                    { m: true, n: [1, 2, 3] },
                    { m: true, n: [4, 5] }
                ]);
        });

        it("can return combined when called with a complex sub array second array shorter", () => {
            const obj1 = [
                { m: true, n: [1, 2] },
                { m: true, n: [2, 3] }
            ];
            const obj2 = [
                { m: true, n: [4, 5] }
            ];
            Chai.expect(ArrayHelper.merge(obj1, obj2))
                .to.deep.equal([
                    { m: true, n: [1, 2, 4, 5] },
                    { m: true, n: [2, 3] }
                ]);
        });
    });
});
