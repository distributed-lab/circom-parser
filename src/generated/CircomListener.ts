// Generated from parser/Circom.g4 by ANTLR 4.13.1

import { ParseTreeListener } from "antlr4";

import { CircuitContext } from "./CircomParser";
import { PragmaDeclarationContext } from "./CircomParser";
import { IncludeDeclarationContext } from "./CircomParser";
import { BlockDeclarationContext } from "./CircomParser";
import { FunctionDeclarationContext } from "./CircomParser";
import { FunctionBlockContext } from "./CircomParser";
import { FuncBlockContext } from "./CircomParser";
import { FuncSelfOpContext } from "./CircomParser";
import { FuncVarDeclarationContext } from "./CircomParser";
import { FuncAssignmentExpressionContext } from "./CircomParser";
import { FuncVariadicAssignmentContext } from "./CircomParser";
import { IfFuncStmtContext } from "./CircomParser";
import { WhileFuncStmtContext } from "./CircomParser";
import { ForFuncStmtContext } from "./CircomParser";
import { ReturnFuncStmtContext } from "./CircomParser";
import { AssertFuncStmtContext } from "./CircomParser";
import { LogFuncStmtContext } from "./CircomParser";
import { TemplateDeclarationContext } from "./CircomParser";
import { TemplateBlockContext } from "./CircomParser";
import { ComponentMainDeclarationContext } from "./CircomParser";
import { PublicInputsListContext } from "./CircomParser";
import { TemplateStmtContext } from "./CircomParser";
import { ElementContext } from "./CircomParser";
import { ForControlContext } from "./CircomParser";
import { ForInitContext } from "./CircomParser";
import { ForUpdateContext } from "./CircomParser";
import { ParExpressionContext } from "./CircomParser";
import { TernaryExpressionContext } from "./CircomParser";
import { DotExpressionContext } from "./CircomParser";
import { PrimaryExpressionContext } from "./CircomParser";
import { BinaryExpressionContext } from "./CircomParser";
import { BlockInstantiationExpressionContext } from "./CircomParser";
import { UnaryExpressionContext } from "./CircomParser";
import { PrimaryContext } from "./CircomParser";
import { LogStmtContext } from "./CircomParser";
import { ComponentDefinitionContext } from "./CircomParser";
import { ComponentDeclarationContext } from "./CircomParser";
import { SignalDefinitionContext } from "./CircomParser";
import { TagListContext } from "./CircomParser";
import { SignalDeclarationContext } from "./CircomParser";
import { VarDefinitionContext } from "./CircomParser";
import { VarDeclarationContext } from "./CircomParser";
import { RhsValueContext } from "./CircomParser";
import { ComponentCallContext } from "./CircomParser";
import { BlockInstantiationContext } from "./CircomParser";
import { ExpressionListContext } from "./CircomParser";
import { IdentifierContext } from "./CircomParser";
import { ArrayDimensionContext } from "./CircomParser";
import { ArgsContext } from "./CircomParser";
import { ArgsWithUnderscoreContext } from "./CircomParser";
import { NumSequenceContext } from "./CircomParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CircomParser`.
 */
