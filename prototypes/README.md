# Prototypes

modern JavaScript = \_\_proto\_\_

old JavaScript = .prototype


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
* Eventually the Object.prototype.\_\_proto\_\_ == \*null, and thus, the chain ends.

``` JavaScript
let empty = {};
console.log(empty.notAProperty);
// > undefined
```

* Think of prototypes as a container for the properties that are shared.

``` JavaScript
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + ' barked');
};

const d = new Dog("Sarah");
d.bark(); // "Sarah barked"


// Dog { woof: [Function] } points to the prototype of the constructor function(which is an object)
console.log(d.__proto__); // Dog { woof: [Function]}
console.log(d.hasOwnProperty('bark')); // returns false
console.log(d.__proto__.hasOwnProperty('bark')); //returns true;
```

## Prototypal Inheritance

If we want to set an object's prototype to be another object's prototype, we will have several methods to do this.

``` JavaScript
function Animal() {};
function Dog() {};

const myAnimal = new Animal(); //references Animal.prototype
const myDog = newDog(); //references Dog.prototype
```

### `Object.create`

Let's create an entirely new prototype object
``` JavaScript
function Animal (name) {
  this.name = name;
}

Animal.prototype.hello = function () {
  console.log(`Hello, my name is ${this.name}`);
}

//Must use the Animal.call(this, name) otherwise name will be undefined when using object.hello().
function Dog(name) {
  Animal.call(this, name); //call super-constructor function on **the current 'Dog' instance**
};

Dog.prototype = Object.create(Animal.prototype); //Dog now inherits from Animal
Dog.prototype.constructor = Dog; //otherwise instances of Dog will have 'instance.constructor === Animal'

Dog.prototype.bark = function () {
  console.log("Bark!");
}

const fido = new Dog('Fido');

fido.bark();
fido.sayHello();
```
This methods returns an entirely new object with its \_\_proto\_\_ set to whatever argument is passed to `Object.create`.

Important things to highlight about this method:
* `Dog.prototype = Object.create(Animal.prototype)` <- Setting the object's prototype to be another object copy of the object's prototypal object (different pointers).
* `Dog.prototype.constructor = Dog` <- Ensured that the instance of Dog is not Animal and is actually Dog.
* `Animal.call(this, name)` <- Used a super-constructor function to ensure that any methods on Animal will be able to access to this.name. You can also, place `this.name = name` in the Dog constructor method. However, if there is nothing called, this.name will be undefined even if an argument is passed.
