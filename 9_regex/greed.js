// GREED

// the regex operators +, *, ?, and {} are known as greedy operators
    // they will try to match as much they can when they execute

// a function that removes all comments from a piece of .js code
// (greedy version)
function stripComments(code)
{
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));
// -> 1 + 3

console.log(stripComments("x = 10;// ten!"));
// -> x = 10;

console.log(stripComments("1 /*a */+/* b */ 1"));
// -> 1  1
// ideally the output should be 1 + 1, but because the expression tries to match
    // as much as it can, it recognizes "/*a */+/* b */" as the section to match
    // to instead of "/*a */" and "/* b */"

// to make an expression non-greedy, include a ? after a greedy operator
    // +?, *?, ??, {}?


// the same function as above, but modified
// (non-greedy version)
function stripComments(code)
{
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 /*a */+/* b */ 1"));
// -> 1 + 1
