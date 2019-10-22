// SYMBOLS

// symbols are values created with the Symbol() function
// no two values created by Symbol() are the same, all are unique
let sym = Symbol("name");
console.log(sym === Symbol("name"));
// -> false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// -> 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function()
{
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// -> 1,2

console.log([1, 2][toStringSymbol]());
// -> 2 cm of blue yarn

