# Hoisting

Hosting is the behavior of "moving" var and function declarations to the top of their respective scopes during the compilation phase is called hoisting.

Function declarations are completely hoisted. This means that a declared function can be called before it is defined.

``` JavaScript
console.log(toSquare(3)); // prints 9

function toSquare(n) {
  return n * n;
}
```
Variables are partially hoisted. `var` declarations are hoisted but not its assignments.
However, `let` and `const` are not hoisted.

__`var` and compilation__
``` JavaScript
// var
{console.log(i); //undefined
var i = 10;
console.log(i); //10
}
// compilation phase
{var i;
console.log(i);
i = 10;
console.log(i);
}
```
__ES6 `let` and `const`__
``` JavaScript
// ES6: let and const
console.log(i); //ReferenceError: i is not defined
let i = 10;
console.log(i); //10

console.log(i); //ReferenceError: i is not defined
const i = 10;
console.log(i); //10
```

## Function Expression vs Function Declaration
* __Function Expression__ - created when the execution reaches it and is usable from then on -- it is __NOT__ hoisted.

``` JavaScript
var sum = function(a, b) { //NOT hoisted
  return a + b;
}
```

* __Function Declaration__ - can be called both before and after it was defined -- __HOISTED__

``` JavaScript
function sum(a, b) {
  return a + b;
}
```

## Variables: var, let, and const
Prior to ES6, it was only possible to declare a variable using var. Variables and functions declared inside another function cannot be accessed by any of the enclosing scopes -- they are function-scoped.

Even variables declared inside a block-scope, such as `if` statements and `for` loops, can be accessed from outside of the opening and closing curly braces of the block.

`let` and `const` are not hoisted and block-scoped alternatives for variable declaration. Therefore they are confined within the curly braces.

A common misconception of `const` is that it is immutable. While it cannot be reassigned, its properties can be changed.
