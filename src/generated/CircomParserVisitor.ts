// Generated from parser/CircomParser.g4 by ANTLR 4.13.1

import { ParseTreeVisitor } from "antlr4";

import { CircuitContext } from "./CircomParser";
import { SignalHeaderContext } from "./CircomParser";
import { BusHeaderContext } from "./CircomParser";
import { PragmaVersionContext } from "./CircomParser";
import { PragmaInvalidVersionContext } from "./CircomParser";
import { PragmaCustomTemplatesContext } from "./CircomParser";
import { IncludeDefinitionContext } from "./CircomParser";
import { BlockDefinitonContext } from "./CircomParser";
import { FunctionDefinitionContext } from "./CircomParser";
import { TemplateDefinitionContext } from "./CircomParser";
import { BusDefinitionContext } from "./CircomParser";
import { PublicInputsDefinitionContext } from "./CircomParser";
import { TagDefinitionContext } from "./CircomParser";
import { LogDefinitionContext } from "./CircomParser";
import { AssertDefinitionContext } from "./CircomParser";
import { DeclarationsContext } from "./CircomParser";
import { VarDeclarationContext } from "./CircomParser";
import { SignalDeclarationContext } from "./CircomParser";
import { ComponentDeclarationContext } from "./CircomParser";
import { BusDeclarationContext } from "./CircomParser";
import { ComponentMainDeclarationContext } from "./CircomParser";
import { BodyContext } from "./CircomParser";
import { StatmentsContext } from "./CircomParser";
import { IfWithFollowUpIfContext } from "./CircomParser";
import { IfRegularContext } from "./CircomParser";
import { IfRegularElseWithFollowUpIfContext } from "./CircomParser";
import { IfRegularElseRegularContext } from "./CircomParser";
import { RStatmentBodyContext } from "./CircomParser";
import { RStatmentExpressionContext } from "./CircomParser";
import { RStatmentSucstitutionsContext } from "./CircomParser";
import { RStatmentCyclesContext } from "./CircomParser";
import { RStatmentEqConstraintContext } from "./CircomParser";
import { RStatmentReturnContext } from "./CircomParser";
import { CycleForWithDeclarationContext } from "./CircomParser";
import { CycleForWithoutDeclarationContext } from "./CircomParser";
import { CycleWhileContext } from "./CircomParser";
import { SubsLeftAssignmetContext } from "./CircomParser";
import { SubsRightSimpleAssignmetContext } from "./CircomParser";
import { SubsRightConstrAssignmetContext } from "./CircomParser";
import { SubsAssignmetWithOperationContext } from "./CircomParser";
import { SubsIcnDecOperationContext } from "./CircomParser";
import { SubsInvalidOperationContext } from "./CircomParser";
import { ExpressionListContext } from "./CircomParser";
import { ExpressionListWithNamesContext } from "./CircomParser";
import { ExpressionContext } from "./CircomParser";
import { PIdentifierStatmentContext } from "./CircomParser";
import { PUnderscoreContext } from "./CircomParser";
import { PNumberContext } from "./CircomParser";
import { PParenthesesContext } from "./CircomParser";
import { PArrayContext } from "./CircomParser";
import { PCallContext } from "./CircomParser";
import { PAnonymousCallContext } from "./CircomParser";
import { AssignExprConstraintContext } from "./CircomParser";
import { AssignExprSimpleContext } from "./CircomParser";
import { AssignExprRegularContext } from "./CircomParser";
import { VarIdentifierContext } from "./CircomParser";
import { VarIdentifierListContext } from "./CircomParser";
import { SignalIdentifierContext } from "./CircomParser";
import { SignalIdentifierListContext } from "./CircomParser";
import { IdentifierStatmentContext } from "./CircomParser";
import { IdentifierContext } from "./CircomParser";
import { IdentifierListContext } from "./CircomParser";
import { SimpleIdentifierListContext } from "./CircomParser";
import { IdetifierAccessContext } from "./CircomParser";
import { ArrayDimensionContext } from "./CircomParser";
import { IdentifierReferanceContext } from "./CircomParser";
import { ExpressionOrStringContext } from "./CircomParser";
import { ExpressionOrStringListContext } from "./CircomParser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CircomParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CircomParserVisitor<
  Result,
> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `CircomParser.circuit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCircuit?: (ctx: CircuitContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.signalHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSignalHeader?: (ctx: SignalHeaderContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.busHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBusHeader?: (ctx: BusHeaderContext) => Result;
  /**
   * Visit a parse tree produced by the `PragmaVersion`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPragmaVersion?: (ctx: PragmaVersionContext) => Result;
  /**
   * Visit a parse tree produced by the `PragmaInvalidVersion`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPragmaInvalidVersion?: (ctx: PragmaInvalidVersionContext) => Result;
  /**
   * Visit a parse tree produced by the `PragmaCustomTemplates`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPragmaCustomTemplates?: (ctx: PragmaCustomTemplatesContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.includeDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncludeDefinition?: (ctx: IncludeDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.blockDefiniton`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockDefiniton?: (ctx: BlockDefinitonContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.functionDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.templateDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemplateDefinition?: (ctx: TemplateDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.busDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBusDefinition?: (ctx: BusDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.publicInputsDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPublicInputsDefinition?: (ctx: PublicInputsDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.tagDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTagDefinition?: (ctx: TagDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.logDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogDefinition?: (ctx: LogDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.assertDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssertDefinition?: (ctx: AssertDefinitionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.declarations`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarations?: (ctx: DeclarationsContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.varDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.signalDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSignalDeclaration?: (ctx: SignalDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.componentDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentDeclaration?: (ctx: ComponentDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.busDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBusDeclaration?: (ctx: BusDeclarationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.componentMainDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComponentMainDeclaration?: (
    ctx: ComponentMainDeclarationContext,
  ) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.body`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBody?: (ctx: BodyContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.statments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatments?: (ctx: StatmentsContext) => Result;
  /**
   * Visit a parse tree produced by the `IfWithFollowUpIf`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfWithFollowUpIf?: (ctx: IfWithFollowUpIfContext) => Result;
  /**
   * Visit a parse tree produced by the `IfRegular`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfRegular?: (ctx: IfRegularContext) => Result;
  /**
   * Visit a parse tree produced by the `IfRegularElseWithFollowUpIf`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfRegularElseWithFollowUpIf?: (
    ctx: IfRegularElseWithFollowUpIfContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `IfRegularElseRegular`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfRegularElseRegular?: (ctx: IfRegularElseRegularContext) => Result;
  /**
   * Visit a parse tree produced by the `RStatmentBody`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRStatmentBody?: (ctx: RStatmentBodyContext) => Result;
  /**
   * Visit a parse tree produced by the `RStatmentExpression`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRStatmentExpression?: (ctx: RStatmentExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `RStatmentSucstitutions`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRStatmentSucstitutions?: (ctx: RStatmentSucstitutionsContext) => Result;
  /**
   * Visit a parse tree produced by the `RStatmentCycles`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRStatmentCycles?: (ctx: RStatmentCyclesContext) => Result;
  /**
   * Visit a parse tree produced by the `RStatmentEqConstraint`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRStatmentEqConstraint?: (ctx: RStatmentEqConstraintContext) => Result;
  /**
   * Visit a parse tree produced by the `RStatmentReturn`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRStatmentReturn?: (ctx: RStatmentReturnContext) => Result;
  /**
   * Visit a parse tree produced by the `CycleForWithDeclaration`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCycleForWithDeclaration?: (
    ctx: CycleForWithDeclarationContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `CycleForWithoutDeclaration`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCycleForWithoutDeclaration?: (
    ctx: CycleForWithoutDeclarationContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `CycleWhile`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCycleWhile?: (ctx: CycleWhileContext) => Result;
  /**
   * Visit a parse tree produced by the `SubsLeftAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubsLeftAssignmet?: (ctx: SubsLeftAssignmetContext) => Result;
  /**
   * Visit a parse tree produced by the `SubsRightSimpleAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubsRightSimpleAssignmet?: (
    ctx: SubsRightSimpleAssignmetContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `SubsRightConstrAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubsRightConstrAssignmet?: (
    ctx: SubsRightConstrAssignmetContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `SubsAssignmetWithOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubsAssignmetWithOperation?: (
    ctx: SubsAssignmetWithOperationContext,
  ) => Result;
  /**
   * Visit a parse tree produced by the `SubsIcnDecOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubsIcnDecOperation?: (ctx: SubsIcnDecOperationContext) => Result;
  /**
   * Visit a parse tree produced by the `SubsInvalidOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubsInvalidOperation?: (ctx: SubsInvalidOperationContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.expressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionList?: (ctx: ExpressionListContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.expressionListWithNames`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionListWithNames?: (
    ctx: ExpressionListWithNamesContext,
  ) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result;
  /**
   * Visit a parse tree produced by the `PIdentifierStatment`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPIdentifierStatment?: (ctx: PIdentifierStatmentContext) => Result;
  /**
   * Visit a parse tree produced by the `PUnderscore`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPUnderscore?: (ctx: PUnderscoreContext) => Result;
  /**
   * Visit a parse tree produced by the `PNumber`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPNumber?: (ctx: PNumberContext) => Result;
  /**
   * Visit a parse tree produced by the `PParentheses`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPParentheses?: (ctx: PParenthesesContext) => Result;
  /**
   * Visit a parse tree produced by the `PArray`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPArray?: (ctx: PArrayContext) => Result;
  /**
   * Visit a parse tree produced by the `PCall`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPCall?: (ctx: PCallContext) => Result;
  /**
   * Visit a parse tree produced by the `PAnonymousCall`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPAnonymousCall?: (ctx: PAnonymousCallContext) => Result;
  /**
   * Visit a parse tree produced by the `AssignExprConstraint`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignExprConstraint?: (ctx: AssignExprConstraintContext) => Result;
  /**
   * Visit a parse tree produced by the `AssignExprSimple`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignExprSimple?: (ctx: AssignExprSimpleContext) => Result;
  /**
   * Visit a parse tree produced by the `AssignExprRegular`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignExprRegular?: (ctx: AssignExprRegularContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.varIdentifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVarIdentifier?: (ctx: VarIdentifierContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.varIdentifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVarIdentifierList?: (ctx: VarIdentifierListContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.signalIdentifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSignalIdentifier?: (ctx: SignalIdentifierContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.signalIdentifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSignalIdentifierList?: (ctx: SignalIdentifierListContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.identifierStatment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierStatment?: (ctx: IdentifierStatmentContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifier?: (ctx: IdentifierContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.identifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierList?: (ctx: IdentifierListContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.simpleIdentifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSimpleIdentifierList?: (ctx: SimpleIdentifierListContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.idetifierAccess`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdetifierAccess?: (ctx: IdetifierAccessContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.arrayDimension`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayDimension?: (ctx: ArrayDimensionContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.identifierReferance`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierReferance?: (ctx: IdentifierReferanceContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.expressionOrString`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionOrString?: (ctx: ExpressionOrStringContext) => Result;
  /**
   * Visit a parse tree produced by `CircomParser.expressionOrStringList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionOrStringList?: (ctx: ExpressionOrStringListContext) => Result;
}
