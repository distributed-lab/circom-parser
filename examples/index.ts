import { Templates } from "./types";
import { CircomTemplateVisitor } from "./CircomTemplateVisitor";
import { getCircomParser } from "../src";
import { CircomIncludeVisitor } from "./CircomIncludeVisitor";

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
