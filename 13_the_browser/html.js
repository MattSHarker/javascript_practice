// HTML

// Hypertext Markup Language
// The document format used for web pages

// This series of files will not teach HTML, and 


// HTML AND JAVASCRIPT

// For this series of tutorials, we're going to focus on the <script> tag

<h1>Testing alert</h1>
<script>alert("hello!");</script>

// this script will run as soon as the <script> tag is encountered
    // by the browser reading the HTML

// adding the script directly to HTML can be overly cumbersome
// adding a src attribute to the <script> tag allows a source file
    // to be fetched from a URL

<h1>Testing alert</h1>
<script src="path/to/code.js"></script>


// ES modules (ECMAScript) can be loaded with the script tag
    // type="module"


// some other attributes can also include JS programs
<button onclick="alert('BOOM');">DO NOT PRESS</button>
