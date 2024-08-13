import { Token } from "antlr4";

import { CircomParser } from "../generated";

import ErrorListener from "../errors/ErrorListener";

export type ParserContext = {
  parser: CircomParser;
  errorListener: ErrorListener<Token>;
};

export type LocationCtx = {
  line: number;
  column: number;
};
