console.log("-----------------   OBJECTS   -----------------");
var andrej = {
    name: "Andrej",
    age: 32
};
console.log(andrej);
console.log(Object.getPrototypeOf(andrej));

var kira = new Object();
kira.name = "Kira";
kira.age = 26;
kira.__proto__.protoHere = "proto here";
console.log(kira);
console.log(Object.getPrototypeOf(kira));

var lija = Object.create(kira);
lija.name = "Lija";
lija.age = 1;

Object.defineProperty(lija, "greeting", {
    value: "Ammmm",
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(lija, "genderrr", {
    get: function () {
        return this._gender;
    },
    set: function (gender) {
        this._gender = gender;
    },
    enumerable: true
});

Object.defineProperty(lija, "genderFunc", {
    value: function () {
        return "I'm a " + this.genderrr;
    }
});

console.log(lija);
console.log(lija.genderrr = "baby");
console.log(lija.genderrr);
console.log(lija.genderFunc());

Object.prototype.greet = function () {
    console.log("Hello there, I am " + this.name + "!");
};

console.log(andrej.greet());
console.log(kira.greet());
console.log(lija.greet());

console.log(lija.__proto__ === kira);
console.log(Object.getPrototypeOf(lija));
console.log(Object.getPrototypeOf(lija) === kira);
console.log(Object.getPrototypeOf(andrej));
console.log(lija.__proto__.__proto__ === Object.prototype);

console.log("-----------------   CONSTRUCTOR FUNCTIONS   -----------------");

function Person() {
    this.name = "unnamed";
    this.age = 0;
}

Person.prototype.greet = function () {
    console.log("Hello, I'm " + this.name + "!");
};

var person = new Person();
console.log(person.greet());
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person) === Person);
console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log("-----------------   BUILT-IN METHODS AND PROPERTIES   -----------------");
console.log(kira);
console.log('name' in kira);
for (var propertyName in kira) {
    console.log("property name is " + propertyName + " and value is " + kira[propertyName]
        + " and it is an own property: " + Object.hasOwnProperty(propertyName));
}
