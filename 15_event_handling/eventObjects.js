// event objects are what is passed in to event handlers
    // these objects hold extra information about the event

<button>Click me any way you want.</button>
<script>
    let button = document.querySelector("button");
    button.addEventListener("mousedown", event => {
        if (event.button === 0) {
            console.log("Left button");
        } else if (event.button === 1){
            console.log("Middle button");
        } else if (event.button === 2) {
            console.log("Right button");
        }
    });
</script>
