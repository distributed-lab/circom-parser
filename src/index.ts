import fs from "fs";
import * as antlr4 from "antlr4";

import { CircomLexer, CircomParser } from "./generated";

import { ParserContext } from "./types";

import ErrorListener from "./errors/ErrorListener";

export function getCircomParser(source: string): ParserContext {
  const input = fs.existsSync(source)
    ? fs.readFileSync(source, "utf8")
    : source;

  const inputStream = antlr4.CharStreams.fromString(input);
  const lexer = new CircomLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CircomParser(tokens);

  const errorListener = new ErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener);

  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  parser.buildParseTrees = true;

  return {
    parser: parser,
    errorListener: errorListener,
  };
}

export * from "./types";
export * from "./generated";
export {
  findTemplates,
  findIncludes,
  findMainComponent,
} from "./builtin/index";
export { ParserError } from "./errors/ParserError";
