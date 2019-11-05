// SEARCH

// while indexOf() cannot use regex, search() can use regex
// unfortunately, search() will only find the first index of a match
console.log("   word".search(/\S/));
// -> 2

console.log("    ".search(/\S/));
// -> -1


// LASTINDEX

// there is an (inconvinient) way to search from a given position while using exec()
    // this is done by modifying the lastIndex property
        // last as in most recent index, not as in final index
        

let pattern = /y/g;

// default lastIndex (0)
let match = pattern.exec("xyzzy");

console.log(match.index);       // -> 1
console.log(pattern.lastIndex); // -> 2


// modified lastIndex
pattern.lastIndex = 3;
match = pattern.exec("xyzzy");

console.log(match.index);       // -> 4
console.log(pattern.lastIndex); // -> 5

// if a match was successful, the exec call automatically updates lastIndex to point AFTER the match
    // if there was no match, it is set to 0, the same as a newly constructed regex object


// GLOBAL VS STICKY

// Global (g): searches ahead for a position where the match can start
let global = /abc/g;
console.log(global.exec("xyz abc"));
// -> ["abc"]


// Sticky (y): the match only succeeds if it starts direction at lastIndex
let sticky = /abc/y;
console.log("xyz abc");
// -> null


// when using the same regex value for multiple exec() calls, the updates to lastIndex
    // can cause issues
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
// -> ["1"]
console.log(digit.lastIndex);
// -> 13

console.log(digit.exec("and now: 1"));
// -> null
console.log(digit.lastIndex);
// -> 0


// another effect of Global is that when using match(), it will match as much as it can
console.log("banana".match(/an/));
// -> ["an"]

console.log("banana".match(/an/g));
// -> ["an", "an"]

console.log("banana".match(/an/y));
// -> null


// LOOPING OVER MATCHES

// one way to find each occurance of a pattern is by using match() in a loop

let input = "A string with 3 numbers in it: 69 and 420.";
let number = /\b\d+\b/g;
let match;

// loops until there are no more matches (until the value of match === null)
while (match = number.exec(input))
    console.log("Found", match[0], "at", match.index);

// -> Found 3 at 14
// -> Found 69 at 31
// -> Found 420 at 38
