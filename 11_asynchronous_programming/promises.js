// PROMISE CLASS

// a promise is an asynchronous action at may complete at some point
    // and produce a value

// easiest way is Promise.resolve(), it ensures that its given value
    // is wrapped in a promise. If it's already a promise then it's
    // returned, otherwise it gives a new primuse that immediately
    // finishes with the value as its result
let fifteen = Promise.resolve(15);

// to get the result of a promise, use the then() method
// it contains a callback function that is called when the promise
    // resolves and produces a value
fifteen.then(value => console.log(`Got ${value}`));
// -> Got 15


// creating a promise based interface for the readStorage function
import {bigOak} from "./crow-tech";

function storage(nest, name)
{
    return new Promise(resolve =>
    {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "enemies").then(value => console.log("Got", value));

// This asynch function returns a value, which is the main advantage of
    // asynchronous functions

// Asynchronous functions are much more similar to normal functions than
    // callbacks are, the only difference is that asynchronous functions'
    // outputs may not be available immediately
