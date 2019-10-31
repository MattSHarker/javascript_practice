// original
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one")); // this will try to call the property and not the function
// TypeError: map.hasOwnProperty is not a function (line 5 in function eval)

// circumvent the property by calling the prototype itself
console.log(Object.prototype.hasOwnProperty(map, "one"));
