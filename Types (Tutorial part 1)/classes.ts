"use strict";

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


class ListComponent2 {
    // We have to rename the private property so we can name
    //   our "get" method "things".
    private _things : Array<ListItem>;

    constructor () {
        this._things = [];
    }

    // Adds a "getter", which returns the private property.
    get things () : Array<ListItem> { return this._things; }
}

class ListItem2 {
    private _name : string;

    constructor (name) {
        this._name = name;
    }

    get name () : string { return this._name; }
}

const item2 = new ListItem2('Thing to Do');
console.log(item2.name); // 'Thing to Do'

// Subclasses example:
class CompletedListItem extends ListItem {
    completed : boolean;

    constructor (name : string) {
        super(name);
        this.completed = true;
    }
}

// property shorthand via constructor
class ListComponent3 {
    constructor (private _things : ListItem[]) { }

    get things () : ListItem[] { return this._things; }
}

// !IMPORTANT:
// While the private modifier is handy, it can't guarantee privacy, and you shoudn't rely on it to do so; and
// TypeScript's OOP sugar is just syntactic sugar. You can still add and delete methods, see and access private properties, and do other such blasphemy at runtime, if you're clever enough.