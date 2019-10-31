//  Prototypes are essentially an informal version of classes

// Classes are constructor functions with a prototype property

let protoRabbit = 
{
    speak(phrase)
    {
        console.log(`The ${this.type} rabbit says "${phrase}"`);
    }
};

// an example of a constructor function
const makeRabbit = function(type)
{
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
};

function Rabbit(type)
{
    this.type = type;
}
Rabbit.prototype.speak = function(phrase)
{
    console.log(`The ${this.type} rabbit says "${phrase}"`);
}

// putting the keyword "new" in front of a function call treats the function as
    // a constructor
let weirdRabbit = new Rabbit("weird");

// !!! Capitalize the names of constructors !!!


// CLASS NOTIATION

// a much easier alternative to prototypes and constructors
class Rabbit
{
    // the "constructor" method is treated differently to other methods
    // it provides the 
    constructor(type)
    {
        this.type = type;
    }

    speak(line)
    {
        console.log(`The ${this.type} rabbit says "${phrase}"`);
    }
}

let killerRabbit = new Rabbit("killer");
let evilRabbit   = new Rabbit("evil");

// classes can only allow methods to be added to the prototype

// like functions, classes can be used in statements and expresions

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// -> hello


// OVERRIDING DERIVED PROPERTIES

// when a property is added to an object, regardless of its presence (or lack of)
    // in the prototype, it is added to the object instance itself
// if a property already exists, its previous value will be changed in the instance

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// -> small

killerRabbit.teeth = "long";
console.log(killerRabbit.teeth);
// -> long

console.log(evilRabbit.teeth);
// -> small

console.log(Rabbit.prototype.teeth);
// -> small
