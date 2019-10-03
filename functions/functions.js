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


// SCOPE

/*  Scope works the same way as any other language, bindings
 *  can go lower into scopes, but can't go to higher scopes */

if (true) {
    let x = 10; // x exists here...

    if (true) {
        // ... and here...
    }
}
// ... but not here

/* if a function uses a parameter of the same name as an element,
 * the name will refer to the function's parameter, not the outside binding */ 
let n = 10;
const double = function(n) {
    return n/2; // this "n" refers to the n in the function declaration,
                // not the n declared right before this function
};


// FUNCTIONS AS VALUES

/*  A function (value) and it's binding (name) are two different things. A function's
 *  value can do anything that any other value is able to do
 *
 *  If a function is not made with the "const" keyword, then that binding can be 
 *  changed later. By using the const keyword, it ensures that the function's binding
 *  does not accidentally get changed
 *  
 *  refer to ________ for more information on how to use a function's value
 */


// OPTIONAL ARGUMENTS

// when a function is called with too many parameters, the extra ones are ignored
const pow1 = (x, y) => {
    x*y;
};

let z = pow1(2, 8, 5);   // the 5 is ignored

// additionally, when there are not enough, the omitted parameters are assigned
// the value "undefined"
let z = pow1(2);    // this would not work as intended

// one way to use this to one's benefit is to check if values are undefined
const pow2 = (x, y) => {
    if (y === undefined) { return x; }
    else return x*y;
};

// so now...
let z = pow2(2);    // will assign the value 2 to z


// RECURSION

// recursion is when a function calls itself
function recPower(base, power) {
    if (power === 0)    // base case
        return 1;
    else
        return base * recPower(base, power-1);
}

// make sure to always include a base case to exit the function, otherwise it will
// continue infinitly

// !!!!NOTE!!!!
// an issue with JS and recursion is that recursion is much slower than looping or iteration
// unless writing something recursively is much easier, try to use looping or iteration
