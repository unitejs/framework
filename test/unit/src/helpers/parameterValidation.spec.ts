/**
 * Tests for ParameterValidation.
 */
import * as Chai from "chai";
import * as Sinon from "sinon";
import { ParameterValidation } from "../../../../src/helpers/parameterValidation";
import { ILogger } from "../../../../src/interfaces/ILogger";

describe("ParameterValidation", () => {
    let sandbox: Sinon.SinonSandbox;
    let loggerStub: ILogger;
    let spiedErrorMethod: Sinon.SinonSpy;
    let spiedInfoMethod: Sinon.SinonSpy;

    beforeEach(() => {
        sandbox = Sinon.sandbox.create();
        loggerStub = <ILogger>{};
        loggerStub.error = () => {};
        loggerStub.info = () => {};
        spiedErrorMethod = sandbox.spy(loggerStub, "error");
        spiedInfoMethod = sandbox.spy(loggerStub, "info");
    });

    afterEach(() => {
        sandbox.restore();
    });

    it("can be created", () => {
        const obj = new ParameterValidation();
        Chai.should().exist(obj);
    });

    describe("checkPackageName", () => {
        it("can fail when called with null", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", null)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", undefined)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with string > 214", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "a".repeat(215))).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can succeed when called with string === 214", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "a".repeat(214))).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });

        it("can fail with upper case character", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "packageName")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can succeed with only lower case characters", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "packagename", "a")).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });

        it("can fail if starts with .", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", ".packagename")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if starts with -", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "-packagename")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if starts with _", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "_packagename")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains \\", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package\\name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains /", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package/name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains (", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package(name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains )", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package)name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains &", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package&name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains ?", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package?name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains #", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package#name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains |", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package|name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains <", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package<name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains >", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package>name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains @", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package@name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains :", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package:name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains %", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package%name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains whitespace", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains *", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package*name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains '", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package'name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains \"", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package\"name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains !", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package!name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains ~", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package~name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if contains `", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package`name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters ,", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package,name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters +", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package+name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters ;", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package;name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters $", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package$name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters =", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package=name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters [", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package[name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters ]", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package]name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail if non url safe characters ^", () => {
            Chai.expect(ParameterValidation.checkPackageName(loggerStub, "param", "package^name")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });
    });

    describe("checkPattern", () => {
        it("can fail when called with null", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", null, /a/, "message")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", undefined, /a/, "message")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", "", /a/, "message")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with null pattern", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", "a", null, "message")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined pattern", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", "a", undefined, "message")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with no pattern match", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", "b", /a/, "message")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can succeed when called with pattern match", () => {
            Chai.expect(ParameterValidation.checkPattern(loggerStub, "param", "a", /a/, "message")).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });
    });

    describe("checkOneOf", () => {
        it("can fail when called with null", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", null, [])).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", undefined, [])).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", "", [])).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty null values", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", "a", null)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty undefined values", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", "a", undefined)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with value not in values", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", "b", ["a"])).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with value not in values custom error", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", "b", ["a"], "err")).to.equal(false);
            Chai.expect(spiedErrorMethod.calledWith("param", "err")).to.equal(true);
        });

        it("can succeed when called with value in values", () => {
            Chai.expect(ParameterValidation.checkOneOf(loggerStub, "param", "a", ["a"])).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });
    });

    describe("notEmpty", () => {
        it("can fail when called with null", () => {
            Chai.expect(ParameterValidation.notEmpty(loggerStub, "param", null)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ParameterValidation.notEmpty(loggerStub, "param", undefined)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ParameterValidation.notEmpty(loggerStub, "param", "")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty string array", () => {
            Chai.expect(ParameterValidation.notEmpty(loggerStub, "param", [])).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can succeed when called with string value", () => {
            Chai.expect(ParameterValidation.notEmpty(loggerStub, "param", "a")).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });

        it("can succeed when called with string array value", () => {
            Chai.expect(ParameterValidation.notEmpty(loggerStub, "param", ["a"])).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });
    });

    describe("notEmptyNumber", () => {
        it("can fail when called with null", () => {
            Chai.expect(ParameterValidation.notEmptyNumber(loggerStub, "param", null)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ParameterValidation.notEmptyNumber(loggerStub, "param", undefined)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with 0", () => {
            Chai.expect(ParameterValidation.notEmptyNumber(loggerStub, "param", 0)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can succeed when called with > 0", () => {
            Chai.expect(ParameterValidation.notEmptyNumber(loggerStub, "param", 1)).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });
    });

    describe("isColor", () => {
        it("can fail when called with null", () => {
            Chai.expect(ParameterValidation.isColor(loggerStub, "param", null)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with undefined", () => {
            Chai.expect(ParameterValidation.isColor(loggerStub, "param", undefined)).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with empty string", () => {
            Chai.expect(ParameterValidation.isColor(loggerStub, "param", "")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can fail when called with non color string", () => {
            Chai.expect(ParameterValidation.isColor(loggerStub, "param", "a")).to.equal(false);
            Chai.expect(spiedErrorMethod.called).to.equal(true);
        });

        it("can succeed when called with color string", () => {
            Chai.expect(ParameterValidation.isColor(loggerStub, "param", "#123")).to.equal(true);
            Chai.expect(spiedInfoMethod.called).to.equal(true);
        });
    });
});
