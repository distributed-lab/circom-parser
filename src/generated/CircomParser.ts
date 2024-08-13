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
  public static readonly PACKAGE_NAME = 6;
  public static readonly SIGNAL_TYPE = 7;
  public static readonly SIGNAL = 8;
  public static readonly INPUT = 9;
  public static readonly OUTPUT = 10;
  public static readonly PUBLIC = 11;
  public static readonly TEMPLATE = 12;
  public static readonly COMPONENT = 13;
  public static readonly VAR = 14;
  public static readonly FUNCTION = 15;
  public static readonly RETURN = 16;
  public static readonly IF = 17;
  public static readonly ELSE = 18;
  public static readonly FOR = 19;
  public static readonly WHILE = 20;
  public static readonly DO = 21;
  public static readonly LOG = 22;
  public static readonly ASSERT = 23;
  public static readonly INCLUDE = 24;
  public static readonly CUSTOM = 25;
  public static readonly PRAGMA = 26;
  public static readonly CIRCOM = 27;
  public static readonly CUSTOM_TEMPLATES = 28;
  public static readonly MAIN = 29;
  public static readonly PARALLEL = 30;
  public static readonly LP = 31;
  public static readonly RP = 32;
  public static readonly LB = 33;
  public static readonly RB = 34;
  public static readonly LC = 35;
  public static readonly RC = 36;
  public static readonly SEMICOLON = 37;
  public static readonly COMMA = 38;
  public static readonly ASSIGNMENT = 39;
  public static readonly ASSIGNMENT_OP = 40;
  public static readonly SELF_OP = 41;
  public static readonly LEFT_ASSIGNMENT = 42;
  public static readonly RIGHT_ASSIGNMENT = 43;
  public static readonly CONSTRAINT_EQ = 44;
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
  public static readonly ID = 67;
  public static readonly NUMBER = 68;
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
  public static readonly RULE_componentDefinition = 17;
  public static readonly RULE_componentDeclaration = 18;
  public static readonly RULE_signalDefinition = 19;
  public static readonly RULE_signalDeclaration = 20;
  public static readonly RULE_varDefinition = 21;
  public static readonly RULE_varDeclaration = 22;
  public static readonly RULE_rhsValue = 23;
  public static readonly RULE_componentCall = 24;
  public static readonly RULE_blockInstantiation = 25;
  public static readonly RULE_arrayDimension = 26;
  public static readonly RULE_argsWithUnderscore = 27;
  public static readonly RULE_args = 28;
  public static readonly RULE_numSequence = 29;
  public static readonly RULE_expressionList = 30;
  public static readonly RULE_identifier = 31;
  public static readonly literalNames: (string | null)[] = [
    null,
    "'.'",
    "'_'",
    "'?'",
    "':'",
    null,
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
    "PACKAGE_NAME",
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
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 64;
              this.pragmaDeclaration();
            }
          }
          this.state = 67;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === 26);
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 24) {
          {
            {
              this.state = 69;
              this.includeDeclaration();
            }
          }
          this.state = 74;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 12 || _la === 15) {
          {
            {
              this.state = 75;
              this.blockDeclaration();
            }
          }
          this.state = 80;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 13) {
          {
            this.state = 81;
            this.componentMainDeclaration();
          }
        }

        this.state = 84;
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
      this.state = 93;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 86;
            this.match(CircomParser.PRAGMA);
            this.state = 87;
            this.match(CircomParser.CIRCOM);
            this.state = 88;
            this.match(CircomParser.VERSION);
            this.state = 89;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 90;
            this.match(CircomParser.PRAGMA);
            this.state = 91;
            this.match(CircomParser.CUSTOM_TEMPLATES);
            this.state = 92;
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
        this.state = 95;
        this.match(CircomParser.INCLUDE);
        this.state = 96;
        this.match(CircomParser.PACKAGE_NAME);
        this.state = 97;
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
      this.state = 101;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 15:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 99;
            this.functionDeclaration();
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 100;
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
        this.state = 103;
        this.match(CircomParser.FUNCTION);
        this.state = 104;
        this.match(CircomParser.ID);
        this.state = 105;
        this.match(CircomParser.LP);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 67) {
          {
            {
              this.state = 106;
              this.args();
            }
          }
          this.state = 111;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 112;
        this.match(CircomParser.RP);
        this.state = 113;
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
        this.state = 115;
        this.match(CircomParser.LC);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 14) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2097261) !== 0) ||
          _la === 67
        ) {
          {
            {
              this.state = 116;
              this.functionStmt();
            }
          }
          this.state = 121;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 122;
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
      this.state = 157;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          localctx = new FuncBlockContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 124;
            this.functionBlock();
          }
          break;
        case 2:
          localctx = new FuncSelfOpContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 125;
            this.match(CircomParser.ID);
            this.state = 126;
            this.match(CircomParser.SELF_OP);
            this.state = 127;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new FuncVarDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 128;
            this.varDeclaration();
            this.state = 129;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          localctx = new FuncAssignmentExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 131;
            this.identifier();
            this.state = 132;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 40)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 133;
            this.expression(0);
            this.state = 134;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          localctx = new IfFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 136;
            this.match(CircomParser.IF);
            this.state = 137;
            this.parExpression();
            this.state = 138;
            this.functionStmt();
            this.state = 141;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
              case 1:
                {
                  this.state = 139;
                  this.match(CircomParser.ELSE);
                  this.state = 140;
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
            this.state = 143;
            this.match(CircomParser.WHILE);
            this.state = 144;
            this.parExpression();
            this.state = 145;
            this.functionStmt();
          }
          break;
        case 7:
          localctx = new ForFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 147;
            this.match(CircomParser.FOR);
            this.state = 148;
            this.match(CircomParser.LP);
            this.state = 149;
            this.forControl();
            this.state = 150;
            this.match(CircomParser.RP);
            this.state = 151;
            this.functionStmt();
          }
          break;
        case 8:
          localctx = new ReturnFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 153;
            this.match(CircomParser.RETURN);
            this.state = 154;
            this.expression(0);
            this.state = 155;
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
      this.state = 182;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 159;
            this.match(CircomParser.TEMPLATE);
            this.state = 160;
            this.match(CircomParser.ID);
            this.state = 161;
            this.match(CircomParser.LP);
            this.state = 165;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 67) {
              {
                {
                  this.state = 162;
                  this.args();
                }
              }
              this.state = 167;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 168;
            this.match(CircomParser.RP);
            this.state = 169;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 170;
            this.match(CircomParser.TEMPLATE);
            this.state = 171;
            this.match(CircomParser.CUSTOM);
            this.state = 172;
            this.match(CircomParser.ID);
            this.state = 173;
            this.match(CircomParser.LP);
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 67) {
              {
                {
                  this.state = 174;
                  this.args();
                }
              }
              this.state = 179;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 180;
            this.match(CircomParser.RP);
            this.state = 181;
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
        this.state = 184;
        this.match(CircomParser.LC);
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 2157601028) !== 0) ||
          (((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 12293) !== 0) ||
          _la === 67 ||
          _la === 68
        ) {
          {
            {
              this.state = 185;
              this.templateStmt();
            }
          }
          this.state = 190;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 191;
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
        this.state = 193;
        this.match(CircomParser.COMPONENT);
        this.state = 194;
        this.match(CircomParser.MAIN);
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 35) {
          {
            this.state = 195;
            this.match(CircomParser.LC);
            this.state = 196;
            this.match(CircomParser.PUBLIC);
            this.state = 197;
            this.match(CircomParser.LB);
            this.state = 198;
            this.args();
            this.state = 199;
            this.match(CircomParser.RB);
            this.state = 200;
            this.match(CircomParser.RC);
          }
        }

        this.state = 204;
        this.match(CircomParser.ASSIGNMENT);
        this.state = 205;
        this.match(CircomParser.ID);
        this.state = 206;
        this.match(CircomParser.LP);
        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 31) & ~0x1f) === 0 && ((1 << (_la - 31)) & 49157) !== 0) ||
          _la === 67 ||
          _la === 68
        ) {
          {
            this.state = 207;
            this.expressionList();
          }
        }

        this.state = 210;
        this.match(CircomParser.RP);
        this.state = 211;
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
      this.state = 310;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 213;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 214;
            this.match(CircomParser.ID);
            this.state = 215;
            this.match(CircomParser.SELF_OP);
            this.state = 216;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 217;
            this.varDeclaration();
            this.state = 218;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 220;
            this.signalDeclaration();
            this.state = 221;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 223;
            this.componentDeclaration();
            this.state = 224;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 226;
            this.blockInstantiation();
            this.state = 227;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            {
              this.state = 229;
              this.identifier();
              this.state = 232;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === 1) {
                {
                  this.state = 230;
                  this.match(CircomParser.T__0);
                  this.state = 231;
                  this.match(CircomParser.ID);
                }
              }
            }
            this.state = 234;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 235;
            this.expression(0);
            this.state = 236;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 238;
            this.expression(0);
            this.state = 239;
            this.match(CircomParser.CONSTRAINT_EQ);
            this.state = 240;
            this.expression(0);
            this.state = 241;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 248;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
              case 1:
                {
                  this.state = 243;
                  this.primary();
                }
                break;
              case 2:
                {
                  {
                    this.state = 244;
                    this.identifier();
                    this.state = 245;
                    this.match(CircomParser.T__0);
                    this.state = 246;
                    this.identifier();
                  }
                }
                break;
            }
            this.state = 250;
            _la = this._input.LA(1);
            if (!(_la === 40 || _la === 42)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 251;
            this.expression(0);
            this.state = 252;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 254;
            this.expression(0);
            this.state = 255;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 256;
            this.primary();
            this.state = 257;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 259;
            this.match(CircomParser.T__1);
            this.state = 260;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 42)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 263;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 18, this._ctx)) {
              case 1:
                {
                  this.state = 261;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 262;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 265;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 269;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 267;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 268;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 271;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 272;
            this.match(CircomParser.T__1);
            this.state = 273;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 275;
            this.match(CircomParser.LP);
            this.state = 276;
            this.argsWithUnderscore();
            this.state = 277;
            this.match(CircomParser.RP);
            this.state = 278;
            _la = this._input.LA(1);
            if (!(_la === 39 || _la === 42)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 279;
            this.blockInstantiation();
            this.state = 280;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 282;
            this.blockInstantiation();
            this.state = 283;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 284;
            this.match(CircomParser.LP);
            this.state = 285;
            this.argsWithUnderscore();
            this.state = 286;
            this.match(CircomParser.RP);
            this.state = 287;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 289;
            this.match(CircomParser.IF);
            this.state = 290;
            this.parExpression();
            this.state = 291;
            this.templateStmt();
            this.state = 294;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 292;
                  this.match(CircomParser.ELSE);
                  this.state = 293;
                  this.templateStmt();
                }
                break;
            }
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 296;
            this.match(CircomParser.WHILE);
            this.state = 297;
            this.parExpression();
            this.state = 298;
            this.templateStmt();
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 300;
            this.match(CircomParser.FOR);
            this.state = 301;
            this.match(CircomParser.LP);
            this.state = 302;
            this.forControl();
            this.state = 303;
            this.match(CircomParser.RP);
            this.state = 304;
            this.templateStmt();
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 306;
            this.match(CircomParser.ASSERT);
            this.state = 307;
            this.parExpression();
            this.state = 308;
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
        this.state = 312;
        this.forInit();
        this.state = 313;
        this.match(CircomParser.SEMICOLON);
        this.state = 314;
        this.expression(0);
        this.state = 315;
        this.match(CircomParser.SEMICOLON);
        this.state = 316;
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
        this.state = 318;
        this.varDefinition();
        this.state = 321;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 39) {
          {
            this.state = 319;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 320;
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
      this.state = 331;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 67:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 323;
            this.match(CircomParser.ID);
            this.state = 327;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 41:
                {
                  this.state = 324;
                  this.match(CircomParser.SELF_OP);
                }
                break;
              case 39:
              case 40:
                {
                  {
                    this.state = 325;
                    _la = this._input.LA(1);
                    if (!(_la === 39 || _la === 40)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 326;
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
            this.state = 329;
            this.match(CircomParser.SELF_OP);
            this.state = 330;
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
        this.state = 333;
        this.match(CircomParser.LP);
        this.state = 334;
        this.expression(0);
        this.state = 335;
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
        this.state = 342;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
          case 1:
            {
              localctx = new PrimaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 338;
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
              this.state = 339;
              this.blockInstantiation();
            }
            break;
          case 3:
            {
              localctx = new UnaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 340;
              (localctx as UnaryExpressionContext)._op = this._input.LT(1);
              _la = this._input.LA(1);
              if (!(_la === 45 || _la === 46)) {
                (localctx as UnaryExpressionContext)._op =
                  this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 341;
              this.expression(7);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 376;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 374;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 27, this._ctx)
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
                    this.state = 344;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 345;
                    this.match(CircomParser.T__2);
                    this.state = 346;
                    this.expression(0);
                    this.state = 347;
                    this.match(CircomParser.T__3);
                    this.state = 348;
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
                    this.state = 350;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 351;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 47) & ~0x1f) === 0 &&
                        ((1 << (_la - 47)) & 31) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 352;
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
                    this.state = 353;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 354;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 52 || _la === 53)) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 355;
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
                    this.state = 356;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 357;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === 54 || _la === 55)) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 358;
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
                    this.state = 359;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 360;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 56) & ~0x1f) === 0 &&
                        ((1 << (_la - 56)) & 7) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 361;
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
                    this.state = 362;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)",
                      );
                    }
                    this.state = 363;
                    (localctx as BinaryExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 59) & ~0x1f) === 0 &&
                        ((1 << (_la - 59)) & 255) !== 0
                      )
                    ) {
                      (localctx as BinaryExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 364;
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
                    this.state = 365;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 366;
                    this.match(CircomParser.T__0);
                    this.state = 367;
                    this.match(CircomParser.ID);
                    this.state = 372;
                    this._errHandler.sync(this);
                    switch (
                      this._interp.adaptivePredict(this._input, 26, this._ctx)
                    ) {
                      case 1:
                        {
                          this.state = 368;
                          this.match(CircomParser.LB);
                          this.state = 369;
                          this.expression(0);
                          this.state = 370;
                          this.match(CircomParser.RB);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
          }
          this.state = 378;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
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
      this.state = 391;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 379;
            this.match(CircomParser.LP);
            this.state = 380;
            this.expression(0);
            this.state = 381;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 383;
            this.match(CircomParser.LB);
            this.state = 384;
            this.expressionList();
            this.state = 385;
            this.match(CircomParser.RB);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 387;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 388;
            this.identifier();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 389;
            this.args();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 390;
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
  public componentDefinition(): ComponentDefinitionContext {
    let localctx: ComponentDefinitionContext = new ComponentDefinitionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 34, CircomParser.RULE_componentDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 393;
        this.match(CircomParser.COMPONENT);
        this.state = 394;
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
    this.enterRule(localctx, 36, CircomParser.RULE_componentDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 396;
        this.componentDefinition();
        this.state = 400;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 33) {
          {
            {
              this.state = 397;
              this.arrayDimension();
            }
          }
          this.state = 402;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 405;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 39) {
          {
            this.state = 403;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 404;
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
    this.enterRule(localctx, 38, CircomParser.RULE_signalDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 407;
        this.match(CircomParser.SIGNAL);
        this.state = 409;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 7) {
          {
            this.state = 408;
            this.match(CircomParser.SIGNAL_TYPE);
          }
        }

        this.state = 415;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 35) {
          {
            this.state = 411;
            this.match(CircomParser.LC);
            this.state = 412;
            this.args();
            this.state = 413;
            this.match(CircomParser.RC);
          }
        }

        this.state = 417;
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
    this.enterRule(localctx, 40, CircomParser.RULE_signalDeclaration);
    let _la: number;
    try {
      this.state = 432;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 419;
            this.signalDefinition();
            this.state = 422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 42) {
              {
                this.state = 420;
                this.match(CircomParser.LEFT_ASSIGNMENT);
                this.state = 421;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 424;
            this.signalDefinition();
            this.state = 429;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 38) {
              {
                {
                  this.state = 425;
                  this.match(CircomParser.COMMA);
                  this.state = 426;
                  this.identifier();
                }
              }
              this.state = 431;
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
    this.enterRule(localctx, 42, CircomParser.RULE_varDefinition);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 434;
        this.match(CircomParser.VAR);
        this.state = 435;
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
    this.enterRule(localctx, 44, CircomParser.RULE_varDeclaration);
    let _la: number;
    try {
      this.state = 450;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 437;
            this.varDefinition();
            this.state = 440;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 39) {
              {
                this.state = 438;
                this.match(CircomParser.ASSIGNMENT);
                this.state = 439;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 442;
            this.varDefinition();
            this.state = 447;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 38) {
              {
                {
                  this.state = 443;
                  this.match(CircomParser.COMMA);
                  this.state = 444;
                  this.identifier();
                }
              }
              this.state = 449;
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
    this.enterRule(localctx, 46, CircomParser.RULE_rhsValue);
    try {
      this.state = 454;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 452;
            this.expression(0);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 453;
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
    this.enterRule(localctx, 48, CircomParser.RULE_componentCall);
    let _la: number;
    try {
      this.state = 492;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 44, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 456;
            this.match(CircomParser.LP);
            this.state = 458;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 31) & ~0x1f) === 0 &&
                ((1 << (_la - 31)) & 49157) !== 0) ||
              _la === 67 ||
              _la === 68
            ) {
              {
                this.state = 457;
                this.expressionList();
              }
            }

            this.state = 460;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 461;
            this.match(CircomParser.LP);
            this.state = 462;
            this.match(CircomParser.ID);
            this.state = 463;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 464;
            this.expression(0);
            this.state = 471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 38) {
              {
                {
                  this.state = 465;
                  this.match(CircomParser.COMMA);
                  this.state = 466;
                  this.match(CircomParser.ID);
                  this.state = 467;
                  this.match(CircomParser.LEFT_ASSIGNMENT);
                  this.state = 468;
                  this.expression(0);
                }
              }
              this.state = 473;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 474;
            this.match(CircomParser.RP);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 476;
            this.match(CircomParser.LP);
            this.state = 477;
            this.expression(0);
            this.state = 478;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 479;
            this.match(CircomParser.ID);
            this.state = 487;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 38) {
              {
                {
                  this.state = 480;
                  this.match(CircomParser.COMMA);
                  this.state = 481;
                  this.expression(0);
                  this.state = 482;
                  this.match(CircomParser.RIGHT_ASSIGNMENT);
                  this.state = 483;
                  this.match(CircomParser.ID);
                }
              }
              this.state = 489;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 490;
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
    this.enterRule(localctx, 50, CircomParser.RULE_blockInstantiation);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 494;
        this.match(CircomParser.ID);
        this.state = 495;
        this.match(CircomParser.LP);
        this.state = 497;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - 31) & ~0x1f) === 0 && ((1 << (_la - 31)) & 49157) !== 0) ||
          _la === 67 ||
          _la === 68
        ) {
          {
            this.state = 496;
            this.expressionList();
          }
        }

        this.state = 499;
        this.match(CircomParser.RP);
        this.state = 501;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 46, this._ctx)) {
          case 1:
            {
              this.state = 500;
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
    this.enterRule(localctx, 52, CircomParser.RULE_arrayDimension);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 503;
        this.match(CircomParser.LB);
        this.state = 507;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
          case 1:
            {
              this.state = 504;
              this.match(CircomParser.NUMBER);
            }
            break;
          case 2:
            {
              this.state = 505;
              this.match(CircomParser.ID);
            }
            break;
          case 3:
            {
              this.state = 506;
              this.expression(0);
            }
            break;
        }
        this.state = 509;
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
    this.enterRule(localctx, 54, CircomParser.RULE_argsWithUnderscore);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 511;
        _la = this._input.LA(1);
        if (!(_la === 2 || _la === 67)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 516;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 38) {
          {
            {
              this.state = 512;
              this.match(CircomParser.COMMA);
              this.state = 513;
              _la = this._input.LA(1);
              if (!(_la === 2 || _la === 67)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          this.state = 518;
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
    this.enterRule(localctx, 56, CircomParser.RULE_args);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 519;
        this.match(CircomParser.ID);
        this.state = 524;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 520;
                this.match(CircomParser.COMMA);
                this.state = 521;
                this.match(CircomParser.ID);
              }
            }
          }
          this.state = 526;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
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
    this.enterRule(localctx, 58, CircomParser.RULE_numSequence);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 527;
        this.match(CircomParser.NUMBER);
        this.state = 532;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 528;
                this.match(CircomParser.COMMA);
                this.state = 529;
                this.match(CircomParser.NUMBER);
              }
            }
          }
          this.state = 534;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
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
        this.state = 535;
        this.expression(0);
        this.state = 540;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 38) {
          {
            {
              this.state = 536;
              this.match(CircomParser.COMMA);
              this.state = 537;
              this.expression(0);
            }
          }
          this.state = 542;
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
        this.state = 543;
        this.match(CircomParser.ID);
        this.state = 547;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 544;
                this.arrayDimension();
              }
            }
          }
          this.state = 549;
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
    4, 1, 72, 551, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 1, 0, 4, 0, 66,
    8, 0, 11, 0, 12, 0, 67, 1, 0, 5, 0, 71, 8, 0, 10, 0, 12, 0, 74, 9, 0, 1, 0,
    5, 0, 77, 8, 0, 10, 0, 12, 0, 80, 9, 0, 1, 0, 3, 0, 83, 8, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 94, 8, 1, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 3, 1, 3, 3, 3, 102, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 108, 8, 4, 10,
    4, 12, 4, 111, 9, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 5, 5, 118, 8, 5, 10, 5,
    12, 5, 121, 9, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 142, 8, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 3, 6, 158, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 164, 8, 7, 10, 7, 12,
    7, 167, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 176, 8, 7, 10,
    7, 12, 7, 179, 9, 7, 1, 7, 1, 7, 3, 7, 183, 8, 7, 1, 8, 1, 8, 5, 8, 187, 8,
    8, 10, 8, 12, 8, 190, 9, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9,
    1, 9, 1, 9, 1, 9, 3, 9, 203, 8, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 209, 8, 9,
    1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3,
    10, 233, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 249, 8, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3,
    10, 264, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 270, 8, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10,
    295, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 311, 8, 10, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 3, 12, 322, 8, 12, 1, 13, 1, 13,
    1, 13, 1, 13, 3, 13, 328, 8, 13, 1, 13, 1, 13, 3, 13, 332, 8, 13, 1, 14, 1,
    14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 343, 8, 15, 1,
    15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1,
    15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1,
    15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 373, 8, 15, 5, 15, 375, 8, 15,
    10, 15, 12, 15, 378, 9, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 392, 8, 16, 1, 17, 1, 17, 1, 17,
    1, 18, 1, 18, 5, 18, 399, 8, 18, 10, 18, 12, 18, 402, 9, 18, 1, 18, 1, 18,
    3, 18, 406, 8, 18, 1, 19, 1, 19, 3, 19, 410, 8, 19, 1, 19, 1, 19, 1, 19, 1,
    19, 3, 19, 416, 8, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 3, 20, 423, 8, 20,
    1, 20, 1, 20, 1, 20, 5, 20, 428, 8, 20, 10, 20, 12, 20, 431, 9, 20, 3, 20,
    433, 8, 20, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 3, 22, 441, 8, 22, 1,
    22, 1, 22, 1, 22, 5, 22, 446, 8, 22, 10, 22, 12, 22, 449, 9, 22, 3, 22, 451,
    8, 22, 1, 23, 1, 23, 3, 23, 455, 8, 23, 1, 24, 1, 24, 3, 24, 459, 8, 24, 1,
    24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 5, 24, 470, 8,
    24, 10, 24, 12, 24, 473, 9, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1,
    24, 1, 24, 1, 24, 1, 24, 1, 24, 5, 24, 486, 8, 24, 10, 24, 12, 24, 489, 9,
    24, 1, 24, 1, 24, 3, 24, 493, 8, 24, 1, 25, 1, 25, 1, 25, 3, 25, 498, 8, 25,
    1, 25, 1, 25, 3, 25, 502, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 508, 8,
    26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 5, 27, 515, 8, 27, 10, 27, 12, 27,
    518, 9, 27, 1, 28, 1, 28, 1, 28, 5, 28, 523, 8, 28, 10, 28, 12, 28, 526, 9,
    28, 1, 29, 1, 29, 1, 29, 5, 29, 531, 8, 29, 10, 29, 12, 29, 534, 9, 29, 1,
    30, 1, 30, 1, 30, 5, 30, 539, 8, 30, 10, 30, 12, 30, 542, 9, 30, 1, 31, 1,
    31, 5, 31, 546, 8, 31, 10, 31, 12, 31, 549, 9, 31, 1, 31, 0, 1, 30, 32, 0,
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 0, 10, 1, 0, 39, 40, 2, 0, 40,
    40, 42, 42, 2, 0, 39, 39, 42, 42, 1, 0, 45, 46, 1, 0, 47, 51, 1, 0, 52, 53,
    1, 0, 54, 55, 1, 0, 56, 58, 1, 0, 59, 66, 2, 0, 2, 2, 67, 67, 605, 0, 65, 1,
    0, 0, 0, 2, 93, 1, 0, 0, 0, 4, 95, 1, 0, 0, 0, 6, 101, 1, 0, 0, 0, 8, 103,
    1, 0, 0, 0, 10, 115, 1, 0, 0, 0, 12, 157, 1, 0, 0, 0, 14, 182, 1, 0, 0, 0,
    16, 184, 1, 0, 0, 0, 18, 193, 1, 0, 0, 0, 20, 310, 1, 0, 0, 0, 22, 312, 1,
    0, 0, 0, 24, 318, 1, 0, 0, 0, 26, 331, 1, 0, 0, 0, 28, 333, 1, 0, 0, 0, 30,
    342, 1, 0, 0, 0, 32, 391, 1, 0, 0, 0, 34, 393, 1, 0, 0, 0, 36, 396, 1, 0, 0,
    0, 38, 407, 1, 0, 0, 0, 40, 432, 1, 0, 0, 0, 42, 434, 1, 0, 0, 0, 44, 450,
    1, 0, 0, 0, 46, 454, 1, 0, 0, 0, 48, 492, 1, 0, 0, 0, 50, 494, 1, 0, 0, 0,
    52, 503, 1, 0, 0, 0, 54, 511, 1, 0, 0, 0, 56, 519, 1, 0, 0, 0, 58, 527, 1,
    0, 0, 0, 60, 535, 1, 0, 0, 0, 62, 543, 1, 0, 0, 0, 64, 66, 3, 2, 1, 0, 65,
    64, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 65, 1, 0, 0, 0, 67, 68, 1, 0, 0, 0,
    68, 72, 1, 0, 0, 0, 69, 71, 3, 4, 2, 0, 70, 69, 1, 0, 0, 0, 71, 74, 1, 0, 0,
    0, 72, 70, 1, 0, 0, 0, 72, 73, 1, 0, 0, 0, 73, 78, 1, 0, 0, 0, 74, 72, 1, 0,
    0, 0, 75, 77, 3, 6, 3, 0, 76, 75, 1, 0, 0, 0, 77, 80, 1, 0, 0, 0, 78, 76, 1,
    0, 0, 0, 78, 79, 1, 0, 0, 0, 79, 82, 1, 0, 0, 0, 80, 78, 1, 0, 0, 0, 81, 83,
    3, 18, 9, 0, 82, 81, 1, 0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 84, 1, 0, 0, 0, 84,
    85, 5, 0, 0, 1, 85, 1, 1, 0, 0, 0, 86, 87, 5, 26, 0, 0, 87, 88, 5, 27, 0, 0,
    88, 89, 5, 5, 0, 0, 89, 94, 5, 37, 0, 0, 90, 91, 5, 26, 0, 0, 91, 92, 5, 28,
    0, 0, 92, 94, 5, 37, 0, 0, 93, 86, 1, 0, 0, 0, 93, 90, 1, 0, 0, 0, 94, 3, 1,
    0, 0, 0, 95, 96, 5, 24, 0, 0, 96, 97, 5, 6, 0, 0, 97, 98, 5, 37, 0, 0, 98,
    5, 1, 0, 0, 0, 99, 102, 3, 8, 4, 0, 100, 102, 3, 14, 7, 0, 101, 99, 1, 0, 0,
    0, 101, 100, 1, 0, 0, 0, 102, 7, 1, 0, 0, 0, 103, 104, 5, 15, 0, 0, 104,
    105, 5, 67, 0, 0, 105, 109, 5, 31, 0, 0, 106, 108, 3, 56, 28, 0, 107, 106,
    1, 0, 0, 0, 108, 111, 1, 0, 0, 0, 109, 107, 1, 0, 0, 0, 109, 110, 1, 0, 0,
    0, 110, 112, 1, 0, 0, 0, 111, 109, 1, 0, 0, 0, 112, 113, 5, 32, 0, 0, 113,
    114, 3, 10, 5, 0, 114, 9, 1, 0, 0, 0, 115, 119, 5, 35, 0, 0, 116, 118, 3,
    12, 6, 0, 117, 116, 1, 0, 0, 0, 118, 121, 1, 0, 0, 0, 119, 117, 1, 0, 0, 0,
    119, 120, 1, 0, 0, 0, 120, 122, 1, 0, 0, 0, 121, 119, 1, 0, 0, 0, 122, 123,
    5, 36, 0, 0, 123, 11, 1, 0, 0, 0, 124, 158, 3, 10, 5, 0, 125, 126, 5, 67, 0,
    0, 126, 127, 5, 41, 0, 0, 127, 158, 5, 37, 0, 0, 128, 129, 3, 44, 22, 0,
    129, 130, 5, 37, 0, 0, 130, 158, 1, 0, 0, 0, 131, 132, 3, 62, 31, 0, 132,
    133, 7, 0, 0, 0, 133, 134, 3, 30, 15, 0, 134, 135, 5, 37, 0, 0, 135, 158, 1,
    0, 0, 0, 136, 137, 5, 17, 0, 0, 137, 138, 3, 28, 14, 0, 138, 141, 3, 12, 6,
    0, 139, 140, 5, 18, 0, 0, 140, 142, 3, 12, 6, 0, 141, 139, 1, 0, 0, 0, 141,
    142, 1, 0, 0, 0, 142, 158, 1, 0, 0, 0, 143, 144, 5, 20, 0, 0, 144, 145, 3,
    28, 14, 0, 145, 146, 3, 12, 6, 0, 146, 158, 1, 0, 0, 0, 147, 148, 5, 19, 0,
    0, 148, 149, 5, 31, 0, 0, 149, 150, 3, 22, 11, 0, 150, 151, 5, 32, 0, 0,
    151, 152, 3, 12, 6, 0, 152, 158, 1, 0, 0, 0, 153, 154, 5, 16, 0, 0, 154,
    155, 3, 30, 15, 0, 155, 156, 5, 37, 0, 0, 156, 158, 1, 0, 0, 0, 157, 124, 1,
    0, 0, 0, 157, 125, 1, 0, 0, 0, 157, 128, 1, 0, 0, 0, 157, 131, 1, 0, 0, 0,
    157, 136, 1, 0, 0, 0, 157, 143, 1, 0, 0, 0, 157, 147, 1, 0, 0, 0, 157, 153,
    1, 0, 0, 0, 158, 13, 1, 0, 0, 0, 159, 160, 5, 12, 0, 0, 160, 161, 5, 67, 0,
    0, 161, 165, 5, 31, 0, 0, 162, 164, 3, 56, 28, 0, 163, 162, 1, 0, 0, 0, 164,
    167, 1, 0, 0, 0, 165, 163, 1, 0, 0, 0, 165, 166, 1, 0, 0, 0, 166, 168, 1, 0,
    0, 0, 167, 165, 1, 0, 0, 0, 168, 169, 5, 32, 0, 0, 169, 183, 3, 16, 8, 0,
    170, 171, 5, 12, 0, 0, 171, 172, 5, 25, 0, 0, 172, 173, 5, 67, 0, 0, 173,
    177, 5, 31, 0, 0, 174, 176, 3, 56, 28, 0, 175, 174, 1, 0, 0, 0, 176, 179, 1,
    0, 0, 0, 177, 175, 1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 180, 1, 0, 0, 0,
    179, 177, 1, 0, 0, 0, 180, 181, 5, 32, 0, 0, 181, 183, 3, 16, 8, 0, 182,
    159, 1, 0, 0, 0, 182, 170, 1, 0, 0, 0, 183, 15, 1, 0, 0, 0, 184, 188, 5, 35,
    0, 0, 185, 187, 3, 20, 10, 0, 186, 185, 1, 0, 0, 0, 187, 190, 1, 0, 0, 0,
    188, 186, 1, 0, 0, 0, 188, 189, 1, 0, 0, 0, 189, 191, 1, 0, 0, 0, 190, 188,
    1, 0, 0, 0, 191, 192, 5, 36, 0, 0, 192, 17, 1, 0, 0, 0, 193, 194, 5, 13, 0,
    0, 194, 202, 5, 29, 0, 0, 195, 196, 5, 35, 0, 0, 196, 197, 5, 11, 0, 0, 197,
    198, 5, 33, 0, 0, 198, 199, 3, 56, 28, 0, 199, 200, 5, 34, 0, 0, 200, 201,
    5, 36, 0, 0, 201, 203, 1, 0, 0, 0, 202, 195, 1, 0, 0, 0, 202, 203, 1, 0, 0,
    0, 203, 204, 1, 0, 0, 0, 204, 205, 5, 39, 0, 0, 205, 206, 5, 67, 0, 0, 206,
    208, 5, 31, 0, 0, 207, 209, 3, 60, 30, 0, 208, 207, 1, 0, 0, 0, 208, 209, 1,
    0, 0, 0, 209, 210, 1, 0, 0, 0, 210, 211, 5, 32, 0, 0, 211, 212, 5, 37, 0, 0,
    212, 19, 1, 0, 0, 0, 213, 311, 3, 16, 8, 0, 214, 215, 5, 67, 0, 0, 215, 216,
    5, 41, 0, 0, 216, 311, 5, 37, 0, 0, 217, 218, 3, 44, 22, 0, 218, 219, 5, 37,
    0, 0, 219, 311, 1, 0, 0, 0, 220, 221, 3, 40, 20, 0, 221, 222, 5, 37, 0, 0,
    222, 311, 1, 0, 0, 0, 223, 224, 3, 36, 18, 0, 224, 225, 5, 37, 0, 0, 225,
    311, 1, 0, 0, 0, 226, 227, 3, 50, 25, 0, 227, 228, 5, 37, 0, 0, 228, 311, 1,
    0, 0, 0, 229, 232, 3, 62, 31, 0, 230, 231, 5, 1, 0, 0, 231, 233, 5, 67, 0,
    0, 232, 230, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234,
    235, 5, 39, 0, 0, 235, 236, 3, 30, 15, 0, 236, 237, 5, 37, 0, 0, 237, 311,
    1, 0, 0, 0, 238, 239, 3, 30, 15, 0, 239, 240, 5, 44, 0, 0, 240, 241, 3, 30,
    15, 0, 241, 242, 5, 37, 0, 0, 242, 311, 1, 0, 0, 0, 243, 249, 3, 32, 16, 0,
    244, 245, 3, 62, 31, 0, 245, 246, 5, 1, 0, 0, 246, 247, 3, 62, 31, 0, 247,
    249, 1, 0, 0, 0, 248, 243, 1, 0, 0, 0, 248, 244, 1, 0, 0, 0, 249, 250, 1, 0,
    0, 0, 250, 251, 7, 1, 0, 0, 251, 252, 3, 30, 15, 0, 252, 253, 5, 37, 0, 0,
    253, 311, 1, 0, 0, 0, 254, 255, 3, 30, 15, 0, 255, 256, 5, 43, 0, 0, 256,
    257, 3, 32, 16, 0, 257, 258, 5, 37, 0, 0, 258, 311, 1, 0, 0, 0, 259, 260, 5,
    2, 0, 0, 260, 263, 7, 2, 0, 0, 261, 264, 3, 30, 15, 0, 262, 264, 3, 50, 25,
    0, 263, 261, 1, 0, 0, 0, 263, 262, 1, 0, 0, 0, 264, 265, 1, 0, 0, 0, 265,
    266, 5, 37, 0, 0, 266, 311, 1, 0, 0, 0, 267, 270, 3, 30, 15, 0, 268, 270, 3,
    50, 25, 0, 269, 267, 1, 0, 0, 0, 269, 268, 1, 0, 0, 0, 270, 271, 1, 0, 0, 0,
    271, 272, 5, 43, 0, 0, 272, 273, 5, 2, 0, 0, 273, 274, 5, 37, 0, 0, 274,
    311, 1, 0, 0, 0, 275, 276, 5, 31, 0, 0, 276, 277, 3, 54, 27, 0, 277, 278, 5,
    32, 0, 0, 278, 279, 7, 2, 0, 0, 279, 280, 3, 50, 25, 0, 280, 281, 5, 37, 0,
    0, 281, 311, 1, 0, 0, 0, 282, 283, 3, 50, 25, 0, 283, 284, 5, 43, 0, 0, 284,
    285, 5, 31, 0, 0, 285, 286, 3, 54, 27, 0, 286, 287, 5, 32, 0, 0, 287, 288,
    5, 37, 0, 0, 288, 311, 1, 0, 0, 0, 289, 290, 5, 17, 0, 0, 290, 291, 3, 28,
    14, 0, 291, 294, 3, 20, 10, 0, 292, 293, 5, 18, 0, 0, 293, 295, 3, 20, 10,
    0, 294, 292, 1, 0, 0, 0, 294, 295, 1, 0, 0, 0, 295, 311, 1, 0, 0, 0, 296,
    297, 5, 20, 0, 0, 297, 298, 3, 28, 14, 0, 298, 299, 3, 20, 10, 0, 299, 311,
    1, 0, 0, 0, 300, 301, 5, 19, 0, 0, 301, 302, 5, 31, 0, 0, 302, 303, 3, 22,
    11, 0, 303, 304, 5, 32, 0, 0, 304, 305, 3, 20, 10, 0, 305, 311, 1, 0, 0, 0,
    306, 307, 5, 23, 0, 0, 307, 308, 3, 28, 14, 0, 308, 309, 5, 37, 0, 0, 309,
    311, 1, 0, 0, 0, 310, 213, 1, 0, 0, 0, 310, 214, 1, 0, 0, 0, 310, 217, 1, 0,
    0, 0, 310, 220, 1, 0, 0, 0, 310, 223, 1, 0, 0, 0, 310, 226, 1, 0, 0, 0, 310,
    229, 1, 0, 0, 0, 310, 238, 1, 0, 0, 0, 310, 248, 1, 0, 0, 0, 310, 254, 1, 0,
    0, 0, 310, 259, 1, 0, 0, 0, 310, 269, 1, 0, 0, 0, 310, 275, 1, 0, 0, 0, 310,
    282, 1, 0, 0, 0, 310, 289, 1, 0, 0, 0, 310, 296, 1, 0, 0, 0, 310, 300, 1, 0,
    0, 0, 310, 306, 1, 0, 0, 0, 311, 21, 1, 0, 0, 0, 312, 313, 3, 24, 12, 0,
    313, 314, 5, 37, 0, 0, 314, 315, 3, 30, 15, 0, 315, 316, 5, 37, 0, 0, 316,
    317, 3, 26, 13, 0, 317, 23, 1, 0, 0, 0, 318, 321, 3, 42, 21, 0, 319, 320, 5,
    39, 0, 0, 320, 322, 3, 46, 23, 0, 321, 319, 1, 0, 0, 0, 321, 322, 1, 0, 0,
    0, 322, 25, 1, 0, 0, 0, 323, 327, 5, 67, 0, 0, 324, 328, 5, 41, 0, 0, 325,
    326, 7, 0, 0, 0, 326, 328, 3, 30, 15, 0, 327, 324, 1, 0, 0, 0, 327, 325, 1,
    0, 0, 0, 328, 332, 1, 0, 0, 0, 329, 330, 5, 41, 0, 0, 330, 332, 5, 67, 0, 0,
    331, 323, 1, 0, 0, 0, 331, 329, 1, 0, 0, 0, 332, 27, 1, 0, 0, 0, 333, 334,
    5, 31, 0, 0, 334, 335, 3, 30, 15, 0, 335, 336, 5, 32, 0, 0, 336, 29, 1, 0,
    0, 0, 337, 338, 6, 15, -1, 0, 338, 343, 3, 32, 16, 0, 339, 343, 3, 50, 25,
    0, 340, 341, 7, 3, 0, 0, 341, 343, 3, 30, 15, 7, 342, 337, 1, 0, 0, 0, 342,
    339, 1, 0, 0, 0, 342, 340, 1, 0, 0, 0, 343, 376, 1, 0, 0, 0, 344, 345, 10,
    6, 0, 0, 345, 346, 5, 3, 0, 0, 346, 347, 3, 30, 15, 0, 347, 348, 5, 4, 0, 0,
    348, 349, 3, 30, 15, 7, 349, 375, 1, 0, 0, 0, 350, 351, 10, 5, 0, 0, 351,
    352, 7, 4, 0, 0, 352, 375, 3, 30, 15, 6, 353, 354, 10, 4, 0, 0, 354, 355, 7,
    5, 0, 0, 355, 375, 3, 30, 15, 5, 356, 357, 10, 3, 0, 0, 357, 358, 7, 6, 0,
    0, 358, 375, 3, 30, 15, 4, 359, 360, 10, 2, 0, 0, 360, 361, 7, 7, 0, 0, 361,
    375, 3, 30, 15, 3, 362, 363, 10, 1, 0, 0, 363, 364, 7, 8, 0, 0, 364, 375, 3,
    30, 15, 2, 365, 366, 10, 8, 0, 0, 366, 367, 5, 1, 0, 0, 367, 372, 5, 67, 0,
    0, 368, 369, 5, 33, 0, 0, 369, 370, 3, 30, 15, 0, 370, 371, 5, 34, 0, 0,
    371, 373, 1, 0, 0, 0, 372, 368, 1, 0, 0, 0, 372, 373, 1, 0, 0, 0, 373, 375,
    1, 0, 0, 0, 374, 344, 1, 0, 0, 0, 374, 350, 1, 0, 0, 0, 374, 353, 1, 0, 0,
    0, 374, 356, 1, 0, 0, 0, 374, 359, 1, 0, 0, 0, 374, 362, 1, 0, 0, 0, 374,
    365, 1, 0, 0, 0, 375, 378, 1, 0, 0, 0, 376, 374, 1, 0, 0, 0, 376, 377, 1, 0,
    0, 0, 377, 31, 1, 0, 0, 0, 378, 376, 1, 0, 0, 0, 379, 380, 5, 31, 0, 0, 380,
    381, 3, 30, 15, 0, 381, 382, 5, 32, 0, 0, 382, 392, 1, 0, 0, 0, 383, 384, 5,
    33, 0, 0, 384, 385, 3, 60, 30, 0, 385, 386, 5, 34, 0, 0, 386, 392, 1, 0, 0,
    0, 387, 392, 5, 68, 0, 0, 388, 392, 3, 62, 31, 0, 389, 392, 3, 56, 28, 0,
    390, 392, 3, 58, 29, 0, 391, 379, 1, 0, 0, 0, 391, 383, 1, 0, 0, 0, 391,
    387, 1, 0, 0, 0, 391, 388, 1, 0, 0, 0, 391, 389, 1, 0, 0, 0, 391, 390, 1, 0,
    0, 0, 392, 33, 1, 0, 0, 0, 393, 394, 5, 13, 0, 0, 394, 395, 5, 67, 0, 0,
    395, 35, 1, 0, 0, 0, 396, 400, 3, 34, 17, 0, 397, 399, 3, 52, 26, 0, 398,
    397, 1, 0, 0, 0, 399, 402, 1, 0, 0, 0, 400, 398, 1, 0, 0, 0, 400, 401, 1, 0,
    0, 0, 401, 405, 1, 0, 0, 0, 402, 400, 1, 0, 0, 0, 403, 404, 5, 39, 0, 0,
    404, 406, 3, 50, 25, 0, 405, 403, 1, 0, 0, 0, 405, 406, 1, 0, 0, 0, 406, 37,
    1, 0, 0, 0, 407, 409, 5, 8, 0, 0, 408, 410, 5, 7, 0, 0, 409, 408, 1, 0, 0,
    0, 409, 410, 1, 0, 0, 0, 410, 415, 1, 0, 0, 0, 411, 412, 5, 35, 0, 0, 412,
    413, 3, 56, 28, 0, 413, 414, 5, 36, 0, 0, 414, 416, 1, 0, 0, 0, 415, 411, 1,
    0, 0, 0, 415, 416, 1, 0, 0, 0, 416, 417, 1, 0, 0, 0, 417, 418, 3, 62, 31, 0,
    418, 39, 1, 0, 0, 0, 419, 422, 3, 38, 19, 0, 420, 421, 5, 42, 0, 0, 421,
    423, 3, 46, 23, 0, 422, 420, 1, 0, 0, 0, 422, 423, 1, 0, 0, 0, 423, 433, 1,
    0, 0, 0, 424, 429, 3, 38, 19, 0, 425, 426, 5, 38, 0, 0, 426, 428, 3, 62, 31,
    0, 427, 425, 1, 0, 0, 0, 428, 431, 1, 0, 0, 0, 429, 427, 1, 0, 0, 0, 429,
    430, 1, 0, 0, 0, 430, 433, 1, 0, 0, 0, 431, 429, 1, 0, 0, 0, 432, 419, 1, 0,
    0, 0, 432, 424, 1, 0, 0, 0, 433, 41, 1, 0, 0, 0, 434, 435, 5, 14, 0, 0, 435,
    436, 3, 62, 31, 0, 436, 43, 1, 0, 0, 0, 437, 440, 3, 42, 21, 0, 438, 439, 5,
    39, 0, 0, 439, 441, 3, 46, 23, 0, 440, 438, 1, 0, 0, 0, 440, 441, 1, 0, 0,
    0, 441, 451, 1, 0, 0, 0, 442, 447, 3, 42, 21, 0, 443, 444, 5, 38, 0, 0, 444,
    446, 3, 62, 31, 0, 445, 443, 1, 0, 0, 0, 446, 449, 1, 0, 0, 0, 447, 445, 1,
    0, 0, 0, 447, 448, 1, 0, 0, 0, 448, 451, 1, 0, 0, 0, 449, 447, 1, 0, 0, 0,
    450, 437, 1, 0, 0, 0, 450, 442, 1, 0, 0, 0, 451, 45, 1, 0, 0, 0, 452, 455,
    3, 30, 15, 0, 453, 455, 3, 50, 25, 0, 454, 452, 1, 0, 0, 0, 454, 453, 1, 0,
    0, 0, 455, 47, 1, 0, 0, 0, 456, 458, 5, 31, 0, 0, 457, 459, 3, 60, 30, 0,
    458, 457, 1, 0, 0, 0, 458, 459, 1, 0, 0, 0, 459, 460, 1, 0, 0, 0, 460, 493,
    5, 32, 0, 0, 461, 462, 5, 31, 0, 0, 462, 463, 5, 67, 0, 0, 463, 464, 5, 42,
    0, 0, 464, 471, 3, 30, 15, 0, 465, 466, 5, 38, 0, 0, 466, 467, 5, 67, 0, 0,
    467, 468, 5, 42, 0, 0, 468, 470, 3, 30, 15, 0, 469, 465, 1, 0, 0, 0, 470,
    473, 1, 0, 0, 0, 471, 469, 1, 0, 0, 0, 471, 472, 1, 0, 0, 0, 472, 474, 1, 0,
    0, 0, 473, 471, 1, 0, 0, 0, 474, 475, 5, 32, 0, 0, 475, 493, 1, 0, 0, 0,
    476, 477, 5, 31, 0, 0, 477, 478, 3, 30, 15, 0, 478, 479, 5, 43, 0, 0, 479,
    487, 5, 67, 0, 0, 480, 481, 5, 38, 0, 0, 481, 482, 3, 30, 15, 0, 482, 483,
    5, 43, 0, 0, 483, 484, 5, 67, 0, 0, 484, 486, 1, 0, 0, 0, 485, 480, 1, 0, 0,
    0, 486, 489, 1, 0, 0, 0, 487, 485, 1, 0, 0, 0, 487, 488, 1, 0, 0, 0, 488,
    490, 1, 0, 0, 0, 489, 487, 1, 0, 0, 0, 490, 491, 5, 32, 0, 0, 491, 493, 1,
    0, 0, 0, 492, 456, 1, 0, 0, 0, 492, 461, 1, 0, 0, 0, 492, 476, 1, 0, 0, 0,
    493, 49, 1, 0, 0, 0, 494, 495, 5, 67, 0, 0, 495, 497, 5, 31, 0, 0, 496, 498,
    3, 60, 30, 0, 497, 496, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498, 499, 1, 0, 0,
    0, 499, 501, 5, 32, 0, 0, 500, 502, 3, 48, 24, 0, 501, 500, 1, 0, 0, 0, 501,
    502, 1, 0, 0, 0, 502, 51, 1, 0, 0, 0, 503, 507, 5, 33, 0, 0, 504, 508, 5,
    68, 0, 0, 505, 508, 5, 67, 0, 0, 506, 508, 3, 30, 15, 0, 507, 504, 1, 0, 0,
    0, 507, 505, 1, 0, 0, 0, 507, 506, 1, 0, 0, 0, 508, 509, 1, 0, 0, 0, 509,
    510, 5, 34, 0, 0, 510, 53, 1, 0, 0, 0, 511, 516, 7, 9, 0, 0, 512, 513, 5,
    38, 0, 0, 513, 515, 7, 9, 0, 0, 514, 512, 1, 0, 0, 0, 515, 518, 1, 0, 0, 0,
    516, 514, 1, 0, 0, 0, 516, 517, 1, 0, 0, 0, 517, 55, 1, 0, 0, 0, 518, 516,
    1, 0, 0, 0, 519, 524, 5, 67, 0, 0, 520, 521, 5, 38, 0, 0, 521, 523, 5, 67,
    0, 0, 522, 520, 1, 0, 0, 0, 523, 526, 1, 0, 0, 0, 524, 522, 1, 0, 0, 0, 524,
    525, 1, 0, 0, 0, 525, 57, 1, 0, 0, 0, 526, 524, 1, 0, 0, 0, 527, 532, 5, 68,
    0, 0, 528, 529, 5, 38, 0, 0, 529, 531, 5, 68, 0, 0, 530, 528, 1, 0, 0, 0,
    531, 534, 1, 0, 0, 0, 532, 530, 1, 0, 0, 0, 532, 533, 1, 0, 0, 0, 533, 59,
    1, 0, 0, 0, 534, 532, 1, 0, 0, 0, 535, 540, 3, 30, 15, 0, 536, 537, 5, 38,
    0, 0, 537, 539, 3, 30, 15, 0, 538, 536, 1, 0, 0, 0, 539, 542, 1, 0, 0, 0,
    540, 538, 1, 0, 0, 0, 540, 541, 1, 0, 0, 0, 541, 61, 1, 0, 0, 0, 542, 540,
    1, 0, 0, 0, 543, 547, 5, 67, 0, 0, 544, 546, 3, 52, 26, 0, 545, 544, 1, 0,
    0, 0, 546, 549, 1, 0, 0, 0, 547, 545, 1, 0, 0, 0, 547, 548, 1, 0, 0, 0, 548,
    63, 1, 0, 0, 0, 549, 547, 1, 0, 0, 0, 53, 67, 72, 78, 82, 93, 101, 109, 119,
    141, 157, 165, 177, 182, 188, 202, 208, 232, 248, 263, 269, 294, 310, 321,
    327, 331, 342, 372, 374, 376, 391, 400, 405, 409, 415, 422, 429, 432, 440,
    447, 450, 454, 458, 471, 487, 492, 497, 501, 507, 516, 524, 532, 540, 547,
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
  public PACKAGE_NAME(): TerminalNode {
    return this.getToken(CircomParser.PACKAGE_NAME, 0);
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
