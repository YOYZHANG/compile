
/**
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

function tokenizer(input) {
    let current = 0;
    let tokens = [];

    while(current < input.length) {
        let char = input[current];
        if (char === '(' || char === ')') {
            tokens.push({
                type: 'paren',
                value: char
            });

            current ++;
            continue;
        }

        if (/\s/.test(char)) {
            current ++;
            continue;
        }

        if (/[0-9]/.test(char)) {
            let value = '';

            while(/[0-9]/.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({
                type: 'number',
                value
            });

            continue;
        }

        if (char === '"') {
            let value = '';
            char  = input[++current];

            while(char !== '"') {
                value += char;
                char = input[++current];
            }

            char = input[++current];

            tokens.push({type: String, value});

            continue;
        }

        let LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
        let value = '';

        // Again we're just going to loop through all the letters pushing them to
        // a value.
        while (LETTERS.test(char)) {
            value += char;
            char = input[++current];
        }

        // And pushing that value as a token with the type `name` and continuing.
        tokens.push({ type: 'name', value });

        continue;
        }

        // Finally if we have not matched a character by now, we're going to throw
        // an error and completely exit.
        throw new TypeError('I dont know what this character is: ' + char);
        }

    return tokens;
}


/**
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

function parser(tokens) {
    let current = 0;

    let ast = {
        type: 'Program',
        body: []
    }

    function walk() {
        let token = tokens[current];

        if (token.type === 'number') {
            current ++;
            return {
                type: 'NumberLiteral',
                value: token.value
            }
        }

        if (token.type === 'string') {
            current++;
      
            return {
              type: 'StringLiteral',
              value: token.value,
            };
        }

        if (token.type === 'paren' && token.value === '(') {
            token = tokens[++current];

            let node = {
                type: 'CallExpression',
                name: token.value,
                params: []
            }

            token = tokens[++current];

            while(token.type !== 'paren' || token.type === 'paren' && token.value !== ')') {
                node.params.push(walk());

                token = tokens[current];
            }

            current++;
            return node;

        }

    }

    while (current < tokens.length) {
        ast.body.push(walk());
    }

    return ast;
}


/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */
function traverser (ast, visitor) {
    function traverseArray(array, parent) {
        array.forEach(child => {
            traverseNode(child, parent);
        });
    }

    function traverseNode(node, parent) {
        let methods = visitor[node.type];

        if (methods && methods.enter) {
            methods.enter(node, parent);
        }

        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                traverseArray(node.params, node);
                break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;
            
            default:
                throw new TypeError(node.type);
        }

        if (methods && methods.exit) {
            methods.exit(node, parent);
        }
    }

    traverseNode(ast, null);
}

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

function transformer(ast) {
    let newAst = {
        type: 'Program',
        body: []
    };

    ast._context = newAst.body;

    traverser(ast, {
        NumberLiteral: {
            enter(node, parent) {
                console.log(parent, 'parent');
                console.log(parent._context, 'parent._context');
                parent._context.push({
                    type: 'NumberLiteral',
                    value: node.value
                });
            }
        },

        StringLiteral: {
            enter(node, parent) {
                console.log(parent, 'parent');
                parent._context.push({
                    type: 'StringLiteral',
                    value: node.value
                });
            }
        },

        CallExpression: {
            enter(node, parent) {
                let expression = {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: node.name
                    },
                    arguments: []
                };

                node._context = expression.arguments;

                if (parent.type !== 'CallExpression') {
                    expression = {
                        type: 'ExpressionStatement',
                        expression: expression
                    }
                }

                parent._context.push(expression);
            }
        }
    });

    return newAst;
}


function codeGenerator(node) {
    switch (node.type) {
        case 'Program':
            return node.body.map(codeGenerator).join('\n');
        case 'ExpressionStatement':
            return (
                codeGenerator(node.expression) + ';'
            );
        case 'CallExpression':
            return (
                codeGenerator(node.callee)
                    + '('
                    + node.arguments.map(codeGenerator)
                        .join(', ')
                    + ')'
            );
        case 'Identifier':
            return node.name;
        case 'NumberLiteral':
            return node.value;
        case 'StringLiteral':
            return '"' + node.value + '"'
        default:
            throw new TypeError(node.type);
    }
}

function compiler(input) {
    let tokens = tokenizer(input);
    let ast = parser(tokens);
    let newAst = transformer(ast);
    let output = codeGenerator(newAst);

    return output;
}

module.exports = {
    tokenizer,
    parser,
    traverser,
    transformer,
    codeGenerator,
    compiler,
};
