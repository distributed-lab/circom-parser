import { resolveDimensions, validateBigInt } from "./utils";

import {
  CircomVisitor,
  CircomParser,
  BinaryExpressionContext,
  DotExpressionContext,
  ExpressionContext,
  PrimaryExpressionContext,
  TernaryExpressionContext,
  UnaryExpressionContext,
} from "../generated";
import { BigIntOrNestedArray, Variables } from "../types";

import { ParserError } from "../errors/ParserError";

// TODO make operations modulo Q
export class CircomExpressionVisitor extends CircomVisitor<BigIntOrNestedArray> {
  allowId: boolean;
  variablesContext: Variables;

  constructor(allowId: boolean, variablesContext: Variables = {}) {
    super();

    this.allowId = allowId;
    this.variablesContext = variablesContext;
  }

  visitExpression = (ctx: ExpressionContext): BigIntOrNestedArray => {
    const expressionValue = this.visit(ctx);

    if (!validateBigInt(expressionValue)) {
      throw new ParserError({
        message: "Expression value must be of type bigint or bigint array",
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    return expressionValue;
  };

  visitPrimaryExpression = (
    ctx: PrimaryExpressionContext,
  ): BigIntOrNestedArray => {
    const primary = ctx.primary();

    if ((primary.identifier() && !this.allowId) || primary.args()) {
      throw new ParserError({
        message:
          "Identifier usage is not allowed within the main component's parameters",
        line: primary.start.line,
        column: primary.start.column,
      });
    } else if (primary.identifier() && this.allowId) {
      // FIXME: Handle nested components
      const id = primary.identifier().ID(0).getText();

      if (!(id in this.variablesContext)) {
        throw new ParserError({
          message: `Unresolvable identifier ${id}`,
          line: primary.start.line,
          column: primary.start.column,
        });
      }

      const dimensions = resolveDimensions(
        primary.identifier().arrayDimension_list(),
        this.variablesContext,
      );

      let identifierValue = this.variablesContext[id].value;

      for (let i = 0; i < dimensions.length; i++) {
        if (Array.isArray(identifierValue)) {
          identifierValue = identifierValue[Number(dimensions[i])];
        }
      }

      if (!validateBigInt(identifierValue)) {
        throw new ParserError({
          message: "Unexpected type for identifier value",
          line: primary.start.line,
          column: primary.start.column,
        });
      }

      return identifierValue;
    } else if (primary.NUMBER()) {
      return BigInt(primary.NUMBER().getText());
    } else if (primary.numSequence()) {
      const numSequence: bigint[] = [];

      primary
        .numSequence()
        .NUMBER_list()
        .forEach((number) => {
          numSequence.push(BigInt(number.getText()));
        });

      return numSequence;
    } else if (primary.expression()) {
      return this.visitExpression(primary.expression());
    } else if (primary.expressionList()) {
      const expressionsResult: BigIntOrNestedArray = [];

      primary
        .expressionList()
        .expression_list()
        .forEach((expression) => {
          expressionsResult.push(this.visitExpression(expression));
        });

      return expressionsResult;
    } else {
      throw new ParserError({
        message: "Unsupported expression",
        line: primary.start.line,
        column: primary.start.column,
      });
    }
  };

  visitBinaryExpression = (ctx: BinaryExpressionContext): bigint => {
    const left = this.visitExpression(ctx.expression(0));
    const right = this.visitExpression(ctx.expression(1));

    if (typeof left !== "bigint" || typeof right !== "bigint") {
      throw new ParserError({
        message: "Expected bigint operands in binary expression",
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    switch (ctx._op.type) {
      case CircomParser.MUL:
        return left * right;
      case CircomParser.DIV:
        if (right === BigInt(0)) {
          throw new ParserError({
            message: "Division by zero is not allowed",
            line: ctx.start.line,
            column: ctx.start.column,
          });
        }
        return left / right;
      case CircomParser.ADD:
        return left + right;
      case CircomParser.SUB:
        return left - right;
      case CircomParser.MOD:
        return left % right;
      case CircomParser.POW:
        return left ** right;
      case CircomParser.SHL:
        return left << right;
      case CircomParser.SHR:
        return left >> right;
      case CircomParser.BAND:
        return left & right;
      case CircomParser.BXOR:
        return left ^ right;
      case CircomParser.BOR:
        return left | right;
      case CircomParser.EQ:
        return left === right ? 1n : 0n;
      case CircomParser.NEQ:
        return left !== right ? 1n : 0n;
      case CircomParser.LT:
        return left < right ? 1n : 0n;
      case CircomParser.GT:
        return left > right ? 1n : 0n;
      case CircomParser.LE:
        return left <= right ? 1n : 0n;
      case CircomParser.GE:
        return left >= right ? 1n : 0n;
      case CircomParser.AND:
        return left !== 0n && right !== 0n ? 1n : 0n;
      case CircomParser.OR:
        return left !== 0n || right !== 0n ? 1n : 0n;
      default:
        throw new ParserError({
          message: "Unsupported binary operator",
          line: ctx.start.line,
          column: ctx.start.column,
        });
    }
  };

  visitUnaryExpression = (ctx: UnaryExpressionContext): bigint => {
    const expressionValue = this.visitExpression(ctx.expression());

    if (typeof expressionValue !== "bigint") {
      throw new ParserError({
        message: "Expected bigint operand in unary expression",
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    if (ctx._op.type === CircomParser.NOT) {
      return expressionValue === 0n ? 1n : 0n;
    } else if (ctx._op.type === CircomParser.BNOT) {
      return ~expressionValue;
    } else {
      throw new ParserError({
        message: "Unsupported unary operator",
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }
  };

  visitTernaryExpression = (
    ctx: TernaryExpressionContext,
  ): BigIntOrNestedArray => {
    const conditionValue = this.visitExpression(ctx.expression(0));

    if (typeof conditionValue !== "bigint") {
      throw new ParserError({
        message: "Expected bigint conditional value in ternary expression",
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    if (conditionValue) {
      return this.visitExpression(ctx.expression(1));
    } else {
      return this.visitExpression(ctx.expression(2));
    }
  };

  visitDotExpression = (ctx: DotExpressionContext) => {
    throw new ParserError({
      message:
        "Dot expressions are not allowed within the main component's parameters",
      line: ctx.start.line,
      column: ctx.start.column,
    });
  };
}
