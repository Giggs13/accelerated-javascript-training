function generator(input) {
    var number = input;
    return function (multi) {
        return number * multi;
    }
}

var calc = generator(900);
console.log(calc(2));
console.log(generator(900)(3));

var obj = {};
(function (input) {
    input.name = "Andrej";
    console.log("inside");
})(obj);

console.log(obj);

function message(message) {
    console.log(message);
    console.log(arguments.length);
    console.log(arguments);
}

message("Hi!", 10);
var msg = message;
console.log("The name of the function is " + msg.name);
console.log("The number of expecting arguments is " + msg.length);