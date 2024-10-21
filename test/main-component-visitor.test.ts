import { expect } from "chai";

import { findMainComponent } from "../src";

describe("Circom Main Component Visitor", () => {
  it("should retrieve main component declaration info from the valid circom file", () => {
    const expectedOutput = {
      templateName: "C",
      publicInputs: ["in1"],
      parameters: [
        [10n, 20n],
        [30n, 40n],
      ],
    };

    expect(findMainComponent("test/data/MainComponent.circom")).to.deep.equal(
      expectedOutput,
    );
  });

  it("should handle simple expressions inside the main component declaration parameters", () => {
    const expectedOutput = {
      templateName: "A",
      publicInputs: ["in"],
      parameters: [27n, [70n, 34n, 1n], 1n],
    };

    expect(
      findMainComponent(`
      pragma circom 2.1.6;
    
      component main {public [in]} = A(3 ** (2 * 10 - 10 - 7), [7*10, 34, 4>>2], !(4 < 3));
    `),
    ).to.deep.equal(expectedOutput);

    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A(3, 4 / 0);
  `),
    ).to.throw("Division by zero is not allowed (4:40)");
  });

  it("should handle ternary expressions inside the main component declaration parameters", () => {
    const expectedOutput1 = {
      templateName: "A",
      publicInputs: ["in"],
      parameters: [10n, 13n],
    };

    const expectedOutput2 = {
      templateName: "A",
      publicInputs: ["in"],
      parameters: [23n],
    };

    expect(
      findMainComponent(`
      pragma circom 2.1.6;
    
      component main {public [in]} = A(10, !(10 > 20) ? 13 : 23);
    `),
    ).to.deep.equal(expectedOutput1);

    expect(
      findMainComponent(`
      pragma circom 2.1.6;
    
      component main {public [in]} = A((10 & 20) ? 13 : 23);
    `),
    ).to.deep.equal(expectedOutput2);
  });

  it("should handle no public inputs and no parameters inside the main component declaration", () => {
    const expectedOutput = {
      templateName: "A",
      publicInputs: [],
      parameters: [],
    };

    const result = findMainComponent(`
      pragma circom 2.1.6;
    
      component main = A();
    `);

    expect(result).to.deep.equal(expectedOutput);
  });

  it("should handle no main component declaration correctly", () => {
    expect(findMainComponent("test/data/Includes.circom")).to.deep.equal({
      templateName: null,
      publicInputs: [],
      parameters: [],
    });
  });

  it("should throw an error if more than 1 main component is declared", () => {
    expect(() =>
      findMainComponent("test/data/WrongMainComponent.circom"),
    ).throws(
      "test/data/WrongMainComponent.circom: mismatched input 'component' expecting <EOF> (22:0)",
    );
  });

  it("should throw an error if identifier is used within main component parameters", () => {
    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A(variable, 4);
  `),
    ).throws(
      "Identifier usage is not allowed within the main component's parameters (4:37)",
    );
  });

  it("should throw an error if invalid expression is used inside the main component parameters", () => {
    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A(3, 4 = 4);
  `),
    ).throws("Unknown Circuit: mismatched input '=' expecting ')' (4:42)");

    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A(3, 4 += 2);
  `),
    ).throws("Unknown Circuit: mismatched input '+=' expecting ')' (4:42)");

    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A([2, 8] + [1, 10]);
  `),
    ).throws("A: Expected bigint operands in binary expression (4:37)");

    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A(![2, 8]);
  `),
    ).throws("A: Expected bigint operand in unary expression (4:37)");

    expect(() =>
      findMainComponent(`
    pragma circom 2.1.6;
  
    component main {public [in]} = A([2, 8] ? [2, 10] : 10);
  `),
    ).throws(
      "A: Expected bigint conditional value in ternary expression (4:37)",
    );
  });
});
