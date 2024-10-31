import {
  CircomParser,
  ExpressionContext,
  PAnonymousCallContext,
  PArrayContext,
  PCallContext,
  PIdentifierStatementContext,
  PNumberContext,
  PParenthesesContext,
  PUnderscoreContext,
} from "../generated";

import { CircomValueType, ParserErrorItem, VariableContext } from "../types";

import { ExtendedCircomVisitor } from "../ExtendedCircomVisitor";

export class ExpressionHelper {
  private _expressionContext: ExpressionContext | null = null;
  private _variableContext: VariableContext = {};

  constructor(public templateIdentifier: string) {}

  public setExpressionContext(
    expressionContext: ExpressionContext,
  ): ExpressionHelper {
    this._expressionContext = expressionContext;

    return this;
  }

  public setVariableContext(
    variableContext: VariableContext,
  ): ExpressionHelper {
    this._variableContext = variableContext;

    return this;
  }

  public addVariablesToTheContext(
    variables: VariableContext,
  ): ExpressionHelper {
    for (const key in variables) {
      this._variableContext[key] = variables[key];
    }

    return this;
  }

  /**
   * This function can throw an error if the expression context is not set.
   * All other errors related to the parsing of the expression can be retrieved by the function `getErrors()`
   * inside the `ExtendedCircomVisitor` class.
   */
  public parseExpression(): [CircomValueType | null, ParserErrorItem[]] {
    if (!this._expressionContext) {
      throw new Error("Expression context is not set");
    }

    const visitor = new ExpressionVisitor(
      this.templateIdentifier,
      this._variableContext,
    );

    const result = visitor.visitExpression(this._expressionContext);

    if (result === null) {
      return [null, visitor.getErrors()];
    }

    return [result, visitor.getErrors()];
  }
}

class ExpressionVisitor extends ExtendedCircomVisitor<CircomValueType | null> {
  constructor(
    templateIdentifier: string,
    public variableContext: VariableContext,
  ) {
    super(templateIdentifier);
  }

  visitExpression = (ctx: ExpressionContext): CircomValueType | null => {
    if (ctx.PARALLEL()) {
      return this.visit(ctx.expression(0));
    }

    if (ctx.primaryExpression()) {
      return this.visit(ctx.primaryExpression());
    }

    if (ctx.TERNARY_CONDITION() && ctx.TERNARY_ALTERNATIVE()) {
      const conditionResult = this.visit(ctx._cond);

      if (conditionResult === null) {
        this.addError(
          "Failed to resolve the condition of a ternary expression",
          ctx._cond,
        );
        return null;
      }

      if (Array.isArray(conditionResult)) {
        this.addError(
          "Ternary expression condition cannot be an array",
          ctx._cond,
        );
        return null;
      }

      if (conditionResult === 1n) {
        return this.visit(ctx._ifTrue);
      } else {
        return this.visit(ctx._ifFalse);
      }
    }

    return this._parseOperation(ctx);
  };

  visitPIdentifierStatement = (
    ctx: PIdentifierStatementContext,
  ): CircomValueType | null => {
    if (ctx.identifierStatement().idetifierAccess_list().length == 0) {
      const variableName =
        this.variableContext[ctx.identifierStatement().ID().getText()];

      if (variableName === undefined) {
        this.addError(
          `Variable ${ctx.identifierStatement().ID().getText()} is not defined`,
          ctx.identifierStatement(),
        );

        return null;
      }

      return variableName;
    }

    this.addError(
      "IdentifierStatement is not supported with access references not supported",
      ctx,
    );
    return null;
  };

  visitPUnderscore = (_ctx: PUnderscoreContext): CircomValueType | null => {
    return null;
  };

  visitPNumber = (ctx: PNumberContext): CircomValueType | null => {
    return BigInt(ctx.NUMBER().getText());
  };

  visitPParentheses = (ctx: PParenthesesContext): CircomValueType | null => {
    this.addError("Parentheses are not supported", ctx);
    return null;
  };

