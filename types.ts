/** Reminder of EcmaScript 6 const and let keywords */
const something = {};
something = 10; // Error.

let somethingElse = {};
somethingElse = 1000; // This is fine.


/** TypeScript types including examples*/
// Boolean
const lie : boolean = false,
    truth : boolean = true;


// Number
const pi : number = 3.14159;


// String
const words : string = "Hello World";


// Array (T array[] || Array<T>)
const names : string[] = ["Freddy", "Ben"];
const numbers : Array<number> = [5, 7.3];

names.push("Molly");    // This Works
names.push(4);          // This doesn't.
numbers.push(42);       // This Works
numbers.push("Woody");  // This doesn't.

// Tuples
let date_triplet : [number, number, number];
date_triplet = [31, 6, 2016]; //[Date, Month, Year]

let athena : [string, number];
athena = ['Athena', 9386]; // [Name, Age]

var name : string = athena[0]; // TS infers type
const age : number = athena[1];

name  = athena[1]; // this won't work


// Enum
enum Color { Red, Green, Blue };
const red : Color = Color.Red;
console.log(Color[0]); // 'Red'
console.log(Color[3]); // undefined


// Any (var lookalike)
let mystery : any = 4; // number
mystery = "four"; // string -- no error


// Void (associated with values undefined or null: mainly used as return value in functions)
let the_void : void = undefined;
the_void = null;


// Function return type
function capitalizeName (name : string) : string {
    return name.toUpperCase();
}
console.log(capitalizeName('geronimo')); // 'GERONIMO'
console.log(capitalizeName(42)); // Error; 42 isn't a string.


// Function argument and return value annotation
let multiply : (first : number, second : number) => number;
multiply = function (first, second) {
    return first * second;
};

let multiplyFirst : ( first : number) => ((second : number) => number);
multiplyFirst = function (first) {
    return function (num) {
        return first * num;
    }
};
console.log(multiply(5, 2)); // '10'
console.log(multiplyFirst(9)(2)); // '18'