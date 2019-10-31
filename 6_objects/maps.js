// MAPS

// a map stores key-value pairs
let people =
{
    Boris: 38,
    Stan:  47,
    Jill:  24
};

// retreiving values from a map
console.log(`Jill is ${people[Jill]} years old`);
// -> Jill is 24 years old

// accessing information that does not exist in the map
console.log("Is Bob's age know?", "Bob" in people);
// -> Is Bob's age known? false

// since plain objects derive from Object.prototype, it looks like prototype
    // properties are in the map
console.log("Is toString's age known?", "toString" in ages);
// -> Is toString's age known? true

// because of this property, it is best to avoid using plain objects as maps


// SAFER WAYS TO CREATE MAPS

// it is possible to create objects with no prototypes by
    // passing "null" to Object.create

console.log("toString" in Object.create(null));
// -> false


// MAP CLASS

// JS comes with a map class
let people = new Map();
ages.set("Boris", 38);
ages.set("Stan",  47);
ages.set("Jill",  24);

// accessing values
console.log(`Jill is ${people.get("Jill")} years old`);
// -> Jill is 24 years old

// accessing information that does not exist in the map
console.log("Is Bob's age know?", "Bob" in people);
// -> Is Bob's age known? false

// the Object prototypes don't exist in this class
console.log(people.has("toString"));
// -> false
