#!/usr/bin/env node

import { parseTemplates } from "./templateExtractor";
import * as ejs from "ejs";
import * as fs from "fs";


type Template = {
    parameters: string[];
    inputs: { name: string }[];
};

type NestedNumberArray = number | NestedNumberArray[];

type Args = {
    parameters: NestedNumberArray[];
    inputs: string[];
    templateFile: string;
    templateName: string;
    outputFile: string;
};

function validateArgs(args: Args) {
    if (!args.templateFile || !args.templateName) {
        throw new Error("Template file and template name must be specified");
    }

    const template: Template = parseTemplates(args.templateFile)[args.templateName];
    // console.log(JSON.stringify(parseTemplates(args.templateFile), null, 2))

    if (args.parameters.length !== template.parameters.length) {
        throw new Error("Incorrect number of parameters specified");
    }

    const checkArrayNumbers = (inputs: NestedNumberArray[], Q: number): boolean => {
        return inputs.every(element => {
            if (Array.isArray(element)) {
                return checkArrayNumbers(element, Q);
            } else {
                return !isNaN(element) && element < Q;
            }
        });
    }

    if (!checkArrayNumbers(args.parameters, 100)) {
        throw new Error("Invalid parameters are passed");
    }

    const templateInputNames = template.inputs.map((input: { name: string }) => input.name);

    args.inputs.forEach(inputName => {
        if (!templateInputNames.includes(inputName)) {
            throw new Error(`There is no input signal ${inputName} found for the template ${args.templateName}`)
        }
    });
}

function main() {
    // const args = parseArgs(process.argv.slice(2));
    // const args = {
    //     parameters: [2, 4, [17, 2, [14, 5]]],
    //     inputs: ["in", "in2"],
    //     templateFile: "data/Example.circom",
    //     templateName: "B",
    //     outputFile: "./output/Output.circom"
    // }

    const args = {
        parameters: [[2, 4, 8], 10],
        inputs: ["b", "c"],
        templateFile: "data/Example.circom",
        templateName: "A",
        outputFile: "./output/Output.circom"
    }

    validateArgs(args);

    ejs.renderFile("./templates/circom-main-component.ejs", args, (err: Error | null, str: string) => {
        if (err) {
            console.error("Error rendering EJS template:", err);
            process.exit(1);
        }

        fs.writeFileSync(args.outputFile, str);
    });
}

main()
