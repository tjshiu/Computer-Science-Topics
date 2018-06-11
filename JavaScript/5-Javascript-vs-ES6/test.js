var arr = [];
for (let i = 0; i < 3; i++) { // let creates new "i" for each loop
  arr.push(function () {
    return i; // refers to local "i"
  });
}

// console.log(i); // reference error (since there is no "i" in global space)

for (var j = 0; j < 3; j++) {
  console.log(arr[j]()) // prints 0, 1, and 2
}
