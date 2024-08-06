import { IncludeDeclarationContext } from "../parser/CircomParser";
import CircomVisitor from "../parser/CircomVisitor";

export class CircomIncludeVisitor extends CircomVisitor<void> {
  packageNames: string[];

  constructor() {
    super();
    this.packageNames = [];
  }

  visitIncludeDeclaration = (ctx: IncludeDeclarationContext) => {
    this.packageNames.push(ctx.PACKAGE_NAME().getText().slice(1, -1));
  };
}
