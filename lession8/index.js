//* constructor function
function Mouse(name) {
  this.name = name;
}
Mouse.prototype.render = function () {
  console.log(`Hello ${this.name}.`);
};

const Mickey = new Mouse("Mickey");
Mickey.render();

//* object literals
const Jerry = {
  name: "Jerry",
  render: function () {
    console.log(`Hello ${this.name}.`);
  },
};
Jerry.render();

//* enhanced object literals
const name = "Tom";
const cat = {
  name, //* name: name
  render() {
    console.log(`Hello ${this.name}.`);
  },
};
cat.render();
