// Generated from parser/Circom.g4 by ANTLR 4.13.1
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
import CircomListener from "./CircomListener.js";
import CircomVisitor from "./CircomVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CircomParser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly VERSION = 5;
  public static readonly SIGNAL_TYPE = 6;
  public static readonly SIGNAL = 7;
  public static readonly INPUT = 8;
  public static readonly OUTPUT = 9;
  public static readonly PUBLIC = 10;
  public static readonly TEMPLATE = 11;
  public static readonly COMPONENT = 12;
  public static readonly VAR = 13;
  public static readonly FUNCTION = 14;
  public static readonly RETURN = 15;
  public static readonly IF = 16;
  public static readonly ELSE = 17;
  public static readonly FOR = 18;
  public static readonly WHILE = 19;
  public static readonly DO = 20;
  public static readonly LOG = 21;
  public static readonly ASSERT = 22;
  public static readonly INCLUDE = 23;
  public static readonly CUSTOM = 24;
  public static readonly PRAGMA = 25;
  public static readonly CIRCOM = 26;
  public static readonly CUSTOM_TEMPLATES = 27;
  public static readonly MAIN = 28;
  public static readonly PARALLEL = 29;
  public static readonly LP = 30;
  public static readonly RP = 31;
  public static readonly LB = 32;
  public static readonly RB = 33;
  public static readonly LC = 34;
  public static readonly RC = 35;
  public static readonly SEMICOLON = 36;
  public static readonly COMMA = 37;
  public static readonly ASSIGNMENT = 38;
  public static readonly ASSIGNMENT_OP = 39;
  public static readonly SELF_OP = 40;
  public static readonly LEFT_ASSIGNMENT = 41;
  public static readonly RIGHT_ASSIGNMENT = 42;
  public static readonly CONSTRAINT_EQ = 43;
  public static readonly NOT = 44;
  public static readonly BNOT = 45;
  public static readonly POW = 46;
  public static readonly MUL = 47;
  public static readonly DIV = 48;
  public static readonly QUO = 49;
  public static readonly MOD = 50;
  public static readonly ADD = 51;
  public static readonly SUB = 52;
  public static readonly SHL = 53;
  public static readonly SHR = 54;
  public static readonly BAND = 55;
  public static readonly BXOR = 56;
  public static readonly BOR = 57;
  public static readonly EQ = 58;
  public static readonly NEQ = 59;
  public static readonly GT = 60;
  public static readonly LT = 61;
  public static readonly LE = 62;
  public static readonly GE = 63;
  public static readonly AND = 64;
  public static readonly OR = 65;
  public static readonly ID = 66;
  public static readonly NUMBER = 67;
  public static readonly HEX = 68;
  public static readonly STRING = 69;
  public static readonly COMMENT = 70;
  public static readonly LINE_COMMENT = 71;
  public static readonly WS = 72;
  public static readonly EOF = Token.EOF;
  public static readonly RULE_circuit = 0;
  public static readonly RULE_pragmaDeclaration = 1;
  public static readonly RULE_includeDeclaration = 2;
  public static readonly RULE_blockDeclaration = 3;
  public static readonly RULE_functionDeclaration = 4;
  public static readonly RULE_functionBlock = 5;
  public static readonly RULE_functionStmt = 6;
  public static readonly RULE_templateDeclaration = 7;
  public static readonly RULE_templateBlock = 8;
  public static readonly RULE_componentMainDeclaration = 9;
  public static readonly RULE_publicInputsList = 10;
  public static readonly RULE_templateStmt = 11;
  public static readonly RULE_forControl = 12;
  public static readonly RULE_forInit = 13;
  public static readonly RULE_forUpdate = 14;
  public static readonly RULE_parExpression = 15;
  public static readonly RULE_expression = 16;
  public static readonly RULE_primary = 17;
  public static readonly RULE_logStmt = 18;
  public static readonly RULE_componentDefinition = 19;
  public static readonly RULE_componentDeclaration = 20;
  public static readonly RULE_signalDefinition = 21;
  public static readonly RULE_tagList = 22;
  public static readonly RULE_signalDeclaration = 23;
  public static readonly RULE_varDefinition = 24;
  public static readonly RULE_varDeclaration = 25;
  public static readonly RULE_rhsValue = 26;
  public static readonly RULE_componentCall = 27;
  public static readonly RULE_blockInstantiation = 28;
  public static readonly RULE_expressionList = 29;
  public static readonly RULE_identifier = 30;
  public static readonly RULE_arrayDimension = 31;
  public static readonly RULE_args = 32;
  public static readonly RULE_argsWithUnderscore = 33;
  public static readonly RULE_numSequence = 34;
  public static readonly literalNames: (string | null)[] = [
    null,
    "'.'",
    "'_'",
    "'?'",
    "':'",
    null,
    null,
    "'signal'",
    "'input'",
    "'output'",
    "'public'",
    "'template'",
    "'component'",
    "'var'",
    "'function'",
    "'return'",
    "'if'",
    "'else'",
    "'for'",
    "'while'",
    "'do'",
    "'log'",
    "'assert'",
    "'include'",
    "'custom'",
    "'pragma'",
    "'circom'",
    "'custom_templates'",
    "'main'",
    "'parallel'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "';'",
    "','",
    "'='",
    null,
    null,
    null,
    null,
    "'==='",
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
    "'>='",
    "'<='",
    "'&&'",
    "'||'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    null,
    null,
    null,
    null,
    "VERSION",
    "SIGNAL_TYPE",
    "SIGNAL",
    "INPUT",
    "OUTPUT",
    "PUBLIC",
    "TEMPLATE",
    "COMPONENT",
    "VAR",
    "FUNCTION",
    "RETURN",
    "IF",
    "ELSE",
    "FOR",
    "WHILE",
    "DO",
    "LOG",
    "ASSERT",
    "INCLUDE",
    "CUSTOM",
    "PRAGMA",
    "CIRCOM",
    "CUSTOM_TEMPLATES",
    "MAIN",
    "PARALLEL",
    "LP",
    "RP",
    "LB",
    "RB",
    "LC",
    "RC",
    "SEMICOLON",
    "COMMA",
    "ASSIGNMENT",
    "ASSIGNMENT_OP",
    "SELF_OP",
    "LEFT_ASSIGNMENT",
    "RIGHT_ASSIGNMENT",
    "CONSTRAINT_EQ",
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
    "pragmaDeclaration",
    "includeDeclaration",
    "blockDeclaration",
    "functionDeclaration",
    "functionBlock",
    "functionStmt",
    "templateDeclaration",
    "templateBlock",
    "componentMainDeclaration",
    "publicInputsList",
    "templateStmt",
    "forControl",
    "forInit",
    "forUpdate",
    "parExpression",
    "expression",
    "primary",
    "logStmt",
    "componentDefinition",
    "componentDeclaration",
    "signalDefinition",
    "tagList",
    "signalDeclaration",
    "varDefinition",
    "varDeclaration",
    "rhsValue",
    "componentCall",
    "blockInstantiation",
    "expressionList",
    "identifier",
    "arrayDimension",
    "args",
    "argsWithUnderscore",
    "numSequence",
  ];
  public get grammarFileName(): string {
    return "Circom.g4";
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
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 25) {
          {
            {
              this.state = 70;
              this.pragmaDeclaration();
            }
          }
          this.state = 75;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 23) {
          {
            {
              this.state = 76;
              this.includeDeclaration();
            }
          }
          this.state = 81;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 11 || _la === 14) {
          {
            {
              this.state = 82;
              this.blockDeclaration();
            }
          }
          this.state = 87;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 12) {
          {
            this.state = 88;
            this.componentMainDeclaration();
          }
        }

        this.state = 91;
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
  public pragmaDeclaration(): PragmaDeclarationContext {
    let localctx: PragmaDeclarationContext = new PragmaDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 2, CircomParser.RULE_pragmaDeclaration);
    try {
      this.state = 100;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 93;
            this.match(CircomParser.PRAGMA);
            this.state = 94;
            this.match(CircomParser.CIRCOM);
            this.state = 95;
            this.match(CircomParser.VERSION);
            this.state = 96;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 97;
            this.match(CircomParser.PRAGMA);
            this.state = 98;
            this.match(CircomParser.CUSTOM_TEMPLATES);
            this.state = 99;
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
  public includeDeclaration(): IncludeDeclarationContext {
    let localctx: IncludeDeclarationContext = new IncludeDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 4, CircomParser.RULE_includeDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 102;
        this.match(CircomParser.INCLUDE);
        this.state = 103;
        this.match(CircomParser.STRING);
        this.state = 104;
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
  public blockDeclaration(): BlockDeclarationContext {
    let localctx: BlockDeclarationContext = new BlockDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 6, CircomParser.RULE_blockDeclaration);
    try {
      this.state = 108;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 14:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 106;
            this.functionDeclaration();
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 107;
            this.templateDeclaration();
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
  public functionDeclaration(): FunctionDeclarationContext {
    let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 8, CircomParser.RULE_functionDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 110;
        this.match(CircomParser.FUNCTION);
        this.state = 111;
        this.match(CircomParser.ID);
        this.state = 112;
        this.match(CircomParser.LP);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 66) {
          {
            this.state = 113;
            this.args();
          }
        }

        this.state = 116;
        this.match(CircomParser.RP);
        this.state = 117;
        this.functionBlock();
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
  public functionBlock(): FunctionBlockContext {
    let localctx: FunctionBlockContext = new FunctionBlockContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 10, CircomParser.RULE_functionBlock);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 119;
        this.match(CircomParser.LC);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 13) & ~0x1f) === 0 && ((1 << (_la - 13)) & 2229101) !== 0) ||
          _la === 66
        ) {
          {
            {
              this.state = 120;
              this.functionStmt();
            }
          }
          this.state = 125;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 126;
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
  public functionStmt(): FunctionStmtContext {
    let localctx: FunctionStmtContext = new FunctionStmtContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 12, CircomParser.RULE_functionStmt);
    let _la: number;
    try {
      this.state = 175;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          localctx = new FuncBlockContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 128;
            this.functionBlock();
          }
          break;
        case 2:
          localctx = new FuncSelfOpContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 129;
            this.match(CircomParser.ID);
            this.state = 130;
            this.match(CircomParser.SELF_OP);
            this.state = 131;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new FuncVarDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 132;
            this.varDeclaration();
            this.state = 133;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          localctx = new FuncAssignmentExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 135;
            this.identifier();
            this.state = 136;
            _la = this._input.LA(1);
            if (!(_la === 38 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 137;
            this.expression(0);
            this.state = 138;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          localctx = new FuncVariadicAssignmentContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 140;
            this.match(CircomParser.LP);
            this.state = 141;
            this.argsWithUnderscore();
            this.state = 142;
            this.match(CircomParser.RP);
            this.state = 143;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 144;
            this.expression(0);
            this.state = 145;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          localctx = new IfFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 147;
            this.match(CircomParser.IF);
            this.state = 148;
            this.parExpression();
            this.state = 149;
            this.functionStmt();
            this.state = 152;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
              case 1:
                {
                  this.state = 150;
                  this.match(CircomParser.ELSE);
                  this.state = 151;
                  this.functionStmt();
                }
                break;
            }
          }
          break;
        case 7:
          localctx = new WhileFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 154;
            this.match(CircomParser.WHILE);
            this.state = 155;
            this.parExpression();
            this.state = 156;
            this.functionStmt();
          }
          break;
        case 8:
          localctx = new ForFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 158;
            this.match(CircomParser.FOR);
            this.state = 159;
            this.match(CircomParser.LP);
            this.state = 160;
            this.forControl();
            this.state = 161;
            this.match(CircomParser.RP);
            this.state = 162;
            this.functionStmt();
          }
          break;
        case 9:
          localctx = new ReturnFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 164;
            this.match(CircomParser.RETURN);
            this.state = 165;
            this.expression(0);
            this.state = 166;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          localctx = new AssertFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 168;
            this.match(CircomParser.ASSERT);
            this.state = 169;
            this.parExpression();
            this.state = 170;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          localctx = new LogFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 172;
            this.logStmt();
            this.state = 173;
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
  public templateDeclaration(): TemplateDeclarationContext {
    let localctx: TemplateDeclarationContext = new TemplateDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 14, CircomParser.RULE_templateDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 177;
        this.match(CircomParser.TEMPLATE);
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 24) {
          {
            this.state = 178;
            this.match(CircomParser.CUSTOM);
          }
        }

        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 29) {
          {
            this.state = 181;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 184;
        this.match(CircomParser.ID);
        this.state = 185;
        this.match(CircomParser.LP);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 66) {
          {
            this.state = 186;
            this.args();
          }
        }

        this.state = 189;
        this.match(CircomParser.RP);
        this.state = 190;
        this.templateBlock();
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
  public templateBlock(): TemplateBlockContext {
    let localctx: TemplateBlockContext = new TemplateBlockContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 16, CircomParser.RULE_templateBlock);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 192;
        this.match(CircomParser.LC);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1617768580) !== 0) ||
          (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1060869) !== 0) ||
          _la === 66 ||
          _la === 67
        ) {
          {
            {
              this.state = 193;
              this.templateStmt();
            }
          }
          this.state = 198;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 199;
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
  public componentMainDeclaration(): ComponentMainDeclarationContext {
    let localctx: ComponentMainDeclarationContext =
      new ComponentMainDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CircomParser.RULE_componentMainDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 201;
        this.match(CircomParser.COMPONENT);
        this.state = 202;
        this.match(CircomParser.MAIN);
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 34) {
          {
            this.state = 203;
            this.publicInputsList();
          }
        }

        this.state = 206;
        this.match(CircomParser.ASSIGNMENT);
        this.state = 207;
        this.match(CircomParser.ID);
        this.state = 208;
        this.match(CircomParser.LP);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 29) & ~0x1f) === 0 && ((1 << (_la - 29)) & 8486923) !== 0) ||
          _la === 66 ||
          _la === 67
        ) {
          {
            this.state = 209;
            this.expressionList();
          }
        }

        this.state = 212;
        this.match(CircomParser.RP);
        this.state = 213;
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
  public publicInputsList(): PublicInputsListContext {
    let localctx: PublicInputsListContext = new PublicInputsListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 20, CircomParser.RULE_publicInputsList);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 215;
        this.match(CircomParser.LC);
        this.state = 216;
        this.match(CircomParser.PUBLIC);
        this.state = 217;
        this.match(CircomParser.LB);
        this.state = 218;
        this.args();
        this.state = 219;
        this.match(CircomParser.RB);
        this.state = 220;
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
  public templateStmt(): TemplateStmtContext {
    let localctx: TemplateStmtContext = new TemplateStmtContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 22, CircomParser.RULE_templateStmt);
    let _la: number;
    try {
      this.state = 329;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 222;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 223;
            this.match(CircomParser.ID);
            this.state = 224;
            this.match(CircomParser.SELF_OP);
            this.state = 225;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 226;
            this.varDeclaration();
            this.state = 227;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 229;
            this.signalDeclaration();
            this.state = 230;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 232;
            this.componentDeclaration();
            this.state = 233;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 235;
            this.blockInstantiation();
            this.state = 236;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            {
              this.state = 238;
              this.identifier();
              this.state = 241;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === 1) {
                {
                  this.state = 239;
                  this.match(CircomParser.T__0);
                  this.state = 240;
                  this.match(CircomParser.ID);
                }
              }
            }
            this.state = 243;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 244;
            this.expression(0);
            this.state = 245;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 247;
            this.expression(0);
            this.state = 248;
            this.match(CircomParser.CONSTRAINT_EQ);
            this.state = 249;
            this.expression(0);
            this.state = 250;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 257;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
              case 1:
                {
                  this.state = 252;
                  this.primary();
                }
                break;
              case 2:
                {
                  {
                    this.state = 253;
                    this.identifier();
                    this.state = 254;
                    this.match(CircomParser.T__0);
                    this.state = 255;
                    this.identifier();
                  }
                }
                break;
            }
            this.state = 259;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 41)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 260;
            this.expression(0);
            this.state = 261;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 263;
            this.expression(0);
            this.state = 264;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            {
              this.state = 265;
              this.identifier();
              this.state = 268;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === 1) {
                {
                  this.state = 266;
                  this.match(CircomParser.T__0);
                  this.state = 267;
                  this.identifier();
                }
              }
            }
            this.state = 270;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 272;
            this.match(CircomParser.T__1);
            this.state = 273;
            _la = this._input.LA(1);
            if (!(_la === 38 || _la === 41)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 274;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 275;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 278;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 282;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 280;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 281;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 284;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 285;
            this.match(CircomParser.T__1);
            this.state = 286;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 288;
            this.match(CircomParser.LP);
            this.state = 289;
            this.argsWithUnderscore();
            this.state = 290;
            this.match(CircomParser.RP);
            this.state = 291;
            _la = this._input.LA(1);
            if (!(_la === 38 || _la === 41)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 294;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
              case 1:
                {
                  this.state = 292;
                  this.blockInstantiation();
                }
                break;
              case 2:
                {
                  this.state = 293;
                  this.expression(0);
                }
                break;
            }
            this.state = 296;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 298;
            this.blockInstantiation();
            this.state = 299;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 300;
            this.match(CircomParser.LP);
            this.state = 301;
            this.argsWithUnderscore();
            this.state = 302;
            this.match(CircomParser.RP);
            this.state = 303;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 305;
            this.match(CircomParser.IF);
            this.state = 306;
            this.parExpression();
            this.state = 307;
            this.templateStmt();
            this.state = 310;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
              case 1:
                {
                  this.state = 308;
                  this.match(CircomParser.ELSE);
                  this.state = 309;
                  this.templateStmt();
                }
                break;
            }
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 312;
            this.match(CircomParser.WHILE);
            this.state = 313;
            this.parExpression();
            this.state = 314;
            this.templateStmt();
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 316;
            this.match(CircomParser.FOR);
            this.state = 317;
            this.match(CircomParser.LP);
            this.state = 318;
            this.forControl();
            this.state = 319;
            this.match(CircomParser.RP);
            this.state = 320;
            this.templateStmt();
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 322;
            this.match(CircomParser.ASSERT);
            this.state = 323;
            this.parExpression();
            this.state = 324;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 326;
            this.logStmt();
            this.state = 327;
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
  public forControl(): ForControlContext {
    let localctx: ForControlContext = new ForControlContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 24, CircomParser.RULE_forControl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 331;
        this.forInit();
        this.state = 332;
        this.match(CircomParser.SEMICOLON);
        this.state = 333;
        this.expression(0);
        this.state = 334;
        this.match(CircomParser.SEMICOLON);
        this.state = 335;
        this.forUpdate();
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
  public forInit(): ForInitContext {
    let localctx: ForInitContext = new ForInitContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 26, CircomParser.RULE_forInit);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 338;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 13) {
          {
            this.state = 337;
            this.match(CircomParser.VAR);
          }
        }

        this.state = 340;
        this.identifier();
        this.state = 343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 38) {
          {
            this.state = 341;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 342;
            this.rhsValue();
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
  public forUpdate(): ForUpdateContext {
    let localctx: ForUpdateContext = new ForUpdateContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 28, CircomParser.RULE_forUpdate);
    let _la: number;
    try {
      this.state = 353;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 66:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 345;
            this.match(CircomParser.ID);
            this.state = 349;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 40:
                {
                  this.state = 346;
                  this.match(CircomParser.SELF_OP);
                }
                break;
              case 38:
              case 39:
                {
                  {
                    this.state = 347;
                    _la = this._input.LA(1);
                    if (!(_la === 38 || _la === 39)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 348;
                    this.expression(0);
                  }
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case 40:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 351;
            this.match(CircomParser.SELF_OP);
            this.state = 352;
            this.match(CircomParser.ID);
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
  public parExpression(): ParExpressionContext {
    let localctx: ParExpressionContext = new ParExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 30, CircomParser.RULE_parExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 355;
        this.match(CircomParser.LP);
        this.state = 356;
        this.expression(0);
        this.state = 357;
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
    let _startState: number = 32;
    this.enterRecursionRule(localctx, 32, CircomParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 364;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
          case 1:
            {
              localctx = new PrimaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 360;
              this.primary();
            }
            break;
          case 2:
            {
              localctx = new BlockInstantiationExpressionContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 361;
              this.blockInstantiation();
            }
            break;
          case 3:
            {
              localctx = new UnaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 362;
              (localctx as UnaryExpressionContext)._op = this._input.LT(1);
              _la = this._input.LA(1);
              if (
                !(((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 259) !== 0)
              ) {
                (localctx as UnaryExpressionContext)._op =
                  this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 363;
              this.expression(7);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 398;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 396;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 30, this._ctx)
              ) {
                case 1:
                  {
                    localctx = new TernaryExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 366;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 367;
                    this.match(CircomParser.T__2);
                    this.state = 368;
                    this.expression(0);
                    this.state = 369;
                    this.match(CircomParser.T__3);
                    this.state = 370;
                    this.expression(7);
                  }
                  break;
                case 2:
                  {
                    localctx = new BinaryExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 372;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 373;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 46) & ~0x1f) === 0 &&
                        ((1 << (_la - 46)) & 31) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 374;
                    this.expression(6);
                  }
                  break;
                case 3:
                  {
                    localctx = new BinaryExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 375;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 376;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 51 || _la === 52)) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 377;
                    this.expression(5);
                  }
                  break;
                case 4:
                  {
                    localctx = new BinaryExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 378;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 379;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 53 || _la === 54)) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 380;
                    this.expression(4);
                  }
                  break;
                case 5:
                  {
                    localctx = new BinaryExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 381;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 382;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 55) & ~0x1f) === 0 &&
                        ((1 << (_la - 55)) & 7) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 383;
                    this.expression(3);
                  }
                  break;
                case 6:
                  {
                    localctx = new BinaryExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 384;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)",
                      );
                    }
                    this.state = 385;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 58) & ~0x1f) === 0 &&
                        ((1 << (_la - 58)) & 255) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 386;
                    this.expression(2);
                  }
                  break;
                case 7:
                  {
                    localctx = new DotExpressionContext(
                      this,
                      new ExpressionContext(this, _parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      CircomParser.RULE_expression,
                    );
                    this.state = 387;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 388;
                    this.match(CircomParser.T__0);
                    this.state = 389;
                    this.match(CircomParser.ID);
                    this.state = 394;
                    this._errHandler.sync(this);
                    switch (
                      this._interp.adaptivePredict(this._input, 29, this._ctx)
                    ) {
                      case 1:
                        {
                          this.state = 390;
                          this.match(CircomParser.LB);
                          this.state = 391;
                          this.expression(0);
                          this.state = 392;
                          this.match(CircomParser.RB);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
          }
          this.state = 400;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
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
  public primary(): PrimaryContext {
    let localctx: PrimaryContext = new PrimaryContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 34, CircomParser.RULE_primary);
    try {
      this.state = 413;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 401;
            this.match(CircomParser.LP);
            this.state = 402;
            this.expression(0);
            this.state = 403;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 405;
            this.match(CircomParser.LB);
            this.state = 406;
            this.expressionList();
            this.state = 407;
            this.match(CircomParser.RB);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 409;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 410;
            this.identifier();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 411;
            this.args();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 412;
            this.numSequence();
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
  public logStmt(): LogStmtContext {
    let localctx: LogStmtContext = new LogStmtContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 36, CircomParser.RULE_logStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 415;
        this.match(CircomParser.LOG);
        this.state = 416;
        this.match(CircomParser.LP);
        this.state = 419;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 69:
            {
              this.state = 417;
              this.match(CircomParser.STRING);
            }
            break;
          case 29:
          case 30:
          case 32:
          case 44:
          case 45:
          case 52:
          case 66:
          case 67:
            {
              this.state = 418;
              this.expression(0);
            }
            break;
          case 31:
            break;
          default:
            break;
        }
        this.state = 421;
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
  public componentDefinition(): ComponentDefinitionContext {
    let localctx: ComponentDefinitionContext = new ComponentDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 38, CircomParser.RULE_componentDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 423;
        this.match(CircomParser.COMPONENT);
        this.state = 424;
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
  public componentDeclaration(): ComponentDeclarationContext {
    let localctx: ComponentDeclarationContext = new ComponentDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 40, CircomParser.RULE_componentDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 426;
        this.componentDefinition();
        this.state = 430;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 32) {
          {
            {
              this.state = 427;
              this.arrayDimension();
            }
          }
          this.state = 432;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 435;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 38) {
          {
            this.state = 433;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 434;
            this.blockInstantiation();
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
  public signalDefinition(): SignalDefinitionContext {
    let localctx: SignalDefinitionContext = new SignalDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 42, CircomParser.RULE_signalDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 437;
        this.match(CircomParser.SIGNAL);
        this.state = 439;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 6) {
          {
            this.state = 438;
            this.match(CircomParser.SIGNAL_TYPE);
          }
        }

        this.state = 442;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 34) {
          {
            this.state = 441;
            this.tagList();
          }
        }

        this.state = 444;
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
  public tagList(): TagListContext {
    let localctx: TagListContext = new TagListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 44, CircomParser.RULE_tagList);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 446;
        this.match(CircomParser.LC);
        this.state = 447;
        this.args();
        this.state = 448;
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
  public signalDeclaration(): SignalDeclarationContext {
    let localctx: SignalDeclarationContext = new SignalDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 46, CircomParser.RULE_signalDeclaration);
    let _la: number;
    try {
      this.state = 463;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 450;
            this.signalDefinition();
            this.state = 453;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 41) {
              {
                this.state = 451;
                this.match(CircomParser.LEFT_ASSIGNMENT);
                this.state = 452;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 455;
            this.signalDefinition();
            this.state = 460;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 456;
                  this.match(CircomParser.COMMA);
                  this.state = 457;
                  this.identifier();
                }
              }
              this.state = 462;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
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
  public varDefinition(): VarDefinitionContext {
    let localctx: VarDefinitionContext = new VarDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 48, CircomParser.RULE_varDefinition);
    let _la: number;
    try {
      this.state = 479;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 42, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 465;
            this.match(CircomParser.VAR);
            this.state = 466;
            this.identifier();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 467;
            this.match(CircomParser.VAR);
            this.state = 468;
            this.match(CircomParser.LP);
            this.state = 469;
            this.identifier();
            this.state = 474;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 470;
                  this.match(CircomParser.COMMA);
                  this.state = 471;
                  this.identifier();
                }
              }
              this.state = 476;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 477;
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
  public varDeclaration(): VarDeclarationContext {
    let localctx: VarDeclarationContext = new VarDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 50, CircomParser.RULE_varDeclaration);
    let _la: number;
    try {
      this.state = 494;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 481;
            this.varDefinition();
            this.state = 484;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 38) {
              {
                this.state = 482;
                this.match(CircomParser.ASSIGNMENT);
                this.state = 483;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 486;
            this.varDefinition();
            this.state = 491;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 487;
                  this.match(CircomParser.COMMA);
                  this.state = 488;
                  this.identifier();
                }
              }
              this.state = 493;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
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
  public rhsValue(): RhsValueContext {
    let localctx: RhsValueContext = new RhsValueContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 52, CircomParser.RULE_rhsValue);
    try {
      this.state = 498;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 46, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 496;
            this.expression(0);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 497;
            this.blockInstantiation();
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
  public componentCall(): ComponentCallContext {
    let localctx: ComponentCallContext = new ComponentCallContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 54, CircomParser.RULE_componentCall);
    let _la: number;
    try {
      this.state = 536;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 500;
            this.match(CircomParser.LP);
            this.state = 502;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 29) & ~0x1f) === 0 &&
                ((1 << (_la - 29)) & 8486923) !== 0) ||
              _la === 66 ||
              _la === 67
            ) {
              {
                this.state = 501;
                this.expressionList();
              }
            }

            this.state = 504;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 505;
            this.match(CircomParser.LP);
            this.state = 506;
            this.match(CircomParser.ID);
            this.state = 507;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 508;
            this.expression(0);
            this.state = 515;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 509;
                  this.match(CircomParser.COMMA);
                  this.state = 510;
                  this.match(CircomParser.ID);
                  this.state = 511;
                  this.match(CircomParser.LEFT_ASSIGNMENT);
                  this.state = 512;
                  this.expression(0);
                }
              }
              this.state = 517;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 518;
            this.match(CircomParser.RP);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 520;
            this.match(CircomParser.LP);
            this.state = 521;
            this.expression(0);
            this.state = 522;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 523;
            this.match(CircomParser.ID);
            this.state = 531;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 524;
                  this.match(CircomParser.COMMA);
                  this.state = 525;
                  this.expression(0);
                  this.state = 526;
                  this.match(CircomParser.RIGHT_ASSIGNMENT);
                  this.state = 527;
                  this.match(CircomParser.ID);
                }
              }
              this.state = 533;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 534;
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
  public blockInstantiation(): BlockInstantiationContext {
    let localctx: BlockInstantiationContext = new BlockInstantiationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 56, CircomParser.RULE_blockInstantiation);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 539;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 29) {
          {
            this.state = 538;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 541;
        this.match(CircomParser.ID);
        this.state = 542;
        this.match(CircomParser.LP);
        this.state = 544;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 29) & ~0x1f) === 0 && ((1 << (_la - 29)) & 8486923) !== 0) ||
          _la === 66 ||
          _la === 67
        ) {
          {
            this.state = 543;
            this.expressionList();
          }
        }

        this.state = 546;
        this.match(CircomParser.RP);
        this.state = 548;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
          case 1:
            {
              this.state = 547;
              this.componentCall();
            }
            break;
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
  public expressionList(): ExpressionListContext {
    let localctx: ExpressionListContext = new ExpressionListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 58, CircomParser.RULE_expressionList);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 550;
        this.expression(0);
        this.state = 555;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 37) {
          {
            {
              this.state = 551;
              this.match(CircomParser.COMMA);
              this.state = 552;
              this.expression(0);
            }
          }
          this.state = 557;
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
  public identifier(): IdentifierContext {
    let localctx: IdentifierContext = new IdentifierContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 60, CircomParser.RULE_identifier);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 558;
        this.match(CircomParser.ID);
        this.state = 562;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 559;
                this.arrayDimension();
              }
            }
          }
          this.state = 564;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
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
  public arrayDimension(): ArrayDimensionContext {
    let localctx: ArrayDimensionContext = new ArrayDimensionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 62, CircomParser.RULE_arrayDimension);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 565;
        this.match(CircomParser.LB);
        this.state = 566;
        this.expression(0);
        this.state = 567;
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
  public args(): ArgsContext {
    let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, CircomParser.RULE_args);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 569;
        this.match(CircomParser.ID);
        this.state = 574;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 570;
                this.match(CircomParser.COMMA);
                this.state = 571;
                this.match(CircomParser.ID);
              }
            }
          }
          this.state = 576;
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
  public argsWithUnderscore(): ArgsWithUnderscoreContext {
    let localctx: ArgsWithUnderscoreContext = new ArgsWithUnderscoreContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 66, CircomParser.RULE_argsWithUnderscore);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 577;
        _la = this._input.LA(1);
        if (!(_la === 2 || _la === 66)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 582;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 37) {
          {
            {
              this.state = 578;
              this.match(CircomParser.COMMA);
              this.state = 579;
              _la = this._input.LA(1);
              if (!(_la === 2 || _la === 66)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          this.state = 584;
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
  public numSequence(): NumSequenceContext {
    let localctx: NumSequenceContext = new NumSequenceContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 68, CircomParser.RULE_numSequence);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 585;
        this.match(CircomParser.NUMBER);
        this.state = 590;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 586;
                this.match(CircomParser.COMMA);
                this.state = 587;
                this.match(CircomParser.NUMBER);
              }
            }
          }
          this.state = 592;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
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

  public sempred(
    localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 16:
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
        return this.precpred(this._ctx, 6);
      case 1:
        return this.precpred(this._ctx, 5);
      case 2:
        return this.precpred(this._ctx, 4);
      case 3:
        return this.precpred(this._ctx, 3);
      case 4:
        return this.precpred(this._ctx, 2);
      case 5:
        return this.precpred(this._ctx, 1);
      case 6:
        return this.precpred(this._ctx, 8);
    }
    return true;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 72, 594, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 1, 0, 5, 0, 72, 8, 0, 10, 0, 12, 0, 75, 9, 0, 1, 0,
    5, 0, 78, 8, 0, 10, 0, 12, 0, 81, 9, 0, 1, 0, 5, 0, 84, 8, 0, 10, 0, 12, 0,
    87, 9, 0, 1, 0, 3, 0, 90, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 3, 1, 101, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 3, 3, 109, 8,
    3, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 115, 8, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 5,
    5, 122, 8, 5, 10, 5, 12, 5, 125, 9, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 153, 8, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 176, 8, 6, 1, 7, 1, 7, 3, 7, 180,
    8, 7, 1, 7, 3, 7, 183, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 188, 8, 7, 1, 7, 1, 7,
    1, 7, 1, 8, 1, 8, 5, 8, 195, 8, 8, 10, 8, 12, 8, 198, 9, 8, 1, 8, 1, 8, 1,
    9, 1, 9, 1, 9, 3, 9, 205, 8, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 211, 8, 9, 1,
    9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 242, 8, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 3, 11, 258, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 3, 11, 269, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 3, 11, 277, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 283, 8, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 295,
    8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 311, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 330, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12,
    1, 13, 3, 13, 339, 8, 13, 1, 13, 1, 13, 1, 13, 3, 13, 344, 8, 13, 1, 14, 1,
    14, 1, 14, 1, 14, 3, 14, 350, 8, 14, 1, 14, 1, 14, 3, 14, 354, 8, 14, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 365, 8, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 395, 8, 16, 5, 16, 397, 8,
    16, 10, 16, 12, 16, 400, 9, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1,
    17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 414, 8, 17, 1, 18, 1, 18, 1,
    18, 1, 18, 3, 18, 420, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 20, 1,
    20, 5, 20, 429, 8, 20, 10, 20, 12, 20, 432, 9, 20, 1, 20, 1, 20, 3, 20, 436,
    8, 20, 1, 21, 1, 21, 3, 21, 440, 8, 21, 1, 21, 3, 21, 443, 8, 21, 1, 21, 1,
    21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 3, 23, 454, 8, 23, 1,
    23, 1, 23, 1, 23, 5, 23, 459, 8, 23, 10, 23, 12, 23, 462, 9, 23, 3, 23, 464,
    8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 5, 24, 473, 8, 24,
    10, 24, 12, 24, 476, 9, 24, 1, 24, 1, 24, 3, 24, 480, 8, 24, 1, 25, 1, 25,
    1, 25, 3, 25, 485, 8, 25, 1, 25, 1, 25, 1, 25, 5, 25, 490, 8, 25, 10, 25,
    12, 25, 493, 9, 25, 3, 25, 495, 8, 25, 1, 26, 1, 26, 3, 26, 499, 8, 26, 1,
    27, 1, 27, 3, 27, 503, 8, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1,
    27, 1, 27, 1, 27, 5, 27, 514, 8, 27, 10, 27, 12, 27, 517, 9, 27, 1, 27, 1,
    27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27,
    530, 8, 27, 10, 27, 12, 27, 533, 9, 27, 1, 27, 1, 27, 3, 27, 537, 8, 27, 1,
    28, 3, 28, 540, 8, 28, 1, 28, 1, 28, 1, 28, 3, 28, 545, 8, 28, 1, 28, 1, 28,
    3, 28, 549, 8, 28, 1, 29, 1, 29, 1, 29, 5, 29, 554, 8, 29, 10, 29, 12, 29,
    557, 9, 29, 1, 30, 1, 30, 5, 30, 561, 8, 30, 10, 30, 12, 30, 564, 9, 30, 1,
    31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 5, 32, 573, 8, 32, 10, 32, 12,
    32, 576, 9, 32, 1, 33, 1, 33, 1, 33, 5, 33, 581, 8, 33, 10, 33, 12, 33, 584,
    9, 33, 1, 34, 1, 34, 1, 34, 5, 34, 589, 8, 34, 10, 34, 12, 34, 592, 9, 34,
    1, 34, 0, 1, 32, 35, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28,
    30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66,
    68, 0, 10, 1, 0, 38, 39, 2, 0, 39, 39, 41, 41, 2, 0, 38, 38, 41, 41, 2, 0,
    44, 45, 52, 52, 1, 0, 46, 50, 1, 0, 51, 52, 1, 0, 53, 54, 1, 0, 55, 57, 1,
    0, 58, 65, 2, 0, 2, 2, 66, 66, 655, 0, 73, 1, 0, 0, 0, 2, 100, 1, 0, 0, 0,
    4, 102, 1, 0, 0, 0, 6, 108, 1, 0, 0, 0, 8, 110, 1, 0, 0, 0, 10, 119, 1, 0,
    0, 0, 12, 175, 1, 0, 0, 0, 14, 177, 1, 0, 0, 0, 16, 192, 1, 0, 0, 0, 18,
    201, 1, 0, 0, 0, 20, 215, 1, 0, 0, 0, 22, 329, 1, 0, 0, 0, 24, 331, 1, 0, 0,
    0, 26, 338, 1, 0, 0, 0, 28, 353, 1, 0, 0, 0, 30, 355, 1, 0, 0, 0, 32, 364,
    1, 0, 0, 0, 34, 413, 1, 0, 0, 0, 36, 415, 1, 0, 0, 0, 38, 423, 1, 0, 0, 0,
    40, 426, 1, 0, 0, 0, 42, 437, 1, 0, 0, 0, 44, 446, 1, 0, 0, 0, 46, 463, 1,
    0, 0, 0, 48, 479, 1, 0, 0, 0, 50, 494, 1, 0, 0, 0, 52, 498, 1, 0, 0, 0, 54,
    536, 1, 0, 0, 0, 56, 539, 1, 0, 0, 0, 58, 550, 1, 0, 0, 0, 60, 558, 1, 0, 0,
    0, 62, 565, 1, 0, 0, 0, 64, 569, 1, 0, 0, 0, 66, 577, 1, 0, 0, 0, 68, 585,
    1, 0, 0, 0, 70, 72, 3, 2, 1, 0, 71, 70, 1, 0, 0, 0, 72, 75, 1, 0, 0, 0, 73,
    71, 1, 0, 0, 0, 73, 74, 1, 0, 0, 0, 74, 79, 1, 0, 0, 0, 75, 73, 1, 0, 0, 0,
    76, 78, 3, 4, 2, 0, 77, 76, 1, 0, 0, 0, 78, 81, 1, 0, 0, 0, 79, 77, 1, 0, 0,
    0, 79, 80, 1, 0, 0, 0, 80, 85, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 82, 84, 3, 6,
    3, 0, 83, 82, 1, 0, 0, 0, 84, 87, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 85, 86, 1,
    0, 0, 0, 86, 89, 1, 0, 0, 0, 87, 85, 1, 0, 0, 0, 88, 90, 3, 18, 9, 0, 89,
    88, 1, 0, 0, 0, 89, 90, 1, 0, 0, 0, 90, 91, 1, 0, 0, 0, 91, 92, 5, 0, 0, 1,
    92, 1, 1, 0, 0, 0, 93, 94, 5, 25, 0, 0, 94, 95, 5, 26, 0, 0, 95, 96, 5, 5,
    0, 0, 96, 101, 5, 36, 0, 0, 97, 98, 5, 25, 0, 0, 98, 99, 5, 27, 0, 0, 99,
    101, 5, 36, 0, 0, 100, 93, 1, 0, 0, 0, 100, 97, 1, 0, 0, 0, 101, 3, 1, 0, 0,
    0, 102, 103, 5, 23, 0, 0, 103, 104, 5, 69, 0, 0, 104, 105, 5, 36, 0, 0, 105,
    5, 1, 0, 0, 0, 106, 109, 3, 8, 4, 0, 107, 109, 3, 14, 7, 0, 108, 106, 1, 0,
    0, 0, 108, 107, 1, 0, 0, 0, 109, 7, 1, 0, 0, 0, 110, 111, 5, 14, 0, 0, 111,
    112, 5, 66, 0, 0, 112, 114, 5, 30, 0, 0, 113, 115, 3, 64, 32, 0, 114, 113,
    1, 0, 0, 0, 114, 115, 1, 0, 0, 0, 115, 116, 1, 0, 0, 0, 116, 117, 5, 31, 0,
    0, 117, 118, 3, 10, 5, 0, 118, 9, 1, 0, 0, 0, 119, 123, 5, 34, 0, 0, 120,
    122, 3, 12, 6, 0, 121, 120, 1, 0, 0, 0, 122, 125, 1, 0, 0, 0, 123, 121, 1,
    0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 126, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0,
    126, 127, 5, 35, 0, 0, 127, 11, 1, 0, 0, 0, 128, 176, 3, 10, 5, 0, 129, 130,
    5, 66, 0, 0, 130, 131, 5, 40, 0, 0, 131, 176, 5, 36, 0, 0, 132, 133, 3, 50,
    25, 0, 133, 134, 5, 36, 0, 0, 134, 176, 1, 0, 0, 0, 135, 136, 3, 60, 30, 0,
    136, 137, 7, 0, 0, 0, 137, 138, 3, 32, 16, 0, 138, 139, 5, 36, 0, 0, 139,
    176, 1, 0, 0, 0, 140, 141, 5, 30, 0, 0, 141, 142, 3, 66, 33, 0, 142, 143, 5,
    31, 0, 0, 143, 144, 5, 38, 0, 0, 144, 145, 3, 32, 16, 0, 145, 146, 5, 36, 0,
    0, 146, 176, 1, 0, 0, 0, 147, 148, 5, 16, 0, 0, 148, 149, 3, 30, 15, 0, 149,
    152, 3, 12, 6, 0, 150, 151, 5, 17, 0, 0, 151, 153, 3, 12, 6, 0, 152, 150, 1,
    0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 176, 1, 0, 0, 0, 154, 155, 5, 19, 0, 0,
    155, 156, 3, 30, 15, 0, 156, 157, 3, 12, 6, 0, 157, 176, 1, 0, 0, 0, 158,
    159, 5, 18, 0, 0, 159, 160, 5, 30, 0, 0, 160, 161, 3, 24, 12, 0, 161, 162,
    5, 31, 0, 0, 162, 163, 3, 12, 6, 0, 163, 176, 1, 0, 0, 0, 164, 165, 5, 15,
    0, 0, 165, 166, 3, 32, 16, 0, 166, 167, 5, 36, 0, 0, 167, 176, 1, 0, 0, 0,
    168, 169, 5, 22, 0, 0, 169, 170, 3, 30, 15, 0, 170, 171, 5, 36, 0, 0, 171,
    176, 1, 0, 0, 0, 172, 173, 3, 36, 18, 0, 173, 174, 5, 36, 0, 0, 174, 176, 1,
    0, 0, 0, 175, 128, 1, 0, 0, 0, 175, 129, 1, 0, 0, 0, 175, 132, 1, 0, 0, 0,
    175, 135, 1, 0, 0, 0, 175, 140, 1, 0, 0, 0, 175, 147, 1, 0, 0, 0, 175, 154,
    1, 0, 0, 0, 175, 158, 1, 0, 0, 0, 175, 164, 1, 0, 0, 0, 175, 168, 1, 0, 0,
    0, 175, 172, 1, 0, 0, 0, 176, 13, 1, 0, 0, 0, 177, 179, 5, 11, 0, 0, 178,
    180, 5, 24, 0, 0, 179, 178, 1, 0, 0, 0, 179, 180, 1, 0, 0, 0, 180, 182, 1,
    0, 0, 0, 181, 183, 5, 29, 0, 0, 182, 181, 1, 0, 0, 0, 182, 183, 1, 0, 0, 0,
    183, 184, 1, 0, 0, 0, 184, 185, 5, 66, 0, 0, 185, 187, 5, 30, 0, 0, 186,
    188, 3, 64, 32, 0, 187, 186, 1, 0, 0, 0, 187, 188, 1, 0, 0, 0, 188, 189, 1,
    0, 0, 0, 189, 190, 5, 31, 0, 0, 190, 191, 3, 16, 8, 0, 191, 15, 1, 0, 0, 0,
    192, 196, 5, 34, 0, 0, 193, 195, 3, 22, 11, 0, 194, 193, 1, 0, 0, 0, 195,
    198, 1, 0, 0, 0, 196, 194, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197, 199, 1, 0,
    0, 0, 198, 196, 1, 0, 0, 0, 199, 200, 5, 35, 0, 0, 200, 17, 1, 0, 0, 0, 201,
    202, 5, 12, 0, 0, 202, 204, 5, 28, 0, 0, 203, 205, 3, 20, 10, 0, 204, 203,
    1, 0, 0, 0, 204, 205, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 207, 5, 38, 0,
    0, 207, 208, 5, 66, 0, 0, 208, 210, 5, 30, 0, 0, 209, 211, 3, 58, 29, 0,
    210, 209, 1, 0, 0, 0, 210, 211, 1, 0, 0, 0, 211, 212, 1, 0, 0, 0, 212, 213,
    5, 31, 0, 0, 213, 214, 5, 36, 0, 0, 214, 19, 1, 0, 0, 0, 215, 216, 5, 34, 0,
    0, 216, 217, 5, 10, 0, 0, 217, 218, 5, 32, 0, 0, 218, 219, 3, 64, 32, 0,
    219, 220, 5, 33, 0, 0, 220, 221, 5, 35, 0, 0, 221, 21, 1, 0, 0, 0, 222, 330,
    3, 16, 8, 0, 223, 224, 5, 66, 0, 0, 224, 225, 5, 40, 0, 0, 225, 330, 5, 36,
    0, 0, 226, 227, 3, 50, 25, 0, 227, 228, 5, 36, 0, 0, 228, 330, 1, 0, 0, 0,
    229, 230, 3, 46, 23, 0, 230, 231, 5, 36, 0, 0, 231, 330, 1, 0, 0, 0, 232,
    233, 3, 40, 20, 0, 233, 234, 5, 36, 0, 0, 234, 330, 1, 0, 0, 0, 235, 236, 3,
    56, 28, 0, 236, 237, 5, 36, 0, 0, 237, 330, 1, 0, 0, 0, 238, 241, 3, 60, 30,
    0, 239, 240, 5, 1, 0, 0, 240, 242, 5, 66, 0, 0, 241, 239, 1, 0, 0, 0, 241,
    242, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 244, 5, 38, 0, 0, 244, 245, 3,
    32, 16, 0, 245, 246, 5, 36, 0, 0, 246, 330, 1, 0, 0, 0, 247, 248, 3, 32, 16,
    0, 248, 249, 5, 43, 0, 0, 249, 250, 3, 32, 16, 0, 250, 251, 5, 36, 0, 0,
    251, 330, 1, 0, 0, 0, 252, 258, 3, 34, 17, 0, 253, 254, 3, 60, 30, 0, 254,
    255, 5, 1, 0, 0, 255, 256, 3, 60, 30, 0, 256, 258, 1, 0, 0, 0, 257, 252, 1,
    0, 0, 0, 257, 253, 1, 0, 0, 0, 258, 259, 1, 0, 0, 0, 259, 260, 7, 1, 0, 0,
    260, 261, 3, 32, 16, 0, 261, 262, 5, 36, 0, 0, 262, 330, 1, 0, 0, 0, 263,
    264, 3, 32, 16, 0, 264, 265, 5, 42, 0, 0, 265, 268, 3, 60, 30, 0, 266, 267,
    5, 1, 0, 0, 267, 269, 3, 60, 30, 0, 268, 266, 1, 0, 0, 0, 268, 269, 1, 0, 0,
    0, 269, 270, 1, 0, 0, 0, 270, 271, 5, 36, 0, 0, 271, 330, 1, 0, 0, 0, 272,
    273, 5, 2, 0, 0, 273, 276, 7, 2, 0, 0, 274, 277, 3, 32, 16, 0, 275, 277, 3,
    56, 28, 0, 276, 274, 1, 0, 0, 0, 276, 275, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0,
    278, 279, 5, 36, 0, 0, 279, 330, 1, 0, 0, 0, 280, 283, 3, 32, 16, 0, 281,
    283, 3, 56, 28, 0, 282, 280, 1, 0, 0, 0, 282, 281, 1, 0, 0, 0, 283, 284, 1,
    0, 0, 0, 284, 285, 5, 42, 0, 0, 285, 286, 5, 2, 0, 0, 286, 287, 5, 36, 0, 0,
    287, 330, 1, 0, 0, 0, 288, 289, 5, 30, 0, 0, 289, 290, 3, 66, 33, 0, 290,
    291, 5, 31, 0, 0, 291, 294, 7, 2, 0, 0, 292, 295, 3, 56, 28, 0, 293, 295, 3,
    32, 16, 0, 294, 292, 1, 0, 0, 0, 294, 293, 1, 0, 0, 0, 295, 296, 1, 0, 0, 0,
    296, 297, 5, 36, 0, 0, 297, 330, 1, 0, 0, 0, 298, 299, 3, 56, 28, 0, 299,
    300, 5, 42, 0, 0, 300, 301, 5, 30, 0, 0, 301, 302, 3, 66, 33, 0, 302, 303,
    5, 31, 0, 0, 303, 304, 5, 36, 0, 0, 304, 330, 1, 0, 0, 0, 305, 306, 5, 16,
    0, 0, 306, 307, 3, 30, 15, 0, 307, 310, 3, 22, 11, 0, 308, 309, 5, 17, 0, 0,
    309, 311, 3, 22, 11, 0, 310, 308, 1, 0, 0, 0, 310, 311, 1, 0, 0, 0, 311,
    330, 1, 0, 0, 0, 312, 313, 5, 19, 0, 0, 313, 314, 3, 30, 15, 0, 314, 315, 3,
    22, 11, 0, 315, 330, 1, 0, 0, 0, 316, 317, 5, 18, 0, 0, 317, 318, 5, 30, 0,
    0, 318, 319, 3, 24, 12, 0, 319, 320, 5, 31, 0, 0, 320, 321, 3, 22, 11, 0,
    321, 330, 1, 0, 0, 0, 322, 323, 5, 22, 0, 0, 323, 324, 3, 30, 15, 0, 324,
    325, 5, 36, 0, 0, 325, 330, 1, 0, 0, 0, 326, 327, 3, 36, 18, 0, 327, 328, 5,
    36, 0, 0, 328, 330, 1, 0, 0, 0, 329, 222, 1, 0, 0, 0, 329, 223, 1, 0, 0, 0,
    329, 226, 1, 0, 0, 0, 329, 229, 1, 0, 0, 0, 329, 232, 1, 0, 0, 0, 329, 235,
    1, 0, 0, 0, 329, 238, 1, 0, 0, 0, 329, 247, 1, 0, 0, 0, 329, 257, 1, 0, 0,
    0, 329, 263, 1, 0, 0, 0, 329, 272, 1, 0, 0, 0, 329, 282, 1, 0, 0, 0, 329,
    288, 1, 0, 0, 0, 329, 298, 1, 0, 0, 0, 329, 305, 1, 0, 0, 0, 329, 312, 1, 0,
    0, 0, 329, 316, 1, 0, 0, 0, 329, 322, 1, 0, 0, 0, 329, 326, 1, 0, 0, 0, 330,
    23, 1, 0, 0, 0, 331, 332, 3, 26, 13, 0, 332, 333, 5, 36, 0, 0, 333, 334, 3,
    32, 16, 0, 334, 335, 5, 36, 0, 0, 335, 336, 3, 28, 14, 0, 336, 25, 1, 0, 0,
    0, 337, 339, 5, 13, 0, 0, 338, 337, 1, 0, 0, 0, 338, 339, 1, 0, 0, 0, 339,
    340, 1, 0, 0, 0, 340, 343, 3, 60, 30, 0, 341, 342, 5, 38, 0, 0, 342, 344, 3,
    52, 26, 0, 343, 341, 1, 0, 0, 0, 343, 344, 1, 0, 0, 0, 344, 27, 1, 0, 0, 0,
    345, 349, 5, 66, 0, 0, 346, 350, 5, 40, 0, 0, 347, 348, 7, 0, 0, 0, 348,
    350, 3, 32, 16, 0, 349, 346, 1, 0, 0, 0, 349, 347, 1, 0, 0, 0, 350, 354, 1,
    0, 0, 0, 351, 352, 5, 40, 0, 0, 352, 354, 5, 66, 0, 0, 353, 345, 1, 0, 0, 0,
    353, 351, 1, 0, 0, 0, 354, 29, 1, 0, 0, 0, 355, 356, 5, 30, 0, 0, 356, 357,
    3, 32, 16, 0, 357, 358, 5, 31, 0, 0, 358, 31, 1, 0, 0, 0, 359, 360, 6, 16,
    -1, 0, 360, 365, 3, 34, 17, 0, 361, 365, 3, 56, 28, 0, 362, 363, 7, 3, 0, 0,
    363, 365, 3, 32, 16, 7, 364, 359, 1, 0, 0, 0, 364, 361, 1, 0, 0, 0, 364,
    362, 1, 0, 0, 0, 365, 398, 1, 0, 0, 0, 366, 367, 10, 6, 0, 0, 367, 368, 5,
    3, 0, 0, 368, 369, 3, 32, 16, 0, 369, 370, 5, 4, 0, 0, 370, 371, 3, 32, 16,
    7, 371, 397, 1, 0, 0, 0, 372, 373, 10, 5, 0, 0, 373, 374, 7, 4, 0, 0, 374,
    397, 3, 32, 16, 6, 375, 376, 10, 4, 0, 0, 376, 377, 7, 5, 0, 0, 377, 397, 3,
    32, 16, 5, 378, 379, 10, 3, 0, 0, 379, 380, 7, 6, 0, 0, 380, 397, 3, 32, 16,
    4, 381, 382, 10, 2, 0, 0, 382, 383, 7, 7, 0, 0, 383, 397, 3, 32, 16, 3, 384,
    385, 10, 1, 0, 0, 385, 386, 7, 8, 0, 0, 386, 397, 3, 32, 16, 2, 387, 388,
    10, 8, 0, 0, 388, 389, 5, 1, 0, 0, 389, 394, 5, 66, 0, 0, 390, 391, 5, 32,
    0, 0, 391, 392, 3, 32, 16, 0, 392, 393, 5, 33, 0, 0, 393, 395, 1, 0, 0, 0,
    394, 390, 1, 0, 0, 0, 394, 395, 1, 0, 0, 0, 395, 397, 1, 0, 0, 0, 396, 366,
    1, 0, 0, 0, 396, 372, 1, 0, 0, 0, 396, 375, 1, 0, 0, 0, 396, 378, 1, 0, 0,
    0, 396, 381, 1, 0, 0, 0, 396, 384, 1, 0, 0, 0, 396, 387, 1, 0, 0, 0, 397,
    400, 1, 0, 0, 0, 398, 396, 1, 0, 0, 0, 398, 399, 1, 0, 0, 0, 399, 33, 1, 0,
    0, 0, 400, 398, 1, 0, 0, 0, 401, 402, 5, 30, 0, 0, 402, 403, 3, 32, 16, 0,
    403, 404, 5, 31, 0, 0, 404, 414, 1, 0, 0, 0, 405, 406, 5, 32, 0, 0, 406,
    407, 3, 58, 29, 0, 407, 408, 5, 33, 0, 0, 408, 414, 1, 0, 0, 0, 409, 414, 5,
    67, 0, 0, 410, 414, 3, 60, 30, 0, 411, 414, 3, 64, 32, 0, 412, 414, 3, 68,
    34, 0, 413, 401, 1, 0, 0, 0, 413, 405, 1, 0, 0, 0, 413, 409, 1, 0, 0, 0,
    413, 410, 1, 0, 0, 0, 413, 411, 1, 0, 0, 0, 413, 412, 1, 0, 0, 0, 414, 35,
    1, 0, 0, 0, 415, 416, 5, 21, 0, 0, 416, 419, 5, 30, 0, 0, 417, 420, 5, 69,
    0, 0, 418, 420, 3, 32, 16, 0, 419, 417, 1, 0, 0, 0, 419, 418, 1, 0, 0, 0,
    419, 420, 1, 0, 0, 0, 420, 421, 1, 0, 0, 0, 421, 422, 5, 31, 0, 0, 422, 37,
    1, 0, 0, 0, 423, 424, 5, 12, 0, 0, 424, 425, 5, 66, 0, 0, 425, 39, 1, 0, 0,
    0, 426, 430, 3, 38, 19, 0, 427, 429, 3, 62, 31, 0, 428, 427, 1, 0, 0, 0,
    429, 432, 1, 0, 0, 0, 430, 428, 1, 0, 0, 0, 430, 431, 1, 0, 0, 0, 431, 435,
    1, 0, 0, 0, 432, 430, 1, 0, 0, 0, 433, 434, 5, 38, 0, 0, 434, 436, 3, 56,
    28, 0, 435, 433, 1, 0, 0, 0, 435, 436, 1, 0, 0, 0, 436, 41, 1, 0, 0, 0, 437,
    439, 5, 7, 0, 0, 438, 440, 5, 6, 0, 0, 439, 438, 1, 0, 0, 0, 439, 440, 1, 0,
    0, 0, 440, 442, 1, 0, 0, 0, 441, 443, 3, 44, 22, 0, 442, 441, 1, 0, 0, 0,
    442, 443, 1, 0, 0, 0, 443, 444, 1, 0, 0, 0, 444, 445, 3, 60, 30, 0, 445, 43,
    1, 0, 0, 0, 446, 447, 5, 34, 0, 0, 447, 448, 3, 64, 32, 0, 448, 449, 5, 35,
    0, 0, 449, 45, 1, 0, 0, 0, 450, 453, 3, 42, 21, 0, 451, 452, 5, 41, 0, 0,
    452, 454, 3, 52, 26, 0, 453, 451, 1, 0, 0, 0, 453, 454, 1, 0, 0, 0, 454,
    464, 1, 0, 0, 0, 455, 460, 3, 42, 21, 0, 456, 457, 5, 37, 0, 0, 457, 459, 3,
    60, 30, 0, 458, 456, 1, 0, 0, 0, 459, 462, 1, 0, 0, 0, 460, 458, 1, 0, 0, 0,
    460, 461, 1, 0, 0, 0, 461, 464, 1, 0, 0, 0, 462, 460, 1, 0, 0, 0, 463, 450,
    1, 0, 0, 0, 463, 455, 1, 0, 0, 0, 464, 47, 1, 0, 0, 0, 465, 466, 5, 13, 0,
    0, 466, 480, 3, 60, 30, 0, 467, 468, 5, 13, 0, 0, 468, 469, 5, 30, 0, 0,
    469, 474, 3, 60, 30, 0, 470, 471, 5, 37, 0, 0, 471, 473, 3, 60, 30, 0, 472,
    470, 1, 0, 0, 0, 473, 476, 1, 0, 0, 0, 474, 472, 1, 0, 0, 0, 474, 475, 1, 0,
    0, 0, 475, 477, 1, 0, 0, 0, 476, 474, 1, 0, 0, 0, 477, 478, 5, 31, 0, 0,
    478, 480, 1, 0, 0, 0, 479, 465, 1, 0, 0, 0, 479, 467, 1, 0, 0, 0, 480, 49,
    1, 0, 0, 0, 481, 484, 3, 48, 24, 0, 482, 483, 5, 38, 0, 0, 483, 485, 3, 52,
    26, 0, 484, 482, 1, 0, 0, 0, 484, 485, 1, 0, 0, 0, 485, 495, 1, 0, 0, 0,
    486, 491, 3, 48, 24, 0, 487, 488, 5, 37, 0, 0, 488, 490, 3, 60, 30, 0, 489,
    487, 1, 0, 0, 0, 490, 493, 1, 0, 0, 0, 491, 489, 1, 0, 0, 0, 491, 492, 1, 0,
    0, 0, 492, 495, 1, 0, 0, 0, 493, 491, 1, 0, 0, 0, 494, 481, 1, 0, 0, 0, 494,
    486, 1, 0, 0, 0, 495, 51, 1, 0, 0, 0, 496, 499, 3, 32, 16, 0, 497, 499, 3,
    56, 28, 0, 498, 496, 1, 0, 0, 0, 498, 497, 1, 0, 0, 0, 499, 53, 1, 0, 0, 0,
    500, 502, 5, 30, 0, 0, 501, 503, 3, 58, 29, 0, 502, 501, 1, 0, 0, 0, 502,
    503, 1, 0, 0, 0, 503, 504, 1, 0, 0, 0, 504, 537, 5, 31, 0, 0, 505, 506, 5,
    30, 0, 0, 506, 507, 5, 66, 0, 0, 507, 508, 5, 41, 0, 0, 508, 515, 3, 32, 16,
    0, 509, 510, 5, 37, 0, 0, 510, 511, 5, 66, 0, 0, 511, 512, 5, 41, 0, 0, 512,
    514, 3, 32, 16, 0, 513, 509, 1, 0, 0, 0, 514, 517, 1, 0, 0, 0, 515, 513, 1,
    0, 0, 0, 515, 516, 1, 0, 0, 0, 516, 518, 1, 0, 0, 0, 517, 515, 1, 0, 0, 0,
    518, 519, 5, 31, 0, 0, 519, 537, 1, 0, 0, 0, 520, 521, 5, 30, 0, 0, 521,
    522, 3, 32, 16, 0, 522, 523, 5, 42, 0, 0, 523, 531, 5, 66, 0, 0, 524, 525,
    5, 37, 0, 0, 525, 526, 3, 32, 16, 0, 526, 527, 5, 42, 0, 0, 527, 528, 5, 66,
    0, 0, 528, 530, 1, 0, 0, 0, 529, 524, 1, 0, 0, 0, 530, 533, 1, 0, 0, 0, 531,
    529, 1, 0, 0, 0, 531, 532, 1, 0, 0, 0, 532, 534, 1, 0, 0, 0, 533, 531, 1, 0,
    0, 0, 534, 535, 5, 31, 0, 0, 535, 537, 1, 0, 0, 0, 536, 500, 1, 0, 0, 0,
    536, 505, 1, 0, 0, 0, 536, 520, 1, 0, 0, 0, 537, 55, 1, 0, 0, 0, 538, 540,
    5, 29, 0, 0, 539, 538, 1, 0, 0, 0, 539, 540, 1, 0, 0, 0, 540, 541, 1, 0, 0,
    0, 541, 542, 5, 66, 0, 0, 542, 544, 5, 30, 0, 0, 543, 545, 3, 58, 29, 0,
    544, 543, 1, 0, 0, 0, 544, 545, 1, 0, 0, 0, 545, 546, 1, 0, 0, 0, 546, 548,
    5, 31, 0, 0, 547, 549, 3, 54, 27, 0, 548, 547, 1, 0, 0, 0, 548, 549, 1, 0,
    0, 0, 549, 57, 1, 0, 0, 0, 550, 555, 3, 32, 16, 0, 551, 552, 5, 37, 0, 0,
    552, 554, 3, 32, 16, 0, 553, 551, 1, 0, 0, 0, 554, 557, 1, 0, 0, 0, 555,
    553, 1, 0, 0, 0, 555, 556, 1, 0, 0, 0, 556, 59, 1, 0, 0, 0, 557, 555, 1, 0,
    0, 0, 558, 562, 5, 66, 0, 0, 559, 561, 3, 62, 31, 0, 560, 559, 1, 0, 0, 0,
    561, 564, 1, 0, 0, 0, 562, 560, 1, 0, 0, 0, 562, 563, 1, 0, 0, 0, 563, 61,
    1, 0, 0, 0, 564, 562, 1, 0, 0, 0, 565, 566, 5, 32, 0, 0, 566, 567, 3, 32,
    16, 0, 567, 568, 5, 33, 0, 0, 568, 63, 1, 0, 0, 0, 569, 574, 5, 66, 0, 0,
    570, 571, 5, 37, 0, 0, 571, 573, 5, 66, 0, 0, 572, 570, 1, 0, 0, 0, 573,
    576, 1, 0, 0, 0, 574, 572, 1, 0, 0, 0, 574, 575, 1, 0, 0, 0, 575, 65, 1, 0,
    0, 0, 576, 574, 1, 0, 0, 0, 577, 582, 7, 9, 0, 0, 578, 579, 5, 37, 0, 0,
    579, 581, 7, 9, 0, 0, 580, 578, 1, 0, 0, 0, 581, 584, 1, 0, 0, 0, 582, 580,
    1, 0, 0, 0, 582, 583, 1, 0, 0, 0, 583, 67, 1, 0, 0, 0, 584, 582, 1, 0, 0, 0,
    585, 590, 5, 67, 0, 0, 586, 587, 5, 37, 0, 0, 587, 589, 5, 67, 0, 0, 588,
    586, 1, 0, 0, 0, 589, 592, 1, 0, 0, 0, 590, 588, 1, 0, 0, 0, 590, 591, 1, 0,
    0, 0, 591, 69, 1, 0, 0, 0, 592, 590, 1, 0, 0, 0, 59, 73, 79, 85, 89, 100,
    108, 114, 123, 152, 175, 179, 182, 187, 196, 204, 210, 241, 257, 268, 276,
    282, 294, 310, 329, 338, 343, 349, 353, 364, 394, 396, 398, 413, 419, 430,
    435, 439, 442, 453, 460, 463, 474, 479, 484, 491, 494, 498, 502, 515, 531,
    536, 539, 544, 548, 555, 562, 574, 582, 590,
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
  public pragmaDeclaration_list(): PragmaDeclarationContext[] {
    return this.getTypedRuleContexts(
      PragmaDeclarationContext,
    ) as PragmaDeclarationContext[];
  }
  public pragmaDeclaration(i: number): PragmaDeclarationContext {
    return this.getTypedRuleContext(
      PragmaDeclarationContext,
      i,
    ) as PragmaDeclarationContext;
  }
  public includeDeclaration_list(): IncludeDeclarationContext[] {
    return this.getTypedRuleContexts(
      IncludeDeclarationContext,
    ) as IncludeDeclarationContext[];
  }
  public includeDeclaration(i: number): IncludeDeclarationContext {
    return this.getTypedRuleContext(
      IncludeDeclarationContext,
      i,
    ) as IncludeDeclarationContext;
  }
  public blockDeclaration_list(): BlockDeclarationContext[] {
    return this.getTypedRuleContexts(
      BlockDeclarationContext,
    ) as BlockDeclarationContext[];
  }
  public blockDeclaration(i: number): BlockDeclarationContext {
    return this.getTypedRuleContext(
      BlockDeclarationContext,
      i,
    ) as BlockDeclarationContext;
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
  public enterRule(listener: CircomListener): void {
    if (listener.enterCircuit) {
      listener.enterCircuit(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitCircuit) {
      listener.exitCircuit(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitCircuit) {
      return visitor.visitCircuit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PragmaDeclarationContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
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
  public CUSTOM_TEMPLATES(): TerminalNode {
    return this.getToken(CircomParser.CUSTOM_TEMPLATES, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_pragmaDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterPragmaDeclaration) {
      listener.enterPragmaDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitPragmaDeclaration) {
      listener.exitPragmaDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitPragmaDeclaration) {
      return visitor.visitPragmaDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IncludeDeclarationContext extends ParserRuleContext {
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
    return CircomParser.RULE_includeDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterIncludeDeclaration) {
      listener.enterIncludeDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitIncludeDeclaration) {
      listener.exitIncludeDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitIncludeDeclaration) {
      return visitor.visitIncludeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockDeclarationContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public functionDeclaration(): FunctionDeclarationContext {
    return this.getTypedRuleContext(
      FunctionDeclarationContext,
      0,
    ) as FunctionDeclarationContext;
  }
  public templateDeclaration(): TemplateDeclarationContext {
    return this.getTypedRuleContext(
      TemplateDeclarationContext,
      0,
    ) as TemplateDeclarationContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_blockDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterBlockDeclaration) {
      listener.enterBlockDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitBlockDeclaration) {
      listener.exitBlockDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitBlockDeclaration) {
      return visitor.visitBlockDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FunctionDeclarationContext extends ParserRuleContext {
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
  public functionBlock(): FunctionBlockContext {
    return this.getTypedRuleContext(
      FunctionBlockContext,
      0,
    ) as FunctionBlockContext;
  }
  public args(): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_functionDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFunctionDeclaration) {
      listener.enterFunctionDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFunctionDeclaration) {
      listener.exitFunctionDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFunctionDeclaration) {
      return visitor.visitFunctionDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FunctionBlockContext extends ParserRuleContext {
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
  public functionStmt_list(): FunctionStmtContext[] {
    return this.getTypedRuleContexts(
      FunctionStmtContext,
    ) as FunctionStmtContext[];
  }
  public functionStmt(i: number): FunctionStmtContext {
    return this.getTypedRuleContext(
      FunctionStmtContext,
      i,
    ) as FunctionStmtContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_functionBlock;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFunctionBlock) {
      listener.enterFunctionBlock(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFunctionBlock) {
      listener.exitFunctionBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFunctionBlock) {
      return visitor.visitFunctionBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FunctionStmtContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_functionStmt;
  }
  public copyFrom(ctx: FunctionStmtContext): void {
    super.copyFrom(ctx);
  }
}
export class ForFuncStmtContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public FOR(): TerminalNode {
    return this.getToken(CircomParser.FOR, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public forControl(): ForControlContext {
    return this.getTypedRuleContext(ForControlContext, 0) as ForControlContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public functionStmt(): FunctionStmtContext {
    return this.getTypedRuleContext(
      FunctionStmtContext,
      0,
    ) as FunctionStmtContext;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterForFuncStmt) {
      listener.enterForFuncStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitForFuncStmt) {
      listener.exitForFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitForFuncStmt) {
      return visitor.visitForFuncStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LogFuncStmtContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public logStmt(): LogStmtContext {
    return this.getTypedRuleContext(LogStmtContext, 0) as LogStmtContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterLogFuncStmt) {
      listener.enterLogFuncStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitLogFuncStmt) {
      listener.exitLogFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitLogFuncStmt) {
      return visitor.visitLogFuncStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FuncVarDeclarationContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public varDeclaration(): VarDeclarationContext {
    return this.getTypedRuleContext(
      VarDeclarationContext,
      0,
    ) as VarDeclarationContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFuncVarDeclaration) {
      listener.enterFuncVarDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFuncVarDeclaration) {
      listener.exitFuncVarDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFuncVarDeclaration) {
      return visitor.visitFuncVarDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AssertFuncStmtContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ASSERT(): TerminalNode {
    return this.getToken(CircomParser.ASSERT, 0);
  }
  public parExpression(): ParExpressionContext {
    return this.getTypedRuleContext(
      ParExpressionContext,
      0,
    ) as ParExpressionContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterAssertFuncStmt) {
      listener.enterAssertFuncStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitAssertFuncStmt) {
      listener.exitAssertFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitAssertFuncStmt) {
      return visitor.visitAssertFuncStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FuncBlockContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public functionBlock(): FunctionBlockContext {
    return this.getTypedRuleContext(
      FunctionBlockContext,
      0,
    ) as FunctionBlockContext;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFuncBlock) {
      listener.enterFuncBlock(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFuncBlock) {
      listener.exitFuncBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFuncBlock) {
      return visitor.visitFuncBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FuncSelfOpContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public SELF_OP(): TerminalNode {
    return this.getToken(CircomParser.SELF_OP, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFuncSelfOp) {
      listener.enterFuncSelfOp(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFuncSelfOp) {
      listener.exitFuncSelfOp(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFuncSelfOp) {
      return visitor.visitFuncSelfOp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IfFuncStmtContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public IF(): TerminalNode {
    return this.getToken(CircomParser.IF, 0);
  }
  public parExpression(): ParExpressionContext {
    return this.getTypedRuleContext(
      ParExpressionContext,
      0,
    ) as ParExpressionContext;
  }
  public functionStmt_list(): FunctionStmtContext[] {
    return this.getTypedRuleContexts(
      FunctionStmtContext,
    ) as FunctionStmtContext[];
  }
  public functionStmt(i: number): FunctionStmtContext {
    return this.getTypedRuleContext(
      FunctionStmtContext,
      i,
    ) as FunctionStmtContext;
  }
  public ELSE(): TerminalNode {
    return this.getToken(CircomParser.ELSE, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterIfFuncStmt) {
      listener.enterIfFuncStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitIfFuncStmt) {
      listener.exitIfFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitIfFuncStmt) {
      return visitor.visitIfFuncStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class WhileFuncStmtContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public WHILE(): TerminalNode {
    return this.getToken(CircomParser.WHILE, 0);
  }
  public parExpression(): ParExpressionContext {
    return this.getTypedRuleContext(
      ParExpressionContext,
      0,
    ) as ParExpressionContext;
  }
  public functionStmt(): FunctionStmtContext {
    return this.getTypedRuleContext(
      FunctionStmtContext,
      0,
    ) as FunctionStmtContext;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterWhileFuncStmt) {
      listener.enterWhileFuncStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitWhileFuncStmt) {
      listener.exitWhileFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitWhileFuncStmt) {
      return visitor.visitWhileFuncStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ReturnFuncStmtContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public RETURN(): TerminalNode {
    return this.getToken(CircomParser.RETURN, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterReturnFuncStmt) {
      listener.enterReturnFuncStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitReturnFuncStmt) {
      listener.exitReturnFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitReturnFuncStmt) {
      return visitor.visitReturnFuncStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FuncVariadicAssignmentContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public argsWithUnderscore(): ArgsWithUnderscoreContext {
    return this.getTypedRuleContext(
      ArgsWithUnderscoreContext,
      0,
    ) as ArgsWithUnderscoreContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFuncVariadicAssignment) {
      listener.enterFuncVariadicAssignment(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFuncVariadicAssignment) {
      listener.exitFuncVariadicAssignment(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFuncVariadicAssignment) {
      return visitor.visitFuncVariadicAssignment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FuncAssignmentExpressionContext extends FunctionStmtContext {
  constructor(parser: CircomParser, ctx: FunctionStmtContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public ASSIGNMENT_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_OP, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterFuncAssignmentExpression) {
      listener.enterFuncAssignmentExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitFuncAssignmentExpression) {
      listener.exitFuncAssignmentExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitFuncAssignmentExpression) {
      return visitor.visitFuncAssignmentExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TemplateDeclarationContext extends ParserRuleContext {
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
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public templateBlock(): TemplateBlockContext {
    return this.getTypedRuleContext(
      TemplateBlockContext,
      0,
    ) as TemplateBlockContext;
  }
  public CUSTOM(): TerminalNode {
    return this.getToken(CircomParser.CUSTOM, 0);
  }
  public PARALLEL(): TerminalNode {
    return this.getToken(CircomParser.PARALLEL, 0);
  }
  public args(): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_templateDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterTemplateDeclaration) {
      listener.enterTemplateDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitTemplateDeclaration) {
      listener.exitTemplateDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitTemplateDeclaration) {
      return visitor.visitTemplateDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TemplateBlockContext extends ParserRuleContext {
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
  public templateStmt_list(): TemplateStmtContext[] {
    return this.getTypedRuleContexts(
      TemplateStmtContext,
    ) as TemplateStmtContext[];
  }
  public templateStmt(i: number): TemplateStmtContext {
    return this.getTypedRuleContext(
      TemplateStmtContext,
      i,
    ) as TemplateStmtContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_templateBlock;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterTemplateBlock) {
      listener.enterTemplateBlock(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitTemplateBlock) {
      listener.exitTemplateBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitTemplateBlock) {
      return visitor.visitTemplateBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ComponentMainDeclarationContext extends ParserRuleContext {
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
  public publicInputsList(): PublicInputsListContext {
    return this.getTypedRuleContext(
      PublicInputsListContext,
      0,
    ) as PublicInputsListContext;
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
  public enterRule(listener: CircomListener): void {
    if (listener.enterComponentMainDeclaration) {
      listener.enterComponentMainDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitComponentMainDeclaration) {
      listener.exitComponentMainDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitComponentMainDeclaration) {
      return visitor.visitComponentMainDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PublicInputsListContext extends ParserRuleContext {
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
  public args(): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
  }
  public RB(): TerminalNode {
    return this.getToken(CircomParser.RB, 0);
  }
  public RC(): TerminalNode {
    return this.getToken(CircomParser.RC, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_publicInputsList;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterPublicInputsList) {
      listener.enterPublicInputsList(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitPublicInputsList) {
      listener.exitPublicInputsList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitPublicInputsList) {
      return visitor.visitPublicInputsList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TemplateStmtContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public templateBlock(): TemplateBlockContext {
    return this.getTypedRuleContext(
      TemplateBlockContext,
      0,
    ) as TemplateBlockContext;
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public SELF_OP(): TerminalNode {
    return this.getToken(CircomParser.SELF_OP, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
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
  public blockInstantiation(): BlockInstantiationContext {
    return this.getTypedRuleContext(
      BlockInstantiationContext,
      0,
    ) as BlockInstantiationContext;
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public CONSTRAINT_EQ(): TerminalNode {
    return this.getToken(CircomParser.CONSTRAINT_EQ, 0);
  }
  public LEFT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, 0);
  }
  public ASSIGNMENT_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_OP, 0);
  }
  public primary(): PrimaryContext {
    return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
  }
  public RIGHT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.RIGHT_ASSIGNMENT, 0);
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public argsWithUnderscore(): ArgsWithUnderscoreContext {
    return this.getTypedRuleContext(
      ArgsWithUnderscoreContext,
      0,
    ) as ArgsWithUnderscoreContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public IF(): TerminalNode {
    return this.getToken(CircomParser.IF, 0);
  }
  public parExpression(): ParExpressionContext {
    return this.getTypedRuleContext(
      ParExpressionContext,
      0,
    ) as ParExpressionContext;
  }
  public templateStmt_list(): TemplateStmtContext[] {
    return this.getTypedRuleContexts(
      TemplateStmtContext,
    ) as TemplateStmtContext[];
  }
  public templateStmt(i: number): TemplateStmtContext {
    return this.getTypedRuleContext(
      TemplateStmtContext,
      i,
    ) as TemplateStmtContext;
  }
  public ELSE(): TerminalNode {
    return this.getToken(CircomParser.ELSE, 0);
  }
  public WHILE(): TerminalNode {
    return this.getToken(CircomParser.WHILE, 0);
  }
  public FOR(): TerminalNode {
    return this.getToken(CircomParser.FOR, 0);
  }
  public forControl(): ForControlContext {
    return this.getTypedRuleContext(ForControlContext, 0) as ForControlContext;
  }
  public ASSERT(): TerminalNode {
    return this.getToken(CircomParser.ASSERT, 0);
  }
  public logStmt(): LogStmtContext {
    return this.getTypedRuleContext(LogStmtContext, 0) as LogStmtContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_templateStmt;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterTemplateStmt) {
      listener.enterTemplateStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitTemplateStmt) {
      listener.exitTemplateStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitTemplateStmt) {
      return visitor.visitTemplateStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ForControlContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public forInit(): ForInitContext {
    return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
  }
  public SEMICOLON_list(): TerminalNode[] {
    return this.getTokens(CircomParser.SEMICOLON);
  }
  public SEMICOLON(i: number): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, i);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public forUpdate(): ForUpdateContext {
    return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_forControl;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterForControl) {
      listener.enterForControl(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitForControl) {
      listener.exitForControl(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitForControl) {
      return visitor.visitForControl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ForInitContext extends ParserRuleContext {
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
  public VAR(): TerminalNode {
    return this.getToken(CircomParser.VAR, 0);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public rhsValue(): RhsValueContext {
    return this.getTypedRuleContext(RhsValueContext, 0) as RhsValueContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_forInit;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterForInit) {
      listener.enterForInit(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitForInit) {
      listener.exitForInit(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitForInit) {
      return visitor.visitForInit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ForUpdateContext extends ParserRuleContext {
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
  public SELF_OP(): TerminalNode {
    return this.getToken(CircomParser.SELF_OP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public ASSIGNMENT_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_OP, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_forUpdate;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterForUpdate) {
      listener.enterForUpdate(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitForUpdate) {
      listener.exitForUpdate(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitForUpdate) {
      return visitor.visitForUpdate(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParExpressionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_parExpression;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterParExpression) {
      listener.enterParExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitParExpression) {
      listener.exitParExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitParExpression) {
      return visitor.visitParExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_expression;
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class TernaryExpressionContext extends ExpressionContext {
  constructor(parser: CircomParser, ctx: ExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterTernaryExpression) {
      listener.enterTernaryExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitTernaryExpression) {
      listener.exitTernaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitTernaryExpression) {
      return visitor.visitTernaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DotExpressionContext extends ExpressionContext {
  constructor(parser: CircomParser, ctx: ExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public LB(): TerminalNode {
    return this.getToken(CircomParser.LB, 0);
  }
  public RB(): TerminalNode {
    return this.getToken(CircomParser.RB, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterDotExpression) {
      listener.enterDotExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitDotExpression) {
      listener.exitDotExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitDotExpression) {
      return visitor.visitDotExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PrimaryExpressionContext extends ExpressionContext {
  constructor(parser: CircomParser, ctx: ExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public primary(): PrimaryContext {
    return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BinaryExpressionContext extends ExpressionContext {
  public _op!: Token;
  constructor(parser: CircomParser, ctx: ExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
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
  public SUB(): TerminalNode {
    return this.getToken(CircomParser.SUB, 0);
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
  public GT(): TerminalNode {
    return this.getToken(CircomParser.GT, 0);
  }
  public LT(): TerminalNode {
    return this.getToken(CircomParser.LT, 0);
  }
  public GE(): TerminalNode {
    return this.getToken(CircomParser.GE, 0);
  }
  public LE(): TerminalNode {
    return this.getToken(CircomParser.LE, 0);
  }
  public AND(): TerminalNode {
    return this.getToken(CircomParser.AND, 0);
  }
  public OR(): TerminalNode {
    return this.getToken(CircomParser.OR, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterBinaryExpression) {
      listener.enterBinaryExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitBinaryExpression) {
      listener.exitBinaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitBinaryExpression) {
      return visitor.visitBinaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BlockInstantiationExpressionContext extends ExpressionContext {
  constructor(parser: CircomParser, ctx: ExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public blockInstantiation(): BlockInstantiationContext {
    return this.getTypedRuleContext(
      BlockInstantiationContext,
      0,
    ) as BlockInstantiationContext;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterBlockInstantiationExpression) {
      listener.enterBlockInstantiationExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitBlockInstantiationExpression) {
      listener.exitBlockInstantiationExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitBlockInstantiationExpression) {
      return visitor.visitBlockInstantiationExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class UnaryExpressionContext extends ExpressionContext {
  public _op!: Token;
  constructor(parser: CircomParser, ctx: ExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public BNOT(): TerminalNode {
    return this.getToken(CircomParser.BNOT, 0);
  }
  public NOT(): TerminalNode {
    return this.getToken(CircomParser.NOT, 0);
  }
  public SUB(): TerminalNode {
    return this.getToken(CircomParser.SUB, 0);
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PrimaryContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
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
  public NUMBER(): TerminalNode {
    return this.getToken(CircomParser.NUMBER, 0);
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public args(): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
  }
  public numSequence(): NumSequenceContext {
    return this.getTypedRuleContext(
      NumSequenceContext,
      0,
    ) as NumSequenceContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_primary;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterPrimary) {
      listener.enterPrimary(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitPrimary) {
      listener.exitPrimary(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitPrimary) {
      return visitor.visitPrimary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LogStmtContext extends ParserRuleContext {
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
  public STRING(): TerminalNode {
    return this.getToken(CircomParser.STRING, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_logStmt;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterLogStmt) {
      listener.enterLogStmt(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitLogStmt) {
      listener.exitLogStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitLogStmt) {
      return visitor.visitLogStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ComponentDefinitionContext extends ParserRuleContext {
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
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_componentDefinition;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterComponentDefinition) {
      listener.enterComponentDefinition(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitComponentDefinition) {
      listener.exitComponentDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitComponentDefinition) {
      return visitor.visitComponentDefinition(this);
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
  public componentDefinition(): ComponentDefinitionContext {
    return this.getTypedRuleContext(
      ComponentDefinitionContext,
      0,
    ) as ComponentDefinitionContext;
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
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public blockInstantiation(): BlockInstantiationContext {
    return this.getTypedRuleContext(
      BlockInstantiationContext,
      0,
    ) as BlockInstantiationContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_componentDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterComponentDeclaration) {
      listener.enterComponentDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitComponentDeclaration) {
      listener.exitComponentDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitComponentDeclaration) {
      return visitor.visitComponentDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SignalDefinitionContext extends ParserRuleContext {
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
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public SIGNAL_TYPE(): TerminalNode {
    return this.getToken(CircomParser.SIGNAL_TYPE, 0);
  }
  public tagList(): TagListContext {
    return this.getTypedRuleContext(TagListContext, 0) as TagListContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_signalDefinition;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterSignalDefinition) {
      listener.enterSignalDefinition(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitSignalDefinition) {
      listener.exitSignalDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitSignalDefinition) {
      return visitor.visitSignalDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TagListContext extends ParserRuleContext {
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
  public args(): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
  }
  public RC(): TerminalNode {
    return this.getToken(CircomParser.RC, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_tagList;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterTagList) {
      listener.enterTagList(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitTagList) {
      listener.exitTagList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitTagList) {
      return visitor.visitTagList(this);
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
  public signalDefinition(): SignalDefinitionContext {
    return this.getTypedRuleContext(
      SignalDefinitionContext,
      0,
    ) as SignalDefinitionContext;
  }
  public LEFT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, 0);
  }
  public rhsValue(): RhsValueContext {
    return this.getTypedRuleContext(RhsValueContext, 0) as RhsValueContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_signalDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterSignalDeclaration) {
      listener.enterSignalDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitSignalDeclaration) {
      listener.exitSignalDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitSignalDeclaration) {
      return visitor.visitSignalDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VarDefinitionContext extends ParserRuleContext {
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
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_varDefinition;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterVarDefinition) {
      listener.enterVarDefinition(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitVarDefinition) {
      listener.exitVarDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitVarDefinition) {
      return visitor.visitVarDefinition(this);
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
  public varDefinition(): VarDefinitionContext {
    return this.getTypedRuleContext(
      VarDefinitionContext,
      0,
    ) as VarDefinitionContext;
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public rhsValue(): RhsValueContext {
    return this.getTypedRuleContext(RhsValueContext, 0) as RhsValueContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_varDeclaration;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterVarDeclaration) {
      listener.enterVarDeclaration(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitVarDeclaration) {
      listener.exitVarDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitVarDeclaration) {
      return visitor.visitVarDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class RhsValueContext extends ParserRuleContext {
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
  public blockInstantiation(): BlockInstantiationContext {
    return this.getTypedRuleContext(
      BlockInstantiationContext,
      0,
    ) as BlockInstantiationContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_rhsValue;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterRhsValue) {
      listener.enterRhsValue(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitRhsValue) {
      listener.exitRhsValue(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitRhsValue) {
      return visitor.visitRhsValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ComponentCallContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
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
  public ID_list(): TerminalNode[] {
    return this.getTokens(CircomParser.ID);
  }
  public ID(i: number): TerminalNode {
    return this.getToken(CircomParser.ID, i);
  }
  public LEFT_ASSIGNMENT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.LEFT_ASSIGNMENT);
  }
  public LEFT_ASSIGNMENT(i: number): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, i);
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
  public RIGHT_ASSIGNMENT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.RIGHT_ASSIGNMENT);
  }
  public RIGHT_ASSIGNMENT(i: number): TerminalNode {
    return this.getToken(CircomParser.RIGHT_ASSIGNMENT, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_componentCall;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterComponentCall) {
      listener.enterComponentCall(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitComponentCall) {
      listener.exitComponentCall(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitComponentCall) {
      return visitor.visitComponentCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockInstantiationContext extends ParserRuleContext {
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
  public LP(): TerminalNode {
    return this.getToken(CircomParser.LP, 0);
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
  }
  public PARALLEL(): TerminalNode {
    return this.getToken(CircomParser.PARALLEL, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public componentCall(): ComponentCallContext {
    return this.getTypedRuleContext(
      ComponentCallContext,
      0,
    ) as ComponentCallContext;
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_blockInstantiation;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterBlockInstantiation) {
      listener.enterBlockInstantiation(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitBlockInstantiation) {
      listener.exitBlockInstantiation(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitBlockInstantiation) {
      return visitor.visitBlockInstantiation(this);
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
  public enterRule(listener: CircomListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this);
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
  public enterRule(listener: CircomListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitIdentifier) {
      return visitor.visitIdentifier(this);
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
  public enterRule(listener: CircomListener): void {
    if (listener.enterArrayDimension) {
      listener.enterArrayDimension(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitArrayDimension) {
      listener.exitArrayDimension(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitArrayDimension) {
      return visitor.visitArrayDimension(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArgsContext extends ParserRuleContext {
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
    return CircomParser.RULE_args;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterArgs) {
      listener.enterArgs(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitArgs) {
      listener.exitArgs(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitArgs) {
      return visitor.visitArgs(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArgsWithUnderscoreContext extends ParserRuleContext {
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
    return CircomParser.RULE_argsWithUnderscore;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterArgsWithUnderscore) {
      listener.enterArgsWithUnderscore(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitArgsWithUnderscore) {
      listener.exitArgsWithUnderscore(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitArgsWithUnderscore) {
      return visitor.visitArgsWithUnderscore(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class NumSequenceContext extends ParserRuleContext {
  constructor(
    parser?: CircomParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public NUMBER_list(): TerminalNode[] {
    return this.getTokens(CircomParser.NUMBER);
  }
  public NUMBER(i: number): TerminalNode {
    return this.getToken(CircomParser.NUMBER, i);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_numSequence;
  }
  public enterRule(listener: CircomListener): void {
    if (listener.enterNumSequence) {
      listener.enterNumSequence(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitNumSequence) {
      listener.exitNumSequence(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
    if (visitor.visitNumSequence) {
      return visitor.visitNumSequence(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
