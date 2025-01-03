import { expect } from "chai";
import { buildVariableContext, getCircomParser, VariableContext } from "../src";

import { CircomFileData } from "./mocks/types";
import { CircomFilesVisitor } from "./mocks/CircomFilesVisitor";
import { CircomTemplateInputsVisitor } from "./mocks/CircomTemplateInputsVisitor";

describe("Circom Template Inputs Visitor", () => {
  function getData(fileName: string): CircomFileData {
    const visitor = new CircomFilesVisitor(fileName);

    const parser = getCircomParser(`test/data/${fileName}`);

    visitor.visit(parser.circuit());

    return visitor.fileData;
  }

  it("should analyse the curve.circom circuit", () => {
    const mainComponentData: VariableContext = {
      SIGNATURE_TYPE: 2n,
      DG_HASH_TYPE: 8n,
      DOCUMENT_TYPE: 512n,
      EC_BLOCK_NUMBER: 256n,
      EC_SHIFT: 2n,
      DG1_SHIFT: 0n,
      AA_SIGNATURE_ALGO: 17n,
      DG15_SHIFT: 64n,
      DG15_BLOCK_NUMBER: 64n,
      AA_SHIFT: 256n,
    };

    const data = getData("curve.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "curve.circom",
      data.templates["RegisterIdentityBuilder"].context,
      mainComponentData,
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.encapsulatedContent.type).to.equal("input");
    expect(visitor.templateInputs.encapsulatedContent.dimension).to.deep.equal([
      131072,
    ]);

    expect(visitor.templateInputs.dg1.type).to.equal("input");
    expect(visitor.templateInputs.dg1.dimension).to.deep.equal([1024]);

    expect(visitor.templateInputs.dg15.type).to.equal("input");
    expect(visitor.templateInputs.dg15.dimension).to.deep.equal([32768]);

    expect(visitor.templateInputs.signedAttributes.type).to.equal("input");
    expect(visitor.templateInputs.signedAttributes.dimension).to.deep.equal([
      1024,
    ]);

    expect(visitor.templateInputs.signature.type).to.equal("input");
    expect(visitor.templateInputs.signature.dimension).to.deep.equal([64]);

    expect(visitor.templateInputs.pubkey.type).to.equal("input");
    expect(visitor.templateInputs.pubkey.dimension).to.deep.equal([64]);

    expect(visitor.templateInputs.slaveMerkleRoot.type).to.equal("input");
    expect(visitor.templateInputs.slaveMerkleRoot.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.slaveMerkleInclusionBranches.type).to.equal(
      "input",
    );
    expect(
      visitor.templateInputs.slaveMerkleInclusionBranches.dimension,
    ).to.deep.equal([80]);

    expect(visitor.templateInputs.skIdentity.type).to.equal("input");
    expect(visitor.templateInputs.skIdentity.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.dg15PubKeyHash.type).to.equal("output");
    expect(visitor.templateInputs.dg15PubKeyHash.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.passportHash.type).to.equal("output");
    expect(visitor.templateInputs.passportHash.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.dg1Commitment.type).to.equal("output");
    expect(visitor.templateInputs.dg1Commitment.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.pkIdentityHash.type).to.equal("output");
    expect(visitor.templateInputs.pkIdentityHash.dimension).to.deep.equal([]);
  });

  it("should analyse the MainComponent.circom circuit", () => {
    const mainComponentData: VariableContext = {
      p1: 2n,
      p2: 8n,
    };

    const data = getData("MainComponent.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "MainComponent.circom",
      data.templates["C"].context,
      mainComponentData,
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.in1.type).to.equal("input");
    expect(visitor.templateInputs.in1.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.in2.type).to.equal("input");
    expect(visitor.templateInputs.in2.dimension).to.deep.equal([3, 2]);

    expect(visitor.templateInputs.out.type).to.equal("output");
    expect(visitor.templateInputs.out.dimension).to.deep.equal([]);
  });

  it("should analyse the ComplexMainComponent.circom circuit", () => {
    const data = getData("ComplexMainComponent.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "ComplexMainComponent.circom",
      data.templates[data.mainComponentInfo.templateName!].context,
      buildVariableContext(
        data.templates[data.mainComponentInfo.templateName!].parameters,
        data.mainComponentInfo.parameters,
      ),
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.in1.type).to.equal("input");
    expect(visitor.templateInputs.in1.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.in2.type).to.equal("input");
    expect(visitor.templateInputs.in2.dimension).to.deep.equal([3, 600]);

    expect(visitor.templateInputs.out.type).to.equal("output");
    expect(visitor.templateInputs.out.dimension).to.deep.equal([]);
  });

  it("should analyse the AnotherMainComponent.circom circuit", () => {
    const data = getData("AnotherMainComponent.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "AnotherMainComponent.circom",
      data.templates[data.mainComponentInfo.templateName!].context,
      buildVariableContext(
        data.templates[data.mainComponentInfo.templateName!].parameters,
        data.mainComponentInfo.parameters,
      ),
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.in1.type).to.equal("input");
    expect(visitor.templateInputs.in1.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.in2.type).to.equal("input");
    expect(visitor.templateInputs.in2.dimension).to.deep.equal([15, 30]);

    expect(visitor.templateInputs.out.type).to.equal("output");
    expect(visitor.templateInputs.out.dimension).to.deep.equal([]);
  });

  it("should analyse the BigModNonEqual.circom circuit", () => {
    const data = getData("BigModNonEqual.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "BigModNonEqual.circom",
      data.templates[data.mainComponentInfo.templateName!].context,
      buildVariableContext(
        data.templates[data.mainComponentInfo.templateName!].parameters,
        data.mainComponentInfo.parameters,
      ),
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.base.type).to.equal("input");
    expect(visitor.templateInputs.base.dimension).to.deep.equal([6]);

    expect(visitor.templateInputs.modulus.type).to.equal("input");
    expect(visitor.templateInputs.modulus.dimension).to.deep.equal([4]);

    expect(visitor.templateInputs.dummy.type).to.equal("input");
    expect(visitor.templateInputs.dummy.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.div.type).to.equal("output");
    expect(visitor.templateInputs.div.dimension).to.deep.equal([3]);

    expect(visitor.templateInputs.mod.type).to.equal("output");
    expect(visitor.templateInputs.mod.dimension).to.deep.equal([4]);

    expect(visitor.templateInputs.another.type).to.equal("output");
    expect(visitor.templateInputs.another.dimension).to.deep.equal([4]);
  });

  it("should analyse the EcAdd.circom circuit", () => {
    const data = getData("EcAdd.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "EcAdd.circom",
      data.templates[data.mainComponentInfo.templateName!].context,
      buildVariableContext(
        data.templates[data.mainComponentInfo.templateName!].parameters,
        data.mainComponentInfo.parameters,
      ),
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.in1.type).to.equal("input");
    expect(visitor.templateInputs.in1.dimension).to.deep.equal([2, 4]);

    expect(visitor.templateInputs.in2.type).to.equal("input");
    expect(visitor.templateInputs.in2.dimension).to.deep.equal([2, 4]);

    expect(visitor.templateInputs.dummy.type).to.equal("input");
    expect(visitor.templateInputs.dummy.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.out.type).to.equal("output");
    expect(visitor.templateInputs.out.dimension).to.deep.equal([2, 4]);
  });

  it("should analyse the Math.circom circuit", () => {
    const data = getData("Math.circom");

    const visitor = new CircomTemplateInputsVisitor(
      "Math.circom",
      data.templates[data.mainComponentInfo.templateName!].context,
      buildVariableContext(
        data.templates[data.mainComponentInfo.templateName!].parameters,
        data.mainComponentInfo.parameters,
      ),
    );

    visitor.startParse();

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.out1.type).to.equal("output");
    expect(visitor.templateInputs.out1.dimension).to.deep.equal([13]);

    expect(visitor.templateInputs.out2.type).to.equal("output");
    expect(visitor.templateInputs.out2.dimension).to.deep.equal([16]);

    expect(visitor.templateInputs.tmp1.type).to.equal("intermediate");
    expect(visitor.templateInputs.tmp1.dimension).to.deep.equal([6, 8, 2, 20]);

    expect(visitor.templateInputs.tmp2.type).to.equal("intermediate");
    expect(visitor.templateInputs.tmp2.dimension).to.deep.equal([6, 2, 20]);

    expect(visitor.templateInputs.tmp3.type).to.equal("intermediate");
    expect(visitor.templateInputs.tmp3.dimension).to.deep.equal([6, 2, 2, 20]);

    expect(visitor.templateInputs.tmp4.type).to.equal("intermediate");
    expect(visitor.templateInputs.tmp4.dimension).to.deep.equal([5, 2, 2, 20]);

    expect(visitor.templateInputs.powers.type).to.equal("intermediate");
    expect(visitor.templateInputs.powers.dimension).to.deep.equal([
      2, 256, 2, 6,
    ]);
  });
});
