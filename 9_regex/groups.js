// GROUPING SUBEXPRESSIONS

// to use operators like + or * on multiple elements, put the elements in ()
    // this is called a subexpression
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// -> true

// the i at the end on line 4 makes the whole expresion case insensitive


// MATCHES AND GROUPS

// the exec() method is another way of matching expressions
let match = /\d+/.exec("one two 100");
console.log(match);
// -> ["100"]

console.log(match.index);
// -> 8


// strings have a method match() that works in a similar way
console.log("one two 100".match(/\d+/));
// -> ["100"]


// when a regex contains a subexpression, the text that matches will always
    // show up in the array, with the whole match being the first element
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// -> ["'hello'", "hello"]

// the first element is the whole expression: '([^']*)'
// the second element is the subexpression ([^']*)


// when a group does not match to anything, 'undefined' will be returned
console.log(/bad(ly)?/.exec("bad"));
// -> ["bad", undefinded]

console.log(/(\d)+/.exec("123"));
// -> ["123", "3"]
