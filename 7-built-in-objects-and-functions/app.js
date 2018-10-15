console.log("-----------------   TIMERS AND INTERVALS   -----------------");
/*var interval = setInterval(function () {
    console.log("Interval is up");
    // clearTimeout(timeout);
}, 1000);

var timeout = setTimeout(function () {
    clearInterval(interval);
    console.log("Interval has cleared");
}, 3000);*/

console.log("-----------------   TRANSFORMING FORMATS AND VALUES   -----------------");
var a = "5";
console.log(parseInt(a));
a = "6as";
console.log(parseInt(a));
a = "as";
console.log(parseInt(a));
a = "FBB123";
console.log(parseInt(a, 16));
console.log(Object.getPrototypeOf(a) === String.prototype);

console.log("-----------------   STRING FUNCTIONS   -----------------");
var string = "Any text    here   ";
console.log(string.split(" "));

console.log("-----------------   THE MATH OBJECT   -----------------");
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.round(4.16));
console.log(Math.ceil(4.76));
console.log(Math.floor(4.76));
console.log(Math.exp(2));
console.log(Math.log(Math.E));
console.log(Math.min(1, 7, 12));
console.log(Math.max(1, 7, 12));
console.log(Math.random());
console.log(Math.floor(Math.random() * 5));

console.log("-----------------   DATE OBJECT   -----------------");
var today = new Date();
console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(Date.now());
console.log("-----------------");

var anyDate = new Date(2017, 0, 1);
console.log(anyDate);
console.log(anyDate.toString());
console.log(anyDate.toDateString());
console.log(anyDate.toISOString());
console.log(anyDate.toTimeString());
console.log(anyDate.toUTCString());
console.log("-----------------");

console.log(Date.now());
console.log(new Date("2018/01/01"));

console.log("-----------------   REGULAR EXPRESSIONS   -----------------");
var str1 = "abcabc";
var str2 = "ac";
var pattern = /bc/;
console.log(pattern.exec(str1));
console.log(pattern.exec(str2));
console.log(pattern.test(str1));
console.log(pattern.test(str2));
console.log(str1.match(pattern));
console.log(str2.match(pattern));
