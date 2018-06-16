# AJAX & JSON

## JSON

<b>J</b>ava<b>S</b>cript <b>O</b>bject <b>N</b>otation

JSON is a syntax for storing and exchanging data. JSON is text, written with the JavaScript object notation. It's important that the data has to be in a certain format. __Text__ is always one of the legal formats. Because of JSON's format (text only), it can easily be sent to and from a server. JavaScript has a built in function to convert a string, written in JSON format, you can use it like any other JavaScript object.

`JSON.stringify(object);` converts an object to text.
`JSON.parse(text)` converts a string, written in JSON format, into native JavaScript objects.

``` JavaScript
// Storing Data
let myObject = { "name": "Kira", "age": 20, "city": "New York"};
let myJSON = JSON.stringify(myObject);
localStorage.setItem("testJSON", myJSON);

// Retrieving Data
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
console.log(obj.name); // Kira
```

See an example below:
``` JavaScript
let thePets = [
  {
    "name" : "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
  },
  {
    "name" : "Fido",
    "species": "dog",
    "favFood": "carrots"
  }
]

console.log(thePets[1].favFood) // carrots
```

## AJAX

<b>A</b>synchronous <b>J</b>avaScript <b>A</b>nd <b>X</b>ML

`XMLHttpRequest` is a tool that web browsers use to make a request. This will establish a connection to the url that we specify and it will send or receive data.

Please know that there are important methods that can be used with this `XMLHttpRequest`. It's similar so something that you might have seen before using JQuery.

``` JavaScript
console.log("Hello from the JavaScript console!");

$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather' +
  	'?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log("We have your weather!");
    console.log(data);
  },
  error() {
    console.error("An error occurred.");
  },
});

console.log("THE AJAX has been dispatched.");
```

Now, there is a better way without using JQuery. It's `XMLHttpRequest`.

``` JavaScript
console.log("Hello from the JavaScript console!");

let request = new XMLHttpRequest();
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b");
request.onload = () => {
  console.log("We have your weather!");
  let data = JSON.parse(request.responseText);
  console.log(data);
};
request.onerror = () => {
  console.log("An error occurred.");
};

request.send();
console.log("THE AJAX has been dispatched.");
```

Now, allow me to explain the basic methods used to make an API get request.

__`onreadystatechange`__

This is called every time the `readyState` property of the `XMLHttpRequest` changes. It takes a callback.

``` JavaScript
let req = new XMLHttpRequest();

req.onreadystatechange = () => { // assigning the response back
  // Process the server response here
}
```

__`open()`__

The first parameter is an HTTP request method such as "GET", "POST", "PUT", "DELETE", etc. The next parameter is the URL for where the request is sent to. The last three parameters are optional. The default for the boolean is true for whether or not to be asynchronous. The next is the optional user name for use for authentication purposes and lastly is the optional password also for authentication purposes. The default for both is null

``` JavaScript
req.open('GET', 'http://www.example.org/some.file', boolean, user, password);
req.send();
```

__`send()` and `setRequestHeader()`__

`send()` can have parameters or not. The parameter should be something that the server can parse, like q query string:

``` JavaScript
"name=value&anothername=" + encodeURIComponent(myVar) + "&so=on"
```
__NOTE:__ If you want to `POST` data, you may have to set the MIME type of the request. Therefore you might have to call the `setRequestHeader()` function.

``` JavaScript
req.open('POST', 'http://www.example.org/some.file', boolean, user, password);
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.send(params);
```
