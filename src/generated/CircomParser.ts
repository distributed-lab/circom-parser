// Generated from parser/CircomParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  DecisionState,
  DFA,
  FailedPredicateException,
  RecognitionException,
  NoViableAltException,
  BailErrorStrategy,
  Parser,
  ParserATNSimulator,
  RuleContext,
  ParserRuleContext,
  PredictionMode,
  PredictionContextCache,
  TerminalNode,
  RuleNode,
  Token,
  TokenStream,
  Interval,
  IntervalSet,
} from "antlr4";
import CircomParserListener from "./CircomParserListener.js";
import CircomParserVisitor from "./CircomParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CircomParser extends Parser {
  public static readonly VERSION = 1;
  public static readonly SIGNAL_TYPE = 2;
  public static readonly PRAGMA = 3;
  public static readonly CIRCOM = 4;
  public static readonly CUSTOM_TEMPLATES = 5;
  public static readonly INCLUDE = 6;
  public static readonly CUSTOM = 7;
  public static readonly PARALLEL = 8;
  public static readonly BUS = 9;
  public static readonly TEMPLATE = 10;
  public static readonly FUNCTION = 11;
  public static readonly MAIN = 12;
  public static readonly PUBLIC = 13;
  public static readonly COMPONENT = 14;
  public static readonly VAR = 15;
  public static readonly SIGNAL = 16;
  public static readonly INPUT = 17;
  public static readonly OUTPUT = 18;
  public static readonly IF = 19;
  public static readonly ELSE = 20;
  public static readonly FOR = 21;
  public static readonly WHILE = 22;
  public static readonly DO = 23;
  public static readonly LOG = 24;
  public static readonly ASSERT = 25;
  public static readonly RETURN = 26;
  public static readonly LP = 27;
  public static readonly RP = 28;
  public static readonly LB = 29;
  public static readonly RB = 30;
  public static readonly LC = 31;
  public static readonly RC = 32;
  public static readonly SEMICOLON = 33;
  public static readonly DOT = 34;
  public static readonly COMMA = 35;
  public static readonly UNDERSCORE = 36;
  public static readonly TERNARY_CONDITION = 37;
  public static readonly TERNARY_ALTERNATIVE = 38;
  public static readonly EQ_CONSTRAINT = 39;
  public static readonly LEFT_CONSTRAINT = 40;
  public static readonly LEFT_ASSIGNMENT = 41;
  public static readonly RIGHT_CONSTRAINT = 42;
  public static readonly RIGHT_ASSIGNMENT = 43;
  public static readonly SELF_OP = 44;
  public static readonly NOT = 45;
  public static readonly BNOT = 46;
  public static readonly POW = 47;
  public static readonly MUL = 48;
  public static readonly DIV = 49;
  public static readonly QUO = 50;
  public static readonly MOD = 51;
  public static readonly ADD = 52;
  public static readonly SUB = 53;
  public static readonly SHL = 54;
  public static readonly SHR = 55;
  public static readonly BAND = 56;
  public static readonly BXOR = 57;
  public static readonly BOR = 58;
  public static readonly EQ = 59;
  public static readonly NEQ = 60;
  public static readonly GT = 61;
  public static readonly LT = 62;
  public static readonly LE = 63;
  public static readonly GE = 64;
  public static readonly AND = 65;
  public static readonly OR = 66;
  public static readonly ASSIGNMENT = 67;
  public static readonly ASSIGNMENT_WITH_OP = 68;
  public static readonly ID = 69;
  public static readonly NUMBER = 70;
  public static readonly HEX = 71;
  public static readonly STRING = 72;
  public static readonly COMMENT = 73;
  public static readonly LINE_COMMENT = 74;
  public static readonly WS = 75;
  public static readonly EOF = Token.EOF;
  public static readonly RULE_circuit = 0;
  public static readonly RULE_signalHeader = 1;
  public static readonly RULE_busHeader = 2;
  public static readonly RULE_pragmaDefinition = 3;
  public static readonly RULE_includeDefinition = 4;
  public static readonly RULE_blockDefiniton = 5;
  public static readonly RULE_functionDefinition = 6;
  public static readonly RULE_templateDefinition = 7;
  public static readonly RULE_busDefinition = 8;
  public static readonly RULE_publicInputsDefinition = 9;
  public static readonly RULE_tagDefinition = 10;
  public static readonly RULE_logDefinition = 11;
  public static readonly RULE_assertDefinition = 12;
  public static readonly RULE_declarations = 13;
  public static readonly RULE_varDeclaration = 14;
  public static readonly RULE_signalDeclaration = 15;
  public static readonly RULE_componentDeclaration = 16;
  public static readonly RULE_busDeclaration = 17;
  public static readonly RULE_componentMainDeclaration = 18;
  public static readonly RULE_body = 19;
  public static readonly RULE_statements = 20;
  public static readonly RULE_ifStatements = 21;
  public static readonly RULE_regularStatements = 22;
  public static readonly RULE_cycleStatements = 23;
  public static readonly RULE_substitutions = 24;
  public static readonly RULE_expressionList = 25;
  public static readonly RULE_expressionListWithNames = 26;
  public static readonly RULE_expression = 27;
  public static readonly RULE_primaryExpression = 28;
  public static readonly RULE_assignmentExpression = 29;
  public static readonly RULE_varIdentifier = 30;
  public static readonly RULE_varIdentifierList = 31;
  public static readonly RULE_signalIdentifier = 32;
  public static readonly RULE_signalIdentifierList = 33;
  public static readonly RULE_identifierStatement = 34;
  public static readonly RULE_identifier = 35;
  public static readonly RULE_identifierList = 36;
  public static readonly RULE_simpleIdentifierList = 37;
  public static readonly RULE_idetifierAccess = 38;
  public static readonly RULE_arrayDimension = 39;
  public static readonly RULE_identifierReferance = 40;
  public static readonly RULE_expressionOrString = 41;
  public static readonly RULE_expressionOrStringList = 42;
  public static readonly literalNames: (string | null)[] = [
    null,
    null,
    null,
    "'pragma'",
    "'circom'",
    "'custom_templates'",
    "'include'",
    "'custom'",
    "'parallel'",
    "'bus'",
    "'template'",
    "'function'",
    "'main'",
    "'public'",
    "'component'",
    "'var'",
    "'signal'",
    "'input'",
    "'output'",
    "'if'",
    "'else'",
    "'for'",
    "'while'",
    "'do'",
    "'log'",
    "'assert'",
    "'return'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "';'",
    "'.'",
    "','",
    "'_'",
    "'?'",
    "':'",
    "'==='",
    "'<=='",
    "'<--'",
    "'==>'",
    "'-->'",
    null,
    "'!'",
    "'~'",
    "'**'",
    "'*'",
    "'/'",
    "'\\'",
    "'%'",
    "'+'",
    "'-'",
    "'<<'",
    "'>>'",
    "'&'",
    "'^'",
    "'|'",
    "'=='",
    "'!='",
    "'>'",
    "'<'",
    "'<='",
    "'>='",
    "'&&'",
    "'||'",
    "'='",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    "VERSION",
    "SIGNAL_TYPE",
    "PRAGMA",
    "CIRCOM",
    "CUSTOM_TEMPLATES",
    "INCLUDE",
    "CUSTOM",
    "PARALLEL",
    "BUS",
    "TEMPLATE",
    "FUNCTION",
    "MAIN",
    "PUBLIC",
    "COMPONENT",
    "VAR",
    "SIGNAL",
    "INPUT",
    "OUTPUT",
    "IF",
    "ELSE",
    "FOR",
    "WHILE",
    "DO",
    "LOG",
    "ASSERT",
    "RETURN",
    "LP",
    "RP",
    "LB",
    "RB",
    "LC",
    "RC",
    "SEMICOLON",
    "DOT",
    "COMMA",
    "UNDERSCORE",
    "TERNARY_CONDITION",
    "TERNARY_ALTERNATIVE",
    "EQ_CONSTRAINT",
    "LEFT_CONSTRAINT",
    "LEFT_ASSIGNMENT",
    "RIGHT_CONSTRAINT",
    "RIGHT_ASSIGNMENT",
    "SELF_OP",
    "NOT",
    "BNOT",
    "POW",
    "MUL",
    "DIV",
    "QUO",
    "MOD",
    "ADD",
    "SUB",
    "SHL",
    "SHR",
    "BAND",
    "BXOR",
    "BOR",
    "EQ",
    "NEQ",
    "GT",
    "LT",
    "LE",
    "GE",
    "AND",
    "OR",
    "ASSIGNMENT",
    "ASSIGNMENT_WITH_OP",
    "ID",
    "NUMBER",
    "HEX",
    "STRING",
    "COMMENT",
    "LINE_COMMENT",
    "WS",
  ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "circuit",
    "signalHeader",
    "busHeader",
    "pragmaDefinition",
    "includeDefinition",
    "blockDefiniton",
    "functionDefinition",
    "templateDefinition",
    "busDefinition",
    "publicInputsDefinition",
    "tagDefinition",
    "logDefinition",
    "assertDefinition",
    "declarations",
    "varDeclaration",
    "signalDeclaration",
    "componentDeclaration",
    "busDeclaration",
    "componentMainDeclaration",
    "body",
    "statements",
    "ifStatements",
    "regularStatements",
    "cycleStatements",
    "substitutions",
    "expressionList",
    "expressionListWithNames",
    "expression",
    "primaryExpression",
    "assignmentExpression",
    "varIdentifier",
    "varIdentifierList",
    "signalIdentifier",
    "signalIdentifierList",
    "identifierStatement",
    "identifier",
    "identifierList",
    "simpleIdentifierList",
    "idetifierAccess",
    "arrayDimension",
    "identifierReferance",
    "expressionOrString",
    "expressionOrStringList",
  ];
  public get grammarFileName(): string {
    return "CircomParser.g4";
  }
  public get literalNames(): (string | null)[] {
    return CircomParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return CircomParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return CircomParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return CircomParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(
      this,
      CircomParser._ATN,
      CircomParser.DecisionsToDFA,
      new PredictionContextCache(),
    );
  }
  // @RuleVersion(0)
  public circuit(): CircuitContext {
    let localctx: CircuitContext = new CircuitContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 0, CircomParser.RULE_circuit);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 3) {
          {
            {
              this.state = 86;
              this.pragmaDefinition();
            }
          }
          this.state = 91;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 95;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 6) {
          {
            {
              this.state = 92;
              this.includeDefinition();
            }
          }
          this.state = 97;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0) {
          {
            {
              this.state = 98;
              this.blockDefiniton();
            }
          }
          this.state = 103;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 14) {
          {
            this.state = 104;
            this.componentMainDeclaration();
          }
        }

        this.state = 107;
        this.match(CircomParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public signalHeader(): SignalHeaderContext {
    let localctx: SignalHeaderContext = new SignalHeaderContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 2, CircomParser.RULE_signalHeader);
    let _la: number;
    try {
      this.state = 121;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 16:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 109;
            this.match(CircomParser.SIGNAL);
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 2) {
              {
                this.state = 110;
                this.match(CircomParser.SIGNAL_TYPE);
              }
            }

            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 31) {
              {
                this.state = 113;
                this.tagDefinition();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 116;
            this.match(CircomParser.SIGNAL_TYPE);
            this.state = 117;
            this.match(CircomParser.SIGNAL);
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 31) {
              {
                this.state = 118;
                this.tagDefinition();
              }
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public busHeader(): BusHeaderContext {
    let localctx: BusHeaderContext = new BusHeaderContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 4, CircomParser.RULE_busHeader);
    let _la: number;
    try {
      this.state = 157;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 123;
            this.match(CircomParser.ID);
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 2) {
              {
                this.state = 124;
                localctx._wireType = this.match(CircomParser.SIGNAL_TYPE);
              }
            }

            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 31) {
              {
                this.state = 127;
                this.tagDefinition();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 130;
            this.match(CircomParser.ID);
            this.state = 131;
            this.match(CircomParser.LP);
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 8) & ~0x1f) === 0 &&
                ((1 << (_la - 8)) & 271056897) !== 0) ||
              (((_la - 45) & ~0x1f) === 0 &&
                ((1 << (_la - 45)) & 50331907) !== 0)
            ) {
              {
                this.state = 132;
                localctx._parameters = this.expressionList();
              }
            }

            this.state = 135;
            this.match(CircomParser.RP);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 2) {
              {
                this.state = 136;
                localctx._wireType = this.match(CircomParser.SIGNAL_TYPE);
              }
            }

            this.state = 140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 31) {
              {
                this.state = 139;
                this.tagDefinition();
              }
            }
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 142;
            localctx._wireType = this.match(CircomParser.SIGNAL_TYPE);
            this.state = 143;
            this.match(CircomParser.ID);
            this.state = 145;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 31) {
              {
                this.state = 144;
                this.tagDefinition();
              }
            }
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 147;
            localctx._wireType = this.match(CircomParser.SIGNAL_TYPE);
            this.state = 148;
            this.match(CircomParser.ID);
            this.state = 149;
            this.match(CircomParser.LP);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 8) & ~0x1f) === 0 &&
                ((1 << (_la - 8)) & 271056897) !== 0) ||
              (((_la - 45) & ~0x1f) === 0 &&
                ((1 << (_la - 45)) & 50331907) !== 0)
            ) {
              {
                this.state = 150;
                localctx._parameters = this.expressionList();
              }
            }

            this.state = 153;
            this.match(CircomParser.RP);
            this.state = 155;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 31) {
              {
                this.state = 154;
                this.tagDefinition();
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public pragmaDefinition(): PragmaDefinitionContext {
    let localctx: PragmaDefinitionContext = new PragmaDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 6, CircomParser.RULE_pragmaDefinition);
    try {
      this.state = 169;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
        case 1:
          localctx = new PragmaVersionContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 159;
            this.match(CircomParser.PRAGMA);
            this.state = 160;
            this.match(CircomParser.CIRCOM);
            this.state = 161;
            this.match(CircomParser.VERSION);
            this.state = 162;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 2:
          localctx = new PragmaInvalidVersionContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 163;
            this.match(CircomParser.PRAGMA);
            this.state = 164;
            this.match(CircomParser.CIRCOM);
            this.state = 165;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new PragmaCustomTemplatesContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 166;
            this.match(CircomParser.PRAGMA);
            this.state = 167;
            this.match(CircomParser.CUSTOM_TEMPLATES);
            this.state = 168;
            this.match(CircomParser.SEMICOLON);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public includeDefinition(): IncludeDefinitionContext {
    let localctx: IncludeDefinitionContext = new IncludeDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 8, CircomParser.RULE_includeDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 171;
        this.match(CircomParser.INCLUDE);
        this.state = 172;
        this.match(CircomParser.STRING);
        this.state = 173;
        this.match(CircomParser.SEMICOLON);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public blockDefiniton(): BlockDefinitonContext {
    let localctx: BlockDefinitonContext = new BlockDefinitonContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 10, CircomParser.RULE_blockDefiniton);
    try {
      this.state = 178;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 11:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 175;
            this.functionDefinition();
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 176;
            this.templateDefinition();
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 177;
            this.busDefinition();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public functionDefinition(): FunctionDefinitionContext {
    let localctx: FunctionDefinitionContext = new FunctionDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 12, CircomParser.RULE_functionDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 180;
        this.match(CircomParser.FUNCTION);
        this.state = 181;
        this.match(CircomParser.ID);
        this.state = 182;
        this.match(CircomParser.LP);
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 69) {
          {
            this.state = 183;
            localctx._argNames = this.simpleIdentifierList();
          }
        }

        this.state = 186;
        this.match(CircomParser.RP);
        this.state = 187;
        this.body();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public templateDefinition(): TemplateDefinitionContext {
    let localctx: TemplateDefinitionContext = new TemplateDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 14, CircomParser.RULE_templateDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 189;
        this.match(CircomParser.TEMPLATE);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 7) {
          {
            this.state = 190;
            this.match(CircomParser.CUSTOM);
          }
        }

        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 8) {
          {
            this.state = 193;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 196;
        this.match(CircomParser.ID);
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 27) {
          {
            this.state = 197;
            this.match(CircomParser.LP);
            this.state = 199;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 69) {
              {
                this.state = 198;
                localctx._argNames = this.simpleIdentifierList();
              }
            }

            this.state = 201;
            this.match(CircomParser.RP);
          }
        }

        this.state = 204;
        this.body();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public busDefinition(): BusDefinitionContext {
    let localctx: BusDefinitionContext = new BusDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 16, CircomParser.RULE_busDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 206;
        this.match(CircomParser.BUS);
        this.state = 207;
        this.match(CircomParser.ID);
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 27) {
          {
            this.state = 208;
            this.match(CircomParser.LP);
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 69) {
              {
                this.state = 209;
                localctx._argNames = this.simpleIdentifierList();
              }
            }

            this.state = 212;
            this.match(CircomParser.RP);
          }
        }

        this.state = 215;
        this.body();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public publicInputsDefinition(): PublicInputsDefinitionContext {
    let localctx: PublicInputsDefinitionContext =
      new PublicInputsDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CircomParser.RULE_publicInputsDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 217;
        this.match(CircomParser.LC);
        this.state = 218;
        this.match(CircomParser.PUBLIC);
        this.state = 219;
        this.match(CircomParser.LB);
        this.state = 220;
        localctx._publicInputs = this.simpleIdentifierList();
        this.state = 221;
        this.match(CircomParser.RB);
        this.state = 222;
        this.match(CircomParser.RC);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public tagDefinition(): TagDefinitionContext {
    let localctx: TagDefinitionContext = new TagDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 20, CircomParser.RULE_tagDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 224;
        this.match(CircomParser.LC);
        this.state = 225;
        localctx._values = this.simpleIdentifierList();
        this.state = 226;
        this.match(CircomParser.RC);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public logDefinition(): LogDefinitionContext {
    let localctx: LogDefinitionContext = new LogDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 22, CircomParser.RULE_logDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 228;
        this.match(CircomParser.LOG);
        this.state = 229;
        this.match(CircomParser.LP);
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 8) & ~0x1f) === 0 && ((1 << (_la - 8)) & 271056897) !== 0) ||
          (((_la - 45) & ~0x1f) === 0 && ((1 << (_la - 45)) & 184549635) !== 0)
        ) {
          {
            this.state = 230;
            localctx._logArgs = this.expressionOrStringList();
          }
        }

        this.state = 233;
        this.match(CircomParser.RP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assertDefinition(): AssertDefinitionContext {
    let localctx: AssertDefinitionContext = new AssertDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 24, CircomParser.RULE_assertDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 235;
        this.match(CircomParser.ASSERT);
        this.state = 236;
        this.match(CircomParser.LP);
        this.state = 237;
        localctx._assertArgs = this.expression(0);
        this.state = 238;
        this.match(CircomParser.RP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public declarations(): DeclarationsContext {
    let localctx: DeclarationsContext = new DeclarationsContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 26, CircomParser.RULE_declarations);
    try {
      this.state = 244;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 240;
            this.varDeclaration();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 241;
            this.signalDeclaration();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 242;
            this.componentDeclaration();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 243;
            this.busDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public varDeclaration(): VarDeclarationContext {
    let localctx: VarDeclarationContext = new VarDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 28, CircomParser.RULE_varDeclaration);
    let _la: number;
    try {
      this.state = 255;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 246;
            this.match(CircomParser.VAR);
            this.state = 247;
            this.match(CircomParser.LP);
            this.state = 248;
            this.identifierList();
            this.state = 249;
            this.match(CircomParser.RP);
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la - 40) & ~0x1f) === 0 &&
              ((1 << (_la - 40)) & 134217731) !== 0
            ) {
              {
                this.state = 250;
                this.assignmentExpression();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 253;
            this.match(CircomParser.VAR);
            this.state = 254;
            this.varIdentifierList();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public signalDeclaration(): SignalDeclarationContext {
    let localctx: SignalDeclarationContext = new SignalDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 30, CircomParser.RULE_signalDeclaration);
    let _la: number;
    try {
      this.state = 267;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 31, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 257;
            this.signalHeader();
            this.state = 258;
            this.match(CircomParser.LP);
            this.state = 259;
            this.identifierList();
            this.state = 260;
            this.match(CircomParser.RP);
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la - 40) & ~0x1f) === 0 &&
              ((1 << (_la - 40)) & 134217731) !== 0
            ) {
              {
                this.state = 261;
                this.assignmentExpression();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 264;
            this.signalHeader();
            this.state = 265;
            this.signalIdentifierList();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public componentDeclaration(): ComponentDeclarationContext {
    let localctx: ComponentDeclarationContext = new ComponentDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 32, CircomParser.RULE_componentDeclaration);
    let _la: number;
    try {
      this.state = 278;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 33, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 269;
            this.match(CircomParser.COMPONENT);
            this.state = 270;
            this.match(CircomParser.LP);
            this.state = 271;
            this.identifierList();
            this.state = 272;
            this.match(CircomParser.RP);
            this.state = 274;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la - 40) & ~0x1f) === 0 &&
              ((1 << (_la - 40)) & 134217731) !== 0
            ) {
              {
                this.state = 273;
                this.assignmentExpression();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 276;
            this.match(CircomParser.COMPONENT);
            this.state = 277;
            this.varIdentifierList();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public busDeclaration(): BusDeclarationContext {
    let localctx: BusDeclarationContext = new BusDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 34, CircomParser.RULE_busDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 280;
        this.busHeader();
        this.state = 281;
        this.signalIdentifierList();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public componentMainDeclaration(): ComponentMainDeclarationContext {
    let localctx: ComponentMainDeclarationContext =
      new ComponentMainDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CircomParser.RULE_componentMainDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 283;
        this.match(CircomParser.COMPONENT);
        this.state = 284;
        this.match(CircomParser.MAIN);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 31) {
          {
            this.state = 285;
            this.publicInputsDefinition();
          }
        }

        this.state = 288;
        this.match(CircomParser.ASSIGNMENT);
        this.state = 289;
        this.match(CircomParser.ID);
        this.state = 290;
        this.match(CircomParser.LP);
        this.state = 292;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 8) & ~0x1f) === 0 && ((1 << (_la - 8)) & 271056897) !== 0) ||
          (((_la - 45) & ~0x1f) === 0 && ((1 << (_la - 45)) & 50331907) !== 0)
        ) {
          {
            this.state = 291;
            localctx._argValues = this.expressionList();
          }
        }

        this.state = 294;
        this.match(CircomParser.RP);
        this.state = 295;
        this.match(CircomParser.SEMICOLON);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public body(): BodyContext {
    let localctx: BodyContext = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CircomParser.RULE_body);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 297;
        this.match(CircomParser.LC);
        this.state = 301;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 2942943492) !== 0) ||
          (((_la - 36) & ~0x1f) === 0 && ((1 << (_la - 36)) & 132865) !== 0) ||
          _la === 69 ||
          _la === 70
        ) {
          {
            {
              this.state = 298;
              this.statements();
            }
          }
          this.state = 303;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 304;
        this.match(CircomParser.RC);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public statements(): StatementsContext {
    let localctx: StatementsContext = new StatementsContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 40, CircomParser.RULE_statements);
    try {
      this.state = 317;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 37, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 306;
            this.declarations();
            this.state = 307;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 309;
            this.ifStatements();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 310;
            this.regularStatements();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 311;
            this.logDefinition();
            this.state = 312;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 314;
            this.assertDefinition();
            this.state = 315;
            this.match(CircomParser.SEMICOLON);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ifStatements(): IfStatementsContext {
    let localctx: IfStatementsContext = new IfStatementsContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 42, CircomParser.RULE_ifStatements);
    try {
      this.state = 347;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
        case 1:
          localctx = new IfWithFollowUpIfContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 319;
            this.match(CircomParser.IF);
            this.state = 320;
            this.match(CircomParser.LP);
            this.state = 321;
            (localctx as IfWithFollowUpIfContext)._cond = this.expression(0);
            this.state = 322;
            this.match(CircomParser.RP);
            this.state = 323;
            this.ifStatements();
          }
          break;
        case 2:
          localctx = new IfRegularContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 325;
            this.match(CircomParser.IF);
            this.state = 326;
            this.match(CircomParser.LP);
            this.state = 327;
            (localctx as IfRegularContext)._cond = this.expression(0);
            this.state = 328;
            this.match(CircomParser.RP);
            this.state = 329;
            this.regularStatements();
          }
          break;
        case 3:
          localctx = new IfRegularElseWithFollowUpIfContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 331;
            this.match(CircomParser.IF);
            this.state = 332;
            this.match(CircomParser.LP);
            this.state = 333;
            (localctx as IfRegularElseWithFollowUpIfContext)._cond =
              this.expression(0);
            this.state = 334;
            this.match(CircomParser.RP);
            this.state = 335;
            this.regularStatements();
            this.state = 336;
            this.match(CircomParser.ELSE);
            this.state = 337;
            this.ifStatements();
          }
          break;
        case 4:
          localctx = new IfRegularElseRegularContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 339;
            this.match(CircomParser.IF);
            this.state = 340;
            this.match(CircomParser.LP);
            this.state = 341;
            (localctx as IfRegularElseRegularContext)._cond =
              this.expression(0);
            this.state = 342;
            this.match(CircomParser.RP);
            this.state = 343;
            this.regularStatements();
            this.state = 344;
            this.match(CircomParser.ELSE);
            this.state = 345;
            this.regularStatements();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regularStatements(): RegularStatementsContext {
    let localctx: RegularStatementsContext = new RegularStatementsContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 44, CircomParser.RULE_regularStatements);
    try {
      this.state = 366;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
        case 1:
          localctx = new RStatementBodyContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 349;
            this.body();
          }
          break;
        case 2:
          localctx = new RStatementExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 350;
            this.expression(0);
            this.state = 351;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new RStatementSucstitutionsContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 353;
            this.substitutions();
            this.state = 354;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          localctx = new RStatementCyclesContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 356;
            this.cycleStatements();
          }
          break;
        case 5:
          localctx = new RStatementEqConstraintContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 357;
            (localctx as RStatementEqConstraintContext)._lhs =
              this.expression(0);
            this.state = 358;
            this.match(CircomParser.EQ_CONSTRAINT);
            this.state = 359;
            (localctx as RStatementEqConstraintContext)._rhs =
              this.expression(0);
            this.state = 360;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          localctx = new RStatementReturnContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 362;
            this.match(CircomParser.RETURN);
            this.state = 363;
            (localctx as RStatementReturnContext)._value = this.expression(0);
            this.state = 364;
            this.match(CircomParser.SEMICOLON);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public cycleStatements(): CycleStatementsContext {
    let localctx: CycleStatementsContext = new CycleStatementsContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 46, CircomParser.RULE_cycleStatements);
    try {
      this.state = 394;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
        case 1:
          localctx = new CycleForWithDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 368;
            this.match(CircomParser.FOR);
            this.state = 369;
            this.match(CircomParser.LP);
            this.state = 370;
            this.declarations();
            this.state = 371;
            this.match(CircomParser.SEMICOLON);
            this.state = 372;
            (localctx as CycleForWithDeclarationContext)._cond =
              this.expression(0);
            this.state = 373;
            this.match(CircomParser.SEMICOLON);
            this.state = 374;
            (localctx as CycleForWithDeclarationContext)._step =
              this.substitutions();
            this.state = 375;
            this.match(CircomParser.RP);
            this.state = 376;
            (localctx as CycleForWithDeclarationContext)._forBody =
              this.regularStatements();
          }
          break;
        case 2:
          localctx = new CycleForWithoutDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 378;
            this.match(CircomParser.FOR);
            this.state = 379;
            this.match(CircomParser.LP);
            this.state = 380;
            this.substitutions();
            this.state = 381;
            this.match(CircomParser.SEMICOLON);
            this.state = 382;
            (localctx as CycleForWithoutDeclarationContext)._cond =
              this.expression(0);
            this.state = 383;
            this.match(CircomParser.SEMICOLON);
            this.state = 384;
            (localctx as CycleForWithoutDeclarationContext)._step =
              this.substitutions();
            this.state = 385;
            this.match(CircomParser.RP);
            this.state = 386;
            (localctx as CycleForWithoutDeclarationContext)._forBody =
              this.regularStatements();
          }
          break;
        case 3:
          localctx = new CycleWhileContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 388;
            this.match(CircomParser.WHILE);
            this.state = 389;
            this.match(CircomParser.LP);
            this.state = 390;
            (localctx as CycleWhileContext)._cond = this.expression(0);
            this.state = 391;
            this.match(CircomParser.RP);
            this.state = 392;
            (localctx as CycleWhileContext)._stmt = this.regularStatements();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public substitutions(): SubstitutionsContext {
    let localctx: SubstitutionsContext = new SubstitutionsContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 48, CircomParser.RULE_substitutions);
    let _la: number;
    try {
      this.state = 417;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 41, this._ctx)) {
        case 1:
          localctx = new SubsLeftAssignmentContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 396;
            (localctx as SubsLeftAssignmentContext)._lhs = this.expression(0);
            this.state = 397;
            (localctx as SubsLeftAssignmentContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(
                ((_la - 40) & ~0x1f) === 0 &&
                ((1 << (_la - 40)) & 134217731) !== 0
              )
            ) {
              (localctx as SubsLeftAssignmentContext)._op =
                this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 398;
            (localctx as SubsLeftAssignmentContext)._rhs = this.expression(0);
          }
          break;
        case 2:
          localctx = new SubsRightSimpleAssignmentContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 400;
            (localctx as SubsRightSimpleAssignmentContext)._lhs =
              this.expression(0);
            this.state = 401;
            (localctx as SubsRightSimpleAssignmentContext)._op = this.match(
              CircomParser.RIGHT_ASSIGNMENT,
            );
            this.state = 402;
            (localctx as SubsRightSimpleAssignmentContext)._variable =
              this.expression(0);
          }
          break;
        case 3:
          localctx = new SubsRightConstrAssignmentContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 404;
            (localctx as SubsRightConstrAssignmentContext)._lhs =
              this.expression(0);
            this.state = 405;
            (localctx as SubsRightConstrAssignmentContext)._op = this.match(
              CircomParser.RIGHT_CONSTRAINT,
            );
            this.state = 406;
            (localctx as SubsRightConstrAssignmentContext)._variable =
              this.expression(0);
          }
          break;
        case 4:
          localctx = new SubsAssignmentWithOperationContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 408;
            this.identifierStatement();
            this.state = 409;
            (localctx as SubsAssignmentWithOperationContext)._op = this.match(
              CircomParser.ASSIGNMENT_WITH_OP,
            );
            this.state = 410;
            (localctx as SubsAssignmentWithOperationContext)._rhs =
              this.expression(0);
          }
          break;
        case 5:
          localctx = new SubsIcnDecOperationContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 412;
            this.identifierStatement();
            this.state = 413;
            this.match(CircomParser.SELF_OP);
          }
          break;
        case 6:
          localctx = new SubsInvalidIcnDecOperationContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 415;
            this.match(CircomParser.SELF_OP);
            this.state = 416;
            this.identifierStatement();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionList(): ExpressionListContext {
    let localctx: ExpressionListContext = new ExpressionListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 50, CircomParser.RULE_expressionList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 424;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 419;
                this.expression(0);
                this.state = 420;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 426;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
        }
        this.state = 427;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionListWithNames(): ExpressionListWithNamesContext {
    let localctx: ExpressionListWithNamesContext =
      new ExpressionListWithNamesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, CircomParser.RULE_expressionListWithNames);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 436;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 429;
                this.match(CircomParser.ID);
                this.state = 430;
                localctx._ops = this._input.LT(1);
                _la = this._input.LA(1);
                if (
                  !(
                    ((_la - 40) & ~0x1f) === 0 &&
                    ((1 << (_la - 40)) & 134217731) !== 0
                  )
                ) {
                  localctx._ops = this._errHandler.recoverInline(this);
                } else {
                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 431;
                this.expression(0);
                this.state = 432;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 438;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
        }
        this.state = 439;
        this.match(CircomParser.ID);
        this.state = 440;
        localctx._ops = this._input.LT(1);
        _la = this._input.LA(1);
        if (
          !(((_la - 40) & ~0x1f) === 0 && ((1 << (_la - 40)) & 134217731) !== 0)
        ) {
          localctx._ops = this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 441;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public expression(): ExpressionContext;
  public expression(_p: number): ExpressionContext;
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: ExpressionContext = new ExpressionContext(
      this,
      this._ctx,
      _parentState,
    );
    let _prevctx: ExpressionContext = localctx;
    let _startState: number = 54;
    this.enterRecursionRule(localctx, 54, CircomParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 449;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 27:
          case 29:
          case 36:
          case 69:
          case 70:
            {
              this.state = 444;
              this.primaryExpression();
            }
            break;
          case 45:
          case 46:
          case 53:
            {
              this.state = 445;
              localctx._op = this._input.LT(1);
              _la = this._input.LA(1);
              if (
                !(((_la - 45) & ~0x1f) === 0 && ((1 << (_la - 45)) & 259) !== 0)
              ) {
                localctx._op = this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 446;
              this.expression(13);
            }
            break;
          case 8:
            {
              this.state = 447;
              this.match(CircomParser.PARALLEL);
              this.state = 448;
              this.expression(1);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 489;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 487;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 45, this._ctx)
              ) {
                case 1:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 451;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 12)",
                      );
                    }
                    this.state = 452;
                    localctx._op = this.match(CircomParser.POW);
                    this.state = 453;
                    this.expression(13);
                  }
                  break;
                case 2:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 454;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 11)",
                      );
                    }
                    this.state = 455;
                    localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) & 15) !== 0
                      )
                    ) {
                      localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 456;
                    this.expression(12);
                  }
                  break;
                case 3:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 457;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 10)",
                      );
                    }
                    this.state = 458;
                    localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 52 || _la === 53)) {
                      localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 459;
                    this.expression(11);
                  }
                  break;
                case 4:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 460;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 9)",
                      );
                    }
                    this.state = 461;
                    localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 54 || _la === 55)) {
                      localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 462;
                    this.expression(10);
                  }
                  break;
                case 5:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 463;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 464;
                    localctx._op = this.match(CircomParser.BAND);
                    this.state = 465;
                    this.expression(9);
                  }
                  break;
                case 6:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 466;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 7)",
                      );
                    }
                    this.state = 467;
                    localctx._op = this.match(CircomParser.BXOR);
                    this.state = 468;
                    this.expression(8);
                  }
                  break;
                case 7:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 469;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 470;
                    localctx._op = this.match(CircomParser.BOR);
                    this.state = 471;
                    this.expression(7);
                  }
                  break;
                case 8:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 472;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 473;
                    localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 59) & ~0x1f) === 0 &&
                        ((1 << (_la - 59)) & 63) !== 0
                      )
                    ) {
                      localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 474;
                    this.expression(6);
                  }
                  break;
                case 9:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 475;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 476;
                    localctx._op = this.match(CircomParser.AND);
                    this.state = 477;
                    this.expression(5);
                  }
                  break;
                case 10:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 478;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 479;
                    localctx._op = this.match(CircomParser.OR);
                    this.state = 480;
                    this.expression(4);
                  }
                  break;
                case 11:
                  {
                    localctx = new ExpressionContext(
                      this,
                      _parentctx,
                      _parentState,
                    );
                    localctx._cond = _prevctx;
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 481;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 482;
                    this.match(CircomParser.TERNARY_CONDITION);
                    this.state = 483;
                    localctx._ifTrue = this.expression(0);
                    this.state = 484;
                    this.match(CircomParser.TERNARY_ALTERNATIVE);
                    this.state = 485;
                    localctx._ifFalse = this.expression(3);
                  }
                  break;
              }
            }
          }
          this.state = 491;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public primaryExpression(): PrimaryExpressionContext {
    let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 56, CircomParser.RULE_primaryExpression);
    let _la: number;
    try {
      this.state = 521;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          localctx = new PIdentifierStatementContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 492;
            this.identifierStatement();
          }
          break;
        case 2:
          localctx = new PUnderscoreContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 493;
            this.match(CircomParser.UNDERSCORE);
          }
          break;
        case 3:
          localctx = new PNumberContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 494;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          localctx = new PParenthesesContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 495;
            this.match(CircomParser.LP);
            this.state = 496;
            this.expressionList();
            this.state = 497;
            this.match(CircomParser.RP);
          }
          break;
        case 5:
          localctx = new PArrayContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 499;
            this.match(CircomParser.LB);
            this.state = 500;
            this.expressionList();
            this.state = 501;
            this.match(CircomParser.RB);
          }
          break;
        case 6:
          localctx = new PCallContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 503;
            this.match(CircomParser.ID);
            this.state = 504;
            this.match(CircomParser.LP);
            this.state = 506;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 8) & ~0x1f) === 0 &&
                ((1 << (_la - 8)) & 271056897) !== 0) ||
              (((_la - 45) & ~0x1f) === 0 &&
                ((1 << (_la - 45)) & 50331907) !== 0)
            ) {
              {
                this.state = 505;
                this.expressionList();
              }
            }

            this.state = 508;
            this.match(CircomParser.RP);
          }
          break;
        case 7:
          localctx = new PAnonymousCallContext(this, localctx);
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 509;
            this.match(CircomParser.ID);
            this.state = 510;
            this.match(CircomParser.LP);
            this.state = 512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 8) & ~0x1f) === 0 &&
                ((1 << (_la - 8)) & 271056897) !== 0) ||
              (((_la - 45) & ~0x1f) === 0 &&
                ((1 << (_la - 45)) & 50331907) !== 0)
            ) {
              {
                this.state = 511;
                this.expressionList();
              }
            }

            this.state = 514;
            this.match(CircomParser.RP);
            this.state = 515;
            this.match(CircomParser.LP);
            this.state = 518;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
              case 1:
                {
                  this.state = 516;
                  this.expressionList();
                }
                break;
              case 2:
                {
                  this.state = 517;
                  this.expressionListWithNames();
                }
                break;
            }
            this.state = 520;
            this.match(CircomParser.RP);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assignmentExpression(): AssignmentExpressionContext {
    let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 58, CircomParser.RULE_assignmentExpression);
    try {
      this.state = 529;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 40:
          localctx = new AssignExprConstraintContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 523;
            this.match(CircomParser.LEFT_CONSTRAINT);
            this.state = 524;
            (localctx as AssignExprConstraintContext)._rhs = this.expression(0);
          }
          break;
        case 41:
          localctx = new AssignExprSimpleContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 525;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 526;
            (localctx as AssignExprSimpleContext)._rhs = this.expression(0);
          }
          break;
        case 67:
          localctx = new AssignExprRegularContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 527;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 528;
            (localctx as AssignExprRegularContext)._rhs = this.expression(0);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public varIdentifier(): VarIdentifierContext {
    let localctx: VarIdentifierContext = new VarIdentifierContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 60, CircomParser.RULE_varIdentifier);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 531;
        this.identifier();
        this.state = 534;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 67) {
          {
            this.state = 532;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 533;
            localctx._rhs = this.expression(0);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public varIdentifierList(): VarIdentifierListContext {
    let localctx: VarIdentifierListContext = new VarIdentifierListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 62, CircomParser.RULE_varIdentifierList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 541;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 536;
                this.varIdentifier();
                this.state = 537;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 543;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
        }
        this.state = 544;
        this.varIdentifier();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public signalIdentifier(): SignalIdentifierContext {
    let localctx: SignalIdentifierContext = new SignalIdentifierContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 64, CircomParser.RULE_signalIdentifier);
    try {
      this.state = 555;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 54, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 546;
            this.identifier();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 547;
            this.identifier();
            this.state = 548;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 549;
            localctx._rhs = this.expression(0);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 551;
            this.identifier();
            this.state = 552;
            this.match(CircomParser.LEFT_CONSTRAINT);
            this.state = 553;
            localctx._rhs = this.expression(0);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public signalIdentifierList(): SignalIdentifierListContext {
    let localctx: SignalIdentifierListContext = new SignalIdentifierListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 66, CircomParser.RULE_signalIdentifierList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 562;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 557;
                this.signalIdentifier();
                this.state = 558;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 564;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
        }
        this.state = 565;
        this.signalIdentifier();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifierStatement(): IdentifierStatementContext {
    let localctx: IdentifierStatementContext = new IdentifierStatementContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 68, CircomParser.RULE_identifierStatement);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 567;
        this.match(CircomParser.ID);
        this.state = 571;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 568;
                this.idetifierAccess();
              }
            }
          }
          this.state = 573;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let localctx: IdentifierContext = new IdentifierContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 70, CircomParser.RULE_identifier);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 574;
        this.match(CircomParser.ID);
        this.state = 578;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 29) {
          {
            {
              this.state = 575;
              this.arrayDimension();
            }
          }
          this.state = 580;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifierList(): IdentifierListContext {
    let localctx: IdentifierListContext = new IdentifierListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 72, CircomParser.RULE_identifierList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 586;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 581;
                this.identifier();
                this.state = 582;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 588;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
        }
        this.state = 589;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public simpleIdentifierList(): SimpleIdentifierListContext {
    let localctx: SimpleIdentifierListContext = new SimpleIdentifierListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 74, CircomParser.RULE_simpleIdentifierList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 595;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 591;
                this.match(CircomParser.ID);
                this.state = 592;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 597;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
        }
        this.state = 598;
        this.match(CircomParser.ID);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public idetifierAccess(): IdetifierAccessContext {
    let localctx: IdetifierAccessContext = new IdetifierAccessContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 76, CircomParser.RULE_idetifierAccess);
    try {
      this.state = 602;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 29:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 600;
            this.arrayDimension();
          }
          break;
        case 34:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 601;
            this.identifierReferance();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public arrayDimension(): ArrayDimensionContext {
    let localctx: ArrayDimensionContext = new ArrayDimensionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 78, CircomParser.RULE_arrayDimension);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 604;
        this.match(CircomParser.LB);
        this.state = 605;
        this.expression(0);
        this.state = 606;
        this.match(CircomParser.RB);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifierReferance(): IdentifierReferanceContext {
    let localctx: IdentifierReferanceContext = new IdentifierReferanceContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 80, CircomParser.RULE_identifierReferance);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 608;
        this.match(CircomParser.DOT);
        this.state = 609;
        this.match(CircomParser.ID);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionOrString(): ExpressionOrStringContext {
    let localctx: ExpressionOrStringContext = new ExpressionOrStringContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 82, CircomParser.RULE_expressionOrString);
    try {
      this.state = 613;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 8:
        case 27:
        case 29:
        case 36:
        case 45:
        case 46:
        case 53:
        case 69:
        case 70:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 611;
            this.expression(0);
          }
          break;
        case 72:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 612;
            this.match(CircomParser.STRING);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionOrStringList(): ExpressionOrStringListContext {
    let localctx: ExpressionOrStringListContext =
      new ExpressionOrStringListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, CircomParser.RULE_expressionOrStringList);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 620;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 615;
                this.expressionOrString();
                this.state = 616;
                this.match(CircomParser.COMMA);
              }
            }
          }
          this.state = 622;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
        }
        this.state = 623;
        this.expressionOrString();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public sempred(
    localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 27:
        return this.expression_sempred(
          localctx as ExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private expression_sempred(
    localctx: ExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 12);
      case 1:
        return this.precpred(this._ctx, 11);
      case 2:
        return this.precpred(this._ctx, 10);
      case 3:
        return this.precpred(this._ctx, 9);
      case 4:
        return this.precpred(this._ctx, 8);
      case 5:
        return this.precpred(this._ctx, 7);
      case 6:
        return this.precpred(this._ctx, 6);
      case 7:
        return this.precpred(this._ctx, 5);
      case 8:
        return this.precpred(this._ctx, 4);
      case 9:
        return this.precpred(this._ctx, 3);
      case 10:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 75, 626, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7,
    38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 1, 0, 5, 0, 88,
    8, 0, 10, 0, 12, 0, 91, 9, 0, 1, 0, 5, 0, 94, 8, 0, 10, 0, 12, 0, 97, 9, 0,
    1, 0, 5, 0, 100, 8, 0, 10, 0, 12, 0, 103, 9, 0, 1, 0, 3, 0, 106, 8, 0, 1, 0,
    1, 0, 1, 1, 1, 1, 3, 1, 112, 8, 1, 1, 1, 3, 1, 115, 8, 1, 1, 1, 1, 1, 1, 1,
    3, 1, 120, 8, 1, 3, 1, 122, 8, 1, 1, 2, 1, 2, 3, 2, 126, 8, 2, 1, 2, 3, 2,
    129, 8, 2, 1, 2, 1, 2, 1, 2, 3, 2, 134, 8, 2, 1, 2, 1, 2, 3, 2, 138, 8, 2,
    1, 2, 3, 2, 141, 8, 2, 1, 2, 1, 2, 1, 2, 3, 2, 146, 8, 2, 1, 2, 1, 2, 1, 2,
    1, 2, 3, 2, 152, 8, 2, 1, 2, 1, 2, 3, 2, 156, 8, 2, 3, 2, 158, 8, 2, 1, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 170, 8, 3, 1, 4,
    1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 3, 5, 179, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6,
    3, 6, 185, 8, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 3, 7, 192, 8, 7, 1, 7, 3, 7,
    195, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 200, 8, 7, 1, 7, 3, 7, 203, 8, 7, 1, 7,
    1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 211, 8, 8, 1, 8, 3, 8, 214, 8, 8, 1, 8,
    1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 11, 1, 11, 1, 11, 3, 11, 232, 8, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12,
    1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 245, 8, 13, 1, 14, 1, 14,
    1, 14, 1, 14, 1, 14, 3, 14, 252, 8, 14, 1, 14, 1, 14, 3, 14, 256, 8, 14, 1,
    15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 263, 8, 15, 1, 15, 1, 15, 1, 15, 3,
    15, 268, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 275, 8, 16, 1, 16,
    1, 16, 3, 16, 279, 8, 16, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 3, 18,
    287, 8, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 293, 8, 18, 1, 18, 1, 18, 1,
    18, 1, 19, 1, 19, 5, 19, 300, 8, 19, 10, 19, 12, 19, 303, 9, 19, 1, 19, 1,
    19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1,
    20, 3, 20, 318, 8, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1,
    21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1,
    21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21,
    348, 8, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22,
    1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 3, 22, 367, 8, 22,
    1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23,
    1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23,
    1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 395, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24,
    1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24,
    1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 418, 8, 24, 1, 25, 1, 25,
    1, 25, 5, 25, 423, 8, 25, 10, 25, 12, 25, 426, 9, 25, 1, 25, 1, 25, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 5, 26, 435, 8, 26, 10, 26, 12, 26, 438, 9, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27,
    450, 8, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27,
    1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27,
    1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27,
    1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 488, 8, 27, 10, 27, 12, 27, 491,
    9, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28,
    1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 507, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28,
    3, 28, 513, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 519, 8, 28, 1, 28, 3,
    28, 522, 8, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 530, 8, 29,
    1, 30, 1, 30, 1, 30, 3, 30, 535, 8, 30, 1, 31, 1, 31, 1, 31, 5, 31, 540, 8,
    31, 10, 31, 12, 31, 543, 9, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1,
    32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 556, 8, 32, 1, 33, 1, 33, 1, 33, 5,
    33, 561, 8, 33, 10, 33, 12, 33, 564, 9, 33, 1, 33, 1, 33, 1, 34, 1, 34, 5,
    34, 570, 8, 34, 10, 34, 12, 34, 573, 9, 34, 1, 35, 1, 35, 5, 35, 577, 8, 35,
    10, 35, 12, 35, 580, 9, 35, 1, 36, 1, 36, 1, 36, 5, 36, 585, 8, 36, 10, 36,
    12, 36, 588, 9, 36, 1, 36, 1, 36, 1, 37, 1, 37, 5, 37, 594, 8, 37, 10, 37,
    12, 37, 597, 9, 37, 1, 37, 1, 37, 1, 38, 1, 38, 3, 38, 603, 8, 38, 1, 39, 1,
    39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 3, 41, 614, 8, 41, 1,
    42, 1, 42, 1, 42, 5, 42, 619, 8, 42, 10, 42, 12, 42, 622, 9, 42, 1, 42, 1,
    42, 1, 42, 0, 1, 54, 43, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26,
    28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,
    66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 0, 6, 2, 0, 40, 41, 67, 67, 2, 0,
    45, 46, 53, 53, 1, 0, 48, 51, 1, 0, 52, 53, 1, 0, 54, 55, 1, 0, 59, 64, 683,
    0, 89, 1, 0, 0, 0, 2, 121, 1, 0, 0, 0, 4, 157, 1, 0, 0, 0, 6, 169, 1, 0, 0,
    0, 8, 171, 1, 0, 0, 0, 10, 178, 1, 0, 0, 0, 12, 180, 1, 0, 0, 0, 14, 189, 1,
    0, 0, 0, 16, 206, 1, 0, 0, 0, 18, 217, 1, 0, 0, 0, 20, 224, 1, 0, 0, 0, 22,
    228, 1, 0, 0, 0, 24, 235, 1, 0, 0, 0, 26, 244, 1, 0, 0, 0, 28, 255, 1, 0, 0,
    0, 30, 267, 1, 0, 0, 0, 32, 278, 1, 0, 0, 0, 34, 280, 1, 0, 0, 0, 36, 283,
    1, 0, 0, 0, 38, 297, 1, 0, 0, 0, 40, 317, 1, 0, 0, 0, 42, 347, 1, 0, 0, 0,
    44, 366, 1, 0, 0, 0, 46, 394, 1, 0, 0, 0, 48, 417, 1, 0, 0, 0, 50, 424, 1,
    0, 0, 0, 52, 436, 1, 0, 0, 0, 54, 449, 1, 0, 0, 0, 56, 521, 1, 0, 0, 0, 58,
    529, 1, 0, 0, 0, 60, 531, 1, 0, 0, 0, 62, 541, 1, 0, 0, 0, 64, 555, 1, 0, 0,
    0, 66, 562, 1, 0, 0, 0, 68, 567, 1, 0, 0, 0, 70, 574, 1, 0, 0, 0, 72, 586,
    1, 0, 0, 0, 74, 595, 1, 0, 0, 0, 76, 602, 1, 0, 0, 0, 78, 604, 1, 0, 0, 0,
    80, 608, 1, 0, 0, 0, 82, 613, 1, 0, 0, 0, 84, 620, 1, 0, 0, 0, 86, 88, 3, 6,
    3, 0, 87, 86, 1, 0, 0, 0, 88, 91, 1, 0, 0, 0, 89, 87, 1, 0, 0, 0, 89, 90, 1,
    0, 0, 0, 90, 95, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 92, 94, 3, 8, 4, 0, 93, 92,
    1, 0, 0, 0, 94, 97, 1, 0, 0, 0, 95, 93, 1, 0, 0, 0, 95, 96, 1, 0, 0, 0, 96,
    101, 1, 0, 0, 0, 97, 95, 1, 0, 0, 0, 98, 100, 3, 10, 5, 0, 99, 98, 1, 0, 0,
    0, 100, 103, 1, 0, 0, 0, 101, 99, 1, 0, 0, 0, 101, 102, 1, 0, 0, 0, 102,
    105, 1, 0, 0, 0, 103, 101, 1, 0, 0, 0, 104, 106, 3, 36, 18, 0, 105, 104, 1,
    0, 0, 0, 105, 106, 1, 0, 0, 0, 106, 107, 1, 0, 0, 0, 107, 108, 5, 0, 0, 1,
    108, 1, 1, 0, 0, 0, 109, 111, 5, 16, 0, 0, 110, 112, 5, 2, 0, 0, 111, 110,
    1, 0, 0, 0, 111, 112, 1, 0, 0, 0, 112, 114, 1, 0, 0, 0, 113, 115, 3, 20, 10,
    0, 114, 113, 1, 0, 0, 0, 114, 115, 1, 0, 0, 0, 115, 122, 1, 0, 0, 0, 116,
    117, 5, 2, 0, 0, 117, 119, 5, 16, 0, 0, 118, 120, 3, 20, 10, 0, 119, 118, 1,
    0, 0, 0, 119, 120, 1, 0, 0, 0, 120, 122, 1, 0, 0, 0, 121, 109, 1, 0, 0, 0,
    121, 116, 1, 0, 0, 0, 122, 3, 1, 0, 0, 0, 123, 125, 5, 69, 0, 0, 124, 126,
    5, 2, 0, 0, 125, 124, 1, 0, 0, 0, 125, 126, 1, 0, 0, 0, 126, 128, 1, 0, 0,
    0, 127, 129, 3, 20, 10, 0, 128, 127, 1, 0, 0, 0, 128, 129, 1, 0, 0, 0, 129,
    158, 1, 0, 0, 0, 130, 131, 5, 69, 0, 0, 131, 133, 5, 27, 0, 0, 132, 134, 3,
    50, 25, 0, 133, 132, 1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134, 135, 1, 0, 0, 0,
    135, 137, 5, 28, 0, 0, 136, 138, 5, 2, 0, 0, 137, 136, 1, 0, 0, 0, 137, 138,
    1, 0, 0, 0, 138, 140, 1, 0, 0, 0, 139, 141, 3, 20, 10, 0, 140, 139, 1, 0, 0,
    0, 140, 141, 1, 0, 0, 0, 141, 158, 1, 0, 0, 0, 142, 143, 5, 2, 0, 0, 143,
    145, 5, 69, 0, 0, 144, 146, 3, 20, 10, 0, 145, 144, 1, 0, 0, 0, 145, 146, 1,
    0, 0, 0, 146, 158, 1, 0, 0, 0, 147, 148, 5, 2, 0, 0, 148, 149, 5, 69, 0, 0,
    149, 151, 5, 27, 0, 0, 150, 152, 3, 50, 25, 0, 151, 150, 1, 0, 0, 0, 151,
    152, 1, 0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 155, 5, 28, 0, 0, 154, 156, 3,
    20, 10, 0, 155, 154, 1, 0, 0, 0, 155, 156, 1, 0, 0, 0, 156, 158, 1, 0, 0, 0,
    157, 123, 1, 0, 0, 0, 157, 130, 1, 0, 0, 0, 157, 142, 1, 0, 0, 0, 157, 147,
    1, 0, 0, 0, 158, 5, 1, 0, 0, 0, 159, 160, 5, 3, 0, 0, 160, 161, 5, 4, 0, 0,
    161, 162, 5, 1, 0, 0, 162, 170, 5, 33, 0, 0, 163, 164, 5, 3, 0, 0, 164, 165,
    5, 4, 0, 0, 165, 170, 5, 33, 0, 0, 166, 167, 5, 3, 0, 0, 167, 168, 5, 5, 0,
    0, 168, 170, 5, 33, 0, 0, 169, 159, 1, 0, 0, 0, 169, 163, 1, 0, 0, 0, 169,
    166, 1, 0, 0, 0, 170, 7, 1, 0, 0, 0, 171, 172, 5, 6, 0, 0, 172, 173, 5, 72,
    0, 0, 173, 174, 5, 33, 0, 0, 174, 9, 1, 0, 0, 0, 175, 179, 3, 12, 6, 0, 176,
    179, 3, 14, 7, 0, 177, 179, 3, 16, 8, 0, 178, 175, 1, 0, 0, 0, 178, 176, 1,
    0, 0, 0, 178, 177, 1, 0, 0, 0, 179, 11, 1, 0, 0, 0, 180, 181, 5, 11, 0, 0,
    181, 182, 5, 69, 0, 0, 182, 184, 5, 27, 0, 0, 183, 185, 3, 74, 37, 0, 184,
    183, 1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 186, 1, 0, 0, 0, 186, 187, 5,
    28, 0, 0, 187, 188, 3, 38, 19, 0, 188, 13, 1, 0, 0, 0, 189, 191, 5, 10, 0,
    0, 190, 192, 5, 7, 0, 0, 191, 190, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192,
    194, 1, 0, 0, 0, 193, 195, 5, 8, 0, 0, 194, 193, 1, 0, 0, 0, 194, 195, 1, 0,
    0, 0, 195, 196, 1, 0, 0, 0, 196, 202, 5, 69, 0, 0, 197, 199, 5, 27, 0, 0,
    198, 200, 3, 74, 37, 0, 199, 198, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 200,
    201, 1, 0, 0, 0, 201, 203, 5, 28, 0, 0, 202, 197, 1, 0, 0, 0, 202, 203, 1,
    0, 0, 0, 203, 204, 1, 0, 0, 0, 204, 205, 3, 38, 19, 0, 205, 15, 1, 0, 0, 0,
    206, 207, 5, 9, 0, 0, 207, 213, 5, 69, 0, 0, 208, 210, 5, 27, 0, 0, 209,
    211, 3, 74, 37, 0, 210, 209, 1, 0, 0, 0, 210, 211, 1, 0, 0, 0, 211, 212, 1,
    0, 0, 0, 212, 214, 5, 28, 0, 0, 213, 208, 1, 0, 0, 0, 213, 214, 1, 0, 0, 0,
    214, 215, 1, 0, 0, 0, 215, 216, 3, 38, 19, 0, 216, 17, 1, 0, 0, 0, 217, 218,
    5, 31, 0, 0, 218, 219, 5, 13, 0, 0, 219, 220, 5, 29, 0, 0, 220, 221, 3, 74,
    37, 0, 221, 222, 5, 30, 0, 0, 222, 223, 5, 32, 0, 0, 223, 19, 1, 0, 0, 0,
    224, 225, 5, 31, 0, 0, 225, 226, 3, 74, 37, 0, 226, 227, 5, 32, 0, 0, 227,
    21, 1, 0, 0, 0, 228, 229, 5, 24, 0, 0, 229, 231, 5, 27, 0, 0, 230, 232, 3,
    84, 42, 0, 231, 230, 1, 0, 0, 0, 231, 232, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0,
    233, 234, 5, 28, 0, 0, 234, 23, 1, 0, 0, 0, 235, 236, 5, 25, 0, 0, 236, 237,
    5, 27, 0, 0, 237, 238, 3, 54, 27, 0, 238, 239, 5, 28, 0, 0, 239, 25, 1, 0,
    0, 0, 240, 245, 3, 28, 14, 0, 241, 245, 3, 30, 15, 0, 242, 245, 3, 32, 16,
    0, 243, 245, 3, 34, 17, 0, 244, 240, 1, 0, 0, 0, 244, 241, 1, 0, 0, 0, 244,
    242, 1, 0, 0, 0, 244, 243, 1, 0, 0, 0, 245, 27, 1, 0, 0, 0, 246, 247, 5, 15,
    0, 0, 247, 248, 5, 27, 0, 0, 248, 249, 3, 72, 36, 0, 249, 251, 5, 28, 0, 0,
    250, 252, 3, 58, 29, 0, 251, 250, 1, 0, 0, 0, 251, 252, 1, 0, 0, 0, 252,
    256, 1, 0, 0, 0, 253, 254, 5, 15, 0, 0, 254, 256, 3, 62, 31, 0, 255, 246, 1,
    0, 0, 0, 255, 253, 1, 0, 0, 0, 256, 29, 1, 0, 0, 0, 257, 258, 3, 2, 1, 0,
    258, 259, 5, 27, 0, 0, 259, 260, 3, 72, 36, 0, 260, 262, 5, 28, 0, 0, 261,
    263, 3, 58, 29, 0, 262, 261, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 268, 1,
    0, 0, 0, 264, 265, 3, 2, 1, 0, 265, 266, 3, 66, 33, 0, 266, 268, 1, 0, 0, 0,
    267, 257, 1, 0, 0, 0, 267, 264, 1, 0, 0, 0, 268, 31, 1, 0, 0, 0, 269, 270,
    5, 14, 0, 0, 270, 271, 5, 27, 0, 0, 271, 272, 3, 72, 36, 0, 272, 274, 5, 28,
    0, 0, 273, 275, 3, 58, 29, 0, 274, 273, 1, 0, 0, 0, 274, 275, 1, 0, 0, 0,
    275, 279, 1, 0, 0, 0, 276, 277, 5, 14, 0, 0, 277, 279, 3, 62, 31, 0, 278,
    269, 1, 0, 0, 0, 278, 276, 1, 0, 0, 0, 279, 33, 1, 0, 0, 0, 280, 281, 3, 4,
    2, 0, 281, 282, 3, 66, 33, 0, 282, 35, 1, 0, 0, 0, 283, 284, 5, 14, 0, 0,
    284, 286, 5, 12, 0, 0, 285, 287, 3, 18, 9, 0, 286, 285, 1, 0, 0, 0, 286,
    287, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 289, 5, 67, 0, 0, 289, 290, 5,
    69, 0, 0, 290, 292, 5, 27, 0, 0, 291, 293, 3, 50, 25, 0, 292, 291, 1, 0, 0,
    0, 292, 293, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 295, 5, 28, 0, 0, 295,
    296, 5, 33, 0, 0, 296, 37, 1, 0, 0, 0, 297, 301, 5, 31, 0, 0, 298, 300, 3,
    40, 20, 0, 299, 298, 1, 0, 0, 0, 300, 303, 1, 0, 0, 0, 301, 299, 1, 0, 0, 0,
    301, 302, 1, 0, 0, 0, 302, 304, 1, 0, 0, 0, 303, 301, 1, 0, 0, 0, 304, 305,
    5, 32, 0, 0, 305, 39, 1, 0, 0, 0, 306, 307, 3, 26, 13, 0, 307, 308, 5, 33,
    0, 0, 308, 318, 1, 0, 0, 0, 309, 318, 3, 42, 21, 0, 310, 318, 3, 44, 22, 0,
    311, 312, 3, 22, 11, 0, 312, 313, 5, 33, 0, 0, 313, 318, 1, 0, 0, 0, 314,
    315, 3, 24, 12, 0, 315, 316, 5, 33, 0, 0, 316, 318, 1, 0, 0, 0, 317, 306, 1,
    0, 0, 0, 317, 309, 1, 0, 0, 0, 317, 310, 1, 0, 0, 0, 317, 311, 1, 0, 0, 0,
    317, 314, 1, 0, 0, 0, 318, 41, 1, 0, 0, 0, 319, 320, 5, 19, 0, 0, 320, 321,
    5, 27, 0, 0, 321, 322, 3, 54, 27, 0, 322, 323, 5, 28, 0, 0, 323, 324, 3, 42,
    21, 0, 324, 348, 1, 0, 0, 0, 325, 326, 5, 19, 0, 0, 326, 327, 5, 27, 0, 0,
    327, 328, 3, 54, 27, 0, 328, 329, 5, 28, 0, 0, 329, 330, 3, 44, 22, 0, 330,
    348, 1, 0, 0, 0, 331, 332, 5, 19, 0, 0, 332, 333, 5, 27, 0, 0, 333, 334, 3,
    54, 27, 0, 334, 335, 5, 28, 0, 0, 335, 336, 3, 44, 22, 0, 336, 337, 5, 20,
    0, 0, 337, 338, 3, 42, 21, 0, 338, 348, 1, 0, 0, 0, 339, 340, 5, 19, 0, 0,
    340, 341, 5, 27, 0, 0, 341, 342, 3, 54, 27, 0, 342, 343, 5, 28, 0, 0, 343,
    344, 3, 44, 22, 0, 344, 345, 5, 20, 0, 0, 345, 346, 3, 44, 22, 0, 346, 348,
    1, 0, 0, 0, 347, 319, 1, 0, 0, 0, 347, 325, 1, 0, 0, 0, 347, 331, 1, 0, 0,
    0, 347, 339, 1, 0, 0, 0, 348, 43, 1, 0, 0, 0, 349, 367, 3, 38, 19, 0, 350,
    351, 3, 54, 27, 0, 351, 352, 5, 33, 0, 0, 352, 367, 1, 0, 0, 0, 353, 354, 3,
    48, 24, 0, 354, 355, 5, 33, 0, 0, 355, 367, 1, 0, 0, 0, 356, 367, 3, 46, 23,
    0, 357, 358, 3, 54, 27, 0, 358, 359, 5, 39, 0, 0, 359, 360, 3, 54, 27, 0,
    360, 361, 5, 33, 0, 0, 361, 367, 1, 0, 0, 0, 362, 363, 5, 26, 0, 0, 363,
    364, 3, 54, 27, 0, 364, 365, 5, 33, 0, 0, 365, 367, 1, 0, 0, 0, 366, 349, 1,
    0, 0, 0, 366, 350, 1, 0, 0, 0, 366, 353, 1, 0, 0, 0, 366, 356, 1, 0, 0, 0,
    366, 357, 1, 0, 0, 0, 366, 362, 1, 0, 0, 0, 367, 45, 1, 0, 0, 0, 368, 369,
    5, 21, 0, 0, 369, 370, 5, 27, 0, 0, 370, 371, 3, 26, 13, 0, 371, 372, 5, 33,
    0, 0, 372, 373, 3, 54, 27, 0, 373, 374, 5, 33, 0, 0, 374, 375, 3, 48, 24, 0,
    375, 376, 5, 28, 0, 0, 376, 377, 3, 44, 22, 0, 377, 395, 1, 0, 0, 0, 378,
    379, 5, 21, 0, 0, 379, 380, 5, 27, 0, 0, 380, 381, 3, 48, 24, 0, 381, 382,
    5, 33, 0, 0, 382, 383, 3, 54, 27, 0, 383, 384, 5, 33, 0, 0, 384, 385, 3, 48,
    24, 0, 385, 386, 5, 28, 0, 0, 386, 387, 3, 44, 22, 0, 387, 395, 1, 0, 0, 0,
    388, 389, 5, 22, 0, 0, 389, 390, 5, 27, 0, 0, 390, 391, 3, 54, 27, 0, 391,
    392, 5, 28, 0, 0, 392, 393, 3, 44, 22, 0, 393, 395, 1, 0, 0, 0, 394, 368, 1,
    0, 0, 0, 394, 378, 1, 0, 0, 0, 394, 388, 1, 0, 0, 0, 395, 47, 1, 0, 0, 0,
    396, 397, 3, 54, 27, 0, 397, 398, 7, 0, 0, 0, 398, 399, 3, 54, 27, 0, 399,
    418, 1, 0, 0, 0, 400, 401, 3, 54, 27, 0, 401, 402, 5, 43, 0, 0, 402, 403, 3,
    54, 27, 0, 403, 418, 1, 0, 0, 0, 404, 405, 3, 54, 27, 0, 405, 406, 5, 42, 0,
    0, 406, 407, 3, 54, 27, 0, 407, 418, 1, 0, 0, 0, 408, 409, 3, 68, 34, 0,
    409, 410, 5, 68, 0, 0, 410, 411, 3, 54, 27, 0, 411, 418, 1, 0, 0, 0, 412,
    413, 3, 68, 34, 0, 413, 414, 5, 44, 0, 0, 414, 418, 1, 0, 0, 0, 415, 416, 5,
    44, 0, 0, 416, 418, 3, 68, 34, 0, 417, 396, 1, 0, 0, 0, 417, 400, 1, 0, 0,
    0, 417, 404, 1, 0, 0, 0, 417, 408, 1, 0, 0, 0, 417, 412, 1, 0, 0, 0, 417,
    415, 1, 0, 0, 0, 418, 49, 1, 0, 0, 0, 419, 420, 3, 54, 27, 0, 420, 421, 5,
    35, 0, 0, 421, 423, 1, 0, 0, 0, 422, 419, 1, 0, 0, 0, 423, 426, 1, 0, 0, 0,
    424, 422, 1, 0, 0, 0, 424, 425, 1, 0, 0, 0, 425, 427, 1, 0, 0, 0, 426, 424,
    1, 0, 0, 0, 427, 428, 3, 54, 27, 0, 428, 51, 1, 0, 0, 0, 429, 430, 5, 69, 0,
    0, 430, 431, 7, 0, 0, 0, 431, 432, 3, 54, 27, 0, 432, 433, 5, 35, 0, 0, 433,
    435, 1, 0, 0, 0, 434, 429, 1, 0, 0, 0, 435, 438, 1, 0, 0, 0, 436, 434, 1, 0,
    0, 0, 436, 437, 1, 0, 0, 0, 437, 439, 1, 0, 0, 0, 438, 436, 1, 0, 0, 0, 439,
    440, 5, 69, 0, 0, 440, 441, 7, 0, 0, 0, 441, 442, 3, 54, 27, 0, 442, 53, 1,
    0, 0, 0, 443, 444, 6, 27, -1, 0, 444, 450, 3, 56, 28, 0, 445, 446, 7, 1, 0,
    0, 446, 450, 3, 54, 27, 13, 447, 448, 5, 8, 0, 0, 448, 450, 3, 54, 27, 1,
    449, 443, 1, 0, 0, 0, 449, 445, 1, 0, 0, 0, 449, 447, 1, 0, 0, 0, 450, 489,
    1, 0, 0, 0, 451, 452, 10, 12, 0, 0, 452, 453, 5, 47, 0, 0, 453, 488, 3, 54,
    27, 13, 454, 455, 10, 11, 0, 0, 455, 456, 7, 2, 0, 0, 456, 488, 3, 54, 27,
    12, 457, 458, 10, 10, 0, 0, 458, 459, 7, 3, 0, 0, 459, 488, 3, 54, 27, 11,
    460, 461, 10, 9, 0, 0, 461, 462, 7, 4, 0, 0, 462, 488, 3, 54, 27, 10, 463,
    464, 10, 8, 0, 0, 464, 465, 5, 56, 0, 0, 465, 488, 3, 54, 27, 9, 466, 467,
    10, 7, 0, 0, 467, 468, 5, 57, 0, 0, 468, 488, 3, 54, 27, 8, 469, 470, 10, 6,
    0, 0, 470, 471, 5, 58, 0, 0, 471, 488, 3, 54, 27, 7, 472, 473, 10, 5, 0, 0,
    473, 474, 7, 5, 0, 0, 474, 488, 3, 54, 27, 6, 475, 476, 10, 4, 0, 0, 476,
    477, 5, 65, 0, 0, 477, 488, 3, 54, 27, 5, 478, 479, 10, 3, 0, 0, 479, 480,
    5, 66, 0, 0, 480, 488, 3, 54, 27, 4, 481, 482, 10, 2, 0, 0, 482, 483, 5, 37,
    0, 0, 483, 484, 3, 54, 27, 0, 484, 485, 5, 38, 0, 0, 485, 486, 3, 54, 27, 3,
    486, 488, 1, 0, 0, 0, 487, 451, 1, 0, 0, 0, 487, 454, 1, 0, 0, 0, 487, 457,
    1, 0, 0, 0, 487, 460, 1, 0, 0, 0, 487, 463, 1, 0, 0, 0, 487, 466, 1, 0, 0,
    0, 487, 469, 1, 0, 0, 0, 487, 472, 1, 0, 0, 0, 487, 475, 1, 0, 0, 0, 487,
    478, 1, 0, 0, 0, 487, 481, 1, 0, 0, 0, 488, 491, 1, 0, 0, 0, 489, 487, 1, 0,
    0, 0, 489, 490, 1, 0, 0, 0, 490, 55, 1, 0, 0, 0, 491, 489, 1, 0, 0, 0, 492,
    522, 3, 68, 34, 0, 493, 522, 5, 36, 0, 0, 494, 522, 5, 70, 0, 0, 495, 496,
    5, 27, 0, 0, 496, 497, 3, 50, 25, 0, 497, 498, 5, 28, 0, 0, 498, 522, 1, 0,
    0, 0, 499, 500, 5, 29, 0, 0, 500, 501, 3, 50, 25, 0, 501, 502, 5, 30, 0, 0,
    502, 522, 1, 0, 0, 0, 503, 504, 5, 69, 0, 0, 504, 506, 5, 27, 0, 0, 505,
    507, 3, 50, 25, 0, 506, 505, 1, 0, 0, 0, 506, 507, 1, 0, 0, 0, 507, 508, 1,
    0, 0, 0, 508, 522, 5, 28, 0, 0, 509, 510, 5, 69, 0, 0, 510, 512, 5, 27, 0,
    0, 511, 513, 3, 50, 25, 0, 512, 511, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513,
    514, 1, 0, 0, 0, 514, 515, 5, 28, 0, 0, 515, 518, 5, 27, 0, 0, 516, 519, 3,
    50, 25, 0, 517, 519, 3, 52, 26, 0, 518, 516, 1, 0, 0, 0, 518, 517, 1, 0, 0,
    0, 518, 519, 1, 0, 0, 0, 519, 520, 1, 0, 0, 0, 520, 522, 5, 28, 0, 0, 521,
    492, 1, 0, 0, 0, 521, 493, 1, 0, 0, 0, 521, 494, 1, 0, 0, 0, 521, 495, 1, 0,
    0, 0, 521, 499, 1, 0, 0, 0, 521, 503, 1, 0, 0, 0, 521, 509, 1, 0, 0, 0, 522,
    57, 1, 0, 0, 0, 523, 524, 5, 40, 0, 0, 524, 530, 3, 54, 27, 0, 525, 526, 5,
    41, 0, 0, 526, 530, 3, 54, 27, 0, 527, 528, 5, 67, 0, 0, 528, 530, 3, 54,
    27, 0, 529, 523, 1, 0, 0, 0, 529, 525, 1, 0, 0, 0, 529, 527, 1, 0, 0, 0,
    530, 59, 1, 0, 0, 0, 531, 534, 3, 70, 35, 0, 532, 533, 5, 67, 0, 0, 533,
    535, 3, 54, 27, 0, 534, 532, 1, 0, 0, 0, 534, 535, 1, 0, 0, 0, 535, 61, 1,
    0, 0, 0, 536, 537, 3, 60, 30, 0, 537, 538, 5, 35, 0, 0, 538, 540, 1, 0, 0,
    0, 539, 536, 1, 0, 0, 0, 540, 543, 1, 0, 0, 0, 541, 539, 1, 0, 0, 0, 541,
    542, 1, 0, 0, 0, 542, 544, 1, 0, 0, 0, 543, 541, 1, 0, 0, 0, 544, 545, 3,
    60, 30, 0, 545, 63, 1, 0, 0, 0, 546, 556, 3, 70, 35, 0, 547, 548, 3, 70, 35,
    0, 548, 549, 5, 41, 0, 0, 549, 550, 3, 54, 27, 0, 550, 556, 1, 0, 0, 0, 551,
    552, 3, 70, 35, 0, 552, 553, 5, 40, 0, 0, 553, 554, 3, 54, 27, 0, 554, 556,
    1, 0, 0, 0, 555, 546, 1, 0, 0, 0, 555, 547, 1, 0, 0, 0, 555, 551, 1, 0, 0,
    0, 556, 65, 1, 0, 0, 0, 557, 558, 3, 64, 32, 0, 558, 559, 5, 35, 0, 0, 559,
    561, 1, 0, 0, 0, 560, 557, 1, 0, 0, 0, 561, 564, 1, 0, 0, 0, 562, 560, 1, 0,
    0, 0, 562, 563, 1, 0, 0, 0, 563, 565, 1, 0, 0, 0, 564, 562, 1, 0, 0, 0, 565,
    566, 3, 64, 32, 0, 566, 67, 1, 0, 0, 0, 567, 571, 5, 69, 0, 0, 568, 570, 3,
    76, 38, 0, 569, 568, 1, 0, 0, 0, 570, 573, 1, 0, 0, 0, 571, 569, 1, 0, 0, 0,
    571, 572, 1, 0, 0, 0, 572, 69, 1, 0, 0, 0, 573, 571, 1, 0, 0, 0, 574, 578,
    5, 69, 0, 0, 575, 577, 3, 78, 39, 0, 576, 575, 1, 0, 0, 0, 577, 580, 1, 0,
    0, 0, 578, 576, 1, 0, 0, 0, 578, 579, 1, 0, 0, 0, 579, 71, 1, 0, 0, 0, 580,
    578, 1, 0, 0, 0, 581, 582, 3, 70, 35, 0, 582, 583, 5, 35, 0, 0, 583, 585, 1,
    0, 0, 0, 584, 581, 1, 0, 0, 0, 585, 588, 1, 0, 0, 0, 586, 584, 1, 0, 0, 0,
    586, 587, 1, 0, 0, 0, 587, 589, 1, 0, 0, 0, 588, 586, 1, 0, 0, 0, 589, 590,
    3, 70, 35, 0, 590, 73, 1, 0, 0, 0, 591, 592, 5, 69, 0, 0, 592, 594, 5, 35,
    0, 0, 593, 591, 1, 0, 0, 0, 594, 597, 1, 0, 0, 0, 595, 593, 1, 0, 0, 0, 595,
    596, 1, 0, 0, 0, 596, 598, 1, 0, 0, 0, 597, 595, 1, 0, 0, 0, 598, 599, 5,
    69, 0, 0, 599, 75, 1, 0, 0, 0, 600, 603, 3, 78, 39, 0, 601, 603, 3, 80, 40,
    0, 602, 600, 1, 0, 0, 0, 602, 601, 1, 0, 0, 0, 603, 77, 1, 0, 0, 0, 604,
    605, 5, 29, 0, 0, 605, 606, 3, 54, 27, 0, 606, 607, 5, 30, 0, 0, 607, 79, 1,
    0, 0, 0, 608, 609, 5, 34, 0, 0, 609, 610, 5, 69, 0, 0, 610, 81, 1, 0, 0, 0,
    611, 614, 3, 54, 27, 0, 612, 614, 5, 72, 0, 0, 613, 611, 1, 0, 0, 0, 613,
    612, 1, 0, 0, 0, 614, 83, 1, 0, 0, 0, 615, 616, 3, 82, 41, 0, 616, 617, 5,
    35, 0, 0, 617, 619, 1, 0, 0, 0, 618, 615, 1, 0, 0, 0, 619, 622, 1, 0, 0, 0,
    620, 618, 1, 0, 0, 0, 620, 621, 1, 0, 0, 0, 621, 623, 1, 0, 0, 0, 622, 620,
    1, 0, 0, 0, 623, 624, 3, 82, 41, 0, 624, 85, 1, 0, 0, 0, 63, 89, 95, 101,
    105, 111, 114, 119, 121, 125, 128, 133, 137, 140, 145, 151, 155, 157, 169,
    178, 184, 191, 194, 199, 202, 210, 213, 231, 244, 251, 255, 262, 267, 274,
    278, 286, 292, 301, 317, 347, 366, 394, 417, 424, 436, 449, 487, 489, 506,
    512, 518, 521, 529, 534, 541, 555, 562, 571, 578, 586, 595, 602, 613, 620,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!CircomParser.__ATN) {
      CircomParser.__ATN = new ATNDeserializer().deserialize(
        CircomParser._serializedATN,
      );
    }

    return CircomParser.__ATN;
  }

  static DecisionsToDFA = CircomParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index),
  );
}

