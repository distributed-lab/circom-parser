# Circom Parser

A TypeScript package for parsing [Circom](https://docs.circom.io) code using [ANTLR (ANother Tool for Language Recognition)](https://github.com/distributed-lab/circom-g4-grammar) grammar.

It includes built-in visitors and utilities that allow you to parse, traverse, and manipulate Circom circuits.

## Installation

```bash
npm install @distributedlab/circom-parser
```

## Usage

### Custom Visitor Creation

To create your own visitor, simply extend the CircomVisitor class and override the visit methods you need.

```typescript
import { CircomVisitor, AnyRuleContext } from '@distributed-lab/circom-parser';

export default class MyCircomVisitor extends CircomVisitor {
    visitAnyRule = (ctx: AnyRuleContext) => {
        // override the visit logic here
    }
}
```

### Custom Visitor Usage

After creating your custom visitor, you can use it with the CircomParser to traverse and manipulate the parse tree.

```typescript
import { getCircomParser, ParserError } from '@distributed-lab/circom-parser';

import { MyCircomVisitor } from './MyCircomVisitor';

const { parser, errorListener } = getCircomParser(source);

const templateVisitor = new MyCircomVisitor();

templateVisitor.visit(parser.circuit());

if (errorListener.hasErrors()) {
    throw new ParserError(errorListener.getErrors());
}
```
