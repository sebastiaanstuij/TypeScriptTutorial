"use strict";

// defining an interface
interface User {
    // PROPERTIES
    name : string;
    email : string;
    avatar? : Object; // optional property

    // API
    print () : void;
}

// using an interface
class RegisteredUser implements User {

    // Shorthand
    constructor (public name : string, public email : string) { }

    print () : void {
        console.log(`Name: ${this.name} | Email: ${this.email} | No avatar.`);
    }
}

