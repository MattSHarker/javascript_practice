const box =
{
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content()
    {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

// Your code here.
// The prompt wasn't exactly clear, but looking at the source's answer,
    // this should satisfy all the constraints
function withBoxUnlocked(body)
{
    // if the box is unlocked, run the function
    if (!box.locked)
        return body();

    // unlock the box
    box.unlock();

    // run the function
    try{ return body(); }

    // lock the box
    finally{ box.lock(); }
}
  
withBoxUnlocked(function()
{
    box.content.push("gold piece"); 
}); 
  
try
{
    withBoxUnlocked(function()
    { 
        throw new Error("Pirates on the horizon! Abort!"); 
    });
}
catch (e)
{
    console.log("Error raised: " + e);
}

console.log(box.locked);
// → true
