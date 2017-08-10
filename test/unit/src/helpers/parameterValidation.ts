/**
 * Tests for ParameterValidation.
 */
import * as Chai from "chai";
import { ParameterValidation } from "../../../../dist/helpers/parameterValidation";

describe("ParameterValidation", () => {
    it("can be created", () => {
        const obj = new ParameterValidation();
        Chai.should().exist(obj);
    });
});
