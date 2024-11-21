import { expect } from "chai";

import { bindVariableContext } from "../src";

describe("utils", () => {
  describe("resolve dimensions", () => {
    it("should resolve the case: [1, 2], when value: [[3, 5]]", () => {
      expect(bindVariableContext("a", [1, 2], [[3n, 5n]])).to.deep.equal({
        "a[0][0]": 3n,
        "a[0][1]": 5n,
      });
    });

    it("should resolve the case: [1, 2], when value: []", () => {
      expect(bindVariableContext("a", [1, 2], [])).to.deep.equal({
        "a[0][0]": null,
        "a[0][1]": null,
      });
    });

    it("should resolve the case: [], when value: 1", () => {
      expect(bindVariableContext("a", [], 1n)).to.deep.equal({
        a: 1n,
      });
    });

    it("should resolve the case: [1], when value: 1", () => {
      expect(bindVariableContext("a", [1], 1n)).to.deep.equal({
        "a[0]": null,
      });
    });

    it("should resolve the case: [2, 2], when value: [[1, 2], [3, 4]]", () => {
      expect(
        bindVariableContext(
          "a",
          [2, 2],
          [
            [1n, 2n],
            [3n, 4n],
          ],
        ),
      ).to.deep.equal({
        "a[0][0]": 1n,
        "a[0][1]": 2n,
        "a[1][0]": 3n,
        "a[1][1]": 4n,
      });
    });
  });
});
