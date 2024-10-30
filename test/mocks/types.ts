import { CircomValueType, ParserErrorItem, ParserRuleContext } from "../../src";

export enum ErrorType {
  SignalDimensionResolution,
  TemplateAlreadyUsed,
  InvalidPragmaVersion,
  FailedToResolveMainComponentParameter,
  InternalParsingError,
}

export type CircuitResolutionError = {
  type: ErrorType;
  fileIdentifier: string;
  context: ParserRuleContext;
  message?: string;
  templateIdentifier?: string;
  linkedParserErrors?: ParserErrorItem[];
};

export type MainComponent = {
  templateName: string | null;
  publicInputs: string[];
  parameters: CircomValueType[];
};

export type PragmaComponent = { isCustom: boolean; compilerVersion: string };

export type Template = {
  parameters: string[];
  isCustom: boolean;
  parallel: boolean;
};

export type Templates = {
  [key: string]: Template;
};

export type CircomFileData = {
  pragmaInfo: PragmaComponent;
  includes: string[];
  mainComponentInfo: MainComponent;
  templates: Templates;
};
