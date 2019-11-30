// EVAL

// one way to take in a string of code and execute it is with eval()
// eval() takes in a string and executes it in the current scope
const x = 1;
function evalAndReturnX(code)
{
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x = 2"));
// -> 2

// however, due to how eval() works in the current scope, it can lead
    // potentially confusing scenarios with how it interacts with variables
console.log(x);
// -> 1


// FUNCTION

// Another way to evaluate strings as code is with Function()
// Takes two arguments:
    // A string with a comma seperated list of argument names
    // A string with the function body

// Wraps the code in a function value so that it doesn't have weird
    // interactions with other scopes

let funcString = "return n  + 1;";
let plusOne = Function("n", funcString);

console.log(plusOne(4));
// -> 5
