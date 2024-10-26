import { CircomValueType } from "../../src";

export type MainComponent = {
  templateName: string | null;
  publicInputs: string[];
  parameters: CircomValueType[];
};

export type PragmaComponent = { isCustom: boolean; compilerVersion: string };

export type InputData = {
  dimension: string[];
  type: string;
};

export type Template = {
  inputs: Record<string, InputData>;
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
