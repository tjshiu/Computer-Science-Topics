# Keywords

## `new`

The `new` keyword invokes a function in a special way. Functions invoked using the  `new` keyword are called __constructor functions__.

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
