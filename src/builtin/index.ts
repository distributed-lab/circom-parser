import { MainComponent, Templates } from "./types";
import { CircomTemplateVisitor } from "./CircomTemplateVisitor";
import { getCircomParser } from "../index";
import { CircomIncludeVisitor } from "./CircomIncludeVisitor";
import { CircomMainComponentVisitor } from "./CircomMainComponentVisitor";
import { ParserError } from "../errors/ParserError";

export function findTemplates(source: string): Templates {
  const { parser, listener } = getCircomParser(source);

  const templateVisitor = new CircomTemplateVisitor();

  templateVisitor.visit(parser.circuit());

  if (listener.hasErrors()) {
    throw new ParserError({ errors: listener.getErrors() });
  }

  return templateVisitor.templates;
}

export function findIncludes(source: string): string[] {
  const { parser, listener } = getCircomParser(source);

  const includeDeclarationVisitor = new CircomIncludeVisitor();

  includeDeclarationVisitor.visit(parser.circuit());

  if (listener.hasErrors()) {
    throw new ParserError({ errors: listener.getErrors() });
  }

  return includeDeclarationVisitor.packageNames;
}

export function findMainComponent(source: string): MainComponent {
  const { parser, listener } = getCircomParser(source);

  const mainComponentVisitor = new CircomMainComponentVisitor();

  mainComponentVisitor.visit(parser.circuit());

  if (listener.hasErrors()) {
    throw new ParserError({ errors: listener.getErrors() });
  }

  return mainComponentVisitor.mainComponentInfo;
}

findMainComponent(
  "/Users/mariiazhvanko/DistributedLab/circom-parser/data/Example.circom",
);
