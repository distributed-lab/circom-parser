import { ParserRuleContext } from "antlr4";

export type ParserErrorItem = {
  fileIdentifier: string;
  message: string;
  line: number;
  column: number;
  context: ParserRuleContext;
};
