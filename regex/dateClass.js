// THE DATE CLASS

console.log(new Date());
// -> Wed Oct 30 2019 19:12:36 GMT-0700 (Pacific Daylight Time)

console.log(new Date(2009, 11, 8));
// -> Tue Dec 08 2009 00:00:00 GMT-0800 (Pacific Standard Time)

console.log(new Date(2009, 11, 8, 12, 59, 59, 999));
// -> Tue Dec 08 2009 12:59:59 GMT-0800 (Pacific Standard Time)

// Date(Milliseconds since 1970)
// Date(Year, Month, Day)
// Date(Year, Month, Day, Hour, Minutes, Seconds, Milliseconds)
// NOTE: Months are 0 indexed while Days are not for some reason 
// Hours, Minutes, Seconds, and Milliseconds are optional, and default to 0


// GETTIME

// the getTime method returns the milliseconds since the start of 1970, UTC
console.log(new Date(2013, 11, 19).getTime());
// -> 1387440000000

console.log(new Date(1387440000000));
// -> Thu Dec 19 2013 00:00:00 GMT-0800 (Pacific Standard Time)

console.log(new Date(0));
// -> Wed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)



// LIST OF OTHER METHODS
/*  getFullYear
 *  getMonth
 *  getDate
 *  getHours
 *  getMinutes
 *  getSeconds
 */


 // USING REGEX TO CONVERT A STRING TO A DATE 
function getDate(string)
{
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    // the _ is only there to catch the full match element in the array returned by exec

    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));
// -> Thu Jan 30 2003 00:00:00 GMT-0800 (Pacific Standard Time)
