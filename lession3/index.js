//TODO arrow function expression

function sum(a, b){
    return a + b;
};
sum(1, 2);

var sum2 = function(a, b){
    return a + b;
};
sum2(2, 3);

var sum3 = (a, b) => {
    return a + b;
}
sum3(3, 4);

//? Bài toán: this ở đây là gì?
var a = {
    foo: "bar",
    run: function(){
        setTimeout(function(){
            console.log(this.foo);
        }, 1000);
    }
};
a.run()

//TODO Khắc phục cách 1:
var a = {
    foo: "bar",
    run: function(){
        setTimeout(function(){
            console.log("Cách 1");
            console.log(this.foo);
        }.bind(a), 1000);
    }
};
a.run()

//TODO Khắc phục cách 2:
var a = {
    foo: "bar",
    run: function(){
        setTimeout(function(){
            console.log("Cách 2");
            console.log(this.foo);
        }.bind(this), 1000); //! Vì this ở đây là a
    }
};
a.run()

//TODO Khắc phục cách 3:
var a = {
    foo: "bar",
    run: function(){
        var that = this;
        setTimeout(function(){
            console.log("Cách 3");
            console.log(that.foo);
        }, 1000);
    }
};
a.run()

//TODO Khắc phục cách 4:
var a = {
    foo: "bar",
    run: function(){
        setTimeout(() => { //! sử dụng arrow function
            console.log("Cách 4");
            console.log(this.foo);
        }, 1000);
    }
};
a.run()