import CircomParser from "./generated/CircomParser";
import ErrorListener from "./errors/ErrorListener";

export type ParserContext = {
  parser: CircomParser;
  listener: ErrorListener;
};
