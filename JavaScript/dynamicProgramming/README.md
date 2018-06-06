# Dynamic Programming

Recursion can be a great for us to break apart problems into smaller chunks. However, this technique often comes with significant performance costs. For example...

``` JavaScript
function fibonacci(n) {
  if (n <= 0) return null;
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); //8
```
__The BAD__
It runs in O(2^n) time. The call tree below shows how our stack will be called. As you can see below, we call `fibonacci(3)` 3 times. It would be better if we can store this data for later on. This idea is __memoization__.

``` JavaScript
//            6
//          /  \
//        5      4
//      /  \    / \
//     4   3   3   2
//    /\  /\  /\
//   3 2 2 1 2 1
//  /\
// 2  1
```


## Tabulation vs Memoization

Two different ways to store the values so that the values of a problem can be reused. Two patterns of solving dynamic programming problem.

1. __Memoization__: Top Down (Start at the top of the big call tree and Record answers as you get them)
2. __Tabulation__: Bottom Up (Start at the bottom of the big call tree. Record all the answers you know you'll need and return the answer you want once you have it)

__Memoization - Top Down Dynamic Programming__
Let's use a top-down approach to optimize the example.

1. if n = 1 or n = 2, return 1
2. if n > 2 return fibonacci(n - 1) + fibonacci(n - 2)
  * Let ans = fibonacci(n - 1) + fibonacci(n - 2)
  * Record ans in a cache (storage hash)
  * Return ans

In our cache we will initialize with a cache = { 1 => 1, 2 => 1 } to also include the base cases.

``` JavaScript
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
```



__Tabulation - Bottom Up Dynamic Programming__
