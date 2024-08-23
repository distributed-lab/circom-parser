import { CircomVisitor, PragmaDeclarationContext } from "../generated";

export class CircomPragmaVisitor extends CircomVisitor<void> {
  isCustom: boolean;
  compilerVersion: string;

  constructor() {
    super();
    this.isCustom = false;
    this.compilerVersion = "";
  }

  visitPragmaDeclaration = (ctx: PragmaDeclarationContext) => {
    ctx.CUSTOM_TEMPLATES() ? (this.isCustom = true) : (this.isCustom = false);

    if (ctx.VERSION()) {
      this.compilerVersion = ctx.VERSION().getText();
    }
  };
}
