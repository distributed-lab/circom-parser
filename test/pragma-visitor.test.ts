import { expect } from "chai";

import { findPragma } from "../src";

describe("Circom Pragma Visitor", () => {
  it("should retrieve pragma version from the circuit", () => {
    const result = findPragma(`
      pragma circom 2.1.6;
    
      component main = A();
    `);

    expect(result.isCustom).to.be.false;
    expect(result.compilerVersion).to.equal("2.1.6");
  });

  it("should retrieve pragma version from the circuit", () => {
    const result = findPragma(`
      pragma custom_templates;
    
      component main = A();
    `);

    expect(result.isCustom).to.be.true;
    expect(result.compilerVersion).to.equal("");
  });
});
