//TODO arrow function expression

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);

var sum2 = function (a, b) {
  console.log(a + b);
};
sum2(2, 3);

var sum3 = (a, b) => {
  console.log(a + b);
};
sum3(3, 4);

//? Bài toán: this ở đây là gì?
var object = {
  foo: "bar",
  run: function () {
    console.log(this); //! this ở đây chính là object
    setTimeout(function () {
      console.log(this.foo);
      console.log(this); //! this ở đây chính là hàm setTimeout
    }, 1000);
  },
};
object.run(); //! undefined

//TODO Khắc phục cách 1: Sử dụng bind(object)
var object = {
  foo: "bar",
  run: function () {
    setTimeout(
      function () {
        console.log("Cách 1:");
        console.log(this.foo);
      }.bind(object),
      1000
    );
  },
};
console.log(object.run);
object.run();

//TODO Khắc phục cách 2: Sử dụng bind(this) vì this ở đây là object
var object = {
  foo: "bar",
  run: function () {
    console.log(this); //! this ở đây chính là object
    setTimeout(
      function () {
        console.log("Cách 2:");
        console.log(this.foo);
      }.bind(this), //! Vì this ở đây là object
      1000
    );
  },
};
object.run();

//TODO Khắc phục cách 3: var that = this
var object = {
  foo: "bar",
  run: function () {
    var that = this; //! that = object
    setTimeout(function () {
      console.log("Cách 3");
      console.log(that.foo); //! object.foo
    }, 1000);
  },
};
object.run();

//TODO Khắc phục cách 4: Sử dụng arrow function
var object = {
  foo: "bar",
  run: function () {
    setTimeout(() => {
      //! sử dụng arrow function
      console.log("Cách 4");
      console.log(this.foo);
      console.log(this); //! this ở đây chính là object
    }, 1000);
  },
};
object.run();
