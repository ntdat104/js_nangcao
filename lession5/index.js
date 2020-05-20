//TODO Array-like object & arguments

//TODO Array-like object
//* Là một biến object có dạng giống với array, nhưng không sử dụng được array.method
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
//* arguments là một array-like object
function sum(){
    let result = 0;
    console.log(arguments);
    console.log("length:", arguments.length);
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
var result = sum(1, 2, 3, 4, 5);
console.log(result);

//! Nếu muốn sử dụng method của array thì sử dụng Array.from
function sum(){
    let numbers = Array.from(arguments);
    return numbers.reduce(function(a, b){
        return a + b;
    }, 0);
}
var result = sum(1, 2, 3, 4, 5);
console.log(result);
