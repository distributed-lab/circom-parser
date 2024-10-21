import { ParserErrorItem } from "../types";

export class ParserError extends Error {
  public errors: ParserErrorItem[];

  constructor(args: ParserErrorItem[] | ParserErrorItem) {
    super();

    let firstError: ParserErrorItem;

    if (Array.isArray(args)) {
      this.errors = args;
      firstError = args[0];
    } else {
      this.errors = [args];
      firstError = args;
    }

    const { templateName, message, line, column } = firstError;
    this.message = `${templateName ?? "Unknown Circuit"}: ${message} (${line}:${column})`;
  }
}
