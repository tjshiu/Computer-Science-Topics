# Redux

### The Single Immutable State Tree

Everything changes in the application, is contained in a single object called the state or state tree.

### Describing State Changes with Action

Every time you want to change the state tree, you must use an action. The action is an object and the only requirement is that it has a type property. The type property is recommended to be Strings. All of the actions are plain JavaScript objects. The only way to change the state tree with a plain JavaScript object. Any data that gets into the state it is with an action.

### Pure and Impure Functions

It's good to understand the difference between pure functions and impure functions. For some of the functions of redux, the functions need to be pure and it's good to be mindful of the differences between pure and Impure functions.

__Pure Functions__  Functions whose return value depends solely on the values of the arguments. There are no observable side effects, such as network or database calls.

* Predictable
* Does not override/modify inputs(arguments)

``` JavaScript
function square(x) {
  return x * x;
}

function squareAll(items) {
  return items.map(square);
}
```

__Impure Functions__ Opposite.

Possible effects:
* Side effects
* Make calls to the database
* Override/modify inputs

``` JavaScript
function square(x) {
  updateXInDatabase(x);
  return x * x;
}

function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
```

### The Reducer Function
