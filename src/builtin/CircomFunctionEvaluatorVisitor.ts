import CircomVisitor from "../generated/CircomVisitor";
import { BigIntOrNestedArray, Variables } from "./types";
import {
  FuncAssignmentExpressionContext,
  FuncSelfOpContext,
  FunctionBlockContext,
  PrimaryExpressionContext,
  VarDeclarationContext,
} from "../generated/CircomParser";
import { CircomExpressionVisitor } from "./CircomExpressionVisitor";
import { resolveDimensions } from "./utils";
import { ASSIGNMENT_OPERATIONS, POSTFIX_OPERATIONS } from "./constants";

export class CircomFunctionEvaluatorVisitor extends CircomVisitor<void> {
  variables: Variables;
  currentVariable: null | string;

  constructor() {
    super();

    this.variables = {};
    this.currentVariable = null;
  }

  evalFunction = (ctx: FunctionBlockContext, args: Variables) => {
    this.variables = args;

    this.visitChildren(ctx);
  };

  visitFuncSelfOp = (ctx: FuncSelfOpContext) => {
    if (!(ctx.ID().getText() in this.variables)) {
      throw new Error(`Variable ${ctx.ID().getText()} is not found`);
    }

    const varValue = this.variables[ctx.ID().getText()]!;

    if (typeof varValue !== "bigint") {
      throw new Error("Expected bigint operands in postfix operation");
    }

    if (ctx.SELF_OP().getText() === POSTFIX_OPERATIONS.INCR) {
      this.variables[ctx.ID().getText()] = varValue + 1n;
    } else if (ctx.SELF_OP().getText() === POSTFIX_OPERATIONS.DECR) {
      this.variables[ctx.ID().getText()] = varValue - 1n;
    } else {
      throw new Error(
        `Unsupported postfix operator ${ctx.SELF_OP().getText()}`,
      );
    }
  };

  visitFuncAssignmentExpression = (ctx: FuncAssignmentExpressionContext) => {
    this.visitChildren(ctx);

    const left = this.currentVariable;

    if (!left) {
      throw new Error(
        "Left part of the assignment is expected to be an identifier",
      );
    }

    if (!(left in this.variables)) {
      throw new Error(`Unknown variable ${left}`);
    }

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    const rightValue = expressionVisitor.visitExpression(ctx.expression(1));

    if (ctx.ASSIGNMENT()) {
      this.variables[left] = rightValue;

      this.currentVariable = null;
    } else {
      const leftValue = expressionVisitor.visitExpression(ctx.expression(0));

      if (typeof rightValue !== "bigint" || typeof leftValue !== "bigint") {
        throw new Error(
          "Expected bigint operands in self assignment expression",
        );
      }

      switch (ctx.ASSIGMENT_OP().getText()) {
        case ASSIGNMENT_OPERATIONS.ADD: {
          this.variables[left] = leftValue + rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.SUB: {
          this.variables[left] = leftValue - rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.MUL: {
          this.variables[left] = leftValue * rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.DIV: {
          if (rightValue === 0n) {
            throw new Error("Division by zero error.");
          }
          this.variables[left] = leftValue / rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.MOD: {
          this.variables[left] = leftValue % rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.EXP: {
          this.variables[left] = leftValue ** rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.LEFT_SHIFT: {
          this.variables[left] = leftValue << rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.RIGHT_SHIFT: {
          this.variables[left] = leftValue >> rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.BIT_AND: {
          this.variables[left] = leftValue & rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.BIT_OR: {
          this.variables[left] = leftValue | rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.BIT_XOR: {
          this.variables[left] = leftValue ^ rightValue;
          break;
        }
        default: {
          throw new Error("Unsupported assignment operation");
        }
      }
    }
  };

  visitPrimaryExpression = (ctx: PrimaryExpressionContext) => {
    // TODO dimensions
    if (ctx.primary().identifier() && this.currentVariable == null) {
      this.currentVariable = ctx.primary().identifier().ID().getText();
    }
  };

  visitVarDeclaration = (ctx: VarDeclarationContext) => {
    const varDefinition = ctx.varDefinition();

    const id = varDefinition.identifier();

    // const dimensions = resolveDimensions(
    //   id.arrayDimension_list(),
    //   this.variables,
    // );

    let varValue: BigIntOrNestedArray | null = null;

    if (ctx.ASSIGNMENT()) {
      const rhsValue = ctx.rhsValue();

      if (rhsValue.expression()) {
        const expressionVisitor = new CircomExpressionVisitor(
          true,
          this.variables,
        );

        varValue = expressionVisitor.visitExpression(rhsValue.expression());
      } else if (rhsValue.blockInstantiation()) {
        // TODO
        throw new Error("blockInstantiation is not supported yet");
      }

      // TODO dimensions
      this.variables[id.getText()] = varValue;
    } else {
      this.variables[varDefinition.identifier().getText()] = 0n;

      ctx.identifier_list().forEach((identifier) => {
        this.variables[identifier.getText()] = 0n;
      });
    }
  };
}
