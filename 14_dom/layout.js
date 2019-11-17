// ATTRIBUTES

// some attributes (like href) can be accessed through a property of the
    // same name via the element's DOM object
// Any attribute can be added to nodes, allowing the storage of extra info
// Made up attribute names will not be present as properties on the elements
    // node, prompting the use of getAttribute and setAttribute to work with them

<p data-classified="secret">The launch code is 00000000.</p>
<p data-classified="unclassified">I have two feet.</p>

<script>
    let paras = document.body.getElementByTagName("p");

    for (let para of Array.from(paras))
    {
        if (para.getAttribute("data-classified") === "secret")
        {
            para.remove();
        }
    }
</script>

// good practice is to add "data-" in front of custom attributes to prevent
    // overwriting pre-existing attributes

// The HTML attribute "class" is also a keyword in JS, which is under the
    // property name "className"
    // It can be accessed as "class" with getAttribute() and setAttribute()


// LAYOUT

// some elements are laid out differently than others
// some like paragraphs <p> or headings <h1> take up the whole width (block)
// others like links <a> or bold <strong> are on the same line as
    // their surrounding text (inline)

// the size and position of an element can be modified with offsetWidth and
    // offsetHeight (in pixels)
// clientWidth and clientHeight provide the size of the space INSIDE the element,
    // ignoring border width

<p style="border: 3px solid red">   // gives the paragraph a border
    I'm boxed in
</p>

<script>
    let para = document.body.getElementsByTagName("p")[0];
    console.log("clientHeight:", para.clientHeight);
    console.log("offsetHeight:", para.offsetHeight);
</script>

// to find the precise position of an element: getBoundingClientRect
    // returns an object with top, bottom, left, right properties
    // the scroll position can be attained with pageXOffset and pageYOffset


// as laying out a document takes a long time, browsers wait as long as they can
    // before re-laying out the document
// Things that make the browser re-layout a document:
    // changing the layout
    // asking for the position or size via properties like offsetHeight,
        // getBoundingClientRect

// programs that repeatedly switch between reading DOM layout and changing the DOM
    // are very slow
// The file "slowDOM.html" contains an example of this concept


// STYLING

// an example of using the style property
<p><a href=".">Normal link</a></p>
<p><a href="." style="color: green">Green link</a></p>

// a style attribute may contain multiple declarations (a property followed
    // by a colon and value)
// multiple declarations must be seperated by a semicolon
<p><a href="." style="color: green; border: none">blabla</a></p>

// display controls if an element is inline or block
This text is displayed <strong>inline</strong>
<strong style="display: block"> as a block</strong>, and
<strong style="display: none"> not at all</strong>.

// objects have a style property which has an object that contains
    // all possible style properties (as strings)
<p id="para" style="color: purple">
    Nice text
</p>

<script>
    let para = document.getElementById("para");
    console.log(para.style.color);
    para.style.color = "magenta";
</script>

// some property names contain hyphens (font-family)
    // to use in JS: style["font-family"]
// these propeties are in camel case with no hyphens in the style object
    // style.fontFamily
