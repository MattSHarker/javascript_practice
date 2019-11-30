// CALLBACK FAILURES

// regular js code fails by throwing exceptions
// asynchronous code doesn't inherently have a similar feature, but
    // there are ways to indicate failures

// A widespread convention is that the first argument of the callback is 
    // used to indicate that the action failed, and the second contains 
    // the value produced when it succeeds
// however, callbacks that implement this must always first check to see
    // if they've received any exceptions


// PROMISE FAILURES

// Using promises makes this easier: they are either resolved or rejected
    // Resolved: The action sucessfully finished
    // Rejected: The action failed

// Resolve handlers are only called when the action succeeds, and rejections
    // are automatically sent to the new promise returned by then()
// When a handler throws an exception, this causes the promise produced by
    // then() to be rejected
// If any element in a chain of asynchronous actions fails, the whole chain
    // is rejected, and no success handlers are called beyond the point where
    // it failed

// Rejecting a promise provides a value, called the "reason" of the rejection
// When an exception in a handler function causes a rejection, the exception
    // value is used as the reason
// When a handler returns a rejected promise, that rejection flows into the
    // next promise
// Promise.reject() creates a new immediately rejected promise

// Promises have a catch() method that registers a handler to be called when
    // the promise is rejected
// catch() returns a new promise (like then()) which resolves to the original
    // promise's value if it resolves normally, and resolves to the catch
    // handler otherwise
// If a catch handler throws an error, the new promise is also rejected

// then() also accepts a rejection handler as a second argument
//allows you to install both types of handlers in a single method call

// Functions passed to the Promise constructor reveices a second argument
    // along with the resolve function, which is used to reject the new promise


new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason =>
    {
        console.log("Caught failure" + reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2", value));
// -> Caught failure Error: fail
// -> Handler 2 nothing

// JS environments can detect when a promise rejection isn't handled
    // and will report it as an error

