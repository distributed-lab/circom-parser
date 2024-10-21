import { CircomExpressionVisitor } from "./CircomExpressionVisitor";

import { Variables } from "../types";
import { ArrayDimensionContext, IdentifierContext } from "../generated";

import { ParserError } from "../errors/ParserError";

export function parseIdentifier(identifier: IdentifierContext) {
  const inputDimension: string[] = [];

  identifier.arrayDimension_list().forEach((dimension) => {
    inputDimension.push(dimension.getText().slice(1, -1));
  });

  return {
    name: identifier.ID(0).getText(),
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
  templateName: string,
): number[] {
  const dimensions: number[] = [];

  arrayDimentions.forEach((dimension: ArrayDimensionContext) => {
    if (dimension.expression()) {
      const expressionVisitor = new CircomExpressionVisitor(
        true,
        templateName,
        variablesContext,
      );
      const expressionValue = expressionVisitor.visitExpression(
        dimension.expression(),
      );

      if (typeof expressionValue !== "bigint") {
        throw new ParserError({
          templateName,
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
