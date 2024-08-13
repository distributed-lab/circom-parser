import { expect } from "chai";

import { findTemplates } from "../src";

describe("Circom Templates Visitor", () => {
  it("should retrieve templates info from the valid circom file", () => {
    const expectedOutput = {
      A: {
        inputs: [
          {
            name: "b",
            dimension: ["param1", "param2*2", "5"],
            type: "input",
          },
          {
            name: "c",
            dimension: [],
            type: "input",
          },
          {
            name: "d",
            dimension: ["2"],
            type: "input",
          },
          {
            name: "a",
            dimension: [],
            type: "input",
          },
          {
            name: "f",
            dimension: [],
            type: "output",
          },
        ],
        parameters: ["param1", "param2"],
        isCustom: false,
      },
      B: {
        inputs: [
          {
            name: "in",
            dimension: [],
            type: "input",
          },
          {
            name: "out",
            dimension: [],
            type: "output",
          },
        ],
        parameters: ["N"],
        isCustom: true,
      },
      C: {
        inputs: [
          {
            name: "in1",
            dimension: [],
            type: "input",
          },
          {
            name: "in2",
            dimension: ["3", "p1"],
            type: "input",
          },
          {
            name: "out",
            dimension: [],
            type: "output",
          },
        ],
        parameters: ["p1", "p2"],
        isCustom: false,
      },
    };

    const result = findTemplates("test/data/Templates.circom");

    expect(result).to.deep.equal(expectedOutput);
  });

  it("should throw an error if duplicate template name is used", () => {
    expect(() => findTemplates("test/data/WrongTemplates.circom")).to.throw(
      "Template name A is already in use (20:0)",
    );
  });
});
