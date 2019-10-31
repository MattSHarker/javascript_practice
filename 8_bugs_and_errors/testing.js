// TESTING

// finding mistakes can be a long process, so using tests to 
    // check code is a good idea

function test(label, body)
{
    if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () =>
    {
        return "hello".toUpperCase() === "HELLO";
    }
);

// however, writting tests to cover multiple facets of every function
    // can be repetetive and time consuming, so look into test suites
    // and other programs which provide built in ways to test functions
