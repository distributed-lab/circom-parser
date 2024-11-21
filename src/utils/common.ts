import { SimpleIdentifierListContext } from "../generated";
import { VariableContext, VariableContextWithNull } from "../types";

export function parseSimpleIdentifierList(
  ctx: SimpleIdentifierListContext,
): string[] {
  const result: string[] = [];

  if (!ctx) {
    return result;
  }

  ctx.ID_list().forEach((node) => {
    result.push(node.getText());
  });

  return result;
}

export function bindVariableContext(
  variableName: string,
  dimensions: number[],
  values: any[],
): VariableContextWithNull {
  const context: VariableContextWithNull = {};

  const resolved = resolveDimensions(variableName, dimensions);
  for (const variable of resolved) {
    try {
      context[variable] = parseVariable(
        values,
        variable.replace(variableName, ""),
      );
    } catch {
      context[variable] = null;
    }
  }

  return context;
}

// reference MUST be similar to [0][1]
function parseVariable(value: any, reference: string): bigint {
  const parts = reference
    .split("[")
    .map((part) => part.replace("]", ""))
    .filter((part) => part !== "")
    .map((part) => parseInt(part));

  return getReferenceValueInternal(value, parts);
}

function getReferenceValueInternal(value: any, reference: number[]): bigint {
  if (reference.length === 0) {
    return value;
  }

  return getReferenceValueInternal(value[reference[0]], reference.slice(1));
}

export function resolveDimensions(
  variableName: string,
  dimensions: number[],
): string[] {
  return internalResolveDimensions([variableName], dimensions, 0);
}

function internalResolveDimensions(
  variables: string[],
  dimensions: number[],
  layer: number,
): string[] {
  if (layer >= dimensions.length) {
    return variables;
  }

  const result: string[] = [];
  for (let i = 0; i < dimensions[layer]; i++) {
    for (const variable of variables) {
      result.push(`${variable}[${i}]`);
    }
  }

  return internalResolveDimensions(result, dimensions, layer + 1);
}
