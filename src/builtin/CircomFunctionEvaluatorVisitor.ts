import CircomVisitor from "../generated/CircomVisitor";

import {
  ForFuncStmtContext,
  FuncAssignmentExpressionContext,
  FuncSelfOpContext,
  FunctionBlockContext,
  IfFuncStmtContext,
  PrimaryExpressionContext,
  ReturnFuncStmtContext,
  VarDeclarationContext,
  WhileFuncStmtContext,
} from "../generated/CircomParser";
import { CircomExpressionVisitor } from "./CircomExpressionVisitor";
import {
  performAssignmentOperation,
  performPostfixOperation,
  resolveDimensions,
  setValueToArrayElement,
  setZeroValueToArrayElements,
  validateArrayDimensions,
} from "./utils";
import { BigIntOrNestedArray, Variables } from "../types/builtin";

export class CircomFunctionEvaluatorVisitor extends CircomVisitor<void> {
  variables: Variables = {};
  evaluationActive: boolean = true;
  returnValue: BigIntOrNestedArray | null = null;
  currentVariable: {
    name: null | string;
    dimensions: number[];
  } = {
    name: null,
    dimensions: [],
  };

  evalFunction = (ctx: FunctionBlockContext, args: Variables) => {
    this.variables = args;
    this.evaluationActive = true;
    this.returnValue = null;
    this.currentVariable = {
      name: null,
      dimensions: [],
    };

    this.visitChildren(ctx);
  };

  visitFunctionBlock = (ctx: FunctionBlockContext) => {
    if (!this.evaluationActive) return;

    this.visitChildren(ctx);
  };

  visitFuncSelfOp = (ctx: FuncSelfOpContext) => {
    if (!this.evaluationActive) return;

    if (!(ctx.ID().getText() in this.variables)) {
      throw new Error(`Unknown variable ${ctx.ID().getText()}`);
    }

    performPostfixOperation(
      ctx.SELF_OP().getText(),
      this.variables,
      ctx.ID().getText(),
    );
  };

