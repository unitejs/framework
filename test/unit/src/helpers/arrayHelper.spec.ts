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
    });
});
