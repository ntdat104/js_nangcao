//TODO hoisting
//TODO var let const
//* 1. declaration (khai báo biến)
//* 2. hoisting (chỉ trong trường hợp var)
//* 3. block scope (if, for, ...)
//* 4. redeclaration (khai báo lại)

//TODO 1. declaration (khai báo biến)
//* var khai báo lại được (khai báo đè)
var a = 5;
console.log("a =", a);
var a = 7;
console.log("a =", a);

//* let với const thì không
let b = 2;
//* let b = 3;
//! Báo lỗi

const c = 3;
//* const c = 4;
//! Báo lỗi
//! Đặc biệt, khi khai báo const c thì phải gán luôn giá trị cho nó.

//TODO 2. hoisting - only var
//* Hoisting là hành động mặc định của Javascript,
//* nó sẽ chuyển phần khai báo lên phía trên top trong javascript,
//* một biến (variable) có thể được khai báo sau khi được sử dụng.
function render() {
  console.log("x =", x);
  var x; //! dùng var thì được, dùng let vớit const thì báo lỗi.
}
render();

//TODO 3. block scope
//* Là những khai báo biến ở trong if, for, ...
//! var
if (true) {
  var x = 10;
}
console.log("x =", x); //* 10

//! let & const
if (true) {
  let index1 = 10;
  const index2 = 15;
}
//* console.log(index, index2);
//! index1 is not defined, index2 is not defined

//TODO 4. function scope
//* Là những khai báo biến ở trong function.
//! var
function render() {
  var y = 10;
}
//* console.log("y =", y);
//! y is not defined

//! let & const
function render1() {
  let index1 = 10;
  const index2 = 15;
}
//* console.log(index1, index2);
//! index1 is not defined, index2 is not defined

//? let và const sẽ chỉ được sử dụng ở trong scope - cả function scope và block scope;
//? Nếu var được khai báo trong function scope thì chỉ được sử dụng trong scope của function đó
//? Nếu var được khai báo trong block scope thì sẽ có thể sử dụng cả ở bên ngoài scope
