import fs from "fs";
import * as antlr4 from "antlr4";

import { CircomLexer } from "./generated";

import { ExtendedCircomParser } from "./ExtendedCircomParser";

export function getCircomParser(source: string): ExtendedCircomParser {
  const inputStream = fs.existsSync(source)
    ? antlr4.CharStreams.fromPathSync(source, "utf8")
    : antlr4.CharStreams.fromString(source);

  const lexer = new CircomLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);

  return new ExtendedCircomParser(tokens, lexer);
}

export * from "./types";
export * from "./generated";
export * from "./helpers";
export * from "./utils";

export { ExtendedCircomParser } from "./ExtendedCircomParser";
export { ExtendedCircomVisitor } from "./ExtendedCircomVisitor";

export { ParserError } from "./errors/ParserError";
