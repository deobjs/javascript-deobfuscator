const Syntax = {
  ArrayAssignmentTarget: "ArrayAssignmentTarget",
  ArrayBinding: "ArrayBinding",
  ArrayExpression: "ArrayExpression",
  ArrowExpression: "ArrowExpression",
  AssignmentExpression: "AssignmentExpression",
  AssignmentTargetIdentifier: "AssignmentTargetIdentifier",
  AssignmentTargetPropertyIdentifier: "AssignmentTargetPropertyIdentifier",
  AssignmentTargetPropertyProperty: "AssignmentTargetPropertyProperty",
  AssignmentTargetWithDefault: "AssignmentTargetWithDefault",
  AwaitExpression: "AwaitExpression",
  BinaryExpression: "BinaryExpression",
  BindingIdentifier: "BindingIdentifier",
  BindingPropertyIdentifier: "BindingPropertyIdentifier",
  BindingPropertyProperty: "BindingPropertyProperty",
  BindingWithDefault: "BindingWithDefault",
  Block: "Block",
  BlockStatement: "BlockStatement",
  BreakStatement: "BreakStatement",
  CallExpression: "CallExpression",
  CatchClause: "CatchClause",
  ClassDeclaration: "ClassDeclaration",
  ClassElement: "ClassElement",
  ClassExpression: "ClassExpression",
  CompoundAssignmentExpression: "CompoundAssignmentExpression",
  ComputedMemberAssignmentTarget: "ComputedMemberAssignmentTarget",
  ComputedMemberExpression: "ComputedMemberExpression",
  ComputedPropertyName: "ComputedPropertyName",
  ConditionalExpression: "ConditionalExpression",
  ContinueStatement: "ContinueStatement",
  DataProperty: "DataProperty",
  DebuggerStatement: "DebuggerStatement",
  Directive: "Directive",
  DoWhileStatement: "DoWhileStatement",
  EmptyStatement: "EmptyStatement",
  Export: "Export",
  ExportAllFrom: "ExportAllFrom",
  ExportDefault: "ExportDefault",
  ExportFrom: "ExportFrom",
  ExportFromSpecifier: "ExportFromSpecifier",
  ExportLocalSpecifier: "ExportLocalSpecifier",
  ExportLocals: "ExportLocals",
  ExpressionStatement: "ExpressionStatement",
  ForAwaitStatement: "ForAwaitStatement",
  ForInStatement: "ForInStatement",
  ForOfStatement: "ForOfStatement",
  ForStatement: "ForStatement",
  FormalParameters: "FormalParameters",
  FunctionBody: "FunctionBody",
  FunctionDeclaration: "FunctionDeclaration",
  FunctionExpression: "FunctionExpression",
  Getter: "Getter",
  IdentifierExpression: "IdentifierExpression",
  IfStatement: "IfStatement",
  Import: "Import",
  ImportNamespace: "ImportNamespace",
  ImportSpecifier: "ImportSpecifier",
  LabeledStatement: "LabeledStatement",
  LiteralBooleanExpression: "LiteralBooleanExpression",
  LiteralInfinityExpression: "LiteralInfinityExpression",
  LiteralNullExpression: "LiteralNullExpression",
  LiteralNumericExpression: "LiteralNumericExpression",
  LiteralRegExpExpression: "LiteralRegExpExpression",
  LiteralStringExpression: "LiteralStringExpression",
  Method: "Method",
  Module: "Module",
  NewExpression: "NewExpression",
  NewTargetExpression: "NewTargetExpression",
  ObjectAssignmentTarget: "ObjectAssignmentTarget",
  ObjectBinding: "ObjectBinding",
  ObjectExpression: "ObjectExpression",
  ReturnStatement: "ReturnStatement",
  Script: "Script",
  Setter: "Setter",
  ShorthandProperty: "ShorthandProperty",
  SpreadElement: "SpreadElement",
  SpreadProperty: "SpreadProperty",
  StaticMemberAssignmentTarget: "StaticMemberAssignmentTarget",
  StaticMemberExpression: "StaticMemberExpression",
  StaticPropertyName: "StaticPropertyName",
  Super: "Super",
  SwitchCase: "SwitchCase",
  SwitchDefault: "SwitchDefault",
  SwitchStatement: "SwitchStatement",
  SwitchStatementWithDefault: "SwitchStatementWithDefault",
  TemplateElement: "TemplateElement",
  TemplateExpression: "TemplateExpression",
  ThisExpression: "ThisExpression",
  ThrowStatement: "ThrowStatement",
  TryCatchStatement: "TryCatchStatement",
  TryFinallyStatement: "TryFinallyStatement",
  UnaryExpression: "UnaryExpression",
  UpdateExpression: "UpdateExpression",
  VariableDeclaration: "VariableDeclaration",
  VariableDeclarationStatement: "VariableDeclarationStatement",
  VariableDeclarator: "VariableDeclarator",
  WhileStatement: "WhileStatement",
  WithStatement: "WithStatement",
  YieldExpression: "YieldExpression",
  YieldGeneratorExpression: "YieldGeneratorExpression",
};

