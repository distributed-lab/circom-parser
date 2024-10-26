import { ParserRuleContext } from "antlr4";

import { CircomVisitor } from "./generated";

import { ParserErrorItem } from "./types";

export class ExtendedCircomVisitor<Result> extends CircomVisitor<Result> {
  errors: ParserErrorItem[];

  constructor(public templateIdentifier: string) {
    super();

    this.errors = [];
  }

  protected addError(message: string, context: ParserRuleContext) {
    this.errors.push({
      templateName: this.templateIdentifier,
      message,
      line: context.start.line,
      column: context.start.column,
      context,
    });
  }

  public getErrors(): ParserErrorItem[] {
    return this.errors;
  }
}
