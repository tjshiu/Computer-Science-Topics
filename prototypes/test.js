function Animal (name) {
  this.name = name;
}

Animal.prototype.hello = function () {
  console.log(`Hello, my name is ${this.name}!`);
}

//Must use the Animal.call(this, name) otherwise name will be undefined.
function Dog(name) {
  Animal.call(this, name); //call super-constructor function on **the current 'Dog' instance**
};

Dog.prototype = Object.create(Animal.prototype); //Dog now inherits from Animal
Dog.prototype.constructor = Dog //otherwise instances of Dog will have 'instance.constructor === Animal'

Dog.prototype.bark = function () {
  console.log("Bark!");
}

const fido = new Dog('Fido');

fido.bark(); // Bark!
fido.hello(); // Hello, my name is Fido!
