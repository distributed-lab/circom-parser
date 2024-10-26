import { SimpleIdentifierListContext } from "./generated";

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
