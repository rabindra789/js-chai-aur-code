// # Javascript datatypes Revision

// **Primitives datatypes (7 catagories)**

// 1. String
// 2. Number
// 3. null
// 4. Boolean
// 5. undefined
// 6. Symbol (to make unique value)
// 7. BigInt

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

// Symbol:

const id = Symbol("123");

const anotherId = Symbol("123");

const bigNumber = 234125424332134n;

// Javascript is a dynamically-typed language.

// **Reference type or Non-primitive datatypes**

// 1. Arrays
// 2. Objects
// 3. Functions

// Objects:

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "rabindra",
  age: 18,
};

// Function:
const myFunction = function () {
  console.log("Hello world");
};


//  Link - https://262.ecma-international.org/5.1/#sec-11.4.3