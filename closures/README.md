# Closures

``` JavaScript
function soundMaker(sound, times) {

  function makeSound() { //closure
    console.log(`${sound}`);
  }

  for (let i = 0; i < times; i++) {
    makeSound();
  }
}

soundMaker("woof", 5);
```
Three levels of Scope for variables:
* Any arguments that are passed into the function
* Variables that are defined within the function
* Access to any variables, that are declared when the function was defined
  * The free variables are 'captured'.
  * We can change the value in the function, and the new value exists outside of the function.


``` JavaScript
function summation(arr) {
  let sum = 1;

  function summer() { //closure
    for (let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  }

  summer();

  return sum; //sum is changed within the closure
}

console.log(summation([1, 2, 3, 4])); //value is 24
```

## Callbacks

Most common use case for closures. What is a callback? Callback is a function that is passed to another function as an argument that is intended to be called at a later time.

Most common use of callbacks is when the result will not be immediately available from the function maybe because the information is relying on user inputs. We want to wait for the information to be available and then we want to use the code in our callbacks.

Commonly seen in asynchronous functions. It doesn't wait for the task to be completed. It will keep working in the background. We often see it with I/O, timers, any Ajax request, background requests, and event handlers.

### Event handlers

When the user clicks on a button, we want code to be executed. We can write a set timeout function.

``` JavaScript
let callback = function() {
  console.log('It has been 5 seconds!');
};

let timeToWait = 5000; // ms

setTimeout(callback, timeToWait); //Do not pass invoked function also callback returns the returned value of the callback

// more likely to see this syntax and it's ES5
setTimeout(function() {
  console.log("It has been 5 seconds!");
}, 5000);
// ^^^ this is ES5 syntax though!

// ES6 syntax and the preferred syntax
setTimeout(() => console.log("It has been 5 seconds!"), 5000);
```