const VisitorKeys = {
  ArrayAssignmentTarget: ["type", "elements", "rest"],
  ArrayBinding: ["type", "elements", "rest"],
  ArrayExpression: ["type", "elements"],
  ArrowExpression: ["type", "isAsync", "params", "body"],
  AssignmentExpression: ["type", "binding", "expression"],
  AssignmentTargetIdentifier: ["type", "name"],
  AssignmentTargetPropertyIdentifier: ["type", "binding", "init"],
  AssignmentTargetPropertyProperty: ["type", "name", "binding"],
  AssignmentTargetWithDefault: ["type", "binding", "init"],
  AwaitExpression: ["type", "expression"],
  BinaryExpression: ["type", "left", "operator", "right"],
  BindingIdentifier: ["type", "name"],
  BindingPropertyIdentifier: ["type", "binding", "init"],
  BindingPropertyProperty: ["type", "name", "binding"],
  BindingWithDefault: ["type", "binding", "init"],
  Block: ["type", "statements"],
  BlockStatement: ["type", "block"],
  BreakStatement: ["type", "label"],
  CallExpression: ["type", "callee", "arguments"],
  CatchClause: ["type", "binding", "body"],
  ClassDeclaration: ["type", "name", "super", "elements"],
  ClassElement: ["type", "isStatic", "method"],
  ClassExpression: ["type", "name", "super", "elements"],
  CompoundAssignmentExpression: ["type", "binding", "operator", "expression"],
  ComputedMemberAssignmentTarget: ["type", "object", "expression"],
  ComputedMemberExpression: ["type", "object", "expression"],
  ComputedPropertyName: ["type", "expression"],
  ConditionalExpression: ["type", "test", "consequent", "alternate"],
  ContinueStatement: ["type", "label"],
  DataProperty: ["type", "name", "expression"],
  DebuggerStatement: ["type"],
  Directive: ["type", "rawValue"],
  DoWhileStatement: ["type", "body", "test"],
  EmptyStatement: ["type"],
  Export: ["type", "declaration"],
  ExportAllFrom: ["type", "moduleSpecifier"],
  ExportDefault: ["type", "body"],
  ExportFrom: ["type", "namedExports", "moduleSpecifier"],
  ExportFromSpecifier: ["type", "name", "exportedName"],
  ExportLocalSpecifier: ["type", "name", "exportedName"],
  ExportLocals: ["type", "namedExports"],
  ExpressionStatement: ["type", "expression"],
  ForAwaitStatement: ["type", "left", "right", "body"],
  ForInStatement: ["type", "left", "right", "body"],
  ForOfStatement: ["type", "left", "right", "body"],
  ForStatement: ["type", "init", "test", "update", "body"],
  FormalParameters: ["type", "items", "rest"],
  FunctionBody: ["type", "directives", "statements"],
  FunctionDeclaration: ["type", "isAsync", "isGenerator", "name", "params", "body"],
  FunctionExpression: ["type", "isAsync", "isGenerator", "name", "params", "body"],
  Getter: ["type", "name", "body"],
  IdentifierExpression: ["type", "name"],
  IfStatement: ["type", "test", "consequent", "alternate"],
  Import: ["type", "defaultBinding", "namedImports", "moduleSpecifier"],
  ImportNamespace: ["type", "defaultBinding", "namespaceBinding", "moduleSpecifier"],
  ImportSpecifier: ["type", "name", "binding"],
  LabeledStatement: ["type", "label", "body"],
  LiteralBooleanExpression: ["type", "value"],
  LiteralInfinityExpression: ["type"],
  LiteralNullExpression: ["type"],
  LiteralNumericExpression: ["type", "value"],
  LiteralRegExpExpression: [
    "type",
    "pattern",
    "global",
    "ignoreCase",
    "multiLine",
    "dotAll",
    "unicode",
    "sticky",
  ],
  LiteralStringExpression: ["type", "value"],
  Method: ["type", "isAsync", "isGenerator", "name", "params", "body"],
  Module: ["type", "directives", "items"],
  NewExpression: ["type", "callee", "arguments"],
  NewTargetExpression: ["type"],
  ObjectAssignmentTarget: ["type", "properties", "rest"],
  ObjectBinding: ["type", "properties", "rest"],
  ObjectExpression: ["type", "properties"],
  ReturnStatement: ["type", "expression"],
  Script: ["type", "directives", "statements"],
  Setter: ["type", "name", "param", "body"],
  ShorthandProperty: ["type", "name"],
  SpreadElement: ["type", "expression"],
  SpreadProperty: ["type", "expression"],
  StaticMemberAssignmentTarget: ["type", "object", "property"],
  StaticMemberExpression: ["type", "object", "property"],
  StaticPropertyName: ["type", "value"],
  Super: ["type"],
  SwitchCase: ["type", "test", "consequent"],
  SwitchDefault: ["type", "consequent"],
  SwitchStatement: ["type", "discriminant", "cases"],
  SwitchStatementWithDefault: [
    "type",
    "discriminant",
    "preDefaultCases",
    "defaultCase",
    "postDefaultCases",
  ],
  TemplateElement: ["type", "rawValue"],
  TemplateExpression: ["type", "tag", "elements"],
  ThisExpression: ["type"],
  ThrowStatement: ["type", "expression"],
  TryCatchStatement: ["type", "body", "catchClause"],
  TryFinallyStatement: ["type", "body", "catchClause", "finalizer"],
  UnaryExpression: ["type", "operator", "operand"],
  UpdateExpression: ["type", "isPrefix", "operator", "operand"],
  VariableDeclaration: ["type", "kind", "declarators"],
  VariableDeclarationStatement: ["type", "declaration"],
  VariableDeclarator: ["type", "binding", "init"],
  WhileStatement: ["type", "test", "body"],
  WithStatement: ["type", "object", "body"],
  YieldExpression: ["type", "expression"],
  YieldGeneratorExpression: ["type", "expression"],
};

