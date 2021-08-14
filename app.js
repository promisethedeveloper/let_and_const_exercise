const h1 = document.createElement("h1");
const section = document.createElement("section");
h1.textContent = "In this exercise you will refactor some ES5 code into ES2015";
section.append(h1);
document.body.append(section);

// ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;
pi = 42;

console.log(pi);

// Q1. WHAT IS THE DIFFERENCE BETWEEN VAR AND LET?
// Var variables are function scoped. When varibales are declared with var on the global scope, they get added to the windows object.
// variables declared with var are hoisted. Variables declared with var can be redeclared and reassigned.

// Q2. WHAT IS THE DIFFERENCE BETWEEN VAR AND CONST?
// Variables declared with var can be redeclared and reassigned, variables declared with const cannot be redeclared or reassigned.
// Var variables are function scoped, const variables are block scoped.

// Q3. WHAT IS THE DIFFERENCE BETWEEN LET AND CONST
// let variables can be reassigned, const variables cannot be reassigned.

// Q4. WHAT IS HOISTING
// Hoisting is said to happen when a code is moved to the top of the code base when it is called, if it was called before it was declared.
// Variables declared with var are hoisted.
