// WORD AND STRING BOUNDRIES

// sometimes we want to ensure a string is only so long
    // for example, we don't want to take in a date of 100-1-30000

// the marker \b indicates a word boundry, which is the start or end of a string
console.log(/cat/.test("concatenate"));
// -> true

console.log(/\bcat\b/.test("concatenate"));
// -> false

console.log(/\bcat\b/.test("catsup"));
// -> false

console.log(/\bcat\b/.test("blackcat"));
// -> false

console.log(/\bcat\b/.test("black cat"));
// -> true

console.log(/\bcat\b/.test("cat"));
// -> true
