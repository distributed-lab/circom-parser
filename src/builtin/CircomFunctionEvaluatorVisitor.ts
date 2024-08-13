import {
  CircomVisitor,
  ForFuncStmtContext,
  FuncAssignmentExpressionContext,
  FuncSelfOpContext,
  FunctionBlockContext,
  IfFuncStmtContext,
  ReturnFuncStmtContext,
  VarDeclarationContext,
  WhileFuncStmtContext,
} from "../generated";
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
import { ParserError } from "../errors/ParserError";

export class CircomFunctionEvaluatorVisitor extends CircomVisitor<void> {
  variables: Variables = {};
  evaluationActive: boolean = true;
  returnValue: BigIntOrNestedArray | null = null;

  evalFunction = (ctx: FunctionBlockContext, args: Variables) => {
    this.variables = args;
    this.evaluationActive = true;
    this.returnValue = null;

    this.visitChildren(ctx);
  };

  visitFunctionBlock = (ctx: FunctionBlockContext) => {
    if (!this.evaluationActive) return;

    this.visitChildren(ctx);
  };

  visitFuncSelfOp = (ctx: FuncSelfOpContext) => {
    if (!this.evaluationActive) return;

    if (!(ctx.ID().getText() in this.variables)) {
      throw new ParserError({
        message: `Unknown variable ${ctx.ID().getText()}`,
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    performPostfixOperation(
      ctx.SELF_OP().getText(),
      this.variables,
      ctx.ID().getText(),
      { line: ctx.start.line, column: ctx.start.column },
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
        throw new ParserError({
          message: "blockInstantiation is not supported yet",
          line: rhsValue.start.line,
          column: rhsValue.start.column,
        });
      }

      if (varValue === null) {
        throw new ParserError({
          message: `Null value cannot be assigned to variable ${id.getText()}`,
          line: rhsValue.start.line,
          column: rhsValue.start.column,
        });
      }

      if (dimensions.length && !validateArrayDimensions(varValue, dimensions)) {
        throw new ParserError({
          message: "Incompatible array structure is being assigned",
          line: rhsValue.start.line,
          column: rhsValue.start.column,
        });
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

    const variableId = ctx.identifier().ID().getText();

    if (!variableId) {
      throw new ParserError({
        message: "Left part of the assignment is expected to be an identifier",
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    if (!(variableId in this.variables)) {
      throw new ParserError({
        message: `Unknown variable ${variableId}`,
        line: ctx.start.line,
        column: ctx.start.column,
      });
    }

    const leftDimensions = resolveDimensions(
      ctx.identifier().arrayDimension_list(),
      this.variables,
    );
    const identifierDimensions = this.variables[variableId].dimensions;

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    const expressionValue = expressionVisitor.visitExpression(ctx.expression());

    if (ctx.ASSIGNMENT()) {
      const dimensions = [...identifierDimensions];
      dimensions.splice(0, leftDimensions.length);

      if (!validateArrayDimensions(expressionValue, dimensions)) {
        throw new ParserError({
          message: "Incompatible array structure is being assigned",
          line: ctx.start.line,
          column: ctx.start.column,
        });
      }

      if (Array.isArray(this.variables[variableId].value)) {
        setValueToArrayElement(
          this.variables[variableId].value,
          leftDimensions,
          expressionValue,
        );
      } else {
        this.variables[variableId].value = Array.isArray(expressionValue)
          ? [...expressionValue]
          : expressionValue;
      }
    } else {
      const variableValue = this.variables[variableId].value;

      if (
        typeof expressionValue !== "bigint" ||
        typeof variableValue !== "bigint"
      ) {
        throw new ParserError({
          message: "Expected bigint operands in self assignment expression",
          line: ctx.start.line,
          column: ctx.start.column,
        });
      }

      performAssignmentOperation(
        ctx.ASSIGNMENT_OP().getText(),
        this.variables,
        variableId,
        variableValue,
        expressionValue,
        { line: ctx.start.line, column: ctx.start.column },
      );
    }
  };

  // TODO handle variables scope
  visitIfFuncStmt = (ctx: IfFuncStmtContext) => {
    if (!this.evaluationActive) return;

    const expressionVisitor = new CircomExpressionVisitor(true, this.variables);
    const conditionValue = expressionVisitor.visitExpression(
      ctx.parExpression().expression(),
    );

    if (typeof conditionValue !== "bigint") {
      throw new ParserError({
        message: "Conditional value must be a single arithmetic expression",
        line: ctx.parExpression().expression().start.line,
        column: ctx.parExpression().expression().start.column,
      });
    }

    if (conditionValue) {
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
        throw new ParserError({
          message: "Conditional value must be a single arithmetic expression",
          line: ctx.parExpression().expression().start.line,
          column: ctx.parExpression().expression().start.column,
        });
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
          throw new ParserError({
            message: "Incompatible array structure is being assigned",
            line: forInit.rhsValue().start.line,
            column: forInit.rhsValue().start.column,
          });
        }

        this.variables[initVarIdentifier.ID().getText()] = {
          value: expressionValue,
          dimensions: initVarDimensions,
        };
      } else if (forInit.rhsValue().blockInstantiation()) {
        // TODO
        throw new ParserError({
          message: "blockInstantiation is not supported yet",
          line: forInit.rhsValue().start.line,
          column: forInit.rhsValue().expression().start.column,
        });
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
      throw new ParserError({
        message: "Conditional value must be a single arithmetic expression",
        line: ctx.forControl().start.line,
        column: ctx.forControl().start.column,
      });
    }

    const forUpdate = ctx.forControl().forUpdate();

    if (!(forUpdate.ID().getText() in this.variables)) {
      throw new ParserError({
        message: `Unknown variable ${forUpdate.ID().getText()}`,
        line: forUpdate.start.line,
        column: forUpdate.start.column,
      });
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
          throw new ParserError({
            message: "Expected bigint operand in assignment expression",
            line: forUpdate.start.line,
            column: forUpdate.start.column,
          });
        }

        if (forUpdate.ASSIGNMENT_OP()) {
          performAssignmentOperation(
            forUpdate.ASSIGNMENT_OP().getText(),
            this.variables,
            forUpdate.ID().getText(),
            identifierValue,
            expressionValue,
            { line: forUpdate.start.line, column: forUpdate.start.column },
          );
        } else {
          this.variables[forUpdate.ID().getText()].value = expressionValue;
        }
      } else {
        performPostfixOperation(
          forUpdate.SELF_OP().getText(),
          this.variables,
          forUpdate.ID().getText(),
          { line: forUpdate.start.line, column: forUpdate.start.column },
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
}
