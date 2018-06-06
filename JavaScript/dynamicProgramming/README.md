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
It runs in O(2^n) time.

``` JavaScript
            6
          /  \
        5     4
      / \    / \
    4   3   3   2
   /\  /\  /\
  3 2 2 1 2 1
 /\
2 1
```


## Tabulation vs Memoization

Two different ways to store the values so that the values of a problem can be reused. Two patterns of solving dynamic programming problem.
//             6
//           /  \
//         5     4
//       / \    / \
//     4   3   3   2
//    /\  /\  /\
//   3 2 2 1 2 1
//  /\
// 2 1
1. __Tabulation__: Bottom Up
2. __Memoization__: Top Down

__Tabulation - Bottom Up Dynamic Programming__

__Memoization - Top Down Dynamic Programming__
