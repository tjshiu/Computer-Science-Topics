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

// let callback = function() {
//   console.log('It has been 5 seconds!');
// };
//
// let timeToWait = 5000; // ms
//
// setTimeout(callback, timeToWait);
//
// // more likely to see this syntax
// setTimeout(function() {
//   console.log("It has been 5 seconds!");
// }, 5000);
//
// setTimeout(() => console.log("It has been 5 seconds!"), 5000);

// function SpringfieldSchool() {
//   let staff = ['Seymour Skinner', 'Edna Krabappel'];
//   return {
//     getStaff: function() { console.log(staff) },
//     addStaff: function(name) { staff.push(name) }
//   }
// }
//
// let elementary = SpringfieldSchool()
// console.log(elementary)        // { getStaff: ƒ, addStaff: ƒ }
// //console.log(staff)             // ReferenceError: staff is not defined
// /* Closure allows access to the staff variable */
// elementary.getStaff()          // ["Seymour Skinner", "Edna Krabappel"]
// elementary.addStaff('Otto Mann')
// elementary.getStaff()          // ["Seymour Skinner", "Edna Krabappel", "Otto Mann"]

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let triple = multiplier(3);
console.log(triple(5)); //prints out 15. 
