"use strict";
// using an interface
class RegisteredUser {
    // Shorthand
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    print() {
        console.log(`Name: ${this.name} | Email: ${this.email} | No avatar.`);
    }
}
