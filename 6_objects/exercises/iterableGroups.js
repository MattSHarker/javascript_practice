// from groups.js
class Group
{
    constructor() { this.elements = []; }

    add(element)
    {
        if (!this.has(element))
            this.elements.push(element);
    }

    delete(element)
    {
        this.elements.splice(this.elements.indexOf(element), 1);
    }

    has(element)
    {
        return (this.elements.indexOf(element) !== -1);
    }

    static from(iter)
    {
        let group = new Group;

        for (let element of iter)
            group.add(element);

        return group;
    }

    // new, needed to do iteration
    [Symbol.iterator]()
    {
        return new GroupIterator(this);
    }
}

class GroupIterator
{
    constructor(group)
    {
        this.group = group;
        this.position = 0;
    }

    next()
    {
        if (this.position >= this.group.elements.length)
            return {done: true};
        else
        {
            let val = {value: this.group.elements[this.position], done: false};
            
            this.position++;
            return val;
        }
    }
}
