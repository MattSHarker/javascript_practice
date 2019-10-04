 // CREATING AN OBJECT
 let polygon = {
    sides: 4,
    sideLengths: [10, 10, 10, 10],
    "name": "square"     // no trailing comma
 }; // SEMICOLON!!
 
// an array of objects
let journal = [
    { events: ["one", "two"],    bool: false },
    { events: ["two", "three"],  bool: true  },
    { events: ["three", "four"], bool: false }  // and so on
];

 
 // PROPERTIES AND METHODS

 // expressions that access a property of a value
 let arr = [1, 2, 3, 4, 5];

 // the two way to access properties are . and []
value.length;     // length is a propety of arr
value[3];         // this is also a property of arr

// All values have properties, except for null and undefined

// checking if properties exist
let object = { one: 1, two: 2 };

object.one;         // -> 1
delete object.one;
object.one;         // -> undefined

"one" in object;    // -> false
"two" in object;    // -> true

// assigning and reassigning properties
let object = { one: 1, two: 2};
Object.assign(object, {two: 4, three: 3});

console.log(object);    // -> {one: 1, two: 4, three: 3}


// MUTABILITY

let obj1 = {value: 1};
let obj2 = obj1;
let obj3 = {value: 1};

console.log(obj1 === obj2);     // -> true
console.log(obj1 === obj3);     // -> false

obj1.value = 2;
console.log(obj2);  // -> 2
console.log(obj3);  // -> 1

// using let allows both the values and the binding to be changed
let score = {home: 0, away: 0};

// BOTH OKAY
score.home = 10;
score = {home:10, away: 9};

// when using const, the binding itself cannot change, but the contents can
const score = {home: 0, away: 0};

// OKAY
score.home = 10;
// NOT OKAY
score = {home: 10, away : 9};

