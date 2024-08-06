import CircomParser from "../parser/CircomParser";
import fs from "fs";
import * as antlr4 from "antlr4";
import CircomLexer from "../parser/CircomLexer";

export function getCircomParser(source: string): CircomParser {
  const input = fs.existsSync(source)
    ? fs.readFileSync(source, "utf8")
    : source;

  const inputStream = antlr4.CharStreams.fromString(input);
  const lexer = new CircomLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CircomParser(tokens);
  parser.buildParseTrees = true;

  return parser;
}
