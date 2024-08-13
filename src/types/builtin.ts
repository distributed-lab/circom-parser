export type Template = {
  inputs: { name: string; dimension: string[]; type: string }[];
  parameters: string[];
  isCustom: boolean;
};

export type Templates = {
  [key: string]: Template;
};

export type BigIntOrNestedArray = bigint | BigIntOrNestedArray[];

export type Variables = {
  [key: string]: {
    value: BigIntOrNestedArray;
    dimensions: number[];
  };
};

export type MainComponent = {
  templateName: string | null;
  publicInputs: string[];
  parameters: BigIntOrNestedArray[];
};

export type PragmaComponent = { isCustom: boolean; compilerVersion: string };
