// returns a boolean about whether a number is even or odd
// function is recursive and does not use %

const isEven = function (x) {
    // check if x is in appropriate range (-1 to 1)
    if      (x === 1) return false;
    else if (x === 0) return true;

    // otherwise bring it closer to 0
    else if (x > 1) return isEven(x-2);
    else if (x < 0) return isEven(x+2); // will bring negative ints to 0 or 1
};

