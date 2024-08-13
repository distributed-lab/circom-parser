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
  const { parser, errorListener } = getCircomParser(source);

  const templateVisitor = new CircomTemplateVisitor();

  templateVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError(errorListener.getErrors());
  }

  return templateVisitor.templates;
}

export function findIncludes(source: string): string[] {
  const { parser, errorListener } = getCircomParser(source);

  const includeDeclarationVisitor = new CircomIncludeVisitor();

  includeDeclarationVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError(errorListener.getErrors());
  }

  return includeDeclarationVisitor.packageNames;
}

export function findMainComponent(source: string): MainComponent {
  const { parser, errorListener } = getCircomParser(source);

  const mainComponentVisitor = new CircomMainComponentVisitor();

  mainComponentVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError(errorListener.getErrors());
  }

  return mainComponentVisitor.mainComponentInfo;
}

export function findPragma(source: string): PragmaComponent {
  const { parser, errorListener } = getCircomParser(source);

  const pragmaVisitor = new CircomPragmaVisitor();

  pragmaVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError(errorListener.getErrors());
  }

  return {
    isCustom: pragmaVisitor.isCustom,
    compilerVersion: pragmaVisitor.compilerVersion,
  };
}
