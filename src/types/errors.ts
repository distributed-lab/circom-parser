export type ParserErrorItem = {
  templateName: string | null;
  message: string;
  line: number;
  column: number;
};
