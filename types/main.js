// NUMBERS

// java script does not differentiate between different forms of numbers
13
1237894618282998287
43.78
// these are all the same type: number

// There are some special numbers as well
Infinity
-Infinity
NaN
// note: NaN is the only number that does NOT equal itself


// STRINGS
"This"
'This'
`and this`
// are all the same data type: string
// all of these marks work mostly the same and are interchangable
    // NOTE the opening and closing marks have to match

// escape characters work the same as any other language
"First line\nSecond line"


// backtick string have extra capabilities
// a ${} inside a backtick string will compute its contents
`50 * 2 is ${50 * 2}`
// this will produce "50 * 2 is 100"


// BOOLEANS
true
false
// these are the two boolean values, and work the same as any language


// EMPTY VALUES
null
undefined
// these both are used to denote the absense of useful data
// there's slight diferences, but they're almost exactly the same and typically
    // can be treated as such


// AUTOMATIC TYPE CONVERSION
// javascript automatically converts types to try to do what the user asks
 10 * null      // returns 0
 "8" - 2        // returns 6
 "five" - 2     // returns NaN
false === 3     // returns false
