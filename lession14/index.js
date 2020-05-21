//* ...rest

function log(a, ...numbers){
    console.log(a);
    console.log(numbers);
    console.log(arguments);
};
log(1, 2, 3, 4);

//* example
function sum(...nums){
    let result = nums.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(result);
};
sum(1, 2, 3, 4, 5);

//* example
function concat(separator, ...strings){
    let result = strings.join(separator);
    console.log(result);
}
concat(".", "a", "b", "c"); //* "a.b.c"