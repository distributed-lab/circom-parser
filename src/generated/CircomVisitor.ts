// Generated from parser/Circom.g4 by ANTLR 4.13.1

import { ParseTreeVisitor } from "antlr4";

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
import { IfFuncStmtContext } from "./CircomParser";
import { WhileFuncStmtContext } from "./CircomParser";
import { ForFuncStmtContext } from "./CircomParser";
import { ReturnFuncStmtContext } from "./CircomParser";
import { TemplateDeclarationContext } from "./CircomParser";
import { TemplateBlockContext } from "./CircomParser";
import { ComponentMainDeclarationContext } from "./CircomParser";
import { TemplateStmtContext } from "./CircomParser";
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
import { ComponentDefinitionContext } from "./CircomParser";
import { ComponentDeclarationContext } from "./CircomParser";
import { SignalDefinitionContext } from "./CircomParser";
import { SignalDeclarationContext } from "./CircomParser";
import { VarDefinitionContext } from "./CircomParser";
import { VarDeclarationContext } from "./CircomParser";
import { RhsValueContext } from "./CircomParser";
import { ComponentCallContext } from "./CircomParser";
import { BlockInstantiationContext } from "./CircomParser";
import { ArrayDimensionContext } from "./CircomParser";
import { ArgsWithUnderscoreContext } from "./CircomParser";
import { ArgsContext } from "./CircomParser";
import { NumSequenceContext } from "./CircomParser";
import { ExpressionListContext } from "./CircomParser";
import { IdentifierContext } from "./CircomParser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CircomParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CircomVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `CircomParser.circuit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCircuit?: (ctx: CircuitContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.pragmaDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPragmaDeclaration?: (ctx: PragmaDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.includeDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncludeDeclaration?: (ctx: IncludeDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.blockDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockDeclaration?: (ctx: BlockDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.functionDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.functionBlock`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionBlock?: (ctx: FunctionBlockContext) => Result;
  /**
   * Visit a parse tree produced by the `FuncBlock`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFuncBlock?: (ctx: FuncBlockContext) => Result;
  /**
   * Visit a parse tree produced by the `FuncSelfOp`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFuncSelfOp?: (ctx: FuncSelfOpContext) => Result;
  /**
   * Visit a parse tree produced by the `FuncVarDeclaration`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFuncVarDeclaration?: (ctx: FuncVarDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by the `FuncAssignmentExpression`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFuncAssignmentExpression?: (
    ctx: FuncAssignmentExpressionContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `IfFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfFuncStmt?: (ctx: IfFuncStmtContext) => Result;
  /**
   * Visit a parse tree produced by the `WhileFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileFuncStmt?: (ctx: WhileFuncStmtContext) => Result;
  /**
   * Visit a parse tree produced by the `ForFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForFuncStmt?: (ctx: ForFuncStmtContext) => Result;
  /**
   * Visit a parse tree produced by the `ReturnFuncStmt`
   * labeled alternative in `CircomParser.functionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturnFuncStmt?: (ctx: ReturnFuncStmtContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.templateDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemplateDeclaration?: (ctx: TemplateDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.templateBlock`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemplateBlock?: (ctx: TemplateBlockContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.componentMainDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentMainDeclaration?: (
    ctx: ComponentMainDeclarationContext,
  ) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.templateStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemplateStmt?: (ctx: TemplateStmtContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.forControl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForControl?: (ctx: ForControlContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.forInit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForInit?: (ctx: ForInitContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.forUpdate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForUpdate?: (ctx: ForUpdateContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.parExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParExpression?: (ctx: ParExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `TernaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `DotExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDotExpression?: (ctx: DotExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `PrimaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `BinaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBinaryExpression?: (ctx: BinaryExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `BlockInstantiationExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockInstantiationExpression?: (
    ctx: BlockInstantiationExpressionContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `UnaryExpression`
   * labeled alternative in `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimary?: (ctx: PrimaryContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.componentDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentDefinition?: (ctx: ComponentDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.componentDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentDeclaration?: (ctx: ComponentDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.signalDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSignalDefinition?: (ctx: SignalDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.signalDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSignalDeclaration?: (ctx: SignalDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.varDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVarDefinition?: (ctx: VarDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.varDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.rhsValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRhsValue?: (ctx: RhsValueContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.componentCall`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentCall?: (ctx: ComponentCallContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.blockInstantiation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockInstantiation?: (ctx: BlockInstantiationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.arrayDimension`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayDimension?: (ctx: ArrayDimensionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.argsWithUnderscore`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgsWithUnderscore?: (ctx: ArgsWithUnderscoreContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.args`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgs?: (ctx: ArgsContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.numSequence`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumSequence?: (ctx: NumSequenceContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.expressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionList?: (ctx: ExpressionListContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifier?: (ctx: IdentifierContext) => Result;
}
