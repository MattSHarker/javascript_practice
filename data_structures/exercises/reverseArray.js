// returns an array that is the reverse of the original
const reverseArray = (array) =>
{
    let temp = [];

    for (let i = 0; i < array.length; ++i)
        temp.push(array[array.length-1-i]);

    return temp;
}

// reverses the contents of an array in place
const reverseArrayInPlace = (array) =>
{
    let temp = []

    while (array.length > 0)
        temp.push(array.pop());

    for (let i = 0; i < temp.length; ++i)
        array.push(temp[i]);
}

console.log(reverseArray(["A", "B", "C"]));
// -> ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// -> [5, 4, 3, 2, 1]
