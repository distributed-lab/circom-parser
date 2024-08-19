import { expect } from "chai";

import { findIncludes } from "../src";

describe("General Parsing", () => {
  it("should retrieve pragma version from the circuit", () => {
    const expectedOutput = [
      "@circomlib/circuits/comparators.circom",
      "comparators.circom",
    ];

    const data = findIncludes("test/data/ToughCircuit.circom");

    expect(data).to.deep.equal(expectedOutput);
  });
});
