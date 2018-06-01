// function soundMaker(sound, times) {
//
//   function makeSound() { //closure
//     console.log(`${sound}`);
//   }
//
//   for (let i = 0; i < times; i++) {
//     makeSound();
//   }
// }
//
// soundMaker("woof", 5);
//
// function summation(arr) {
//   let sum = 1;
//
//   function summer() { //closure
//     for (let i = 0; i < arr.length; i++) {
//       sum *= arr[i];
//     }
//   }
//
//   summer();
//
//   return sum;
// }
//
// console.log(summation([1, 2, 3, 4]));

let callback = function() {
  console.log('It has been 5 seconds!');
};

let timeToWait = 5000; // ms

setTimeout(callback, timeToWait);

// more likely to see this syntax
setTimeout(function() {
  console.log("It has been 5 seconds!");
}, 5000);

setTimeout(() => console.log("It has been 5 seconds!"), 5000);
