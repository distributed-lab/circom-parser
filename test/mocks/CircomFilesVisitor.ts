import {
  BodyContext,
  CircomVisitor,
  ComponentMainDeclarationContext,
  ExpressionListContext,
  IncludeDefinitionContext,
  parseSimpleIdentifierList,
  PragmaCustomTemplatesContext,
  PragmaInvalidVersionContext,
  PragmaVersionContext,
  PublicInputsDefinitionContext,
  TemplateDefinitionContext,
  ExpressionHelper,
} from "../../src";

import { CircomFileData, CircuitResolutionError, ErrorType } from "./types";

export class CircomFilesVisitor extends CircomVisitor<void> {
  fileData: CircomFileData;
  errors: CircuitResolutionError[] = [];

  constructor(public fileIdentifier: string) {
    super();

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
    this.errors.push({
      type: ErrorType.InvalidPragmaVersion,
      context: ctx,
      fileIdentifier: this.fileIdentifier,
    });
  };

  visitPragmaCustomTemplates = (_ctx: PragmaCustomTemplatesContext) => {
    this.fileData.pragmaInfo.isCustom = true;
  };

  visitIncludeDefinition = (ctx: IncludeDefinitionContext) => {
    this.fileData.includes.push(ctx.STRING().getText().slice(1, -1));
  };

  visitTemplateDefinition = (ctx: TemplateDefinitionContext) => {
    if (ctx.ID().getText() in this.fileData.templates) {
      this.errors.push({
        type: ErrorType.TemplateAlreadyUsed,
        context: ctx,
        fileIdentifier: this.fileIdentifier,
        templateIdentifier: ctx.ID().getText(),
        message: `Template name ${ctx.ID().getText()} (${ctx.start.line}:${ctx.start.column}) is already in use`,
      });

      return;
    }

    this.fileData.templates[ctx.ID().getText()] = {
      parameters: parseSimpleIdentifierList(ctx._argNames),
      isCustom: !!ctx.CUSTOM(),
      parallel: !!ctx.PARALLEL(),
    };

    return;
  };

  visitBody = (_ctx: BodyContext) => {
    return;
  };

  visitComponentMainDeclaration = (ctx: ComponentMainDeclarationContext) => {
    this.fileData.mainComponentInfo.templateName = ctx.ID().getText();

    this.visit(ctx.publicInputsDefinition());
    this.visit(ctx._argValues);
  };

  visitPublicInputsDefinition = (ctx: PublicInputsDefinitionContext) => {
    if (!ctx) return;

    for (const input of ctx._publicInputs.ID_list()) {
      this.fileData.mainComponentInfo.publicInputs.push(input.getText());
    }
  };

  visitExpressionList = (ctx: ExpressionListContext) => {
    if (!ctx) return;

    const expressionHelper = new ExpressionHelper(this.fileIdentifier);

    for (let i = 0; i < ctx.expression_list().length; i++) {
      const [value, errors] = expressionHelper
        .setExpressionContext(ctx.expression(i))
        .parseExpression();

      if (value === null) {
        this.errors.push({
          type: ErrorType.FailedToResolveMainComponentParameter,
          context: ctx.expression(i),
          fileIdentifier: this.fileIdentifier,
          linkedParserErrors: errors,
          message: `Failed to parse array parameter with index ${i}.\r
          \rParameter: ${ctx.expression(i).getText()} (${ctx.expression(i).start.line}:${ctx.expression(i).start.column})`,
        });

        continue;
      }

      if (errors.length > 0) {
        this.errors.push({
          type: ErrorType.InternalParsingError,
          context: ctx.expression(i),
          fileIdentifier: this.fileIdentifier,
          linkedParserErrors: errors,
        });
      }

      this.fileData.mainComponentInfo.parameters.push(value);
    }
  };
}
