import { SimpleIdentifierListContext } from "../generated";
import {
  CircomValueType,
  VariableContext,
  VariableContextWithNull,
} from "../types";

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

export function buildVariableContext(
  names: string[],
  values: CircomValueType[],
): VariableContext {
  if (names.length !== values.length) {
    throw new Error("Names and values must have the same length");
  }

  const context: VariableContext = {};

  for (let i = 0; i < names.length; i++) {
    const bindContext = bindVariableContext(
      names[i],
      getArrayDimensions(values[i]),
      values[i],
    );

    for (const key in bindContext) {
      if (bindContext[key] !== null) {
        context[key] = bindContext[key];
      }
    }
  }

  return context;
}

export function getArrayDimensions(value: CircomValueType): number[] {
  if (Array.isArray(value)) {
    return [value.length, ...getArrayDimensions(value[0])];
  }

  return [];
}

export function bindVariableContext(
  variableName: string,
  dimensions: number[],
  values: CircomValueType,
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

export function resolveDimensions(
  variableName: string,
  dimensions: number[],
): string[] {
  return internalResolveDimensions([variableName], dimensions, 0);
}

// reference MUST be similar to [0][1]
function parseVariable(
  value: CircomValueType,
  reference: string,
): CircomValueType {
  const parts = reference
    .split("[")
    .map((part) => part.replace("]", ""))
    .filter((part) => part !== "")
    .map((part) => parseInt(part));

  return getReferenceValueInternal(value, parts);
}

function getReferenceValueInternal(
  value: CircomValueType,
  reference: number[],
): CircomValueType {
  if (reference.length === 0) {
    return value;
  }

  if (!Array.isArray(value)) {
    throw new Error("INTERNAL ERROR! Reference is invalid");
  }

  return getReferenceValueInternal(value[reference[0]], reference.slice(1));
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
