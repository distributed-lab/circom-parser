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

  it("should correctly change vars with 'if' logic -- #1", async () => {
    const vars: Variables = {
      SIGNATURE_TYPE: { value: 2n },
      DG_HASH_TYPE: { value: 3n },
      DOCUMENT_TYPE: { value: 3n },
      EC_BLOCK_NUMBER: { value: 3n },
      EC_SHIFT: { value: 3n },
      DG1_SHIFT: { value: 3n },
      AA_SIGNATURE_ALGO: { value: 3n },
      DG15_SHIFT: { value: 3n },
      DG15_BLOCK_NUMBER: { value: 3n },
      AA_SHIFT: { value: 3n },
    };

    const visitor = new CircomSignalDeclarationVisitor(vars);
    const parser = getCircomParser("test/data/curve.circom");

    visitor.visit(parser.circuit());

    expect(visitor.vars["TREE_DEPTH"]).to.deep.equal({ value: 80n });
    expect(visitor.vars["CHUNK_SIZE"]).to.deep.equal({ value: 64n });
    expect(visitor.vars["HASH_TYPE"]).to.deep.equal({ value: 256n });
    expect(visitor.vars["CHUNK_NUMBER"]).to.deep.equal({ value: 64n });
    expect(visitor.vars["HASH_TYPE"]).to.deep.equal({ value: 256n });
    expect(visitor.vars["DG_HASH_BLOCK_SIZE"]).to.deep.equal({ value: 512n });
    expect(visitor.vars["HASH_BLOCK_SIZE"]).to.deep.equal({ value: 512n });
    expect(visitor.vars["PUBKEY_LEN"]).to.deep.equal({
      value: 64n,
    });
    expect(visitor.vars["SIGNATURE_LEN"]).to.deep.equal({
      value: 64n,
    });
  });

  it("should correctly change vars with 'if' logic -- #2", async () => {
    const vars: Variables = {
      SIGNATURE_TYPE: { value: 8n },
      DG_HASH_TYPE: { value: 8n },
      DOCUMENT_TYPE: { value: 512n },
      EC_BLOCK_NUMBER: { value: 256n },
      EC_SHIFT: { value: 2n },
      DG1_SHIFT: { value: 0n },
      AA_SIGNATURE_ALGO: { value: 17n },
      DG15_SHIFT: { value: 64n },
      DG15_BLOCK_NUMBER: { value: 64n },
      AA_SHIFT: { value: 256n },
    };

    const visitor = new CircomSignalDeclarationVisitor(vars);
    const parser = getCircomParser("test/data/curve.circom");

    visitor.visit(parser.circuit());

    expect(visitor.vars["TREE_DEPTH"]).to.deep.equal({ value: 80n });
    expect(visitor.vars["CHUNK_SIZE"]).to.deep.equal({ value: 64n });
    expect(visitor.vars["HASH_TYPE"]).to.deep.equal({ value: 256n });
    expect(visitor.vars["CHUNK_NUMBER"]).to.deep.equal({ value: 32n });
    expect(visitor.vars["HASH_TYPE"]).to.deep.equal({ value: 256n });
    expect(visitor.vars["DG_HASH_BLOCK_SIZE"]).to.deep.equal({ value: 512n });
    expect(visitor.vars["HASH_BLOCK_SIZE"]).to.deep.equal({ value: 512n });
    expect(visitor.vars["PUBKEY_LEN"]).to.deep.equal({
      value: 32n,
    });
    expect(visitor.vars["SIGNATURE_LEN"]).to.deep.equal({
      value: 32n,
    });
  });
});
