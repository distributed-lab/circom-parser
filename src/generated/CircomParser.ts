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
  public static readonly TEMPLATE = 9;
  public static readonly FUNCTION = 10;
  public static readonly MAIN = 11;
  public static readonly PUBLIC = 12;
  public static readonly COMPONENT = 13;
  public static readonly VAR = 14;
  public static readonly SIGNAL = 15;
  public static readonly INPUT = 16;
  public static readonly OUTPUT = 17;
  public static readonly IF = 18;
  public static readonly ELSE = 19;
  public static readonly FOR = 20;
  public static readonly WHILE = 21;
  public static readonly DO = 22;
  public static readonly LOG = 23;
  public static readonly ASSERT = 24;
  public static readonly RETURN = 25;
  public static readonly LP = 26;
  public static readonly RP = 27;
  public static readonly LB = 28;
  public static readonly RB = 29;
  public static readonly LC = 30;
  public static readonly RC = 31;
  public static readonly SEMICOLON = 32;
  public static readonly DOT = 33;
  public static readonly COMMA = 34;
  public static readonly UNDERSCORE = 35;
  public static readonly TERNARY_CONDITION = 36;
  public static readonly TERNARY_ALTERNATIVE = 37;
  public static readonly EQ_CONSTRAINT = 38;
  public static readonly LEFT_CONSTRAINT = 39;
  public static readonly RIGHT_CONSTRAINT = 40;
  public static readonly SELF_OP = 41;
  public static readonly NOT = 42;
  public static readonly BNOT = 43;
  public static readonly POW = 44;
  public static readonly MUL = 45;
  public static readonly DIV = 46;
  public static readonly QUO = 47;
  public static readonly MOD = 48;
  public static readonly ADD = 49;
  public static readonly SUB = 50;
  public static readonly SHL = 51;
  public static readonly SHR = 52;
  public static readonly BAND = 53;
  public static readonly BXOR = 54;
  public static readonly BOR = 55;
  public static readonly EQ = 56;
  public static readonly NEQ = 57;
  public static readonly GT = 58;
  public static readonly LT = 59;
  public static readonly LE = 60;
  public static readonly GE = 61;
  public static readonly AND = 62;
  public static readonly OR = 63;
  public static readonly ASSIGNMENT = 64;
  public static readonly ASSIGNMENT_WITH_OP = 65;
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
  public static readonly RULE_element = 12;
  public static readonly RULE_forControl = 13;
  public static readonly RULE_forInit = 14;
  public static readonly RULE_forUpdate = 15;
  public static readonly RULE_parExpression = 16;
  public static readonly RULE_expression = 17;
  public static readonly RULE_primary = 18;
  public static readonly RULE_logStmt = 19;
  public static readonly RULE_componentDefinition = 20;
  public static readonly RULE_componentDeclaration = 21;
  public static readonly RULE_signalDefinition = 22;
  public static readonly RULE_tagList = 23;
  public static readonly RULE_signalDeclaration = 24;
  public static readonly RULE_varDefinition = 25;
  public static readonly RULE_varDeclaration = 26;
  public static readonly RULE_rhsValue = 27;
  public static readonly RULE_componentCall = 28;
  public static readonly RULE_blockInstantiation = 29;
  public static readonly RULE_expressionList = 30;
  public static readonly RULE_identifier = 31;
  public static readonly RULE_arrayDimension = 32;
  public static readonly RULE_args = 33;
  public static readonly RULE_argsWithUnderscore = 34;
  public static readonly RULE_numSequence = 35;
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
    null,
    null,
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
    "RIGHT_CONSTRAINT",
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
    "element",
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
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 3) {
          {
            {
              this.state = 72;
              this.pragmaDeclaration();
            }
          }
          this.state = 77;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 6) {
          {
            {
              this.state = 78;
              this.includeDeclaration();
            }
          }
          this.state = 83;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 9 || _la === 10) {
          {
            {
              this.state = 84;
              this.blockDeclaration();
            }
          }
          this.state = 89;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 13) {
          {
            this.state = 90;
            this.componentMainDeclaration();
          }
        }

        this.state = 93;
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
      this.state = 102;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 95;
            this.match(CircomParser.PRAGMA);
            this.state = 96;
            this.match(CircomParser.CIRCOM);
            this.state = 97;
            this.match(CircomParser.VERSION);
            this.state = 98;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 99;
            this.match(CircomParser.PRAGMA);
            this.state = 100;
            this.match(CircomParser.CUSTOM_TEMPLATES);
            this.state = 101;
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
        this.state = 104;
        this.match(CircomParser.INCLUDE);
        this.state = 105;
        this.match(CircomParser.STRING);
        this.state = 106;
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
      this.state = 110;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 10:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 108;
            this.functionDeclaration();
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 109;
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
        this.state = 112;
        this.match(CircomParser.FUNCTION);
        this.state = 113;
        this.match(CircomParser.ID);
        this.state = 114;
        this.match(CircomParser.LP);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 66) {
          {
            this.state = 115;
            this.args();
          }
        }

        this.state = 118;
        this.match(CircomParser.RP);
        this.state = 119;
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
        this.state = 121;
        this.match(CircomParser.LC);
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1202995200) !== 0) ||
          _la === 66
        ) {
          {
            {
              this.state = 122;
              this.functionStmt();
            }
          }
          this.state = 127;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 128;
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
      this.state = 189;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
        case 1:
          localctx = new FuncBlockContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 130;
            this.functionBlock();
          }
          break;
        case 2:
          localctx = new FuncSelfOpContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 131;
            this.match(CircomParser.ID);
            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 28) {
              {
                {
                  this.state = 132;
                  this.arrayDimension();
                }
              }
              this.state = 137;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 138;
            this.match(CircomParser.SELF_OP);
            this.state = 139;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new FuncVarDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 140;
            this.varDeclaration();
            this.state = 141;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          localctx = new FuncAssignmentExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 143;
            this.identifier();
            this.state = 144;
            _la = this._input.LA(1);
            if (!(_la === 64 || _la === 65)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 145;
            this.expression(0);
            this.state = 146;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          localctx = new FuncVariadicAssignmentContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 148;
            this.match(CircomParser.LP);
            this.state = 149;
            this.argsWithUnderscore();
            this.state = 150;
            this.match(CircomParser.RP);
            this.state = 151;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 157;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
              case 1:
                {
                  this.state = 152;
                  this.match(CircomParser.LP);
                  this.state = 153;
                  this.expressionList();
                  this.state = 154;
                  this.match(CircomParser.RP);
                }
                break;
              case 2:
                {
                  this.state = 156;
                  this.expression(0);
                }
                break;
            }
            this.state = 159;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          localctx = new IfFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 161;
            this.match(CircomParser.IF);
            this.state = 162;
            this.parExpression();
            this.state = 163;
            this.functionStmt();
            this.state = 166;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
              case 1:
                {
                  this.state = 164;
                  this.match(CircomParser.ELSE);
                  this.state = 165;
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
            this.state = 168;
            this.match(CircomParser.WHILE);
            this.state = 169;
            this.parExpression();
            this.state = 170;
            this.functionStmt();
          }
          break;
        case 8:
          localctx = new ForFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 172;
            this.match(CircomParser.FOR);
            this.state = 173;
            this.match(CircomParser.LP);
            this.state = 174;
            this.forControl();
            this.state = 175;
            this.match(CircomParser.RP);
            this.state = 176;
            this.functionStmt();
          }
          break;
        case 9:
          localctx = new ReturnFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 178;
            this.match(CircomParser.RETURN);
            this.state = 179;
            this.expression(0);
            this.state = 180;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          localctx = new AssertFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 182;
            this.match(CircomParser.ASSERT);
            this.state = 183;
            this.parExpression();
            this.state = 184;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          localctx = new LogFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 186;
            this.logStmt();
            this.state = 187;
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
        this.state = 191;
        this.match(CircomParser.TEMPLATE);
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 7) {
          {
            this.state = 192;
            this.match(CircomParser.CUSTOM);
          }
        }

        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 8) {
          {
            this.state = 195;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 198;
        this.match(CircomParser.ID);
        this.state = 199;
        this.match(CircomParser.LP);
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 66) {
          {
            this.state = 200;
            this.args();
          }
        }

        this.state = 203;
        this.match(CircomParser.RP);
        this.state = 204;
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
        this.state = 206;
        this.match(CircomParser.LC);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 8) & ~0x1f) === 0 && ((1 << (_la - 8)) & 139834593) !== 0) ||
          (((_la - 42) & ~0x1f) === 0 && ((1 << (_la - 42)) & 50331907) !== 0)
        ) {
          {
            {
              this.state = 207;
              this.templateStmt();
            }
          }
          this.state = 212;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 213;
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
        this.state = 215;
        this.match(CircomParser.COMPONENT);
        this.state = 216;
        this.match(CircomParser.MAIN);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 30) {
          {
            this.state = 217;
            this.publicInputsList();
          }
        }

        this.state = 220;
        this.match(CircomParser.ASSIGNMENT);
        this.state = 221;
        this.match(CircomParser.ID);
        this.state = 222;
        this.match(CircomParser.LP);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 335544576) !== 0) ||
          (((_la - 42) & ~0x1f) === 0 && ((1 << (_la - 42)) & 50331907) !== 0)
        ) {
          {
            this.state = 223;
            this.expressionList();
          }
        }

        this.state = 226;
        this.match(CircomParser.RP);
        this.state = 227;
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
        this.state = 229;
        this.match(CircomParser.LC);
        this.state = 230;
        this.match(CircomParser.PUBLIC);
        this.state = 231;
        this.match(CircomParser.LB);
        this.state = 232;
        this.args();
        this.state = 233;
        this.match(CircomParser.RB);
        this.state = 234;
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
      this.state = 376;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 26, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 236;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 237;
            this.match(CircomParser.ID);
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 28) {
              {
                {
                  this.state = 238;
                  this.arrayDimension();
                }
              }
              this.state = 243;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 244;
            this.match(CircomParser.SELF_OP);
            this.state = 245;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 246;
            this.varDeclaration();
            this.state = 247;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 249;
            this.signalDeclaration();
            this.state = 250;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 252;
            this.componentDeclaration();
            this.state = 253;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 255;
            this.blockInstantiation();
            this.state = 256;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 258;
            this.identifier();
            this.state = 259;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 260;
            this.expression(0);
            this.state = 261;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 263;
            this.expression(0);
            this.state = 264;
            this.match(CircomParser.EQ_CONSTRAINT);
            this.state = 265;
            this.expression(0);
            this.state = 266;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 268;
            this.element();
            this.state = 269;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 65)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 270;
            this.expression(0);
            this.state = 271;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 273;
            this.match(CircomParser.LP);
            this.state = 274;
            this.element();
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 275;
                  this.match(CircomParser.COMMA);
                  this.state = 276;
                  this.element();
                }
              }
              this.state = 281;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 282;
            this.match(CircomParser.RP);
            this.state = 283;
            this.match(CircomParser.LEFT_CONSTRAINT);
            this.state = 284;
            this.match(CircomParser.LP);
            this.state = 285;
            this.expression(0);
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 286;
                  this.match(CircomParser.COMMA);
                  this.state = 287;
                  this.expression(0);
                }
              }
              this.state = 292;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 293;
            this.match(CircomParser.RP);
            this.state = 294;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 296;
            this.expression(0);
            this.state = 297;
            this.match(CircomParser.RIGHT_CONSTRAINT);
            this.state = 298;
            this.element();
            this.state = 299;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 301;
            this.expression(0);
            this.state = 302;
            this.match(CircomParser.RIGHT_CONSTRAINT);
            this.state = 303;
            this.match(CircomParser.LP);
            this.state = 304;
            this.element();
            this.state = 309;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 305;
                  this.match(CircomParser.COMMA);
                  this.state = 306;
                  this.element();
                }
              }
              this.state = 311;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 312;
            this.match(CircomParser.RP);
            this.state = 313;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 315;
            this.match(CircomParser.UNDERSCORE);
            this.state = 316;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 64)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 319;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
              case 1:
                {
                  this.state = 317;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 318;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 321;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 325;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
              case 1:
                {
                  this.state = 323;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 324;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 327;
            this.match(CircomParser.RIGHT_CONSTRAINT);
            this.state = 328;
            this.match(CircomParser.UNDERSCORE);
            this.state = 329;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 331;
            this.match(CircomParser.LP);
            this.state = 332;
            this.argsWithUnderscore();
            this.state = 333;
            this.match(CircomParser.RP);
            this.state = 334;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 64)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 341;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
              case 1:
                {
                  this.state = 335;
                  this.match(CircomParser.LP);
                  this.state = 336;
                  this.expressionList();
                  this.state = 337;
                  this.match(CircomParser.RP);
                }
                break;
              case 2:
                {
                  this.state = 339;
                  this.blockInstantiation();
                }
                break;
              case 3:
                {
                  this.state = 340;
                  this.expression(0);
                }
                break;
            }
            this.state = 343;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 345;
            this.blockInstantiation();
            this.state = 346;
            this.match(CircomParser.RIGHT_CONSTRAINT);
            this.state = 347;
            this.match(CircomParser.LP);
            this.state = 348;
            this.argsWithUnderscore();
            this.state = 349;
            this.match(CircomParser.RP);
            this.state = 350;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 352;
            this.match(CircomParser.IF);
            this.state = 353;
            this.parExpression();
            this.state = 354;
            this.templateStmt();
            this.state = 357;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
              case 1:
                {
                  this.state = 355;
                  this.match(CircomParser.ELSE);
                  this.state = 356;
                  this.templateStmt();
                }
                break;
            }
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 359;
            this.match(CircomParser.WHILE);
            this.state = 360;
            this.parExpression();
            this.state = 361;
            this.templateStmt();
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 363;
            this.match(CircomParser.FOR);
            this.state = 364;
            this.match(CircomParser.LP);
            this.state = 365;
            this.forControl();
            this.state = 366;
            this.match(CircomParser.RP);
            this.state = 367;
            this.templateStmt();
          }
          break;
        case 20:
          this.enterOuterAlt(localctx, 20);
          {
            this.state = 369;
            this.match(CircomParser.ASSERT);
            this.state = 370;
            this.parExpression();
            this.state = 371;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 21:
          this.enterOuterAlt(localctx, 21);
          {
            this.state = 373;
            this.logStmt();
            this.state = 374;
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
  public element(): ElementContext {
    let localctx: ElementContext = new ElementContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 24, CircomParser.RULE_element);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        {
          this.state = 378;
          this.identifier();
          this.state = 381;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 33) {
            {
              this.state = 379;
              this.match(CircomParser.DOT);
              this.state = 380;
              this.identifier();
            }
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
  public forControl(): ForControlContext {
    let localctx: ForControlContext = new ForControlContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 26, CircomParser.RULE_forControl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 383;
        this.forInit();
        this.state = 384;
        this.match(CircomParser.SEMICOLON);
        this.state = 385;
        this.expression(0);
        this.state = 386;
        this.match(CircomParser.SEMICOLON);
        this.state = 387;
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
    this.enterRule(localctx, 28, CircomParser.RULE_forInit);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 390;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 14) {
          {
            this.state = 389;
            this.match(CircomParser.VAR);
          }
        }

        this.state = 392;
        this.identifier();
        this.state = 395;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 64) {
          {
            this.state = 393;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 394;
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
    this.enterRule(localctx, 30, CircomParser.RULE_forUpdate);
    let _la: number;
    try {
      this.state = 405;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 66:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 397;
            this.match(CircomParser.ID);
            this.state = 401;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 41:
                {
                  this.state = 398;
                  this.match(CircomParser.SELF_OP);
                }
                break;
              case 64:
              case 65:
                {
                  {
                    this.state = 399;
                    _la = this._input.LA(1);
                    if (!(_la === 64 || _la === 65)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 400;
                    this.expression(0);
                  }
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case 41:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 403;
            this.match(CircomParser.SELF_OP);
            this.state = 404;
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
    this.enterRule(localctx, 32, CircomParser.RULE_parExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 407;
        this.match(CircomParser.LP);
        this.state = 408;
        this.expression(0);
        this.state = 409;
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
    let _startState: number = 34;
    this.enterRecursionRule(localctx, 34, CircomParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 416;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
          case 1:
            {
              localctx = new PrimaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 412;
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
              this.state = 413;
              this.blockInstantiation();
            }
            break;
          case 3:
            {
              localctx = new UnaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 414;
              (localctx as UnaryExpressionContext)._op = this._input.LT(1);
              _la = this._input.LA(1);
              if (
                !(((_la - 42) & ~0x1f) === 0 && ((1 << (_la - 42)) & 259) !== 0)
              ) {
                (localctx as UnaryExpressionContext)._op =
                  this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 415;
              this.expression(7);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 450;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 448;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 34, this._ctx)
              ) {
                case 1:
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
                    this.state = 418;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 419;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 44) & ~0x1f) === 0 &&
                        ((1 << (_la - 44)) & 31) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 420;
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
                    this.state = 421;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 422;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 49 || _la === 50)) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 423;
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
                    this.state = 424;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 425;
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
                    this.state = 426;
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
                    this.state = 427;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 428;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 53) & ~0x1f) === 0 &&
                        ((1 << (_la - 53)) & 7) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 429;
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
                    this.state = 430;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 431;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 56) & ~0x1f) === 0 &&
                        ((1 << (_la - 56)) & 255) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 432;
                    this.expression(3);
                  }
                  break;
                case 6:
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
                    this.state = 433;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)",
                      );
                    }
                    this.state = 434;
                    this.match(CircomParser.TERNARY_CONDITION);
                    this.state = 435;
                    this.expression(0);
                    this.state = 436;
                    this.match(CircomParser.TERNARY_ALTERNATIVE);
                    this.state = 437;
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
                    this.state = 439;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 440;
                    this.match(CircomParser.DOT);
                    this.state = 441;
                    this.match(CircomParser.ID);
                    this.state = 446;
                    this._errHandler.sync(this);
                    switch (
                      this._interp.adaptivePredict(this._input, 33, this._ctx)
                    ) {
                      case 1:
                        {
                          this.state = 442;
                          this.match(CircomParser.LB);
                          this.state = 443;
                          this.expression(0);
                          this.state = 444;
                          this.match(CircomParser.RB);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
          }
          this.state = 452;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
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
    this.enterRule(localctx, 36, CircomParser.RULE_primary);
    try {
      this.state = 465;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 453;
            this.match(CircomParser.LP);
            this.state = 454;
            this.expression(0);
            this.state = 455;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 457;
            this.match(CircomParser.LB);
            this.state = 458;
            this.expressionList();
            this.state = 459;
            this.match(CircomParser.RB);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 461;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 462;
            this.identifier();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 463;
            this.args();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 464;
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
    this.enterRule(localctx, 38, CircomParser.RULE_logStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 467;
        this.match(CircomParser.LOG);
        this.state = 468;
        this.match(CircomParser.LP);
        this.state = 483;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 335544576) !== 0) ||
          (((_la - 42) & ~0x1f) === 0 && ((1 << (_la - 42)) & 184549635) !== 0)
        ) {
          {
            this.state = 471;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 69:
                {
                  this.state = 469;
                  this.match(CircomParser.STRING);
                }
                break;
              case 8:
              case 26:
              case 28:
              case 42:
              case 43:
              case 50:
              case 66:
              case 67:
                {
                  this.state = 470;
                  this.expression(0);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 480;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 473;
                  this.match(CircomParser.COMMA);
                  this.state = 476;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case 69:
                      {
                        this.state = 474;
                        this.match(CircomParser.STRING);
                      }
                      break;
                    case 8:
                    case 26:
                    case 28:
                    case 42:
                    case 43:
                    case 50:
                    case 66:
                    case 67:
                      {
                        this.state = 475;
                        this.expression(0);
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                }
              }
              this.state = 482;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 485;
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
    this.enterRule(localctx, 40, CircomParser.RULE_componentDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 487;
        this.match(CircomParser.COMPONENT);
        this.state = 488;
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
    this.enterRule(localctx, 42, CircomParser.RULE_componentDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 490;
        this.componentDefinition();
        this.state = 494;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 28) {
          {
            {
              this.state = 491;
              this.arrayDimension();
            }
          }
          this.state = 496;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 499;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 64) {
          {
            this.state = 497;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 498;
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
    this.enterRule(localctx, 44, CircomParser.RULE_signalDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 501;
        this.match(CircomParser.SIGNAL);
        this.state = 503;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 2) {
          {
            this.state = 502;
            this.match(CircomParser.SIGNAL_TYPE);
          }
        }

        this.state = 506;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 30) {
          {
            this.state = 505;
            this.tagList();
          }
        }

        this.state = 508;
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
    this.enterRule(localctx, 46, CircomParser.RULE_tagList);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 510;
        this.match(CircomParser.LC);
        this.state = 511;
        this.args();
        this.state = 512;
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
    this.enterRule(localctx, 48, CircomParser.RULE_signalDeclaration);
    let _la: number;
    try {
      this.state = 527;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 514;
            this.signalDefinition();
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 39) {
              {
                this.state = 515;
                this.match(CircomParser.LEFT_CONSTRAINT);
                this.state = 516;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 519;
            this.signalDefinition();
            this.state = 524;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 520;
                  this.match(CircomParser.COMMA);
                  this.state = 521;
                  this.identifier();
                }
              }
              this.state = 526;
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
    this.enterRule(localctx, 50, CircomParser.RULE_varDefinition);
    let _la: number;
    try {
      this.state = 543;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 529;
            this.match(CircomParser.VAR);
            this.state = 530;
            this.identifier();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 531;
            this.match(CircomParser.VAR);
            this.state = 532;
            this.match(CircomParser.LP);
            this.state = 533;
            this.identifier();
            this.state = 538;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 534;
                  this.match(CircomParser.COMMA);
                  this.state = 535;
                  this.identifier();
                }
              }
              this.state = 540;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 541;
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
    this.enterRule(localctx, 52, CircomParser.RULE_varDeclaration);
    let _la: number;
    try {
      this.state = 558;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 545;
            this.varDefinition();
            this.state = 548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 64) {
              {
                this.state = 546;
                this.match(CircomParser.ASSIGNMENT);
                this.state = 547;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 550;
            this.varDefinition();
            this.state = 555;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 551;
                  this.match(CircomParser.COMMA);
                  this.state = 552;
                  this.identifier();
                }
              }
              this.state = 557;
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
    this.enterRule(localctx, 54, CircomParser.RULE_rhsValue);
    try {
      this.state = 566;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 560;
            this.match(CircomParser.LP);
            this.state = 561;
            this.expressionList();
            this.state = 562;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 564;
            this.expression(0);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 565;
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
    this.enterRule(localctx, 56, CircomParser.RULE_componentCall);
    let _la: number;
    try {
      this.state = 604;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 568;
            this.match(CircomParser.LP);
            this.state = 570;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 && ((1 << _la) & 335544576) !== 0) ||
              (((_la - 42) & ~0x1f) === 0 &&
                ((1 << (_la - 42)) & 50331907) !== 0)
            ) {
              {
                this.state = 569;
                this.expressionList();
              }
            }

            this.state = 572;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 573;
            this.match(CircomParser.LP);
            this.state = 574;
            this.match(CircomParser.ID);
            this.state = 575;
            this.match(CircomParser.LEFT_CONSTRAINT);
            this.state = 576;
            this.expression(0);
            this.state = 583;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 577;
                  this.match(CircomParser.COMMA);
                  this.state = 578;
                  this.match(CircomParser.ID);
                  this.state = 579;
                  this.match(CircomParser.LEFT_CONSTRAINT);
                  this.state = 580;
                  this.expression(0);
                }
              }
              this.state = 585;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 586;
            this.match(CircomParser.RP);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 588;
            this.match(CircomParser.LP);
            this.state = 589;
            this.expression(0);
            this.state = 590;
            this.match(CircomParser.RIGHT_CONSTRAINT);
            this.state = 591;
            this.match(CircomParser.ID);
            this.state = 599;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 34) {
              {
                {
                  this.state = 592;
                  this.match(CircomParser.COMMA);
                  this.state = 593;
                  this.expression(0);
                  this.state = 594;
                  this.match(CircomParser.RIGHT_CONSTRAINT);
                  this.state = 595;
                  this.match(CircomParser.ID);
                }
              }
              this.state = 601;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 602;
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
    this.enterRule(localctx, 58, CircomParser.RULE_blockInstantiation);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 607;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 8) {
          {
            this.state = 606;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 609;
        this.match(CircomParser.ID);
        this.state = 610;
        this.match(CircomParser.LP);
        this.state = 612;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 335544576) !== 0) ||
          (((_la - 42) & ~0x1f) === 0 && ((1 << (_la - 42)) & 50331907) !== 0)
        ) {
          {
            this.state = 611;
            this.expressionList();
          }
        }

        this.state = 614;
        this.match(CircomParser.RP);
        this.state = 616;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 60, this._ctx)) {
          case 1:
            {
              this.state = 615;
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
    this.enterRule(localctx, 60, CircomParser.RULE_expressionList);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 618;
        this.expression(0);
        this.state = 623;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 34) {
          {
            {
              this.state = 619;
              this.match(CircomParser.COMMA);
              this.state = 620;
              this.expression(0);
            }
          }
          this.state = 625;
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
    this.enterRule(localctx, 62, CircomParser.RULE_identifier);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 626;
        this.match(CircomParser.ID);
        this.state = 630;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 627;
                this.arrayDimension();
              }
            }
          }
          this.state = 632;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
        }
        this.state = 635;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 63, this._ctx)) {
          case 1:
            {
              this.state = 633;
              this.match(CircomParser.DOT);
              this.state = 634;
              this.match(CircomParser.ID);
            }
            break;
        }
        this.state = 640;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 637;
                this.arrayDimension();
              }
            }
          }
          this.state = 642;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
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
    this.enterRule(localctx, 64, CircomParser.RULE_arrayDimension);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 643;
        this.match(CircomParser.LB);
        this.state = 644;
        this.expression(0);
        this.state = 645;
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
    this.enterRule(localctx, 66, CircomParser.RULE_args);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 647;
        this.match(CircomParser.ID);
        this.state = 652;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 648;
                this.match(CircomParser.COMMA);
                this.state = 649;
                this.match(CircomParser.ID);
              }
            }
          }
          this.state = 654;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
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
    this.enterRule(localctx, 68, CircomParser.RULE_argsWithUnderscore);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 655;
        _la = this._input.LA(1);
        if (!(_la === 35 || _la === 66)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 660;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 34) {
          {
            {
              this.state = 656;
              this.match(CircomParser.COMMA);
              this.state = 657;
              _la = this._input.LA(1);
              if (!(_la === 35 || _la === 66)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          this.state = 662;
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
    this.enterRule(localctx, 70, CircomParser.RULE_numSequence);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 663;
        this.match(CircomParser.NUMBER);
        this.state = 668;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 664;
                this.match(CircomParser.COMMA);
                this.state = 665;
                this.match(CircomParser.NUMBER);
              }
            }
          }
          this.state = 670;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
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
      case 17:
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
    4, 1, 72, 672, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 1, 0, 5, 0, 74, 8, 0, 10, 0, 12, 0,
    77, 9, 0, 1, 0, 5, 0, 80, 8, 0, 10, 0, 12, 0, 83, 9, 0, 1, 0, 5, 0, 86, 8,
    0, 10, 0, 12, 0, 89, 9, 0, 1, 0, 3, 0, 92, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 103, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1,
    3, 3, 3, 111, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 117, 8, 4, 1, 4, 1, 4, 1,
    4, 1, 5, 1, 5, 5, 5, 124, 8, 5, 10, 5, 12, 5, 127, 9, 5, 1, 5, 1, 5, 1, 6,
    1, 6, 1, 6, 5, 6, 134, 8, 6, 10, 6, 12, 6, 137, 9, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 3, 6, 158, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    3, 6, 167, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 190,
    8, 6, 1, 7, 1, 7, 3, 7, 194, 8, 7, 1, 7, 3, 7, 197, 8, 7, 1, 7, 1, 7, 1, 7,
    3, 7, 202, 8, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 5, 8, 209, 8, 8, 10, 8, 12,
    8, 212, 9, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 3, 9, 219, 8, 9, 1, 9, 1, 9, 1,
    9, 1, 9, 3, 9, 225, 8, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 5, 11, 240, 8, 11, 10, 11, 12, 11,
    243, 9, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 5, 11, 278, 8, 11, 10, 11, 12, 11, 281, 9, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 289, 8, 11, 10, 11, 12, 11, 292, 9, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 5, 11, 308, 8, 11, 10, 11, 12, 11, 311, 9, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 320, 8, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 326, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 342, 8, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 3, 11, 358, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 3, 11, 377, 8, 11, 1, 12, 1, 12, 1, 12, 3, 12, 382, 8, 12, 1, 13, 1,
    13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 3, 14, 391, 8, 14, 1, 14, 1, 14, 1,
    14, 3, 14, 396, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 402, 8, 15, 1, 15,
    1, 15, 3, 15, 406, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 3, 17, 417, 8, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    3, 17, 447, 8, 17, 5, 17, 449, 8, 17, 10, 17, 12, 17, 452, 9, 17, 1, 18, 1,
    18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3,
    18, 466, 8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 472, 8, 19, 1, 19, 1, 19,
    1, 19, 3, 19, 477, 8, 19, 5, 19, 479, 8, 19, 10, 19, 12, 19, 482, 9, 19, 3,
    19, 484, 8, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 5, 21, 493,
    8, 21, 10, 21, 12, 21, 496, 9, 21, 1, 21, 1, 21, 3, 21, 500, 8, 21, 1, 22,
    1, 22, 3, 22, 504, 8, 22, 1, 22, 3, 22, 507, 8, 22, 1, 22, 1, 22, 1, 23, 1,
    23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 3, 24, 518, 8, 24, 1, 24, 1, 24, 1,
    24, 5, 24, 523, 8, 24, 10, 24, 12, 24, 526, 9, 24, 3, 24, 528, 8, 24, 1, 25,
    1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 5, 25, 537, 8, 25, 10, 25, 12, 25,
    540, 9, 25, 1, 25, 1, 25, 3, 25, 544, 8, 25, 1, 26, 1, 26, 1, 26, 3, 26,
    549, 8, 26, 1, 26, 1, 26, 1, 26, 5, 26, 554, 8, 26, 10, 26, 12, 26, 557, 9,
    26, 3, 26, 559, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 567,
    8, 27, 1, 28, 1, 28, 3, 28, 571, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28,
    1, 28, 1, 28, 1, 28, 1, 28, 5, 28, 582, 8, 28, 10, 28, 12, 28, 585, 9, 28,
    1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28,
    5, 28, 598, 8, 28, 10, 28, 12, 28, 601, 9, 28, 1, 28, 1, 28, 3, 28, 605, 8,
    28, 1, 29, 3, 29, 608, 8, 29, 1, 29, 1, 29, 1, 29, 3, 29, 613, 8, 29, 1, 29,
    1, 29, 3, 29, 617, 8, 29, 1, 30, 1, 30, 1, 30, 5, 30, 622, 8, 30, 10, 30,
    12, 30, 625, 9, 30, 1, 31, 1, 31, 5, 31, 629, 8, 31, 10, 31, 12, 31, 632, 9,
    31, 1, 31, 1, 31, 3, 31, 636, 8, 31, 1, 31, 5, 31, 639, 8, 31, 10, 31, 12,
    31, 642, 9, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 5, 33, 651,
    8, 33, 10, 33, 12, 33, 654, 9, 33, 1, 34, 1, 34, 1, 34, 5, 34, 659, 8, 34,
    10, 34, 12, 34, 662, 9, 34, 1, 35, 1, 35, 1, 35, 5, 35, 667, 8, 35, 10, 35,
    12, 35, 670, 9, 35, 1, 35, 0, 1, 34, 36, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
    20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56,
    58, 60, 62, 64, 66, 68, 70, 0, 10, 1, 0, 64, 65, 2, 0, 39, 39, 65, 65, 2, 0,
    39, 39, 64, 64, 2, 0, 42, 43, 50, 50, 1, 0, 44, 48, 1, 0, 49, 50, 1, 0, 51,
    52, 1, 0, 53, 55, 1, 0, 56, 63, 2, 0, 35, 35, 66, 66, 744, 0, 75, 1, 0, 0,
    0, 2, 102, 1, 0, 0, 0, 4, 104, 1, 0, 0, 0, 6, 110, 1, 0, 0, 0, 8, 112, 1, 0,
    0, 0, 10, 121, 1, 0, 0, 0, 12, 189, 1, 0, 0, 0, 14, 191, 1, 0, 0, 0, 16,
    206, 1, 0, 0, 0, 18, 215, 1, 0, 0, 0, 20, 229, 1, 0, 0, 0, 22, 376, 1, 0, 0,
    0, 24, 378, 1, 0, 0, 0, 26, 383, 1, 0, 0, 0, 28, 390, 1, 0, 0, 0, 30, 405,
    1, 0, 0, 0, 32, 407, 1, 0, 0, 0, 34, 416, 1, 0, 0, 0, 36, 465, 1, 0, 0, 0,
    38, 467, 1, 0, 0, 0, 40, 487, 1, 0, 0, 0, 42, 490, 1, 0, 0, 0, 44, 501, 1,
    0, 0, 0, 46, 510, 1, 0, 0, 0, 48, 527, 1, 0, 0, 0, 50, 543, 1, 0, 0, 0, 52,
    558, 1, 0, 0, 0, 54, 566, 1, 0, 0, 0, 56, 604, 1, 0, 0, 0, 58, 607, 1, 0, 0,
    0, 60, 618, 1, 0, 0, 0, 62, 626, 1, 0, 0, 0, 64, 643, 1, 0, 0, 0, 66, 647,
    1, 0, 0, 0, 68, 655, 1, 0, 0, 0, 70, 663, 1, 0, 0, 0, 72, 74, 3, 2, 1, 0,
    73, 72, 1, 0, 0, 0, 74, 77, 1, 0, 0, 0, 75, 73, 1, 0, 0, 0, 75, 76, 1, 0, 0,
    0, 76, 81, 1, 0, 0, 0, 77, 75, 1, 0, 0, 0, 78, 80, 3, 4, 2, 0, 79, 78, 1, 0,
    0, 0, 80, 83, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 87, 1,
    0, 0, 0, 83, 81, 1, 0, 0, 0, 84, 86, 3, 6, 3, 0, 85, 84, 1, 0, 0, 0, 86, 89,
    1, 0, 0, 0, 87, 85, 1, 0, 0, 0, 87, 88, 1, 0, 0, 0, 88, 91, 1, 0, 0, 0, 89,
    87, 1, 0, 0, 0, 90, 92, 3, 18, 9, 0, 91, 90, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0,
    92, 93, 1, 0, 0, 0, 93, 94, 5, 0, 0, 1, 94, 1, 1, 0, 0, 0, 95, 96, 5, 3, 0,
    0, 96, 97, 5, 4, 0, 0, 97, 98, 5, 1, 0, 0, 98, 103, 5, 32, 0, 0, 99, 100, 5,
    3, 0, 0, 100, 101, 5, 5, 0, 0, 101, 103, 5, 32, 0, 0, 102, 95, 1, 0, 0, 0,
    102, 99, 1, 0, 0, 0, 103, 3, 1, 0, 0, 0, 104, 105, 5, 6, 0, 0, 105, 106, 5,
    69, 0, 0, 106, 107, 5, 32, 0, 0, 107, 5, 1, 0, 0, 0, 108, 111, 3, 8, 4, 0,
    109, 111, 3, 14, 7, 0, 110, 108, 1, 0, 0, 0, 110, 109, 1, 0, 0, 0, 111, 7,
    1, 0, 0, 0, 112, 113, 5, 10, 0, 0, 113, 114, 5, 66, 0, 0, 114, 116, 5, 26,
    0, 0, 115, 117, 3, 66, 33, 0, 116, 115, 1, 0, 0, 0, 116, 117, 1, 0, 0, 0,
    117, 118, 1, 0, 0, 0, 118, 119, 5, 27, 0, 0, 119, 120, 3, 10, 5, 0, 120, 9,
    1, 0, 0, 0, 121, 125, 5, 30, 0, 0, 122, 124, 3, 12, 6, 0, 123, 122, 1, 0, 0,
    0, 124, 127, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 125, 126, 1, 0, 0, 0, 126,
    128, 1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 128, 129, 5, 31, 0, 0, 129, 11, 1, 0,
    0, 0, 130, 190, 3, 10, 5, 0, 131, 135, 5, 66, 0, 0, 132, 134, 3, 64, 32, 0,
    133, 132, 1, 0, 0, 0, 134, 137, 1, 0, 0, 0, 135, 133, 1, 0, 0, 0, 135, 136,
    1, 0, 0, 0, 136, 138, 1, 0, 0, 0, 137, 135, 1, 0, 0, 0, 138, 139, 5, 41, 0,
    0, 139, 190, 5, 32, 0, 0, 140, 141, 3, 52, 26, 0, 141, 142, 5, 32, 0, 0,
    142, 190, 1, 0, 0, 0, 143, 144, 3, 62, 31, 0, 144, 145, 7, 0, 0, 0, 145,
    146, 3, 34, 17, 0, 146, 147, 5, 32, 0, 0, 147, 190, 1, 0, 0, 0, 148, 149, 5,
    26, 0, 0, 149, 150, 3, 68, 34, 0, 150, 151, 5, 27, 0, 0, 151, 157, 5, 64, 0,
    0, 152, 153, 5, 26, 0, 0, 153, 154, 3, 60, 30, 0, 154, 155, 5, 27, 0, 0,
    155, 158, 1, 0, 0, 0, 156, 158, 3, 34, 17, 0, 157, 152, 1, 0, 0, 0, 157,
    156, 1, 0, 0, 0, 158, 159, 1, 0, 0, 0, 159, 160, 5, 32, 0, 0, 160, 190, 1,
    0, 0, 0, 161, 162, 5, 18, 0, 0, 162, 163, 3, 32, 16, 0, 163, 166, 3, 12, 6,
    0, 164, 165, 5, 19, 0, 0, 165, 167, 3, 12, 6, 0, 166, 164, 1, 0, 0, 0, 166,
    167, 1, 0, 0, 0, 167, 190, 1, 0, 0, 0, 168, 169, 5, 21, 0, 0, 169, 170, 3,
    32, 16, 0, 170, 171, 3, 12, 6, 0, 171, 190, 1, 0, 0, 0, 172, 173, 5, 20, 0,
    0, 173, 174, 5, 26, 0, 0, 174, 175, 3, 26, 13, 0, 175, 176, 5, 27, 0, 0,
    176, 177, 3, 12, 6, 0, 177, 190, 1, 0, 0, 0, 178, 179, 5, 25, 0, 0, 179,
    180, 3, 34, 17, 0, 180, 181, 5, 32, 0, 0, 181, 190, 1, 0, 0, 0, 182, 183, 5,
    24, 0, 0, 183, 184, 3, 32, 16, 0, 184, 185, 5, 32, 0, 0, 185, 190, 1, 0, 0,
    0, 186, 187, 3, 38, 19, 0, 187, 188, 5, 32, 0, 0, 188, 190, 1, 0, 0, 0, 189,
    130, 1, 0, 0, 0, 189, 131, 1, 0, 0, 0, 189, 140, 1, 0, 0, 0, 189, 143, 1, 0,
    0, 0, 189, 148, 1, 0, 0, 0, 189, 161, 1, 0, 0, 0, 189, 168, 1, 0, 0, 0, 189,
    172, 1, 0, 0, 0, 189, 178, 1, 0, 0, 0, 189, 182, 1, 0, 0, 0, 189, 186, 1, 0,
    0, 0, 190, 13, 1, 0, 0, 0, 191, 193, 5, 9, 0, 0, 192, 194, 5, 7, 0, 0, 193,
    192, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 196, 1, 0, 0, 0, 195, 197, 5, 8,
    0, 0, 196, 195, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197, 198, 1, 0, 0, 0, 198,
    199, 5, 66, 0, 0, 199, 201, 5, 26, 0, 0, 200, 202, 3, 66, 33, 0, 201, 200,
    1, 0, 0, 0, 201, 202, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 204, 5, 27, 0,
    0, 204, 205, 3, 16, 8, 0, 205, 15, 1, 0, 0, 0, 206, 210, 5, 30, 0, 0, 207,
    209, 3, 22, 11, 0, 208, 207, 1, 0, 0, 0, 209, 212, 1, 0, 0, 0, 210, 208, 1,
    0, 0, 0, 210, 211, 1, 0, 0, 0, 211, 213, 1, 0, 0, 0, 212, 210, 1, 0, 0, 0,
    213, 214, 5, 31, 0, 0, 214, 17, 1, 0, 0, 0, 215, 216, 5, 13, 0, 0, 216, 218,
    5, 11, 0, 0, 217, 219, 3, 20, 10, 0, 218, 217, 1, 0, 0, 0, 218, 219, 1, 0,
    0, 0, 219, 220, 1, 0, 0, 0, 220, 221, 5, 64, 0, 0, 221, 222, 5, 66, 0, 0,
    222, 224, 5, 26, 0, 0, 223, 225, 3, 60, 30, 0, 224, 223, 1, 0, 0, 0, 224,
    225, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226, 227, 5, 27, 0, 0, 227, 228, 5,
    32, 0, 0, 228, 19, 1, 0, 0, 0, 229, 230, 5, 30, 0, 0, 230, 231, 5, 12, 0, 0,
    231, 232, 5, 28, 0, 0, 232, 233, 3, 66, 33, 0, 233, 234, 5, 29, 0, 0, 234,
    235, 5, 31, 0, 0, 235, 21, 1, 0, 0, 0, 236, 377, 3, 16, 8, 0, 237, 241, 5,
    66, 0, 0, 238, 240, 3, 64, 32, 0, 239, 238, 1, 0, 0, 0, 240, 243, 1, 0, 0,
    0, 241, 239, 1, 0, 0, 0, 241, 242, 1, 0, 0, 0, 242, 244, 1, 0, 0, 0, 243,
    241, 1, 0, 0, 0, 244, 245, 5, 41, 0, 0, 245, 377, 5, 32, 0, 0, 246, 247, 3,
    52, 26, 0, 247, 248, 5, 32, 0, 0, 248, 377, 1, 0, 0, 0, 249, 250, 3, 48, 24,
    0, 250, 251, 5, 32, 0, 0, 251, 377, 1, 0, 0, 0, 252, 253, 3, 42, 21, 0, 253,
    254, 5, 32, 0, 0, 254, 377, 1, 0, 0, 0, 255, 256, 3, 58, 29, 0, 256, 257, 5,
    32, 0, 0, 257, 377, 1, 0, 0, 0, 258, 259, 3, 62, 31, 0, 259, 260, 5, 64, 0,
    0, 260, 261, 3, 34, 17, 0, 261, 262, 5, 32, 0, 0, 262, 377, 1, 0, 0, 0, 263,
    264, 3, 34, 17, 0, 264, 265, 5, 38, 0, 0, 265, 266, 3, 34, 17, 0, 266, 267,
    5, 32, 0, 0, 267, 377, 1, 0, 0, 0, 268, 269, 3, 24, 12, 0, 269, 270, 7, 1,
    0, 0, 270, 271, 3, 34, 17, 0, 271, 272, 5, 32, 0, 0, 272, 377, 1, 0, 0, 0,
    273, 274, 5, 26, 0, 0, 274, 279, 3, 24, 12, 0, 275, 276, 5, 34, 0, 0, 276,
    278, 3, 24, 12, 0, 277, 275, 1, 0, 0, 0, 278, 281, 1, 0, 0, 0, 279, 277, 1,
    0, 0, 0, 279, 280, 1, 0, 0, 0, 280, 282, 1, 0, 0, 0, 281, 279, 1, 0, 0, 0,
    282, 283, 5, 27, 0, 0, 283, 284, 5, 39, 0, 0, 284, 285, 5, 26, 0, 0, 285,
    290, 3, 34, 17, 0, 286, 287, 5, 34, 0, 0, 287, 289, 3, 34, 17, 0, 288, 286,
    1, 0, 0, 0, 289, 292, 1, 0, 0, 0, 290, 288, 1, 0, 0, 0, 290, 291, 1, 0, 0,
    0, 291, 293, 1, 0, 0, 0, 292, 290, 1, 0, 0, 0, 293, 294, 5, 27, 0, 0, 294,
    295, 5, 32, 0, 0, 295, 377, 1, 0, 0, 0, 296, 297, 3, 34, 17, 0, 297, 298, 5,
    40, 0, 0, 298, 299, 3, 24, 12, 0, 299, 300, 5, 32, 0, 0, 300, 377, 1, 0, 0,
    0, 301, 302, 3, 34, 17, 0, 302, 303, 5, 40, 0, 0, 303, 304, 5, 26, 0, 0,
    304, 309, 3, 24, 12, 0, 305, 306, 5, 34, 0, 0, 306, 308, 3, 24, 12, 0, 307,
    305, 1, 0, 0, 0, 308, 311, 1, 0, 0, 0, 309, 307, 1, 0, 0, 0, 309, 310, 1, 0,
    0, 0, 310, 312, 1, 0, 0, 0, 311, 309, 1, 0, 0, 0, 312, 313, 5, 27, 0, 0,
    313, 314, 5, 32, 0, 0, 314, 377, 1, 0, 0, 0, 315, 316, 5, 35, 0, 0, 316,
    319, 7, 2, 0, 0, 317, 320, 3, 34, 17, 0, 318, 320, 3, 58, 29, 0, 319, 317,
    1, 0, 0, 0, 319, 318, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 322, 5, 32, 0,
    0, 322, 377, 1, 0, 0, 0, 323, 326, 3, 34, 17, 0, 324, 326, 3, 58, 29, 0,
    325, 323, 1, 0, 0, 0, 325, 324, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 328,
    5, 40, 0, 0, 328, 329, 5, 35, 0, 0, 329, 330, 5, 32, 0, 0, 330, 377, 1, 0,
    0, 0, 331, 332, 5, 26, 0, 0, 332, 333, 3, 68, 34, 0, 333, 334, 5, 27, 0, 0,
    334, 341, 7, 2, 0, 0, 335, 336, 5, 26, 0, 0, 336, 337, 3, 60, 30, 0, 337,
    338, 5, 27, 0, 0, 338, 342, 1, 0, 0, 0, 339, 342, 3, 58, 29, 0, 340, 342, 3,
    34, 17, 0, 341, 335, 1, 0, 0, 0, 341, 339, 1, 0, 0, 0, 341, 340, 1, 0, 0, 0,
    342, 343, 1, 0, 0, 0, 343, 344, 5, 32, 0, 0, 344, 377, 1, 0, 0, 0, 345, 346,
    3, 58, 29, 0, 346, 347, 5, 40, 0, 0, 347, 348, 5, 26, 0, 0, 348, 349, 3, 68,
    34, 0, 349, 350, 5, 27, 0, 0, 350, 351, 5, 32, 0, 0, 351, 377, 1, 0, 0, 0,
    352, 353, 5, 18, 0, 0, 353, 354, 3, 32, 16, 0, 354, 357, 3, 22, 11, 0, 355,
    356, 5, 19, 0, 0, 356, 358, 3, 22, 11, 0, 357, 355, 1, 0, 0, 0, 357, 358, 1,
    0, 0, 0, 358, 377, 1, 0, 0, 0, 359, 360, 5, 21, 0, 0, 360, 361, 3, 32, 16,
    0, 361, 362, 3, 22, 11, 0, 362, 377, 1, 0, 0, 0, 363, 364, 5, 20, 0, 0, 364,
    365, 5, 26, 0, 0, 365, 366, 3, 26, 13, 0, 366, 367, 5, 27, 0, 0, 367, 368,
    3, 22, 11, 0, 368, 377, 1, 0, 0, 0, 369, 370, 5, 24, 0, 0, 370, 371, 3, 32,
    16, 0, 371, 372, 5, 32, 0, 0, 372, 377, 1, 0, 0, 0, 373, 374, 3, 38, 19, 0,
    374, 375, 5, 32, 0, 0, 375, 377, 1, 0, 0, 0, 376, 236, 1, 0, 0, 0, 376, 237,
    1, 0, 0, 0, 376, 246, 1, 0, 0, 0, 376, 249, 1, 0, 0, 0, 376, 252, 1, 0, 0,
    0, 376, 255, 1, 0, 0, 0, 376, 258, 1, 0, 0, 0, 376, 263, 1, 0, 0, 0, 376,
    268, 1, 0, 0, 0, 376, 273, 1, 0, 0, 0, 376, 296, 1, 0, 0, 0, 376, 301, 1, 0,
    0, 0, 376, 315, 1, 0, 0, 0, 376, 325, 1, 0, 0, 0, 376, 331, 1, 0, 0, 0, 376,
    345, 1, 0, 0, 0, 376, 352, 1, 0, 0, 0, 376, 359, 1, 0, 0, 0, 376, 363, 1, 0,
    0, 0, 376, 369, 1, 0, 0, 0, 376, 373, 1, 0, 0, 0, 377, 23, 1, 0, 0, 0, 378,
    381, 3, 62, 31, 0, 379, 380, 5, 33, 0, 0, 380, 382, 3, 62, 31, 0, 381, 379,
    1, 0, 0, 0, 381, 382, 1, 0, 0, 0, 382, 25, 1, 0, 0, 0, 383, 384, 3, 28, 14,
    0, 384, 385, 5, 32, 0, 0, 385, 386, 3, 34, 17, 0, 386, 387, 5, 32, 0, 0,
    387, 388, 3, 30, 15, 0, 388, 27, 1, 0, 0, 0, 389, 391, 5, 14, 0, 0, 390,
    389, 1, 0, 0, 0, 390, 391, 1, 0, 0, 0, 391, 392, 1, 0, 0, 0, 392, 395, 3,
    62, 31, 0, 393, 394, 5, 64, 0, 0, 394, 396, 3, 54, 27, 0, 395, 393, 1, 0, 0,
    0, 395, 396, 1, 0, 0, 0, 396, 29, 1, 0, 0, 0, 397, 401, 5, 66, 0, 0, 398,
    402, 5, 41, 0, 0, 399, 400, 7, 0, 0, 0, 400, 402, 3, 34, 17, 0, 401, 398, 1,
    0, 0, 0, 401, 399, 1, 0, 0, 0, 402, 406, 1, 0, 0, 0, 403, 404, 5, 41, 0, 0,
    404, 406, 5, 66, 0, 0, 405, 397, 1, 0, 0, 0, 405, 403, 1, 0, 0, 0, 406, 31,
    1, 0, 0, 0, 407, 408, 5, 26, 0, 0, 408, 409, 3, 34, 17, 0, 409, 410, 5, 27,
    0, 0, 410, 33, 1, 0, 0, 0, 411, 412, 6, 17, -1, 0, 412, 417, 3, 36, 18, 0,
    413, 417, 3, 58, 29, 0, 414, 415, 7, 3, 0, 0, 415, 417, 3, 34, 17, 7, 416,
    411, 1, 0, 0, 0, 416, 413, 1, 0, 0, 0, 416, 414, 1, 0, 0, 0, 417, 450, 1, 0,
    0, 0, 418, 419, 10, 6, 0, 0, 419, 420, 7, 4, 0, 0, 420, 449, 3, 34, 17, 7,
    421, 422, 10, 5, 0, 0, 422, 423, 7, 5, 0, 0, 423, 449, 3, 34, 17, 6, 424,
    425, 10, 4, 0, 0, 425, 426, 7, 6, 0, 0, 426, 449, 3, 34, 17, 5, 427, 428,
    10, 3, 0, 0, 428, 429, 7, 7, 0, 0, 429, 449, 3, 34, 17, 4, 430, 431, 10, 2,
    0, 0, 431, 432, 7, 8, 0, 0, 432, 449, 3, 34, 17, 3, 433, 434, 10, 1, 0, 0,
    434, 435, 5, 36, 0, 0, 435, 436, 3, 34, 17, 0, 436, 437, 5, 37, 0, 0, 437,
    438, 3, 34, 17, 2, 438, 449, 1, 0, 0, 0, 439, 440, 10, 8, 0, 0, 440, 441, 5,
    33, 0, 0, 441, 446, 5, 66, 0, 0, 442, 443, 5, 28, 0, 0, 443, 444, 3, 34, 17,
    0, 444, 445, 5, 29, 0, 0, 445, 447, 1, 0, 0, 0, 446, 442, 1, 0, 0, 0, 446,
    447, 1, 0, 0, 0, 447, 449, 1, 0, 0, 0, 448, 418, 1, 0, 0, 0, 448, 421, 1, 0,
    0, 0, 448, 424, 1, 0, 0, 0, 448, 427, 1, 0, 0, 0, 448, 430, 1, 0, 0, 0, 448,
    433, 1, 0, 0, 0, 448, 439, 1, 0, 0, 0, 449, 452, 1, 0, 0, 0, 450, 448, 1, 0,
    0, 0, 450, 451, 1, 0, 0, 0, 451, 35, 1, 0, 0, 0, 452, 450, 1, 0, 0, 0, 453,
    454, 5, 26, 0, 0, 454, 455, 3, 34, 17, 0, 455, 456, 5, 27, 0, 0, 456, 466,
    1, 0, 0, 0, 457, 458, 5, 28, 0, 0, 458, 459, 3, 60, 30, 0, 459, 460, 5, 29,
    0, 0, 460, 466, 1, 0, 0, 0, 461, 466, 5, 67, 0, 0, 462, 466, 3, 62, 31, 0,
    463, 466, 3, 66, 33, 0, 464, 466, 3, 70, 35, 0, 465, 453, 1, 0, 0, 0, 465,
    457, 1, 0, 0, 0, 465, 461, 1, 0, 0, 0, 465, 462, 1, 0, 0, 0, 465, 463, 1, 0,
    0, 0, 465, 464, 1, 0, 0, 0, 466, 37, 1, 0, 0, 0, 467, 468, 5, 23, 0, 0, 468,
    483, 5, 26, 0, 0, 469, 472, 5, 69, 0, 0, 470, 472, 3, 34, 17, 0, 471, 469,
    1, 0, 0, 0, 471, 470, 1, 0, 0, 0, 472, 480, 1, 0, 0, 0, 473, 476, 5, 34, 0,
    0, 474, 477, 5, 69, 0, 0, 475, 477, 3, 34, 17, 0, 476, 474, 1, 0, 0, 0, 476,
    475, 1, 0, 0, 0, 477, 479, 1, 0, 0, 0, 478, 473, 1, 0, 0, 0, 479, 482, 1, 0,
    0, 0, 480, 478, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481, 484, 1, 0, 0, 0, 482,
    480, 1, 0, 0, 0, 483, 471, 1, 0, 0, 0, 483, 484, 1, 0, 0, 0, 484, 485, 1, 0,
    0, 0, 485, 486, 5, 27, 0, 0, 486, 39, 1, 0, 0, 0, 487, 488, 5, 13, 0, 0,
    488, 489, 5, 66, 0, 0, 489, 41, 1, 0, 0, 0, 490, 494, 3, 40, 20, 0, 491,
    493, 3, 64, 32, 0, 492, 491, 1, 0, 0, 0, 493, 496, 1, 0, 0, 0, 494, 492, 1,
    0, 0, 0, 494, 495, 1, 0, 0, 0, 495, 499, 1, 0, 0, 0, 496, 494, 1, 0, 0, 0,
    497, 498, 5, 64, 0, 0, 498, 500, 3, 58, 29, 0, 499, 497, 1, 0, 0, 0, 499,
    500, 1, 0, 0, 0, 500, 43, 1, 0, 0, 0, 501, 503, 5, 15, 0, 0, 502, 504, 5, 2,
    0, 0, 503, 502, 1, 0, 0, 0, 503, 504, 1, 0, 0, 0, 504, 506, 1, 0, 0, 0, 505,
    507, 3, 46, 23, 0, 506, 505, 1, 0, 0, 0, 506, 507, 1, 0, 0, 0, 507, 508, 1,
    0, 0, 0, 508, 509, 3, 62, 31, 0, 509, 45, 1, 0, 0, 0, 510, 511, 5, 30, 0, 0,
    511, 512, 3, 66, 33, 0, 512, 513, 5, 31, 0, 0, 513, 47, 1, 0, 0, 0, 514,
    517, 3, 44, 22, 0, 515, 516, 5, 39, 0, 0, 516, 518, 3, 54, 27, 0, 517, 515,
    1, 0, 0, 0, 517, 518, 1, 0, 0, 0, 518, 528, 1, 0, 0, 0, 519, 524, 3, 44, 22,
    0, 520, 521, 5, 34, 0, 0, 521, 523, 3, 62, 31, 0, 522, 520, 1, 0, 0, 0, 523,
    526, 1, 0, 0, 0, 524, 522, 1, 0, 0, 0, 524, 525, 1, 0, 0, 0, 525, 528, 1, 0,
    0, 0, 526, 524, 1, 0, 0, 0, 527, 514, 1, 0, 0, 0, 527, 519, 1, 0, 0, 0, 528,
    49, 1, 0, 0, 0, 529, 530, 5, 14, 0, 0, 530, 544, 3, 62, 31, 0, 531, 532, 5,
    14, 0, 0, 532, 533, 5, 26, 0, 0, 533, 538, 3, 62, 31, 0, 534, 535, 5, 34, 0,
    0, 535, 537, 3, 62, 31, 0, 536, 534, 1, 0, 0, 0, 537, 540, 1, 0, 0, 0, 538,
    536, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 541, 1, 0, 0, 0, 540, 538, 1, 0,
    0, 0, 541, 542, 5, 27, 0, 0, 542, 544, 1, 0, 0, 0, 543, 529, 1, 0, 0, 0,
    543, 531, 1, 0, 0, 0, 544, 51, 1, 0, 0, 0, 545, 548, 3, 50, 25, 0, 546, 547,
    5, 64, 0, 0, 547, 549, 3, 54, 27, 0, 548, 546, 1, 0, 0, 0, 548, 549, 1, 0,
    0, 0, 549, 559, 1, 0, 0, 0, 550, 555, 3, 50, 25, 0, 551, 552, 5, 34, 0, 0,
    552, 554, 3, 62, 31, 0, 553, 551, 1, 0, 0, 0, 554, 557, 1, 0, 0, 0, 555,
    553, 1, 0, 0, 0, 555, 556, 1, 0, 0, 0, 556, 559, 1, 0, 0, 0, 557, 555, 1, 0,
    0, 0, 558, 545, 1, 0, 0, 0, 558, 550, 1, 0, 0, 0, 559, 53, 1, 0, 0, 0, 560,
    561, 5, 26, 0, 0, 561, 562, 3, 60, 30, 0, 562, 563, 5, 27, 0, 0, 563, 567,
    1, 0, 0, 0, 564, 567, 3, 34, 17, 0, 565, 567, 3, 58, 29, 0, 566, 560, 1, 0,
    0, 0, 566, 564, 1, 0, 0, 0, 566, 565, 1, 0, 0, 0, 567, 55, 1, 0, 0, 0, 568,
    570, 5, 26, 0, 0, 569, 571, 3, 60, 30, 0, 570, 569, 1, 0, 0, 0, 570, 571, 1,
    0, 0, 0, 571, 572, 1, 0, 0, 0, 572, 605, 5, 27, 0, 0, 573, 574, 5, 26, 0, 0,
    574, 575, 5, 66, 0, 0, 575, 576, 5, 39, 0, 0, 576, 583, 3, 34, 17, 0, 577,
    578, 5, 34, 0, 0, 578, 579, 5, 66, 0, 0, 579, 580, 5, 39, 0, 0, 580, 582, 3,
    34, 17, 0, 581, 577, 1, 0, 0, 0, 582, 585, 1, 0, 0, 0, 583, 581, 1, 0, 0, 0,
    583, 584, 1, 0, 0, 0, 584, 586, 1, 0, 0, 0, 585, 583, 1, 0, 0, 0, 586, 587,
    5, 27, 0, 0, 587, 605, 1, 0, 0, 0, 588, 589, 5, 26, 0, 0, 589, 590, 3, 34,
    17, 0, 590, 591, 5, 40, 0, 0, 591, 599, 5, 66, 0, 0, 592, 593, 5, 34, 0, 0,
    593, 594, 3, 34, 17, 0, 594, 595, 5, 40, 0, 0, 595, 596, 5, 66, 0, 0, 596,
    598, 1, 0, 0, 0, 597, 592, 1, 0, 0, 0, 598, 601, 1, 0, 0, 0, 599, 597, 1, 0,
    0, 0, 599, 600, 1, 0, 0, 0, 600, 602, 1, 0, 0, 0, 601, 599, 1, 0, 0, 0, 602,
    603, 5, 27, 0, 0, 603, 605, 1, 0, 0, 0, 604, 568, 1, 0, 0, 0, 604, 573, 1,
    0, 0, 0, 604, 588, 1, 0, 0, 0, 605, 57, 1, 0, 0, 0, 606, 608, 5, 8, 0, 0,
    607, 606, 1, 0, 0, 0, 607, 608, 1, 0, 0, 0, 608, 609, 1, 0, 0, 0, 609, 610,
    5, 66, 0, 0, 610, 612, 5, 26, 0, 0, 611, 613, 3, 60, 30, 0, 612, 611, 1, 0,
    0, 0, 612, 613, 1, 0, 0, 0, 613, 614, 1, 0, 0, 0, 614, 616, 5, 27, 0, 0,
    615, 617, 3, 56, 28, 0, 616, 615, 1, 0, 0, 0, 616, 617, 1, 0, 0, 0, 617, 59,
    1, 0, 0, 0, 618, 623, 3, 34, 17, 0, 619, 620, 5, 34, 0, 0, 620, 622, 3, 34,
    17, 0, 621, 619, 1, 0, 0, 0, 622, 625, 1, 0, 0, 0, 623, 621, 1, 0, 0, 0,
    623, 624, 1, 0, 0, 0, 624, 61, 1, 0, 0, 0, 625, 623, 1, 0, 0, 0, 626, 630,
    5, 66, 0, 0, 627, 629, 3, 64, 32, 0, 628, 627, 1, 0, 0, 0, 629, 632, 1, 0,
    0, 0, 630, 628, 1, 0, 0, 0, 630, 631, 1, 0, 0, 0, 631, 635, 1, 0, 0, 0, 632,
    630, 1, 0, 0, 0, 633, 634, 5, 33, 0, 0, 634, 636, 5, 66, 0, 0, 635, 633, 1,
    0, 0, 0, 635, 636, 1, 0, 0, 0, 636, 640, 1, 0, 0, 0, 637, 639, 3, 64, 32, 0,
    638, 637, 1, 0, 0, 0, 639, 642, 1, 0, 0, 0, 640, 638, 1, 0, 0, 0, 640, 641,
    1, 0, 0, 0, 641, 63, 1, 0, 0, 0, 642, 640, 1, 0, 0, 0, 643, 644, 5, 28, 0,
    0, 644, 645, 3, 34, 17, 0, 645, 646, 5, 29, 0, 0, 646, 65, 1, 0, 0, 0, 647,
    652, 5, 66, 0, 0, 648, 649, 5, 34, 0, 0, 649, 651, 5, 66, 0, 0, 650, 648, 1,
    0, 0, 0, 651, 654, 1, 0, 0, 0, 652, 650, 1, 0, 0, 0, 652, 653, 1, 0, 0, 0,
    653, 67, 1, 0, 0, 0, 654, 652, 1, 0, 0, 0, 655, 660, 7, 9, 0, 0, 656, 657,
    5, 34, 0, 0, 657, 659, 7, 9, 0, 0, 658, 656, 1, 0, 0, 0, 659, 662, 1, 0, 0,
    0, 660, 658, 1, 0, 0, 0, 660, 661, 1, 0, 0, 0, 661, 69, 1, 0, 0, 0, 662,
    660, 1, 0, 0, 0, 663, 668, 5, 67, 0, 0, 664, 665, 5, 34, 0, 0, 665, 667, 5,
    67, 0, 0, 666, 664, 1, 0, 0, 0, 667, 670, 1, 0, 0, 0, 668, 666, 1, 0, 0, 0,
    668, 669, 1, 0, 0, 0, 669, 71, 1, 0, 0, 0, 670, 668, 1, 0, 0, 0, 68, 75, 81,
    87, 91, 102, 110, 116, 125, 135, 157, 166, 189, 193, 196, 201, 210, 218,
    224, 241, 279, 290, 309, 319, 325, 341, 357, 376, 381, 390, 395, 401, 405,
    416, 446, 448, 450, 465, 471, 476, 480, 483, 494, 499, 503, 506, 517, 524,
    527, 538, 543, 548, 555, 558, 566, 570, 583, 599, 604, 607, 612, 616, 623,
    630, 635, 640, 652, 660, 668,
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPragmaDeclaration) {
      listener.enterPragmaDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPragmaDeclaration) {
      listener.exitPragmaDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIncludeDeclaration) {
      listener.enterIncludeDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIncludeDeclaration) {
      listener.exitIncludeDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBlockDeclaration) {
      listener.enterBlockDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBlockDeclaration) {
      listener.exitBlockDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFunctionDeclaration) {
      listener.enterFunctionDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFunctionDeclaration) {
      listener.exitFunctionDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFunctionBlock) {
      listener.enterFunctionBlock(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFunctionBlock) {
      listener.exitFunctionBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterForFuncStmt) {
      listener.enterForFuncStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitForFuncStmt) {
      listener.exitForFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterLogFuncStmt) {
      listener.enterLogFuncStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitLogFuncStmt) {
      listener.exitLogFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFuncVarDeclaration) {
      listener.enterFuncVarDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFuncVarDeclaration) {
      listener.exitFuncVarDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterAssertFuncStmt) {
      listener.enterAssertFuncStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitAssertFuncStmt) {
      listener.exitAssertFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFuncBlock) {
      listener.enterFuncBlock(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFuncBlock) {
      listener.exitFuncBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFuncSelfOp) {
      listener.enterFuncSelfOp(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFuncSelfOp) {
      listener.exitFuncSelfOp(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterIfFuncStmt) {
      listener.enterIfFuncStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitIfFuncStmt) {
      listener.exitIfFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterWhileFuncStmt) {
      listener.enterWhileFuncStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitWhileFuncStmt) {
      listener.exitWhileFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterReturnFuncStmt) {
      listener.enterReturnFuncStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitReturnFuncStmt) {
      listener.exitReturnFuncStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public LP_list(): TerminalNode[] {
    return this.getTokens(CircomParser.LP);
  }
  public LP(i: number): TerminalNode {
    return this.getToken(CircomParser.LP, i);
  }
  public argsWithUnderscore(): ArgsWithUnderscoreContext {
    return this.getTypedRuleContext(
      ArgsWithUnderscoreContext,
      0,
    ) as ArgsWithUnderscoreContext;
  }
  public RP_list(): TerminalNode[] {
    return this.getTokens(CircomParser.RP);
  }
  public RP(i: number): TerminalNode {
    return this.getToken(CircomParser.RP, i);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT, 0);
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CircomParser.SEMICOLON, 0);
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFuncVariadicAssignment) {
      listener.enterFuncVariadicAssignment(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFuncVariadicAssignment) {
      listener.exitFuncVariadicAssignment(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public ASSIGNMENT_WITH_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_WITH_OP, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterFuncAssignmentExpression) {
      listener.enterFuncAssignmentExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitFuncAssignmentExpression) {
      listener.exitFuncAssignmentExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTemplateDeclaration) {
      listener.enterTemplateDeclaration(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTemplateDeclaration) {
      listener.exitTemplateDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTemplateBlock) {
      listener.enterTemplateBlock(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTemplateBlock) {
      listener.exitTemplateBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPublicInputsList) {
      listener.enterPublicInputsList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPublicInputsList) {
      listener.exitPublicInputsList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
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
  public EQ_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.EQ_CONSTRAINT, 0);
  }
  public element_list(): ElementContext[] {
    return this.getTypedRuleContexts(ElementContext) as ElementContext[];
  }
  public element(i: number): ElementContext {
    return this.getTypedRuleContext(ElementContext, i) as ElementContext;
  }
  public LEFT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, 0);
  }
  public ASSIGNMENT_WITH_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_WITH_OP, 0);
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
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CircomParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CircomParser.COMMA, i);
  }
  public RIGHT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.RIGHT_CONSTRAINT, 0);
  }
  public UNDERSCORE(): TerminalNode {
    return this.getToken(CircomParser.UNDERSCORE, 0);
  }
  public argsWithUnderscore(): ArgsWithUnderscoreContext {
    return this.getTypedRuleContext(
      ArgsWithUnderscoreContext,
      0,
    ) as ArgsWithUnderscoreContext;
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTemplateStmt) {
      listener.enterTemplateStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTemplateStmt) {
      listener.exitTemplateStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitTemplateStmt) {
      return visitor.visitTemplateStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ElementContext extends ParserRuleContext {
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
  public DOT(): TerminalNode {
    return this.getToken(CircomParser.DOT, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_element;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterElement) {
      listener.enterElement(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitElement) {
      listener.exitElement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitElement) {
      return visitor.visitElement(this);
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterForControl) {
      listener.enterForControl(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitForControl) {
      listener.exitForControl(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterForInit) {
      listener.enterForInit(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitForInit) {
      listener.exitForInit(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public ASSIGNMENT_WITH_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_WITH_OP, 0);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_forUpdate;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterForUpdate) {
      listener.enterForUpdate(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitForUpdate) {
      listener.exitForUpdate(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterParExpression) {
      listener.enterParExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitParExpression) {
      listener.exitParExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public TERNARY_CONDITION(): TerminalNode {
    return this.getToken(CircomParser.TERNARY_CONDITION, 0);
  }
  public TERNARY_ALTERNATIVE(): TerminalNode {
    return this.getToken(CircomParser.TERNARY_ALTERNATIVE, 0);
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTernaryExpression) {
      listener.enterTernaryExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTernaryExpression) {
      listener.exitTernaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public DOT(): TerminalNode {
    return this.getToken(CircomParser.DOT, 0);
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterDotExpression) {
      listener.enterDotExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitDotExpression) {
      listener.exitDotExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBinaryExpression) {
      listener.enterBinaryExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBinaryExpression) {
      listener.exitBinaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBlockInstantiationExpression) {
      listener.enterBlockInstantiationExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBlockInstantiationExpression) {
      listener.exitBlockInstantiationExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterPrimary) {
      listener.enterPrimary(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitPrimary) {
      listener.exitPrimary(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public STRING_list(): TerminalNode[] {
    return this.getTokens(CircomParser.STRING);
  }
  public STRING(i: number): TerminalNode {
    return this.getToken(CircomParser.STRING, i);
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
    return CircomParser.RULE_logStmt;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterLogStmt) {
      listener.enterLogStmt(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitLogStmt) {
      listener.exitLogStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterComponentDefinition) {
      listener.enterComponentDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitComponentDefinition) {
      listener.exitComponentDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterSignalDefinition) {
      listener.enterSignalDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitSignalDefinition) {
      listener.exitSignalDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterTagList) {
      listener.enterTagList(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitTagList) {
      listener.exitTagList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public LEFT_CONSTRAINT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, 0);
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterVarDefinition) {
      listener.enterVarDefinition(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitVarDefinition) {
      listener.exitVarDefinition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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

export class RhsValueContext extends ParserRuleContext {
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
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(
      ExpressionListContext,
      0,
    ) as ExpressionListContext;
  }
  public RP(): TerminalNode {
    return this.getToken(CircomParser.RP, 0);
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterRhsValue) {
      listener.enterRhsValue(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitRhsValue) {
      listener.exitRhsValue(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public LEFT_CONSTRAINT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.LEFT_CONSTRAINT);
  }
  public LEFT_CONSTRAINT(i: number): TerminalNode {
    return this.getToken(CircomParser.LEFT_CONSTRAINT, i);
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
  public RIGHT_CONSTRAINT_list(): TerminalNode[] {
    return this.getTokens(CircomParser.RIGHT_CONSTRAINT);
  }
  public RIGHT_CONSTRAINT(i: number): TerminalNode {
    return this.getToken(CircomParser.RIGHT_CONSTRAINT, i);
  }
  public get ruleIndex(): number {
    return CircomParser.RULE_componentCall;
  }
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterComponentCall) {
      listener.enterComponentCall(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitComponentCall) {
      listener.exitComponentCall(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterBlockInstantiation) {
      listener.enterBlockInstantiation(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitBlockInstantiation) {
      listener.exitBlockInstantiation(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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

export class IdentifierContext extends ParserRuleContext {
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
  public DOT(): TerminalNode {
    return this.getToken(CircomParser.DOT, 0);
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterArgs) {
      listener.enterArgs(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitArgs) {
      listener.exitArgs(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public UNDERSCORE_list(): TerminalNode[] {
    return this.getTokens(CircomParser.UNDERSCORE);
  }
  public UNDERSCORE(i: number): TerminalNode {
    return this.getToken(CircomParser.UNDERSCORE, i);
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterArgsWithUnderscore) {
      listener.enterArgsWithUnderscore(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitArgsWithUnderscore) {
      listener.exitArgsWithUnderscore(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
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
  public enterRule(listener: CircomParserListener): void {
    if (listener.enterNumSequence) {
      listener.enterNumSequence(this);
    }
  }
  public exitRule(listener: CircomParserListener): void {
    if (listener.exitNumSequence) {
      listener.exitNumSequence(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomParserVisitor<Result>): Result {
    if (visitor.visitNumSequence) {
      return visitor.visitNumSequence(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
