# Keywords

[new](#new)

[try...catch](#try-catch)

[Custom Errors](#custom-errors-extending-error)

# new

The `new` keyword invokes a function in a special way. Functions invoked using the  `new` keyword are called __constructor function__.

So what does the `new` keyword actually do?
1. Creates a new object
2. Sets the __object's__ prototype to be the prototype of the __constructor function.__
3. Executes the constructor function with `this` as the newly created object.
4. Returns the created object. If the constructor returns an object, this object is returned.  

``` JavaScript
function Animal(legs = 4) {
  this.legs = legs;
}

let notADog = Animal(); //invoking a normal Function
console.log(notADog); // undefined

let actualDog = new Animal(); //invoking a constructor function
console.log(actualDog); // { legs: 4 }
```

# try catch

`try...catch` allows us to "catch" errors and instead of dying, do something more reasonable.

### "try...catch" syntax
There are two main blocks `try`, and then `catch`. Please note that `try...catch` only works for runtime errors. `try...catch` should be valid JavaScript. It won't work if the code is syntactically wrong. Also `try...catch` works __synchronously__. If an exception happens in a 'scheduled' code, like a `setTimeout`, then `try...catch` won't catch it.

``` JavaScript
try {
  // code
} catch (err) {
  // error handling
}
```

__synchronously__ - The try and catch should be placed inside the setTimeout for it to execute properly for the function.
```JavaScript
try {
  setTimeout(function () {
    noSuchVariable; //script will die here
  }, 1000);
} catch (e) {
  alert ("won't work");
}
```

### `catch`

The error object inside the `catch` block has two main properties:
* `name` - Error name: For an undefined variable that's "referenceError"
* `message` - Textual messages about error details. There are other non-standard properties available in most environments. One of most widely used and supported is:
* `stack` - Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

``` JavaScript
try {
  lalala; // error, variable is not defined!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at ...

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}
```

### Throwing our own errors

`throw` operator generates an error. It needs an error object.

``` JavaScript
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}
```

### Rethrowing
If we don't like the error, we can rethrow it.

1. Catch gets all errors
2. In `cacth(err) {...}` block we analyze the error object `err`
3. If we don't know how to handle it, then we do `throw err`

### try...catch...finally
There is a last code clause `finally` and if it exists, it runs in all cases.

``` JavaScript
function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}
```

# Custom Errors extending Error
* We can inherit from Error and other built-in error classes normally, just need to take care of name property and don’t forget to call super.
* Most of the time, we should use instanceof to check for particular errors. It also works with inheritance. But sometimes we have an error object coming from the 3rd-party library and there’s no easy way to get the class. Then name property can be used for such checks.
* Wrapping exceptions is a widespread technique when a function handles low-level exceptions and makes a higher-level object to report about the errors. Low-level exceptions sometimes become properties of that object like err.cause in the examples above, but that’s not strictly required.
