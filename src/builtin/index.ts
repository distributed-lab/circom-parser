import { CircomTemplateVisitor } from "./CircomTemplateVisitor";
import { getCircomParser } from "../index";
import { CircomIncludeVisitor } from "./CircomIncludeVisitor";
import { ParserError } from "../errors/ParserError";
import { MainComponent, Templates } from "../types/builtin";
import { CircomMainComponentVisitor } from "./CircomMainComponentVisitor";

export function findTemplates(source: string): Templates {
  const { parser, errorListener } = getCircomParser(source);

  const templateVisitor = new CircomTemplateVisitor();

  templateVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError({ errors: errorListener.getErrors() });
  }

  return templateVisitor.templates;
}

export function findIncludes(source: string): string[] {
  const { parser, errorListener } = getCircomParser(source);

  const includeDeclarationVisitor = new CircomIncludeVisitor();

  includeDeclarationVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError({ errors: errorListener.getErrors() });
  }

  return includeDeclarationVisitor.packageNames;
}

export function findMainComponent(source: string): MainComponent {
  const { parser, errorListener } = getCircomParser(source);

  const mainComponentVisitor = new CircomMainComponentVisitor();

  mainComponentVisitor.visit(parser.circuit());

  if (errorListener.hasErrors()) {
    throw new ParserError({ errors: errorListener.getErrors() });
  }

  return mainComponentVisitor.mainComponentInfo;
}
