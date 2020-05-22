//TODO Global context
//TODO Function context
//TODO bind

var Mouse = {
  name: "mickey",
  sayHi: function () {
    console.log("Hi, my name is", this.name);
  },
};
Mouse.sayHi();
//* Mouse là context của function sayHi.

var say = Mouse.sayHi;
//* var say = function() {console.log("...")}
//! Không có context hoặc global context (windows)
say();

var say = Mouse.sayHi.bind(Mouse);
//* Gán cho hàm sayHi context là mouse.
say();

//* Ví dụ khác
var Cat = {
  name: "Tom",
};
var say = Mouse.sayHi.bind(Cat);
say();

//? Bài toán
function run(callback) {
  console.log("run...");
  callback(); //! vì truyền vào callback nên chưa có context
}

var Mouse = {
  name: "Mickey",
  sayHi: function () {
    console.log(this.name);
  },
};
run(Mouse.sayHi); //! undefined

//TODO Sửa lại
run(Mouse.sayHi.bind(Mouse)); //* Mickey
