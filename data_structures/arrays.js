// CREATING ARRAYS
let array = [1, 2, 3, 8, 16];


// ACCESSING ELEMENTS
// indexing starts at 0
let one = array[0]; // one stores 1
array[3] = 4;

// finding position on an element
let array = [1, 2, 3, 2, 1];
console.log(array.indexOf(2));      // -> 1 (index)
console.log(array.lastIndexOf(2));  // -> 3


// ITERATING OVER ARRAYS
// two ways to iterate
for (let i = 0; i < array.length; i++)
    ;   // do something

for (let num in array)
    ;   // do something


// PUSH, POP, UNSHIFT, SHIFT...

// .push(x) adds an element to the end of the array
// .pop()   removes and returns the last element of the array
let x = 0;
let array = [1, 2, 3];

array.push(4);      // [1, 2, 3, 4, 5]  x === 0
array.push(5);      // [1, 2, 3, 4, 5]  x === 0
x = array.pop();    // [1, 2, 3, 4]     x === 5
x = array.pop();    // [1, 2, 3]        x === 4


// .unshift(x)  adds an element to the front of the array
// .shift() removes and returns the first element of the array
let x = 0;
let array = [3, 4, 5];

array.unshift(2);   // [2, 3, 4, 5]     x = 0
array.unshift(1);   // [1, 2, 3, 4, 5]  x = 0
x = array.shift();  // [2, 3, 4, 5]     x = 1
x = array.shift();  // [3, 4, 5]        x = 2
