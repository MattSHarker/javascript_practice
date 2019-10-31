// counts the number of specified chars in a string
const countChar = (str, char) => {
    let count = 0;

    for (let part of str)
        if (part === char)
            count++;
    
    return count;
}

// rewrite countBs to use countChar
const countBs = (str) => {
    return countChar(str, 'B');
}
