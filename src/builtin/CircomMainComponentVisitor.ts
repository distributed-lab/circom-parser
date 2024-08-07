import { ComponentMainDeclarationContext } from "../generated/CircomParser";
import CircomVisitor from "../generated/CircomVisitor";
import { MainComponent } from "./types";
import { CircomExpressionVisitor } from "./CircomExpressionVisitor";

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

    ctx
      .args()
      .ID_list()
      .forEach((input) => {
        this.mainComponentInfo.publicInputs.push(input.getText());
      });

    const expressionVisitor = new CircomExpressionVisitor();

    ctx
      .expressionList()
      .expression_list()
      .forEach((expression) => {
        this.mainComponentInfo.parameters.push(
          expressionVisitor.visitExpression(expression),
        );
      });
  };
}
