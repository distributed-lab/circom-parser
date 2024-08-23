import {
  Variables,
  CircomVisitor,
  SignalDefinitionContext,
  resolveDimensions,
} from "../../src";

export class CircomSignalDeclarationVisitor extends CircomVisitor<void> {
  signalDeclarations: {
    name: string;
    dimensions: number[];
  }[];

  constructor(private _vars: Variables) {
    super();
    this.signalDeclarations = [];
  }

  visitSignalDefinition = (ctx: SignalDefinitionContext) => {
    const signalName = ctx.identifier().ID().getText();
    const dimensions = resolveDimensions(
      ctx.identifier().arrayDimension_list(),
      this._vars,
    );

    this.signalDeclarations.push({
      name: signalName,
      dimensions: dimensions,
    });
  };
}
