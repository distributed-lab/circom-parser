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
import {
  resolveDimensions,
  setValueToArrayElement,
  validateArrayDimensions,
} from "./utils";
import { ASSIGNMENT_OPERATIONS, POSTFIX_OPERATIONS } from "./constants";

export class CircomFunctionEvaluatorVisitor extends CircomVisitor<void> {
  variables: Variables;
  currentVariable: {
    name: null | string;
    dimensions: number[];
  };

  constructor() {
    super();

    this.variables = {};
    this.currentVariable = {
      name: null,
      dimensions: [],
    };
  }

  evalFunction = (ctx: FunctionBlockContext, args: Variables) => {
    this.variables = args;

    this.visitChildren(ctx);
  };

  visitFuncSelfOp = (ctx: FuncSelfOpContext) => {
    if (!(ctx.ID().getText() in this.variables)) {
      throw new Error(`Variable ${ctx.ID().getText()} is not found`);
    }

    const varValue = this.variables[ctx.ID().getText()].value!;

    if (typeof varValue !== "bigint") {
      throw new Error("Expected bigint operands in postfix operation");
    }

    if (ctx.SELF_OP().getText() === POSTFIX_OPERATIONS.INCR) {
      this.variables[ctx.ID().getText()].value = varValue + 1n;
    } else if (ctx.SELF_OP().getText() === POSTFIX_OPERATIONS.DECR) {
      this.variables[ctx.ID().getText()].value = varValue - 1n;
    } else {
      throw new Error(
        `Unsupported postfix operator ${ctx.SELF_OP().getText()}`,
      );
    }
  };

  visitFuncAssignmentExpression = (ctx: FuncAssignmentExpressionContext) => {
    this.visitChildren(ctx);

    const leftId = this.currentVariable.name;

    if (!leftId) {
      throw new Error(
        "Left part of the assignment is expected to be an identifier",
      );
    }

    if (!(leftId in this.variables)) {
      throw new Error(`Unknown variable ${leftId}`);
    }

    const leftDimensions = this.currentVariable.dimensions;
    const identifierDimensions = this.variables[leftId].dimensions;

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    const rightValue = expressionVisitor.visitExpression(ctx.expression(1));

    if (ctx.ASSIGNMENT()) {
      const dimensions = [...identifierDimensions];
      dimensions.splice(0, leftDimensions.length);

      if (!validateArrayDimensions(rightValue, dimensions)) {
        throw new Error("Incompatible array structure is being assigned");
      }

      if (Array.isArray(this.variables[leftId].value)) {
        setValueToArrayElement(
          this.variables[leftId].value,
          leftDimensions,
          rightValue,
        );
      } else {
        this.variables[leftId].value = Array.isArray(rightValue)
          ? [...rightValue]
          : rightValue;
      }

      this.currentVariable = {
        name: null,
        dimensions: [],
      };
    } else {
      const leftValue = expressionVisitor.visitExpression(ctx.expression(0));

      if (typeof rightValue !== "bigint" || typeof leftValue !== "bigint") {
        throw new Error(
          "Expected bigint operands in self assignment expression",
        );
      }

      switch (ctx.ASSIGMENT_OP().getText()) {
        case ASSIGNMENT_OPERATIONS.ADD: {
          this.variables[leftId].value = leftValue + rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.SUB: {
          this.variables[leftId].value = leftValue - rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.MUL: {
          this.variables[leftId].value = leftValue * rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.DIV: {
          if (rightValue === 0n) {
            throw new Error("Division by zero error.");
          }
          this.variables[leftId].value = leftValue / rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.MOD: {
          this.variables[leftId].value = leftValue % rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.EXP: {
          this.variables[leftId].value = leftValue ** rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.LEFT_SHIFT: {
          this.variables[leftId].value = leftValue << rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.RIGHT_SHIFT: {
          this.variables[leftId].value = leftValue >> rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.BIT_AND: {
          this.variables[leftId].value = leftValue & rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.BIT_OR: {
          this.variables[leftId].value = leftValue | rightValue;
          break;
        }
        case ASSIGNMENT_OPERATIONS.BIT_XOR: {
          this.variables[leftId].value = leftValue ^ rightValue;
          break;
        }
        default: {
          throw new Error("Unsupported assignment operation");
        }
      }
    }
  };

  visitPrimaryExpression = (ctx: PrimaryExpressionContext) => {
    if (ctx.primary().identifier() && this.currentVariable.name === null) {
      this.currentVariable = {
        name: ctx.primary().identifier().ID().getText(),
        dimensions: resolveDimensions(
          ctx.primary().identifier().arrayDimension_list(),
          this.variables,
        ),
      };
    }
  };

  visitVarDeclaration = (ctx: VarDeclarationContext) => {
    const varDefinition = ctx.varDefinition();

    const id = varDefinition.identifier();

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

      if (!varValue) {
        throw new Error(
          `Null value cannot be assigned to variable ${id.getText()}`,
        );
      }

      const dimensions = resolveDimensions(
        id.arrayDimension_list(),
        this.variables,
      );

      if (dimensions.length && !validateArrayDimensions(varValue, dimensions)) {
        throw new Error("Incompatible array structure is being assigned");
      }

      this.variables[id.ID().getText()] = {
        value: Array.isArray(varValue) ? [...varValue] : varValue,
        dimensions: dimensions,
      };
    } else {
      this.variables[varDefinition.identifier().ID().getText()] = {
        value: 0n,
        dimensions: resolveDimensions(id.arrayDimension_list(), this.variables),
      };

      ctx.identifier_list().forEach((identifier) => {
        this.variables[identifier.ID().getText()] = {
          value: 0n,
          dimensions: resolveDimensions(
            identifier.arrayDimension_list(),
            this.variables,
          ),
        };
      });
    }
  };
}
