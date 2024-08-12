import {
  SignalDeclarationContext,
  TemplateDeclarationContext,
} from "../generated/CircomParser";
import CircomVisitor from "../generated/CircomVisitor";

import { parseIdentifier } from "./utils";
import { Templates } from "../types/builtin";

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

    ctx
      .templateBlock()
      .templateStmt_list()
      .forEach((stmt) => {
        this.visitChildren(stmt);
      });

    this.currentTemplate = null;
  };

  visitSignalDeclaration = (ctx: SignalDeclarationContext) => {
    if (this.currentTemplate) {
      const signalDefinition = ctx.signalDefinition();

      const identifier = signalDefinition.identifier();
      const signalType = signalDefinition.SIGNAL_TYPE().getText();

      this.templates[this.currentTemplate].inputs.push({
        ...parseIdentifier(identifier),
        type: signalType,
      });

      ctx.identifier_list().forEach((identifier) => {
        this.templates[this.currentTemplate!].inputs.push({
          ...parseIdentifier(identifier),
          type: signalType,
        });
      });
    }
  };
}
