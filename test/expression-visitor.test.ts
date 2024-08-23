import { expect } from "chai";

import { CircomSignalDeclarationVisitor } from "./mocks/CircomSignalDeclarationVisitor";

import { getCircomParser, Variables } from "../src";

describe("Circom Expression Visitor", () => {
  it("should correctly evaluate ternary expressions", async () => {
    const vars: Variables = {
      p1: { value: 3n },
    };

    const visitor = new CircomSignalDeclarationVisitor(vars);

    const source = `
        template C() {
           signal input in1;
           signal input in2[p1 % 2 == 1 ? 10 : 2*2][p1];
        }
    `;

    const parser = getCircomParser(source);

    visitor.visit(parser.circuit());

    expect(visitor.signalDeclarations).to.deep.equal([
      { name: "in1", dimensions: [] },
      { name: "in2", dimensions: [10, 3] },
    ]);
  });
});
