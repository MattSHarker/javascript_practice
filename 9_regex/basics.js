// CREATING A REGULAR EXPRESSION

// two ways to create a regex
let re1 = new RegExp("abc");    // via methods
let re2 = /abc/;                // the pattern inbetween "//"

// the escape character '\' works in regex too, as certain characters
    // have specific meanings in regex
let eighteenPlus = /eighteen\+/;


// TESTING FOR MATCHES

// the test() method checks in a string contains a pattern
console.log(/abc/.test("abcde"));
// -> true

console.log(/abc/.test("defgh"));
// -> false


// SETS OF CHARACTERS

// [] will match anything inside to one character

// matches a string that contains any digit
console.log(/[0123456789]/.test("in this 1"));
// -> true


// - inbetween two chars will create a range based on their unicode values
console.log(/[0-9]/.test("in this 1"));
// -> true

// this works on any unicode value, not just digits


// LIST OF SPECIAL CHARACTERS AND SHORTCUTS

/*  \d  any digit char
 *  \w  any alphanumeric char
 *  \s  and whiteshpace char
 *  \D  any NON-digit char
 *  \W  any NON-alphanumeric char
 *  \S  any NON-whitespace char
 *  \b  string boundry
 * 
 *  x-y     matches any chars within x and y in terms of unicode values  
 *  .       any character expect for newline
 *  ?       makes part of a pattern optional
 *  ^       inverses a set of chars (put in front of patter)
 *  +       matches the set multiple times (at least once)
 *  *       matches the set multiple times (can also match 0 times)
 *  
 *  /.../g  replaces all instances of matching expressions (g as in global)
 * 
 *  []      matches anything inside once
 *  {x}     matches x amount of times
 *  {x,y}   matches at least x and no more than y times (x <= _ <= y)
 *  (x|y|z) matches to x OR Y OR z
 * 
 */


// ^ inverts a set
let notBinary = /[^01]/;
console.log(notBinary.test(10110010101010));
// -> false

console.log(notBinary.test(10101001120010));
// -> true


// REPEATING PATTERNS

// the + allows the pattern to match multiple times, but at least once to be true
console.log(/'\d+'/.test("'123'"));
// -> true

console.log(/'\d+'/.test("''"));
// -> false


// the * also allows the pattern to match multiple times, but also 0 times to be true 
console.log(/'\d*'/.test("'123'"));
// -> true

console.log(/'\d*'/.test("''"));
// -> true


// ? makes part of a pattern optional
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// -> true

console.log(neighbor.test("neighbor"));
// -> true


// {} with an int inside indicates how many times the pattern should repeat
// {2,4} says the pattern should repeat 2, 3, or 4 times
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(dateTime.test("1-30-2003 8:45"));


// (x|y) matches to either x or y
let animalCount = /\b\d+ (pig|cow|chickedn)s?\b/;   // see ./stringBoundries.js for \b
console.log(animalCount.test("15 pigs"));
// -> true

console.log(animalCount.test("15 pigchickens"));
// -> false
