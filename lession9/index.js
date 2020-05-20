//* constructor function
function Mouse(name) {
  this.name = name;
}

Mouse.prototype.render = function () {
  console.log(`${this.name} is running`);
};

const Mickey = new Mouse("Mickey");
Mickey.render();

//* class
class Mouse2 {
  constructor(name) {
    this.name = name;
  }

  render() {
    console.log(`${this.name} is rendering`);
  }
}

const Jerry = new Mouse2("Jerry");
Jerry.render()