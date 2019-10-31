// the vector class represents a 2D vector with x and y parameters

class Vec
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    // plus takes in a vector and returns a new vector that is the sum of the two
    plus(vector){ return new Vec(this.x + vector.x, this.y + vector.y); }

    // minus takes in a vector and returns a new vector that is the difference of the two
    minus(vector){ return new Vec(this.x - vector.x, this.y - vector.y); }
    
    // a getter property that gives the distance from the origin (0, 0)
    get length(){ return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); }
}
