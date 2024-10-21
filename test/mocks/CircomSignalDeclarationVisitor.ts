import {
  Variables,
  CircomVisitor,
  SignalDefinitionContext,
  resolveDimensions,
  VarDeclarationContext,
  VarDefinitionContext,
  RhsValueContext,
  CircomExpressionVisitor,
  TemplateStmtContext,
} from "../../src";

export class CircomSignalDeclarationVisitor extends CircomVisitor<void> {
  signalDeclarations: {
    name: string;
    dimensions: number[];
  }[];

  vars: Variables = {};
  templateName: string;

  constructor(templateName: string, vars: Variables) {
    super();
    this.signalDeclarations = [];
    this.templateName = templateName;

    for (const key of Object.keys(vars)) {
      this.vars[key] = {
        value: vars[key].value,
      };
    }
  }

  visitSignalDefinition = (ctx: SignalDefinitionContext) => {
    // FIXME: Handle nested components
    const signalName = ctx.identifier().ID(0).getText();
    const dimensions = resolveDimensions(
      ctx.identifier().arrayDimension_list(),
      this.vars,
      this.templateName,
    );

    this.signalDeclarations.push({
      name: signalName,
      dimensions: dimensions,
    });
  };

  visitTemplateStmt = (ctx: TemplateStmtContext) => {
    if (ctx.identifier() && ctx.ASSIGNMENT() && ctx.expression(0)) {
      const id = ctx.identifier().ID(0).getText();
      const value = new CircomExpressionVisitor(
        true,
        this.templateName,
        this.vars,
      ).visitExpression(ctx.expression(0));

      if (Array.isArray(value)) {
        throw new Error(
          `Currently, only single value assignment is supported - ${value}`,
        );
      }

      this.vars[id] = {
        value: value,
      };

      return;
    }

    if (!ctx.IF()) {
      this.visitChildren(ctx);

      return;
    }

    const result = new CircomExpressionVisitor(
      true,
      this.templateName,
      this.vars,
    ).visitExpression(ctx.parExpression().expression());

    if (Array.isArray(result)) {
      throw new Error(
        `Currently, only single value assignment is supported as a result inside if statement - ${result}`,
      );
    }

    if (result === 1n) {
      this.visitTemplateStmt(ctx.templateStmt(0));

      return;
    }

    if (result === 0n && !ctx.ELSE()) {
      return;
    }

    if (result === 0n && ctx.ELSE()) {
      this.visitTemplateStmt(ctx.templateStmt(1));

      return;
    }
  };

  visitVarDeclaration = (ctx: VarDeclarationContext) => {
    const vars = this._parseVarDefinition(ctx.varDefinition());

    if (!ctx.ASSIGNMENT()) return;

    const results = this._parseRHSValue(ctx.rhsValue());

    if (vars.length !== results.length) {
      throw new Error(
        `Mismatch between variable definitions and values - ${ctx.getText()}`,
      );
    }

    vars.forEach((varName, index) => {
      this.vars[varName] = {
        value: results[index],
      };
    });
  };

  _parseVarDefinition = (ctx: VarDefinitionContext): string[] => {
    return ctx
      .identifier_list()
      .map((identifier) => identifier.ID(0).getText());
  };

  _parseRHSValue = (ctx: RhsValueContext): bigint[] => {
    const expressionVisitor = new CircomExpressionVisitor(
      true,
      this.templateName,
      this.vars,
    );

    if (ctx.expression()) {
      const expressionResult = expressionVisitor.visitExpression(
        ctx.expression(),
      );

      if (Array.isArray(expressionResult)) {
        throw new Error(
          `Currently, only single value assignment is supported - ${expressionResult}`,
        );
      }

      return [expressionResult];
    }

    if (ctx.expressionList()) {
      const expressionsResult: bigint[] = [];

      ctx
        .expressionList()
        .expression_list()
        .forEach((expression) => {
          const expressionResult =
            expressionVisitor.visitExpression(expression);

          if (Array.isArray(expressionResult)) {
            throw new Error(
              `Currently, only single value assignment is supported - ${expressionResult}`,
            );
          }

          expressionsResult.push(expressionResult);
        });

      return expressionsResult;
    }

    throw new Error(
      `RHS value as function call is not supported - ${ctx.getText()}`,
    );
  };
}
