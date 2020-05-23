//* spread an array

const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

//* spread an object - clone object
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 10 },
};

let obj2 = {};
for (let key in obj1) {
  obj2[key] = obj1[key];
}
obj2.d.e = 11;
console.log({ obj1, obj2 });

let obj3 = {
  ...obj1,
  z: 100,
};
console.log(obj3);
