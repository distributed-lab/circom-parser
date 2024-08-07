import { ParserErrorItem } from "./types";

export class ParserError extends Error {
  public errors: ParserErrorItem[];

  constructor(args: { errors: ParserErrorItem[] }) {
    super();
    const { message, line, column } = args.errors[0];
    this.message = `${message} (${line}:${column})`;
    this.errors = args.errors;
  }
}
