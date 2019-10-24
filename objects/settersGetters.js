// SETTERS AND GETTERS AND STATICS
// note the "set", "get" and "static" keywords

// temperature class
class Temperature
{
    constructor(celsius)
    {
        this.celsius = celsius;
    }
    
    // getters retreive (gets) values stored in the object
    get fahrenheit()
    {
        return this.celsius * 1.8 + 32;
    }
    
    // setters writes (sets) values stored in the object
    set fahrenheit(value)
    {
        this.celsius = (value-32) / 1.8;
    }

    // statics are stored on the class's constructor
    static fromFahrenheit(value)
    {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);   // using getters
// -> 71.6

temp.fahrenheit = 86;   // using setters
console.log(temp.celsius);

// using the static method to create a temperature with fahrenheit
let fahr = new Temperature.fromFahrenheit(100);
