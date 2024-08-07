import fs from "fs";
import * as antlr4 from "antlr4";

import { ParserContext } from "./types";
import CircomLexer from "./generated/CircomLexer";
import CircomParser from "./generated/CircomParser";
import ErrorListener from "./errors/ErrorListener";
import { findMainComponent, findTemplates } from "./builtin";

export function getCircomParser(source: string): ParserContext {
  const input = fs.existsSync(source)
    ? fs.readFileSync(source, "utf8")
    : source;

  const inputStream = antlr4.CharStreams.fromString(input);
  const lexer = new CircomLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CircomParser(tokens);

  const listener = new ErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);

  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  parser.buildParseTrees = true;

  return {
    parser: parser,
    listener: listener,
  };
}

export {
  findTemplates,
  findIncludes,
  findMainComponent,
} from "./builtin/index";
