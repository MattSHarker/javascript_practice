// POLYMORPHISM

// pieces of code written to work with any interface

// in this example, the String method can take in any object that 
    // has toString implemented

class Rabbit
{
    // the "constructor" method is treated differently to other methods
    // it provides the 
    constructor(type)
    {
        this.type = type;
    }

    speak(line)
    {
        console.log(`The ${this.type} rabbit says "${phrase}"`);
    }
}

Rabbit.prototype.toString = function()
{
    return `a ${this.type} rabbit`;
};

let blackRabbit = new Rabbit("black");

console.log(String(blackRabbit));
// -> a black rabbit