  visitPArray = (ctx: PArrayContext): CircomValueType | null => {
    let arrayItems: CircomValueType | null = [];

    for (let i = 0; i < ctx.expressionList().expression_list().length; i++) {
      const resolvedItem = this.visit(ctx.expressionList().expression(i));

      if (!resolvedItem) {
        this.addError(
          `Failed to resolve the ${i} element of an array.`,
          ctx.expressionList().expression(i),
        );

        arrayItems = null;

        continue;
      }

      if (arrayItems) {
        arrayItems.push(resolvedItem);
      }
    }

    return arrayItems;
  };

  visitPCall = (ctx: PCallContext): CircomValueType | null => {
    this.addError("Calls are not supported", ctx);
    return null;
  };

  visitPAnonymousCall = (
    ctx: PAnonymousCallContext,
  ): CircomValueType | null => {
    this.addError("Anonymous calls are not supported", ctx);
    return null;
  };

  private _parseOperation(ctx: ExpressionContext): CircomValueType | null {
    const operationType = ctx._op.type;

    const firstExpression = this.visit(ctx.expression(0));

    if (firstExpression === null) {
      this.addError(
        "Failed to resolve the first expression of an operation",
        ctx.expression(0),
      );
      return null;
    }

    if (Array.isArray(firstExpression)) {
      this.addError(
        "Performing operations on arrays is not allowed",
        ctx.expression(0),
      );
      return null;
    }

    switch (operationType) {
      case CircomParser.NOT:
        if (firstExpression !== 0n && firstExpression !== 1n) {
          this.addError(
            "NOT operation can be performed only on boolean values",
            ctx.expression(0),
          );
          return null;
        }
        return firstExpression ? 0n : 1n;
      case CircomParser.BNOT:
        return ~firstExpression;
      case CircomParser.SUB:
        return -firstExpression;
    }

    const secondExpression = this.visit(ctx.expression(1));

    if (secondExpression === null) {
      this.addError(
        "Failed to resolve the second expression of an operation",
        ctx.expression(1),
      );
      return null;
    }

    if (Array.isArray(secondExpression)) {
      this.addError(
        "Performing operations on arrays is not allowed",
        ctx.expression(1),
      );
      return null;
    }

    switch (operationType) {
      case CircomParser.POW:
        return firstExpression ** secondExpression;
      case CircomParser.MUL:
        return firstExpression * secondExpression;
      case CircomParser.DIV:
        return firstExpression / secondExpression;
      case CircomParser.QUO:
        this.addError("QUO operation is not supported", ctx);
        return null;
      case CircomParser.MOD:
        return firstExpression % secondExpression;
      case CircomParser.ADD:
        return firstExpression + secondExpression;
      case CircomParser.SUB:
        return firstExpression - secondExpression;
      case CircomParser.SHL:
        return firstExpression << secondExpression;
      case CircomParser.SHR:
        return firstExpression >> secondExpression;
      case CircomParser.BAND:
        return firstExpression & secondExpression;
      case CircomParser.BXOR:
        return firstExpression ^ secondExpression;
      case CircomParser.BOR:
        return firstExpression | secondExpression;
      case CircomParser.EQ:
        return firstExpression === secondExpression ? 1n : 0n;
      case CircomParser.NEQ:
        return firstExpression !== secondExpression ? 1n : 0n;
      case CircomParser.LT:
        return firstExpression < secondExpression ? 1n : 0n;
      case CircomParser.GT:
        return firstExpression > secondExpression ? 1n : 0n;
      case CircomParser.LE:
        return firstExpression <= secondExpression ? 1n : 0n;
      case CircomParser.GE:
        return firstExpression >= secondExpression ? 1n : 0n;
      case CircomParser.AND:
        return firstExpression && secondExpression ? 1n : 0n;
      case CircomParser.OR:
        return firstExpression || secondExpression ? 1n : 0n;
    }

    this.addError("Reached unknown operation", ctx);
    return null;
  }
}