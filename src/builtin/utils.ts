import {
  ArrayDimensionContext,
  IdentifierContext,
} from "../generated/CircomParser";
import { BigIntOrNestedArray, Variables } from "./types";
import { CircomExpressionVisitor } from "./CircomExpressionVisitor";

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

  arrayDimentions.forEach((dimension) => {
    if (dimension.NUMBER()) {
      dimensions.push(Number(dimension.NUMBER().getText()));
    } else if (dimension.ID()) {
      const dimensionValue = variablesContext[dimension.ID().getText()].value;

      if (typeof dimensionValue !== "bigint") {
        throw new Error(
          `Dimension value type is not allowed to be ${typeof dimensionValue}`,
        );
      }

      dimensions.push(Number(dimensionValue));
    } else if (dimension.expression()) {
      const expressionVisitor = new CircomExpressionVisitor(
        true,
        variablesContext,
      );
      const expressionValue = expressionVisitor.visitExpression(
        dimension.expression(),
      );

      if (typeof expressionValue !== "bigint") {
        throw new Error(
          `Dimension value type is not allowed to be ${typeof expressionValue}`,
        );
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
