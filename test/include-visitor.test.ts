import { expect } from "chai";

import { findIncludes } from "../src";

describe("Circom Include Visitor", () => {
  it("should retrieve includes from the valid circom file", () => {
    const expectedOutput = [
      "../node_modules/circomlib/circuits/poseidon.circom",
      "../node_modules/circomlib/circuits/comparators.circom",
      "../merkleTree/merkleTree.circom",
      "@circomlib/circuits/comparators.circom",
      "comparators.circom",
    ];

    const result = findIncludes("test/data/Includes.circom");

    expect(result).to.deep.equal(expectedOutput);
  });

  it("should throw an error", () => {
    expect(() => findIncludes("test/data/SimpleWrongCircuit.circom")).to.throw(
      "test/data/SimpleWrongCircuit.circom: mismatched input 'll' expecting ')' (12:49)",
    );
  });
});
