import { IdentifierContext } from "../generated/CircomParser";

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
