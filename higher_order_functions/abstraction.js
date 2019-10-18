// ABSTRACTING A SIMPLE LOOP

let repeatPrint = function(n)
{
    for (let i = 0; i < n; ++i)
        console.log(i);
};

// this now does the same thing as a basic for loop
repeatPrint(10);    


// ABSTRACTING A LOOPING FUNCTION

const repeat = function(n, action)
{
    for (let i = 0; i < n; ++i)
        action(i);  // action() does not need to be defined for
                    // repeat() to work
};

// predefined functions can be passed to repeat() as well
repeat(3, console.log);

// you can pass a function on the spot as well
let labels = [];
repeat(5, i => {labels.push(`Unit ${i+1}`); } );
          // i => ... is known as an anonymous function,
            // as it is not attached to anything
