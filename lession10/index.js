//* class inheritance - thừa kế

//* class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal { //! kế thừa
  bark() {
    console.log("Barking...");
  }
}

const Bug = new Dog("Bug");
Bug.bark();
Bug.eat();

//* Constructor function
function Animal2(name){
    this.name = name;
}

Animal2.prototype.eat = function(){
    console.log("Eating...");
}

function Bird(name){
    Animal2.apply(this, arguments); //* kế thừa constructor
}

Bird.prototype = new Animal2(); //* kế thừa method
Bird.prototype.fly = function(){
    console.log("Flying...");
}

const Parrot = new Bird("Parrot");
Parrot.fly();
Parrot.eat()