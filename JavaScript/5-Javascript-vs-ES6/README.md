# 5 JavaScript that are fixed in ES6

__1. Block Scope__

With `var` there was only function-level scope. Where now, we have `let` and `const` for block scoping.
We can then __prevent variable hoisting outside of scope__.

__ES5__
```JavaScript
var base = 1000;
var bonus = 0;

function getSalary(addBonus) {
  // var bonus; <- variable hoisted and is now undefined
  if (addBonus) {
    var bonus = 100;
    return base + bonus;
  }
  return base + bonus;
}

console.log(getSalary(false)); //NaN
console.log(getSalary(true)); //1100
```
__ES6__
```JavaScript
var base = 1000;
var bonus = 0;

function getSalary(addBonus) {
  if (addBonus) {
    let bonus = 100; //not hoisted so the variable bonus remains "0" when addBonus is false;
    return base + bonus;
  }
  return base + bonus;
}

console.log(getSalary(false)); // 1000
console.log(getSalary(true)); // 1100
```

Also with `let` and `const` we are not allowed to have duplicate variable declaration. `let` or `const` also eliminates the need for IIFE, so that we do not pollute or overwrite the global scope.

ES5 made it difficult to use a function inside a loop because the `i` would be hoisted to the global space.

__ES5__
```JavaScript
var arr = [];
for (var i = 0; i < 3; i++) { // "i" gets hoisted to global space
  arr.push(function () {
    return i; // refers global i
  });
}

console.log(i); // 3 <- i is here

for (var j = 0; j < 3; j++) {
  console.log(arr[j]()); // prints 3, 3, and 3
}
```

__ES6__
```JavaScript
var arr = [];
for (let i = 0; i < 3; i++) { // let creates new "i" for each loop
  arr.push(function () {
    return i; // refers to local "i"
  });
}

console.log(i); // reference error (since there is no "i" in global space)

for (var j = 0; j < 3; j++) {
  console.log(arr[j]()); // prints 0, 1, and 2
}
```

__babel - A tool to convert ES6 to ES5__ - There are a number of interfaces for babel like a CLI, Node-module, and also an online converter.



__2. Lexical "this" (via Arrow Functions)__
In ES5, "this" can vary based on "where" it is called and even "how" it is called and has caused all sorts of pains for JS developers. ES6 eliminates this major issue by "lexical" this.

Lexical "this" - meaning that "this" always points to the object where it is physically located within.
Where with ES5 you had to either use the bind function to bind `this` or declared a variable that could be capture with `this` attached.

The solution with ES6 is to have a fat arrow function that will still have the same `this`.

__3. Dealing with "arguments"__
With ES5 "arguments" acts like an Array, but is not an Array. Therefore all the Array functions are not available like sort, slice, and so on.

However, in ES6 we can use a new feature called "Rest" parameters. It's represented with 3 dots and a name like `...args`. Rest parameters is an Array and so we can use all the Array functions.

__ES5__
``` JavaScript
function mySort() {
  var args = Array.prototype.slice.call(arguments); // Convert arguments to an Array
  return args.sort(function(a, b) {return a - b});
}

console.log(mySort(10, 2, 3)) //[2, 3, 10]
```

__ES6__
``` JavaScript
function mySort(...args) { // <- "Rest" parameters
  return args.sort((a, b) => a - b));
}

console.log(mySort(10, 2, 3)) //[2, 3, 10]
```

__4. Classes__
In concept, there is no such thing as a "class" or a blueprint in JS like it is in other OO languages like Java. However, many people have treated the constructor function that creates Object when we use the "new" keyword as classes.

__ES5__
``` JavaScript
var Shape = function(id, x, y) {
  this.id = id;
  this.location(x, y);
};

Shape.prototype.location = function(x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.toString = function() {
  return "Shape(" + this.id + ")";
};

Shape.prototype.getLocation = function() {
  return {
    x: this.x,
    y: this.y,
  };
};

var Circle = function(id, x, y, radius) {
  Shape.call(this, id, x, y);
  this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.defaultCircle = function() { //static function
  return new Circle("default", 0, 0, 100);
};

Circle.prototype.toString = function () {
  return "Circle > " + Shape.prototype.toString.call(this);
};

var defaultCircle = Circle.defaultCircle(); // call static function

var myCircle = new Circle('123', '5px', '10px', 5); // create new instance
console.log(myCircle.toString()); //Circle > Shape(123)
console.log(myCircle.getLocation()); // {x: '5px', y: '10px'}
```

__ES6__
``` JavaScript
class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.location(x, y);
  }

  location(x, y) { // <--- prototype function
    this.x = x;
    this.y = y;
  }

  toString() { // <-- prototype function
    return "Shape(" + this.id + ")";
  }

  getLocation() {
    return {
      x: this.x,
      y: this.y
    };
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y); // Call Shape's constructor (via super)
    this.radius = radius;
  }

  static defaultCircle() { // Static function
    return new Circle("default", 0, 0, 100);
  }

  toString() { // <- override toString of Shape
    return "Circle > " + super.toString(); // call "super" instead of "this" to access parent
  }
}

var defaultCircle = Circle.defaultCircle(); // call static function

var myCircle = new Circle('123', '5px', '10px', 5); // create new instance
console.log(myCircle.toString()); //Circle > Shape(123)
console.log(myCircle.getLocation()); // {x: '5px', y: '10px'}
```

__5. Strict Mode__
Strict Mode ("use strict") helps identify common issues (or "bad" parts) and also helps with "securing" JavaScript. In ES5, the Strict Mode is optional but in ES6, it's needed for many ES6 features. So most people and tools like babel automatically add "use strict" at the top of the file putting the whole JS code in strict mode and forcing us to write better JavaScript.
