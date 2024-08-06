export type Template = {
  inputs: { name: string; dimension: string[]; type: string }[];
  parameters: string[];
};

export type Templates = {
  [key: string]: Template;
};
