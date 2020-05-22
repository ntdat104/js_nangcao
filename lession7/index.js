//* .call (Method call)

function greeting() {
  console.log(`Hello! ${this.name}. I am ${this.age}.`);
}
//! Sử dụng .call
const Cat = {
  name: "Tom",
  age: 20,
};
greeting.call(Cat); //! gọi hàm greeting bằng context là Cat

//! Sử dụng .bind
const Mouse = {
  name: "Jerry",
  age: 10,
};
var greeting = greeting.bind(Mouse); //! gán context là Mouse cho hàm greeting
greeting(); //! gọi hàm greeting
