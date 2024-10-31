import { Token } from "antlr4";
import * as antlr4 from "antlr4";

import { ParserErrorItem } from "./types";
import { CircomLexer, CircomParser } from "./generated";

import ErrorListener from "./errors/ErrorListener";

export class ExtendedCircomParser extends CircomParser {
  lexer: CircomLexer;

  parserErrorListener: ErrorListener<Token>;
  lexerErrorListener: ErrorListener<number>;

  constructor(tokens: antlr4.CommonTokenStream, lexer: CircomLexer) {
    super(tokens);

    this.lexer = lexer;
    this.lexerErrorListener = new ErrorListener();
    this.parserErrorListener = new ErrorListener();

    this.initErrorListeners();

    this.buildParseTrees = true;
  }

  circuit() {
    this._interp.predictionMode = antlr4.PredictionMode.SLL;

    const context = super.circuit();

    if (!this.hasAnyErrors()) {
      return context;
    }

    this._interp.predictionMode = antlr4.PredictionMode.LL;
    this.reset();

    this.initErrorListeners();

    return super.circuit();
  }

  initErrorListeners() {
    this.parserErrorListener = new ErrorListener();
    this.removeErrorListeners();
    this.addErrorListener(this.parserErrorListener);

    this.lexerErrorListener = new ErrorListener();
    this.lexer.removeErrorListeners();
    this.lexer.addErrorListener(this.lexerErrorListener);
  }

  hasAnyErrors(): boolean {
    return (
      this.parserErrorListener.hasErrors() ||
      this.lexerErrorListener.hasErrors()
    );
  }

  getAllErrors(): ParserErrorItem[] {
    const errors: ParserErrorItem[] = [];

    this.parserErrorListener.getErrors().forEach((error) => {
      errors.push(error);
    });

    this.lexerErrorListener.getErrors().forEach((error) => {
      errors.push(error);
    });

    return errors;
  }
}
