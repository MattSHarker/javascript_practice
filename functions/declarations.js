// WRITING FUNCTIONS

// one way to declare a function
const square = function(x) {
    return x*x;
};  // functions end with a semicolon
    // they are not necessary, but it's safer to have them

// a return type does not need to be declared, just use the "return" keyword
// "return;" will return "undefined", as do functions that don't have "return"

// fuctions can have multiple parameters...
const multiply = function(x, y) {
    return x*y;
};

// or no parameters
const beep = function() {
    console.log("boop");
};

// functions don't need to be constant either
let triple = function(x) {
    return x*3;
}
// see the Functions as Values sections for details on the "const" keyword


// DECLARATION NOTATION

// another way to write a function
function double(x) {
    return x+x;
}
// this method does not need the semicolon at the end of the statement,
// and can be defined below it's calls in the code


// ARROW FUNCTIONS

// a third way to create a function
const add = (x, y) => {
    return x+y;
};

/* when there is only one parameter, the parenthesis can be omitted
 * when the body is a single expression, the braces and return keyword can be omitted */
const negate1 = (x) => { return -x; };
const negate2 = x => -x;

// when an arrow function has no parameters, the parenthesis is empty (and required)
const boop = () => {
    console.log("beep");
};
