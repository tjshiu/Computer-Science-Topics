# Closures

A _closure_ is the combination of a function and the environment that it is declared in. Closures have access to variables from an enclosing scope --_environment_.

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
  * __data encapsulation__ is one of the benefits of closures. This allows the data to not be directly exposed.
  * We can change the value in the function, and the new value exists outside of the function.

### Data Encapsulation Examples
``` JavaScript
  function SpringfieldSchool() {
    let staff = ['Seymour Skinner', 'Edna Krabappel'];
    return {
      getStaff: function() { console.log(staff) },
      addStaff: function(name) { staff.push(name) }
    }
  }

  let elementary = SpringfieldSchool()
  console.log(elementary)        // { getStaff: ƒ, addStaff: ƒ }
  console.log(staff)             // ReferenceError: staff is not defined
  /* Closure allows access to the staff variable */
  elementary.getStaff()          // ["Seymour Skinner", "Edna Krabappel"]
  elementary.addStaff('Otto Mann')
  elementary.getStaff()          // ["Seymour Skinner", "Edna Krabappel", "Otto Mann"]
```


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

## Most Common Interview Problems

Console will display "The value undefined is at index: 4"
``` JavaScript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`The value ${arr[i]} is at index: ${i}`);
  }, (i+1) * 1000);
}
```

### Why?
This happens because each function executed within the loop will be executed after the whole loop has been completed, referencing to the last value store in i, which was 4.

### Solution

__IIFE (Immediately Invoked Function Expression)__
``` JavaScript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`The value ${arr[j]} is at index: ${j}`);
    }, j * 1000);
  })(i) //Immediately Invoked Function
}
```

OR

__Declaring the i variable with let__
``` JavaScript
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`The value ${arr[i]} is at index: ${i}`);
  }, (i) * 1000);
}
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
