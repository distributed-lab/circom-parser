import { ParserRuleContext } from "antlr4";

export type ParserErrorItem = {
  templateName: string | null;
  message: string;
  line: number;
  column: number;
  context: ParserRuleContext;
};
