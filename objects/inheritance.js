// INHERITANCE

// matrix class
class Matrix
{
    constructor(width, height, element = (x, y) => undefined)
    {
        this.width   = width;
        this.height  = height;
        this.content = [];

        for (let y = 0; y < height; y++)
        {
            for (let x = 0; x < width; x++)
            {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) { return this.content[y * width + x]; }

    set(x, y) { this.content[y * this.width + x] = value; }
}

// symmetric matrix class (value at x,y is the same as y,x)
class SYmmetricMatrix extends Matrix
{
    constructor(size, element = (x, y) => undefined)
    {
        super(size, size, (x, y) =>
        {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value)
    {
        super.set(x, y, value);
        if (x != y)
        {
            super.set(y, x, value);
        }
    }
}

let matrix = new SYmmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// -> 3,2


// EXTENDS
// the keyword that makes the subclass refer to a superclass and not Object


// SUPER
// calls a method or constructor from the superclass
    // super() for the superclass's contructor
    // super.method() for methods
        //  method() would be the same as this.method()
