import { Token } from "antlr4";
import * as antlr4 from "antlr4";

import { ParserErrorItem } from "./types";
import { CircomLexer, CircomParser } from "./generated";

import ErrorListener from "./errors/ErrorListener";

export class ExtendedCircomParser extends CircomParser {
  lexer: CircomLexer;

  parserErrorListener: ErrorListener<Token>;
  lexerErrorListener: ErrorListener<number>;

  fileIdentifier: string;

  constructor(
    fileIdentifier: string,
    tokens: antlr4.CommonTokenStream,
    lexer: CircomLexer,
  ) {
    super(tokens);

    this.lexer = lexer;
    this.lexerErrorListener = new ErrorListener(fileIdentifier);
    this.parserErrorListener = new ErrorListener(fileIdentifier);

    this.initErrorListeners();

    this.buildParseTrees = true;

    this.fileIdentifier = fileIdentifier;
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
    this.parserErrorListener = new ErrorListener(this.fileIdentifier);
    this.removeErrorListeners();
    this.addErrorListener(this.parserErrorListener);

    this.lexerErrorListener = new ErrorListener(this.fileIdentifier);
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
