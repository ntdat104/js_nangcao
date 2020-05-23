//* closure //garbage collector
function sum(a, b) {
  const c = a + b;

  return function () {
    //* function factory
    console.log(c);
  };
}

sum(1, 2)();

//* example
function debug(name) {
  return function (str) {
    console.log(`${name} + ${str}`);
  };
}

const log = debug("Mouse");
log("Hello World.");
