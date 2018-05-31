# Prototypes

modern JavaScript = \_\_proto\_\_

old JavaScript = "prototype"


* JavaScript uses prototypal inheritance.
* When created a new object with a constructor function, we are creating a prototype object that has a method "\_\_proto\_\_" that points towards a prototype of the constructor. Yes, yes, it is very confusing wording, but look below.

``` JavaScript
let empty = {};
console.log(empty.toString);
// > [Function: toString]
console.log(empty.toString()); //property of Objects
// > [object Object]
```

* Almost all objects have a prototype. A prototype is another object that is used as a fallback source of properties.
* If an object doesn't have that property, its prototype will be searched for that property, then the prototype's prototype, and so on until the property is found or undefined.

``` JavaScript
let empty = {};
console.log(empty.notAProperty);
// > undefined
```

* Think of prototypes as a container for the properties that are shared.