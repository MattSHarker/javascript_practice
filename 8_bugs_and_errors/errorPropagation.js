// ERROR PROPAGATION

// not all problems in a program are the fault of the programmer
    // a user can enter information of an incorrect type

function promptNumber(question)
{
    let result = Number(prompt(question));
    
    if (Number.isNaN(result))
        return null;
    else
        return result;
}

// the if-else in the function will return null if the user prompted
    // input, allowing the programmer to handle wrong inputs

// the common outputs for wrong values are null, undefined, and -1


// if a function can return any type of value (including the above)
    // then you can wrap the result in an object
function lastElement(array)
{
    if (array.length === 0)
        return {failed: true};
    else
        return {element: array[array.length - 1]};
}
