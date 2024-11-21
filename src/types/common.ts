export type CircomValueType = bigint | CircomValueType[];

export type VariableContext = Record<string, CircomValueType>;

export type VariableContextWithNull = Record<string, CircomValueType | null>;