  visitVarDeclaration = (ctx: VarDeclarationContext) => {
    if (!this.evaluationActive) return;

    const varDefinition = ctx.varDefinition();

    const id = varDefinition.identifier();

    let varValue: BigIntOrNestedArray | null = null;

    const dimensions = resolveDimensions(
      id.arrayDimension_list(),
      this.variables,
    );

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

      if (varValue === null) {
        throw new Error(
          `Null value cannot be assigned to variable ${id.getText()}`,
        );
      }

      if (dimensions.length && !validateArrayDimensions(varValue, dimensions)) {
        throw new Error("Incompatible array structure is being assigned");
      }

      this.variables[id.ID().getText()] = {
        value: Array.isArray(varValue) ? [...varValue] : varValue,
        dimensions: dimensions,
      };
    } else {
      this.variables[varDefinition.identifier().ID().getText()] = {
        value: setZeroValueToArrayElements(dimensions),
        dimensions: dimensions,
      };

      ctx.identifier_list().forEach((identifier) => {
        const dimensions = resolveDimensions(
          identifier.arrayDimension_list(),
          this.variables,
        );

        this.variables[identifier.ID().getText()] = {
          value: setZeroValueToArrayElements(dimensions),
          dimensions: dimensions,
        };
      });
    }
  };

  visitFuncAssignmentExpression = (ctx: FuncAssignmentExpressionContext) => {
    if (!this.evaluationActive) return;

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
    const rightValue = expressionVisitor.visitExpression(ctx.expression());

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
    } else {
      const leftValue = expressionVisitor.visitExpression(ctx.expression());

      if (typeof rightValue !== "bigint" || typeof leftValue !== "bigint") {
        throw new Error(
          "Expected bigint operands in self assignment expression",
        );
      }

      performAssignmentOperation(
        ctx.ASSIGNMENT_OP().getText(),
        this.variables,
        leftId,
        leftValue,
        rightValue,
      );
    }

    this.currentVariable = {
      name: null,
      dimensions: [],
    };
  };

  // TODO handle variables scope
  visitIfFuncStmt = (ctx: IfFuncStmtContext) => {
    if (!this.evaluationActive) return;

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    const conditionValue = expressionVisitor.visitExpression(
      ctx.parExpression().expression(),
    );

    if (typeof conditionValue !== "bigint") {
      throw new Error(
        "Conditional value must be a single arithmetic expression",
      );
    }

    if (conditionValue) {
      // TODO fix if
      this.visitChildren(ctx.functionStmt(0));
    } else if (ctx.ELSE()) {
      this.visitChildren(ctx.functionStmt(1));
    }
  };

  // TODO handle variables scope
  visitWhileFuncStmt = (ctx: WhileFuncStmtContext) => {
    if (!this.evaluationActive) return;

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    let conditionValue = expressionVisitor.visitExpression(
      ctx.parExpression().expression(),
    );

    while (conditionValue) {
      if (typeof conditionValue !== "bigint") {
        throw new Error(
          "Conditional value must be a single arithmetic expression",
        );
      }

      this.visitChildren(ctx.functionStmt());

      conditionValue = expressionVisitor.visitExpression(
        ctx.parExpression().expression(),
      );
    }
  };

  // TODO handle variables scope
  visitForFuncStmt = (ctx: ForFuncStmtContext) => {
    if (!this.evaluationActive) return;

    const forInit = ctx.forControl().forInit();

    const initVarIdentifier = forInit.varDefinition().identifier();
    const initVarDimensions = resolveDimensions(
      initVarIdentifier.arrayDimension_list(),
      this.variables,
    );

    if (forInit.ASSIGNMENT()) {
      if (forInit.rhsValue().expression()) {
        const expressionVisitor = new CircomExpressionVisitor(
          true,
          this.variables,
        );
        const expressionValue = expressionVisitor.visitExpression(
          forInit.rhsValue().expression(),
        );

        if (!validateArrayDimensions(expressionValue, initVarDimensions)) {
          throw new Error("Incompatible array structure is being assigned");
        }

        this.variables[initVarIdentifier.ID().getText()] = {
          value: expressionValue,
          dimensions: initVarDimensions,
        };
      } else if (forInit.rhsValue().blockInstantiation()) {
        // TODO
        throw new Error("blockInstantiation is not supported yet");
      }
    } else {
      this.variables[initVarIdentifier.ID().getText()] = {
        value: setZeroValueToArrayElements(initVarDimensions),
        dimensions: initVarDimensions,
      };
    }

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    let conditionValue = expressionVisitor.visitExpression(
      ctx.forControl().expression(),
    );

    if (typeof conditionValue !== "bigint") {
      throw new Error(
        "Conditional value must be a single arithmetic expression",
      );
    }

    const forUpdate = ctx.forControl().forUpdate();

    if (!(forUpdate.ID().getText() in this.variables)) {
      throw new Error(`Unknown variable ${forUpdate.ID().getText()}`);
    }

    while (conditionValue) {
      this.visitChildren(ctx.functionStmt());

      const identifierValue = this.variables[forUpdate.ID().getText()].value;

      // TODO handle array dimensions?
      if (forUpdate.ASSIGNMENT_OP() || forUpdate.ASSIGNMENT()) {
        const expressionValue = expressionVisitor.visitExpression(
          forUpdate.expression(),
        );

        if (
          typeof expressionValue !== "bigint" ||
          typeof identifierValue !== "bigint"
        ) {
          throw new Error("Expected bigint operand in assignment expression");
        }

        if (forUpdate.ASSIGNMENT_OP()) {
          performAssignmentOperation(
            forUpdate.ASSIGNMENT_OP().getText(),
            this.variables,
            forUpdate.ID().getText(),
            identifierValue,
            expressionValue,
          );
        } else {
          this.variables[forUpdate.ID().getText()].value = expressionValue;
        }
      } else {
        performPostfixOperation(
          forUpdate.SELF_OP().getText(),
          this.variables,
          forUpdate.ID().getText(),
        );
      }

      conditionValue = expressionVisitor.visitExpression(
        ctx.forControl().expression(),
      );
    }
  };

  visitReturnFuncStmt = (ctx: ReturnFuncStmtContext) => {
    if (!this.evaluationActive) return;

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);

    this.returnValue = expressionVisitor.visitExpression(ctx.expression());
    this.evaluationActive = false;
  };

  visitPrimaryExpression = (ctx: PrimaryExpressionContext) => {
    if (!this.evaluationActive) return;

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
}
