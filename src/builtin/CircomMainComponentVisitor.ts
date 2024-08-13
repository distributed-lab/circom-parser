import { CircomVisitor, ComponentMainDeclarationContext } from "../generated";

import { CircomExpressionVisitor } from "./CircomExpressionVisitor";
import { MainComponent } from "../types/builtin";

export class CircomMainComponentVisitor extends CircomVisitor<void> {
  mainComponentInfo: MainComponent;

  constructor() {
    super();

    this.mainComponentInfo = {
      templateName: null,
      publicInputs: [],
      parameters: [],
    };
  }

  visitComponentMainDeclaration = (ctx: ComponentMainDeclarationContext) => {
    this.mainComponentInfo.templateName = ctx.ID().getText();

    if (ctx.args()) {
      ctx
        .args()
        .ID_list()
        .forEach((input) => {
          this.mainComponentInfo.publicInputs.push(input.getText());
        });
    }

    if (ctx.expressionList()) {
      const expressionVisitor = new CircomExpressionVisitor(false);

      ctx
        .expressionList()
        .expression_list()
        .forEach((expression) => {
          this.mainComponentInfo.parameters.push(
            expressionVisitor.visitExpression(expression),
          );
        });
    }
  };
}
