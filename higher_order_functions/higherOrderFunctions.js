/*  Higher order functions take in other functions as parameters
 *  Allows for abstraction over actions, not just values */


// CREATING A FUNCTION WITH A FUNCTION
const greaterThan = function(x) {
    return y => y > x;
};

let greaterThan5 = greaterThan(5);
console.log(greaterThan5(6));   // -> true


// CHANGING A FUNCTION WITH A FUNCTION
let noisy = function(f)
{
    return (...args) =>
    {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, " , returned", result);
        return result;
    };
};

noisy(Math.min)(3, 2, 1);
