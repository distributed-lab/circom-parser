#!/usr/bin/env node

import * as fs from "fs";
import * as antlr4 from "antlr4"
import CircomLexer from "./parser/CircomLexer";
import CircomParser, {SignalDeclarationContext, TemplateDeclarationContext} from "./parser/CircomParser";
import CircomVisitor from "./parser/CircomVisitor";


type Template = {
    inputs: { name: string; dimension: string[] }[];
    parameters: string[];
};

type Templates = {
    [key: string]: Template;
};

class TemplateExtractor extends CircomVisitor<void> {
    templates: Templates;
    currentTemplate: string | null;

    constructor() {
        super();
        this.templates = {};
        this.currentTemplate = null;
    }

    visitTemplateDeclaration = (ctx: TemplateDeclarationContext) => {
        this.currentTemplate = ctx.ID().getText();

        const parameters: string[] = [];
        ctx.args_list().forEach(argCtx => {
            argCtx.ID_list().forEach(arg => {
                parameters.push(arg.getText());
            })
        });

        this.templates[this.currentTemplate] = {
            inputs: [],
            parameters: parameters
        };

        ctx.statement_list().forEach(stmt => {
            this.visitChildren(stmt);
        });

        this.currentTemplate = null;

        return this.visitChildren(ctx);
    }


    visitSignalDeclaration = (ctx: SignalDeclarationContext) => {
        if (this.currentTemplate) {
            const signalDefinition = ctx.signalDefinition();

            if (signalDefinition.SIGNAL_TYPE()?.getText() === "input") {
                const inputDimension: string[] = [];

                signalDefinition.arrayDimension_list().forEach(dimension => {
                    inputDimension.push(dimension.getText().slice(1, -1));
                })

                this.templates[this.currentTemplate].inputs.push({
                    name: signalDefinition.ID().getText(),
                    dimension: inputDimension
                });

                const inputs = ctx.getText().split(",")
                inputs.shift();

                const regex = /(\w+)((\[\w+])*)/;

                inputs.forEach(inputString => {
                    const match = regex.exec(inputString);
                    if (match) {
                        const inputName = match[1];
                        const dimensions = match[2].match(/\[\w+]/g) || [];
                        const dimensionValues = dimensions.map(d => d.slice(1, -1));

                        this.templates[this.currentTemplate!].inputs.push({
                            name: inputName,
                            dimension: dimensionValues
                        });
                    }
                });
            }
        }

        return this.visitChildren(ctx);
    }
}

export function parseTemplates(filePath: string): Templates {
    const input = fs.readFileSync(filePath, "utf8");
    const chars = antlr4.CharStreams.fromString(input);
    const lexer = new CircomLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CircomParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.circuit();

    const extractor = new TemplateExtractor();
    extractor.visit(tree);
    return extractor.templates;
}
