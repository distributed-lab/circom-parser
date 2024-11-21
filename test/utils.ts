import { bindVariableContext, resolveDimensions } from "../src";

describe("utils", () => {
  describe("resolve dimensions", () => {
    it.only("should resolve the case: [1]", () => {
      console.log(bindVariableContext("a", [1, 2], [[3, 5]]));
      console.log(bindVariableContext("a", [1, 2], []));
    });
  });
});
