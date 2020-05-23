//* destructuring
//! gán các giá trị của array vào các biến.
const arr = [10, 20, 30, 40, 50];

const [a, b, c, d, e] = arr; //! only array

console.log(a, e);

//* object
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a: x, b: y, c: z } = obj;

console.log(x, y, z);
