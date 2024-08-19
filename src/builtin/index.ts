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

  templateVisitor.visit(parser.circuit());

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  return templateVisitor.templates;
}

export function findIncludes(source: string): string[] {
  const parser = getCircomParser(source);

  const includeDeclarationVisitor = new CircomIncludeVisitor();

  includeDeclarationVisitor.visit(parser.circuit());

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  return includeDeclarationVisitor.packageNames;
}

export function findMainComponent(source: string): MainComponent {
  const parser = getCircomParser(source);

  const mainComponentVisitor = new CircomMainComponentVisitor();

  mainComponentVisitor.visit(parser.circuit());

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  return mainComponentVisitor.mainComponentInfo;
}

export function findPragma(source: string): PragmaComponent {
  const parser = getCircomParser(source);

  const pragmaVisitor = new CircomPragmaVisitor();

  pragmaVisitor.visit(parser.circuit());

  if (parser.hasAnyErrors()) {
    throw new ParserError(parser.getAllErrors());
  }

  return {
    isCustom: pragmaVisitor.isCustom,
    compilerVersion: pragmaVisitor.compilerVersion,
  };
}

export {
  CircomPragmaVisitor,
  CircomIncludeVisitor,
  CircomTemplateVisitor,
  CircomMainComponentVisitor,
};

export { CircomExpressionVisitor } from "./CircomExpressionVisitor";
export { CircomFunctionEvaluatorVisitor } from "./CircomFunctionEvaluatorVisitor";
