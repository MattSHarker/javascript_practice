// The most widely used approach to JS modules is CommonJS
    // Used by NodeJS and most packages on NPM

// The require() function ensures a module is loaded and returns its interface

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format)
{
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag =>
    {
        if (tag === "YYYY") return date.getFullYear();
        if (tag === "M")    return date.getMonth();
        if (tag === "MMMM") return months[date.getMonth()];
        if (tag === "D")    return date.getDate();
        if (tag === "Do")   return ordinal(date.getDate());
        if (tag === "dddd") return days[date.getDate()];
    });
};
