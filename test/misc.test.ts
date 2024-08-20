import { expect } from "chai";

import { findIncludes, findTemplates } from "../src";

describe("General Parsing", () => {
  it("should retrieve pragma version from the circuit", () => {
    const expectedOutput = [
      "@circomlib/circuits/comparators.circom",
      "comparators.circom",
    ];

    const data = findIncludes("test/data/ToughCircuit.circom");

    expect(data).to.deep.equal(expectedOutput);
  });

  it("should correctly handle errors for invalid input", () => {
    expect(() =>
      findTemplates(`
        template Mul2(levels) {
          signal input num1;
          signal input num2;
          signal input num3[2][4];
    
          signal output out1[];
          signal output out2[];
    
          signal tmp <== 24;
    
          for (var i = 0; i < 4; i++) {
             out1[i] <== num1 * tmp;
             out2[i] <== num1 * num2;
          }
      }
    
      component main = Mul2(4);
    `),
    ).to.throw("no viable alternative at input 'signal output out1[]' (7:29)");
  });
});