// unique id
const BREAK = Symbol("BREAK");
const SKIP = Symbol("SKIP");
const REMOVE = Symbol("REMOVE");

class Reference {
  constructor(parent, key) {
    this.parent = parent;
    this.key = key;
  }
  replace(node) {
    this.parent[this.key] = node;
  }
  remove() {
    if (Array.isArray(this.parent)) {
      this.parent.splice(this.key, 1);
      return true;
    } else {
      this.replace(null);
      return false;
    }
  }
}

class Element {
  constructor(node, path, wrap, ref) {
    this.node = node;
    this.path = path;
    this.wrap = wrap;
    this.ref = ref;
  }
}

class Controller {
  constructor() {}
  // API:
  // return property path array from root to current node
  path() {
    var i, iz, j, jz, result, element;

    function addToPath(result, path) {
      if (Array.isArray(path)) {
        for (j = 0, jz = path.length; j < jz; ++j) {
          result.push(path[j]);
        }
      } else {
        result.push(path);
      }
    }

    // root node
    if (!this.__current.path) {
      return null;
    }

    // first node is sentinel, second node is root element
    result = [];
    for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
      element = this.__leavelist[i];
      addToPath(result, element.path);
    }
    addToPath(result, this.__current.path);
    return result;
  }
  // API:
  // return type of current node
  type() {
    var node = this.current();
    return node.type || this.__current.wrap;
  }
  // API:
  // return array of parent elements
  parents() {
    var i, iz, result;

    // first node is sentinel
    result = [];
    for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
      result.push(this.__leavelist[i].node);
    }

    return result;
  }
  // API:
  // return current node
  current() {
    return this.__current.node;
  }
  __execute(callback, element) {
    var previous, result;

    result = undefined;

    previous = this.__current;
    this.__current = element;
    this.__state = null;
    if (callback) {
      result = callback.call(
        this,
        element.node,
        this.__leavelist[this.__leavelist.length - 1].node,
      );
    }
    this.__current = previous;

    return result;
  }
  // API:
  // notify control skip / break
  notify(flag) {
    this.__state = flag;
  }
  // API:
  // skip child nodes of current node
  skip() {
    this.notify(SKIP);
  }
  // API:
  // break traversals
  break() {
    this.notify(BREAK);
  }
  // API:
  // remove node
  remove() {
    this.notify(REMOVE);
  }
  __initialize(root, visitor) {
    this.visitor = visitor;
    this.root = root;
    this.__worklist = [];
    this.__leavelist = [];
    this.__current = null;
    this.__state = null;
    this.__fallback = null;
    if (visitor.fallback === "iteration") {
      this.__fallback = Object.keys;
    } else if (typeof visitor.fallback === "function") {
      this.__fallback = visitor.fallback;
    }

    this.__keys = VisitorKeys;
    if (visitor.keys) {
      this.__keys = Object.assign(Object.create(this.__keys), visitor.keys);
    }
  }
  traverse(root, visitor) {
    var worklist,
      leavelist,
      element,
      node,
      nodeType,
      ret,
      key,
      current,
      current2,
      candidates,
      candidate,
      sentinel;

    this.__initialize(root, visitor);

    sentinel = {};

    // reference
    worklist = this.__worklist;
    leavelist = this.__leavelist;

    // initialize
    worklist.push(new Element(root, null, null, null));
    leavelist.push(new Element(null, null, null, null));

    while (worklist.length) {
      element = worklist.pop();

      if (element === sentinel) {
        element = leavelist.pop();

        ret = this.__execute(visitor.leave, element);

        if (this.__state === BREAK || ret === BREAK) {
          return;
        }
        continue;
      }

      if (element.node) {
        ret = this.__execute(visitor.enter, element);

        if (this.__state === BREAK || ret === BREAK) {
          return;
        }

        worklist.push(sentinel);
        leavelist.push(element);

        if (this.__state === SKIP || ret === SKIP) {
          continue;
        }

        node = element.node;
        nodeType = node.type || element.wrap;
        candidates = this.__keys[nodeType];
        if (!candidates) {
          if (this.__fallback) {
            candidates = this.__fallback(node);
          } else {
            throw new Error("Unknown node type " + nodeType + ".");
          }
        }

        current = candidates.length;
        while ((current -= 1) >= 0) {
          key = candidates[current];
          candidate = node[key];
          if (!candidate) {
            continue;
          }

          if (Array.isArray(candidate)) {
            current2 = candidate.length;
            while ((current2 -= 1) >= 0) {
              if (!candidate[current2]) {
                continue;
              }
              if (isProperty(nodeType, candidates[current])) {
                element = new Element(candidate[current2], [key, current2], "Property", null);
              } else if (isNode(candidate[current2])) {
                element = new Element(candidate[current2], [key, current2], null, null);
              } else {
                continue;
              }
              worklist.push(element);
            }
          } else if (isNode(candidate)) {
            worklist.push(new Element(candidate, key, null, null));
          }
        }
      }
    }
  }
  replace(root, visitor) {
    var worklist,
      leavelist,
      node,
      nodeType,
      target,
      element,
      current,
      current2,
      candidates,
      candidate,
      sentinel,
      outer,
      key;

    function removeElem(element) {
      var i, key, nextElem, parent;

      if (element.ref.remove()) {
        // When the reference is an element of an array.
        key = element.ref.key;
        parent = element.ref.parent;

        // If removed from array, then decrease following items' keys.
        i = worklist.length;
        while (i--) {
          nextElem = worklist[i];
          if (nextElem.ref && nextElem.ref.parent === parent) {
            if (nextElem.ref.key < key) {
              break;
            }
            --nextElem.ref.key;
          }
        }
      }
    }

    this.__initialize(root, visitor);

    sentinel = {};

    // reference
    worklist = this.__worklist;
    leavelist = this.__leavelist;

    // initialize
    outer = {
      root: root,
    };
    element = new Element(root, null, null, new Reference(outer, "root"));
    worklist.push(element);
    leavelist.push(element);

    while (worklist.length) {
      element = worklist.pop();

      if (element === sentinel) {
        element = leavelist.pop();

        target = this.__execute(visitor.leave, element);

        // node may be replaced with null,
        // so distinguish between undefined and null in this place
        if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
          // replace
          element.ref.replace(target);
        }

        if (this.__state === REMOVE || target === REMOVE) {
          removeElem(element);
        }

        if (this.__state === BREAK || target === BREAK) {
          return outer.root;
        }
        continue;
      }

      target = this.__execute(visitor.enter, element);

      // node may be replaced with null,
      // so distinguish between undefined and null in this place
      if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
        // replace
        element.ref.replace(target);
        element.node = target;
      }

      if (this.__state === REMOVE || target === REMOVE) {
        removeElem(element);
        element.node = null;
      }

      if (this.__state === BREAK || target === BREAK) {
        return outer.root;
      }

      // node may be null
      node = element.node;
      if (!node) {
        continue;
      }

      worklist.push(sentinel);
      leavelist.push(element);

      if (this.__state === SKIP || target === SKIP) {
        continue;
      }

      nodeType = node.type || element.wrap;
      candidates = this.__keys[nodeType];
      if (!candidates) {
        if (this.__fallback) {
          candidates = this.__fallback(node);
        } else {
          throw new Error("Unknown node type " + nodeType + ".");
        }
      }

      current = candidates.length;
      while ((current -= 1) >= 0) {
        key = candidates[current];
        candidate = node[key];
        if (!candidate) {
          continue;
        }

        if (Array.isArray(candidate)) {
          current2 = candidate.length;
          while ((current2 -= 1) >= 0) {
            if (!candidate[current2]) {
              continue;
            }
            if (isProperty(nodeType, candidates[current])) {
              element = new Element(
                candidate[current2],
                [key, current2],
                "Property",
                new Reference(candidate, current2),
              );
            } else if (isNode(candidate[current2])) {
              element = new Element(
                candidate[current2],
                [key, current2],
                null,
                new Reference(candidate, current2),
              );
            } else {
              continue;
            }
            worklist.push(element);
          }
        } else if (isNode(candidate)) {
          worklist.push(new Element(candidate, key, null, new Reference(node, key)));
        }
      }
    }

    return outer.root;
  }
}

function isNode(node) {
  if (node == null) {
    return false;
  }
  return typeof node === "object" && typeof node.type === "string";
}

function isProperty(nodeType, key) {
  return (
    (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) &&
    "properties" === key
  );
}

function traverse(root, visitor) {
  var controller = new Controller();
  return controller.traverse(root, visitor);
}

export { traverse };
