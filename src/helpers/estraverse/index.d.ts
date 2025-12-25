import type * as Shift from "shift-ast";

export const Syntax: Syntax;

export const VisitorKeys: VisitorKeys;

export class Controller {
  /**
   * Traverse the AST.
   */
  traverse(root: Shift.Node, visitor: Visitor): void;

  /**
   * Traverse and replace the AST.
   */
  replace(root: Shift.Node, visitor: Visitor): Shift.Node;

  /**
   * The current node.
   */
  current(): Shift.Node;

  /**
   * The type of current node.
   */
  type(): string;

  /**
   * Obtain the property paths array from root to the current node.
   */
  path(): Array<string | number> | null;

  /**
   * An array of parent elements.
   */
  parents(): Shift.Node[];

  /**
   * Notify the controller to break the traversals, skip the child nodes of current node or remove the
   * current node.
   */
  notify(flag: VisitorOption): void;

  /**
   * Break the traversals.
   */
  break(): void;

  /**
   * Skip the child nodes of current node.
   */
  skip(): void;

  /**
   * Remove the current node.
   */
  remove(): void;
}

export function traverse(root: Shift.Node, visitor: Visitor): void;

export type NodeType =
  | "AssignmentExpression"
  | "AssignmentPattern"
  | "ArrayExpression"
  | "ArrayPattern"
  | "ArrowFunctionExpression"
  | "AwaitExpression"
  | "BlockStatement"
  | "BinaryExpression"
  | "BreakStatement"
  | "CallExpression"
  | "CatchClause"
  | "ClassBody"
  | "ClassDeclaration"
  | "ClassExpression"
  | "ComprehensionBlock"
  | "ComprehensionExpression"
  | "ConditionalExpression"
  | "ContinueStatement"
  | "DebuggerStatement"
  | "DirectiveStatement"
  | "DoWhileStatement"
  | "EmptyStatement"
  | "ExportAllDeclaration"
  | "ExportDefaultDeclaration"
  | "ExportNamedDeclaration"
  | "ExportSpecifier"
  | "ExpressionStatement"
  | "ForStatement"
  | "ForInStatement"
  | "ForOfStatement"
  | "FunctionDeclaration"
  | "FunctionExpression"
  | "GeneratorExpression"
  | "Identifier"
  | "IfStatement"
  | "ImportExpression"
  | "ImportDeclaration"
  | "ImportDefaultSpecifier"
  | "ImportNamespaceSpecifier"
  | "ImportSpecifier"
  | "Literal"
  | "LabeledStatement"
  | "LogicalExpression"
  | "MemberExpression"
  | "MetaProperty"
  | "MethodDefinition"
  | "ModuleSpecifier"
  | "NewExpression"
  | "ObjectExpression"
  | "ObjectPattern"
  | "Program"
  | "Property"
  | "RestElement"
  | "ReturnStatement"
  | "SequenceExpression"
  | "SpreadElement"
  | "Super"
  | "SwitchStatement"
  | "SwitchCase"
  | "TaggedTemplateExpression"
  | "TemplateElement"
  | "TemplateLiteral"
  | "ThisExpression"
  | "ThrowStatement"
  | "TryStatement"
  | "UnaryExpression"
  | "UpdateExpression"
  | "VariableDeclaration"
  | "VariableDeclarator"
  | "WhileStatement"
  | "WithStatement"
  | "YieldExpression";

export interface Syntax extends Record<NodeType, NodeType> {}

export interface VisitorKeys extends Record<NodeType, string[]> {}

export interface Visitor {
  enter?:
    | ((
        this: Controller,
        node: Shift.Node,
        parent: Shift.Node | null,
      ) => VisitorOption | Shift.Node | void)
    | undefined;

  leave?:
    | ((
        this: Controller,
        node: Shift.Node,
        parent: Shift.Node | null,
      ) => VisitorOption | Shift.Node | void)
    | undefined;

  fallback?: "iteration" | ((this: Controller, node: Shift.Node) => string[]) | undefined;

  keys?: Record<string, string[]> | undefined;
}
