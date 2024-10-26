// Generated from parser/CircomParser.g4 by ANTLR 4.13.1

import { ParseTreeListener } from "antlr4";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CircomParser`.
 */
export default class CircomParserListener extends ParseTreeListener {
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
   * Enter a parse tree produced by `CircomParser.signalHeader`.
   * @param ctx the parse tree
   */
  enterSignalHeader?: (ctx: SignalHeaderContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.signalHeader`.
   * @param ctx the parse tree
   */
  exitSignalHeader?: (ctx: SignalHeaderContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.busHeader`.
   * @param ctx the parse tree
   */
  enterBusHeader?: (ctx: BusHeaderContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.busHeader`.
   * @param ctx the parse tree
   */
  exitBusHeader?: (ctx: BusHeaderContext) => void;
  /**
   * Enter a parse tree produced by the `PragmaVersion`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   */
  enterPragmaVersion?: (ctx: PragmaVersionContext) => void;
  /**
   * Exit a parse tree produced by the `PragmaVersion`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   */
  exitPragmaVersion?: (ctx: PragmaVersionContext) => void;
  /**
   * Enter a parse tree produced by the `PragmaInvalidVersion`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   */
  enterPragmaInvalidVersion?: (ctx: PragmaInvalidVersionContext) => void;
  /**
   * Exit a parse tree produced by the `PragmaInvalidVersion`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   */
  exitPragmaInvalidVersion?: (ctx: PragmaInvalidVersionContext) => void;
  /**
   * Enter a parse tree produced by the `PragmaCustomTemplates`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   */
  enterPragmaCustomTemplates?: (ctx: PragmaCustomTemplatesContext) => void;
  /**
   * Exit a parse tree produced by the `PragmaCustomTemplates`
   * labeled alternative in `CircomParser.pragmaDefinition`.
   * @param ctx the parse tree
   */
  exitPragmaCustomTemplates?: (ctx: PragmaCustomTemplatesContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.includeDefinition`.
   * @param ctx the parse tree
   */
  enterIncludeDefinition?: (ctx: IncludeDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.includeDefinition`.
   * @param ctx the parse tree
   */
  exitIncludeDefinition?: (ctx: IncludeDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.blockDefiniton`.
   * @param ctx the parse tree
   */
  enterBlockDefiniton?: (ctx: BlockDefinitonContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.blockDefiniton`.
   * @param ctx the parse tree
   */
  exitBlockDefiniton?: (ctx: BlockDefinitonContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.functionDefinition`.
   * @param ctx the parse tree
   */
  enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.functionDefinition`.
   * @param ctx the parse tree
   */
  exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.templateDefinition`.
   * @param ctx the parse tree
   */
  enterTemplateDefinition?: (ctx: TemplateDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.templateDefinition`.
   * @param ctx the parse tree
   */
  exitTemplateDefinition?: (ctx: TemplateDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.busDefinition`.
   * @param ctx the parse tree
   */
  enterBusDefinition?: (ctx: BusDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.busDefinition`.
   * @param ctx the parse tree
   */
  exitBusDefinition?: (ctx: BusDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.publicInputsDefinition`.
   * @param ctx the parse tree
   */
  enterPublicInputsDefinition?: (ctx: PublicInputsDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.publicInputsDefinition`.
   * @param ctx the parse tree
   */
  exitPublicInputsDefinition?: (ctx: PublicInputsDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.tagDefinition`.
   * @param ctx the parse tree
   */
  enterTagDefinition?: (ctx: TagDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.tagDefinition`.
   * @param ctx the parse tree
   */
  exitTagDefinition?: (ctx: TagDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.logDefinition`.
   * @param ctx the parse tree
   */
  enterLogDefinition?: (ctx: LogDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.logDefinition`.
   * @param ctx the parse tree
   */
  exitLogDefinition?: (ctx: LogDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.assertDefinition`.
   * @param ctx the parse tree
   */
  enterAssertDefinition?: (ctx: AssertDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.assertDefinition`.
   * @param ctx the parse tree
   */
  exitAssertDefinition?: (ctx: AssertDefinitionContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.declarations`.
   * @param ctx the parse tree
   */
  enterDeclarations?: (ctx: DeclarationsContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.declarations`.
   * @param ctx the parse tree
   */
  exitDeclarations?: (ctx: DeclarationsContext) => void;
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
   * Enter a parse tree produced by `CircomParser.busDeclaration`.
   * @param ctx the parse tree
   */
  enterBusDeclaration?: (ctx: BusDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.busDeclaration`.
   * @param ctx the parse tree
   */
  exitBusDeclaration?: (ctx: BusDeclarationContext) => void;
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
   * Enter a parse tree produced by `CircomParser.body`.
   * @param ctx the parse tree
   */
  enterBody?: (ctx: BodyContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.body`.
   * @param ctx the parse tree
   */
  exitBody?: (ctx: BodyContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.statments`.
   * @param ctx the parse tree
   */
  enterStatments?: (ctx: StatmentsContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.statments`.
   * @param ctx the parse tree
   */
  exitStatments?: (ctx: StatmentsContext) => void;
  /**
   * Enter a parse tree produced by the `IfWithFollowUpIf`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  enterIfWithFollowUpIf?: (ctx: IfWithFollowUpIfContext) => void;
  /**
   * Exit a parse tree produced by the `IfWithFollowUpIf`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  exitIfWithFollowUpIf?: (ctx: IfWithFollowUpIfContext) => void;
  /**
   * Enter a parse tree produced by the `IfRegular`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  enterIfRegular?: (ctx: IfRegularContext) => void;
  /**
   * Exit a parse tree produced by the `IfRegular`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  exitIfRegular?: (ctx: IfRegularContext) => void;
  /**
   * Enter a parse tree produced by the `IfRegularElseWithFollowUpIf`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  enterIfRegularElseWithFollowUpIf?: (
    ctx: IfRegularElseWithFollowUpIfContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `IfRegularElseWithFollowUpIf`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  exitIfRegularElseWithFollowUpIf?: (
    ctx: IfRegularElseWithFollowUpIfContext,
  ) => void;
  /**
   * Enter a parse tree produced by the `IfRegularElseRegular`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  enterIfRegularElseRegular?: (ctx: IfRegularElseRegularContext) => void;
  /**
   * Exit a parse tree produced by the `IfRegularElseRegular`
   * labeled alternative in `CircomParser.ifStatments`.
   * @param ctx the parse tree
   */
  exitIfRegularElseRegular?: (ctx: IfRegularElseRegularContext) => void;
  /**
   * Enter a parse tree produced by the `RStatmentBody`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  enterRStatmentBody?: (ctx: RStatmentBodyContext) => void;
  /**
   * Exit a parse tree produced by the `RStatmentBody`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  exitRStatmentBody?: (ctx: RStatmentBodyContext) => void;
  /**
   * Enter a parse tree produced by the `RStatmentExpression`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  enterRStatmentExpression?: (ctx: RStatmentExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `RStatmentExpression`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  exitRStatmentExpression?: (ctx: RStatmentExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `RStatmentSucstitutions`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  enterRStatmentSucstitutions?: (ctx: RStatmentSucstitutionsContext) => void;
  /**
   * Exit a parse tree produced by the `RStatmentSucstitutions`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  exitRStatmentSucstitutions?: (ctx: RStatmentSucstitutionsContext) => void;
  /**
   * Enter a parse tree produced by the `RStatmentCycles`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  enterRStatmentCycles?: (ctx: RStatmentCyclesContext) => void;
  /**
   * Exit a parse tree produced by the `RStatmentCycles`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  exitRStatmentCycles?: (ctx: RStatmentCyclesContext) => void;
  /**
   * Enter a parse tree produced by the `RStatmentEqConstraint`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  enterRStatmentEqConstraint?: (ctx: RStatmentEqConstraintContext) => void;
  /**
   * Exit a parse tree produced by the `RStatmentEqConstraint`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  exitRStatmentEqConstraint?: (ctx: RStatmentEqConstraintContext) => void;
  /**
   * Enter a parse tree produced by the `RStatmentReturn`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  enterRStatmentReturn?: (ctx: RStatmentReturnContext) => void;
  /**
   * Exit a parse tree produced by the `RStatmentReturn`
   * labeled alternative in `CircomParser.regularStatmetns`.
   * @param ctx the parse tree
   */
  exitRStatmentReturn?: (ctx: RStatmentReturnContext) => void;
  /**
   * Enter a parse tree produced by the `CycleForWithDeclaration`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   */
  enterCycleForWithDeclaration?: (ctx: CycleForWithDeclarationContext) => void;
  /**
   * Exit a parse tree produced by the `CycleForWithDeclaration`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   */
  exitCycleForWithDeclaration?: (ctx: CycleForWithDeclarationContext) => void;
  /**
   * Enter a parse tree produced by the `CycleForWithoutDeclaration`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   */
  enterCycleForWithoutDeclaration?: (
    ctx: CycleForWithoutDeclarationContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `CycleForWithoutDeclaration`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   */
  exitCycleForWithoutDeclaration?: (
    ctx: CycleForWithoutDeclarationContext,
  ) => void;
  /**
   * Enter a parse tree produced by the `CycleWhile`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   */
  enterCycleWhile?: (ctx: CycleWhileContext) => void;
  /**
   * Exit a parse tree produced by the `CycleWhile`
   * labeled alternative in `CircomParser.cycleStatments`.
   * @param ctx the parse tree
   */
  exitCycleWhile?: (ctx: CycleWhileContext) => void;
  /**
   * Enter a parse tree produced by the `SubsLeftAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  enterSubsLeftAssignmet?: (ctx: SubsLeftAssignmetContext) => void;
  /**
   * Exit a parse tree produced by the `SubsLeftAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  exitSubsLeftAssignmet?: (ctx: SubsLeftAssignmetContext) => void;
  /**
   * Enter a parse tree produced by the `SubsRightSimpleAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  enterSubsRightSimpleAssignmet?: (
    ctx: SubsRightSimpleAssignmetContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `SubsRightSimpleAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  exitSubsRightSimpleAssignmet?: (ctx: SubsRightSimpleAssignmetContext) => void;
  /**
   * Enter a parse tree produced by the `SubsRightConstrAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  enterSubsRightConstrAssignmet?: (
    ctx: SubsRightConstrAssignmetContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `SubsRightConstrAssignmet`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  exitSubsRightConstrAssignmet?: (ctx: SubsRightConstrAssignmetContext) => void;
  /**
   * Enter a parse tree produced by the `SubsAssignmetWithOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  enterSubsAssignmetWithOperation?: (
    ctx: SubsAssignmetWithOperationContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `SubsAssignmetWithOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  exitSubsAssignmetWithOperation?: (
    ctx: SubsAssignmetWithOperationContext,
  ) => void;
  /**
   * Enter a parse tree produced by the `SubsIcnDecOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  enterSubsIcnDecOperation?: (ctx: SubsIcnDecOperationContext) => void;
  /**
   * Exit a parse tree produced by the `SubsIcnDecOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  exitSubsIcnDecOperation?: (ctx: SubsIcnDecOperationContext) => void;
  /**
   * Enter a parse tree produced by the `SubsInvalidOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  enterSubsInvalidOperation?: (ctx: SubsInvalidOperationContext) => void;
  /**
   * Exit a parse tree produced by the `SubsInvalidOperation`
   * labeled alternative in `CircomParser.substitutions`.
   * @param ctx the parse tree
   */
  exitSubsInvalidOperation?: (ctx: SubsInvalidOperationContext) => void;
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
   * Enter a parse tree produced by `CircomParser.expressionListWithNames`.
   * @param ctx the parse tree
   */
  enterExpressionListWithNames?: (ctx: ExpressionListWithNamesContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.expressionListWithNames`.
   * @param ctx the parse tree
   */
  exitExpressionListWithNames?: (ctx: ExpressionListWithNamesContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;
  /**
   * Enter a parse tree produced by the `PIdentifierStatment`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPIdentifierStatment?: (ctx: PIdentifierStatmentContext) => void;
  /**
   * Exit a parse tree produced by the `PIdentifierStatment`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPIdentifierStatment?: (ctx: PIdentifierStatmentContext) => void;
  /**
   * Enter a parse tree produced by the `PUnderscore`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPUnderscore?: (ctx: PUnderscoreContext) => void;
  /**
   * Exit a parse tree produced by the `PUnderscore`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPUnderscore?: (ctx: PUnderscoreContext) => void;
  /**
   * Enter a parse tree produced by the `PNumber`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPNumber?: (ctx: PNumberContext) => void;
  /**
   * Exit a parse tree produced by the `PNumber`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPNumber?: (ctx: PNumberContext) => void;
  /**
   * Enter a parse tree produced by the `PParentheses`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPParentheses?: (ctx: PParenthesesContext) => void;
  /**
   * Exit a parse tree produced by the `PParentheses`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPParentheses?: (ctx: PParenthesesContext) => void;
  /**
   * Enter a parse tree produced by the `PArray`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPArray?: (ctx: PArrayContext) => void;
  /**
   * Exit a parse tree produced by the `PArray`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPArray?: (ctx: PArrayContext) => void;
  /**
   * Enter a parse tree produced by the `PCall`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPCall?: (ctx: PCallContext) => void;
  /**
   * Exit a parse tree produced by the `PCall`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPCall?: (ctx: PCallContext) => void;
  /**
   * Enter a parse tree produced by the `PAnonymousCall`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPAnonymousCall?: (ctx: PAnonymousCallContext) => void;
  /**
   * Exit a parse tree produced by the `PAnonymousCall`
   * labeled alternative in `CircomParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPAnonymousCall?: (ctx: PAnonymousCallContext) => void;
  /**
   * Enter a parse tree produced by the `AssignExprConstraint`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  enterAssignExprConstraint?: (ctx: AssignExprConstraintContext) => void;
  /**
   * Exit a parse tree produced by the `AssignExprConstraint`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  exitAssignExprConstraint?: (ctx: AssignExprConstraintContext) => void;
  /**
   * Enter a parse tree produced by the `AssignExprSimple`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  enterAssignExprSimple?: (ctx: AssignExprSimpleContext) => void;
  /**
   * Exit a parse tree produced by the `AssignExprSimple`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  exitAssignExprSimple?: (ctx: AssignExprSimpleContext) => void;
  /**
   * Enter a parse tree produced by the `AssignExprRegular`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  enterAssignExprRegular?: (ctx: AssignExprRegularContext) => void;
  /**
   * Exit a parse tree produced by the `AssignExprRegular`
   * labeled alternative in `CircomParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  exitAssignExprRegular?: (ctx: AssignExprRegularContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.varIdentifier`.
   * @param ctx the parse tree
   */
  enterVarIdentifier?: (ctx: VarIdentifierContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.varIdentifier`.
   * @param ctx the parse tree
   */
  exitVarIdentifier?: (ctx: VarIdentifierContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.varIdentifierList`.
   * @param ctx the parse tree
   */
  enterVarIdentifierList?: (ctx: VarIdentifierListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.varIdentifierList`.
   * @param ctx the parse tree
   */
  exitVarIdentifierList?: (ctx: VarIdentifierListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.signalIdentifier`.
   * @param ctx the parse tree
   */
  enterSignalIdentifier?: (ctx: SignalIdentifierContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.signalIdentifier`.
   * @param ctx the parse tree
   */
  exitSignalIdentifier?: (ctx: SignalIdentifierContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.signalIdentifierList`.
   * @param ctx the parse tree
   */
  enterSignalIdentifierList?: (ctx: SignalIdentifierListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.signalIdentifierList`.
   * @param ctx the parse tree
   */
  exitSignalIdentifierList?: (ctx: SignalIdentifierListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.identifierStatment`.
   * @param ctx the parse tree
   */
  enterIdentifierStatment?: (ctx: IdentifierStatmentContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.identifierStatment`.
   * @param ctx the parse tree
   */
  exitIdentifierStatment?: (ctx: IdentifierStatmentContext) => void;
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
   * Enter a parse tree produced by `CircomParser.identifierList`.
   * @param ctx the parse tree
   */
  enterIdentifierList?: (ctx: IdentifierListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.identifierList`.
   * @param ctx the parse tree
   */
  exitIdentifierList?: (ctx: IdentifierListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.simpleIdentifierList`.
   * @param ctx the parse tree
   */
  enterSimpleIdentifierList?: (ctx: SimpleIdentifierListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.simpleIdentifierList`.
   * @param ctx the parse tree
   */
  exitSimpleIdentifierList?: (ctx: SimpleIdentifierListContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.idetifierAccess`.
   * @param ctx the parse tree
   */
  enterIdetifierAccess?: (ctx: IdetifierAccessContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.idetifierAccess`.
   * @param ctx the parse tree
   */
  exitIdetifierAccess?: (ctx: IdetifierAccessContext) => void;
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
   * Enter a parse tree produced by `CircomParser.identifierReferance`.
   * @param ctx the parse tree
   */
  enterIdentifierReferance?: (ctx: IdentifierReferanceContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.identifierReferance`.
   * @param ctx the parse tree
   */
  exitIdentifierReferance?: (ctx: IdentifierReferanceContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.expressionOrString`.
   * @param ctx the parse tree
   */
  enterExpressionOrString?: (ctx: ExpressionOrStringContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.expressionOrString`.
   * @param ctx the parse tree
   */
  exitExpressionOrString?: (ctx: ExpressionOrStringContext) => void;
  /**
   * Enter a parse tree produced by `CircomParser.expressionOrStringList`.
   * @param ctx the parse tree
   */
  enterExpressionOrStringList?: (ctx: ExpressionOrStringListContext) => void;
  /**
   * Exit a parse tree produced by `CircomParser.expressionOrStringList`.
   * @param ctx the parse tree
   */
  exitExpressionOrStringList?: (ctx: ExpressionOrStringListContext) => void;
}
