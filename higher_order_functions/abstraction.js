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

// functions don't need to be predefined to be passed to repeat()
repeat(3, console.log);

let labels = [];
repeat(5,
    i => {
        labels.push(`Unit ${i+1}`); // an anonymous function
    }    
);
