console.log("-----------------   WINDOW OBJECT   -----------------");
console.log("Outer width of window is " + window.outerWidth + " and the outer height of window is " + window.outerHeight);
console.log("Inner width of window is " + window.innerWidth + " and the inner height of window is " + window.innerHeight);

localStorage.setItem("some_kye", "partial value");
localStorage.removeItem("some_kye");
localStorage.setItem("some_key", "partial value");
console.log(localStorage.getItem("some_key"));
console.log("LocalStorage: ", window.localStorage);

sessionStorage.setItem("some_key", "partial value");
console.log(sessionStorage.getItem("some_key"));
console.log("sessionStorage: ", window.sessionStorage);

console.log("-----------------   LOCATION OBJECT   -----------------");
console.log(location);
console.log(location.host);
console.log(location.hostname);
console.log(location.href);
console.log(location.origin);
console.log(location.pathname);
console.log(location.port);
console.log(location.protocol);

// window.open("http://google.com.ua");

console.log("-----------------   DOCUMENT OBJECT   -----------------");
console.log(document);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0].textContent);
document.body.children[0].firstChild.textContent = "Another body text";
document.body.children[0].setAttribute("style", "color: red");
console.log(document.body.children[0].textContent);
console.log("-----------------");
console.log(document.body.children[0]);
console.log(document.body.children[0].firstChild);
console.log(document.body.children[0].firstElementChild);
console.log(document.body.children[0].nextElementSibling);
console.log(document.body.children[0].parentElement);
console.log("-----------------");
console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("id-of-li"));
console.log(document.getElementsByClassName("some-class"));
console.log(document.getElementsByName("narrator"));
console.log("-----------------");
console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li"));
document.querySelectorAll("li")[1].style.color = "green";
console.log("-----------------");
var p = document.createElement("P");
p.name = "Narrator";
p.textContent = "A new paragraph!";
p.style.fontSize = "17px";
p.style.fontWeight = "bold";
p.style.color = "blue";
console.log(p);

var li = document.querySelector("#id-of-li-3");
li.appendChild(p);

var a = document.createElement("A");
a.href = "#";
a.textContent = "A link";

li.insertBefore(a, p);

document.querySelector("#id-of-li-1 p b").remove();











