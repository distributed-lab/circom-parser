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
  public static readonly VERSION = 1;
  public static readonly SIGNAL_TYPE = 2;
  public static readonly SIGNAL = 3;
  public static readonly INPUT = 4;
  public static readonly OUTPUT = 5;
  public static readonly PUBLIC = 6;
  public static readonly TEMPLATE = 7;
  public static readonly COMPONENT = 8;
  public static readonly VAR = 9;
  public static readonly FUNCTION = 10;
  public static readonly RETURN = 11;
  public static readonly IF = 12;
  public static readonly ELSE = 13;
  public static readonly FOR = 14;
  public static readonly WHILE = 15;
  public static readonly DO = 16;
  public static readonly LOG = 17;
  public static readonly ASSERT = 18;
  public static readonly INCLUDE = 19;
  public static readonly CUSTOM = 20;
  public static readonly PRAGMA = 21;
  public static readonly CIRCOM = 22;
  public static readonly CUSTOM_TEMPLATES = 23;
  public static readonly MAIN = 24;
  public static readonly PARALLEL = 25;
  public static readonly LP = 26;
  public static readonly RP = 27;
  public static readonly LB = 28;
  public static readonly RB = 29;
  public static readonly LC = 30;
  public static readonly RC = 31;
  public static readonly COLON = 32;
  public static readonly SEMICOLON = 33;
  public static readonly DOT = 34;
  public static readonly COMMA = 35;
  public static readonly ASSIGNMENT = 36;
  public static readonly ASSIGNMENT_OP = 37;
  public static readonly SELF_OP = 38;
  public static readonly LEFT_ASSIGNMENT = 39;
  public static readonly RIGHT_ASSIGNMENT = 40;
  public static readonly CONSTRAINT_EQ = 41;
  public static readonly QUESTION_MARK = 42;
  public static readonly UNDERSCORE = 43;
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
    "':'",
    "';'",
    "'.'",
    "','",
    "'='",
    null,
    null,
    null,
    null,
    "'==='",
    "'?'",
    "'_'",
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
    "COLON",
    "SEMICOLON",
    "DOT",
    "COMMA",
    "ASSIGNMENT",
    "ASSIGNMENT_OP",
    "SELF_OP",
    "LEFT_ASSIGNMENT",
    "RIGHT_ASSIGNMENT",
    "CONSTRAINT_EQ",
    "QUESTION_MARK",
    "UNDERSCORE",
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
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 21) {
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
        while (_la === 19) {
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
        while (_la === 7 || _la === 10) {
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
        if (_la === 8) {
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
        case 7:
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
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1141299712) !== 0) ||
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
      this.state = 183;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
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
            this.state = 132;
            this.match(CircomParser.SELF_OP);
            this.state = 133;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          localctx = new FuncVarDeclarationContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 134;
            this.varDeclaration();
            this.state = 135;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          localctx = new FuncAssignmentExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 137;
            this.identifier();
            this.state = 138;
            _la = this._input.LA(1);
            if (!(_la === 36 || _la === 37)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 139;
            this.expression(0);
            this.state = 140;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          localctx = new FuncVariadicAssignmentContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 142;
            this.match(CircomParser.LP);
            this.state = 143;
            this.argsWithUnderscore();
            this.state = 144;
            this.match(CircomParser.RP);
            this.state = 145;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 151;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
              case 1:
                {
                  this.state = 146;
                  this.match(CircomParser.LP);
                  this.state = 147;
                  this.expressionList();
                  this.state = 148;
                  this.match(CircomParser.RP);
                }
                break;
              case 2:
                {
                  this.state = 150;
                  this.expression(0);
                }
                break;
            }
            this.state = 153;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          localctx = new IfFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 155;
            this.match(CircomParser.IF);
            this.state = 156;
            this.parExpression();
            this.state = 157;
            this.functionStmt();
            this.state = 160;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
              case 1:
                {
                  this.state = 158;
                  this.match(CircomParser.ELSE);
                  this.state = 159;
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
            this.state = 162;
            this.match(CircomParser.WHILE);
            this.state = 163;
            this.parExpression();
            this.state = 164;
            this.functionStmt();
          }
          break;
        case 8:
          localctx = new ForFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 166;
            this.match(CircomParser.FOR);
            this.state = 167;
            this.match(CircomParser.LP);
            this.state = 168;
            this.forControl();
            this.state = 169;
            this.match(CircomParser.RP);
            this.state = 170;
            this.functionStmt();
          }
          break;
        case 9:
          localctx = new ReturnFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 172;
            this.match(CircomParser.RETURN);
            this.state = 173;
            this.expression(0);
            this.state = 174;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          localctx = new AssertFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 176;
            this.match(CircomParser.ASSERT);
            this.state = 177;
            this.parExpression();
            this.state = 178;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          localctx = new LogFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 180;
            this.logStmt();
            this.state = 181;
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
        this.state = 185;
        this.match(CircomParser.TEMPLATE);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 20) {
          {
            this.state = 186;
            this.match(CircomParser.CUSTOM);
          }
        }

        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 25) {
          {
            this.state = 189;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 192;
        this.match(CircomParser.ID);
        this.state = 193;
        this.match(CircomParser.LP);
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 66) {
          {
            this.state = 194;
            this.args();
          }
        }

        this.state = 197;
        this.match(CircomParser.RP);
        this.state = 198;
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
        this.state = 200;
        this.match(CircomParser.LC);
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1443287816) !== 0) ||
          (((_la - 43) & ~0x1f) === 0 && ((1 << (_la - 43)) & 25166343) !== 0)
        ) {
          {
            {
              this.state = 201;
              this.templateStmt();
            }
          }
          this.state = 206;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 207;
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
        this.state = 209;
        this.match(CircomParser.COMPONENT);
        this.state = 210;
        this.match(CircomParser.MAIN);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 30) {
          {
            this.state = 211;
            this.publicInputsList();
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
          ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 12583171) !== 0)
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
        this.state = 223;
        this.match(CircomParser.LC);
        this.state = 224;
        this.match(CircomParser.PUBLIC);
        this.state = 225;
        this.match(CircomParser.LB);
        this.state = 226;
        this.args();
        this.state = 227;
        this.match(CircomParser.RB);
        this.state = 228;
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
      this.state = 364;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 230;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 231;
            this.match(CircomParser.ID);
            this.state = 232;
            this.match(CircomParser.SELF_OP);
            this.state = 233;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 234;
            this.varDeclaration();
            this.state = 235;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 237;
            this.signalDeclaration();
            this.state = 238;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 240;
            this.componentDeclaration();
            this.state = 241;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 243;
            this.blockInstantiation();
            this.state = 244;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 246;
            this.identifier();
            this.state = 247;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 248;
            this.expression(0);
            this.state = 249;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 251;
            this.expression(0);
            this.state = 252;
            this.match(CircomParser.CONSTRAINT_EQ);
            this.state = 253;
            this.expression(0);
            this.state = 254;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 256;
            this.element();
            this.state = 257;
            _la = this._input.LA(1);
            if (!(_la === 37 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 258;
            this.expression(0);
            this.state = 259;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 261;
            this.match(CircomParser.LP);
            this.state = 262;
            this.element();
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 263;
                  this.match(CircomParser.COMMA);
                  this.state = 264;
                  this.element();
                }
              }
              this.state = 269;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 270;
            this.match(CircomParser.RP);
            this.state = 271;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 272;
            this.match(CircomParser.LP);
            this.state = 273;
            this.expression(0);
            this.state = 278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 274;
                  this.match(CircomParser.COMMA);
                  this.state = 275;
                  this.expression(0);
                }
              }
              this.state = 280;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 281;
            this.match(CircomParser.RP);
            this.state = 282;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 284;
            this.expression(0);
            this.state = 285;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 286;
            this.element();
            this.state = 287;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 289;
            this.expression(0);
            this.state = 290;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 291;
            this.match(CircomParser.LP);
            this.state = 292;
            this.element();
            this.state = 297;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 293;
                  this.match(CircomParser.COMMA);
                  this.state = 294;
                  this.element();
                }
              }
              this.state = 299;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 300;
            this.match(CircomParser.RP);
            this.state = 301;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 303;
            this.match(CircomParser.UNDERSCORE);
            this.state = 304;
            _la = this._input.LA(1);
            if (!(_la === 36 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 307;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 305;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 306;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 309;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 313;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
              case 1:
                {
                  this.state = 311;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 312;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 315;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 316;
            this.match(CircomParser.UNDERSCORE);
            this.state = 317;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 319;
            this.match(CircomParser.LP);
            this.state = 320;
            this.argsWithUnderscore();
            this.state = 321;
            this.match(CircomParser.RP);
            this.state = 322;
            _la = this._input.LA(1);
            if (!(_la === 36 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 329;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
              case 1:
                {
                  this.state = 323;
                  this.match(CircomParser.LP);
                  this.state = 324;
                  this.expressionList();
                  this.state = 325;
                  this.match(CircomParser.RP);
                }
                break;
              case 2:
                {
                  this.state = 327;
                  this.blockInstantiation();
                }
                break;
              case 3:
                {
                  this.state = 328;
                  this.expression(0);
                }
                break;
            }
            this.state = 331;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 333;
            this.blockInstantiation();
            this.state = 334;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 335;
            this.match(CircomParser.LP);
            this.state = 336;
            this.argsWithUnderscore();
            this.state = 337;
            this.match(CircomParser.RP);
            this.state = 338;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 340;
            this.match(CircomParser.IF);
            this.state = 341;
            this.parExpression();
            this.state = 342;
            this.templateStmt();
            this.state = 345;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
              case 1:
                {
                  this.state = 343;
                  this.match(CircomParser.ELSE);
                  this.state = 344;
                  this.templateStmt();
                }
                break;
            }
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 347;
            this.match(CircomParser.WHILE);
            this.state = 348;
            this.parExpression();
            this.state = 349;
            this.templateStmt();
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 351;
            this.match(CircomParser.FOR);
            this.state = 352;
            this.match(CircomParser.LP);
            this.state = 353;
            this.forControl();
            this.state = 354;
            this.match(CircomParser.RP);
            this.state = 355;
            this.templateStmt();
          }
          break;
        case 20:
          this.enterOuterAlt(localctx, 20);
          {
            this.state = 357;
            this.match(CircomParser.ASSERT);
            this.state = 358;
            this.parExpression();
            this.state = 359;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 21:
          this.enterOuterAlt(localctx, 21);
          {
            this.state = 361;
            this.logStmt();
            this.state = 362;
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
          this.state = 366;
          this.identifier();
          this.state = 369;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 34) {
            {
              this.state = 367;
              this.match(CircomParser.DOT);
              this.state = 368;
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
        this.state = 371;
        this.forInit();
        this.state = 372;
        this.match(CircomParser.SEMICOLON);
        this.state = 373;
        this.expression(0);
        this.state = 374;
        this.match(CircomParser.SEMICOLON);
        this.state = 375;
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
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 9) {
          {
            this.state = 377;
            this.match(CircomParser.VAR);
          }
        }

        this.state = 380;
        this.identifier();
        this.state = 383;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 36) {
          {
            this.state = 381;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 382;
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
      this.state = 393;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 66:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 385;
            this.match(CircomParser.ID);
            this.state = 389;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 38:
                {
                  this.state = 386;
                  this.match(CircomParser.SELF_OP);
                }
                break;
              case 36:
              case 37:
                {
                  {
                    this.state = 387;
                    _la = this._input.LA(1);
                    if (!(_la === 36 || _la === 37)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 388;
                    this.expression(0);
                  }
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case 38:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 391;
            this.match(CircomParser.SELF_OP);
            this.state = 392;
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
        this.state = 395;
        this.match(CircomParser.LP);
        this.state = 396;
        this.expression(0);
        this.state = 397;
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
        this.state = 404;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 30, this._ctx)) {
          case 1:
            {
              localctx = new PrimaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 400;
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
              this.state = 401;
              this.blockInstantiation();
            }
            break;
          case 3:
            {
              localctx = new UnaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 402;
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
              this.state = 403;
              this.expression(7);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 438;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 436;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 32, this._ctx)
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
                    this.state = 406;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 407;
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
                    this.state = 408;
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
                    this.state = 409;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 410;
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
                    this.state = 411;
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
                    this.state = 412;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 413;
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
                    this.state = 414;
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
                    this.state = 415;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 416;
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
                    this.state = 417;
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
                    this.state = 418;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 419;
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
                    this.state = 420;
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
                    this.state = 421;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)",
                      );
                    }
                    this.state = 422;
                    this.match(CircomParser.QUESTION_MARK);
                    this.state = 423;
                    this.expression(0);
                    this.state = 424;
                    this.match(CircomParser.COLON);
                    this.state = 425;
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
                    this.state = 427;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 428;
                    this.match(CircomParser.DOT);
                    this.state = 429;
                    this.match(CircomParser.ID);
                    this.state = 434;
                    this._errHandler.sync(this);
                    switch (
                      this._interp.adaptivePredict(this._input, 31, this._ctx)
                    ) {
                      case 1:
                        {
                          this.state = 430;
                          this.match(CircomParser.LB);
                          this.state = 431;
                          this.expression(0);
                          this.state = 432;
                          this.match(CircomParser.RB);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
          }
          this.state = 440;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
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
      this.state = 453;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 441;
            this.match(CircomParser.LP);
            this.state = 442;
            this.expression(0);
            this.state = 443;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 445;
            this.match(CircomParser.LB);
            this.state = 446;
            this.expressionList();
            this.state = 447;
            this.match(CircomParser.RB);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 449;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 450;
            this.identifier();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 451;
            this.args();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 452;
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
        this.state = 455;
        this.match(CircomParser.LOG);
        this.state = 456;
        this.match(CircomParser.LP);
        this.state = 471;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 46137603) !== 0)
        ) {
          {
            this.state = 459;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 69:
                {
                  this.state = 457;
                  this.match(CircomParser.STRING);
                }
                break;
              case 25:
              case 26:
              case 28:
              case 44:
              case 45:
              case 52:
              case 66:
              case 67:
                {
                  this.state = 458;
                  this.expression(0);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 468;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 461;
                  this.match(CircomParser.COMMA);
                  this.state = 464;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case 69:
                      {
                        this.state = 462;
                        this.match(CircomParser.STRING);
                      }
                      break;
                    case 25:
                    case 26:
                    case 28:
                    case 44:
                    case 45:
                    case 52:
                    case 66:
                    case 67:
                      {
                        this.state = 463;
                        this.expression(0);
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                }
              }
              this.state = 470;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 473;
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
        this.state = 475;
        this.match(CircomParser.COMPONENT);
        this.state = 476;
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
        this.state = 478;
        this.componentDefinition();
        this.state = 482;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 28) {
          {
            {
              this.state = 479;
              this.arrayDimension();
            }
          }
          this.state = 484;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 487;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 36) {
          {
            this.state = 485;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 486;
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
        this.state = 489;
        this.match(CircomParser.SIGNAL);
        this.state = 491;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 2) {
          {
            this.state = 490;
            this.match(CircomParser.SIGNAL_TYPE);
          }
        }

        this.state = 494;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 30) {
          {
            this.state = 493;
            this.tagList();
          }
        }

        this.state = 496;
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
        this.state = 498;
        this.match(CircomParser.LC);
        this.state = 499;
        this.args();
        this.state = 500;
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
      this.state = 515;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 502;
            this.signalDefinition();
            this.state = 505;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 39) {
              {
                this.state = 503;
                this.match(CircomParser.LEFT_ASSIGNMENT);
                this.state = 504;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 507;
            this.signalDefinition();
            this.state = 512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 508;
                  this.match(CircomParser.COMMA);
                  this.state = 509;
                  this.identifier();
                }
              }
              this.state = 514;
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
      this.state = 531;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 517;
            this.match(CircomParser.VAR);
            this.state = 518;
            this.identifier();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 519;
            this.match(CircomParser.VAR);
            this.state = 520;
            this.match(CircomParser.LP);
            this.state = 521;
            this.identifier();
            this.state = 526;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 522;
                  this.match(CircomParser.COMMA);
                  this.state = 523;
                  this.identifier();
                }
              }
              this.state = 528;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 529;
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
      this.state = 546;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 533;
            this.varDefinition();
            this.state = 536;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 36) {
              {
                this.state = 534;
                this.match(CircomParser.ASSIGNMENT);
                this.state = 535;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 538;
            this.varDefinition();
            this.state = 543;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 539;
                  this.match(CircomParser.COMMA);
                  this.state = 540;
                  this.identifier();
                }
              }
              this.state = 545;
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
      this.state = 554;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 51, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 548;
            this.match(CircomParser.LP);
            this.state = 549;
            this.expressionList();
            this.state = 550;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 552;
            this.expression(0);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 553;
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
      this.state = 592;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 55, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 556;
            this.match(CircomParser.LP);
            this.state = 558;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
              (((_la - 44) & ~0x1f) === 0 &&
                ((1 << (_la - 44)) & 12583171) !== 0)
            ) {
              {
                this.state = 557;
                this.expressionList();
              }
            }

            this.state = 560;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 561;
            this.match(CircomParser.LP);
            this.state = 562;
            this.match(CircomParser.ID);
            this.state = 563;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 564;
            this.expression(0);
            this.state = 571;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 565;
                  this.match(CircomParser.COMMA);
                  this.state = 566;
                  this.match(CircomParser.ID);
                  this.state = 567;
                  this.match(CircomParser.LEFT_ASSIGNMENT);
                  this.state = 568;
                  this.expression(0);
                }
              }
              this.state = 573;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 574;
            this.match(CircomParser.RP);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 576;
            this.match(CircomParser.LP);
            this.state = 577;
            this.expression(0);
            this.state = 578;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 579;
            this.match(CircomParser.ID);
            this.state = 587;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 580;
                  this.match(CircomParser.COMMA);
                  this.state = 581;
                  this.expression(0);
                  this.state = 582;
                  this.match(CircomParser.RIGHT_ASSIGNMENT);
                  this.state = 583;
                  this.match(CircomParser.ID);
                }
              }
              this.state = 589;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 590;
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
        this.state = 595;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 25) {
          {
            this.state = 594;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 597;
        this.match(CircomParser.ID);
        this.state = 598;
        this.match(CircomParser.LP);
        this.state = 600;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 12583171) !== 0)
        ) {
          {
            this.state = 599;
            this.expressionList();
          }
        }

        this.state = 602;
        this.match(CircomParser.RP);
        this.state = 604;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 58, this._ctx)) {
          case 1:
            {
              this.state = 603;
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
        this.state = 606;
        this.expression(0);
        this.state = 611;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 35) {
          {
            {
              this.state = 607;
              this.match(CircomParser.COMMA);
              this.state = 608;
              this.expression(0);
            }
          }
          this.state = 613;
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
        this.state = 614;
        this.match(CircomParser.ID);
        this.state = 618;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 615;
                this.arrayDimension();
              }
            }
          }
          this.state = 620;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
        }
        this.state = 623;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 61, this._ctx)) {
          case 1:
            {
              this.state = 621;
              this.match(CircomParser.DOT);
              this.state = 622;
              this.match(CircomParser.ID);
            }
            break;
        }
        this.state = 628;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 625;
                this.arrayDimension();
              }
            }
          }
          this.state = 630;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
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
        this.state = 631;
        this.match(CircomParser.LB);
        this.state = 632;
        this.expression(0);
        this.state = 633;
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
        this.state = 635;
        this.match(CircomParser.ID);
        this.state = 640;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 636;
                this.match(CircomParser.COMMA);
                this.state = 637;
                this.match(CircomParser.ID);
              }
            }
          }
          this.state = 642;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
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
        this.state = 643;
        _la = this._input.LA(1);
        if (!(_la === 43 || _la === 66)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 648;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 35) {
          {
            {
              this.state = 644;
              this.match(CircomParser.COMMA);
              this.state = 645;
              _la = this._input.LA(1);
              if (!(_la === 43 || _la === 66)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          this.state = 650;
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
        this.state = 651;
        this.match(CircomParser.NUMBER);
        this.state = 656;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 652;
                this.match(CircomParser.COMMA);
                this.state = 653;
                this.match(CircomParser.NUMBER);
              }
            }
          }
          this.state = 658;
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
    4, 1, 72, 660, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
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
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 152, 8, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 161, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 3, 6, 184, 8, 6, 1, 7, 1, 7, 3, 7, 188, 8, 7, 1, 7, 3, 7,
    191, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 196, 8, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8,
    5, 8, 203, 8, 8, 10, 8, 12, 8, 206, 9, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 3,
    9, 213, 8, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 219, 8, 9, 1, 9, 1, 9, 1, 9, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 266, 8,
    11, 10, 11, 12, 11, 269, 9, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5,
    11, 277, 8, 11, 10, 11, 12, 11, 280, 9, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11,
    296, 8, 11, 10, 11, 12, 11, 299, 9, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 308, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 314, 8,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 3, 11, 330, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11,
    346, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 365, 8, 11,
    1, 12, 1, 12, 1, 12, 3, 12, 370, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 14, 3, 14, 379, 8, 14, 1, 14, 1, 14, 1, 14, 3, 14, 384, 8, 14, 1,
    15, 1, 15, 1, 15, 1, 15, 3, 15, 390, 8, 15, 1, 15, 1, 15, 3, 15, 394, 8, 15,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 405,
    8, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 435, 8, 17, 5, 17,
    437, 8, 17, 10, 17, 12, 17, 440, 9, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18,
    1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 454, 8, 18, 1, 19,
    1, 19, 1, 19, 1, 19, 3, 19, 460, 8, 19, 1, 19, 1, 19, 1, 19, 3, 19, 465, 8,
    19, 5, 19, 467, 8, 19, 10, 19, 12, 19, 470, 9, 19, 3, 19, 472, 8, 19, 1, 19,
    1, 19, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 5, 21, 481, 8, 21, 10, 21, 12, 21,
    484, 9, 21, 1, 21, 1, 21, 3, 21, 488, 8, 21, 1, 22, 1, 22, 3, 22, 492, 8,
    22, 1, 22, 3, 22, 495, 8, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1,
    24, 1, 24, 1, 24, 3, 24, 506, 8, 24, 1, 24, 1, 24, 1, 24, 5, 24, 511, 8, 24,
    10, 24, 12, 24, 514, 9, 24, 3, 24, 516, 8, 24, 1, 25, 1, 25, 1, 25, 1, 25,
    1, 25, 1, 25, 1, 25, 5, 25, 525, 8, 25, 10, 25, 12, 25, 528, 9, 25, 1, 25,
    1, 25, 3, 25, 532, 8, 25, 1, 26, 1, 26, 1, 26, 3, 26, 537, 8, 26, 1, 26, 1,
    26, 1, 26, 5, 26, 542, 8, 26, 10, 26, 12, 26, 545, 9, 26, 3, 26, 547, 8, 26,
    1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 555, 8, 27, 1, 28, 1, 28,
    3, 28, 559, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28,
    1, 28, 5, 28, 570, 8, 28, 10, 28, 12, 28, 573, 9, 28, 1, 28, 1, 28, 1, 28,
    1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 5, 28, 586, 8, 28,
    10, 28, 12, 28, 589, 9, 28, 1, 28, 1, 28, 3, 28, 593, 8, 28, 1, 29, 3, 29,
    596, 8, 29, 1, 29, 1, 29, 1, 29, 3, 29, 601, 8, 29, 1, 29, 1, 29, 3, 29,
    605, 8, 29, 1, 30, 1, 30, 1, 30, 5, 30, 610, 8, 30, 10, 30, 12, 30, 613, 9,
    30, 1, 31, 1, 31, 5, 31, 617, 8, 31, 10, 31, 12, 31, 620, 9, 31, 1, 31, 1,
    31, 3, 31, 624, 8, 31, 1, 31, 5, 31, 627, 8, 31, 10, 31, 12, 31, 630, 9, 31,
    1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 5, 33, 639, 8, 33, 10, 33,
    12, 33, 642, 9, 33, 1, 34, 1, 34, 1, 34, 5, 34, 647, 8, 34, 10, 34, 12, 34,
    650, 9, 34, 1, 35, 1, 35, 1, 35, 5, 35, 655, 8, 35, 10, 35, 12, 35, 658, 9,
    35, 1, 35, 0, 1, 34, 36, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26,
    28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,
    66, 68, 70, 0, 10, 1, 0, 36, 37, 2, 0, 37, 37, 39, 39, 2, 0, 36, 36, 39, 39,
    2, 0, 44, 45, 52, 52, 1, 0, 46, 50, 1, 0, 51, 52, 1, 0, 53, 54, 1, 0, 55,
    57, 1, 0, 58, 65, 2, 0, 43, 43, 66, 66, 730, 0, 75, 1, 0, 0, 0, 2, 102, 1,
    0, 0, 0, 4, 104, 1, 0, 0, 0, 6, 110, 1, 0, 0, 0, 8, 112, 1, 0, 0, 0, 10,
    121, 1, 0, 0, 0, 12, 183, 1, 0, 0, 0, 14, 185, 1, 0, 0, 0, 16, 200, 1, 0, 0,
    0, 18, 209, 1, 0, 0, 0, 20, 223, 1, 0, 0, 0, 22, 364, 1, 0, 0, 0, 24, 366,
    1, 0, 0, 0, 26, 371, 1, 0, 0, 0, 28, 378, 1, 0, 0, 0, 30, 393, 1, 0, 0, 0,
    32, 395, 1, 0, 0, 0, 34, 404, 1, 0, 0, 0, 36, 453, 1, 0, 0, 0, 38, 455, 1,
    0, 0, 0, 40, 475, 1, 0, 0, 0, 42, 478, 1, 0, 0, 0, 44, 489, 1, 0, 0, 0, 46,
    498, 1, 0, 0, 0, 48, 515, 1, 0, 0, 0, 50, 531, 1, 0, 0, 0, 52, 546, 1, 0, 0,
    0, 54, 554, 1, 0, 0, 0, 56, 592, 1, 0, 0, 0, 58, 595, 1, 0, 0, 0, 60, 606,
    1, 0, 0, 0, 62, 614, 1, 0, 0, 0, 64, 631, 1, 0, 0, 0, 66, 635, 1, 0, 0, 0,
    68, 643, 1, 0, 0, 0, 70, 651, 1, 0, 0, 0, 72, 74, 3, 2, 1, 0, 73, 72, 1, 0,
    0, 0, 74, 77, 1, 0, 0, 0, 75, 73, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 81, 1,
    0, 0, 0, 77, 75, 1, 0, 0, 0, 78, 80, 3, 4, 2, 0, 79, 78, 1, 0, 0, 0, 80, 83,
    1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 87, 1, 0, 0, 0, 83,
    81, 1, 0, 0, 0, 84, 86, 3, 6, 3, 0, 85, 84, 1, 0, 0, 0, 86, 89, 1, 0, 0, 0,
    87, 85, 1, 0, 0, 0, 87, 88, 1, 0, 0, 0, 88, 91, 1, 0, 0, 0, 89, 87, 1, 0, 0,
    0, 90, 92, 3, 18, 9, 0, 91, 90, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 93, 1,
    0, 0, 0, 93, 94, 5, 0, 0, 1, 94, 1, 1, 0, 0, 0, 95, 96, 5, 21, 0, 0, 96, 97,
    5, 22, 0, 0, 97, 98, 5, 1, 0, 0, 98, 103, 5, 33, 0, 0, 99, 100, 5, 21, 0, 0,
    100, 101, 5, 23, 0, 0, 101, 103, 5, 33, 0, 0, 102, 95, 1, 0, 0, 0, 102, 99,
    1, 0, 0, 0, 103, 3, 1, 0, 0, 0, 104, 105, 5, 19, 0, 0, 105, 106, 5, 69, 0,
    0, 106, 107, 5, 33, 0, 0, 107, 5, 1, 0, 0, 0, 108, 111, 3, 8, 4, 0, 109,
    111, 3, 14, 7, 0, 110, 108, 1, 0, 0, 0, 110, 109, 1, 0, 0, 0, 111, 7, 1, 0,
    0, 0, 112, 113, 5, 10, 0, 0, 113, 114, 5, 66, 0, 0, 114, 116, 5, 26, 0, 0,
    115, 117, 3, 66, 33, 0, 116, 115, 1, 0, 0, 0, 116, 117, 1, 0, 0, 0, 117,
    118, 1, 0, 0, 0, 118, 119, 5, 27, 0, 0, 119, 120, 3, 10, 5, 0, 120, 9, 1, 0,
    0, 0, 121, 125, 5, 30, 0, 0, 122, 124, 3, 12, 6, 0, 123, 122, 1, 0, 0, 0,
    124, 127, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 125, 126, 1, 0, 0, 0, 126, 128,
    1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 128, 129, 5, 31, 0, 0, 129, 11, 1, 0, 0,
    0, 130, 184, 3, 10, 5, 0, 131, 132, 5, 66, 0, 0, 132, 133, 5, 38, 0, 0, 133,
    184, 5, 33, 0, 0, 134, 135, 3, 52, 26, 0, 135, 136, 5, 33, 0, 0, 136, 184,
    1, 0, 0, 0, 137, 138, 3, 62, 31, 0, 138, 139, 7, 0, 0, 0, 139, 140, 3, 34,
    17, 0, 140, 141, 5, 33, 0, 0, 141, 184, 1, 0, 0, 0, 142, 143, 5, 26, 0, 0,
    143, 144, 3, 68, 34, 0, 144, 145, 5, 27, 0, 0, 145, 151, 5, 36, 0, 0, 146,
    147, 5, 26, 0, 0, 147, 148, 3, 60, 30, 0, 148, 149, 5, 27, 0, 0, 149, 152,
    1, 0, 0, 0, 150, 152, 3, 34, 17, 0, 151, 146, 1, 0, 0, 0, 151, 150, 1, 0, 0,
    0, 152, 153, 1, 0, 0, 0, 153, 154, 5, 33, 0, 0, 154, 184, 1, 0, 0, 0, 155,
    156, 5, 12, 0, 0, 156, 157, 3, 32, 16, 0, 157, 160, 3, 12, 6, 0, 158, 159,
    5, 13, 0, 0, 159, 161, 3, 12, 6, 0, 160, 158, 1, 0, 0, 0, 160, 161, 1, 0, 0,
    0, 161, 184, 1, 0, 0, 0, 162, 163, 5, 15, 0, 0, 163, 164, 3, 32, 16, 0, 164,
    165, 3, 12, 6, 0, 165, 184, 1, 0, 0, 0, 166, 167, 5, 14, 0, 0, 167, 168, 5,
    26, 0, 0, 168, 169, 3, 26, 13, 0, 169, 170, 5, 27, 0, 0, 170, 171, 3, 12, 6,
    0, 171, 184, 1, 0, 0, 0, 172, 173, 5, 11, 0, 0, 173, 174, 3, 34, 17, 0, 174,
    175, 5, 33, 0, 0, 175, 184, 1, 0, 0, 0, 176, 177, 5, 18, 0, 0, 177, 178, 3,
    32, 16, 0, 178, 179, 5, 33, 0, 0, 179, 184, 1, 0, 0, 0, 180, 181, 3, 38, 19,
    0, 181, 182, 5, 33, 0, 0, 182, 184, 1, 0, 0, 0, 183, 130, 1, 0, 0, 0, 183,
    131, 1, 0, 0, 0, 183, 134, 1, 0, 0, 0, 183, 137, 1, 0, 0, 0, 183, 142, 1, 0,
    0, 0, 183, 155, 1, 0, 0, 0, 183, 162, 1, 0, 0, 0, 183, 166, 1, 0, 0, 0, 183,
    172, 1, 0, 0, 0, 183, 176, 1, 0, 0, 0, 183, 180, 1, 0, 0, 0, 184, 13, 1, 0,
    0, 0, 185, 187, 5, 7, 0, 0, 186, 188, 5, 20, 0, 0, 187, 186, 1, 0, 0, 0,
    187, 188, 1, 0, 0, 0, 188, 190, 1, 0, 0, 0, 189, 191, 5, 25, 0, 0, 190, 189,
    1, 0, 0, 0, 190, 191, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192, 193, 5, 66, 0,
    0, 193, 195, 5, 26, 0, 0, 194, 196, 3, 66, 33, 0, 195, 194, 1, 0, 0, 0, 195,
    196, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197, 198, 5, 27, 0, 0, 198, 199, 3,
    16, 8, 0, 199, 15, 1, 0, 0, 0, 200, 204, 5, 30, 0, 0, 201, 203, 3, 22, 11,
    0, 202, 201, 1, 0, 0, 0, 203, 206, 1, 0, 0, 0, 204, 202, 1, 0, 0, 0, 204,
    205, 1, 0, 0, 0, 205, 207, 1, 0, 0, 0, 206, 204, 1, 0, 0, 0, 207, 208, 5,
    31, 0, 0, 208, 17, 1, 0, 0, 0, 209, 210, 5, 8, 0, 0, 210, 212, 5, 24, 0, 0,
    211, 213, 3, 20, 10, 0, 212, 211, 1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213,
    214, 1, 0, 0, 0, 214, 215, 5, 36, 0, 0, 215, 216, 5, 66, 0, 0, 216, 218, 5,
    26, 0, 0, 217, 219, 3, 60, 30, 0, 218, 217, 1, 0, 0, 0, 218, 219, 1, 0, 0,
    0, 219, 220, 1, 0, 0, 0, 220, 221, 5, 27, 0, 0, 221, 222, 5, 33, 0, 0, 222,
    19, 1, 0, 0, 0, 223, 224, 5, 30, 0, 0, 224, 225, 5, 6, 0, 0, 225, 226, 5,
    28, 0, 0, 226, 227, 3, 66, 33, 0, 227, 228, 5, 29, 0, 0, 228, 229, 5, 31, 0,
    0, 229, 21, 1, 0, 0, 0, 230, 365, 3, 16, 8, 0, 231, 232, 5, 66, 0, 0, 232,
    233, 5, 38, 0, 0, 233, 365, 5, 33, 0, 0, 234, 235, 3, 52, 26, 0, 235, 236,
    5, 33, 0, 0, 236, 365, 1, 0, 0, 0, 237, 238, 3, 48, 24, 0, 238, 239, 5, 33,
    0, 0, 239, 365, 1, 0, 0, 0, 240, 241, 3, 42, 21, 0, 241, 242, 5, 33, 0, 0,
    242, 365, 1, 0, 0, 0, 243, 244, 3, 58, 29, 0, 244, 245, 5, 33, 0, 0, 245,
    365, 1, 0, 0, 0, 246, 247, 3, 62, 31, 0, 247, 248, 5, 36, 0, 0, 248, 249, 3,
    34, 17, 0, 249, 250, 5, 33, 0, 0, 250, 365, 1, 0, 0, 0, 251, 252, 3, 34, 17,
    0, 252, 253, 5, 41, 0, 0, 253, 254, 3, 34, 17, 0, 254, 255, 5, 33, 0, 0,
    255, 365, 1, 0, 0, 0, 256, 257, 3, 24, 12, 0, 257, 258, 7, 1, 0, 0, 258,
    259, 3, 34, 17, 0, 259, 260, 5, 33, 0, 0, 260, 365, 1, 0, 0, 0, 261, 262, 5,
    26, 0, 0, 262, 267, 3, 24, 12, 0, 263, 264, 5, 35, 0, 0, 264, 266, 3, 24,
    12, 0, 265, 263, 1, 0, 0, 0, 266, 269, 1, 0, 0, 0, 267, 265, 1, 0, 0, 0,
    267, 268, 1, 0, 0, 0, 268, 270, 1, 0, 0, 0, 269, 267, 1, 0, 0, 0, 270, 271,
    5, 27, 0, 0, 271, 272, 5, 39, 0, 0, 272, 273, 5, 26, 0, 0, 273, 278, 3, 34,
    17, 0, 274, 275, 5, 35, 0, 0, 275, 277, 3, 34, 17, 0, 276, 274, 1, 0, 0, 0,
    277, 280, 1, 0, 0, 0, 278, 276, 1, 0, 0, 0, 278, 279, 1, 0, 0, 0, 279, 281,
    1, 0, 0, 0, 280, 278, 1, 0, 0, 0, 281, 282, 5, 27, 0, 0, 282, 283, 5, 33, 0,
    0, 283, 365, 1, 0, 0, 0, 284, 285, 3, 34, 17, 0, 285, 286, 5, 40, 0, 0, 286,
    287, 3, 24, 12, 0, 287, 288, 5, 33, 0, 0, 288, 365, 1, 0, 0, 0, 289, 290, 3,
    34, 17, 0, 290, 291, 5, 40, 0, 0, 291, 292, 5, 26, 0, 0, 292, 297, 3, 24,
    12, 0, 293, 294, 5, 35, 0, 0, 294, 296, 3, 24, 12, 0, 295, 293, 1, 0, 0, 0,
    296, 299, 1, 0, 0, 0, 297, 295, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0, 298, 300,
    1, 0, 0, 0, 299, 297, 1, 0, 0, 0, 300, 301, 5, 27, 0, 0, 301, 302, 5, 33, 0,
    0, 302, 365, 1, 0, 0, 0, 303, 304, 5, 43, 0, 0, 304, 307, 7, 2, 0, 0, 305,
    308, 3, 34, 17, 0, 306, 308, 3, 58, 29, 0, 307, 305, 1, 0, 0, 0, 307, 306,
    1, 0, 0, 0, 308, 309, 1, 0, 0, 0, 309, 310, 5, 33, 0, 0, 310, 365, 1, 0, 0,
    0, 311, 314, 3, 34, 17, 0, 312, 314, 3, 58, 29, 0, 313, 311, 1, 0, 0, 0,
    313, 312, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315, 316, 5, 40, 0, 0, 316, 317,
    5, 43, 0, 0, 317, 318, 5, 33, 0, 0, 318, 365, 1, 0, 0, 0, 319, 320, 5, 26,
    0, 0, 320, 321, 3, 68, 34, 0, 321, 322, 5, 27, 0, 0, 322, 329, 7, 2, 0, 0,
    323, 324, 5, 26, 0, 0, 324, 325, 3, 60, 30, 0, 325, 326, 5, 27, 0, 0, 326,
    330, 1, 0, 0, 0, 327, 330, 3, 58, 29, 0, 328, 330, 3, 34, 17, 0, 329, 323,
    1, 0, 0, 0, 329, 327, 1, 0, 0, 0, 329, 328, 1, 0, 0, 0, 330, 331, 1, 0, 0,
    0, 331, 332, 5, 33, 0, 0, 332, 365, 1, 0, 0, 0, 333, 334, 3, 58, 29, 0, 334,
    335, 5, 40, 0, 0, 335, 336, 5, 26, 0, 0, 336, 337, 3, 68, 34, 0, 337, 338,
    5, 27, 0, 0, 338, 339, 5, 33, 0, 0, 339, 365, 1, 0, 0, 0, 340, 341, 5, 12,
    0, 0, 341, 342, 3, 32, 16, 0, 342, 345, 3, 22, 11, 0, 343, 344, 5, 13, 0, 0,
    344, 346, 3, 22, 11, 0, 345, 343, 1, 0, 0, 0, 345, 346, 1, 0, 0, 0, 346,
    365, 1, 0, 0, 0, 347, 348, 5, 15, 0, 0, 348, 349, 3, 32, 16, 0, 349, 350, 3,
    22, 11, 0, 350, 365, 1, 0, 0, 0, 351, 352, 5, 14, 0, 0, 352, 353, 5, 26, 0,
    0, 353, 354, 3, 26, 13, 0, 354, 355, 5, 27, 0, 0, 355, 356, 3, 22, 11, 0,
    356, 365, 1, 0, 0, 0, 357, 358, 5, 18, 0, 0, 358, 359, 3, 32, 16, 0, 359,
    360, 5, 33, 0, 0, 360, 365, 1, 0, 0, 0, 361, 362, 3, 38, 19, 0, 362, 363, 5,
    33, 0, 0, 363, 365, 1, 0, 0, 0, 364, 230, 1, 0, 0, 0, 364, 231, 1, 0, 0, 0,
    364, 234, 1, 0, 0, 0, 364, 237, 1, 0, 0, 0, 364, 240, 1, 0, 0, 0, 364, 243,
    1, 0, 0, 0, 364, 246, 1, 0, 0, 0, 364, 251, 1, 0, 0, 0, 364, 256, 1, 0, 0,
    0, 364, 261, 1, 0, 0, 0, 364, 284, 1, 0, 0, 0, 364, 289, 1, 0, 0, 0, 364,
    303, 1, 0, 0, 0, 364, 313, 1, 0, 0, 0, 364, 319, 1, 0, 0, 0, 364, 333, 1, 0,
    0, 0, 364, 340, 1, 0, 0, 0, 364, 347, 1, 0, 0, 0, 364, 351, 1, 0, 0, 0, 364,
    357, 1, 0, 0, 0, 364, 361, 1, 0, 0, 0, 365, 23, 1, 0, 0, 0, 366, 369, 3, 62,
    31, 0, 367, 368, 5, 34, 0, 0, 368, 370, 3, 62, 31, 0, 369, 367, 1, 0, 0, 0,
    369, 370, 1, 0, 0, 0, 370, 25, 1, 0, 0, 0, 371, 372, 3, 28, 14, 0, 372, 373,
    5, 33, 0, 0, 373, 374, 3, 34, 17, 0, 374, 375, 5, 33, 0, 0, 375, 376, 3, 30,
    15, 0, 376, 27, 1, 0, 0, 0, 377, 379, 5, 9, 0, 0, 378, 377, 1, 0, 0, 0, 378,
    379, 1, 0, 0, 0, 379, 380, 1, 0, 0, 0, 380, 383, 3, 62, 31, 0, 381, 382, 5,
    36, 0, 0, 382, 384, 3, 54, 27, 0, 383, 381, 1, 0, 0, 0, 383, 384, 1, 0, 0,
    0, 384, 29, 1, 0, 0, 0, 385, 389, 5, 66, 0, 0, 386, 390, 5, 38, 0, 0, 387,
    388, 7, 0, 0, 0, 388, 390, 3, 34, 17, 0, 389, 386, 1, 0, 0, 0, 389, 387, 1,
    0, 0, 0, 390, 394, 1, 0, 0, 0, 391, 392, 5, 38, 0, 0, 392, 394, 5, 66, 0, 0,
    393, 385, 1, 0, 0, 0, 393, 391, 1, 0, 0, 0, 394, 31, 1, 0, 0, 0, 395, 396,
    5, 26, 0, 0, 396, 397, 3, 34, 17, 0, 397, 398, 5, 27, 0, 0, 398, 33, 1, 0,
    0, 0, 399, 400, 6, 17, -1, 0, 400, 405, 3, 36, 18, 0, 401, 405, 3, 58, 29,
    0, 402, 403, 7, 3, 0, 0, 403, 405, 3, 34, 17, 7, 404, 399, 1, 0, 0, 0, 404,
    401, 1, 0, 0, 0, 404, 402, 1, 0, 0, 0, 405, 438, 1, 0, 0, 0, 406, 407, 10,
    6, 0, 0, 407, 408, 7, 4, 0, 0, 408, 437, 3, 34, 17, 7, 409, 410, 10, 5, 0,
    0, 410, 411, 7, 5, 0, 0, 411, 437, 3, 34, 17, 6, 412, 413, 10, 4, 0, 0, 413,
    414, 7, 6, 0, 0, 414, 437, 3, 34, 17, 5, 415, 416, 10, 3, 0, 0, 416, 417, 7,
    7, 0, 0, 417, 437, 3, 34, 17, 4, 418, 419, 10, 2, 0, 0, 419, 420, 7, 8, 0,
    0, 420, 437, 3, 34, 17, 3, 421, 422, 10, 1, 0, 0, 422, 423, 5, 42, 0, 0,
    423, 424, 3, 34, 17, 0, 424, 425, 5, 32, 0, 0, 425, 426, 3, 34, 17, 2, 426,
    437, 1, 0, 0, 0, 427, 428, 10, 8, 0, 0, 428, 429, 5, 34, 0, 0, 429, 434, 5,
    66, 0, 0, 430, 431, 5, 28, 0, 0, 431, 432, 3, 34, 17, 0, 432, 433, 5, 29, 0,
    0, 433, 435, 1, 0, 0, 0, 434, 430, 1, 0, 0, 0, 434, 435, 1, 0, 0, 0, 435,
    437, 1, 0, 0, 0, 436, 406, 1, 0, 0, 0, 436, 409, 1, 0, 0, 0, 436, 412, 1, 0,
    0, 0, 436, 415, 1, 0, 0, 0, 436, 418, 1, 0, 0, 0, 436, 421, 1, 0, 0, 0, 436,
    427, 1, 0, 0, 0, 437, 440, 1, 0, 0, 0, 438, 436, 1, 0, 0, 0, 438, 439, 1, 0,
    0, 0, 439, 35, 1, 0, 0, 0, 440, 438, 1, 0, 0, 0, 441, 442, 5, 26, 0, 0, 442,
    443, 3, 34, 17, 0, 443, 444, 5, 27, 0, 0, 444, 454, 1, 0, 0, 0, 445, 446, 5,
    28, 0, 0, 446, 447, 3, 60, 30, 0, 447, 448, 5, 29, 0, 0, 448, 454, 1, 0, 0,
    0, 449, 454, 5, 67, 0, 0, 450, 454, 3, 62, 31, 0, 451, 454, 3, 66, 33, 0,
    452, 454, 3, 70, 35, 0, 453, 441, 1, 0, 0, 0, 453, 445, 1, 0, 0, 0, 453,
    449, 1, 0, 0, 0, 453, 450, 1, 0, 0, 0, 453, 451, 1, 0, 0, 0, 453, 452, 1, 0,
    0, 0, 454, 37, 1, 0, 0, 0, 455, 456, 5, 17, 0, 0, 456, 471, 5, 26, 0, 0,
    457, 460, 5, 69, 0, 0, 458, 460, 3, 34, 17, 0, 459, 457, 1, 0, 0, 0, 459,
    458, 1, 0, 0, 0, 460, 468, 1, 0, 0, 0, 461, 464, 5, 35, 0, 0, 462, 465, 5,
    69, 0, 0, 463, 465, 3, 34, 17, 0, 464, 462, 1, 0, 0, 0, 464, 463, 1, 0, 0,
    0, 465, 467, 1, 0, 0, 0, 466, 461, 1, 0, 0, 0, 467, 470, 1, 0, 0, 0, 468,
    466, 1, 0, 0, 0, 468, 469, 1, 0, 0, 0, 469, 472, 1, 0, 0, 0, 470, 468, 1, 0,
    0, 0, 471, 459, 1, 0, 0, 0, 471, 472, 1, 0, 0, 0, 472, 473, 1, 0, 0, 0, 473,
    474, 5, 27, 0, 0, 474, 39, 1, 0, 0, 0, 475, 476, 5, 8, 0, 0, 476, 477, 5,
    66, 0, 0, 477, 41, 1, 0, 0, 0, 478, 482, 3, 40, 20, 0, 479, 481, 3, 64, 32,
    0, 480, 479, 1, 0, 0, 0, 481, 484, 1, 0, 0, 0, 482, 480, 1, 0, 0, 0, 482,
    483, 1, 0, 0, 0, 483, 487, 1, 0, 0, 0, 484, 482, 1, 0, 0, 0, 485, 486, 5,
    36, 0, 0, 486, 488, 3, 58, 29, 0, 487, 485, 1, 0, 0, 0, 487, 488, 1, 0, 0,
    0, 488, 43, 1, 0, 0, 0, 489, 491, 5, 3, 0, 0, 490, 492, 5, 2, 0, 0, 491,
    490, 1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492, 494, 1, 0, 0, 0, 493, 495, 3,
    46, 23, 0, 494, 493, 1, 0, 0, 0, 494, 495, 1, 0, 0, 0, 495, 496, 1, 0, 0, 0,
    496, 497, 3, 62, 31, 0, 497, 45, 1, 0, 0, 0, 498, 499, 5, 30, 0, 0, 499,
    500, 3, 66, 33, 0, 500, 501, 5, 31, 0, 0, 501, 47, 1, 0, 0, 0, 502, 505, 3,
    44, 22, 0, 503, 504, 5, 39, 0, 0, 504, 506, 3, 54, 27, 0, 505, 503, 1, 0, 0,
    0, 505, 506, 1, 0, 0, 0, 506, 516, 1, 0, 0, 0, 507, 512, 3, 44, 22, 0, 508,
    509, 5, 35, 0, 0, 509, 511, 3, 62, 31, 0, 510, 508, 1, 0, 0, 0, 511, 514, 1,
    0, 0, 0, 512, 510, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513, 516, 1, 0, 0, 0,
    514, 512, 1, 0, 0, 0, 515, 502, 1, 0, 0, 0, 515, 507, 1, 0, 0, 0, 516, 49,
    1, 0, 0, 0, 517, 518, 5, 9, 0, 0, 518, 532, 3, 62, 31, 0, 519, 520, 5, 9, 0,
    0, 520, 521, 5, 26, 0, 0, 521, 526, 3, 62, 31, 0, 522, 523, 5, 35, 0, 0,
    523, 525, 3, 62, 31, 0, 524, 522, 1, 0, 0, 0, 525, 528, 1, 0, 0, 0, 526,
    524, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 529, 1, 0, 0, 0, 528, 526, 1, 0,
    0, 0, 529, 530, 5, 27, 0, 0, 530, 532, 1, 0, 0, 0, 531, 517, 1, 0, 0, 0,
    531, 519, 1, 0, 0, 0, 532, 51, 1, 0, 0, 0, 533, 536, 3, 50, 25, 0, 534, 535,
    5, 36, 0, 0, 535, 537, 3, 54, 27, 0, 536, 534, 1, 0, 0, 0, 536, 537, 1, 0,
    0, 0, 537, 547, 1, 0, 0, 0, 538, 543, 3, 50, 25, 0, 539, 540, 5, 35, 0, 0,
    540, 542, 3, 62, 31, 0, 541, 539, 1, 0, 0, 0, 542, 545, 1, 0, 0, 0, 543,
    541, 1, 0, 0, 0, 543, 544, 1, 0, 0, 0, 544, 547, 1, 0, 0, 0, 545, 543, 1, 0,
    0, 0, 546, 533, 1, 0, 0, 0, 546, 538, 1, 0, 0, 0, 547, 53, 1, 0, 0, 0, 548,
    549, 5, 26, 0, 0, 549, 550, 3, 60, 30, 0, 550, 551, 5, 27, 0, 0, 551, 555,
    1, 0, 0, 0, 552, 555, 3, 34, 17, 0, 553, 555, 3, 58, 29, 0, 554, 548, 1, 0,
    0, 0, 554, 552, 1, 0, 0, 0, 554, 553, 1, 0, 0, 0, 555, 55, 1, 0, 0, 0, 556,
    558, 5, 26, 0, 0, 557, 559, 3, 60, 30, 0, 558, 557, 1, 0, 0, 0, 558, 559, 1,
    0, 0, 0, 559, 560, 1, 0, 0, 0, 560, 593, 5, 27, 0, 0, 561, 562, 5, 26, 0, 0,
    562, 563, 5, 66, 0, 0, 563, 564, 5, 39, 0, 0, 564, 571, 3, 34, 17, 0, 565,
    566, 5, 35, 0, 0, 566, 567, 5, 66, 0, 0, 567, 568, 5, 39, 0, 0, 568, 570, 3,
    34, 17, 0, 569, 565, 1, 0, 0, 0, 570, 573, 1, 0, 0, 0, 571, 569, 1, 0, 0, 0,
    571, 572, 1, 0, 0, 0, 572, 574, 1, 0, 0, 0, 573, 571, 1, 0, 0, 0, 574, 575,
    5, 27, 0, 0, 575, 593, 1, 0, 0, 0, 576, 577, 5, 26, 0, 0, 577, 578, 3, 34,
    17, 0, 578, 579, 5, 40, 0, 0, 579, 587, 5, 66, 0, 0, 580, 581, 5, 35, 0, 0,
    581, 582, 3, 34, 17, 0, 582, 583, 5, 40, 0, 0, 583, 584, 5, 66, 0, 0, 584,
    586, 1, 0, 0, 0, 585, 580, 1, 0, 0, 0, 586, 589, 1, 0, 0, 0, 587, 585, 1, 0,
    0, 0, 587, 588, 1, 0, 0, 0, 588, 590, 1, 0, 0, 0, 589, 587, 1, 0, 0, 0, 590,
    591, 5, 27, 0, 0, 591, 593, 1, 0, 0, 0, 592, 556, 1, 0, 0, 0, 592, 561, 1,
    0, 0, 0, 592, 576, 1, 0, 0, 0, 593, 57, 1, 0, 0, 0, 594, 596, 5, 25, 0, 0,
    595, 594, 1, 0, 0, 0, 595, 596, 1, 0, 0, 0, 596, 597, 1, 0, 0, 0, 597, 598,
    5, 66, 0, 0, 598, 600, 5, 26, 0, 0, 599, 601, 3, 60, 30, 0, 600, 599, 1, 0,
    0, 0, 600, 601, 1, 0, 0, 0, 601, 602, 1, 0, 0, 0, 602, 604, 5, 27, 0, 0,
    603, 605, 3, 56, 28, 0, 604, 603, 1, 0, 0, 0, 604, 605, 1, 0, 0, 0, 605, 59,
    1, 0, 0, 0, 606, 611, 3, 34, 17, 0, 607, 608, 5, 35, 0, 0, 608, 610, 3, 34,
    17, 0, 609, 607, 1, 0, 0, 0, 610, 613, 1, 0, 0, 0, 611, 609, 1, 0, 0, 0,
    611, 612, 1, 0, 0, 0, 612, 61, 1, 0, 0, 0, 613, 611, 1, 0, 0, 0, 614, 618,
    5, 66, 0, 0, 615, 617, 3, 64, 32, 0, 616, 615, 1, 0, 0, 0, 617, 620, 1, 0,
    0, 0, 618, 616, 1, 0, 0, 0, 618, 619, 1, 0, 0, 0, 619, 623, 1, 0, 0, 0, 620,
    618, 1, 0, 0, 0, 621, 622, 5, 34, 0, 0, 622, 624, 5, 66, 0, 0, 623, 621, 1,
    0, 0, 0, 623, 624, 1, 0, 0, 0, 624, 628, 1, 0, 0, 0, 625, 627, 3, 64, 32, 0,
    626, 625, 1, 0, 0, 0, 627, 630, 1, 0, 0, 0, 628, 626, 1, 0, 0, 0, 628, 629,
    1, 0, 0, 0, 629, 63, 1, 0, 0, 0, 630, 628, 1, 0, 0, 0, 631, 632, 5, 28, 0,
    0, 632, 633, 3, 34, 17, 0, 633, 634, 5, 29, 0, 0, 634, 65, 1, 0, 0, 0, 635,
    640, 5, 66, 0, 0, 636, 637, 5, 35, 0, 0, 637, 639, 5, 66, 0, 0, 638, 636, 1,
    0, 0, 0, 639, 642, 1, 0, 0, 0, 640, 638, 1, 0, 0, 0, 640, 641, 1, 0, 0, 0,
    641, 67, 1, 0, 0, 0, 642, 640, 1, 0, 0, 0, 643, 648, 7, 9, 0, 0, 644, 645,
    5, 35, 0, 0, 645, 647, 7, 9, 0, 0, 646, 644, 1, 0, 0, 0, 647, 650, 1, 0, 0,
    0, 648, 646, 1, 0, 0, 0, 648, 649, 1, 0, 0, 0, 649, 69, 1, 0, 0, 0, 650,
    648, 1, 0, 0, 0, 651, 656, 5, 67, 0, 0, 652, 653, 5, 35, 0, 0, 653, 655, 5,
    67, 0, 0, 654, 652, 1, 0, 0, 0, 655, 658, 1, 0, 0, 0, 656, 654, 1, 0, 0, 0,
    656, 657, 1, 0, 0, 0, 657, 71, 1, 0, 0, 0, 658, 656, 1, 0, 0, 0, 66, 75, 81,
    87, 91, 102, 110, 116, 125, 151, 160, 183, 187, 190, 195, 204, 212, 218,
    267, 278, 297, 307, 313, 329, 345, 364, 369, 378, 383, 389, 393, 404, 434,
    436, 438, 453, 459, 464, 468, 471, 482, 487, 491, 494, 505, 512, 515, 526,
    531, 536, 543, 546, 554, 558, 571, 587, 592, 595, 600, 604, 611, 618, 623,
    628, 640, 648, 656,
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
  public CONSTRAINT_EQ(): TerminalNode {
    return this.getToken(CircomParser.CONSTRAINT_EQ, 0);
  }
  public element_list(): ElementContext[] {
    return this.getTypedRuleContexts(ElementContext) as ElementContext[];
  }
  public element(i: number): ElementContext {
    return this.getTypedRuleContext(ElementContext, i) as ElementContext;
  }
  public LEFT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.LEFT_ASSIGNMENT, 0);
  }
  public ASSIGNMENT_OP(): TerminalNode {
    return this.getToken(CircomParser.ASSIGNMENT_OP, 0);
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
  public RIGHT_ASSIGNMENT(): TerminalNode {
    return this.getToken(CircomParser.RIGHT_ASSIGNMENT, 0);
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
  public enterRule(listener: CircomListener): void {
    if (listener.enterElement) {
      listener.enterElement(this);
    }
  }
  public exitRule(listener: CircomListener): void {
    if (listener.exitElement) {
      listener.exitElement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: CircomVisitor<Result>): Result {
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
  public QUESTION_MARK(): TerminalNode {
    return this.getToken(CircomParser.QUESTION_MARK, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(CircomParser.COLON, 0);
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
