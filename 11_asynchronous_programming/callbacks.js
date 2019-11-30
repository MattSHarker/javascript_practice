// CALLBACKS

// callback functions execute after another function executes
    // the first function executes, then the callback function executes


// for example, setTimeout() waits a set amount of time, then calls the function
setTimeout(() => console.log("Tick"), 500);


// performing multiple asynchronous actions in a row via callbacks leads to
    // needing to pass new functions to handle the continuation of the computation
    // after the actions

import {bigOak} from "./crow-tech";

// first asynchronous action
bigOak.readStorage("food caches", caches =>
{
    // these are supposed to be JSON data
    let firstCache = caches[0];

    // second asynchronous action
    bigOak.readStorage(firstCache, info =>
    {
        console.log(info);
    });
});

// while this works, each asynchronous action increases the indentation level
    // and the scope, making it ultimately unweidly for many asynchronous actions


// in this example, after a request is sent, a message is displayed on the console
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            () => console.log("Note Delivered"));


// how to implement a way to handle the above request function
import {defineRequestType} from "./crow-tech";

defineRequestType("note", (nest, content, source, done) =>
{
    console.log(`${nest.name} received note: ${content}`);

    // this would be the callback function, the console.log in the .send()
    done();
});
