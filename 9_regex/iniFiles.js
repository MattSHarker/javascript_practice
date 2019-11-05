// READING IN AN INI FILE

/*  Rules for reading an .ini file:
 *      Blank lines and lines starting with ; are ignored
 *      Lines wrapped in [ and ] start a new section
 *      Lines with an alphanumeric ID followed by an = adds a setting
 *          to the current section
 *      Anything else is invalid
 */

function parseINI(string)
{
    // start with an object to hold the top-level fields
    let result = {};
    let section = result;

    // split the file line by line
        // this regex makes it work with both newlines and carriage returns
    string.split(/\r?\n/).forEach(line => 
    {
        let match;

        // checks if the line adds a setting
        if (match = line.match(/^(\w+)=(.*)$/))
            section[match[1]] = match[2];
        
        // otherwise check if the line is a section
        else if (match = line.match(/^\[(.*)\]$/))
            section = result[match[1]] = {};
        
        // otherwise throw an error if the line isn't a comment
        else if (!/^\s*(;.*)?$/.test(line))
            throw new Error("Line '" + line + "' is not valid.");
    });

    return result;
}

console.log(parseINI(
`name=Vasilis
[address]
; blablabla
city=Tessaloniki`));
// -> {name: "Vasilis", address: {city: "Tessaloniki"}}
