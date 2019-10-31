// checks if the contents of two objects are equal

const deepEqual = function(obj1, obj2)
{
    if (obj1.here.is !== obj2.here.is ||
        obj1.object  !== obj2.object )
        return false;
    else
        return true
};

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
