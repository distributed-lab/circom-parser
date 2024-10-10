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
      this.state = 177;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
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
            this.state = 146;
            this.expression(0);
            this.state = 147;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          localctx = new IfFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 149;
            this.match(CircomParser.IF);
            this.state = 150;
            this.parExpression();
            this.state = 151;
            this.functionStmt();
            this.state = 154;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
              case 1:
                {
                  this.state = 152;
                  this.match(CircomParser.ELSE);
                  this.state = 153;
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
            this.state = 156;
            this.match(CircomParser.WHILE);
            this.state = 157;
            this.parExpression();
            this.state = 158;
            this.functionStmt();
          }
          break;
        case 8:
          localctx = new ForFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 160;
            this.match(CircomParser.FOR);
            this.state = 161;
            this.match(CircomParser.LP);
            this.state = 162;
            this.forControl();
            this.state = 163;
            this.match(CircomParser.RP);
            this.state = 164;
            this.functionStmt();
          }
          break;
        case 9:
          localctx = new ReturnFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 166;
            this.match(CircomParser.RETURN);
            this.state = 167;
            this.expression(0);
            this.state = 168;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          localctx = new AssertFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 170;
            this.match(CircomParser.ASSERT);
            this.state = 171;
            this.parExpression();
            this.state = 172;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          localctx = new LogFuncStmtContext(this, localctx);
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 174;
            this.logStmt();
            this.state = 175;
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
        this.state = 179;
        this.match(CircomParser.TEMPLATE);
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 20) {
          {
            this.state = 180;
            this.match(CircomParser.CUSTOM);
          }
        }

        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 25) {
          {
            this.state = 183;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 186;
        this.match(CircomParser.ID);
        this.state = 187;
        this.match(CircomParser.LP);
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 66) {
          {
            this.state = 188;
            this.args();
          }
        }

        this.state = 191;
        this.match(CircomParser.RP);
        this.state = 192;
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
        this.state = 194;
        this.match(CircomParser.LC);
        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1443287816) !== 0) ||
          (((_la - 43) & ~0x1f) === 0 && ((1 << (_la - 43)) & 25166343) !== 0)
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
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 30) {
          {
            this.state = 205;
            this.publicInputsList();
          }
        }

        this.state = 208;
        this.match(CircomParser.ASSIGNMENT);
        this.state = 209;
        this.match(CircomParser.ID);
        this.state = 210;
        this.match(CircomParser.LP);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 12583171) !== 0)
        ) {
          {
            this.state = 211;
            this.expressionList();
          }
        }

        this.state = 214;
        this.match(CircomParser.RP);
        this.state = 215;
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
        this.state = 217;
        this.match(CircomParser.LC);
        this.state = 218;
        this.match(CircomParser.PUBLIC);
        this.state = 219;
        this.match(CircomParser.LB);
        this.state = 220;
        this.args();
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
  public templateStmt(): TemplateStmtContext {
    let localctx: TemplateStmtContext = new TemplateStmtContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 22, CircomParser.RULE_templateStmt);
    let _la: number;
    try {
      this.state = 349;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 224;
            this.templateBlock();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 225;
            this.match(CircomParser.ID);
            this.state = 226;
            this.match(CircomParser.SELF_OP);
            this.state = 227;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 228;
            this.varDeclaration();
            this.state = 229;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 231;
            this.signalDeclaration();
            this.state = 232;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 234;
            this.componentDeclaration();
            this.state = 235;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 237;
            this.blockInstantiation();
            this.state = 238;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            {
              this.state = 240;
              this.identifier();
              this.state = 243;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === 34) {
                {
                  this.state = 241;
                  this.match(CircomParser.DOT);
                  this.state = 242;
                  this.match(CircomParser.ID);
                }
              }
            }
            this.state = 245;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 246;
            this.expression(0);
            this.state = 247;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 249;
            this.expression(0);
            this.state = 250;
            this.match(CircomParser.CONSTRAINT_EQ);
            this.state = 251;
            this.expression(0);
            this.state = 252;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 254;
            this.element();
            this.state = 255;
            _la = this._input.LA(1);
            if (!(_la === 37 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 256;
            this.expression(0);
            this.state = 257;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 259;
            this.match(CircomParser.LP);
            this.state = 260;
            this.element();
            this.state = 265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 261;
                  this.match(CircomParser.COMMA);
                  this.state = 262;
                  this.element();
                }
              }
              this.state = 267;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 268;
            this.match(CircomParser.RP);
            this.state = 269;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 270;
            this.expression(0);
            this.state = 271;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 273;
            this.expression(0);
            this.state = 274;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 275;
            this.element();
            this.state = 276;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 278;
            this.expression(0);
            this.state = 279;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 280;
            this.match(CircomParser.LP);
            this.state = 281;
            this.element();
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 282;
                  this.match(CircomParser.COMMA);
                  this.state = 283;
                  this.element();
                }
              }
              this.state = 288;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 289;
            this.match(CircomParser.RP);
            this.state = 290;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 292;
            this.match(CircomParser.UNDERSCORE);
            this.state = 293;
            _la = this._input.LA(1);
            if (!(_la === 36 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 296;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 294;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 295;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 298;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 302;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 300;
                  this.expression(0);
                }
                break;
              case 2:
                {
                  this.state = 301;
                  this.blockInstantiation();
                }
                break;
            }
            this.state = 304;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 305;
            this.match(CircomParser.UNDERSCORE);
            this.state = 306;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 308;
            this.match(CircomParser.LP);
            this.state = 309;
            this.argsWithUnderscore();
            this.state = 310;
            this.match(CircomParser.RP);
            this.state = 311;
            _la = this._input.LA(1);
            if (!(_la === 36 || _la === 39)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 314;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
              case 1:
                {
                  this.state = 312;
                  this.blockInstantiation();
                }
                break;
              case 2:
                {
                  this.state = 313;
                  this.expression(0);
                }
                break;
            }
            this.state = 316;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 318;
            this.blockInstantiation();
            this.state = 319;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 320;
            this.match(CircomParser.LP);
            this.state = 321;
            this.argsWithUnderscore();
            this.state = 322;
            this.match(CircomParser.RP);
            this.state = 323;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 325;
            this.match(CircomParser.IF);
            this.state = 326;
            this.parExpression();
            this.state = 327;
            this.templateStmt();
            this.state = 330;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
              case 1:
                {
                  this.state = 328;
                  this.match(CircomParser.ELSE);
                  this.state = 329;
                  this.templateStmt();
                }
                break;
            }
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 332;
            this.match(CircomParser.WHILE);
            this.state = 333;
            this.parExpression();
            this.state = 334;
            this.templateStmt();
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 336;
            this.match(CircomParser.FOR);
            this.state = 337;
            this.match(CircomParser.LP);
            this.state = 338;
            this.forControl();
            this.state = 339;
            this.match(CircomParser.RP);
            this.state = 340;
            this.templateStmt();
          }
          break;
        case 20:
          this.enterOuterAlt(localctx, 20);
          {
            this.state = 342;
            this.match(CircomParser.ASSERT);
            this.state = 343;
            this.parExpression();
            this.state = 344;
            this.match(CircomParser.SEMICOLON);
          }
          break;
        case 21:
          this.enterOuterAlt(localctx, 21);
          {
            this.state = 346;
            this.logStmt();
            this.state = 347;
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
          this.state = 351;
          this.identifier();
          this.state = 354;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 34) {
            {
              this.state = 352;
              this.match(CircomParser.DOT);
              this.state = 353;
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
        this.state = 356;
        this.forInit();
        this.state = 357;
        this.match(CircomParser.SEMICOLON);
        this.state = 358;
        this.expression(0);
        this.state = 359;
        this.match(CircomParser.SEMICOLON);
        this.state = 360;
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
        this.state = 363;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 9) {
          {
            this.state = 362;
            this.match(CircomParser.VAR);
          }
        }

        this.state = 365;
        this.identifier();
        this.state = 368;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 36) {
          {
            this.state = 366;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 367;
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
      this.state = 378;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 66:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 370;
            this.match(CircomParser.ID);
            this.state = 374;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 38:
                {
                  this.state = 371;
                  this.match(CircomParser.SELF_OP);
                }
                break;
              case 36:
              case 37:
                {
                  {
                    this.state = 372;
                    _la = this._input.LA(1);
                    if (!(_la === 36 || _la === 37)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 373;
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
            this.state = 376;
            this.match(CircomParser.SELF_OP);
            this.state = 377;
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
        this.state = 380;
        this.match(CircomParser.LP);
        this.state = 381;
        this.expression(0);
        this.state = 382;
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
        this.state = 389;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
          case 1:
            {
              localctx = new PrimaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 385;
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
              this.state = 386;
              this.blockInstantiation();
            }
            break;
          case 3:
            {
              localctx = new UnaryExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 387;
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
              this.state = 388;
              this.expression(7);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 423;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 421;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 31, this._ctx)
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
                    this.state = 391;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 392;
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
                    this.state = 393;
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
                    this.state = 394;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 395;
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
                    this.state = 396;
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
                    this.state = 397;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 4)",
                      );
                    }
                    this.state = 398;
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
                    this.state = 399;
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
                    this.state = 400;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 3)",
                      );
                    }
                    this.state = 401;
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
                    this.state = 402;
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
                    this.state = 403;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)",
                      );
                    }
                    this.state = 404;
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
                    this.state = 405;
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
                    this.state = 406;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)",
                      );
                    }
                    this.state = 407;
                    this.match(CircomParser.QUESTION_MARK);
                    this.state = 408;
                    this.expression(0);
                    this.state = 409;
                    this.match(CircomParser.COLON);
                    this.state = 410;
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
                    this.state = 412;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 413;
                    this.match(CircomParser.DOT);
                    this.state = 414;
                    this.match(CircomParser.ID);
                    this.state = 419;
                    this._errHandler.sync(this);
                    switch (
                      this._interp.adaptivePredict(this._input, 30, this._ctx)
                    ) {
                      case 1:
                        {
                          this.state = 415;
                          this.match(CircomParser.LB);
                          this.state = 416;
                          this.expression(0);
                          this.state = 417;
                          this.match(CircomParser.RB);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
          }
          this.state = 425;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
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
      this.state = 438;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 33, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 426;
            this.match(CircomParser.LP);
            this.state = 427;
            this.expression(0);
            this.state = 428;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 430;
            this.match(CircomParser.LB);
            this.state = 431;
            this.expressionList();
            this.state = 432;
            this.match(CircomParser.RB);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 434;
            this.match(CircomParser.NUMBER);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 435;
            this.identifier();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 436;
            this.args();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 437;
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
        this.state = 440;
        this.match(CircomParser.LOG);
        this.state = 441;
        this.match(CircomParser.LP);
        this.state = 456;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 46137603) !== 0)
        ) {
          {
            this.state = 444;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 69:
                {
                  this.state = 442;
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
                  this.state = 443;
                  this.expression(0);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 453;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 446;
                  this.match(CircomParser.COMMA);
                  this.state = 449;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case 69:
                      {
                        this.state = 447;
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
                        this.state = 448;
                        this.expression(0);
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                }
              }
              this.state = 455;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 458;
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
        this.state = 460;
        this.match(CircomParser.COMPONENT);
        this.state = 461;
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
        this.state = 463;
        this.componentDefinition();
        this.state = 467;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 28) {
          {
            {
              this.state = 464;
              this.arrayDimension();
            }
          }
          this.state = 469;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 472;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 36) {
          {
            this.state = 470;
            this.match(CircomParser.ASSIGNMENT);
            this.state = 471;
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
        this.state = 474;
        this.match(CircomParser.SIGNAL);
        this.state = 476;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 2) {
          {
            this.state = 475;
            this.match(CircomParser.SIGNAL_TYPE);
          }
        }

        this.state = 479;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 30) {
          {
            this.state = 478;
            this.tagList();
          }
        }

        this.state = 481;
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
        this.state = 483;
        this.match(CircomParser.LC);
        this.state = 484;
        this.args();
        this.state = 485;
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
      this.state = 500;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 44, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 487;
            this.signalDefinition();
            this.state = 490;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 39) {
              {
                this.state = 488;
                this.match(CircomParser.LEFT_ASSIGNMENT);
                this.state = 489;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 492;
            this.signalDefinition();
            this.state = 497;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 493;
                  this.match(CircomParser.COMMA);
                  this.state = 494;
                  this.identifier();
                }
              }
              this.state = 499;
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
      this.state = 516;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 46, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 502;
            this.match(CircomParser.VAR);
            this.state = 503;
            this.identifier();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 504;
            this.match(CircomParser.VAR);
            this.state = 505;
            this.match(CircomParser.LP);
            this.state = 506;
            this.identifier();
            this.state = 511;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 507;
                  this.match(CircomParser.COMMA);
                  this.state = 508;
                  this.identifier();
                }
              }
              this.state = 513;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 514;
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
      this.state = 531;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 518;
            this.varDefinition();
            this.state = 521;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 36) {
              {
                this.state = 519;
                this.match(CircomParser.ASSIGNMENT);
                this.state = 520;
                this.rhsValue();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 523;
            this.varDefinition();
            this.state = 528;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 524;
                  this.match(CircomParser.COMMA);
                  this.state = 525;
                  this.identifier();
                }
              }
              this.state = 530;
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
      this.state = 535;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 533;
            this.expression(0);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 534;
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
      this.state = 573;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 54, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 537;
            this.match(CircomParser.LP);
            this.state = 539;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
              (((_la - 44) & ~0x1f) === 0 &&
                ((1 << (_la - 44)) & 12583171) !== 0)
            ) {
              {
                this.state = 538;
                this.expressionList();
              }
            }

            this.state = 541;
            this.match(CircomParser.RP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 542;
            this.match(CircomParser.LP);
            this.state = 543;
            this.match(CircomParser.ID);
            this.state = 544;
            this.match(CircomParser.LEFT_ASSIGNMENT);
            this.state = 545;
            this.expression(0);
            this.state = 552;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 546;
                  this.match(CircomParser.COMMA);
                  this.state = 547;
                  this.match(CircomParser.ID);
                  this.state = 548;
                  this.match(CircomParser.LEFT_ASSIGNMENT);
                  this.state = 549;
                  this.expression(0);
                }
              }
              this.state = 554;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 555;
            this.match(CircomParser.RP);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 557;
            this.match(CircomParser.LP);
            this.state = 558;
            this.expression(0);
            this.state = 559;
            this.match(CircomParser.RIGHT_ASSIGNMENT);
            this.state = 560;
            this.match(CircomParser.ID);
            this.state = 568;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 35) {
              {
                {
                  this.state = 561;
                  this.match(CircomParser.COMMA);
                  this.state = 562;
                  this.expression(0);
                  this.state = 563;
                  this.match(CircomParser.RIGHT_ASSIGNMENT);
                  this.state = 564;
                  this.match(CircomParser.ID);
                }
              }
              this.state = 570;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 571;
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
        this.state = 576;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 25) {
          {
            this.state = 575;
            this.match(CircomParser.PARALLEL);
          }
        }

        this.state = 578;
        this.match(CircomParser.ID);
        this.state = 579;
        this.match(CircomParser.LP);
        this.state = 581;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 369098752) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 12583171) !== 0)
        ) {
          {
            this.state = 580;
            this.expressionList();
          }
        }

        this.state = 583;
        this.match(CircomParser.RP);
        this.state = 585;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
          case 1:
            {
              this.state = 584;
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
        this.state = 587;
        this.expression(0);
        this.state = 592;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 35) {
          {
            {
              this.state = 588;
              this.match(CircomParser.COMMA);
              this.state = 589;
              this.expression(0);
            }
          }
          this.state = 594;
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
        this.state = 599;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
          case 1:
            {
              this.state = 595;
              this.match(CircomParser.ID);
            }
            break;
          case 2:
            {
              {
                this.state = 596;
                this.match(CircomParser.ID);
                this.state = 597;
                this.match(CircomParser.DOT);
                this.state = 598;
                this.match(CircomParser.ID);
              }
            }
            break;
        }
        this.state = 604;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 601;
                this.arrayDimension();
              }
            }
          }
          this.state = 606;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
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
        this.state = 607;
        this.match(CircomParser.LB);
        this.state = 608;
        this.expression(0);
        this.state = 609;
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
        this.state = 611;
        this.match(CircomParser.ID);
        this.state = 616;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 612;
                this.match(CircomParser.COMMA);
                this.state = 613;
                this.match(CircomParser.ID);
              }
            }
          }
          this.state = 618;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
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
        this.state = 619;
        _la = this._input.LA(1);
        if (!(_la === 43 || _la === 66)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 624;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 35) {
          {
            {
              this.state = 620;
              this.match(CircomParser.COMMA);
              this.state = 621;
              _la = this._input.LA(1);
              if (!(_la === 43 || _la === 66)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          this.state = 626;
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
        this.state = 627;
        this.match(CircomParser.NUMBER);
        this.state = 632;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 628;
                this.match(CircomParser.COMMA);
                this.state = 629;
                this.match(CircomParser.NUMBER);
              }
            }
          }
          this.state = 634;
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
    4, 1, 72, 636, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
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
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 155, 8,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 178, 8, 6, 1, 7,
    1, 7, 3, 7, 182, 8, 7, 1, 7, 3, 7, 185, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 190,
    8, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 5, 8, 197, 8, 8, 10, 8, 12, 8, 200, 9,
    8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 3, 9, 207, 8, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3,
    9, 213, 8, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 244, 8,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 264, 8, 11, 10,
    11, 12, 11, 267, 9, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 285, 8,
    11, 10, 11, 12, 11, 288, 9, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 3, 11, 297, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 303, 8, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 315,
    8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 331, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 350, 8, 11, 1, 12, 1, 12, 1, 12, 3, 12, 355, 8, 12, 1,
    13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 3, 14, 364, 8, 14, 1, 14, 1,
    14, 1, 14, 3, 14, 369, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 375, 8, 15,
    1, 15, 1, 15, 3, 15, 379, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 3, 17, 390, 8, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 3, 17, 420, 8, 17, 5, 17, 422, 8, 17, 10, 17, 12, 17, 425, 9, 17, 1,
    18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1,
    18, 3, 18, 439, 8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 445, 8, 19, 1, 19,
    1, 19, 1, 19, 3, 19, 450, 8, 19, 5, 19, 452, 8, 19, 10, 19, 12, 19, 455, 9,
    19, 3, 19, 457, 8, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 5,
    21, 466, 8, 21, 10, 21, 12, 21, 469, 9, 21, 1, 21, 1, 21, 3, 21, 473, 8, 21,
    1, 22, 1, 22, 3, 22, 477, 8, 22, 1, 22, 3, 22, 480, 8, 22, 1, 22, 1, 22, 1,
    23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 3, 24, 491, 8, 24, 1, 24, 1,
    24, 1, 24, 5, 24, 496, 8, 24, 10, 24, 12, 24, 499, 9, 24, 3, 24, 501, 8, 24,
    1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 5, 25, 510, 8, 25, 10, 25,
    12, 25, 513, 9, 25, 1, 25, 1, 25, 3, 25, 517, 8, 25, 1, 26, 1, 26, 1, 26, 3,
    26, 522, 8, 26, 1, 26, 1, 26, 1, 26, 5, 26, 527, 8, 26, 10, 26, 12, 26, 530,
    9, 26, 3, 26, 532, 8, 26, 1, 27, 1, 27, 3, 27, 536, 8, 27, 1, 28, 1, 28, 3,
    28, 540, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1,
    28, 5, 28, 551, 8, 28, 10, 28, 12, 28, 554, 9, 28, 1, 28, 1, 28, 1, 28, 1,
    28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 5, 28, 567, 8, 28, 10,
    28, 12, 28, 570, 9, 28, 1, 28, 1, 28, 3, 28, 574, 8, 28, 1, 29, 3, 29, 577,
    8, 29, 1, 29, 1, 29, 1, 29, 3, 29, 582, 8, 29, 1, 29, 1, 29, 3, 29, 586, 8,
    29, 1, 30, 1, 30, 1, 30, 5, 30, 591, 8, 30, 10, 30, 12, 30, 594, 9, 30, 1,
    31, 1, 31, 1, 31, 1, 31, 3, 31, 600, 8, 31, 1, 31, 5, 31, 603, 8, 31, 10,
    31, 12, 31, 606, 9, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 5,
    33, 615, 8, 33, 10, 33, 12, 33, 618, 9, 33, 1, 34, 1, 34, 1, 34, 5, 34, 623,
    8, 34, 10, 34, 12, 34, 626, 9, 34, 1, 35, 1, 35, 1, 35, 5, 35, 631, 8, 35,
    10, 35, 12, 35, 634, 9, 35, 1, 35, 0, 1, 34, 36, 0, 2, 4, 6, 8, 10, 12, 14,
    16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
    54, 56, 58, 60, 62, 64, 66, 68, 70, 0, 10, 1, 0, 36, 37, 2, 0, 37, 37, 39,
    39, 2, 0, 36, 36, 39, 39, 2, 0, 44, 45, 52, 52, 1, 0, 46, 50, 1, 0, 51, 52,
    1, 0, 53, 54, 1, 0, 55, 57, 1, 0, 58, 65, 2, 0, 43, 43, 66, 66, 702, 0, 75,
    1, 0, 0, 0, 2, 102, 1, 0, 0, 0, 4, 104, 1, 0, 0, 0, 6, 110, 1, 0, 0, 0, 8,
    112, 1, 0, 0, 0, 10, 121, 1, 0, 0, 0, 12, 177, 1, 0, 0, 0, 14, 179, 1, 0, 0,
    0, 16, 194, 1, 0, 0, 0, 18, 203, 1, 0, 0, 0, 20, 217, 1, 0, 0, 0, 22, 349,
    1, 0, 0, 0, 24, 351, 1, 0, 0, 0, 26, 356, 1, 0, 0, 0, 28, 363, 1, 0, 0, 0,
    30, 378, 1, 0, 0, 0, 32, 380, 1, 0, 0, 0, 34, 389, 1, 0, 0, 0, 36, 438, 1,
    0, 0, 0, 38, 440, 1, 0, 0, 0, 40, 460, 1, 0, 0, 0, 42, 463, 1, 0, 0, 0, 44,
    474, 1, 0, 0, 0, 46, 483, 1, 0, 0, 0, 48, 500, 1, 0, 0, 0, 50, 516, 1, 0, 0,
    0, 52, 531, 1, 0, 0, 0, 54, 535, 1, 0, 0, 0, 56, 573, 1, 0, 0, 0, 58, 576,
    1, 0, 0, 0, 60, 587, 1, 0, 0, 0, 62, 599, 1, 0, 0, 0, 64, 607, 1, 0, 0, 0,
    66, 611, 1, 0, 0, 0, 68, 619, 1, 0, 0, 0, 70, 627, 1, 0, 0, 0, 72, 74, 3, 2,
    1, 0, 73, 72, 1, 0, 0, 0, 74, 77, 1, 0, 0, 0, 75, 73, 1, 0, 0, 0, 75, 76, 1,
    0, 0, 0, 76, 81, 1, 0, 0, 0, 77, 75, 1, 0, 0, 0, 78, 80, 3, 4, 2, 0, 79, 78,
    1, 0, 0, 0, 80, 83, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82,
    87, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 84, 86, 3, 6, 3, 0, 85, 84, 1, 0, 0, 0,
    86, 89, 1, 0, 0, 0, 87, 85, 1, 0, 0, 0, 87, 88, 1, 0, 0, 0, 88, 91, 1, 0, 0,
    0, 89, 87, 1, 0, 0, 0, 90, 92, 3, 18, 9, 0, 91, 90, 1, 0, 0, 0, 91, 92, 1,
    0, 0, 0, 92, 93, 1, 0, 0, 0, 93, 94, 5, 0, 0, 1, 94, 1, 1, 0, 0, 0, 95, 96,
    5, 21, 0, 0, 96, 97, 5, 22, 0, 0, 97, 98, 5, 1, 0, 0, 98, 103, 5, 33, 0, 0,
    99, 100, 5, 21, 0, 0, 100, 101, 5, 23, 0, 0, 101, 103, 5, 33, 0, 0, 102, 95,
    1, 0, 0, 0, 102, 99, 1, 0, 0, 0, 103, 3, 1, 0, 0, 0, 104, 105, 5, 19, 0, 0,
    105, 106, 5, 69, 0, 0, 106, 107, 5, 33, 0, 0, 107, 5, 1, 0, 0, 0, 108, 111,
    3, 8, 4, 0, 109, 111, 3, 14, 7, 0, 110, 108, 1, 0, 0, 0, 110, 109, 1, 0, 0,
    0, 111, 7, 1, 0, 0, 0, 112, 113, 5, 10, 0, 0, 113, 114, 5, 66, 0, 0, 114,
    116, 5, 26, 0, 0, 115, 117, 3, 66, 33, 0, 116, 115, 1, 0, 0, 0, 116, 117, 1,
    0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 119, 5, 27, 0, 0, 119, 120, 3, 10, 5, 0,
    120, 9, 1, 0, 0, 0, 121, 125, 5, 30, 0, 0, 122, 124, 3, 12, 6, 0, 123, 122,
    1, 0, 0, 0, 124, 127, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 125, 126, 1, 0, 0,
    0, 126, 128, 1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 128, 129, 5, 31, 0, 0, 129,
    11, 1, 0, 0, 0, 130, 178, 3, 10, 5, 0, 131, 132, 5, 66, 0, 0, 132, 133, 5,
    38, 0, 0, 133, 178, 5, 33, 0, 0, 134, 135, 3, 52, 26, 0, 135, 136, 5, 33, 0,
    0, 136, 178, 1, 0, 0, 0, 137, 138, 3, 62, 31, 0, 138, 139, 7, 0, 0, 0, 139,
    140, 3, 34, 17, 0, 140, 141, 5, 33, 0, 0, 141, 178, 1, 0, 0, 0, 142, 143, 5,
    26, 0, 0, 143, 144, 3, 68, 34, 0, 144, 145, 5, 27, 0, 0, 145, 146, 5, 36, 0,
    0, 146, 147, 3, 34, 17, 0, 147, 148, 5, 33, 0, 0, 148, 178, 1, 0, 0, 0, 149,
    150, 5, 12, 0, 0, 150, 151, 3, 32, 16, 0, 151, 154, 3, 12, 6, 0, 152, 153,
    5, 13, 0, 0, 153, 155, 3, 12, 6, 0, 154, 152, 1, 0, 0, 0, 154, 155, 1, 0, 0,
    0, 155, 178, 1, 0, 0, 0, 156, 157, 5, 15, 0, 0, 157, 158, 3, 32, 16, 0, 158,
    159, 3, 12, 6, 0, 159, 178, 1, 0, 0, 0, 160, 161, 5, 14, 0, 0, 161, 162, 5,
    26, 0, 0, 162, 163, 3, 26, 13, 0, 163, 164, 5, 27, 0, 0, 164, 165, 3, 12, 6,
    0, 165, 178, 1, 0, 0, 0, 166, 167, 5, 11, 0, 0, 167, 168, 3, 34, 17, 0, 168,
    169, 5, 33, 0, 0, 169, 178, 1, 0, 0, 0, 170, 171, 5, 18, 0, 0, 171, 172, 3,
    32, 16, 0, 172, 173, 5, 33, 0, 0, 173, 178, 1, 0, 0, 0, 174, 175, 3, 38, 19,
    0, 175, 176, 5, 33, 0, 0, 176, 178, 1, 0, 0, 0, 177, 130, 1, 0, 0, 0, 177,
    131, 1, 0, 0, 0, 177, 134, 1, 0, 0, 0, 177, 137, 1, 0, 0, 0, 177, 142, 1, 0,
    0, 0, 177, 149, 1, 0, 0, 0, 177, 156, 1, 0, 0, 0, 177, 160, 1, 0, 0, 0, 177,
    166, 1, 0, 0, 0, 177, 170, 1, 0, 0, 0, 177, 174, 1, 0, 0, 0, 178, 13, 1, 0,
    0, 0, 179, 181, 5, 7, 0, 0, 180, 182, 5, 20, 0, 0, 181, 180, 1, 0, 0, 0,
    181, 182, 1, 0, 0, 0, 182, 184, 1, 0, 0, 0, 183, 185, 5, 25, 0, 0, 184, 183,
    1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 186, 1, 0, 0, 0, 186, 187, 5, 66, 0,
    0, 187, 189, 5, 26, 0, 0, 188, 190, 3, 66, 33, 0, 189, 188, 1, 0, 0, 0, 189,
    190, 1, 0, 0, 0, 190, 191, 1, 0, 0, 0, 191, 192, 5, 27, 0, 0, 192, 193, 3,
    16, 8, 0, 193, 15, 1, 0, 0, 0, 194, 198, 5, 30, 0, 0, 195, 197, 3, 22, 11,
    0, 196, 195, 1, 0, 0, 0, 197, 200, 1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 198,
    199, 1, 0, 0, 0, 199, 201, 1, 0, 0, 0, 200, 198, 1, 0, 0, 0, 201, 202, 5,
    31, 0, 0, 202, 17, 1, 0, 0, 0, 203, 204, 5, 8, 0, 0, 204, 206, 5, 24, 0, 0,
    205, 207, 3, 20, 10, 0, 206, 205, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207,
    208, 1, 0, 0, 0, 208, 209, 5, 36, 0, 0, 209, 210, 5, 66, 0, 0, 210, 212, 5,
    26, 0, 0, 211, 213, 3, 60, 30, 0, 212, 211, 1, 0, 0, 0, 212, 213, 1, 0, 0,
    0, 213, 214, 1, 0, 0, 0, 214, 215, 5, 27, 0, 0, 215, 216, 5, 33, 0, 0, 216,
    19, 1, 0, 0, 0, 217, 218, 5, 30, 0, 0, 218, 219, 5, 6, 0, 0, 219, 220, 5,
    28, 0, 0, 220, 221, 3, 66, 33, 0, 221, 222, 5, 29, 0, 0, 222, 223, 5, 31, 0,
    0, 223, 21, 1, 0, 0, 0, 224, 350, 3, 16, 8, 0, 225, 226, 5, 66, 0, 0, 226,
    227, 5, 38, 0, 0, 227, 350, 5, 33, 0, 0, 228, 229, 3, 52, 26, 0, 229, 230,
    5, 33, 0, 0, 230, 350, 1, 0, 0, 0, 231, 232, 3, 48, 24, 0, 232, 233, 5, 33,
    0, 0, 233, 350, 1, 0, 0, 0, 234, 235, 3, 42, 21, 0, 235, 236, 5, 33, 0, 0,
    236, 350, 1, 0, 0, 0, 237, 238, 3, 58, 29, 0, 238, 239, 5, 33, 0, 0, 239,
    350, 1, 0, 0, 0, 240, 243, 3, 62, 31, 0, 241, 242, 5, 34, 0, 0, 242, 244, 5,
    66, 0, 0, 243, 241, 1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244, 245, 1, 0, 0, 0,
    245, 246, 5, 36, 0, 0, 246, 247, 3, 34, 17, 0, 247, 248, 5, 33, 0, 0, 248,
    350, 1, 0, 0, 0, 249, 250, 3, 34, 17, 0, 250, 251, 5, 41, 0, 0, 251, 252, 3,
    34, 17, 0, 252, 253, 5, 33, 0, 0, 253, 350, 1, 0, 0, 0, 254, 255, 3, 24, 12,
    0, 255, 256, 7, 1, 0, 0, 256, 257, 3, 34, 17, 0, 257, 258, 5, 33, 0, 0, 258,
    350, 1, 0, 0, 0, 259, 260, 5, 26, 0, 0, 260, 265, 3, 24, 12, 0, 261, 262, 5,
    35, 0, 0, 262, 264, 3, 24, 12, 0, 263, 261, 1, 0, 0, 0, 264, 267, 1, 0, 0,
    0, 265, 263, 1, 0, 0, 0, 265, 266, 1, 0, 0, 0, 266, 268, 1, 0, 0, 0, 267,
    265, 1, 0, 0, 0, 268, 269, 5, 27, 0, 0, 269, 270, 5, 39, 0, 0, 270, 271, 3,
    34, 17, 0, 271, 272, 5, 33, 0, 0, 272, 350, 1, 0, 0, 0, 273, 274, 3, 34, 17,
    0, 274, 275, 5, 40, 0, 0, 275, 276, 3, 24, 12, 0, 276, 277, 5, 33, 0, 0,
    277, 350, 1, 0, 0, 0, 278, 279, 3, 34, 17, 0, 279, 280, 5, 40, 0, 0, 280,
    281, 5, 26, 0, 0, 281, 286, 3, 24, 12, 0, 282, 283, 5, 35, 0, 0, 283, 285,
    3, 24, 12, 0, 284, 282, 1, 0, 0, 0, 285, 288, 1, 0, 0, 0, 286, 284, 1, 0, 0,
    0, 286, 287, 1, 0, 0, 0, 287, 289, 1, 0, 0, 0, 288, 286, 1, 0, 0, 0, 289,
    290, 5, 27, 0, 0, 290, 291, 5, 33, 0, 0, 291, 350, 1, 0, 0, 0, 292, 293, 5,
    43, 0, 0, 293, 296, 7, 2, 0, 0, 294, 297, 3, 34, 17, 0, 295, 297, 3, 58, 29,
    0, 296, 294, 1, 0, 0, 0, 296, 295, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0, 298,
    299, 5, 33, 0, 0, 299, 350, 1, 0, 0, 0, 300, 303, 3, 34, 17, 0, 301, 303, 3,
    58, 29, 0, 302, 300, 1, 0, 0, 0, 302, 301, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0,
    304, 305, 5, 40, 0, 0, 305, 306, 5, 43, 0, 0, 306, 307, 5, 33, 0, 0, 307,
    350, 1, 0, 0, 0, 308, 309, 5, 26, 0, 0, 309, 310, 3, 68, 34, 0, 310, 311, 5,
    27, 0, 0, 311, 314, 7, 2, 0, 0, 312, 315, 3, 58, 29, 0, 313, 315, 3, 34, 17,
    0, 314, 312, 1, 0, 0, 0, 314, 313, 1, 0, 0, 0, 315, 316, 1, 0, 0, 0, 316,
    317, 5, 33, 0, 0, 317, 350, 1, 0, 0, 0, 318, 319, 3, 58, 29, 0, 319, 320, 5,
    40, 0, 0, 320, 321, 5, 26, 0, 0, 321, 322, 3, 68, 34, 0, 322, 323, 5, 27, 0,
    0, 323, 324, 5, 33, 0, 0, 324, 350, 1, 0, 0, 0, 325, 326, 5, 12, 0, 0, 326,
    327, 3, 32, 16, 0, 327, 330, 3, 22, 11, 0, 328, 329, 5, 13, 0, 0, 329, 331,
    3, 22, 11, 0, 330, 328, 1, 0, 0, 0, 330, 331, 1, 0, 0, 0, 331, 350, 1, 0, 0,
    0, 332, 333, 5, 15, 0, 0, 333, 334, 3, 32, 16, 0, 334, 335, 3, 22, 11, 0,
    335, 350, 1, 0, 0, 0, 336, 337, 5, 14, 0, 0, 337, 338, 5, 26, 0, 0, 338,
    339, 3, 26, 13, 0, 339, 340, 5, 27, 0, 0, 340, 341, 3, 22, 11, 0, 341, 350,
    1, 0, 0, 0, 342, 343, 5, 18, 0, 0, 343, 344, 3, 32, 16, 0, 344, 345, 5, 33,
    0, 0, 345, 350, 1, 0, 0, 0, 346, 347, 3, 38, 19, 0, 347, 348, 5, 33, 0, 0,
    348, 350, 1, 0, 0, 0, 349, 224, 1, 0, 0, 0, 349, 225, 1, 0, 0, 0, 349, 228,
    1, 0, 0, 0, 349, 231, 1, 0, 0, 0, 349, 234, 1, 0, 0, 0, 349, 237, 1, 0, 0,
    0, 349, 240, 1, 0, 0, 0, 349, 249, 1, 0, 0, 0, 349, 254, 1, 0, 0, 0, 349,
    259, 1, 0, 0, 0, 349, 273, 1, 0, 0, 0, 349, 278, 1, 0, 0, 0, 349, 292, 1, 0,
    0, 0, 349, 302, 1, 0, 0, 0, 349, 308, 1, 0, 0, 0, 349, 318, 1, 0, 0, 0, 349,
    325, 1, 0, 0, 0, 349, 332, 1, 0, 0, 0, 349, 336, 1, 0, 0, 0, 349, 342, 1, 0,
    0, 0, 349, 346, 1, 0, 0, 0, 350, 23, 1, 0, 0, 0, 351, 354, 3, 62, 31, 0,
    352, 353, 5, 34, 0, 0, 353, 355, 3, 62, 31, 0, 354, 352, 1, 0, 0, 0, 354,
    355, 1, 0, 0, 0, 355, 25, 1, 0, 0, 0, 356, 357, 3, 28, 14, 0, 357, 358, 5,
    33, 0, 0, 358, 359, 3, 34, 17, 0, 359, 360, 5, 33, 0, 0, 360, 361, 3, 30,
    15, 0, 361, 27, 1, 0, 0, 0, 362, 364, 5, 9, 0, 0, 363, 362, 1, 0, 0, 0, 363,
    364, 1, 0, 0, 0, 364, 365, 1, 0, 0, 0, 365, 368, 3, 62, 31, 0, 366, 367, 5,
    36, 0, 0, 367, 369, 3, 54, 27, 0, 368, 366, 1, 0, 0, 0, 368, 369, 1, 0, 0,
    0, 369, 29, 1, 0, 0, 0, 370, 374, 5, 66, 0, 0, 371, 375, 5, 38, 0, 0, 372,
    373, 7, 0, 0, 0, 373, 375, 3, 34, 17, 0, 374, 371, 1, 0, 0, 0, 374, 372, 1,
    0, 0, 0, 375, 379, 1, 0, 0, 0, 376, 377, 5, 38, 0, 0, 377, 379, 5, 66, 0, 0,
    378, 370, 1, 0, 0, 0, 378, 376, 1, 0, 0, 0, 379, 31, 1, 0, 0, 0, 380, 381,
    5, 26, 0, 0, 381, 382, 3, 34, 17, 0, 382, 383, 5, 27, 0, 0, 383, 33, 1, 0,
    0, 0, 384, 385, 6, 17, -1, 0, 385, 390, 3, 36, 18, 0, 386, 390, 3, 58, 29,
    0, 387, 388, 7, 3, 0, 0, 388, 390, 3, 34, 17, 7, 389, 384, 1, 0, 0, 0, 389,
    386, 1, 0, 0, 0, 389, 387, 1, 0, 0, 0, 390, 423, 1, 0, 0, 0, 391, 392, 10,
    6, 0, 0, 392, 393, 7, 4, 0, 0, 393, 422, 3, 34, 17, 7, 394, 395, 10, 5, 0,
    0, 395, 396, 7, 5, 0, 0, 396, 422, 3, 34, 17, 6, 397, 398, 10, 4, 0, 0, 398,
    399, 7, 6, 0, 0, 399, 422, 3, 34, 17, 5, 400, 401, 10, 3, 0, 0, 401, 402, 7,
    7, 0, 0, 402, 422, 3, 34, 17, 4, 403, 404, 10, 2, 0, 0, 404, 405, 7, 8, 0,
    0, 405, 422, 3, 34, 17, 3, 406, 407, 10, 1, 0, 0, 407, 408, 5, 42, 0, 0,
    408, 409, 3, 34, 17, 0, 409, 410, 5, 32, 0, 0, 410, 411, 3, 34, 17, 2, 411,
    422, 1, 0, 0, 0, 412, 413, 10, 8, 0, 0, 413, 414, 5, 34, 0, 0, 414, 419, 5,
    66, 0, 0, 415, 416, 5, 28, 0, 0, 416, 417, 3, 34, 17, 0, 417, 418, 5, 29, 0,
    0, 418, 420, 1, 0, 0, 0, 419, 415, 1, 0, 0, 0, 419, 420, 1, 0, 0, 0, 420,
    422, 1, 0, 0, 0, 421, 391, 1, 0, 0, 0, 421, 394, 1, 0, 0, 0, 421, 397, 1, 0,
    0, 0, 421, 400, 1, 0, 0, 0, 421, 403, 1, 0, 0, 0, 421, 406, 1, 0, 0, 0, 421,
    412, 1, 0, 0, 0, 422, 425, 1, 0, 0, 0, 423, 421, 1, 0, 0, 0, 423, 424, 1, 0,
    0, 0, 424, 35, 1, 0, 0, 0, 425, 423, 1, 0, 0, 0, 426, 427, 5, 26, 0, 0, 427,
    428, 3, 34, 17, 0, 428, 429, 5, 27, 0, 0, 429, 439, 1, 0, 0, 0, 430, 431, 5,
    28, 0, 0, 431, 432, 3, 60, 30, 0, 432, 433, 5, 29, 0, 0, 433, 439, 1, 0, 0,
    0, 434, 439, 5, 67, 0, 0, 435, 439, 3, 62, 31, 0, 436, 439, 3, 66, 33, 0,
    437, 439, 3, 70, 35, 0, 438, 426, 1, 0, 0, 0, 438, 430, 1, 0, 0, 0, 438,
    434, 1, 0, 0, 0, 438, 435, 1, 0, 0, 0, 438, 436, 1, 0, 0, 0, 438, 437, 1, 0,
    0, 0, 439, 37, 1, 0, 0, 0, 440, 441, 5, 17, 0, 0, 441, 456, 5, 26, 0, 0,
    442, 445, 5, 69, 0, 0, 443, 445, 3, 34, 17, 0, 444, 442, 1, 0, 0, 0, 444,
    443, 1, 0, 0, 0, 445, 453, 1, 0, 0, 0, 446, 449, 5, 35, 0, 0, 447, 450, 5,
    69, 0, 0, 448, 450, 3, 34, 17, 0, 449, 447, 1, 0, 0, 0, 449, 448, 1, 0, 0,
    0, 450, 452, 1, 0, 0, 0, 451, 446, 1, 0, 0, 0, 452, 455, 1, 0, 0, 0, 453,
    451, 1, 0, 0, 0, 453, 454, 1, 0, 0, 0, 454, 457, 1, 0, 0, 0, 455, 453, 1, 0,
    0, 0, 456, 444, 1, 0, 0, 0, 456, 457, 1, 0, 0, 0, 457, 458, 1, 0, 0, 0, 458,
    459, 5, 27, 0, 0, 459, 39, 1, 0, 0, 0, 460, 461, 5, 8, 0, 0, 461, 462, 5,
    66, 0, 0, 462, 41, 1, 0, 0, 0, 463, 467, 3, 40, 20, 0, 464, 466, 3, 64, 32,
    0, 465, 464, 1, 0, 0, 0, 466, 469, 1, 0, 0, 0, 467, 465, 1, 0, 0, 0, 467,
    468, 1, 0, 0, 0, 468, 472, 1, 0, 0, 0, 469, 467, 1, 0, 0, 0, 470, 471, 5,
    36, 0, 0, 471, 473, 3, 58, 29, 0, 472, 470, 1, 0, 0, 0, 472, 473, 1, 0, 0,
    0, 473, 43, 1, 0, 0, 0, 474, 476, 5, 3, 0, 0, 475, 477, 5, 2, 0, 0, 476,
    475, 1, 0, 0, 0, 476, 477, 1, 0, 0, 0, 477, 479, 1, 0, 0, 0, 478, 480, 3,
    46, 23, 0, 479, 478, 1, 0, 0, 0, 479, 480, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0,
    481, 482, 3, 62, 31, 0, 482, 45, 1, 0, 0, 0, 483, 484, 5, 30, 0, 0, 484,
    485, 3, 66, 33, 0, 485, 486, 5, 31, 0, 0, 486, 47, 1, 0, 0, 0, 487, 490, 3,
    44, 22, 0, 488, 489, 5, 39, 0, 0, 489, 491, 3, 54, 27, 0, 490, 488, 1, 0, 0,
    0, 490, 491, 1, 0, 0, 0, 491, 501, 1, 0, 0, 0, 492, 497, 3, 44, 22, 0, 493,
    494, 5, 35, 0, 0, 494, 496, 3, 62, 31, 0, 495, 493, 1, 0, 0, 0, 496, 499, 1,
    0, 0, 0, 497, 495, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498, 501, 1, 0, 0, 0,
    499, 497, 1, 0, 0, 0, 500, 487, 1, 0, 0, 0, 500, 492, 1, 0, 0, 0, 501, 49,
    1, 0, 0, 0, 502, 503, 5, 9, 0, 0, 503, 517, 3, 62, 31, 0, 504, 505, 5, 9, 0,
    0, 505, 506, 5, 26, 0, 0, 506, 511, 3, 62, 31, 0, 507, 508, 5, 35, 0, 0,
    508, 510, 3, 62, 31, 0, 509, 507, 1, 0, 0, 0, 510, 513, 1, 0, 0, 0, 511,
    509, 1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 514, 1, 0, 0, 0, 513, 511, 1, 0,
    0, 0, 514, 515, 5, 27, 0, 0, 515, 517, 1, 0, 0, 0, 516, 502, 1, 0, 0, 0,
    516, 504, 1, 0, 0, 0, 517, 51, 1, 0, 0, 0, 518, 521, 3, 50, 25, 0, 519, 520,
    5, 36, 0, 0, 520, 522, 3, 54, 27, 0, 521, 519, 1, 0, 0, 0, 521, 522, 1, 0,
    0, 0, 522, 532, 1, 0, 0, 0, 523, 528, 3, 50, 25, 0, 524, 525, 5, 35, 0, 0,
    525, 527, 3, 62, 31, 0, 526, 524, 1, 0, 0, 0, 527, 530, 1, 0, 0, 0, 528,
    526, 1, 0, 0, 0, 528, 529, 1, 0, 0, 0, 529, 532, 1, 0, 0, 0, 530, 528, 1, 0,
    0, 0, 531, 518, 1, 0, 0, 0, 531, 523, 1, 0, 0, 0, 532, 53, 1, 0, 0, 0, 533,
    536, 3, 34, 17, 0, 534, 536, 3, 58, 29, 0, 535, 533, 1, 0, 0, 0, 535, 534,
    1, 0, 0, 0, 536, 55, 1, 0, 0, 0, 537, 539, 5, 26, 0, 0, 538, 540, 3, 60, 30,
    0, 539, 538, 1, 0, 0, 0, 539, 540, 1, 0, 0, 0, 540, 541, 1, 0, 0, 0, 541,
    574, 5, 27, 0, 0, 542, 543, 5, 26, 0, 0, 543, 544, 5, 66, 0, 0, 544, 545, 5,
    39, 0, 0, 545, 552, 3, 34, 17, 0, 546, 547, 5, 35, 0, 0, 547, 548, 5, 66, 0,
    0, 548, 549, 5, 39, 0, 0, 549, 551, 3, 34, 17, 0, 550, 546, 1, 0, 0, 0, 551,
    554, 1, 0, 0, 0, 552, 550, 1, 0, 0, 0, 552, 553, 1, 0, 0, 0, 553, 555, 1, 0,
    0, 0, 554, 552, 1, 0, 0, 0, 555, 556, 5, 27, 0, 0, 556, 574, 1, 0, 0, 0,
    557, 558, 5, 26, 0, 0, 558, 559, 3, 34, 17, 0, 559, 560, 5, 40, 0, 0, 560,
    568, 5, 66, 0, 0, 561, 562, 5, 35, 0, 0, 562, 563, 3, 34, 17, 0, 563, 564,
    5, 40, 0, 0, 564, 565, 5, 66, 0, 0, 565, 567, 1, 0, 0, 0, 566, 561, 1, 0, 0,
    0, 567, 570, 1, 0, 0, 0, 568, 566, 1, 0, 0, 0, 568, 569, 1, 0, 0, 0, 569,
    571, 1, 0, 0, 0, 570, 568, 1, 0, 0, 0, 571, 572, 5, 27, 0, 0, 572, 574, 1,
    0, 0, 0, 573, 537, 1, 0, 0, 0, 573, 542, 1, 0, 0, 0, 573, 557, 1, 0, 0, 0,
    574, 57, 1, 0, 0, 0, 575, 577, 5, 25, 0, 0, 576, 575, 1, 0, 0, 0, 576, 577,
    1, 0, 0, 0, 577, 578, 1, 0, 0, 0, 578, 579, 5, 66, 0, 0, 579, 581, 5, 26, 0,
    0, 580, 582, 3, 60, 30, 0, 581, 580, 1, 0, 0, 0, 581, 582, 1, 0, 0, 0, 582,
    583, 1, 0, 0, 0, 583, 585, 5, 27, 0, 0, 584, 586, 3, 56, 28, 0, 585, 584, 1,
    0, 0, 0, 585, 586, 1, 0, 0, 0, 586, 59, 1, 0, 0, 0, 587, 592, 3, 34, 17, 0,
    588, 589, 5, 35, 0, 0, 589, 591, 3, 34, 17, 0, 590, 588, 1, 0, 0, 0, 591,
    594, 1, 0, 0, 0, 592, 590, 1, 0, 0, 0, 592, 593, 1, 0, 0, 0, 593, 61, 1, 0,
    0, 0, 594, 592, 1, 0, 0, 0, 595, 600, 5, 66, 0, 0, 596, 597, 5, 66, 0, 0,
    597, 598, 5, 34, 0, 0, 598, 600, 5, 66, 0, 0, 599, 595, 1, 0, 0, 0, 599,
    596, 1, 0, 0, 0, 600, 604, 1, 0, 0, 0, 601, 603, 3, 64, 32, 0, 602, 601, 1,
    0, 0, 0, 603, 606, 1, 0, 0, 0, 604, 602, 1, 0, 0, 0, 604, 605, 1, 0, 0, 0,
    605, 63, 1, 0, 0, 0, 606, 604, 1, 0, 0, 0, 607, 608, 5, 28, 0, 0, 608, 609,
    3, 34, 17, 0, 609, 610, 5, 29, 0, 0, 610, 65, 1, 0, 0, 0, 611, 616, 5, 66,
    0, 0, 612, 613, 5, 35, 0, 0, 613, 615, 5, 66, 0, 0, 614, 612, 1, 0, 0, 0,
    615, 618, 1, 0, 0, 0, 616, 614, 1, 0, 0, 0, 616, 617, 1, 0, 0, 0, 617, 67,
    1, 0, 0, 0, 618, 616, 1, 0, 0, 0, 619, 624, 7, 9, 0, 0, 620, 621, 5, 35, 0,
    0, 621, 623, 7, 9, 0, 0, 622, 620, 1, 0, 0, 0, 623, 626, 1, 0, 0, 0, 624,
    622, 1, 0, 0, 0, 624, 625, 1, 0, 0, 0, 625, 69, 1, 0, 0, 0, 626, 624, 1, 0,
    0, 0, 627, 632, 5, 67, 0, 0, 628, 629, 5, 35, 0, 0, 629, 631, 5, 67, 0, 0,
    630, 628, 1, 0, 0, 0, 631, 634, 1, 0, 0, 0, 632, 630, 1, 0, 0, 0, 632, 633,
    1, 0, 0, 0, 633, 71, 1, 0, 0, 0, 634, 632, 1, 0, 0, 0, 64, 75, 81, 87, 91,
    102, 110, 116, 125, 154, 177, 181, 184, 189, 198, 206, 212, 243, 265, 286,
    296, 302, 314, 330, 349, 354, 363, 368, 374, 378, 389, 419, 421, 423, 438,
    444, 449, 453, 456, 467, 472, 476, 479, 490, 497, 500, 511, 516, 521, 528,
    531, 535, 539, 552, 568, 573, 576, 581, 585, 592, 599, 604, 616, 624, 632,
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
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public DOT(): TerminalNode {
    return this.getToken(CircomParser.DOT, 0);
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
