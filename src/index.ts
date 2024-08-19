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
  const parser = new ExtendedCircomParser(tokens);

  parser.setLexer(lexer);
  parser.initErrorListeners();

  parser.buildParseTrees = true;

  return parser;
}

export * from "./types";
export * from "./builtin";
export * from "./generated";

export { ExtendedCircomParser } from "./ExtendedCircomParser";

export { ParserError } from "./errors/ParserError";
