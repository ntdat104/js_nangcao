//* value types vs reference types

//! value types: let, var, ...
let a1 = 1;
let a2 = 1;
console.log(a1 === a2); //* true

//! reference type: object + array + function
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); //* false

let a3 = a2;
a3 = 2;
console.log(a2); //* a2 = 1 - unchange

let obj3 = obj2;
obj3.a = 2;
console.log(obj2); //* obj2.a = 2 - change
