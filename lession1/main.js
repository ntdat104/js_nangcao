//TODO hoisting
//TODO var let const
//* 1. declaration (khai báo biến)
//* 2. hoisting (chỉ trong trường hợp var)
//* 3. block scope (if, for, ...)
//* 4. redeclaration (khai báo lại)


//TODO 1. declaration (khai báo biến)
//! var khai báo lại được
var a = 5;
console.log("a =", a);
var a = 7;
console.log("a =", a);

//! let với const thì không
let b = 2;
//? let b = 3;
//! Báo lỗi

const c = 3;
//? const c = 4;
//! Báo lỗi
//* Đặc biệt, khi khai báo const c thì phải gán luôn giá trị cho nó.

//TODO 2. hoisting
function run(){
    console.log("x =", x);
    var x; //! dùng var thì được, dùng let vớit const thì báo lỗi.
}
run();

//TODO 3. block scope
//* là những khai báo biến ở trong function, if, for, ...