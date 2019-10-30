// THROWING AND CATCHING EXCEPTIONS

function promptDirection(question)
{
    let result = prompt(question);
    
    if (result.toLowerCase() === "left")  return "L";
    if (result.toLowerCase() === "right") return "R";
    
    throw new Error("Invalid direction: " + result);
}

function look()
{
    if (promptDirection("Which way?") === "L")
        return "a house";
    else
        return "two angry bears";
}

try
{
    console.log("You see", look());
}
catch (error)
{
    console.log("Something went wrong: " + error);
}


// DEALING WITH EXCEPTIONS

const accounts =
{
    a: 100,
    b: 0,
    c: 20
};

function getAccount()
{
    let accountName = prompt("Enter an account name");

    if (!accounts.hasOwnProperty(accountName))
        throw new Error(`No such account: ${accountName}`);

    return accountName;
}

function transfer(from, amount)
{
    if (accounts[from] < amount) return;

    let progress = 0;
    try
    {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    }
    finally // always executes after a try and/or catch
    {
        // only happen if an exception was thrown in the try statement
        if (progress === 1)
            accounts[from] += amount;
    }
}



// CREATING NEW ERRORS

class InputError extends Error{}

function promptDirection(question)
{
    let result = prompt(question);
    if (result.toLowerCase() === "left")  return "L";
    if (result.toLowerCase() === "right") return "R";
    throw new InputError("Invalid direction: " + result);
}


// SELECTIVE CATCHING

for (;;)    // infinite loop
{
    try
    {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    }
    catch (e)   // catches everything
    {
        // catches a specific exception
        if (e instanceof InputError)    
            console.log("Not a valid direction, try again.");
        
        // catches everything already not caught
        else
            throw e;
    }
}


// ASSERTIONS

// assertions are checks within the program that verify that something
    // is the way it is supposed to be

function firstElement(array)
{
    // ensures it does not operate on an array of length 0
    if (array.length === 0)
        throw new Error("firstElement called with []");

    return array[0];
}
