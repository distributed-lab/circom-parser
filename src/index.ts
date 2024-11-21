import fs from "fs";
import * as antlr4 from "antlr4";

import { CircomLexer } from "./generated";

import { ExtendedCircomParser } from "./ExtendedCircomParser";

export function getCircomParser(source: string): ExtendedCircomParser {
  let inputStream: antlr4.CharStream;
  let fileIdentifier = "Built from source";
  if (fs.existsSync(source)) {
    inputStream = antlr4.CharStreams.fromPathSync(source, "utf8");
    fileIdentifier = source;
  } else {
    inputStream = antlr4.CharStreams.fromString(source);
  }

  const lexer = new CircomLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);

  return new ExtendedCircomParser(fileIdentifier, tokens, lexer);
}

export * from "./types";
export * from "./utils";
export * from "./generated";

export { ExtendedCircomParser } from "./ExtendedCircomParser";
export { ExtendedCircomVisitor } from "./ExtendedCircomVisitor";

export { ParserError } from "./errors/ParserError";
