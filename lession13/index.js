//* static method

//TODO class
class Foo {
  static someMethod() {
    //* static method
    console.log("some method");
  }

  anotherMethod() {
    //* instance method
    console.log("another method");
  }
}

Foo.someMethod();

const foo = new Foo(); //* instance
foo.anotherMethod();

//TODO function
function Foo2() {}
Foo2.prototype.anotherMethod = function () {
  //* instance method
  console.log("another method 2");
};
Foo2.someMethod = function () {
  //* static method
  console.log("some method 2");
};

Foo2.someMethod();

const foo2 = new Foo2();
foo2.anotherMethod();
