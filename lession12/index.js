//* supper

class Animal {
  constructor(name, age) {
    //* 2 tham số
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} eating...`);
  }
}

class Dog extends Animal {
  //! subclass
  constructor(name, age, type) {
    //* thêm 1 tham số type
    super(name, age); //* kế thừa từ Animal
    this.type = type; //* tham số thêm
  }

  eat() {
    super.eat(); //* kế thừa từ Animal
    console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.type}`);
    //* thêm câu lệnh
  }
}

const Lulu = new Dog("Lulu", 20, "Bug");
Lulu.eat();
