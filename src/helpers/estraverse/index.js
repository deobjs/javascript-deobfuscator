var Syntax, VisitorKeys, BREAK, SKIP, REMOVE;

Syntax = {
  AssignmentExpression: "AssignmentExpression",
  AssignmentPattern: "AssignmentPattern",
  ArrayExpression: "ArrayExpression",
  ArrayPattern: "ArrayPattern",
  ArrowFunctionExpression: "ArrowFunctionExpression",
  AwaitExpression: "AwaitExpression", // CAUTION: It's deferred to ES7.
  BlockStatement: "BlockStatement",
  BinaryExpression: "BinaryExpression",
  BreakStatement: "BreakStatement",
  CallExpression: "CallExpression",
  CatchClause: "CatchClause",
  ClassBody: "ClassBody",
  ClassDeclaration: "ClassDeclaration",
  ClassExpression: "ClassExpression",
  ComprehensionBlock: "ComprehensionBlock", // CAUTION: It's deferred to ES7.
  ComprehensionExpression: "ComprehensionExpression", // CAUTION: It's deferred to ES7.
  ConditionalExpression: "ConditionalExpression",
  ContinueStatement: "ContinueStatement",
  DebuggerStatement: "DebuggerStatement",
  DirectiveStatement: "DirectiveStatement",
  DoWhileStatement: "DoWhileStatement",
  EmptyStatement: "EmptyStatement",
  ExportAllDeclaration: "ExportAllDeclaration",
  ExportDefaultDeclaration: "ExportDefaultDeclaration",
  ExportNamedDeclaration: "ExportNamedDeclaration",
  ExportSpecifier: "ExportSpecifier",
  ExpressionStatement: "ExpressionStatement",
  ForStatement: "ForStatement",
  ForInStatement: "ForInStatement",
  ForOfStatement: "ForOfStatement",
  FunctionDeclaration: "FunctionDeclaration",
  FunctionExpression: "FunctionExpression",
  GeneratorExpression: "GeneratorExpression", // CAUTION: It's deferred to ES7.
  Identifier: "Identifier",
  IfStatement: "IfStatement",
  ImportExpression: "ImportExpression",
  ImportDeclaration: "ImportDeclaration",
  ImportDefaultSpecifier: "ImportDefaultSpecifier",
  ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
  ImportSpecifier: "ImportSpecifier",
  Literal: "Literal",
  LabeledStatement: "LabeledStatement",
  LogicalExpression: "LogicalExpression",
  MemberExpression: "MemberExpression",
  MetaProperty: "MetaProperty",
  MethodDefinition: "MethodDefinition",
  ModuleSpecifier: "ModuleSpecifier",
  NewExpression: "NewExpression",
  ObjectExpression: "ObjectExpression",
  ObjectPattern: "ObjectPattern",
  Program: "Program",
  Property: "Property",
  RestElement: "RestElement",
  ReturnStatement: "ReturnStatement",
  SequenceExpression: "SequenceExpression",
  SpreadElement: "SpreadElement",
  Super: "Super",
  SwitchStatement: "SwitchStatement",
  SwitchCase: "SwitchCase",
  TaggedTemplateExpression: "TaggedTemplateExpression",
  TemplateElement: "TemplateElement",
  TemplateLiteral: "TemplateLiteral",
  ThisExpression: "ThisExpression",
  ThrowStatement: "ThrowStatement",
  TryStatement: "TryStatement",
  UnaryExpression: "UnaryExpression",
  UpdateExpression: "UpdateExpression",
  VariableDeclaration: "VariableDeclaration",
  VariableDeclarator: "VariableDeclarator",
  WhileStatement: "WhileStatement",
  WithStatement: "WithStatement",
  YieldExpression: "YieldExpression",
};

VisitorKeys = {
  AssignmentExpression: ["left", "right"],
  AssignmentPattern: ["left", "right"],
  ArrayExpression: ["elements"],
  ArrayPattern: ["elements"],
  ArrowFunctionExpression: ["params", "body"],
  AwaitExpression: ["argument"], // CAUTION: It's deferred to ES7.
  BlockStatement: ["body"],
  BinaryExpression: ["left", "right"],
  BreakStatement: ["label"],
  CallExpression: ["callee", "arguments"],
  CatchClause: ["param", "body"],
  ClassBody: ["body"],
  ClassDeclaration: ["id", "superClass", "body"],
  ClassExpression: ["id", "superClass", "body"],
  ComprehensionBlock: ["left", "right"], // CAUTION: It's deferred to ES7.
  ComprehensionExpression: ["blocks", "filter", "body"], // CAUTION: It's deferred to ES7.
  ConditionalExpression: ["test", "consequent", "alternate"],
  ContinueStatement: ["label"],
  DebuggerStatement: [],
  DirectiveStatement: [],
  DoWhileStatement: ["body", "test"],
  EmptyStatement: [],
  ExportAllDeclaration: ["source"],
  ExportDefaultDeclaration: ["declaration"],
  ExportNamedDeclaration: ["declaration", "specifiers", "source"],
  ExportSpecifier: ["exported", "local"],
  ExpressionStatement: ["expression"],
  ForStatement: ["init", "test", "update", "body"],
  ForInStatement: ["left", "right", "body"],
  ForOfStatement: ["left", "right", "body"],
  FunctionDeclaration: ["id", "params", "body"],
  FunctionExpression: ["id", "params", "body"],
  GeneratorExpression: ["blocks", "filter", "body"], // CAUTION: It's deferred to ES7.
  Identifier: [],
  IfStatement: ["test", "consequent", "alternate"],
  ImportExpression: ["source"],
  ImportDeclaration: ["specifiers", "source"],
  ImportDefaultSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportSpecifier: ["imported", "local"],
  Literal: [],
  LabeledStatement: ["label", "body"],
  LogicalExpression: ["left", "right"],
  MemberExpression: ["object", "property"],
  MetaProperty: ["meta", "property"],
  MethodDefinition: ["key", "value"],
  ModuleSpecifier: [],
  NewExpression: ["callee", "arguments"],
  ObjectExpression: ["properties"],
  ObjectPattern: ["properties"],
  Program: ["body"],
  Property: ["key", "value"],
  RestElement: ["argument"],
  ReturnStatement: ["argument"],
  SequenceExpression: ["expressions"],
  SpreadElement: ["argument"],
  Super: [],
  SwitchStatement: ["discriminant", "cases"],
  SwitchCase: ["test", "consequent"],
  TaggedTemplateExpression: ["tag", "quasi"],
  TemplateElement: [],
  TemplateLiteral: ["quasis", "expressions"],
  ThisExpression: [],
  ThrowStatement: ["argument"],
  TryStatement: ["block", "handler", "finalizer"],
  UnaryExpression: ["argument"],
  UpdateExpression: ["argument"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id", "init"],
  WhileStatement: ["test", "body"],
  WithStatement: ["object", "body"],
  YieldExpression: ["argument"],
};

// unique id
BREAK = {};
SKIP = {};
REMOVE = {};

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

export { Syntax, traverse, VisitorKeys };
