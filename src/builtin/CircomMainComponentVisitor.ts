import {
  ComponentMainDeclarationContext,
  FunctionBlockContext,
} from "../generated/CircomParser";
import CircomVisitor from "../generated/CircomVisitor";
import { MainComponent } from "./types";
import { CircomExpressionVisitor } from "./CircomExpressionVisitor";
import { CircomFunctionEvaluatorVisitor } from "./CircomFunctionEvaluatorVisitor";

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

    const expressionVisitor = new CircomExpressionVisitor(false);

    ctx
      .expressionList()
      .expression_list()
      .forEach((expression) => {
        this.mainComponentInfo.parameters.push(
          expressionVisitor.visitExpression(expression),
        );
      });
  };

  // example
  visitFunctionBlock = (ctx: FunctionBlockContext) => {
    const evaluator = new CircomFunctionEvaluatorVisitor();

    evaluator.evalFunction(ctx, {
      a: {
        value: 10n,
        dimensions: [],
      },
      a2: {
        value: 3n,
        dimensions: [],
      },
    });

    // function replacer(key: any, value: any) {
    //   if (
    //     typeof value === "bigint" &&
    //     value <= BigInt(Number.MAX_SAFE_INTEGER) &&
    //     value >= BigInt(Number.MIN_SAFE_INTEGER)
    //   ) {
    //     return Number(value);
    //   } else if (typeof value === "bigint") {
    //     return value.toString() + "n";
    //   } else {
    //     return value;
    //   }
    // }
    //
    // console.log(JSON.stringify(evaluator.variables, replacer, 2));
  };
}
