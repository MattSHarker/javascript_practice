// FREEZING OBJECTS
// freezing an object prevents its properties from being changed

let object = Object.freeze({value: 5});
object.value = 10;

console.log(object.value);
// -> 5
