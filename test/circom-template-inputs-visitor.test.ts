import { expect } from "chai";
import { getCircomParser, VariableContext } from "../src";

import { Templates } from "./mocks/types";
import { CircomFilesVisitor } from "./mocks/CircomFilesVisitor";
import { CircomTemplateInputsVisitor } from "./mocks/CircomTemplateInputsVisitor";

describe("Circom Template Inputs Visitor", () => {
  function getData(fileName: string): Templates {
    const visitor = new CircomFilesVisitor(fileName);

    const parser = getCircomParser(`test/data/${fileName}`);

    visitor.visit(parser.circuit());

    return visitor.fileData.templates;
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
      data["RegisterIdentityBuilder"].context,
      mainComponentData,
    );

    const parser = getCircomParser(`test/data/curve.circom`);

    visitor.visit(parser.circuit());

    expect(visitor.errors.length).to.equal(0);

    expect(visitor.templateInputs.encapsulatedContent.type).to.equal("input");
    expect(visitor.templateInputs.encapsulatedContent.dimension).to.deep.equal([
      131072n,
    ]);

    expect(visitor.templateInputs.dg1.type).to.equal("input");
    expect(visitor.templateInputs.dg1.dimension).to.deep.equal([1024n]);

    expect(visitor.templateInputs.dg15.type).to.equal("input");
    expect(visitor.templateInputs.dg15.dimension).to.deep.equal([32768n]);

    expect(visitor.templateInputs.signedAttributes.type).to.equal("input");
    expect(visitor.templateInputs.signedAttributes.dimension).to.deep.equal([
      1024n,
    ]);

    expect(visitor.templateInputs.signature.type).to.equal("input");
    expect(visitor.templateInputs.signature.dimension).to.deep.equal([64n]);

    expect(visitor.templateInputs.pubkey.type).to.equal("input");
    expect(visitor.templateInputs.pubkey.dimension).to.deep.equal([64n]);

    expect(visitor.templateInputs.slaveMerkleRoot.type).to.equal("input");
    expect(visitor.templateInputs.slaveMerkleRoot.dimension).to.deep.equal([]);

    expect(visitor.templateInputs.slaveMerkleInclusionBranches.type).to.equal(
      "input",
    );
    expect(
      visitor.templateInputs.slaveMerkleInclusionBranches.dimension,
    ).to.deep.equal([80n]);

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
});