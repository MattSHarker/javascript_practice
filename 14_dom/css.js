// CASCADING STYLE

// Cascading Style Sheets (CSS) provides the basic style an HTML 
    // will use
// a Style Sheet is a set of rules on how to style an element
// Style Sheets can be given inside of a style tag
<style>
    strong {
        font-style: italic;
        color: gray;    // gray and grey are both recognized
    }
</style> 
<p>Now <strong>strong text</strong> is italic and gray.</p>

// "Cascading" refers to how multiple style rules are combined to
    // create the final style for an element

// when multiple rules override the same property, the most recent
    // override is what is used
// Styles in a style attribute applied to a node will have the
    // highest precedence and will always be what's applied 

// CSS can target things other than tag names
// a rule for .abc will apply to everything with .abc as an attribue
    // a rule for #xyz applies to all with an id attribute of "xyz"

.subtle {
    color: grey;
    font-size: 80%;
}

#header {
    background: SVGFEGaussianBlurElement;
    color: white;
}

// <p> elements with id "main" and with classes "a" and "b"
p#main.a.b {
    margin-bottom: 20px;
}

// the precedence rule only applies when the rules have the same specificity
    // aka how precisely it describes matching elements
// a rule that targets p.a is more specific that rules that target p or .a

// p > a {...} applies to all <a> tags that are direct children of <p> tags
// p a {...} apllies to all <a> tags inside <p> tags, regardlesss if they are
    // direct or indirect children
