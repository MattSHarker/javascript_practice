// The concept of objects in JS is the same as any OOP language

// Like other languages, methods and properties can be either public or private
    // for private properties, start their name with an underscore (eg: _width)


// METHODS

// methods are properties that hold a function value

let rabbit = {};
rabbit.speak = function(phrase)
{ 
    console.log(`The rabbit says "${phrase}"`); 
};

rabbit.speak("Hello");
// -> The rabbit says "Hello"

// methods should be related to the object they are stored in
    // e.g. don't put string manipulators into a math based class


// THIS

// the "this" keyword points to the object the method is stored in
function speak(phrase)
{
    console.log(`The ${this.type}rabbit says "${phrase}"`);
};

let whiteRabbit = {type: "white", speak};
let blackRabbit = {type: "black", speak};

whiteRabbit.speak("Hi");
// -> The white rabbit says "Hi"

blackRabbit.speak("iH");
// -> The black rabbit says "iH"

// you can use a function's call method to pass an object explicitly
speak.call(whiteRabbit, "Hi");
// -> The white rabbit says "Hi"

// "this" cannot be refered to by a regular function
// however, arrow functions can refer to the "this" binding of their current scope


function normalize()
{
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});
// -> [0, 0.4, 0.6]


// PROTOTYPES
Object.prototype

// if an object calls a method it doesn't have, it will check it's prototype for it

let empty = {};

console.log(empty.toString);
// -> function toString() {...}

console.log(empty.toString());
// -> [object Object]


// Object.getPrototypeOf() returns the prototype of an object
console.log(Object.getPrototypeOf({}) === Object.prototype);
// -> true

console.log(Object.getPrototypeOf(Object.prototype));
// -> null

// most objects don't directly use Object.prototype
    // Arrays: Array.prototype, Functions: Function.prototype


// Object.create can create an object with specific prototypes
// This is the basis of classes (see classes.js)
let protoRabbit = 
{
    speak(phrase)
    {
        console.log(`The ${this.type} rabbit says "${phrase}"`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("RAAAAGH");
// -> The killer rabbit says "RAAAAGH"
