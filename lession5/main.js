//TODO Array-like object & arguments

//TODO Array-like object
const obj = {
    0: "Đạt",
    1: "Minh",
    2: "Hiếu",
    length: 3,
};

for (let i = 0; i < obj.length; i++){
    console.log(obj[i]);
}

//TODO arguments
function sum(){
    let result = 0;
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
var result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);