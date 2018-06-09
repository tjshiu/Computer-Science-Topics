# 5 JavaScript that are fixed in ES6

__1. Block Scope__

With `var` there was only function-level scope. Where now, we have `let` and `const` for block scoping.
We can then __prevent variable hoisting outside of scope__.

Also with `let` and `const` we are not allowed to have duplicate variable declaration. `let` or `const` also eliminates the need for IIFE, so that we do not pollute or overwrite the global scope.

__babel - A tool to convert ES6 to ES5__ - There are a number of interfaces for babel like a CLI, Node-module, and also an online converter.

__2. Lexical "this" (via Arrow Functions)__
In ES5, "this" can vary based on "where" it is called and even "how" it is called and has caused all sorts of pains for JS developers. ES6 eliminates this major issue by "lexical" this.

Lexical "this" - meaning that "this" always points to the object where it is physically located within.
Where with ES5 you had to either use the bind function to bind `this` or declared a variable that could be capture with `this` attached.

The solution with ES6 is to have a fat arrow function that will still have the same `this`.

__3. Dealing with "arguments"__
With ES5 "arguments" acts like an Array, but is not an Array. Therefore all the Array functions are not available like sort, slice, and so on.

However, in ES6 we can use a new feature called "Rest" parameters. It's represented with 3 dots and a name like `...args`. Rest parameters is an Array and so we can use all the Array functions.
