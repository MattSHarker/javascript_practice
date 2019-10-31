// takes in two numbers and returns the smaller

// easy to read version
const min = function (x, y) {
    if (x < y)
        return x;
    else
        return y;
};

// concise version
const min = (x, y) => x < y ? x : y;
