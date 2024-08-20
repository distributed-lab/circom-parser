import { CircomPragmaVisitor } from "./CircomPragmaVisitor";
import { CircomIncludeVisitor } from "./CircomIncludeVisitor";
import { CircomTemplateVisitor } from "./CircomTemplateVisitor";
import { CircomMainComponentVisitor } from "./CircomMainComponentVisitor";

import {
  getCircomParser,
  MainComponent,
  Templates,
  ParserError,
  PragmaComponent,
} from "..";

export function findTemplates(source: string): Templates {
  const parser = getCircomParser(source);

  const templateVisitor = new CircomTemplateVisitor();

  const context = parser.circuit();

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  templateVisitor.visit(context);

  return templateVisitor.templates;
}

export function findIncludes(source: string): string[] {
  const parser = getCircomParser(source);

  const includeDeclarationVisitor = new CircomIncludeVisitor();

  const context = parser.circuit();

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  includeDeclarationVisitor.visit(context);

  return includeDeclarationVisitor.packageNames;
}

export function findMainComponent(source: string): MainComponent {
  const parser = getCircomParser(source);

  const mainComponentVisitor = new CircomMainComponentVisitor();

  const context = parser.circuit();

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  mainComponentVisitor.visit(context);

  return mainComponentVisitor.mainComponentInfo;
}

export function findPragma(source: string): PragmaComponent {
  const parser = getCircomParser(source);

  const pragmaVisitor = new CircomPragmaVisitor();

  const context = parser.circuit();

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  pragmaVisitor.visit(context);

  return {
    isCustom: pragmaVisitor.isCustom,
    compilerVersion: pragmaVisitor.compilerVersion,
  };
}

export * from "./utils";

export {
  CircomPragmaVisitor,
  CircomIncludeVisitor,
  CircomTemplateVisitor,
  CircomMainComponentVisitor,
};

export { CircomExpressionVisitor } from "./CircomExpressionVisitor";
export { CircomFunctionEvaluatorVisitor } from "./CircomFunctionEvaluatorVisitor";
