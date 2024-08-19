import { ErrorListener as AntlrErrorListener, Recognizer } from "antlr4";

import { ParserErrorItem } from "../types";

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
    this._errors.push({ message, line, column });
  }

  getErrors(): ParserErrorItem[] {
    return this._errors;
  }

  hasErrors(): boolean {
    return this._errors.length > 0;
  }
}

export default ErrorListener;
