/*  Higher order functions take in other functions as parameters
 *  Allows for abstraction over actions, not just values */


// CREATING A FUNCTION WITH A FUNCTION
const greaterThan = x => { // the outer function doesn't need to be an arrow decl.
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
// -> calling with [3, 2, 1]
// -> called with [3, 2, 1] , returned 1


// FUNCTIONS THAT PROVIDE CONTROL FLOW
const unless = function(text, then)
{
    if (!text) then();
}

repeat(3, n =>
{
    unless(n%2 === 1, () =>
    {
        console.log(n, "is even"); 
    }); 
});
// -> 0 is even
// -> 2 is even

// for each as a higher order function
["A", "B"].forEach(l => console.log(l));
// -> A
// -> B
