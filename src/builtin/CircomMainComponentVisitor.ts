import { ComponentMainDeclarationContext } from "../generated/CircomParser";
import CircomVisitor from "../generated/CircomVisitor";
import { MainComponent } from "./types";

export class CircomMainComponentVisitor extends CircomVisitor<void> {
  mainComponentInfo: MainComponent;

  constructor() {
    super();
    this.mainComponentInfo = {
      templateName: null,
      publicInputs: [],
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
  };
}