export default class CircomListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `CircomParser.circuit`.
   * @param ctx the parse tree
   */
  enterCircuit?: (ctx: CircuitContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.circuit`.
   * @param ctx the parse tree
   */
  exitCircuit?: (ctx: CircuitContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.pragmaDeclaration`.
   * @param ctx the parse tree
   */
  enterPragmaDeclaration?: (ctx: PragmaDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.pragmaDeclaration`.
   * @param ctx the parse tree
   */
  exitPragmaDeclaration?: (ctx: PragmaDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.includeDeclaration`.
   * @param ctx the parse tree
   */
  enterIncludeDeclaration?: (ctx: IncludeDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.includeDeclaration`.
   * @param ctx the parse tree
   */
  exitIncludeDeclaration?: (ctx: IncludeDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.blockDeclaration`.
   * @param ctx the parse tree
   */
  enterBlockDeclaration?: (ctx: BlockDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.blockDeclaration`.
   * @param ctx the parse tree
   */
  exitBlockDeclaration?: (ctx: BlockDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.functionDeclaration`.
   * @param ctx the parse tree
   */
  enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.functionDeclaration`.
   * @param ctx the parse tree
   */
  exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.functionBlock`.
   * @param ctx the parse tree
   */
  enterFunctionBlock?: (ctx: FunctionBlockContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.functionBlock`.
   * @param ctx the parse tree
   */
  exitFunctionBlock?: (ctx: FunctionBlockContext) => void;
  /**
   * Enter a parse tree produced by the `FuncBlock`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterFuncBlock?: (ctx: FuncBlockContext) => void;
  /**
   * Exit a parse tree produced by the `FuncBlock`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitFuncBlock?: (ctx: FuncBlockContext) => void;
  /**
   * Enter a parse tree produced by the `FuncSelfOp`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterFuncSelfOp?: (ctx: FuncSelfOpContext) => void;
  /**
   * Exit a parse tree produced by the `FuncSelfOp`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitFuncSelfOp?: (ctx: FuncSelfOpContext) => void;
  /**
   * Enter a parse tree produced by the `FuncVarDeclaration`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterFuncVarDeclaration?: (ctx: FuncVarDeclarationContext) => void;
  /**
   * Exit a parse tree produced by the `FuncVarDeclaration`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitFuncVarDeclaration?: (ctx: FuncVarDeclarationContext) => void;
  /**
   * Enter a parse tree produced by the `FuncAssignmentExpression`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterFuncAssignmentExpression?: (
    ctx: FuncAssignmentExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `FuncAssignmentExpression`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitFuncAssignmentExpression?: (ctx: FuncAssignmentExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `FuncVariadicAssignment`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterFuncVariadicAssignment?: (ctx: FuncVariadicAssignmentContext) => void;
  /**
   * Exit a parse tree produced by the `FuncVariadicAssignment`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitFuncVariadicAssignment?: (ctx: FuncVariadicAssignmentContext) => void;
  /**
   * Enter a parse tree produced by the `IfFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterIfFuncStmt?: (ctx: IfFuncStmtContext) => void;
  /**
   * Exit a parse tree produced by the `IfFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitIfFuncStmt?: (ctx: IfFuncStmtContext) => void;
  /**
   * Enter a parse tree produced by the `WhileFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterWhileFuncStmt?: (ctx: WhileFuncStmtContext) => void;
  /**
   * Exit a parse tree produced by the `WhileFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitWhileFuncStmt?: (ctx: WhileFuncStmtContext) => void;
  /**
   * Enter a parse tree produced by the `ForFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterForFuncStmt?: (ctx: ForFuncStmtContext) => void;
  /**
   * Exit a parse tree produced by the `ForFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitForFuncStmt?: (ctx: ForFuncStmtContext) => void;
  /**
   * Enter a parse tree produced by the `ReturnFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterReturnFuncStmt?: (ctx: ReturnFuncStmtContext) => void;
  /**
   * Exit a parse tree produced by the `ReturnFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitReturnFuncStmt?: (ctx: ReturnFuncStmtContext) => void;
  /**
   * Enter a parse tree produced by the `AssertFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterAssertFuncStmt?: (ctx: AssertFuncStmtContext) => void;
  /**
   * Exit a parse tree produced by the `AssertFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitAssertFuncStmt?: (ctx: AssertFuncStmtContext) => void;
  /**
   * Enter a parse tree produced by the `LogFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  enterLogFuncStmt?: (ctx: LogFuncStmtContext) => void;
  /**
   * Exit a parse tree produced by the `LogFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   */
  exitLogFuncStmt?: (ctx: LogFuncStmtContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.templateDeclaration`.
   * @param ctx the parse tree
   */
  enterTemplateDeclaration?: (ctx: TemplateDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.templateDeclaration`.
   * @param ctx the parse tree
   */
  exitTemplateDeclaration?: (ctx: TemplateDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.templateBlock`.
   * @param ctx the parse tree
   */
  enterTemplateBlock?: (ctx: TemplateBlockContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.templateBlock`.
   * @param ctx the parse tree
   */
  exitTemplateBlock?: (ctx: TemplateBlockContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.componentMainDeclaration`.
   * @param ctx the parse tree
   */
  enterComponentMainDeclaration?: (
    ctx: ComponentMainDeclarationContext,
  ) => void;
  /**
   * Exit a parse tree produced by `CircomParser.componentMainDeclaration`.
   * @param ctx the parse tree
   */
  exitComponentMainDeclaration?: (ctx: ComponentMainDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.publicInputsList`.
   * @param ctx the parse tree
   */
  enterPublicInputsList?: (ctx: PublicInputsListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.publicInputsList`.
   * @param ctx the parse tree
   */
  exitPublicInputsList?: (ctx: PublicInputsListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.templateStmt`.
   * @param ctx the parse tree
   */
  enterTemplateStmt?: (ctx: TemplateStmtContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.templateStmt`.
   * @param ctx the parse tree
   */
  exitTemplateStmt?: (ctx: TemplateStmtContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.element`.
   * @param ctx the parse tree
   */
  enterElement?: (ctx: ElementContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.element`.
   * @param ctx the parse tree
   */
  exitElement?: (ctx: ElementContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.forControl`.
   * @param ctx the parse tree
   */
  enterForControl?: (ctx: ForControlContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.forControl`.
   * @param ctx the parse tree
   */
  exitForControl?: (ctx: ForControlContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.forInit`.
   * @param ctx the parse tree
   */
  enterForInit?: (ctx: ForInitContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.forInit`.
   * @param ctx the parse tree
   */
  exitForInit?: (ctx: ForInitContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.forUpdate`.
   * @param ctx the parse tree
   */
  enterForUpdate?: (ctx: ForUpdateContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.forUpdate`.
   * @param ctx the parse tree
   */
  exitForUpdate?: (ctx: ForUpdateContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.parExpression`.
   * @param ctx the parse tree
   */
  enterParExpression?: (ctx: ParExpressionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.parExpression`.
   * @param ctx the parse tree
   */
  exitParExpression?: (ctx: ParExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `TernaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `TernaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `DotExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterDotExpression?: (ctx: DotExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `DotExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitDotExpression?: (ctx: DotExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `PrimaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `PrimaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `BinaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterBinaryExpression?: (ctx: BinaryExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `BinaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitBinaryExpression?: (ctx: BinaryExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `BlockInstantiationExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterBlockInstantiationExpression?: (
    ctx: BlockInstantiationExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `BlockInstantiationExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitBlockInstantiationExpression?: (
    ctx: BlockInstantiationExpressionContext,
  ) => void;
  /**
   * Enter a parse tree produced by the `UnaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `UnaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.primary`.
   * @param ctx the parse tree
   */
  enterPrimary?: (ctx: PrimaryContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.primary`.
   * @param ctx the parse tree
   */
  exitPrimary?: (ctx: PrimaryContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.logStmt`.
   * @param ctx the parse tree
   */
  enterLogStmt?: (ctx: LogStmtContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.logStmt`.
   * @param ctx the parse tree
   */
  exitLogStmt?: (ctx: LogStmtContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.componentDefinition`.
   * @param ctx the parse tree
   */
  enterComponentDefinition?: (ctx: ComponentDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.componentDefinition`.
   * @param ctx the parse tree
   */
  exitComponentDefinition?: (ctx: ComponentDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.componentDeclaration`.
   * @param ctx the parse tree
   */
  enterComponentDeclaration?: (ctx: ComponentDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.componentDeclaration`.
   * @param ctx the parse tree
   */
  exitComponentDeclaration?: (ctx: ComponentDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.signalDefinition`.
   * @param ctx the parse tree
   */
  enterSignalDefinition?: (ctx: SignalDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.signalDefinition`.
   * @param ctx the parse tree
   */
  exitSignalDefinition?: (ctx: SignalDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.tagList`.
   * @param ctx the parse tree
   */
  enterTagList?: (ctx: TagListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.tagList`.
   * @param ctx the parse tree
   */
  exitTagList?: (ctx: TagListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.signalDeclaration`.
   * @param ctx the parse tree
   */
  enterSignalDeclaration?: (ctx: SignalDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.signalDeclaration`.
   * @param ctx the parse tree
   */
  exitSignalDeclaration?: (ctx: SignalDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.varDefinition`.
   * @param ctx the parse tree
   */
  enterVarDefinition?: (ctx: VarDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.varDefinition`.
   * @param ctx the parse tree
   */
  exitVarDefinition?: (ctx: VarDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.varDeclaration`.
   * @param ctx the parse tree
   */
  enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.varDeclaration`.
   * @param ctx the parse tree
   */
  exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.rhsValue`.
   * @param ctx the parse tree
   */
  enterRhsValue?: (ctx: RhsValueContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.rhsValue`.
   * @param ctx the parse tree
   */
  exitRhsValue?: (ctx: RhsValueContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.componentCall`.
   * @param ctx the parse tree
   */
  enterComponentCall?: (ctx: ComponentCallContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.componentCall`.
   * @param ctx the parse tree
   */
  exitComponentCall?: (ctx: ComponentCallContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.blockInstantiation`.
   * @param ctx the parse tree
   */
  enterBlockInstantiation?: (ctx: BlockInstantiationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.blockInstantiation`.
   * @param ctx the parse tree
   */
  exitBlockInstantiation?: (ctx: BlockInstantiationContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.expressionList`.
   * @param ctx the parse tree
   */
  enterExpressionList?: (ctx: ExpressionListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.expressionList`.
   * @param ctx the parse tree
   */
  exitExpressionList?: (ctx: ExpressionListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.arrayDimension`.
   * @param ctx the parse tree
   */
  enterArrayDimension?: (ctx: ArrayDimensionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.arrayDimension`.
   * @param ctx the parse tree
   */
  exitArrayDimension?: (ctx: ArrayDimensionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.args`.
   * @param ctx the parse tree
   */
  enterArgs?: (ctx: ArgsContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.args`.
   * @param ctx the parse tree
   */
  exitArgs?: (ctx: ArgsContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.argsWithUnderscore`.
   * @param ctx the parse tree
   */
  enterArgsWithUnderscore?: (ctx: ArgsWithUnderscoreContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.argsWithUnderscore`.
   * @param ctx the parse tree
   */
  exitArgsWithUnderscore?: (ctx: ArgsWithUnderscoreContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.numSequence`.
   * @param ctx the parse tree
   */
  enterNumSequence?: (ctx: NumSequenceContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.numSequence`.
   * @param ctx the parse tree
   */
  exitNumSequence?: (ctx: NumSequenceContext) => void;
}
