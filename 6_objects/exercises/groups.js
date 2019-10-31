// our own version of the Set class

class Group
{
    constructor() { this.elements = []; }

    // if the element is not in the Group, add it
    add(element)
    {
        if (!this.has(element))
            this.elements.push(element);
    }

    // remove an element from the Group
    delete(element)
    {
        this.elements.splice(this.elements.indexOf(element), 1);
    }

    // determines if the Group contains a specific element or not
    has(element)
    {
        // if the element is found, return true
        return (this.elements.indexOf(element) !== -1);
    }

    // creates a group from an iterable object
    static from(iter)
    {
        let group = new Group;

        for (let element of iter)
            group.add(element);

        return group;
    }
}
