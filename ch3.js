// Ch. 3's discussion of different literals, let vs. var, const

let count = 10; // integer literal; count is still a double
const blue = 0x0000ff; // hexadecimal (hex ff = decimal 255)
const umask = 0o0022; // octal (octal 22 = decimal 18)
const roomTemp = 21.5; // decimal
const c = 3.0e6; // exponential (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19; // exponential (-1.6 × 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; // "not a number"

// Number object
const small = Number.EPSILON; // the smallest value that can be
// added to 1 to get a distinct number
// larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer
const max = Number.MAX_VALUE; // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer
const min = Number.MIN_VALUE; // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY; // the same as -Infinity
const nan = Number.NaN; // the same as NaN
const inf = Number.POSITIVE_INFINITY; // the same as Infinity

// Symbols
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE // false: every symbol is unique

// Undefined vs. null
let currentTemp; // implicit value of undefined
const targetTemp = null; // target temp null -- "not yet known"
currentTemp = 19.5; // currentTemp now has value
currentTemp = undefined; // currentTemp appears as if it had never
// been initialized; not recommended

// Objects
const obj = {}; // empty object
obj.size; // undefined
obj.color = "yellow"; // "yellow" - property names can be strings/symbols.

obj["not an identifier"] = 3; // computed member access 
obj["not an identifier"]; // 3
obj["color"]; // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 }; // declaration on one line

const sam3 = {
    name: 'Sam',
    classification: {        // property values can
        kingdom: 'Anamalia', // be objects themselves
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

// Arrays
const a1 = [1, 2, 3, 4]; // array containing numbers
const a2 = [1, 'two', 3, null]; // array containing mixed types
const a3 = [ // array on multiple lines
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4 = [ // array containing objects
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
const a5 = [ // array containing arrays
    [1, 3, 5],
    [2, 4, 6],
];

// Dates
const now = new Date();
now; // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)

const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm

halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0

// Conversion
const a = parseInt("16 volts", 10); // the " volts" is ignored, 16 is
// parsed in base 10
const b = parseInt("3a", 16); // parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph"); // the " kph" is ignored; parseFloat

const n = 33.5 // to string
n; // 33.5 - a number
const s = n.toString();
s; // "33.5" - a string
const arr = [1, true, "hello"];
arr.toString(); // "1,true,hello"
