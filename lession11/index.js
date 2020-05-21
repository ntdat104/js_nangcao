//* method overriding
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("eating...");
  }
}

class Cat extends Animal {
  eat(callback) {
    console.log(`${this.name} eating mouse...`);
    callback();
  }
}

function callTheBoss() {
  console.log("Call the boss");
}

const Tom = new Cat("Tom");
Tom.eat(callTheBoss);
