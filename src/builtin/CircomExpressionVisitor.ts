import CircomVisitor from "../generated/CircomVisitor";
import CircomParser, {
  BinaryExpressionContext,
  DotExpressionContext,
  ExpressionContext,
  PrimaryExpressionContext,
  TernaryExpressionContext,
  UnaryExpressionContext,
} from "../generated/CircomParser";
import { resolveDimensions, validateBigInt } from "./utils";
import { BigIntOrNestedArray, Variables } from "./types";

export class CircomExpressionVisitor extends CircomVisitor<BigIntOrNestedArray | void> {
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
      throw new Error(
        "Expression value must be of type bigint or bigint array",
      );
    }

    return expressionValue;
  };

  visitPrimaryExpression = (
    ctx: PrimaryExpressionContext,
  ): BigIntOrNestedArray => {
    const primary = ctx.primary();

    if ((primary.identifier() && !this.allowId) || primary.args()) {
      throw new Error(
        "Identifier usage is not allowed within the main component's parameters",
      );
    } else if (primary.identifier() && this.allowId) {
      const id = primary.identifier().ID().getText();

      if (!(id in this.variablesContext)) {
        throw new Error(`Unresolvable identifier ${id}`);
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
        throw new Error("Unexpected type for identifier value");
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
      throw new Error("Unsupported expression");
    }
  };

  visitBinaryExpression = (ctx: BinaryExpressionContext): bigint => {
    const left = this.visitExpression(ctx.expression(0));
    const right = this.visitExpression(ctx.expression(1));

    if (typeof left !== "bigint" || typeof right !== "bigint") {
      throw new Error("Expected bigint operands in binary expression");
    }

    switch (ctx._op.type) {
      case CircomParser.MUL:
        return left * right;
      case CircomParser.DIV:
        if (right === BigInt(0)) {
          throw new Error("Division by zero is not allowed");
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
      case CircomParser.LSHIFT:
        return left << right;
      case CircomParser.RSHIFT:
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
        throw new Error("Unsupported binary operator");
    }
  };

  visitUnaryExpression = (ctx: UnaryExpressionContext): bigint => {
    const expressionValue = this.visitExpression(ctx.expression());

    if (typeof expressionValue !== "bigint") {
      throw new Error("Expected bigint operand in unary expression");
    }

    if (ctx._op.type === CircomParser.NOT) {
      return expressionValue === 0n ? 1n : 0n;
    } else if (ctx._op.type === CircomParser.BNOT) {
      return ~expressionValue;
    } else {
      throw new Error("Unsupported unary operator");
    }
  };

  visitTernaryExpression = (
    ctx: TernaryExpressionContext,
  ): BigIntOrNestedArray => {
    const conditionValue = this.visitExpression(ctx.expression(0));

    if (typeof conditionValue !== "bigint") {
      throw new Error(
        "Expected bigint conditional value in ternary expression",
      );
    }

    if (conditionValue) {
      return this.visitExpression(ctx.expression(1));
    } else {
      return this.visitExpression(ctx.expression(2));
    }
  };

  visitDotExpression = (ctx: DotExpressionContext) => {
    throw new Error(
      "Dot expressions are not allowed within the main component's parameters",
    );
  };
}
