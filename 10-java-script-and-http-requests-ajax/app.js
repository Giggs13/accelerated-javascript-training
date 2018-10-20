/*var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "GET";

http.open(method, url);
http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log("Error!");
    }
};
http.send();*/
var data = "title=Post%20Title&body=Body";

var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "POST";

http.open(method, url);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log("Error!");
    }
};
http.send(data);