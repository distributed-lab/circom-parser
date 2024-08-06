import {
  SignalDeclarationContext,
  TemplateDeclarationContext,
} from "../parser/CircomParser";
import CircomVisitor from "../parser/CircomVisitor";
import { Templates } from "./types";
import { parseDimensionedIdentifier } from "./utils";

export class CircomTemplateVisitor extends CircomVisitor<void> {
  templates: Templates;
  currentTemplate: string | null;

  constructor() {
    super();
    this.templates = {};
    this.currentTemplate = null;
  }

  visitTemplateDeclaration = (ctx: TemplateDeclarationContext) => {
    this.currentTemplate = ctx.ID().getText();

    const parameters: string[] = [];
    ctx.args_list().forEach((argCtx) => {
      argCtx.ID_list().forEach((arg) => {
        parameters.push(arg.getText());
      });
    });

    this.templates[this.currentTemplate] = {
      inputs: [],
      parameters: parameters,
    };

    ctx.statement_list().forEach((stmt) => {
      this.visitChildren(stmt);
    });

    this.currentTemplate = null;
  };

  visitSignalDeclaration = (ctx: SignalDeclarationContext) => {
    if (this.currentTemplate) {
      const signalDefinition = ctx.signalDefinition();

      const dimensionedIdentifier = signalDefinition.dimensionedIdentifier();
      this.templates[this.currentTemplate].inputs.push({
        ...parseDimensionedIdentifier(dimensionedIdentifier),
        type: signalDefinition.SIGNAL_TYPE().getText(),
      });

      ctx.dimensionedIdentifier_list().forEach((dimensionedIdentifier) => {
        this.templates[this.currentTemplate!].inputs.push({
          ...parseDimensionedIdentifier(dimensionedIdentifier),
          type: signalDefinition.SIGNAL_TYPE().getText(),
        });
      });
    }
  };
}
