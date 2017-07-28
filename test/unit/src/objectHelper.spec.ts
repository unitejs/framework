/**
 * Tests for ObjectHelper.
 */
import * as Chai from "chai";
import { ObjectHelper } from "../../../dist/helpers/objectHelper";

describe("ObjectHelper", () => {
    it("can be created", () => {
        const obj = new ObjectHelper();
        Chai.should().exist(obj);
    });
});
