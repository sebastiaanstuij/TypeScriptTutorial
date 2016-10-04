// ListComponent maintains a list of things that a user can
// add to and delete from. This is a pure JavaScript class.
class ListComponent {

    // Adding a property is as simple as adding its name and type
    // at the top of the class.
    public things : Array<ListItem>; // Or -- things : ListItem[];

    constructor () {
        this.things = [];
    }
}

// A ListItem is a wrapper around the items in our list.
// This is also pure JavaScript, for now.
class ListItem {

    private name : string;

    constructor (name) {
        this.name = name;
    }
}

const item = new ListItem('Thing to Do');
console.log(item.name); // 'Thing to Do' // Property 'name' is private


// TypeScript provides two access modifiers:
// 1) public: You can read or write public properties from anywhere. These behave identically to object properties in vanilla JavaScript.
// 2) private: You can only read or write a private property from inside of the class that "owns" the property.