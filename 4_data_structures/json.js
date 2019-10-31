// WHAT JSON IS
/*  JavaScript Object Notation
 *  Common way to store and send data across the web, used in other languages
 *  A serialized version of data (converted into a flat version)
 */

// example of JSON data:
{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}

// JSON FUNCTIONS
let string = JSON.stringify({squirrel: false, events: ["work"]});
    // string === {"squirrel":false,"events":["work"]}

let data = JSON.parse(String).events;
    // data === ["work"]
