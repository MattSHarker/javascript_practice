// Sometimes in networks, a callback given to send is never called
// To resolve this, timing out the request and reporting a failure
    // would be helpful

// Transmission failures are often accidental, and retrying the
    // request again may make it succeed

// Even when a request and its response are delivered correctly,
    // the response may indicate failure
// e.g. if if the request tries to use request type that doesn't exist
    // or if the handler throws an error

class Timeout extends Error {}

function request(nest, target, type, content)
{
    return new Promise((resolve, reject) =>
    {
        let done = false;
        function attempt(n)
        {
            nest.send(target, type, content, (failed, value) =>
            {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });

            setTimeout(() =>
            {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }

        attempt(1);
    });
}

// promises can only be resolved or rejected once
// the first time resolve or reject is called is what determines the
    // outcome of the promise

// In order to build an asynchronous loop, we need to use recursion, as
    // regular loops wouldn't allow to wait for an asynchronous action

// attempt() makes an attempt to send a request, and includes a timeout
    // that retries every 250 ms, and on the 4th retry rejects the
    // promise with Timeout as the reason



// To isolate ourselves from callbacks, you can define a wapper for
    // defineRequestType that allows the handler function to return
    // promise or plain value and 
function requestType(name, handler)
{
    defineRequestType(name, (nest, conent, source, callback) =>
    {
        // the handler is in a try to ensure any raised exception
            // is sent to the callback
        try
        {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                      failure  => callback(failure));
        }

        catch (exception)
        {
            callback(exception);
        }
    });
}


// COLLECTION OF PROMISES

// When working with collections of promises, Promise.all is useful
// all() returns a promise that waits for all of the promises in its
    // array to resolve, then resolves to an array of all the values
    // produced by the promises
// if any of the promises are rejected, the result of all() is also rejected

requestType("ping", () => "pong");

function availableNeighbors(nest)
{
    let requests = nest.neighbors.map(neighbor => 
    {
        return request(nest, neighbor, "ping")
            .then(() => true, () => false);
    });

    return Promise.all(requests).then(result =>
    {
        return nest.neighbors.filter((_, i) => result[i]);
    });
}
