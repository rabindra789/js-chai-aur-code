// Immediately Invoked Function Expressions (IIFE)
// global scope k pollution se problem hoti hai kai bar toh us global scope k pollution ko hatane ke liye hamne iife ka use kiya.

(function chai() {
    // named iife
  console.log(`DB CONNECTED`);
})(); // semicolon on first execution in mandatory.

((name) => {
    // simple iife
  console.log(`DB CONNECTED 2 ${name}`);
})("rabindra");
