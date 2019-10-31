// CREATING A STRING
let string = "text goes here";


// SLICES
let string = "The quick brown fox jumped over the lazy dogs";
let slice  = string.slice(10, 19);   // slice === "brown fox"
// .slice(inclusiveStartIndex, exclusiveEndIndex)

let length = string.length; // length === 45


// INDEXING
let string = "The quick brown fox jumped over the lazy dogs";

let index = string[10]; // index === "b"

let index  = string.indexOf("o");       // index === 12
let index  = string.lastIndexOf("o");   // index === 42


// WHITESPACE
// removing leading/trailing whitespace
let string = "    bla    \n\t   ";
let trim   = string.trim(); // trim === "bla"

// adding leading/trailing whitespace
let string = "bla";
let trim = string.padStart(2);  // trim === "  bla"


// SPLITTING AND JOINING
let string = "The quick brown fox jumped over the lazy dogs";
let words  = string.split(" "); // words === ["The", "quick", ... "dogs"]
let string = words.join("+ ");  // string === "The+ quick+ bown+...+ dogs"

// .split(x): x is what to split the string by, usually commas or spaces
// .join(x):  x is what to concatenate the array of strings with


// CHANGING CASE
let upper = string.toUpperCase();
let lower = string.toLowerCase();
