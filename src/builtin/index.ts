import { MainComponent, Templates } from "./types";
import { CircomTemplateVisitor } from "./CircomTemplateVisitor";
import { getCircomParser } from "../index";
import { CircomIncludeVisitor } from "./CircomIncludeVisitor";
import { CircomMainComponentVisitor } from "./CircomMainComponentVisitor";

export function findTemplates(source: string): Templates {
  const parser = getCircomParser(source);

  const templateVisitor = new CircomTemplateVisitor();

  templateVisitor.visit(parser.circuit());

  return templateVisitor.templates;
}

export function findIncludes(source: string): string[] {
  const parser = getCircomParser(source);

  const includeDeclarationVisitor = new CircomIncludeVisitor();

  includeDeclarationVisitor.visit(parser.circuit());

  return includeDeclarationVisitor.packageNames;
}

export function findMainComponent(source: string): MainComponent {
  const parser = getCircomParser(source);

  const mainComponentVisitor = new CircomMainComponentVisitor();

  mainComponentVisitor.visit(parser.circuit());

  return mainComponentVisitor.mainComponentInfo;
}
