// counts how many 'B's are in a string
const countBs = (str) => {
    let count = 0;

    for (let char of str)
        if (char === 'B')
            count++;
    
    return count;
}
