import { expect } from "chai";

import { CircomFilesVisitor } from "./mocks/CircomFilesVisitor";
import { CircomFileData, CircuitResolutionError } from "./mocks/types";

import { getCircomParser } from "../src";

describe("Circom File Visitor", () => {
  function getData(
    fileName: string,
  ): [CircuitResolutionError[], CircomFileData] {
    const visitor = new CircomFilesVisitor(fileName);

    const parser = getCircomParser(`test/data/${fileName}`);

    visitor.visit(parser.circuit());

    return [visitor.errors, visitor.fileData];
  }

  it("should analyse the curve.circom circuit", () => {
    const [errors, fileData] = getData("curve.circom");

    expect(errors.length).to.equal(0);
    expect(fileData.pragmaInfo.isCustom).to.equal(false);
    expect(fileData.pragmaInfo.compilerVersion).to.equal("2.1.6");
    expect(fileData.includes.length).to.equal(0);
    expect(fileData.mainComponentInfo.templateName).to.equal(null);
    expect(fileData.mainComponentInfo.publicInputs.length).to.equal(0);
    expect(fileData.mainComponentInfo.parameters.length).to.equal(0);
    expect(Object.keys(fileData.templates).length).to.equal(1);

    const template = fileData.templates["RegisterIdentityBuilder"];

    expect(template.isCustom).to.equal(false);
    expect(template.parallel).to.equal(false);

    expect(template.parameters).to.deep.equal([
      "SIGNATURE_TYPE",
      "DG_HASH_TYPE",
      "DOCUMENT_TYPE",
      "EC_BLOCK_NUMBER",
      "EC_SHIFT",
      "DG1_SHIFT",
      "AA_SIGNATURE_ALGO",
      "DG15_SHIFT",
      "DG15_BLOCK_NUMBER",
      "AA_SHIFT",
    ]);
  });

  it("should analyse Include.circom circuit", () => {
    const [errors, fileData] = getData("Includes.circom");

    expect(errors.length).to.equal(0);
    expect(fileData.pragmaInfo.isCustom).to.equal(false);
    expect(fileData.pragmaInfo.compilerVersion).to.equal("2.1.6");
    expect(fileData.includes.length).to.equal(5);
    expect(fileData.includes).to.deep.equal([
      "../node_modules/circomlib/circuits/poseidon.circom",
      "../node_modules/circomlib/circuits/comparators.circom",
      "../merkleTree/merkleTree.circom",
      "@circomlib/circuits/comparators.circom",
      "comparators.circom",
    ]);
    expect(fileData.mainComponentInfo.templateName).to.equal(null);
    expect(fileData.mainComponentInfo.publicInputs.length).to.equal(0);
    expect(fileData.mainComponentInfo.parameters.length).to.equal(0);
    expect(Object.keys(fileData.templates).length).to.equal(0);
  });

  it("should analyse the MainComponent.circom circuit", () => {
    const [errors, fileData] = getData("MainComponent.circom");

    expect(errors.length).to.equal(0);
    expect(fileData.pragmaInfo.isCustom).to.equal(false);
    expect(fileData.pragmaInfo.compilerVersion).to.equal("2.1.6");
    expect(fileData.includes.length).to.equal(1);
    expect(fileData.includes).to.deep.equal([
      "../merkleTree/merkleTree.circom",
    ]);
    expect(fileData.mainComponentInfo.templateName).to.equal("C");
    expect(fileData.mainComponentInfo.publicInputs.length).to.equal(1);
    expect(fileData.mainComponentInfo.publicInputs).to.deep.equal(["in1"]);
    expect(fileData.mainComponentInfo.parameters.length).to.equal(2);
    expect(fileData.mainComponentInfo.parameters).to.deep.equal([
      [10n, 20n],
      [30n, 40n],
    ]);
    expect(Object.keys(fileData.templates).length).to.equal(2);

    const templateB = fileData.templates["B"];

    expect(templateB.isCustom).to.equal(false);
    expect(templateB.parallel).to.equal(false);
    expect(templateB.parameters).to.deep.equal(["N"]);

    const templateC = fileData.templates["C"];

    expect(templateC.isCustom).to.equal(false);
    expect(templateC.parallel).to.equal(false);
    expect(templateC.parameters).to.deep.equal(["p1", "p2"]);
  });

  it("should analyse the Templates.circom circuit", () => {
    const [errors, fileData] = getData("Templates.circom");

    expect(errors.length).to.equal(0);
    expect(fileData.pragmaInfo.isCustom).to.equal(false);
    expect(fileData.pragmaInfo.compilerVersion).to.equal("2.1.6");
    expect(fileData.includes.length).to.equal(3);
    expect(fileData.includes).to.deep.equal([
      "../node_modules/circomlib/circuits/poseidon.circom",
      "../node_modules/circomlib/circuits/comparators.circom",
      "../merkleTree/merkleTree.circom",
    ]);
    expect(fileData.mainComponentInfo.templateName).to.equal("C");
    expect(fileData.mainComponentInfo.publicInputs.length).to.equal(1);
    expect(fileData.mainComponentInfo.publicInputs).to.deep.equal(["in1"]);
    expect(fileData.mainComponentInfo.parameters.length).to.equal(2);
    expect(fileData.mainComponentInfo.parameters).to.deep.equal([
      [10n, 20n],
      [30n, 40n],
    ]);
    expect(Object.keys(fileData.templates).length).to.equal(3);

    const templateA = fileData.templates["A"];

    expect(templateA.isCustom).to.equal(false);
    expect(templateA.parallel).to.equal(false);
    expect(templateA.parameters).to.deep.equal(["param1", "param2"]);

    const templateB = fileData.templates["B"];

    expect(templateB.isCustom).to.equal(true);
    expect(templateB.parallel).to.equal(false);
    expect(templateB.parameters).to.deep.equal(["N"]);

    const templateC = fileData.templates["C"];

    expect(templateC.isCustom).to.equal(false);
    expect(templateC.parallel).to.equal(false);
    expect(templateC.parameters).to.deep.equal(["p1", "p2"]);
  });

  it("should analyse the ToughCircuit.circom circuit", () => {
    const [errors, fileData] = getData("ToughCircuit.circom");

    expect(errors.length).to.equal(0);
    expect(fileData.pragmaInfo.isCustom).to.equal(false);
    expect(fileData.pragmaInfo.compilerVersion).to.equal("2.0.0");
    expect(fileData.includes.length).to.equal(2);
    expect(fileData.includes).to.deep.equal([
      "@circomlib/circuits/comparators.circom",
      "comparators.circom",
    ]);
    expect(fileData.mainComponentInfo.templateName).to.equal("A");
    expect(fileData.mainComponentInfo.publicInputs.length).to.equal(1);
    expect(fileData.mainComponentInfo.publicInputs).to.deep.equal(["b"]);
    expect(fileData.mainComponentInfo.parameters.length).to.equal(1);
    expect(fileData.mainComponentInfo.parameters).to.deep.equal([2n]);
    expect(Object.keys(fileData.templates).length).to.equal(2);

    const templateB = fileData.templates["B"];

    expect(templateB.isCustom).to.equal(false);
    expect(templateB.parallel).to.equal(false);
    expect(templateB.parameters).to.deep.equal(["a"]);

    const templateA = fileData.templates["A"];

    expect(templateA.isCustom).to.equal(false);
    expect(templateA.parallel).to.equal(true);
    expect(templateA.parameters).to.deep.equal(["a1"]);
  });

  it("should analyse the ComplexMainComponent.circom circuit", () => {
    const [errors, fileData] = getData("ComplexMainComponent.circom");

    expect(errors.length).to.equal(0);
    expect(fileData.mainComponentInfo.parameters[0]).to.deep.equal([
      [[[[[[10n]]]]]],
      [[[[[[20n]]]]]],
    ]);
    expect(fileData.mainComponentInfo.parameters[1]).to.deep.equal([
      [[30n], [40n]],
    ]);
  });
});
