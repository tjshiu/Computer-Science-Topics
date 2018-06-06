//
// function fibonacci(n) {
//   if (n <= 0) return null;
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// console.log(fibonacci(6));


  //             6
  //           /  \
  //         5     4
  //       / \    / \
  //     4   3   3   2
  //    /\  /\  /\
  //   3 2 2 1 2 1
  //  /\
  // 2 1

function Fibonacci() {
  this.cache = { 1: 1, 2: 1};
}

Fibonacci.prototype.fibonacci = function (n) {
  if (this.cache[n] !== undefined) return this.cache[n];

  let ans = this.fibonacci(n - 1) + this.fibonacci(n - 2);
  this.cache[n] = ans;
  return ans;
};

let example = new Fibonacci();
console.log(example.fibonacci(6));
