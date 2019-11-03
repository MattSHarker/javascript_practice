// THE REGEXP OBJECT

let name = "harry";
let text = "Harry is a suspicious character.";

let regexp = new RegExp("\\b(" + name + ")\\b", "gi"); // two \ bc it's written in a string

console.log(text.replace(regexp, "_$1_"));
// -> _Harry_ is a suspicious character

// new RegExp(string expression, options)
    // in the above code, g is for global and i is for case insensitive



// EXPRESSIONS WITH SPECIAL CHARACTERS

// if we use the above code with an edgy screen name like dea+hl[]rd, the result
    // would most likely be nonsensical, or wouldn't even work

let name = "dea+hl[]rd";
let text = "this dea+hl[]rd guy is super annoying";

let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// -> this dea+hl[]rd guy is super annoying

// to fix this, add \ in front of special characters
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");

console.log(`Modified name: ${escaped}`);
// -> dea\+hl\[]rd

let regexp = new RegExp("\\b" + escaped + "\\b", "gi");

console.log(text.replace(regexp, "_$&_"));
// -> This _dea+hl[]rd_ guy is super annoying
