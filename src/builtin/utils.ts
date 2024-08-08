import {
  ArrayDimensionContext,
  IdentifierContext,
} from "../generated/CircomParser";
import { Variables } from "./types";
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
): bigint[] {
  const dimensions: bigint[] = [];

  arrayDimentions.forEach((dimension) => {
    if (dimension.NUMBER()) {
      dimensions.push(BigInt(dimension.NUMBER().getText()));
    } else if (dimension.ID()) {
      const dimensionValue = variablesContext[dimension.ID().getText()];

      if (typeof dimensionValue !== "bigint") {
        throw new Error(
          `Dimension value type is not allowed to be ${typeof dimensionValue}`,
        );
      }

      dimensions.push(dimensionValue);
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

      dimensions.push(expressionValue);
    }
  });

  return dimensions;
}
