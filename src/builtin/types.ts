export type Template = {
  inputs: { name: string; dimension: string[]; type: string }[];
  parameters: string[];
};

export type Templates = {
  [key: string]: Template;
};

export type BigIntOrNestedArray = bigint | BigIntOrNestedArray[];

export type Variables = {
  [key: string]: {
    value: BigIntOrNestedArray | null;
    dimensions: number[];
  };
};

export type MainComponent = {
  templateName: string | null;
  publicInputs: string[];
  parameters: BigIntOrNestedArray[];
};
