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
* May return a new object or answer.

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

The UI or view layer is most predictable when it is described as a pure function of the application state. The state mutations needs to be a pure function.

What the reducer does takes the previous state and the action that is being dispatched and returns the next state of your application.

Important that it does not modify the original state. It needs to return a new object. One of the things that makes redux fast is that it does not need to change everything. It makes small changes and if nothing else needs to be changed it just references the 'previous state'.

### Writing a Counter Reducer with Tests
``` Javascript
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

//tests
expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);
expect(
  counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
  counter(2, {type: 'DECREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
  counter(1, {type: 'SOMETHING ELSE'})
).toEqual(1);

expect(
  counter(undefined, {})
).toEqual(0);
```
__Better ES6 syntax for reducer__
``` JavaScript
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

### Redux: Store Methods: getState(), dispatch(), and subscribe()

The store binds together the three principles of redux. It holds the current state object. It lets you to dispatch actions. Also when you create it, you need to specify the reducer, which tells the how the state is updated with actions.

Store has three important methods
1. store.getState() - It retrieves the current state of the redux store
2. store.dispatch() - It lets you dispatch actions to change the state of your application.
3. store.subscribe(() => {}) - It allows you to register a callback that the redux store will call anytime an action has been dispatched. So that you can update the UI of your application to its current state.

``` JavaScript
const { createStore } = Redux; // ES6
// var createStore = Redux.createStore; equivalent method
// import {createStore} from 'redux'; npm or babel to transpile your ES6

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})
```

### Implementing Store from Scratch

``` JavaScript
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state; //get current application state

  const dispatch = (action) => { // change current application state due to actions
    state = reducer(state, action);
    listeners.forEach(listener => listener()); //notify every change listener by calling it
  };

  const subscribe = (listener) => { // re-render our application with the current state of the app
    listeners.push(listener);
    return () => { // removes the listener from the listener array
      listeners = listeners.filter(l => l !== listener);
    }
  }

  dispatch({}); // dummy action

  return { getState, dispatch, subscribe };
}
```

### React Counter Example
