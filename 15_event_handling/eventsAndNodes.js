// handlers notify the code when an event occurs

// the basic way to add a handler is with addEventListener
    // it will be added to the window object in this example
<p>Click this document to activcate the handler</p>
<script>
    window.addEventListener("click", () => {
        console.log("You knocked?");
    });
</script>


// event listeners are only called when an event happens
    // in the context of the object they are registered on
<button>Click me</button>
<p>No handler here</p>

<script>
    let button = document.querySelector("button");
    button.addEventListener("click", () => {
        console.log("Button clicked.");
    });
</script>

// a handler is attached to the button node, and not the
    // paragraph node
// clicking the button results in an action, but clicking
    // anything else does not

// giving a node the onClick attribute provides a similar effect,
// nodes can only have one onClick attribute, while event listeners
    // can give a node multiple handlers

// removeEventListener does what it says

<button>Act-once button</button>
<script>
    let button = document.querySelector("button");


    function once() {
        console.log("Done.");

        // on a "click" event, remove the "once" function
        button.removeEventListener("click", once);
    }

    // add the "once" function
    button.addEventListener("click", once);
</script>
