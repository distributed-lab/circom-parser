import { parseIdentifier } from "./utils";

import {
  CircomVisitor,
  SignalDeclarationContext,
  TemplateDeclarationContext,
} from "../generated";
import { Templates } from "../types";

import { ParserError } from "../errors/ParserError";

export class CircomTemplateVisitor extends CircomVisitor<void> {
  templates: Templates;
  currentTemplate: string | null;

  constructor() {
    super();
    this.templates = {};
    this.currentTemplate = null;
  }

  visitTemplateDeclaration = (ctx: TemplateDeclarationContext) => {
    if (ctx.ID().getText() in this.templates) {
      throw new ParserError({
        message: `Template name ${ctx.ID().getText()} is already in use`,
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    this.currentTemplate = ctx.ID().getText();

    const parameters: string[] = [];
    ctx
      .args()
      .ID_list()
      .forEach((arg) => {
        parameters.push(arg.getText());
      });

    this.templates[this.currentTemplate] = {
      inputs: [],
      parameters: parameters,
      isCustom: !!ctx.CUSTOM(),
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
