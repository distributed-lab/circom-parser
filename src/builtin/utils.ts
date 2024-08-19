import { CircomExpressionVisitor } from "./CircomExpressionVisitor";

import { ASSIGNMENT_OPERATIONS, POSTFIX_OPERATIONS } from "./constants";

import { BigIntOrNestedArray, LocationCtx, Variables } from "../types";
import { ArrayDimensionContext, IdentifierContext } from "../generated";

import { ParserError } from "../errors/ParserError";

export function parseIdentifier(identifier: IdentifierContext) {
  const inputDimension: string[] = [];

  identifier.arrayDimension_list().forEach((dimension) => {
    inputDimension.push(dimension.getText().slice(1, -1));
  });

  return {
    name: identifier.ID().getText(),
    dimension: inputDimension,
  };
}

export function validateBigInt(value: any): value is bigint | bigint[] {
  if (typeof value === "bigint") {
    return true;
  } else if (Array.isArray(value)) {
    return value.every((element) => validateBigInt(element));
  }

  return false;
}

// returns  array of resolved indexes as bigints
// e.g. variable[0][2][1] => [0, 2, 1]
export function resolveDimensions(
  arrayDimentions: ArrayDimensionContext[],
  variablesContext: Variables,
): number[] {
  const dimensions: number[] = [];

  arrayDimentions.forEach((dimension: ArrayDimensionContext) => {
    if (dimension.expression()) {
      const expressionVisitor = new CircomExpressionVisitor(
        true,
        variablesContext,
      );
      const expressionValue = expressionVisitor.visitExpression(
        dimension.expression(),
      );

      if (typeof expressionValue !== "bigint") {
        throw new ParserError({
          message: `Dimension value type is not allowed to be ${typeof expressionValue}`,
          line: dimension.start.line,
          column: dimension.start.column,
        });
      }

      dimensions.push(Number(expressionValue));
    }
  });

  return dimensions;
}

export function setValueToArrayElement(
  array: BigIntOrNestedArray | null,
  indices: number[],
  value: BigIntOrNestedArray,
) {
  let current: BigIntOrNestedArray = array ? array : [];

  if (Array.isArray(current)) {
    for (let i = 0; i < indices.length; i++) {
      const index = indices[i];

      if (i === indices.length - 1) {
        current[index] = value;
      } else {
        if (!Array.isArray(current[index])) {
          current[index] = [];
        }
        current = current[index];
      }
    }
  }
}

export function setZeroValueToArrayElements(dimensions: number[]) {
  if (dimensions.length === 0) {
    return 0n;
  }

  const size = dimensions[0];

  const remainingDimensions = dimensions.slice(1);
  const array = new Array(size);

  for (let i = 0; i < size; i++) {
    array[i] = setZeroValueToArrayElements(remainingDimensions);
  }

  return array;
}

// level is a current depth in the recursive check
export function validateArrayDimensions(
  array: BigIntOrNestedArray,
  dimensions: number[],
  level = 0,
) {
  if (typeof array === "bigint" && !dimensions.length) {
    return true;
  }

  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length !== dimensions[level]) {
    return false;
  }

  if (level < dimensions.length - 1) {
    for (let i = 0; i < array.length; i++) {
      if (!validateArrayDimensions(array[i], dimensions, level + 1)) {
        return false;
      }
    }
  }

  return true;
}

export function performAssignmentOperation(
  assignmentOp: string,
  variables: Variables,
  variableId: string,
  leftValue: bigint,
  rightValue: bigint,
  ctxLocation: LocationCtx,
) {
  // TODO make operations modulo Q
  switch (assignmentOp) {
    case ASSIGNMENT_OPERATIONS.ADD: {
      variables[variableId].value = leftValue + rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.SUB: {
      variables[variableId].value = leftValue - rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.MUL: {
      variables[variableId].value = leftValue * rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.DIV: {
      if (rightValue === 0n) {
        throw new ParserError({
          message: "Division by zero is not allowed",
          line: ctxLocation.line,
          column: ctxLocation.column,
        });
      }
      variables[variableId].value = leftValue / rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.MOD: {
      variables[variableId].value = leftValue % rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.EXP: {
      variables[variableId].value = leftValue ** rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.LEFT_SHIFT: {
      variables[variableId].value = leftValue << rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.RIGHT_SHIFT: {
      variables[variableId].value = leftValue >> rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.BIT_AND: {
      variables[variableId].value = leftValue & rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.BIT_OR: {
      variables[variableId].value = leftValue | rightValue;
      break;
    }
    case ASSIGNMENT_OPERATIONS.BIT_XOR: {
      variables[variableId].value = leftValue ^ rightValue;
      break;
    }
    default: {
      throw new ParserError({
        message: "Unsupported assignment operation",
        line: ctxLocation.line,
        column: ctxLocation.column,
      });
    }
  }
}

export function performPostfixOperation(
  postfixOp: string,
  variables: Variables,
  variableId: string,
  ctxLocation: LocationCtx,
) {
  if (typeof variables[variableId].value !== "bigint") {
    throw new ParserError({
      message: "Expected bigint operands in postfix operation",
      line: ctxLocation.line,
      column: ctxLocation.column,
    });
  }

  if (postfixOp === POSTFIX_OPERATIONS.INCR) {
    variables[variableId].value += 1n;
  } else if (postfixOp === POSTFIX_OPERATIONS.DECR) {
    variables[variableId].value -= 1n;
  } else {
    throw new ParserError({
      message: `Unsupported postfix operator ${postfixOp}`,
      line: ctxLocation.line,
      column: ctxLocation.column,
    });
  }
}
