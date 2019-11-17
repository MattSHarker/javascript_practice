// Almost anything in the DOM is modifyable

// The shape can be changed by modifying the parent-child relations
    // appendChild: places a node at the end of the list of children
    // insertBefore: places the node right before the second node of
        // the parameters

<p>One</p>  // tag name is "p"
<p>Two</p>
<p>Three</p>

<script>
    let paragraphs = document.body.getElementsByTagName("p");
    document.body.insertBefore(paragraphs[2], paragraphs[0]);
</script>

// the order is now Three, One, Two
// nodes can only exist in one location, if it is added elsewhere
    // it will be removed from the original location (if it has one)

// replaceChild replaces a child node with another one


// CREATING NODES

// text nodes are created with document.createTextNode

// this script replaces all images with the text in their <alt> attrs

<p>
    The <img src="img/cat.png" alt="Cat"></img> in the
    <img src="img/hat.png" alt="Hat"></img>.
</p>
// NOTE: the </img> tags should not be there, but are included for the
    // coloring of my IDE to display correctly

<p>
    <button onclick="replaceImages()">Replace</button>
</p>

<script>
    function replaceImages()
    {
        let images = document.body.getElementsByTagName("img");

        // loop is in reverse as the document updates in real time
        // starting from the front would remove the first image,
            // causing the length to become 1, ending the loop
        // this concept is know as being "live"
        for (let i = images.length - 1; i >= 0; i--)
        {
            let image = images[i];

            if (image.alt)
            {
                let text = document.createTextNode(image.alt);
                image.parentNode.replaceChild(text, image);
            }
        }
    }
</script>

// createTextNode creates a text node when given a string
    // this new node can be inserted into the document

// to use a "solid" collection of nodes (as opposed to live)
    // use Array.from to convert it to a real array

let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// -> ["ONE", "TWO"]


// to create element node: document.createElement
    // takes a tag name and returns an empty node of that type

<blockquote id="quote">
    No book can ever be finished. While working on it we learn
    just enough to find it immature the moment we turn away
    from it.
</blockquote>

<script>
    function elt(type, ...children)
    {
        let node = document.createElement(type);

        for (let child of children)
        {
            if (typeof child != "string")
                node.appendChild(child);
            else
                node.appendChild(document.createTextNode(child));
        }

        return node;
    }

    document.getElementById("quote").appendChild(
        elt("footer", "--",
            elt("strong", "Karl Popper"),
            ", preface to the second edition of ",
            elt("em", "The Open Society and Its Enemies"),
            ", 1950"));
</script>

// this code produces this doc:
    // https://i.imgur.com/4KHjU4q.png
