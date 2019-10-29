// STRICT MODE
// enable strict mode by adding "use strict" at the top of a file of function body

function theresAProblemHere()
{
    "use strict";
    for (counter = 0; counter < 10; counter++)
    {
        console.log(counter);
    }
}

theresAProblemHere();
// -> ReferenceError: counter is not defined

// if strict mode was not used in this function, JS would have
    // created a global binding for "counter"


// STRICT MODE ENABLED VS DISABLED

// DISABLED
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");   // forgot "new"

console.log(ferdinand);
// -> Ferdinand

// Since "new" wasn't used, the constructor created a global "name" binding
    // with the value "Ferdinand"


// ENABLED
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");   // forgot "new"

console.log(ferdinand);
// -> TypeError: Cannot set property 'name' of undefined

// An error was given now because "new" wasn't used


// SOME OTHER THINGS STICT MODE DOES
    // Disallows giving functions multiple parameters with the same name
    // Removes problematic language features (such as "with")
