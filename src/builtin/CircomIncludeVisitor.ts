import { CircomVisitor, IncludeDeclarationContext } from "../generated";

export class CircomIncludeVisitor extends CircomVisitor<void> {
  packageNames: string[];

  constructor() {
    super();
    this.packageNames = [];
  }

  visitIncludeDeclaration = (ctx: IncludeDeclarationContext) => {
    this.packageNames.push(ctx.STRING().getText().slice(1, -1));
  };
}
