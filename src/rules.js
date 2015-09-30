const rules = [
  // Possible Errors
  'comma-dangle',
  'no-cond-assign',
  'no-console',
  'no-constant-condition',
  'no-control-regex',
  'no-debugger',
  'no-dupe-args',
  'no-dupe-keys',
  'no-duplicate-case',
  'no-empty-character-class',
  'no-empty',
  'no-ex-assign',
  'no-extra-boolean-cast',
  'no-extra-parens',
  'no-extra-semi',
  'no-func-assign',
  'no-inner-declarations',
  'no-invalid-regexp',
  'no-irregular-whitespace',
  'no-negated-in-lhs',
  'no-obj-calls',
  'no-regex-spaces',
  'no-sparse-arrays',
  'no-unreachable',
  'use-isnan',
  'valid-jsdoc',
  'valid-typeof',
  'no-unexpected-multiline',
  // Best Practices
  'accessor-pairs',
  'block-scoped-var',
  'complexity',
  'consistent-return',
  'curly',
  'default-case', // require default case in switch statements
  'dot-notation', // encourages use of dot notation whenever possible
  'dot-location', //enforces consistent newlines before or after dots
  'eqeqeq', // require the use of === and !== (fixable)
  'guard-for-in', // make sure for-in loops have an if statement
  'no-alert', // disallow the use of alert, confirm, and prompt
  'no-caller', // disallow use of arguments.caller or arguments.callee
  'no-div-regex', // disallow division operators explicitly at beginning of regular expression
  'no-else-return', // disallow else after a return in an if
  'no-empty-label', // disallow use of labels for anything other than loops and switches
  'no-eq-null', // disallow comparisons to null without a type-checking operator
  'no-eval', // disallow use of eval()
  'no-extend-native', // disallow adding to native types
  'no-extra-bind', // disallow unnecessary function binding
  'no-fallthrough', // disallow fallthrough of case statements (recommended)
  'no-floating-decimal', // disallow the use of leading or trailing decimal points in numeric literals
  'no-implicit-coercion', // disallow the type conversions with shorter notations
  'no-implied-eval', // disallow use of eval()-like methods
  'no-invalid-this', // disallow this keywords outside of classes or class-like objects
  'no-iterator', // disallow usage of __iterator__ property
  'no-labels', // disallow use of labeled statements
  'no-lone-blocks', // disallow unnecessary nested blocks
  'no-loop-func', // disallow creation of functions within loops
  'no-multi-spaces', // disallow use of multiple spaces
  'no-multi-str', // disallow use of multiline strings
  'no-native-reassign', // disallow reassignments of native objects
  'no-new-func', // disallow use of new operator for Function object
  'no-new-wrappers', // disallows creating new instances of String,Number, and Boolean
  'no-new', // disallow use of the new operator when not part of an assignment or comparison
  'no-octal-escape', // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
  'no-octal', // disallow use of octal literals (recommended)
  'no-param-reassign', // disallow reassignment of function parameters
  'no-process-env', // disallow use of process.env
  'no-proto', // disallow usage of __proto__ property
  'no-redeclare', // disallow declaring the same variable more than once (recommended)
  'no-return-assign', // disallow use of assignment in return statement
  'no-script-url', // disallow use of javascript: urls.
  'no-self-compare', // disallow comparisons where both sides are exactly the same
  'no-sequences', // disallow use of the comma operator
  'no-throw-literal', // restrict what can be thrown as an exception
  'no-unused-expressions', // disallow usage of expressions in statement position
  'no-useless-call', // disallow unnecessary .call() and .apply()
  'no-useless-concat', // disallow unnecessary concatenation of literals or template literals
  'no-void', // disallow use of the void operator
  'no-warning-comments', // disallow usage of configurable warning terms in comments', - e.g. TODO or FIXME
  'no-with', // disallow use of the with statement
  'radix', // require use of the second argument for parseInt()
  'vars-on-top', // require declaration of all vars at the top of their containing scope
  'wrap-iife', // require immediate function invocation to be wrapped in parentheses
  'yoda', // require or disallow Yoda conditions,
  // Strict Mode
  'strict', // controls location of Use Strict Directives
  // Variaables
  'init-declarations', // enforce or disallow variable initializations at definition
  'no-catch-shadow', // disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-delete-var', // disallow deletion of variables (recommended)
  'no-label-var', // disallow labels that share a name with a variable
  'no-shadow-restricted-names', // disallow shadowing of names such as arguments
  'no-shadow', // disallow declaration of variables already declared in the outer scope
  'no-undef-init', // disallow use of undefined when initializing variables
  'no-undef', // disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
  'no-undefined', // disallow use of undefined variable
  'no-unused-vars', // disallow declaration of variables that are not used in the code (recommended)
  'no-use-before-define', // disallow use of variables before they are defined
  // Node.js and CommonJS
  'callback-return', // enforce return after a callback
  'global-require', // disallow require() outside of the top-level module scope
  'handle-callback-err', // enforce error handling in callbacks
  'no-mixed-requires', // disallow mixing regular variable and require declarations
  'no-new-require', // disallow use of new operator with the require function
  'no-path-concat', // disallow string concatenation with __dirname and __filename
  'no-process-exit', // disallow process.exit()
  'no-restricted-modules', // restrict usage of specified node modules
  'no-sync', // disallow use of synchronous methods
  // Stylistic Issues
  'array-bracket-spacing', // enforce spacing inside array brackets
  'block-spacing', // disallow or enforce spaces inside of single line blocks
  'brace-style', // enforce one true brace style
  'camelcase', // require camel case names
  'comma-spacing', // enforce spacing before and after comma
  'comma-style', // enforce one true comma style
  'computed-property-spacing', // require or disallow padding inside computed properties
  'consistent-this', // enforce consistent naming when capturing the current execution context
  'eol-last', // enforce newline at the end of file, with no multiple empty lines (fixable)
  'func-names', // require function expressions to have a name
  'func-style', // enforce use of function declarations or expressions
  'id-length', // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  'id-match', // require identifiers to match the provided regular expression
  'indent', // specify tab or space width for your code (fixable)
  'jsx-quotes', // specify whether double or single quotes should be used in JSX attributes
  'key-spacing', // enforce spacing between keys and values in object literal properties
  'lines-around-comment', // enforce empty lines around comments
  'linebreak-style', // disallow mixed 'LF' and 'CRLF' as linebreaks
  'max-nested-callbacks', // specify the maximum depth callbacks can be nested
  'new-cap', // require a capital letter for constructors
  'new-parens', // disallow the omission of parentheses when invoking a constructor with no arguments
  'newline-after-var', // require or disallow an empty newline after variable declarations
  'no-array-constructor', // disallow use of the Array constructor
  'no-continue', // disallow use of the continue statement
  'no-inline-comments', // disallow comments inline after code
  'no-lonely-if', // disallow if as the only statement in an else block
  'no-mixed-spaces-and-tabs', // disallow mixed spaces and tabs for indentation (recommended)
  'no-multiple-empty-lines', // disallow multiple empty lines
  'no-nested-ternary', // disallow nested ternary expressions
  'no-new-object', // disallow the use of the Object constructor
  'no-restricted-syntax', // disallow use of certain syntax in code
  'no-spaced-func', // disallow space between function identifier and application (fixable)
  'no-ternary', // disallow the use of ternary operators
  'no-trailing-spaces', // disallow trailing whitespace at the end of lines (fixable)
  'no-underscore-dangle', // disallow dangling underscores in identifiers
  'no-unneeded-ternary', // disallow the use of ternary operators when a simpler alternative exists
  'object-curly-spacing', // require or disallow padding inside curly braces
  'one-var', // require or disallow one variable declaration per function
  'operator-assignment', // require assignment operator shorthand where possible or prohibit it entirely
  'operator-linebreak', // enforce operators to be placed before or after line breaks
  'padded-blocks', // enforce padding within blocks
  'quote-props', // require quotes around object literal property names
  'quotes', // specify whether backticks, double or single quotes should be used (fixable)
  'require-jsdoc', // Require JSDoc comment
  'semi-spacing', // enforce spacing before and after semicolons
  'semi', // require or disallow use of semicolons instead of ASI (fixable)
  'sort-vars', // sort variables within the same declaration block
  'space-after-keywords', // require a space after certain keywords (fixable)
  'space-before-keywords', // require a space before certain keywords (fixable)
  'space-before-blocks', // require or disallow a space before blocks (fixable)
  'space-before-function-paren', // require or disallow a space before function opening parenthesis (fixable)
  'space-in-parens', // require or disallow spaces inside parentheses
  'space-infix-ops', // require spaces around operators (fixable)
  'space-return-throw-case', // require a space after return, throw, and case (fixable)
  'space-unary-ops', // require or disallow spaces before/after unary operators
  'spaced-comment', // require or disallow a space immediately following the // or /* in a comment
  'wrap-regex', // require regex literals to be wrapped in parentheses
  // ECMAScript 6
  'arrow-parens', // require parens in arrow function arguments
  'arrow-spacing', // require space before/after arrow function's arrow
  'constructor-super', // verify calls of super() in constructors
  'generator-star-spacing', // enforce spacing around the * in generator functions
  'no-class-assign', // disallow modifying variables of class declarations
  'no-const-assign', // disallow modifying variables that are declared using const
  'no-dupe-class-members', // disallow duplicate name in class members
  'no-this-before-super', // disallow use of this/super before calling super() in constructors.
  'no-var', // require let or const instead of var
  'object-shorthand', // require method and property shorthand syntax for object literals
  'prefer-arrow-callback', // suggest using arrow functions as callbacks
  'prefer-const', // suggest using const declaration for variables that are never modified after declared
  'prefer-spread', // suggest using the spread operator instead of .apply().
  'prefer-reflect', // suggest using Reflect methods where applicable
  'prefer-template', // suggest using template literals instead of strings concatenation
  'require-yield' // disallow generator functions that do not have yield
]

export default rules
