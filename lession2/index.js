//TODO Global context
//TODO function context
//TODO bind

var mouse = {
    name: "mickey",
    sayHi: function(){
        console.log("Hi, my name is", this.name);
    },
};

var say = mouse.sayHi;
say();

var say = mouse.sayHi.bind(mouse);
say();

//* Ví dụ khác
var cat = {
    name: "Tom"
};

var say = mouse.sayHi.bind(cat);
say();
