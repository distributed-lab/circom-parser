# Circom Parser

A TypeScript package for parsing [Circom](https://docs.circom.io/circom-language/signals/) code using [ANTLR (ANother Tool for Language Recognition)](https://github.com/distributed-lab/circom-g4-grammar) grammar.

It includes built-in visitors and utilities that allow you to parse, traverse, and manipulate Circom circuits.

## Installation

```bash
npm install @solarity/circom-parser
```

## Usage

### Custom Visitor Creation
To create your own visitor, simply extend the CircomVisitor class and override the visit methods you need.
```typescript
import { CircomVisitor, AnyRuleContext } from 'circom-parser';

export default class MyCircomVisitor extends CircomVisitor {
    visitAnyRule = (ctx: AnyRuleContext) => {
        // override the visit logic here
    }
}
```

### Custom Visitor Usage
After creating your custom visitor, you can use it with the CircomParser to traverse and manipulate the parse tree.
```typescript
import { getCircomParser, ParserError } from 'circom-parser';
import { MyCircomVisitor } from './MyCircomVisitor';

const { parser, errorListener } = getCircomParser(source);

const templateVisitor = new MyCircomVisitor();

templateVisitor.visit(parser.circuit());

if (errorListener.hasErrors()) {
    throw new ParserError(errorListener.getErrors());
}
```

## Reference: Built-in Visitors

You can use the built-in visitors provided in this package as a reference or starting point for your own implementations:
- [CircomTemplateVisitor](./src/builtin/CircomTemplateVisitor.ts)
- [CircomIncludeVisitor](./src/builtin/CircomIncludeVisitor.ts)
- [CircomMainComponentVisitor](./src/builtin/CircomMainComponentVisitor.ts)
- [CircomExpressionVisitor](./src/builtin/CircomExpressionVisitor.ts)

## Known limitations

1. Function calls inside main component declaration or expressions are not supported
2. Currently, all 'simple' expressions are evaluated as-is, without account for the module