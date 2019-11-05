// replace quotations used with single quotes with double quotes
// be sure not to change apostrophes in words like "can't"

let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\W)'|'(^|\W)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
