import { CircomParser } from "./generated";
import ErrorListener from "./errors/ErrorListener";
import { Token } from "antlr4";

export type ParserContext = {
  parser: CircomParser;
  errorListener: ErrorListener<Token>;
};
