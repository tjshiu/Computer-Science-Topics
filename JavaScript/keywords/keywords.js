function Animal(legs = 4) {
  this.legs = legs;
}

let notADog = Animal(); //invoking a normal Fucntion
console.log(notADog); // undefined

let actualDog = new Animal(); //invoking a constructor function
console.log(actualDog); // { legs: 4 }
