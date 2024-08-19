import fs from "fs";
import * as antlr4 from "antlr4";

import { CircomLexer } from "./generated";

import { ExtendedCircomParser } from "./ExtendedCircomParser";

export function getCircomParser(source: string): ExtendedCircomParser {
  const input = fs.existsSync(source)
    ? fs.readFileSync(source, "utf8")
    : source;

  const inputStream = antlr4.CharStreams.fromString(input);
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
