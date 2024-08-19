import { Token } from "antlr4";
import * as antlr4 from "antlr4";

import { CircomLexer, CircomParser } from "./generated";

import ErrorListener from "./errors/ErrorListener";
import { ParserErrorItem } from "./types";

export class ExtendedCircomParser extends CircomParser {
  lexer: CircomLexer | null = null;

  parserErrorListener: ErrorListener<Token>;
  lexerErrorListener: ErrorListener<number> | null = null;

  constructor(tokens: antlr4.CommonTokenStream) {
    super(tokens);

    this.removeErrorListeners();
    this.parserErrorListener = new ErrorListener();
    this.addErrorListener(this.parserErrorListener);
  }

  circuit() {
    try {
      this._interp.predictionMode = antlr4.PredictionMode.SLL;
      return super.circuit();
    } catch (err) {
      this._interp.predictionMode = antlr4.PredictionMode.LL;

      this.parserErrorListener = new ErrorListener();
      this.removeErrorListeners();
      this.addErrorListener(this.parserErrorListener);

      return super.circuit();
    }
  }

  setLexer(lexer: CircomLexer) {
    this.lexer = lexer;
  }

  initErrorListeners() {
    this.parserErrorListener = new ErrorListener();
    this.removeErrorListeners();
    this.addErrorListener(this.parserErrorListener);

    if (this.lexer) {
      this.lexerErrorListener = new ErrorListener();
      this.lexer.removeErrorListeners();
      this.lexer.addErrorListener(this.lexerErrorListener);
    }
  }

  hasAnyErrors(): boolean {
    return (
      this.parserErrorListener.hasErrors() ||
      (this.lexerErrorListener !== null && this.lexerErrorListener.hasErrors())
    );
  }

  getAllErrors(): ParserErrorItem[] {
    const errors: ParserErrorItem[] = [];

    this.parserErrorListener.getErrors().forEach((error) => {
      errors.push(error);
    });

    if (this.lexerErrorListener) {
      this.lexerErrorListener.getErrors().forEach((error) => {
        errors.push(error);
      });
    }

    return errors;
  }
}
