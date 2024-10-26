import {
  CircomVisitor,
  IncludeDefinitionContext,
  PragmaCustomTemplatesContext,
  PragmaInvalidVersionContext,
  PragmaVersionContext,
  TemplateDefinitionContext,
  ExtendedCircomVisitor,
  SignalDeclarationContext,
} from "../../src";

import { CircomFileData } from "./types";
import { parseSimpleIdentifierList } from "../../src/helpers";

export class CircomFilesVisitor extends ExtendedCircomVisitor<void> {
  fileData: CircomFileData;

  currentTemplateIdentifier: string | null = null;

  constructor(templateNameOrPath: string) {
    super(templateNameOrPath);

    this.fileData = {
      pragmaInfo: { isCustom: false, compilerVersion: "" },
      includes: [],
      mainComponentInfo: {
        templateName: null,
        publicInputs: [],
        parameters: [],
      },
      templates: {},
    };
  }

  visitPragmaVersion = (ctx: PragmaVersionContext) => {
    this.fileData.pragmaInfo.compilerVersion = ctx.VERSION().getText();
  };

  visitPragmaInvalidVersion = (ctx: PragmaInvalidVersionContext) => {
    this.addError("Version is missing in the circuit file!", ctx);
  };

  visitPragmaCustomTemplates = (ctx: PragmaCustomTemplatesContext) => {
    this.fileData.pragmaInfo.isCustom = true;
  };

  visitIncludeDefinition = (ctx: IncludeDefinitionContext) => {
    this.fileData.includes.push(ctx.STRING().getText().slice(1, -1));
  };

  visitTemplateDefinition = (ctx: TemplateDefinitionContext) => {
    if (ctx.ID().getText() in this.fileData.templates) {
      this.addError(
        `Template name ${ctx.ID().getText()} is already in use`,
        ctx,
      );

      return;
    }

    this.currentTemplateIdentifier = ctx.ID().getText();

    this.fileData.templates[this.currentTemplateIdentifier] = {
      inputs: {},
      parameters: parseSimpleIdentifierList(ctx._argNames),
      isCustom: !!ctx.CUSTOM(),
      parallel: !!ctx.PARALLEL(),
    };

    this.visit(ctx.body());

    this.currentTemplateIdentifier = null;
  };

  visitSignalDeclaration = (ctx: SignalDeclarationContext) => {
    if (this.currentTemplateIdentifier) {
      const signalDefinition = ctx.signalDefinition();

      let signalType = "intermediate";

      if (signalDefinition.SIGNAL_TYPE()) {
        signalType = signalDefinition.SIGNAL_TYPE().getText();
      }

      [signalDefinition.identifier(), ...ctx.identifier_list()].forEach(
        (identifier) => this._saveInputData(identifier, signalType),
      );
    }
  };

  visitComponentMainDeclaration = (ctx: ComponentMainDeclarationContext) => {
    this.fileData.mainComponentInfo.templateName = ctx.ID().getText();

    if (
      ctx.publicInputsList() &&
      ctx.publicInputsList().args() &&
      ctx.publicInputsList().args().ID_list()
    ) {
      ctx
        .publicInputsList()
        .args()
        .ID_list()
        .forEach((input) => {
          this.fileData.mainComponentInfo.publicInputs.push(input.getText());
        });
    }

    if (ctx.expressionList() && ctx.expressionList().expression_list()) {
      const expressionVisitor = new CircomExpressionVisitor(false);

      ctx
        .expressionList()
        .expression_list()
        .forEach((expression) => {
          this.fileData.mainComponentInfo.parameters.push(
            expressionVisitor.visitExpression(expression),
          );
        });
    }
  };

  private _saveInputData(identifier: IdentifierContext, signalType: string) {
    const parsedData = parseIdentifier(identifier);

    this.fileData.templates[this.currentTemplateIdentifier!].inputs[
      parsedData.name
    ] = {
      dimension: parsedData.dimension,
      type: signalType,
    };
  }
}
