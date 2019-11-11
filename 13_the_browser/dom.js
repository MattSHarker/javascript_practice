// DOCUMENT OBJECT MODEL

// sample HTML document
<!doctype html>
<html>
    <head>
        <title>My Home Page</title>
    </head>

    <body>
        <h1>My home page</h1>
        <p>Hello, I am Matthew</p>
        <p>My github page is 
            <a href="https://github.com/MattSHarker/">here</a>.
        </p>
    </body>
</html>

// A visual representation of how the document is structured
    // https://eloquentjavascript.net/img/html-boxes.svg
// for each box is an interactable object, where info such as its
    // HTML tags and its text can be found out

// The representation is called the Document Object Model (DOM)

// The global binding "document" provides access to these objects
// The documentElement property has a head and body, with the properties
    // "head" and "body" pointing to the respective info


// TREES

// Each node in the DOM is connected to other nodes
    // https://eloquentjavascript.net/img/html-links.svg

// a recursive way to search for a specific string
function hasString(node, string)
{
    if (node.nodeType === Node.ELEMENT_NODE)
    {
        // since childNodes is technically not an array,
            // a standard for loop must be used
        for (let i = 0; i < node.childNodes.length; i++)
        {
            if (talksAbout(node.childNodes[i], string))
                return true;
        }

        return false
    }
    else if (node.nodeType === Node.TEXT_NODE)
    {
        return node.nodeValue.indexOf(string) > -1;
    }
}

console.log(talksAbout.body, "book");
// -> true


// FINDING ELEMENTS

// finding specific elements by starting at document.body and following
    // a path is a bad idea
// assumes the document follows a specific structure
    // it is very common for structures to change over time as data is changed

// Additionally, text nodes are created for the whitespace between nodes
// The first code's <body> doesn't have 3 children (1 <h1> and two <p>), it
    // has 7: the three mentioned, two inbetween the three, one in front of all
    // of the three, one behind the three

// instead of searching for the second element of the sixth child, it would be
    // easy to search for the first link in the document

let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

// all elements have a getElementsByTagName method
// it collects all elements with a given tag that are descendants of that node
    // and returns them as an array-like object

<p>My ostrich Gertrude:</p>
<p><img id="gertrude" src="img/ostrich.png"></p>

<script>
    let ostrich = document.getElementById("gertrude");
    console.log(ostrich.src);
</script>
