/*
constructor function Dog. d is a new object that has the name 'Sarah', and then
it goes up the protype chain to call the woof method.
*/
function Dog(name) {
  this.name = name;
}

Dog.prototype.woof = function () {
  console.log(this.name + ' woof');
};

const d = new Dog("Sarah");
d.woof();
console.log('.......');
/* Dog { woof: [Function] } points to the protoype of
the constructor function(which is an object)
*/
console.log(d.__proto__); // Dog { woof: [Function]}
console.log(d.hasOwnProperty('woof')); // returns false
console.log(d.__proto__.hasOwnProperty('woof')); //returns true;
console.log(d.toString()); //[object Object]

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`Sorry ${this.name} is eating...`);
};

const a = new Animal();
a.eat();
