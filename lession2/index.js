//TODO Global context
//TODO function context
//TODO bind

var mouse = {
    name: "mickey",
    sayHi: function(){
        console.log("Hi, my name is", this.name);
    },
};

mouse.sayHi();
//* mouse là context của function sayHi.

var say = mouse.sayHi;
//* var say = function() {console.log("...")}
//! Không có context hoặc global context (windows)
say();

var say = mouse.sayHi.bind(mouse);
//* Gán cho hàm sayHi context là mouse.
say();

//* Ví dụ khác
var cat = {
    name: "Tom"
};

var say = mouse.sayHi.bind(cat);
say();

//? Bài toán
function run(callback){
    console.log("run...");
    callback(); //! vì truyền vào callback nên chưa có context
}

var mouse = {
    name: "Mickey",
    sayHi: function() {
        console.log(this.name);
    }
};

run(mouse.sayHi); //! undefined

//TODO Sửa lại
run(mouse.sayHi.bind(mouse)); //* Mickey
