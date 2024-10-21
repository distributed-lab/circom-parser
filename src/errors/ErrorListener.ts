import { ErrorListener as AntlrErrorListener, Recognizer } from "antlr4";

import { ParserErrorItem } from "../types";
import { ExtendedCircomParser } from "../ExtendedCircomParser";

class ErrorListener<TSymbol> extends AntlrErrorListener<TSymbol> {
  private readonly _errors: ParserErrorItem[];

  constructor() {
    super();

    this._errors = [];
  }

  // TODO: improve error handling
  syntaxError(
    recognizer: Recognizer<TSymbol>,
    offendingSymbol: TSymbol,
    line: number,
    column: number,
    message: string,
  ): void {
    const parser = recognizer as ExtendedCircomParser;

    this._errors.push({
      templateName: (parser.lexer?._input as any).fileName ?? "Unknown Circuit",
      message,
      line,
      column,
    });
  }

  getErrors(): ParserErrorItem[] {
    return this._errors;
  }

  hasErrors(): boolean {
    return this._errors.length > 0;
  }
}

export default ErrorListener;
