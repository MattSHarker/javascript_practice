// THE REPLACE METHOD

// replaces part of a string with another string
console.log("papa".replace("p", "m"));
// -> mapa

// can also take in regex
console.log("Borobudur".replace("/[ou]/", "a"));
// -> Barobudur

console.log("Borobudur".replace(/[ou]/g, "a"));
// -> Barabadar


// convert "LastName, FirstName" to "FirstName LastName"
console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
            .replace(/(\w+), (\w+)/g, "$2 $1"));
// -> Barbara Liskov
//    John McCarthy
//    Philip Wadler

// the $1 and $2 refer to the different parenthesized regex groups
    // these go up to $9, $& refers to everything


// PASSING FUNCTIONS TO THE REPLACE METHOD

// functions can be passed as the second parameter to replace()
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, 
            str => str.toUpperCase()));
// -> the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit)
{
    amount = Number(amount)-1;

    // if only one left remove the s
    if (amount === 1)   
        unit = unit.slice(0, unit.length - 1);
    else
        amount = "no";
    
    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// -> no lemon, 1 cabbage, 100 eggs
