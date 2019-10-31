// creates an array of consecutive numbers from $start to $end
const range = function(start, end, step) {
    let array = [];

    if (step === undefined) step = 1; 

    if (start <= end)
    {
        while (start <= end)
        {
            array.push(start);
            start += step;
        }
    }
    else
    {
        while (end <= start)
        {
            array.push(start);
            start += step;
        }
    }

    return array;
};

// adds all of the numbers of an array
const sum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; ++i)
        sum += array[i];

    return sum;
};

console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// -> 55
