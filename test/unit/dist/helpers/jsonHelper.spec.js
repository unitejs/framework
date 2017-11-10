"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for JsonHelper.
 */
const Chai = require("chai");
const jsonHelper_1 = require("../../../../dist/helpers/jsonHelper");
describe("JsonHelper", () => {
    it("can be created", () => {
        const obj = new jsonHelper_1.JsonHelper();
        Chai.should().exist(obj);
    });
    describe("stringify", () => {
        it("can return JSON when called with undefined", () => {
            Chai.expect(jsonHelper_1.JsonHelper.stringify(undefined)).to.equal(undefined);
        });
        it("can return JSON when called with null", () => {
            Chai.expect(jsonHelper_1.JsonHelper.stringify(null)).to.equal("null");
        });
        it("can return JSON when called with a string", () => {
            Chai.expect(jsonHelper_1.JsonHelper.stringify("hello")).to.equal(JSON.stringify("hello"));
        });
        it("can return JSON when called with a number", () => {
            Chai.expect(jsonHelper_1.JsonHelper.stringify(10)).to.equal(JSON.stringify(10));
        });
        it("can return JSON when called with a boolean", () => {
            Chai.expect(jsonHelper_1.JsonHelper.stringify(true)).to.equal(JSON.stringify(true));
        });
        it("can return JSON when called with an object", () => {
            Chai.expect(jsonHelper_1.JsonHelper.stringify({ p1: true, p2: 10 })).to.equal(JSON.stringify({ p1: true, p2: 10 }));
        });
        it("can return JSON when called with a recursive object", () => {
            const obj = { p1: true, p2: 10, p3: undefined };
            obj.p3 = obj;
            Chai.expect(jsonHelper_1.JsonHelper.stringify(obj)).to.equal(JSON.stringify({ p1: true, p2: 10 }));
        });
        it("can return formatted JSON when called with a recursive object", () => {
            const obj = { p1: true, p2: 10, p3: undefined };
            obj.p3 = obj;
            Chai.expect(jsonHelper_1.JsonHelper.stringify(obj, "\t")).to.equal(JSON.stringify({ p1: true, p2: 10 }, undefined, "\t"));
        });
    });
    describe("codify", () => {
        it("can return undefined when called with undefined", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify(undefined)).to.equal(undefined);
        });
        it("can return null when called with null", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify(null)).to.equal("null");
        });
        it("can return JSON when called with a string", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify("hello")).to.equal("'hello'");
        });
        it("can return JSON when called with a number", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify(10)).to.equal(JSON.stringify(10));
        });
        it("can return JSON when called with a boolean", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify(true)).to.equal(JSON.stringify(true));
        });
        it("can return formatted JSON when called with object", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify({ p1: true, p2: 10 })).to.equal("{\n\tp1: true,\n\tp2: 10\n}");
        });
        it("can not be confused with url", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify({ p1: "http://a.b.com", p2: 10 })).to.equal("{\n\tp1: \'http://a.b.com\',\n\tp2: 10\n}");
        });
        it("can return single quoted JSON when called with hyphenated property", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify({ p1: true, p2: 10, "p-3": "hello" })).to.equal("{\n\tp1: true,\n\tp2: 10,\n\t'p-3': 'hello'\n}");
        });
        it("can remove quotes from __dirname property", () => {
            Chai.expect(jsonHelper_1.JsonHelper.codify({ p1: "__dirname" })).to.equal("{\n\tp1: __dirname\n}");
        });
    });
    describe("parseCode", () => {
        it("can return undefined when called with undefined", () => {
            Chai.expect(jsonHelper_1.JsonHelper.parseCode(undefined)).to.equal(undefined);
        });
        it("can return null when called with null", () => {
            Chai.expect(jsonHelper_1.JsonHelper.parseCode(null)).to.equal(null);
        });
        it("can replace single quotes with double quotes", () => {
            Chai.expect(jsonHelper_1.JsonHelper.parseCode("{\n\tp1: 'foo'\n, 'p2': 'b\\'ar'}")).to.deep.equal({ p1: "foo", p2: "b'ar" });
        });
        it("can add quotes to unquoted properties", () => {
            Chai.expect(jsonHelper_1.JsonHelper.parseCode("{\n\tp1: \"foo\"\n, \"p2\": \"bar\"}")).to.deep.equal({ p1: "foo", p2: "bar" });
        });
        it("can not be confused by embedded url", () => {
            Chai.expect(jsonHelper_1.JsonHelper.parseCode("{\n\tp1: \"http://a.b.com\"\n, \"p2\": \"bar\"}")).to.deep.equal({ p1: "http://a.b.com", p2: "bar" });
        });
        it("can add quotes to __dirname property", () => {
            Chai.expect(jsonHelper_1.JsonHelper.parseCode("{\n\tp1: __dirname\n}")).to.deep.equal({ p1: "__dirname" });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvdW5pdC9zcmMvaGVscGVycy9qc29uSGVscGVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILDZCQUE2QjtBQUM3QixtRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDeEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7UUFDdkIsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsMkNBQTJDLEVBQUUsR0FBRyxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUUsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtZQUMzRCxNQUFNLEdBQUcsR0FBeUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxDQUFDO1lBQ3JGLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJ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RSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDbkgsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUUsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNySCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDM0ksQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFDakcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImhlbHBlcnMvanNvbkhlbHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUZXN0cyBmb3IgSnNvbkhlbHBlci5cbiAqL1xuaW1wb3J0ICogYXMgQ2hhaSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHsgSnNvbkhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyXCI7XG5cbmRlc2NyaWJlKFwiSnNvbkhlbHBlclwiLCAoKSA9PiB7XG4gICAgaXQoXCJjYW4gYmUgY3JlYXRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IG5ldyBKc29uSGVscGVyKCk7XG4gICAgICAgIENoYWkuc2hvdWxkKCkuZXhpc3Qob2JqKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKFwic3RyaW5naWZ5XCIsICgpID0+IHtcbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIEpTT04gd2hlbiBjYWxsZWQgd2l0aCB1bmRlZmluZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5zdHJpbmdpZnkodW5kZWZpbmVkKSkudG8uZXF1YWwodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIEpTT04gd2hlbiBjYWxsZWQgd2l0aCBudWxsXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEpzb25IZWxwZXIuc3RyaW5naWZ5KG51bGwpKS50by5lcXVhbChcIm51bGxcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBKU09OIHdoZW4gY2FsbGVkIHdpdGggYSBzdHJpbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5zdHJpbmdpZnkoXCJoZWxsb1wiKSkudG8uZXF1YWwoSlNPTi5zdHJpbmdpZnkoXCJoZWxsb1wiKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBKU09OIHdoZW4gY2FsbGVkIHdpdGggYSBudW1iZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5zdHJpbmdpZnkoMTApKS50by5lcXVhbChKU09OLnN0cmluZ2lmeSgxMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gSlNPTiB3aGVuIGNhbGxlZCB3aXRoIGEgYm9vbGVhblwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChKc29uSGVscGVyLnN0cmluZ2lmeSh0cnVlKSkudG8uZXF1YWwoSlNPTi5zdHJpbmdpZnkodHJ1ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gSlNPTiB3aGVuIGNhbGxlZCB3aXRoIGFuIG9iamVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChKc29uSGVscGVyLnN0cmluZ2lmeSh7IHAxOiB0cnVlLCBwMjogMTB9KSkudG8uZXF1YWwoSlNPTi5zdHJpbmdpZnkoeyBwMTogdHJ1ZSwgcDI6IDEwfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gSlNPTiB3aGVuIGNhbGxlZCB3aXRoIGEgcmVjdXJzaXZlIG9iamVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmo6IHsgcDE6IGJvb2xlYW47IHAyOiBudW1iZXI7IHAzOiBhbnkgfSA9IHsgcDE6IHRydWUsIHAyOiAxMCwgcDM6IHVuZGVmaW5lZH07XG4gICAgICAgICAgICBvYmoucDMgPSBvYmo7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChKc29uSGVscGVyLnN0cmluZ2lmeShvYmopKS50by5lcXVhbChKU09OLnN0cmluZ2lmeSh7IHAxOiB0cnVlLCBwMjogMTB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBmb3JtYXR0ZWQgSlNPTiB3aGVuIGNhbGxlZCB3aXRoIGEgcmVjdXJzaXZlIG9iamVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmo6IHsgcDE6IGJvb2xlYW47IHAyOiBudW1iZXI7IHAzOiBhbnkgfSA9IHsgcDE6IHRydWUsIHAyOiAxMCwgcDM6IHVuZGVmaW5lZH07XG4gICAgICAgICAgICBvYmoucDMgPSBvYmo7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChKc29uSGVscGVyLnN0cmluZ2lmeShvYmosIFwiXFx0XCIpKS50by5lcXVhbChKU09OLnN0cmluZ2lmeSh7IHAxOiB0cnVlLCBwMjogMTB9LCB1bmRlZmluZWQsIFwiXFx0XCIpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcImNvZGlmeVwiLCAoKSA9PiB7XG4gICAgICAgIGl0KFwiY2FuIHJldHVybiB1bmRlZmluZWQgd2hlbiBjYWxsZWQgd2l0aCB1bmRlZmluZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5jb2RpZnkodW5kZWZpbmVkKSkudG8uZXF1YWwodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIG51bGwgd2hlbiBjYWxsZWQgd2l0aCBudWxsXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEpzb25IZWxwZXIuY29kaWZ5KG51bGwpKS50by5lcXVhbChcIm51bGxcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBKU09OIHdoZW4gY2FsbGVkIHdpdGggYSBzdHJpbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5jb2RpZnkoXCJoZWxsb1wiKSkudG8uZXF1YWwoXCInaGVsbG8nXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiByZXR1cm4gSlNPTiB3aGVuIGNhbGxlZCB3aXRoIGEgbnVtYmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEpzb25IZWxwZXIuY29kaWZ5KDEwKSkudG8uZXF1YWwoSlNPTi5zdHJpbmdpZnkoMTApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIEpTT04gd2hlbiBjYWxsZWQgd2l0aCBhIGJvb2xlYW5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5jb2RpZnkodHJ1ZSkpLnRvLmVxdWFsKEpTT04uc3RyaW5naWZ5KHRydWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIGZvcm1hdHRlZCBKU09OIHdoZW4gY2FsbGVkIHdpdGggb2JqZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEpzb25IZWxwZXIuY29kaWZ5KHsgcDE6IHRydWUsIHAyOiAxMH0pKS50by5lcXVhbChcIntcXG5cXHRwMTogdHJ1ZSxcXG5cXHRwMjogMTBcXG59XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiBub3QgYmUgY29uZnVzZWQgd2l0aCB1cmxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5jb2RpZnkoeyBwMTogXCJodHRwOi8vYS5iLmNvbVwiLCBwMjogMTB9KSkudG8uZXF1YWwoXCJ7XFxuXFx0cDE6IFxcJ2h0dHA6Ly9hLmIuY29tXFwnLFxcblxcdHAyOiAxMFxcbn1cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJldHVybiBzaW5nbGUgcXVvdGVkIEpTT04gd2hlbiBjYWxsZWQgd2l0aCBoeXBoZW5hdGVkIHByb3BlcnR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEpzb25IZWxwZXIuY29kaWZ5KHsgcDE6IHRydWUsIHAyOiAxMCwgXCJwLTNcIjogXCJoZWxsb1wifSkpLnRvLmVxdWFsKFwie1xcblxcdHAxOiB0cnVlLFxcblxcdHAyOiAxMCxcXG5cXHQncC0zJzogJ2hlbGxvJ1xcbn1cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2FuIHJlbW92ZSBxdW90ZXMgZnJvbSBfX2Rpcm5hbWUgcHJvcGVydHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5jb2RpZnkoeyBwMTogXCJfX2Rpcm5hbWVcIn0pKS50by5lcXVhbChcIntcXG5cXHRwMTogX19kaXJuYW1lXFxufVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcInBhcnNlQ29kZVwiLCAoKSA9PiB7XG4gICAgICAgIGl0KFwiY2FuIHJldHVybiB1bmRlZmluZWQgd2hlbiBjYWxsZWQgd2l0aCB1bmRlZmluZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5wYXJzZUNvZGUodW5kZWZpbmVkKSkudG8uZXF1YWwodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmV0dXJuIG51bGwgd2hlbiBjYWxsZWQgd2l0aCBudWxsXCIsICgpID0+IHtcbiAgICAgICAgICAgIENoYWkuZXhwZWN0KEpzb25IZWxwZXIucGFyc2VDb2RlKG51bGwpKS50by5lcXVhbChudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gcmVwbGFjZSBzaW5nbGUgcXVvdGVzIHdpdGggZG91YmxlIHF1b3Rlc1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChKc29uSGVscGVyLnBhcnNlQ29kZShcIntcXG5cXHRwMTogJ2ZvbydcXG4sICdwMic6ICdiXFxcXCdhcid9XCIpKS50by5kZWVwLmVxdWFsKHsgcDE6IFwiZm9vXCIsIHAyOiBcImInYXJcIn0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNhbiBhZGQgcXVvdGVzIHRvIHVucXVvdGVkIHByb3BlcnRpZXNcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5wYXJzZUNvZGUoXCJ7XFxuXFx0cDE6IFxcXCJmb29cXFwiXFxuLCBcXFwicDJcXFwiOiBcXFwiYmFyXFxcIn1cIikpLnRvLmRlZXAuZXF1YWwoeyBwMTogXCJmb29cIiwgcDI6IFwiYmFyXCJ9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gbm90IGJlIGNvbmZ1c2VkIGJ5IGVtYmVkZGVkIHVybFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBDaGFpLmV4cGVjdChKc29uSGVscGVyLnBhcnNlQ29kZShcIntcXG5cXHRwMTogXFxcImh0dHA6Ly9hLmIuY29tXFxcIlxcbiwgXFxcInAyXFxcIjogXFxcImJhclxcXCJ9XCIpKS50by5kZWVwLmVxdWFsKHsgcDE6IFwiaHR0cDovL2EuYi5jb21cIiwgcDI6IFwiYmFyXCJ9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJjYW4gYWRkIHF1b3RlcyB0byBfX2Rpcm5hbWUgcHJvcGVydHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQ2hhaS5leHBlY3QoSnNvbkhlbHBlci5wYXJzZUNvZGUoXCJ7XFxuXFx0cDE6IF9fZGlybmFtZVxcbn1cIikpLnRvLmRlZXAuZXF1YWwoeyBwMTogXCJfX2Rpcm5hbWVcIn0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19