export class CircuitContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EOF(): TerminalNode {
    return this.getToken(CircomParser.EOF, 0);
  }
  public pragmaDefinition_list(): PragmaDefinitionContext[] {
    return this.getTypedRuleContexts(
      PragmaDefinitionContext,
    ) as PragmaDefinitionContext[];
  }
  public pragmaDefinition(i: number): PragmaDefinitionContext {
    return this.getTypedRuleContext(
      PragmaDefinitionContext,
      i,
    ) as PragmaDefinitionContext;
  }
  public includeDefinition_list(): IncludeDefinitionContext[] {
    return this.getTypedRuleContexts(
      IncludeDefinitionContext,
    ) as IncludeDefinitionContext[];
  }
  public includeDefinition(i: number): IncludeDefinitionContext {
    return this.getTypedRuleContext(
      IncludeDefinitionContext,
      i,
    ) as IncludeDefinitionContext;
  }
  public blockDefiniton_list(): BlockDefinitonContext[] {
    return this.getTypedRuleContexts(
      BlockDefinitonContext,
    ) as BlockDefinitonContext[];
  }
  public blockDefiniton(i: number): BlockDefinitonContext {
    return this.getTypedRuleContext(
      BlockDefinitonContext,
      i,
    ) as BlockDefinitonContext;
  }
  public componentMainDeclaration(): ComponentMainDeclarationContext {
    return this.getTypedRuleContext(
      ComponentMainDeclarationContext,
      0,
    ) as ComponentMainDeclarationContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_circuit;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterCircuit) {
      listener.enterCircuit(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitCircuit) {
      listener.exitCircuit(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitCircuit) {
      return visitor.visitCircuit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SignalHeaderContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public SIGNAL(): TerminalNode {
    return this.getToken(CircomParser.SIGNAL, 0);
  }
  public SIGNAL_TYPE(): TerminalNode {
    return this.getToken(CircomParser.SIGNAL_TYPE, 0);
  }
  public tagDefinition(): TagDefinitionContext {
    return this.getTypedRuleContext(
      TagDefinitionContext,
      0,
    ) as TagDefinitionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_signalHeader;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSignalHeader) {
      listener.enterSignalHeader(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSignalHeader) {
      listener.exitSignalHeader(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSignalHeader) {
      return visitor.visitSignalHeader(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BusHeaderContext extends ParserRuleContext {
  public _wireType!: Token;
  public _parameters!: ExpressionListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public tagDefinition(): TagDefinitionContext {
    return this.getTypedRuleContext(
      TagDefinitionContext,
      0,
    ) as TagDefinitionContext;
  }
  public SIGNAL_TYPE(): TerminalNode {
    return this.getToken(CircomParser.SIGNAL_TYPE, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_busHeader;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBusHeader) {
      listener.enterBusHeader(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBusHeader) {
      listener.exitBusHeader(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitBusHeader) {
      return visitor.visitBusHeader(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PragmaDefinitionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_pragmaDefinition;
  }
  public copyFrom(ctx: PragmaDefinitionContext): void {
    super.copyFrom(ctx);
  }
}
export class PragmaCustomTemplatesContext extends PragmaDefinitionContext {
  constructor(parser: CircomParser, ctx: PragmaDefinitionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public PRAGMA(): TerminalNode {
    return this.getToken(CircomParser.PRAGMA, 0);
  }
  public CUSTOM_TEMPLATES(): TerminalNode {
    return this.getToken(CircomParser.CUSTOM_TEMPLATES, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPragmaCustomTemplates) {
      listener.enterPragmaCustomTemplates(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPragmaCustomTemplates) {
      listener.exitPragmaCustomTemplates(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPragmaCustomTemplates) {
      return visitor.visitPragmaCustomTemplates(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PragmaVersionContext extends PragmaDefinitionContext {
  constructor(parser: CircomParser, ctx: PragmaDefinitionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public PRAGMA(): TerminalNode {
    return this.getToken(CircomParser.PRAGMA, 0);
  }
  public CIRCOM(): TerminalNode {
    return this.getToken(CircomParser.CIRCOM, 0);
  }
  public VERSION(): TerminalNode {
    return this.getToken(CircomParser.VERSION, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPragmaVersion) {
      listener.enterPragmaVersion(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPragmaVersion) {
      listener.exitPragmaVersion(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPragmaVersion) {
      return visitor.visitPragmaVersion(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PragmaInvalidVersionContext extends PragmaDefinitionContext {
  constructor(parser: CircomParser, ctx: PragmaDefinitionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public PRAGMA(): TerminalNode {
    return this.getToken(CircomParser.PRAGMA, 0);
  }
  public CIRCOM(): TerminalNode {
    return this.getToken(CircomParser.CIRCOM, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPragmaInvalidVersion) {
      listener.enterPragmaInvalidVersion(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPragmaInvalidVersion) {
      listener.exitPragmaInvalidVersion(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPragmaInvalidVersion) {
      return visitor.visitPragmaInvalidVersion(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IncludeDefinitionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public INCLUDE(): TerminalNode {
    return this.getToken(CircomParser.INCLUDE, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(CircomParser.STRING, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_includeDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIncludeDefinition) {
      listener.enterIncludeDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIncludeDefinition) {
      listener.exitIncludeDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIncludeDefinition) {
      return visitor.visitIncludeDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockDefinitonContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public functionDefinition(): FunctionDefinitionContext {
    return this.getTypedRuleContext(
      FunctionDefinitionContext,
      0,
    ) as FunctionDefinitionContext;
  }
  public templateDefinition(): TemplateDefinitionContext {
    return this.getTypedRuleContext(
      TemplateDefinitionContext,
      0,
    ) as TemplateDefinitionContext;
  }
  public busDefinition(): BusDefinitionContext {
    return this.getTypedRuleContext(
      BusDefinitionContext,
      0,
    ) as BusDefinitionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_blockDefiniton;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBlockDefiniton) {
      listener.enterBlockDefiniton(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBlockDefiniton) {
      listener.exitBlockDefiniton(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitBlockDefiniton) {
      return visitor.visitBlockDefiniton(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FunctionDefinitionContext extends ParserRuleContext {
  public _argNames!: SimpleIdentifierListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public FUNCTION(): TerminalNode {
    return this.getToken(CircomParser.FUNCTION, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public body(): BodyContext {
    return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
  }
  public simpleIdentifierList(): SimpleIdentifierListContext {
    return this.getTypedRuleContext(
      SimpleIdentifierListContext,
      0,
    ) as SimpleIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_functionDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitFunctionDefinition) {
      return visitor.visitFunctionDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TemplateDefinitionContext extends ParserRuleContext {
  public _argNames!: SimpleIdentifierListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public TEMPLATE(): TerminalNode {
    return this.getToken(CircomParser.TEMPLATE, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public body(): BodyContext {
    return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
  }
  public CUSTOM(): TerminalNode {
    return this.getToken(CircomParser.CUSTOM, 0);
  }
  public PARALLEL(): TerminalNode {
    return this.getToken(CircomParser.PARALLEL, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public simpleIdentifierList(): SimpleIdentifierListContext {
    return this.getTypedRuleContext(
      SimpleIdentifierListContext,
      0,
    ) as SimpleIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_templateDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTemplateDefinition) {
      listener.enterTemplateDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTemplateDefinition) {
      listener.exitTemplateDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitTemplateDefinition) {
      return visitor.visitTemplateDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BusDefinitionContext extends ParserRuleContext {
  public _argNames!: SimpleIdentifierListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public BUS(): TerminalNode {
    return this.getToken(CircomParser.BUS, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public body(): BodyContext {
    return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public simpleIdentifierList(): SimpleIdentifierListContext {
    return this.getTypedRuleContext(
      SimpleIdentifierListContext,
      0,
    ) as SimpleIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_busDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBusDefinition) {
      listener.enterBusDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBusDefinition) {
      listener.exitBusDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitBusDefinition) {
      return visitor.visitBusDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PublicInputsDefinitionContext extends ParserRuleContext {
  public _publicInputs!: SimpleIdentifierListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LC(): TerminalNode {
    return this.getToken(CircomParser.LC, 0);
  }
  public PUBLIC(): TerminalNode {
    return this.getToken(CircomParser.PUBLIC, 0);
  }
  public LB(): TerminalNode {
    return this.getToken(CircomParser.LB, 0);
  }
  public RB(): TerminalNode {
    return this.getToken(CircomParser.RB, 0);
  }
  public RC(): TerminalNode {
    return this.getToken(CircomParser.RC, 0);
  }
  public simpleIdentifierList(): SimpleIdentifierListContext {
    return this.getTypedRuleContext(
      SimpleIdentifierListContext,
      0,
    ) as SimpleIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_publicInputsDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPublicInputsDefinition) {
      listener.enterPublicInputsDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPublicInputsDefinition) {
      listener.exitPublicInputsDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPublicInputsDefinition) {
      return visitor.visitPublicInputsDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TagDefinitionContext extends ParserRuleContext {
  public _values!: SimpleIdentifierListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LC(): TerminalNode {
    return this.getToken(CircomParser.LC, 0);
  }
  public RC(): TerminalNode {
    return this.getToken(CircomParser.RC, 0);
  }
  public simpleIdentifierList(): SimpleIdentifierListContext {
    return this.getTypedRuleContext(
      SimpleIdentifierListContext,
      0,
    ) as SimpleIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_tagDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTagDefinition) {
      listener.enterTagDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTagDefinition) {
      listener.exitTagDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitTagDefinition) {
      return visitor.visitTagDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LogDefinitionContext extends ParserRuleContext {
  public _logArgs!: ExpressionOrStringListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LOG(): TerminalNode {
    return this.getToken(CircomParser.LOG, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expressionOrStringList(): ExpressionOrStringListContext {
    return this.getTypedRuleContext(
      ExpressionOrStringListContext,
      0,
    ) as ExpressionOrStringListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_logDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterLogDefinition) {
      listener.enterLogDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitLogDefinition) {
      listener.exitLogDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitLogDefinition) {
      return visitor.visitLogDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssertDefinitionContext extends ParserRuleContext {
  public _assertArgs!: ExpressionContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ASSERT(): TerminalNode {
    return this.getToken(CircomParser.ASSERT, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_assertDefinition;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterAssertDefinition) {
      listener.enterAssertDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitAssertDefinition) {
      listener.exitAssertDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitAssertDefinition) {
      return visitor.visitAssertDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DeclarationsContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public varDeclaration(): VarDeclarationContext {
    return this.getTypedRuleContext(
      VarDeclarationContext,
      0,
    ) as VarDeclarationContext;
  }
  public signalDeclaration(): SignalDeclarationContext {
    return this.getTypedRuleContext(
      SignalDeclarationContext,
      0,
    ) as SignalDeclarationContext;
  }
  public componentDeclaration(): ComponentDeclarationContext {
    return this.getTypedRuleContext(
      ComponentDeclarationContext,
      0,
    ) as ComponentDeclarationContext;
  }
  public busDeclaration(): BusDeclarationContext {
    return this.getTypedRuleContext(
      BusDeclarationContext,
      0,
    ) as BusDeclarationContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_declarations;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterDeclarations) {
      listener.enterDeclarations(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitDeclarations) {
      listener.exitDeclarations(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitDeclarations) {
      return visitor.visitDeclarations(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VarDeclarationContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public VAR(): TerminalNode {
    return this.getToken(CircomParser.VAR, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(
      IdentifierListContext,
      0,
    ) as IdentifierListContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getTypedRuleContext(
      AssignmentExpressionContext,
      0,
    ) as AssignmentExpressionContext;
  }
  public varIdentifierList(): VarIdentifierListContext {
    return this.getTypedRuleContext(
      VarIdentifierListContext,
      0,
    ) as VarIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_varDeclaration;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterVarDeclaration) {
      listener.enterVarDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitVarDeclaration) {
      listener.exitVarDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitVarDeclaration) {
      return visitor.visitVarDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SignalDeclarationContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public signalHeader(): SignalHeaderContext {
    return this.getTypedRuleContext(
      SignalHeaderContext,
      0,
    ) as SignalHeaderContext;
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(
      IdentifierListContext,
      0,
    ) as IdentifierListContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getTypedRuleContext(
      AssignmentExpressionContext,
      0,
    ) as AssignmentExpressionContext;
  }
  public signalIdentifierList(): SignalIdentifierListContext {
    return this.getTypedRuleContext(
      SignalIdentifierListContext,
      0,
    ) as SignalIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_signalDeclaration;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSignalDeclaration) {
      listener.enterSignalDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSignalDeclaration) {
      listener.exitSignalDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSignalDeclaration) {
      return visitor.visitSignalDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ComponentDeclarationContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public COMPONENT(): TerminalNode {
    return this.getToken(CircomParser.COMPONENT, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public identifierList(): IdentifierListContext {
    return this.getTypedRuleContext(
      IdentifierListContext,
      0,
    ) as IdentifierListContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getTypedRuleContext(
      AssignmentExpressionContext,
      0,
    ) as AssignmentExpressionContext;
  }
  public varIdentifierList(): VarIdentifierListContext {
    return this.getTypedRuleContext(
      VarIdentifierListContext,
      0,
    ) as VarIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_componentDeclaration;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterComponentDeclaration) {
      listener.enterComponentDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitComponentDeclaration) {
      listener.exitComponentDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitComponentDeclaration) {
      return visitor.visitComponentDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BusDeclarationContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public busHeader(): BusHeaderContext {
    return this.getTypedRuleContext(BusHeaderContext, 0) as BusHeaderContext;
  }
  public signalIdentifierList(): SignalIdentifierListContext {
    return this.getTypedRuleContext(
      SignalIdentifierListContext,
      0,
    ) as SignalIdentifierListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_busDeclaration;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBusDeclaration) {
      listener.enterBusDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBusDeclaration) {
      listener.exitBusDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitBusDeclaration) {
      return visitor.visitBusDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ComponentMainDeclarationContext extends ParserRuleContext {
  public _argValues!: ExpressionListContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public COMPONENT(): TerminalNode {
    return this.getToken(CircomParser.COMPONENT, 0);
  }
  public MAIN(): TerminalNode {
    return this.getToken(CircomParser.MAIN, 0);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public publicInputsDefinition(): PublicInputsDefinitionContext {
    return this.getTypedRuleContext(
      PublicInputsDefinitionContext,
      0,
    ) as PublicInputsDefinitionContext;
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_componentMainDeclaration;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterComponentMainDeclaration) {
      listener.enterComponentMainDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitComponentMainDeclaration) {
      listener.exitComponentMainDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitComponentMainDeclaration) {
      return visitor.visitComponentMainDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BodyContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LC(): TerminalNode {
    return this.getToken(CircomParser.LC, 0);
  }
  public RC(): TerminalNode {
    return this.getToken(CircomParser.RC, 0);
  }
  public statements_list(): StatementsContext[] {
    return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
  }
  public statements(i: number): StatementsContext {
    return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_body;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBody) {
      listener.enterBody(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBody) {
      listener.exitBody(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitBody) {
      return visitor.visitBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StatementsContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public declarations(): DeclarationsContext {
    return this.getTypedRuleContext(
      DeclarationsContext,
      0,
    ) as DeclarationsContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public ifStatements(): IfStatementsContext {
    return this.getTypedRuleContext(
      IfStatementsContext,
      0,
    ) as IfStatementsContext;
  }
  public regularStatements(): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      0,
    ) as RegularStatementsContext;
  }
  public logDefinition(): LogDefinitionContext {
    return this.getTypedRuleContext(
      LogDefinitionContext,
      0,
    ) as LogDefinitionContext;
  }
  public assertDefinition(): AssertDefinitionContext {
    return this.getTypedRuleContext(
      AssertDefinitionContext,
      0,
    ) as AssertDefinitionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_statements;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterStatements) {
      listener.enterStatements(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitStatements) {
      listener.exitStatements(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitStatements) {
      return visitor.visitStatements(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IfStatementsContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_ifStatements;
  }
  public copyFrom(ctx: IfStatementsContext): void {
    super.copyFrom(ctx);
  }
}
export class IfWithFollowUpIfContext extends IfStatementsContext {
  public _cond!: ExpressionContext;
  constructor(parser: CircomParser, ctx: IfStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public IF(): TerminalNode {
    return this.getToken(CircomParser.IF, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public ifStatements(): IfStatementsContext {
    return this.getTypedRuleContext(
      IfStatementsContext,
      0,
    ) as IfStatementsContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIfWithFollowUpIf) {
      listener.enterIfWithFollowUpIf(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIfWithFollowUpIf) {
      listener.exitIfWithFollowUpIf(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIfWithFollowUpIf) {
      return visitor.visitIfWithFollowUpIf(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IfRegularElseRegularContext extends IfStatementsContext {
  public _cond!: ExpressionContext;
  constructor(parser: CircomParser, ctx: IfStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public IF(): TerminalNode {
    return this.getToken(CircomParser.IF, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public regularStatements_list(): RegularStatementsContext[] {
    return this.getTypedRuleContexts(
      RegularStatementsContext,
    ) as RegularStatementsContext[];
  }
  public regularStatements(i: number): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      i,
    ) as RegularStatementsContext;
  }
  public ELSE(): TerminalNode {
    return this.getToken(CircomParser.ELSE, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIfRegularElseRegular) {
      listener.enterIfRegularElseRegular(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIfRegularElseRegular) {
      listener.exitIfRegularElseRegular(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIfRegularElseRegular) {
      return visitor.visitIfRegularElseRegular(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IfRegularElseWithFollowUpIfContext extends IfStatementsContext {
  public _cond!: ExpressionContext;
  constructor(parser: CircomParser, ctx: IfStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public IF(): TerminalNode {
    return this.getToken(CircomParser.IF, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public regularStatements(): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      0,
    ) as RegularStatementsContext;
  }
  public ELSE(): TerminalNode {
    return this.getToken(CircomParser.ELSE, 0);
  }
  public ifStatements(): IfStatementsContext {
    return this.getTypedRuleContext(
      IfStatementsContext,
      0,
    ) as IfStatementsContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIfRegularElseWithFollowUpIf) {
      listener.enterIfRegularElseWithFollowUpIf(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIfRegularElseWithFollowUpIf) {
      listener.exitIfRegularElseWithFollowUpIf(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIfRegularElseWithFollowUpIf) {
      return visitor.visitIfRegularElseWithFollowUpIf(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IfRegularContext extends IfStatementsContext {
  public _cond!: ExpressionContext;
  constructor(parser: CircomParser, ctx: IfStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public IF(): TerminalNode {
    return this.getToken(CircomParser.IF, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public regularStatements(): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      0,
    ) as RegularStatementsContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIfRegular) {
      listener.enterIfRegular(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIfRegular) {
      listener.exitIfRegular(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIfRegular) {
      return visitor.visitIfRegular(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class RegularStatementsContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_regularStatements;
  }
  public copyFrom(ctx: RegularStatementsContext): void {
    super.copyFrom(ctx);
  }
}
export class RStatementEqConstraintContext extends RegularStatementsContext {
  public _lhs!: ExpressionContext;
  public _rhs!: ExpressionContext;
  constructor(parser: CircomParser, ctx: RegularStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public EQ_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.EQ_CONSTRAINT, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRStatementEqConstraint) {
      listener.enterRStatementEqConstraint(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRStatementEqConstraint) {
      listener.exitRStatementEqConstraint(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitRStatementEqConstraint) {
      return visitor.visitRStatementEqConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RStatementSucstitutionsContext extends RegularStatementsContext {
  constructor(parser: CircomParser, ctx: RegularStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public substitutions(): SubstitutionsContext {
    return this.getTypedRuleContext(
      SubstitutionsContext,
      0,
    ) as SubstitutionsContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRStatementSucstitutions) {
      listener.enterRStatementSucstitutions(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRStatementSucstitutions) {
      listener.exitRStatementSucstitutions(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitRStatementSucstitutions) {
      return visitor.visitRStatementSucstitutions(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RStatementCyclesContext extends RegularStatementsContext {
  constructor(parser: CircomParser, ctx: RegularStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cycleStatements(): CycleStatementsContext {
    return this.getTypedRuleContext(
      CycleStatementsContext,
      0,
    ) as CycleStatementsContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRStatementCycles) {
      listener.enterRStatementCycles(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRStatementCycles) {
      listener.exitRStatementCycles(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitRStatementCycles) {
      return visitor.visitRStatementCycles(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RStatementReturnContext extends RegularStatementsContext {
  public _value!: ExpressionContext;
  constructor(parser: CircomParser, ctx: RegularStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public RETURN(): TerminalNode {
    return this.getToken(CircomParser.RETURN, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRStatementReturn) {
      listener.enterRStatementReturn(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRStatementReturn) {
      listener.exitRStatementReturn(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitRStatementReturn) {
      return visitor.visitRStatementReturn(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RStatementExpressionContext extends RegularStatementsContext {
  constructor(parser: CircomParser, ctx: RegularStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRStatementExpression) {
      listener.enterRStatementExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRStatementExpression) {
      listener.exitRStatementExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitRStatementExpression) {
      return visitor.visitRStatementExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RStatementBodyContext extends RegularStatementsContext {
  constructor(parser: CircomParser, ctx: RegularStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public body(): BodyContext {
    return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRStatementBody) {
      listener.enterRStatementBody(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRStatementBody) {
      listener.exitRStatementBody(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitRStatementBody) {
      return visitor.visitRStatementBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CycleStatementsContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_cycleStatements;
  }
  public copyFrom(ctx: CycleStatementsContext): void {
    super.copyFrom(ctx);
  }
}
export class CycleForWithoutDeclarationContext extends CycleStatementsContext {
  public _cond!: ExpressionContext;
  public _step!: SubstitutionsContext;
  public _forBody!: RegularStatementsContext;
  constructor(parser: CircomParser, ctx: CycleStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public FOR(): TerminalNode {
    return this.getToken(CircomParser.FOR, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public substitutions_list(): SubstitutionsContext[] {
    return this.getTypedRuleContexts(
      SubstitutionsContext,
    ) as SubstitutionsContext[];
  }
  public substitutions(i: number): SubstitutionsContext {
    return this.getTypedRuleContext(
      SubstitutionsContext,
      i,
    ) as SubstitutionsContext;
  }
  public SEMICOLON_list(): TerminalNode[] {
    return this.getTokens(CircomParser.SEMICOLON);
  }
  public SEMICOLON(i: number): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, i);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public regularStatements(): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      0,
    ) as RegularStatementsContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterCycleForWithoutDeclaration) {
      listener.enterCycleForWithoutDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitCycleForWithoutDeclaration) {
      listener.exitCycleForWithoutDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitCycleForWithoutDeclaration) {
      return visitor.visitCycleForWithoutDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CycleWhileContext extends CycleStatementsContext {
  public _cond!: ExpressionContext;
  public _stmt!: RegularStatementsContext;
  constructor(parser: CircomParser, ctx: CycleStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public WHILE(): TerminalNode {
    return this.getToken(CircomParser.WHILE, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public regularStatements(): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      0,
    ) as RegularStatementsContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterCycleWhile) {
      listener.enterCycleWhile(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitCycleWhile) {
      listener.exitCycleWhile(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitCycleWhile) {
      return visitor.visitCycleWhile(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CycleForWithDeclarationContext extends CycleStatementsContext {
  public _cond!: ExpressionContext;
  public _step!: SubstitutionsContext;
  public _forBody!: RegularStatementsContext;
  constructor(parser: CircomParser, ctx: CycleStatementsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public FOR(): TerminalNode {
    return this.getToken(CircomParser.FOR, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public declarations(): DeclarationsContext {
    return this.getTypedRuleContext(
      DeclarationsContext,
      0,
    ) as DeclarationsContext;
  }
  public SEMICOLON_list(): TerminalNode[] {
    return this.getTokens(CircomParser.SEMICOLON);
  }
  public SEMICOLON(i: number): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, i);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public substitutions(): SubstitutionsContext {
    return this.getTypedRuleContext(
      SubstitutionsContext,
      0,
    ) as SubstitutionsContext;
  }
  public regularStatements(): RegularStatementsContext {
    return this.getTypedRuleContext(
      RegularStatementsContext,
      0,
    ) as RegularStatementsContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterCycleForWithDeclaration) {
      listener.enterCycleForWithDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitCycleForWithDeclaration) {
      listener.exitCycleForWithDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitCycleForWithDeclaration) {
      return visitor.visitCycleForWithDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SubstitutionsContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_substitutions;
  }
  public copyFrom(ctx: SubstitutionsContext): void {
    super.copyFrom(ctx);
  }
}
export class SubsLeftAssignmentContext extends SubstitutionsContext {
  public _lhs!: ExpressionContext;
  public _op!: Token;
  public _rhs!: ExpressionContext;
  constructor(parser: CircomParser, ctx: SubstitutionsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public LEFT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, 0);
  }
  public LEFT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSubsLeftAssignment) {
      listener.enterSubsLeftAssignment(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSubsLeftAssignment) {
      listener.exitSubsLeftAssignment(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSubsLeftAssignment) {
      return visitor.visitSubsLeftAssignment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SubsRightConstrAssignmentContext extends SubstitutionsContext {
  public _lhs!: ExpressionContext;
  public _op!: Token;
  public _variable!: ExpressionContext;
  constructor(parser: CircomParser, ctx: SubstitutionsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public RIGHT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.RIGHT_CONSTRAINT, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSubsRightConstrAssignment) {
      listener.enterSubsRightConstrAssignment(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSubsRightConstrAssignment) {
      listener.exitSubsRightConstrAssignment(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSubsRightConstrAssignment) {
      return visitor.visitSubsRightConstrAssignment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SubsRightSimpleAssignmentContext extends SubstitutionsContext {
  public _lhs!: ExpressionContext;
  public _op!: Token;
  public _variable!: ExpressionContext;
  constructor(parser: CircomParser, ctx: SubstitutionsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public RIGHT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.RIGHT_ASSIGNMENT, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSubsRightSimpleAssignment) {
      listener.enterSubsRightSimpleAssignment(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSubsRightSimpleAssignment) {
      listener.exitSubsRightSimpleAssignment(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSubsRightSimpleAssignment) {
      return visitor.visitSubsRightSimpleAssignment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SubsInvalidIcnDecOperationContext extends SubstitutionsContext {
  constructor(parser: CircomParser, ctx: SubstitutionsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public SELF_OP(): TerminalNode {
    return this.getToken(CircomParser.SELF_OP, 0);
  }
  public identifierStatement(): IdentifierStatementContext {
    return this.getTypedRuleContext(
      IdentifierStatementContext,
      0,
    ) as IdentifierStatementContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSubsInvalidIcnDecOperation) {
      listener.enterSubsInvalidIcnDecOperation(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSubsInvalidIcnDecOperation) {
      listener.exitSubsInvalidIcnDecOperation(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSubsInvalidIcnDecOperation) {
      return visitor.visitSubsInvalidIcnDecOperation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SubsAssignmentWithOperationContext extends SubstitutionsContext {
  public _op!: Token;
  public _rhs!: ExpressionContext;
  constructor(parser: CircomParser, ctx: SubstitutionsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public identifierStatement(): IdentifierStatementContext {
    return this.getTypedRuleContext(
      IdentifierStatementContext,
      0,
    ) as IdentifierStatementContext;
  }
  public ASSIGNMENT_WITH_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_WITH_OP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSubsAssignmentWithOperation) {
      listener.enterSubsAssignmentWithOperation(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSubsAssignmentWithOperation) {
      listener.exitSubsAssignmentWithOperation(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSubsAssignmentWithOperation) {
      return visitor.visitSubsAssignmentWithOperation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SubsIcnDecOperationContext extends SubstitutionsContext {
  constructor(parser: CircomParser, ctx: SubstitutionsContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public identifierStatement(): IdentifierStatementContext {
    return this.getTypedRuleContext(
      IdentifierStatementContext,
      0,
    ) as IdentifierStatementContext;
  }
  public SELF_OP(): TerminalNode {
    return this.getToken(CircomParser.SELF_OP, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSubsIcnDecOperation) {
      listener.enterSubsIcnDecOperation(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSubsIcnDecOperation) {
      listener.exitSubsIcnDecOperation(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSubsIcnDecOperation) {
      return visitor.visitSubsIcnDecOperation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionListContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_expressionList;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionListWithNamesContext extends ParserRuleContext {
  public _ops!: Token;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID_list(): TerminalNode[] {
    return this.getTokens(CircomParser.ID);
  }
  public ID(i: number): TerminalNode {
    return this.getToken(CircomParser.ID, i);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public ASSIGNMENT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.ASSIGNMENT);
  }
  public ASSIGNMENT(i: number): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, i);
  }
  public LEFT_ASSIGNMENT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.LEFT_ASSIGNMENT);
  }
  public LEFT_ASSIGNMENT(i: number): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, i);
  }
  public LEFT_CONSTRAINT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.LEFT_CONSTRAINT);
  }
  public LEFT_CONSTRAINT(i: number): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, i);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_expressionListWithNames;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterExpressionListWithNames) {
      listener.enterExpressionListWithNames(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitExpressionListWithNames) {
      listener.exitExpressionListWithNames(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitExpressionListWithNames) {
      return visitor.visitExpressionListWithNames(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public _cond!: ExpressionContext;
  public _op!: Token;
  public _ifTrue!: ExpressionContext;
  public _ifFalse!: ExpressionContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public primaryExpression(): PrimaryExpressionContext {
    return this.getTypedRuleContext(
      PrimaryExpressionContext,
      0,
    ) as PrimaryExpressionContext;
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public NOT(): TerminalNode {
    return this.getToken(CircomParser.NOT, 0);
  }
  public BNOT(): TerminalNode {
    return this.getToken(CircomParser.BNOT, 0);
  }
  public SUB(): TerminalNode {
    return this.getToken(CircomParser.SUB, 0);
  }
  public PARALLEL(): TerminalNode {
    return this.getToken(CircomParser.PARALLEL, 0);
  }
  public POW(): TerminalNode {
    return this.getToken(CircomParser.POW, 0);
  }
  public MUL(): TerminalNode {
    return this.getToken(CircomParser.MUL, 0);
  }
  public DIV(): TerminalNode {
    return this.getToken(CircomParser.DIV, 0);
  }
  public QUO(): TerminalNode {
    return this.getToken(CircomParser.QUO, 0);
  }
  public MOD(): TerminalNode {
    return this.getToken(CircomParser.MOD, 0);
  }
  public ADD(): TerminalNode {
    return this.getToken(CircomParser.ADD, 0);
  }
  public SHL(): TerminalNode {
    return this.getToken(CircomParser.SHL, 0);
  }
  public SHR(): TerminalNode {
    return this.getToken(CircomParser.SHR, 0);
  }
  public BAND(): TerminalNode {
    return this.getToken(CircomParser.BAND, 0);
  }
  public BXOR(): TerminalNode {
    return this.getToken(CircomParser.BXOR, 0);
  }
  public BOR(): TerminalNode {
    return this.getToken(CircomParser.BOR, 0);
  }
  public EQ(): TerminalNode {
    return this.getToken(CircomParser.EQ, 0);
  }
  public NEQ(): TerminalNode {
    return this.getToken(CircomParser.NEQ, 0);
  }
  public LT(): TerminalNode {
    return this.getToken(CircomParser.LT, 0);
  }
  public GT(): TerminalNode {
    return this.getToken(CircomParser.GT, 0);
  }
  public LE(): TerminalNode {
    return this.getToken(CircomParser.LE, 0);
  }
  public GE(): TerminalNode {
    return this.getToken(CircomParser.GE, 0);
  }
  public AND(): TerminalNode {
    return this.getToken(CircomParser.AND, 0);
  }
  public OR(): TerminalNode {
    return this.getToken(CircomParser.OR, 0);
  }
  public TERNARY_CONDITION(): TerminalNode {
    return this.getToken(CircomParser.TERNARY_CONDITION, 0);
  }
  public TERNARY_ALTERNATIVE(): TerminalNode {
    return this.getToken(CircomParser.TERNARY_ALTERNATIVE, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_expression;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PrimaryExpressionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_primaryExpression;
  }
  public copyFrom(ctx: PrimaryExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class PIdentifierStatementContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public identifierStatement(): IdentifierStatementContext {
    return this.getTypedRuleContext(
      IdentifierStatementContext,
      0,
    ) as IdentifierStatementContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPIdentifierStatement) {
      listener.enterPIdentifierStatement(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPIdentifierStatement) {
      listener.exitPIdentifierStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPIdentifierStatement) {
      return visitor.visitPIdentifierStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PUnderscoreContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public UNDERSCORE(): TerminalNode {
    return this.getToken(CircomParser.UNDERSCORE, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPUnderscore) {
      listener.enterPUnderscore(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPUnderscore) {
      listener.exitPUnderscore(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPUnderscore) {
      return visitor.visitPUnderscore(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PParenthesesContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPParentheses) {
      listener.enterPParentheses(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPParentheses) {
      listener.exitPParentheses(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPParentheses) {
      return visitor.visitPParentheses(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PAnonymousCallContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public LP_list(): TerminalNode[] {
    return this.getTokens(CircomParser.LP);
  }
  public LP(i: number): TerminalNode {
    return this.getToken(CircomParser.LP, i);
  }
  public RP_list(): TerminalNode[] {
    return this.getTokens(CircomParser.RP);
  }
  public RP(i: number): TerminalNode {
    return this.getToken(CircomParser.RP, i);
  }
  public expressionList_list(): ExpressionListContext[] {
    return this.getTypedRuleContexts(
      ExpressionListContext,
    ) as ExpressionListContext[];
  }
  public expressionList(i: number): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      i,
    ) as ExpressionListContext;
  }
  public expressionListWithNames(): ExpressionListWithNamesContext {
    return this.getTypedRuleContext(
      ExpressionListWithNamesContext,
      0,
    ) as ExpressionListWithNamesContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPAnonymousCall) {
      listener.enterPAnonymousCall(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPAnonymousCall) {
      listener.exitPAnonymousCall(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPAnonymousCall) {
      return visitor.visitPAnonymousCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PArrayContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LB(): TerminalNode {
    return this.getToken(CircomParser.LB, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public RB(): TerminalNode {
    return this.getToken(CircomParser.RB, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPArray) {
      listener.enterPArray(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPArray) {
      listener.exitPArray(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPArray) {
      return visitor.visitPArray(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PNumberContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public NUMBER(): TerminalNode {
    return this.getToken(CircomParser.NUMBER, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPNumber) {
      listener.enterPNumber(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPNumber) {
      listener.exitPNumber(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPNumber) {
      return visitor.visitPNumber(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PCallContext extends PrimaryExpressionContext {
  constructor(parser: CircomParser, ctx: PrimaryExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPCall) {
      listener.enterPCall(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPCall) {
      listener.exitPCall(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitPCall) {
      return visitor.visitPCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssignmentExpressionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_assignmentExpression;
  }
  public copyFrom(ctx: AssignmentExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class AssignExprRegularContext extends AssignmentExpressionContext {
  public _rhs!: ExpressionContext;
  constructor(parser: CircomParser, ctx: AssignmentExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterAssignExprRegular) {
      listener.enterAssignExprRegular(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitAssignExprRegular) {
      listener.exitAssignExprRegular(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitAssignExprRegular) {
      return visitor.visitAssignExprRegular(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AssignExprConstraintContext extends AssignmentExpressionContext {
  public _rhs!: ExpressionContext;
  constructor(parser: CircomParser, ctx: AssignmentExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterAssignExprConstraint) {
      listener.enterAssignExprConstraint(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitAssignExprConstraint) {
      listener.exitAssignExprConstraint(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitAssignExprConstraint) {
      return visitor.visitAssignExprConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AssignExprSimpleContext extends AssignmentExpressionContext {
  public _rhs!: ExpressionContext;
  constructor(parser: CircomParser, ctx: AssignmentExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterAssignExprSimple) {
      listener.enterAssignExprSimple(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitAssignExprSimple) {
      listener.exitAssignExprSimple(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitAssignExprSimple) {
      return visitor.visitAssignExprSimple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VarIdentifierContext extends ParserRuleContext {
  public _rhs!: ExpressionContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_varIdentifier;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterVarIdentifier) {
      listener.enterVarIdentifier(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitVarIdentifier) {
      listener.exitVarIdentifier(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitVarIdentifier) {
      return visitor.visitVarIdentifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VarIdentifierListContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public varIdentifier_list(): VarIdentifierContext[] {
    return this.getTypedRuleContexts(
      VarIdentifierContext,
    ) as VarIdentifierContext[];
  }
  public varIdentifier(i: number): VarIdentifierContext {
    return this.getTypedRuleContext(
      VarIdentifierContext,
      i,
    ) as VarIdentifierContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_varIdentifierList;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterVarIdentifierList) {
      listener.enterVarIdentifierList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitVarIdentifierList) {
      listener.exitVarIdentifierList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitVarIdentifierList) {
      return visitor.visitVarIdentifierList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SignalIdentifierContext extends ParserRuleContext {
  public _rhs!: ExpressionContext;
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public LEFT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public LEFT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_signalIdentifier;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSignalIdentifier) {
      listener.enterSignalIdentifier(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSignalIdentifier) {
      listener.exitSignalIdentifier(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSignalIdentifier) {
      return visitor.visitSignalIdentifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SignalIdentifierListContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public signalIdentifier_list(): SignalIdentifierContext[] {
    return this.getTypedRuleContexts(
      SignalIdentifierContext,
    ) as SignalIdentifierContext[];
  }
  public signalIdentifier(i: number): SignalIdentifierContext {
    return this.getTypedRuleContext(
      SignalIdentifierContext,
      i,
    ) as SignalIdentifierContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_signalIdentifierList;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSignalIdentifierList) {
      listener.enterSignalIdentifierList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSignalIdentifierList) {
      listener.exitSignalIdentifierList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSignalIdentifierList) {
      return visitor.visitSignalIdentifierList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierStatementContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public idetifierAccess_list(): IdetifierAccessContext[] {
    return this.getTypedRuleContexts(
      IdetifierAccessContext,
    ) as IdetifierAccessContext[];
  }
  public idetifierAccess(i: number): IdetifierAccessContext {
    return this.getTypedRuleContext(
      IdetifierAccessContext,
      i,
    ) as IdetifierAccessContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_identifierStatement;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIdentifierStatement) {
      listener.enterIdentifierStatement(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIdentifierStatement) {
      listener.exitIdentifierStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIdentifierStatement) {
      return visitor.visitIdentifierStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public arrayDimension_list(): ArrayDimensionContext[] {
    return this.getTypedRuleContexts(
      ArrayDimensionContext,
    ) as ArrayDimensionContext[];
  }
  public arrayDimension(i: number): ArrayDimensionContext {
    return this.getTypedRuleContext(
      ArrayDimensionContext,
      i,
    ) as ArrayDimensionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_identifier;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIdentifier) {
      return visitor.visitIdentifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierListContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_identifierList;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIdentifierList) {
      listener.enterIdentifierList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIdentifierList) {
      listener.exitIdentifierList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIdentifierList) {
      return visitor.visitIdentifierList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SimpleIdentifierListContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID_list(): TerminalNode[] {
    return this.getTokens(CircomParser.ID);
  }
  public ID(i: number): TerminalNode {
    return this.getToken(CircomParser.ID, i);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_simpleIdentifierList;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSimpleIdentifierList) {
      listener.enterSimpleIdentifierList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSimpleIdentifierList) {
      listener.exitSimpleIdentifierList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitSimpleIdentifierList) {
      return visitor.visitSimpleIdentifierList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdetifierAccessContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public arrayDimension(): ArrayDimensionContext {
    return this.getTypedRuleContext(
      ArrayDimensionContext,
      0,
    ) as ArrayDimensionContext;
  }
  public identifierReferance(): IdentifierReferanceContext {
    return this.getTypedRuleContext(
      IdentifierReferanceContext,
      0,
    ) as IdentifierReferanceContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_idetifierAccess;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIdetifierAccess) {
      listener.enterIdetifierAccess(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIdetifierAccess) {
      listener.exitIdetifierAccess(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIdetifierAccess) {
      return visitor.visitIdetifierAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArrayDimensionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LB(): TerminalNode {
    return this.getToken(CircomParser.LB, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public RB(): TerminalNode {
    return this.getToken(CircomParser.RB, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_arrayDimension;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterArrayDimension) {
      listener.enterArrayDimension(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitArrayDimension) {
      listener.exitArrayDimension(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitArrayDimension) {
      return visitor.visitArrayDimension(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierReferanceContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DOT(): TerminalNode {
    return this.getToken(CircomParser.DOT, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_identifierReferance;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIdentifierReferance) {
      listener.enterIdentifierReferance(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIdentifierReferance) {
      listener.exitIdentifierReferance(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitIdentifierReferance) {
      return visitor.visitIdentifierReferance(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionOrStringContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public STRING(): TerminalNode {
    return this.getToken(CircomParser.STRING, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_expressionOrString;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterExpressionOrString) {
      listener.enterExpressionOrString(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitExpressionOrString) {
      listener.exitExpressionOrString(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitExpressionOrString) {
      return visitor.visitExpressionOrString(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionOrStringListContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public expressionOrString_list(): ExpressionOrStringContext[] {
    return this.getTypedRuleContexts(
      ExpressionOrStringContext,
    ) as ExpressionOrStringContext[];
  }
  public expressionOrString(i: number): ExpressionOrStringContext {
    return this.getTypedRuleContext(
      ExpressionOrStringContext,
      i,
    ) as ExpressionOrStringContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_expressionOrStringList;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterExpressionOrStringList) {
      listener.enterExpressionOrStringList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitExpressionOrStringList) {
      listener.exitExpressionOrStringList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitExpressionOrStringList) {
      return visitor.visitExpressionOrStringList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
