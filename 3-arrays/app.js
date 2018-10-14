var array = [1, 2, 3, 4, 5, 6, 7];

array[9] = 10;
array[8] = "search";

array.push(11, 22, 33);
array.pop();
array.pop();

array.shift();
array.shift();
array.shift();
array.unshift(0);
array.unshift(111);

console.log(array);
console.log("array = " + array);
console.log("length of an array = " + array.length);
console.log("-----------------   FOR LOOP   -----------------");

for (var i = 0; i < array.length; i++) {
    console.log("array[" + i + "] contains value " + array[i]);
}
console.log("-----------------   FOREACH LOOP   -----------------");

array.forEach(function (value, index, array) {
    console.log("array[" + index + "] contains value " + value);
});

console.log("index of searching element is " + array.indexOf("search"));

console.log("-----------------   SPLICE AND SLICE   -----------------");

console.log(array);
var newArray1 = array.splice(5, 3);
console.log(newArray1);
console.log(array);
var newArray2 = array.slice(5, array.length);
console.log(newArray2);
console.log(array);

console.log("-----------------   FILTER   -----------------");
var filteredArray = array.filter(function (value) {
    return value % 2 === 0;
});
console.log(filteredArray);

console.log("-----------------   MAP   -----------------");
var mappedArray = array.map(function (value, index, array) {
    return ++index;
});
console.log(mappedArray);

console.log("-----------------   REVERSE   -----------------");
console.log(array);
array.reverse();
console.log(array);

console.log("-----------------   CONCAT   -----------------");
console.log("Concat to " + array);
console.log("Concat with this -> " + mappedArray);
console.log(array.concat(mappedArray));
console.log("Original array hasn't changed: " + array);

console.log("-----------------   JOIN   -----------------");
var joinedArray = array.join(";");
console.log(joinedArray);

console.log("-----------------   REDUCE   -----------------");
var reduced = array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(reduced);





