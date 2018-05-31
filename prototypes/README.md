# Protoypes

modern JavaScript = __proto__

old JavaScript = "prototype"


* JavaScript uses prototypal inheritance.
* When created a new object with a constructor function, we are creating a prototype object that has a method "\__proto__" that points towards a prototype of the constructor. Yes, yes, it is very confusing wording, but look below.

``` JavaScript
let empty = {};
console.log(empty.toString);
// > [Function: toString]
console.log(empty.toString()); //property of Objects
// > [object Object]
```

* Almost all objects have a prototype. A prototype is another object that is used as a fallback source of property.
* If an object doesn't have that property, its prototype will be searched for that property, then the prototype's prototype, and so on.
* Think of prototypes as a container for the properties that are shared
