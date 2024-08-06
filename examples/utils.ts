import { DimensionedIdentifierContext } from "../parser/CircomParser";

export function parseDimensionedIdentifier(
  dimensionedIdentifier: DimensionedIdentifierContext,
) {
  const inputDimension: string[] = [];

  dimensionedIdentifier.arrayDimension_list().forEach((dimension) => {
    inputDimension.push(dimension.getText().slice(1, -1));
  });

  return {
    name: dimensionedIdentifier.ID().getText(),
    dimension: inputDimension,
  };
}
