/** Reminder of EcmaScript 6 const and let keywords */
const something = {};
something = 10; // Error.
let somethingElse = {};
somethingElse = 1000; // This is fine.
/** TypeScript types including examples*/
// Boolean
const lie = false, truth = true;
// Number
const pi = 3.14159;
// String
const words = "Hello World";
// Array (T array[] || Array<T>)
const names = ["Freddy", "Ben"];
const numbers = [5, 7.3];
names.push("Molly"); // This Works
names.push(4); // This doesn't.
numbers.push(42); // This Works
numbers.push("Woody"); // This doesn't.
// Tuples
let date_triplet;
date_triplet = [31, 6, 2016]; //[Date, Month, Year]
let athena;
athena = ['Athena', 9386]; // [Name, Age]
var name = athena[0]; // TS infers type
const age = athena[1];
name = athena[1]; // this won't work
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
const red = Color.Red;
console.log(Color[0]); // 'Red'
console.log(Color[3]); // undefined
// Any (var lookalike)
let mystery = 4; // number
mystery = "four"; // string -- no error
// Void (associated with values undefined or null: mainly used as return value in functions)
let the_void = undefined;
the_void = null;
// Function return type
function capitalizeName(name) {
    return name.toUpperCase();
}
console.log(capitalizeName('geronimo')); // 'GERONIMO'
console.log(capitalizeName(42)); // Error; 42 isn't a string.
// Function argument and return value annotation
let multiply;
multiply = function (first, second) {
    return first * second;
};
let multiplyFirst;
multiplyFirst = function (first) {
    return function (num) {
        return first * num;
    };
};
console.log(multiply(5, 2)); // '10'
console.log(multiplyFirst(9)(2)); // '18'
