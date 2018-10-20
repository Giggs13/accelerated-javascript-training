/*
window.onload = function () {
    console.log("Window load");
};

var btn = document.querySelector("button");
btn.onclick = function () {
    console.log("Clicked");
};

function listener1() {
    console.log("Listener 1");
}

function listener2() {
    console.log("Listener 2");
}

btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);
setTimeout(function () {
    btn.removeEventListener("click", listener1);
}, 3000);*/

var inner = document.querySelector("#inner");
inner.addEventListener("click", innerListener);

function innerListener(event) {
    console.log(event.bubbles);
    console.log(event.target);
    event.target.style.backgroundColor = "red";
    event.stopPropagation();
    console.log("Clicked inner!");
}

var outer = document.querySelector("#outer");
outer.addEventListener("click", outerListener);

function outerListener(event) {
    console.log("Clicked outer!");
}