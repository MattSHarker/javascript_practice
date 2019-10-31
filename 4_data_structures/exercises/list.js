// turns an array into a list
const arrayToList = function(array) {
    if (array[0] !== undefined)
        return { value: array.shift(), rest: arrayToList(array)};
    else
        return null;
};


// turns a list into an array
const listToArray = function(list)
{
    let arr = [list.value];

    while (list.rest !== null)
    {
        list = list.rest;
        arr.push(list.value);
    }

    return arr;
};


// adds a value to the front of a list
const prepend = function(val, list) {
    return {value: val, rest: list};
};


// returns the nth element of a list
const nth = function(list, pos) {
    if (pos > 0 && list.rest === null)
        return undefined;
    else if (pos === 0)
        return list.value;
    else
        return nth(list.rest, pos-1);
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
