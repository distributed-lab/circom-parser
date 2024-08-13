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
  public static readonly RULE_templateStmt = 10;
  public static readonly RULE_forControl = 11;
  public static readonly RULE_forInit = 12;
  public static readonly RULE_forUpdate = 13;
  public static readonly RULE_parExpression = 14;
  public static readonly RULE_expression = 15;
  public static readonly RULE_primary = 16;
  public static readonly RULE_logStmt = 17;
  public static readonly RULE_componentDefinition = 18;
  public static readonly RULE_componentDeclaration = 19;
  public static readonly RULE_signalDefinition = 20;
  public static readonly RULE_signalDeclaration = 21;
  public static readonly RULE_varDefinition = 22;
  public static readonly RULE_varDeclaration = 23;
  public static readonly RULE_rhsValue = 24;
  public static readonly RULE_componentCall = 25;
  public static readonly RULE_blockInstantiation = 26;
  public static readonly RULE_arrayDimension = 27;
  public static readonly RULE_argsWithUnderscore = 28;
  public static readonly RULE_args = 29;
  public static readonly RULE_numSequence = 30;
  public static readonly RULE_expressionList = 31;
  public static readonly RULE_identifier = 32;
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
    "signalDeclaration",
    "varDefinition",
    "varDeclaration",
    "rhsValue",
    "componentCall",
    "blockInstantiation",
    "arrayDimension",
    "argsWithUnderscore",
    "args",
    "numSequence",
    "expressionList",
    "identifier",
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
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 25) {
          {
            {
              this.state = 66;
              this.pragmaDeclaration();
            }
          }
          this.state = 71;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 23) {
          {
            {
              this.state = 72;
              this.includeDeclaration();
            }
          }
          this.state = 77;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 11 || _la === 14) {
          {
            {
              this.state = 78;
              this.blockDeclaration();
            }
          }
          this.state = 83;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 12) {
          {
            this.state = 84;
            this.componentMainDeclaration();
          }
        }

        this.state = 87;
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
      this.state = 96;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 89;
            this.match(CircomParser.PRAGMA);
            this.state = 90;
            this.match(CircomParser.CIRCOM);
            this.state = 91;
            this.match(CircomParser.VERSION);
            this.state = 92;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 93;
            this.match(CircomParser.PRAGMA);
            this.state = 94;
            this.match(CircomParser.CUSTOM_TEMPLATES);
            this.state = 95;
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
        this.state = 98;
        this.match(CircomParser.INCLUDE);
        this.state = 99;
        this.match(CircomParser.STRING);
        this.state = 100;
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
      this.state = 104;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 14:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 102;
            this.functionDeclaration();
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 103;
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
        this.state = 106;
        this.match(CircomParser.FUNCTION);
        this.state = 107;
        this.match(CircomParser.ID);
        this.state = 108;
        this.match(CircomParser.LP);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 66) {
          {
            {
              this.state = 109;
              this.args();
            }
          }
          this.state = 114;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 115;
        this.match(CircomParser.RP);
        this.state = 116;
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
        this.state = 118;
        this.match(CircomParser.LC);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 13) & ~0x1f) === 0 && ((1 << (_la - 13)) & 2098029) !== 0) ||
          _la === 66
        ) {
          {
            {
              this.state = 119;
              this.functionStmt();
            }
          }
          this.state = 124;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 125;
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
      this.state = 167;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          localctx = new FuncBlockContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 127;
            this.functionBlock();
          }
          break;
        case 2:
          localctx = new FuncSelfOpContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 128;
            this.match(CircomParser.ID);
            this.state = 129;
            this.match(CircomParser.SELF_OP);
            this.state = 130;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new FuncVarDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 131;
            this.varDeclaration();
            this.state = 132;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          localctx = new FuncAssignmentExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 134;
            this.identifier();
            this.state = 135;
            _la = this._input.LA(1);
            if (!(_la === 38 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 136;
            this.expression(0);
            this.state = 137;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          localctx = new IfFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 139;
            this.match(CircomParser.IF);
            this.state = 140;
            this.parExpression();
            this.state = 141;
            this.functionStmt();
            this.state = 144;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
              case 1:
                {
                  this.state = 142;
                  this.match(CircomParser.ELSE);
                  this.state = 143;
                  this.functionStmt();
                }
                break;
            }
          }
          break;
        case 6:
          localctx = new WhileFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 146;
            this.match(CircomParser.WHILE);
            this.state = 147;
            this.parExpression();
            this.state = 148;
            this.functionStmt();
          }
          break;
        case 7:
          localctx = new ForFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 150;
            this.match(CircomParser.FOR);
            this.state = 151;
            this.match(CircomParser.LP);
            this.state = 152;
            this.forControl();
            this.state = 153;
            this.match(CircomParser.RP);
            this.state = 154;
            this.functionStmt();
          }
          break;
        case 8:
          localctx = new ReturnFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 156;
            this.match(CircomParser.RETURN);
            this.state = 157;
            this.expression(0);
            this.state = 158;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          localctx = new AssertFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 160;
            this.match(CircomParser.ASSERT);
            this.state = 161;
            this.parExpression();
            this.state = 162;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          localctx = new LogFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 164;
            this.logStmt();
            this.state = 165;
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
      this.state = 192;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 169;
            this.match(CircomParser.TEMPLATE);
            this.state = 170;
            this.match(CircomParser.ID);
            this.state = 171;
            this.match(CircomParser.LP);
            this.state = 175;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 66) {
              {
                {
                  this.state = 172;
                  this.args();
                }
              }
              this.state = 177;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 178;
            this.match(CircomParser.RP);
            this.state = 179;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 180;
            this.match(CircomParser.TEMPLATE);
            this.state = 181;
            this.match(CircomParser.CUSTOM);
            this.state = 182;
            this.match(CircomParser.ID);
            this.state = 183;
            this.match(CircomParser.LP);
            this.state = 187;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 66) {
              {
                {
                  this.state = 184;
                  this.args();
                }
              }
              this.state = 189;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 190;
            this.match(CircomParser.RP);
            this.state = 191;
            this.templateBlock();
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
        this.state = 194;
        this.match(CircomParser.LC);
        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1080897668) !== 0) ||
          (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1060869) !== 0) ||
          _la === 66 ||
          _la === 67
        ) {
          {
            {
              this.state = 195;
              this.templateStmt();
            }
          }
          this.state = 200;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 201;
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
        this.state = 203;
        this.match(CircomParser.COMPONENT);
        this.state = 204;
        this.match(CircomParser.MAIN);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 34) {
          {
            this.state = 205;
            this.match(CircomParser.LC);
            this.state = 206;
            this.match(CircomParser.PUBLIC);
            this.state = 207;
            this.match(CircomParser.LB);
            this.state = 208;
            this.args();
            this.state = 209;
            this.match(CircomParser.RB);
            this.state = 210;
            this.match(CircomParser.RC);
          }
        }

        this.state = 214;
        this.match(CircomParser.ASSIGNMENT);
        this.state = 215;
        this.match(CircomParser.ID);
        this.state = 216;
        this.match(CircomParser.LP);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 30) & ~0x1f) === 0 && ((1 << (_la - 30)) & 4243461) !== 0) ||
          _la === 66 ||
          _la === 67
        ) {
          {
            this.state = 217;
            this.expressionList();
          }
        }

        this.state = 220;
        this.match(CircomParser.RP);
        this.state = 221;
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
  public templateStmt(): TemplateStmtContext {
    let localctx: TemplateStmtContext = new TemplateStmtContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 20, CircomParser.RULE_templateStmt);
    let _la: number;
    try {
      this.state = 327;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 223;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 224;
            this.match(CircomParser.ID);
            this.state = 225;
            this.match(CircomParser.SELF_OP);
            this.state = 226;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 227;
            this.varDeclaration();
            this.state = 228;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 230;
            this.signalDeclaration();
            this.state = 231;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 233;
            this.componentDeclaration();
            this.state = 234;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 236;
            this.blockInstantiation();
            this.state = 237;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            {
              this.state = 239;
              this.identifier();
              this.state = 242;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === 1) {
                {
                  this.state = 240;
                  this.match(CircomParser.T__0);
                  this.state = 241;
                  this.match(CircomParser.ID);
                }
              }
            }
            this.state = 244;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 245;
            this.expression(0);
            this.state = 246;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 248;
            this.expression(0);
            this.state = 249;
            this.match(CircomParser.CONSTRAINT_EQ);
            this.state = 250;
            this.expression(0);
            this.state = 251;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 258;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
              case 1:
                {
                  this.state = 253;
                  this.primary();
                }
                break;
              case 2:
                {
                  {
                    this.state = 254;
                    this.identifier();
                    this.state = 255;
                    this.match(CircomParser.T__0);
                    this.state = 256;
                    this.identifier();
                  }
                }
                break;
            }
            this.state = 260;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 41)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 261;
            this.expression(0);
            this.state = 262;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 264;
            this.expression(0);
            this.state = 265;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            {
              this.state = 266;
              this.identifier();
              this.state = 269;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === 1) {
                {
                  this.state = 267;
                  this.match(CircomParser.T__0);
                  this.state = 268;
                  this.identifier();
                }
              }
            }
            this.state = 271;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 273;
            this.match(CircomParser.T__1);
            this.state = 274;
            _la = this._input.LA(1);
            if (!(_la === 38 || _la === 41)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 277;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 275;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 276;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 279;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 283;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 281;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 282;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 285;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 286;
            this.match(CircomParser.T__1);
            this.state = 287;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 289;
            this.match(CircomParser.LP);
            this.state = 290;
            this.argsWithUnderscore();
            this.state = 291;
            this.match(CircomParser.RP);
            this.state = 292;
            _la = this._input.LA(1);
            if (!(_la === 38 || _la === 41)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 293;
            this.blockInstantiation();
            this.state = 294;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 296;
            this.blockInstantiation();
            this.state = 297;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 298;
            this.match(CircomParser.LP);
            this.state = 299;
            this.argsWithUnderscore();
            this.state = 300;
            this.match(CircomParser.RP);
            this.state = 301;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 303;
            this.match(CircomParser.IF);
            this.state = 304;
            this.parExpression();
            this.state = 305;
            this.templateStmt();
            this.state = 308;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
              case 1:
                {
                  this.state = 306;
                  this.match(CircomParser.ELSE);
                  this.state = 307;
                  this.templateStmt();
                }
                break;
            }
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 310;
            this.match(CircomParser.WHILE);
            this.state = 311;
            this.parExpression();
            this.state = 312;
            this.templateStmt();
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 314;
            this.match(CircomParser.FOR);
            this.state = 315;
            this.match(CircomParser.LP);
            this.state = 316;
            this.forControl();
            this.state = 317;
            this.match(CircomParser.RP);
            this.state = 318;
            this.templateStmt();
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 320;
            this.match(CircomParser.ASSERT);
            this.state = 321;
            this.parExpression();
            this.state = 322;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 324;
            this.logStmt();
            this.state = 325;
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
    this.enterRule(localctx, 22, CircomParser.RULE_forControl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 329;
        this.forInit();
        this.state = 330;
        this.match(CircomParser.SEMICOLON);
        this.state = 331;
        this.expression(0);
        this.state = 332;
        this.match(CircomParser.SEMICOLON);
        this.state = 333;
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
    this.enterRule(localctx, 24, CircomParser.RULE_forInit);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 336;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 13) {
          {
            this.state = 335;
            this.match(CircomParser.VAR);
          }
        }

        this.state = 338;
        this.identifier();
        this.state = 341;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 38) {
          {
            this.state = 339;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 340;
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
    this.enterRule(localctx, 26, CircomParser.RULE_forUpdate);
    let _la: number;
    try {
      this.state = 351;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 66:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 343;
            this.match(CircomParser.ID);
            this.state = 347;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 40:
                {
                  this.state = 344;
                  this.match(CircomParser.SELF_OP);
                }
                break;
              case 38:
              case 39:
                {
                  {
                    this.state = 345;
                    _la = this._input.LA(1);
                    if (!(_la === 38 || _la === 39)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 346;
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
            this.state = 349;
            this.match(CircomParser.SELF_OP);
            this.state = 350;
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
    this.enterRule(localctx, 28, CircomParser.RULE_parExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 353;
        this.match(CircomParser.LP);
        this.state = 354;
        this.expression(0);
        this.state = 355;
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
    let _startState: number = 30;
    this.enterRecursionRule(localctx, 30, CircomParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 362;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
          case 1:
            {
              localctx = new PrimaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 358;
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
              this.state = 359;
              this.blockInstantiation();
            }
            break;
          case 3:
            {
              localctx = new UnaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 360;
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
              this.state = 361;
              this.expression(7);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 396;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 394;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 29, this._ctx)
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
                    this.state = 364;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 365;
                    this.match(CircomParser.T__2);
                    this.state = 366;
                    this.expression(0);
                    this.state = 367;
                    this.match(CircomParser.T__3);
                    this.state = 368;
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
                    this.state = 370;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 371;
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
                    this.state = 372;
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
                    this.state = 373;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 374;
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
                    this.state = 375;
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
                    this.state = 376;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 377;
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
                    this.state = 378;
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
                    this.state = 379;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 380;
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
                    this.state = 381;
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
                    this.state = 382;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)",
                      );
                    }
                    this.state = 383;
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
                    this.state = 384;
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
                    this.state = 385;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 386;
                    this.match(CircomParser.T__0);
                    this.state = 387;
                    this.match(CircomParser.ID);
                    this.state = 392;
                    this._errHandler.sync(this);
                    switch (
                      this._interp.adaptivePredict(this._input, 28, this._ctx)
                    ) {
                      case 1:
                        {
                          this.state = 388;
                          this.match(CircomParser.LB);
                          this.state = 389;
                          this.expression(0);
                          this.state = 390;
                          this.match(CircomParser.RB);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
          }
          this.state = 398;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
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
    this.enterRule(localctx, 32, CircomParser.RULE_primary);
    try {
      this.state = 411;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 31, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 399;
            this.match(CircomParser.LP);
            this.state = 400;
            this.expression(0);
            this.state = 401;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 403;
            this.match(CircomParser.LB);
            this.state = 404;
            this.expressionList();
            this.state = 405;
            this.match(CircomParser.RB);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 407;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 408;
            this.identifier();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 409;
            this.args();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 410;
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
    this.enterRule(localctx, 34, CircomParser.RULE_logStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 413;
        this.match(CircomParser.LOG);
        this.state = 414;
        this.match(CircomParser.LP);
        this.state = 417;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 69:
            {
              this.state = 415;
              this.match(CircomParser.STRING);
            }
            break;
          case 30:
          case 32:
          case 44:
          case 45:
          case 52:
          case 66:
          case 67:
            {
              this.state = 416;
              this.expression(0);
            }
            break;
          case 31:
            break;
          default:
            break;
        }
        this.state = 419;
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
    this.enterRule(localctx, 36, CircomParser.RULE_componentDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 421;
        this.match(CircomParser.COMPONENT);
        this.state = 422;
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
    this.enterRule(localctx, 38, CircomParser.RULE_componentDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 424;
        this.componentDefinition();
        this.state = 428;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 32) {
          {
            {
              this.state = 425;
              this.arrayDimension();
            }
          }
          this.state = 430;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 38) {
          {
            this.state = 431;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 432;
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
    this.enterRule(localctx, 40, CircomParser.RULE_signalDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 435;
        this.match(CircomParser.SIGNAL);
        this.state = 437;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 6) {
          {
            this.state = 436;
            this.match(CircomParser.SIGNAL_TYPE);
          }
        }

        this.state = 443;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 34) {
          {
            this.state = 439;
            this.match(CircomParser.LC);
            this.state = 440;
            this.args();
            this.state = 441;
            this.match(CircomParser.RC);
          }
        }

        this.state = 445;
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
  public signalDeclaration(): SignalDeclarationContext {
    let localctx: SignalDeclarationContext = new SignalDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 42, CircomParser.RULE_signalDeclaration);
    let _la: number;
    try {
      this.state = 460;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 447;
            this.signalDefinition();
            this.state = 450;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 41) {
              {
                this.state = 448;
                this.match(CircomParser.LEFT_ASSIGNMENT);
                this.state = 449;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 452;
            this.signalDefinition();
            this.state = 457;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 453;
                  this.match(CircomParser.COMMA);
                  this.state = 454;
                  this.identifier();
                }
              }
              this.state = 459;
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
    this.enterRule(localctx, 44, CircomParser.RULE_varDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 462;
        this.match(CircomParser.VAR);
        this.state = 463;
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
  public varDeclaration(): VarDeclarationContext {
    let localctx: VarDeclarationContext = new VarDeclarationContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 46, CircomParser.RULE_varDeclaration);
    let _la: number;
    try {
      this.state = 478;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 42, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 465;
            this.varDefinition();
            this.state = 468;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 38) {
              {
                this.state = 466;
                this.match(CircomParser.ASSIGNMENT);
                this.state = 467;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 470;
            this.varDefinition();
            this.state = 475;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 471;
                  this.match(CircomParser.COMMA);
                  this.state = 472;
                  this.identifier();
                }
              }
              this.state = 477;
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
    this.enterRule(localctx, 48, CircomParser.RULE_rhsValue);
    try {
      this.state = 482;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 43, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 480;
            this.expression(0);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 481;
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
    this.enterRule(localctx, 50, CircomParser.RULE_componentCall);
    let _la: number;
    try {
      this.state = 520;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 484;
            this.match(CircomParser.LP);
            this.state = 486;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 30) & ~0x1f) === 0 &&
                ((1 << (_la - 30)) & 4243461) !== 0) ||
              _la === 66 ||
              _la === 67
            ) {
              {
                this.state = 485;
                this.expressionList();
              }
            }

            this.state = 488;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 489;
            this.match(CircomParser.LP);
            this.state = 490;
            this.match(CircomParser.ID);
            this.state = 491;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 492;
            this.expression(0);
            this.state = 499;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 493;
                  this.match(CircomParser.COMMA);
                  this.state = 494;
                  this.match(CircomParser.ID);
                  this.state = 495;
                  this.match(CircomParser.LEFT_ASSIGNMENT);
                  this.state = 496;
                  this.expression(0);
                }
              }
              this.state = 501;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 502;
            this.match(CircomParser.RP);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 504;
            this.match(CircomParser.LP);
            this.state = 505;
            this.expression(0);
            this.state = 506;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 507;
            this.match(CircomParser.ID);
            this.state = 515;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 37) {
              {
                {
                  this.state = 508;
                  this.match(CircomParser.COMMA);
                  this.state = 509;
                  this.expression(0);
                  this.state = 510;
                  this.match(CircomParser.RIGHT_ASSIGNMENT);
                  this.state = 511;
                  this.match(CircomParser.ID);
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
    this.enterRule(localctx, 52, CircomParser.RULE_blockInstantiation);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 522;
        this.match(CircomParser.ID);
        this.state = 523;
        this.match(CircomParser.LP);
        this.state = 525;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 30) & ~0x1f) === 0 && ((1 << (_la - 30)) & 4243461) !== 0) ||
          _la === 66 ||
          _la === 67
        ) {
          {
            this.state = 524;
            this.expressionList();
          }
        }

        this.state = 527;
        this.match(CircomParser.RP);
        this.state = 529;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
          case 1:
            {
              this.state = 528;
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
  public arrayDimension(): ArrayDimensionContext {
    let localctx: ArrayDimensionContext = new ArrayDimensionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 54, CircomParser.RULE_arrayDimension);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 531;
        this.match(CircomParser.LB);
        this.state = 535;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
          case 1:
            {
              this.state = 532;
              this.match(CircomParser.NUMBER);
            }
            break;
          case 2:
            {
              this.state = 533;
              this.match(CircomParser.ID);
            }
            break;
          case 3:
            {
              this.state = 534;
              this.expression(0);
            }
            break;
        }
        this.state = 537;
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
  public argsWithUnderscore(): ArgsWithUnderscoreContext {
    let localctx: ArgsWithUnderscoreContext = new ArgsWithUnderscoreContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 56, CircomParser.RULE_argsWithUnderscore);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 539;
        _la = this._input.LA(1);
        if (!(_la === 2 || _la === 66)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 544;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 37) {
          {
            {
              this.state = 540;
              this.match(CircomParser.COMMA);
              this.state = 541;
              _la = this._input.LA(1);
              if (!(_la === 2 || _la === 66)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          this.state = 546;
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
  public args(): ArgsContext {
    let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, CircomParser.RULE_args);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 547;
        this.match(CircomParser.ID);
        this.state = 552;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 548;
                this.match(CircomParser.COMMA);
                this.state = 549;
                this.match(CircomParser.ID);
              }
            }
          }
          this.state = 554;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
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
    this.enterRule(localctx, 60, CircomParser.RULE_numSequence);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 555;
        this.match(CircomParser.NUMBER);
        this.state = 560;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 556;
                this.match(CircomParser.COMMA);
                this.state = 557;
                this.match(CircomParser.NUMBER);
              }
            }
          }
          this.state = 562;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
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
    this.enterRule(localctx, 62, CircomParser.RULE_expressionList);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 563;
        this.expression(0);
        this.state = 568;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 37) {
          {
            {
              this.state = 564;
              this.match(CircomParser.COMMA);
              this.state = 565;
              this.expression(0);
            }
          }
          this.state = 570;
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
    this.enterRule(localctx, 64, CircomParser.RULE_identifier);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 571;
        this.match(CircomParser.ID);
        this.state = 575;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 572;
                this.arrayDimension();
              }
            }
          }
          this.state = 577;
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

  public sempred(
    localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 15:
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
    4, 1, 72, 579, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 1,
    0, 5, 0, 68, 8, 0, 10, 0, 12, 0, 71, 9, 0, 1, 0, 5, 0, 74, 8, 0, 10, 0, 12,
    0, 77, 9, 0, 1, 0, 5, 0, 80, 8, 0, 10, 0, 12, 0, 83, 9, 0, 1, 0, 3, 0, 86,
    8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 97, 8, 1,
    1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 3, 3, 105, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4,
    5, 4, 111, 8, 4, 10, 4, 12, 4, 114, 9, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 5,
    5, 121, 8, 5, 10, 5, 12, 5, 124, 9, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 3, 6, 145, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6,
    168, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 174, 8, 7, 10, 7, 12, 7, 177, 9, 7,
    1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 186, 8, 7, 10, 7, 12, 7,
    189, 9, 7, 1, 7, 1, 7, 3, 7, 193, 8, 7, 1, 8, 1, 8, 5, 8, 197, 8, 8, 10, 8,
    12, 8, 200, 9, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1,
    9, 1, 9, 3, 9, 213, 8, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 219, 8, 9, 1, 9, 1,
    9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10,
    243, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 259, 8, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 270, 8, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 278, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    3, 10, 284, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 309, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 3, 10, 328, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 12, 3, 12, 337, 8, 12, 1, 12, 1, 12, 1, 12, 3, 12, 342, 8, 12, 1, 13, 1,
    13, 1, 13, 1, 13, 3, 13, 348, 8, 13, 1, 13, 1, 13, 3, 13, 352, 8, 13, 1, 14,
    1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 363, 8, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 393, 8, 15, 5, 15, 395, 8,
    15, 10, 15, 12, 15, 398, 9, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1,
    16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 412, 8, 16, 1, 17, 1, 17, 1,
    17, 1, 17, 3, 17, 418, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 19, 1,
    19, 5, 19, 427, 8, 19, 10, 19, 12, 19, 430, 9, 19, 1, 19, 1, 19, 3, 19, 434,
    8, 19, 1, 20, 1, 20, 3, 20, 438, 8, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20,
    444, 8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 3, 21, 451, 8, 21, 1, 21, 1,
    21, 1, 21, 5, 21, 456, 8, 21, 10, 21, 12, 21, 459, 9, 21, 3, 21, 461, 8, 21,
    1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 3, 23, 469, 8, 23, 1, 23, 1, 23,
    1, 23, 5, 23, 474, 8, 23, 10, 23, 12, 23, 477, 9, 23, 3, 23, 479, 8, 23, 1,
    24, 1, 24, 3, 24, 483, 8, 24, 1, 25, 1, 25, 3, 25, 487, 8, 25, 1, 25, 1, 25,
    1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 5, 25, 498, 8, 25, 10, 25,
    12, 25, 501, 9, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25,
    1, 25, 1, 25, 1, 25, 5, 25, 514, 8, 25, 10, 25, 12, 25, 517, 9, 25, 1, 25,
    1, 25, 3, 25, 521, 8, 25, 1, 26, 1, 26, 1, 26, 3, 26, 526, 8, 26, 1, 26, 1,
    26, 3, 26, 530, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 536, 8, 27, 1, 27,
    1, 27, 1, 28, 1, 28, 1, 28, 5, 28, 543, 8, 28, 10, 28, 12, 28, 546, 9, 28,
    1, 29, 1, 29, 1, 29, 5, 29, 551, 8, 29, 10, 29, 12, 29, 554, 9, 29, 1, 30,
    1, 30, 1, 30, 5, 30, 559, 8, 30, 10, 30, 12, 30, 562, 9, 30, 1, 31, 1, 31,
    1, 31, 5, 31, 567, 8, 31, 10, 31, 12, 31, 570, 9, 31, 1, 32, 1, 32, 5, 32,
    574, 8, 32, 10, 32, 12, 32, 577, 9, 32, 1, 32, 0, 1, 30, 33, 0, 2, 4, 6, 8,
    10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46,
    48, 50, 52, 54, 56, 58, 60, 62, 64, 0, 10, 1, 0, 38, 39, 2, 0, 39, 39, 41,
    41, 2, 0, 38, 38, 41, 41, 2, 0, 44, 45, 52, 52, 1, 0, 46, 50, 1, 0, 51, 52,
    1, 0, 53, 54, 1, 0, 55, 57, 1, 0, 58, 65, 2, 0, 2, 2, 66, 66, 639, 0, 69, 1,
    0, 0, 0, 2, 96, 1, 0, 0, 0, 4, 98, 1, 0, 0, 0, 6, 104, 1, 0, 0, 0, 8, 106,
    1, 0, 0, 0, 10, 118, 1, 0, 0, 0, 12, 167, 1, 0, 0, 0, 14, 192, 1, 0, 0, 0,
    16, 194, 1, 0, 0, 0, 18, 203, 1, 0, 0, 0, 20, 327, 1, 0, 0, 0, 22, 329, 1,
    0, 0, 0, 24, 336, 1, 0, 0, 0, 26, 351, 1, 0, 0, 0, 28, 353, 1, 0, 0, 0, 30,
    362, 1, 0, 0, 0, 32, 411, 1, 0, 0, 0, 34, 413, 1, 0, 0, 0, 36, 421, 1, 0, 0,
    0, 38, 424, 1, 0, 0, 0, 40, 435, 1, 0, 0, 0, 42, 460, 1, 0, 0, 0, 44, 462,
    1, 0, 0, 0, 46, 478, 1, 0, 0, 0, 48, 482, 1, 0, 0, 0, 50, 520, 1, 0, 0, 0,
    52, 522, 1, 0, 0, 0, 54, 531, 1, 0, 0, 0, 56, 539, 1, 0, 0, 0, 58, 547, 1,
    0, 0, 0, 60, 555, 1, 0, 0, 0, 62, 563, 1, 0, 0, 0, 64, 571, 1, 0, 0, 0, 66,
    68, 3, 2, 1, 0, 67, 66, 1, 0, 0, 0, 68, 71, 1, 0, 0, 0, 69, 67, 1, 0, 0, 0,
    69, 70, 1, 0, 0, 0, 70, 75, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0, 72, 74, 3, 4, 2,
    0, 73, 72, 1, 0, 0, 0, 74, 77, 1, 0, 0, 0, 75, 73, 1, 0, 0, 0, 75, 76, 1, 0,
    0, 0, 76, 81, 1, 0, 0, 0, 77, 75, 1, 0, 0, 0, 78, 80, 3, 6, 3, 0, 79, 78, 1,
    0, 0, 0, 80, 83, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 85,
    1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 84, 86, 3, 18, 9, 0, 85, 84, 1, 0, 0, 0, 85,
    86, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 88, 5, 0, 0, 1, 88, 1, 1, 0, 0, 0,
    89, 90, 5, 25, 0, 0, 90, 91, 5, 26, 0, 0, 91, 92, 5, 5, 0, 0, 92, 97, 5, 36,
    0, 0, 93, 94, 5, 25, 0, 0, 94, 95, 5, 27, 0, 0, 95, 97, 5, 36, 0, 0, 96, 89,
    1, 0, 0, 0, 96, 93, 1, 0, 0, 0, 97, 3, 1, 0, 0, 0, 98, 99, 5, 23, 0, 0, 99,
    100, 5, 69, 0, 0, 100, 101, 5, 36, 0, 0, 101, 5, 1, 0, 0, 0, 102, 105, 3, 8,
    4, 0, 103, 105, 3, 14, 7, 0, 104, 102, 1, 0, 0, 0, 104, 103, 1, 0, 0, 0,
    105, 7, 1, 0, 0, 0, 106, 107, 5, 14, 0, 0, 107, 108, 5, 66, 0, 0, 108, 112,
    5, 30, 0, 0, 109, 111, 3, 58, 29, 0, 110, 109, 1, 0, 0, 0, 111, 114, 1, 0,
    0, 0, 112, 110, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 115, 1, 0, 0, 0, 114,
    112, 1, 0, 0, 0, 115, 116, 5, 31, 0, 0, 116, 117, 3, 10, 5, 0, 117, 9, 1, 0,
    0, 0, 118, 122, 5, 34, 0, 0, 119, 121, 3, 12, 6, 0, 120, 119, 1, 0, 0, 0,
    121, 124, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 122, 123, 1, 0, 0, 0, 123, 125,
    1, 0, 0, 0, 124, 122, 1, 0, 0, 0, 125, 126, 5, 35, 0, 0, 126, 11, 1, 0, 0,
    0, 127, 168, 3, 10, 5, 0, 128, 129, 5, 66, 0, 0, 129, 130, 5, 40, 0, 0, 130,
    168, 5, 36, 0, 0, 131, 132, 3, 46, 23, 0, 132, 133, 5, 36, 0, 0, 133, 168,
    1, 0, 0, 0, 134, 135, 3, 64, 32, 0, 135, 136, 7, 0, 0, 0, 136, 137, 3, 30,
    15, 0, 137, 138, 5, 36, 0, 0, 138, 168, 1, 0, 0, 0, 139, 140, 5, 16, 0, 0,
    140, 141, 3, 28, 14, 0, 141, 144, 3, 12, 6, 0, 142, 143, 5, 17, 0, 0, 143,
    145, 3, 12, 6, 0, 144, 142, 1, 0, 0, 0, 144, 145, 1, 0, 0, 0, 145, 168, 1,
    0, 0, 0, 146, 147, 5, 19, 0, 0, 147, 148, 3, 28, 14, 0, 148, 149, 3, 12, 6,
    0, 149, 168, 1, 0, 0, 0, 150, 151, 5, 18, 0, 0, 151, 152, 5, 30, 0, 0, 152,
    153, 3, 22, 11, 0, 153, 154, 5, 31, 0, 0, 154, 155, 3, 12, 6, 0, 155, 168,
    1, 0, 0, 0, 156, 157, 5, 15, 0, 0, 157, 158, 3, 30, 15, 0, 158, 159, 5, 36,
    0, 0, 159, 168, 1, 0, 0, 0, 160, 161, 5, 22, 0, 0, 161, 162, 3, 28, 14, 0,
    162, 163, 5, 36, 0, 0, 163, 168, 1, 0, 0, 0, 164, 165, 3, 34, 17, 0, 165,
    166, 5, 36, 0, 0, 166, 168, 1, 0, 0, 0, 167, 127, 1, 0, 0, 0, 167, 128, 1,
    0, 0, 0, 167, 131, 1, 0, 0, 0, 167, 134, 1, 0, 0, 0, 167, 139, 1, 0, 0, 0,
    167, 146, 1, 0, 0, 0, 167, 150, 1, 0, 0, 0, 167, 156, 1, 0, 0, 0, 167, 160,
    1, 0, 0, 0, 167, 164, 1, 0, 0, 0, 168, 13, 1, 0, 0, 0, 169, 170, 5, 11, 0,
    0, 170, 171, 5, 66, 0, 0, 171, 175, 5, 30, 0, 0, 172, 174, 3, 58, 29, 0,
    173, 172, 1, 0, 0, 0, 174, 177, 1, 0, 0, 0, 175, 173, 1, 0, 0, 0, 175, 176,
    1, 0, 0, 0, 176, 178, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 178, 179, 5, 31, 0,
    0, 179, 193, 3, 16, 8, 0, 180, 181, 5, 11, 0, 0, 181, 182, 5, 24, 0, 0, 182,
    183, 5, 66, 0, 0, 183, 187, 5, 30, 0, 0, 184, 186, 3, 58, 29, 0, 185, 184,
    1, 0, 0, 0, 186, 189, 1, 0, 0, 0, 187, 185, 1, 0, 0, 0, 187, 188, 1, 0, 0,
    0, 188, 190, 1, 0, 0, 0, 189, 187, 1, 0, 0, 0, 190, 191, 5, 31, 0, 0, 191,
    193, 3, 16, 8, 0, 192, 169, 1, 0, 0, 0, 192, 180, 1, 0, 0, 0, 193, 15, 1, 0,
    0, 0, 194, 198, 5, 34, 0, 0, 195, 197, 3, 20, 10, 0, 196, 195, 1, 0, 0, 0,
    197, 200, 1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 198, 199, 1, 0, 0, 0, 199, 201,
    1, 0, 0, 0, 200, 198, 1, 0, 0, 0, 201, 202, 5, 35, 0, 0, 202, 17, 1, 0, 0,
    0, 203, 204, 5, 12, 0, 0, 204, 212, 5, 28, 0, 0, 205, 206, 5, 34, 0, 0, 206,
    207, 5, 10, 0, 0, 207, 208, 5, 32, 0, 0, 208, 209, 3, 58, 29, 0, 209, 210,
    5, 33, 0, 0, 210, 211, 5, 35, 0, 0, 211, 213, 1, 0, 0, 0, 212, 205, 1, 0, 0,
    0, 212, 213, 1, 0, 0, 0, 213, 214, 1, 0, 0, 0, 214, 215, 5, 38, 0, 0, 215,
    216, 5, 66, 0, 0, 216, 218, 5, 30, 0, 0, 217, 219, 3, 62, 31, 0, 218, 217,
    1, 0, 0, 0, 218, 219, 1, 0, 0, 0, 219, 220, 1, 0, 0, 0, 220, 221, 5, 31, 0,
    0, 221, 222, 5, 36, 0, 0, 222, 19, 1, 0, 0, 0, 223, 328, 3, 16, 8, 0, 224,
    225, 5, 66, 0, 0, 225, 226, 5, 40, 0, 0, 226, 328, 5, 36, 0, 0, 227, 228, 3,
    46, 23, 0, 228, 229, 5, 36, 0, 0, 229, 328, 1, 0, 0, 0, 230, 231, 3, 42, 21,
    0, 231, 232, 5, 36, 0, 0, 232, 328, 1, 0, 0, 0, 233, 234, 3, 38, 19, 0, 234,
    235, 5, 36, 0, 0, 235, 328, 1, 0, 0, 0, 236, 237, 3, 52, 26, 0, 237, 238, 5,
    36, 0, 0, 238, 328, 1, 0, 0, 0, 239, 242, 3, 64, 32, 0, 240, 241, 5, 1, 0,
    0, 241, 243, 5, 66, 0, 0, 242, 240, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243,
    244, 1, 0, 0, 0, 244, 245, 5, 38, 0, 0, 245, 246, 3, 30, 15, 0, 246, 247, 5,
    36, 0, 0, 247, 328, 1, 0, 0, 0, 248, 249, 3, 30, 15, 0, 249, 250, 5, 43, 0,
    0, 250, 251, 3, 30, 15, 0, 251, 252, 5, 36, 0, 0, 252, 328, 1, 0, 0, 0, 253,
    259, 3, 32, 16, 0, 254, 255, 3, 64, 32, 0, 255, 256, 5, 1, 0, 0, 256, 257,
    3, 64, 32, 0, 257, 259, 1, 0, 0, 0, 258, 253, 1, 0, 0, 0, 258, 254, 1, 0, 0,
    0, 259, 260, 1, 0, 0, 0, 260, 261, 7, 1, 0, 0, 261, 262, 3, 30, 15, 0, 262,
    263, 5, 36, 0, 0, 263, 328, 1, 0, 0, 0, 264, 265, 3, 30, 15, 0, 265, 266, 5,
    42, 0, 0, 266, 269, 3, 64, 32, 0, 267, 268, 5, 1, 0, 0, 268, 270, 3, 64, 32,
    0, 269, 267, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 271, 1, 0, 0, 0, 271,
    272, 5, 36, 0, 0, 272, 328, 1, 0, 0, 0, 273, 274, 5, 2, 0, 0, 274, 277, 7,
    2, 0, 0, 275, 278, 3, 30, 15, 0, 276, 278, 3, 52, 26, 0, 277, 275, 1, 0, 0,
    0, 277, 276, 1, 0, 0, 0, 278, 279, 1, 0, 0, 0, 279, 280, 5, 36, 0, 0, 280,
    328, 1, 0, 0, 0, 281, 284, 3, 30, 15, 0, 282, 284, 3, 52, 26, 0, 283, 281,
    1, 0, 0, 0, 283, 282, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285, 286, 5, 42, 0,
    0, 286, 287, 5, 2, 0, 0, 287, 288, 5, 36, 0, 0, 288, 328, 1, 0, 0, 0, 289,
    290, 5, 30, 0, 0, 290, 291, 3, 56, 28, 0, 291, 292, 5, 31, 0, 0, 292, 293,
    7, 2, 0, 0, 293, 294, 3, 52, 26, 0, 294, 295, 5, 36, 0, 0, 295, 328, 1, 0,
    0, 0, 296, 297, 3, 52, 26, 0, 297, 298, 5, 42, 0, 0, 298, 299, 5, 30, 0, 0,
    299, 300, 3, 56, 28, 0, 300, 301, 5, 31, 0, 0, 301, 302, 5, 36, 0, 0, 302,
    328, 1, 0, 0, 0, 303, 304, 5, 16, 0, 0, 304, 305, 3, 28, 14, 0, 305, 308, 3,
    20, 10, 0, 306, 307, 5, 17, 0, 0, 307, 309, 3, 20, 10, 0, 308, 306, 1, 0, 0,
    0, 308, 309, 1, 0, 0, 0, 309, 328, 1, 0, 0, 0, 310, 311, 5, 19, 0, 0, 311,
    312, 3, 28, 14, 0, 312, 313, 3, 20, 10, 0, 313, 328, 1, 0, 0, 0, 314, 315,
    5, 18, 0, 0, 315, 316, 5, 30, 0, 0, 316, 317, 3, 22, 11, 0, 317, 318, 5, 31,
    0, 0, 318, 319, 3, 20, 10, 0, 319, 328, 1, 0, 0, 0, 320, 321, 5, 22, 0, 0,
    321, 322, 3, 28, 14, 0, 322, 323, 5, 36, 0, 0, 323, 328, 1, 0, 0, 0, 324,
    325, 3, 34, 17, 0, 325, 326, 5, 36, 0, 0, 326, 328, 1, 0, 0, 0, 327, 223, 1,
    0, 0, 0, 327, 224, 1, 0, 0, 0, 327, 227, 1, 0, 0, 0, 327, 230, 1, 0, 0, 0,
    327, 233, 1, 0, 0, 0, 327, 236, 1, 0, 0, 0, 327, 239, 1, 0, 0, 0, 327, 248,
    1, 0, 0, 0, 327, 258, 1, 0, 0, 0, 327, 264, 1, 0, 0, 0, 327, 273, 1, 0, 0,
    0, 327, 283, 1, 0, 0, 0, 327, 289, 1, 0, 0, 0, 327, 296, 1, 0, 0, 0, 327,
    303, 1, 0, 0, 0, 327, 310, 1, 0, 0, 0, 327, 314, 1, 0, 0, 0, 327, 320, 1, 0,
    0, 0, 327, 324, 1, 0, 0, 0, 328, 21, 1, 0, 0, 0, 329, 330, 3, 24, 12, 0,
    330, 331, 5, 36, 0, 0, 331, 332, 3, 30, 15, 0, 332, 333, 5, 36, 0, 0, 333,
    334, 3, 26, 13, 0, 334, 23, 1, 0, 0, 0, 335, 337, 5, 13, 0, 0, 336, 335, 1,
    0, 0, 0, 336, 337, 1, 0, 0, 0, 337, 338, 1, 0, 0, 0, 338, 341, 3, 64, 32, 0,
    339, 340, 5, 38, 0, 0, 340, 342, 3, 48, 24, 0, 341, 339, 1, 0, 0, 0, 341,
    342, 1, 0, 0, 0, 342, 25, 1, 0, 0, 0, 343, 347, 5, 66, 0, 0, 344, 348, 5,
    40, 0, 0, 345, 346, 7, 0, 0, 0, 346, 348, 3, 30, 15, 0, 347, 344, 1, 0, 0,
    0, 347, 345, 1, 0, 0, 0, 348, 352, 1, 0, 0, 0, 349, 350, 5, 40, 0, 0, 350,
    352, 5, 66, 0, 0, 351, 343, 1, 0, 0, 0, 351, 349, 1, 0, 0, 0, 352, 27, 1, 0,
    0, 0, 353, 354, 5, 30, 0, 0, 354, 355, 3, 30, 15, 0, 355, 356, 5, 31, 0, 0,
    356, 29, 1, 0, 0, 0, 357, 358, 6, 15, -1, 0, 358, 363, 3, 32, 16, 0, 359,
    363, 3, 52, 26, 0, 360, 361, 7, 3, 0, 0, 361, 363, 3, 30, 15, 7, 362, 357,
    1, 0, 0, 0, 362, 359, 1, 0, 0, 0, 362, 360, 1, 0, 0, 0, 363, 396, 1, 0, 0,
    0, 364, 365, 10, 6, 0, 0, 365, 366, 5, 3, 0, 0, 366, 367, 3, 30, 15, 0, 367,
    368, 5, 4, 0, 0, 368, 369, 3, 30, 15, 7, 369, 395, 1, 0, 0, 0, 370, 371, 10,
    5, 0, 0, 371, 372, 7, 4, 0, 0, 372, 395, 3, 30, 15, 6, 373, 374, 10, 4, 0,
    0, 374, 375, 7, 5, 0, 0, 375, 395, 3, 30, 15, 5, 376, 377, 10, 3, 0, 0, 377,
    378, 7, 6, 0, 0, 378, 395, 3, 30, 15, 4, 379, 380, 10, 2, 0, 0, 380, 381, 7,
    7, 0, 0, 381, 395, 3, 30, 15, 3, 382, 383, 10, 1, 0, 0, 383, 384, 7, 8, 0,
    0, 384, 395, 3, 30, 15, 2, 385, 386, 10, 8, 0, 0, 386, 387, 5, 1, 0, 0, 387,
    392, 5, 66, 0, 0, 388, 389, 5, 32, 0, 0, 389, 390, 3, 30, 15, 0, 390, 391,
    5, 33, 0, 0, 391, 393, 1, 0, 0, 0, 392, 388, 1, 0, 0, 0, 392, 393, 1, 0, 0,
    0, 393, 395, 1, 0, 0, 0, 394, 364, 1, 0, 0, 0, 394, 370, 1, 0, 0, 0, 394,
    373, 1, 0, 0, 0, 394, 376, 1, 0, 0, 0, 394, 379, 1, 0, 0, 0, 394, 382, 1, 0,
    0, 0, 394, 385, 1, 0, 0, 0, 395, 398, 1, 0, 0, 0, 396, 394, 1, 0, 0, 0, 396,
    397, 1, 0, 0, 0, 397, 31, 1, 0, 0, 0, 398, 396, 1, 0, 0, 0, 399, 400, 5, 30,
    0, 0, 400, 401, 3, 30, 15, 0, 401, 402, 5, 31, 0, 0, 402, 412, 1, 0, 0, 0,
    403, 404, 5, 32, 0, 0, 404, 405, 3, 62, 31, 0, 405, 406, 5, 33, 0, 0, 406,
    412, 1, 0, 0, 0, 407, 412, 5, 67, 0, 0, 408, 412, 3, 64, 32, 0, 409, 412, 3,
    58, 29, 0, 410, 412, 3, 60, 30, 0, 411, 399, 1, 0, 0, 0, 411, 403, 1, 0, 0,
    0, 411, 407, 1, 0, 0, 0, 411, 408, 1, 0, 0, 0, 411, 409, 1, 0, 0, 0, 411,
    410, 1, 0, 0, 0, 412, 33, 1, 0, 0, 0, 413, 414, 5, 21, 0, 0, 414, 417, 5,
    30, 0, 0, 415, 418, 5, 69, 0, 0, 416, 418, 3, 30, 15, 0, 417, 415, 1, 0, 0,
    0, 417, 416, 1, 0, 0, 0, 417, 418, 1, 0, 0, 0, 418, 419, 1, 0, 0, 0, 419,
    420, 5, 31, 0, 0, 420, 35, 1, 0, 0, 0, 421, 422, 5, 12, 0, 0, 422, 423, 5,
    66, 0, 0, 423, 37, 1, 0, 0, 0, 424, 428, 3, 36, 18, 0, 425, 427, 3, 54, 27,
    0, 426, 425, 1, 0, 0, 0, 427, 430, 1, 0, 0, 0, 428, 426, 1, 0, 0, 0, 428,
    429, 1, 0, 0, 0, 429, 433, 1, 0, 0, 0, 430, 428, 1, 0, 0, 0, 431, 432, 5,
    38, 0, 0, 432, 434, 3, 52, 26, 0, 433, 431, 1, 0, 0, 0, 433, 434, 1, 0, 0,
    0, 434, 39, 1, 0, 0, 0, 435, 437, 5, 7, 0, 0, 436, 438, 5, 6, 0, 0, 437,
    436, 1, 0, 0, 0, 437, 438, 1, 0, 0, 0, 438, 443, 1, 0, 0, 0, 439, 440, 5,
    34, 0, 0, 440, 441, 3, 58, 29, 0, 441, 442, 5, 35, 0, 0, 442, 444, 1, 0, 0,
    0, 443, 439, 1, 0, 0, 0, 443, 444, 1, 0, 0, 0, 444, 445, 1, 0, 0, 0, 445,
    446, 3, 64, 32, 0, 446, 41, 1, 0, 0, 0, 447, 450, 3, 40, 20, 0, 448, 449, 5,
    41, 0, 0, 449, 451, 3, 48, 24, 0, 450, 448, 1, 0, 0, 0, 450, 451, 1, 0, 0,
    0, 451, 461, 1, 0, 0, 0, 452, 457, 3, 40, 20, 0, 453, 454, 5, 37, 0, 0, 454,
    456, 3, 64, 32, 0, 455, 453, 1, 0, 0, 0, 456, 459, 1, 0, 0, 0, 457, 455, 1,
    0, 0, 0, 457, 458, 1, 0, 0, 0, 458, 461, 1, 0, 0, 0, 459, 457, 1, 0, 0, 0,
    460, 447, 1, 0, 0, 0, 460, 452, 1, 0, 0, 0, 461, 43, 1, 0, 0, 0, 462, 463,
    5, 13, 0, 0, 463, 464, 3, 64, 32, 0, 464, 45, 1, 0, 0, 0, 465, 468, 3, 44,
    22, 0, 466, 467, 5, 38, 0, 0, 467, 469, 3, 48, 24, 0, 468, 466, 1, 0, 0, 0,
    468, 469, 1, 0, 0, 0, 469, 479, 1, 0, 0, 0, 470, 475, 3, 44, 22, 0, 471,
    472, 5, 37, 0, 0, 472, 474, 3, 64, 32, 0, 473, 471, 1, 0, 0, 0, 474, 477, 1,
    0, 0, 0, 475, 473, 1, 0, 0, 0, 475, 476, 1, 0, 0, 0, 476, 479, 1, 0, 0, 0,
    477, 475, 1, 0, 0, 0, 478, 465, 1, 0, 0, 0, 478, 470, 1, 0, 0, 0, 479, 47,
    1, 0, 0, 0, 480, 483, 3, 30, 15, 0, 481, 483, 3, 52, 26, 0, 482, 480, 1, 0,
    0, 0, 482, 481, 1, 0, 0, 0, 483, 49, 1, 0, 0, 0, 484, 486, 5, 30, 0, 0, 485,
    487, 3, 62, 31, 0, 486, 485, 1, 0, 0, 0, 486, 487, 1, 0, 0, 0, 487, 488, 1,
    0, 0, 0, 488, 521, 5, 31, 0, 0, 489, 490, 5, 30, 0, 0, 490, 491, 5, 66, 0,
    0, 491, 492, 5, 41, 0, 0, 492, 499, 3, 30, 15, 0, 493, 494, 5, 37, 0, 0,
    494, 495, 5, 66, 0, 0, 495, 496, 5, 41, 0, 0, 496, 498, 3, 30, 15, 0, 497,
    493, 1, 0, 0, 0, 498, 501, 1, 0, 0, 0, 499, 497, 1, 0, 0, 0, 499, 500, 1, 0,
    0, 0, 500, 502, 1, 0, 0, 0, 501, 499, 1, 0, 0, 0, 502, 503, 5, 31, 0, 0,
    503, 521, 1, 0, 0, 0, 504, 505, 5, 30, 0, 0, 505, 506, 3, 30, 15, 0, 506,
    507, 5, 42, 0, 0, 507, 515, 5, 66, 0, 0, 508, 509, 5, 37, 0, 0, 509, 510, 3,
    30, 15, 0, 510, 511, 5, 42, 0, 0, 511, 512, 5, 66, 0, 0, 512, 514, 1, 0, 0,
    0, 513, 508, 1, 0, 0, 0, 514, 517, 1, 0, 0, 0, 515, 513, 1, 0, 0, 0, 515,
    516, 1, 0, 0, 0, 516, 518, 1, 0, 0, 0, 517, 515, 1, 0, 0, 0, 518, 519, 5,
    31, 0, 0, 519, 521, 1, 0, 0, 0, 520, 484, 1, 0, 0, 0, 520, 489, 1, 0, 0, 0,
    520, 504, 1, 0, 0, 0, 521, 51, 1, 0, 0, 0, 522, 523, 5, 66, 0, 0, 523, 525,
    5, 30, 0, 0, 524, 526, 3, 62, 31, 0, 525, 524, 1, 0, 0, 0, 525, 526, 1, 0,
    0, 0, 526, 527, 1, 0, 0, 0, 527, 529, 5, 31, 0, 0, 528, 530, 3, 50, 25, 0,
    529, 528, 1, 0, 0, 0, 529, 530, 1, 0, 0, 0, 530, 53, 1, 0, 0, 0, 531, 535,
    5, 32, 0, 0, 532, 536, 5, 67, 0, 0, 533, 536, 5, 66, 0, 0, 534, 536, 3, 30,
    15, 0, 535, 532, 1, 0, 0, 0, 535, 533, 1, 0, 0, 0, 535, 534, 1, 0, 0, 0,
    536, 537, 1, 0, 0, 0, 537, 538, 5, 33, 0, 0, 538, 55, 1, 0, 0, 0, 539, 544,
    7, 9, 0, 0, 540, 541, 5, 37, 0, 0, 541, 543, 7, 9, 0, 0, 542, 540, 1, 0, 0,
    0, 543, 546, 1, 0, 0, 0, 544, 542, 1, 0, 0, 0, 544, 545, 1, 0, 0, 0, 545,
    57, 1, 0, 0, 0, 546, 544, 1, 0, 0, 0, 547, 552, 5, 66, 0, 0, 548, 549, 5,
    37, 0, 0, 549, 551, 5, 66, 0, 0, 550, 548, 1, 0, 0, 0, 551, 554, 1, 0, 0, 0,
    552, 550, 1, 0, 0, 0, 552, 553, 1, 0, 0, 0, 553, 59, 1, 0, 0, 0, 554, 552,
    1, 0, 0, 0, 555, 560, 5, 67, 0, 0, 556, 557, 5, 37, 0, 0, 557, 559, 5, 67,
    0, 0, 558, 556, 1, 0, 0, 0, 559, 562, 1, 0, 0, 0, 560, 558, 1, 0, 0, 0, 560,
    561, 1, 0, 0, 0, 561, 61, 1, 0, 0, 0, 562, 560, 1, 0, 0, 0, 563, 568, 3, 30,
    15, 0, 564, 565, 5, 37, 0, 0, 565, 567, 3, 30, 15, 0, 566, 564, 1, 0, 0, 0,
    567, 570, 1, 0, 0, 0, 568, 566, 1, 0, 0, 0, 568, 569, 1, 0, 0, 0, 569, 63,
    1, 0, 0, 0, 570, 568, 1, 0, 0, 0, 571, 575, 5, 66, 0, 0, 572, 574, 3, 54,
    27, 0, 573, 572, 1, 0, 0, 0, 574, 577, 1, 0, 0, 0, 575, 573, 1, 0, 0, 0,
    575, 576, 1, 0, 0, 0, 576, 65, 1, 0, 0, 0, 577, 575, 1, 0, 0, 0, 56, 69, 75,
    81, 85, 96, 104, 112, 122, 144, 167, 175, 187, 192, 198, 212, 218, 242, 258,
    269, 277, 283, 308, 327, 336, 341, 347, 351, 362, 392, 394, 396, 411, 417,
    428, 433, 437, 443, 450, 457, 460, 468, 475, 478, 482, 486, 499, 515, 520,
    525, 529, 535, 544, 552, 560, 568, 575,
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
  public args_list(): ArgsContext[] {
    return this.getTypedRuleContexts(ArgsContext) as ArgsContext[];
  }
  public args(i: number): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, i) as ArgsContext;
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
  public args_list(): ArgsContext[] {
    return this.getTypedRuleContexts(ArgsContext) as ArgsContext[];
  }
  public args(i: number): ArgsContext {
    return this.getTypedRuleContext(ArgsContext, i) as ArgsContext;
  }
  public CUSTOM(): TerminalNode {
    return this.getToken(CircomParser.CUSTOM, 0);
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
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
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
  public RB(): TerminalNode {
    return this.getToken(CircomParser.RB, 0);
  }
  public NUMBER(): TerminalNode {
    return this.getToken(CircomParser.NUMBER, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(CircomParser.ID, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
