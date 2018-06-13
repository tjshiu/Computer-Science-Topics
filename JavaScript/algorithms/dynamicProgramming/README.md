# Dynamic Programming

Dynamic Programming is an algorithmic paradigm that solves a given complex problem by breaking it into subproblems and storing the results of subproblems to avoid computing the same results again.

Where to use Dynamic Programming?
There are two main properties of a problem that suggest that the given problem can be solved using Dynamic Programming:
1. Overlapping Subproblems
2. Optimal Substructure


## Overlapping Subproblems Property

There are a lot of unnecessary overlapping problems.
The solution is to use memory to "remember the results". Do not solve the same problem again, just recall it from memory.
Two methods of storing the results in memory.

1. Memoization (Top-down)
2. Tabulation (Bottom-up)

__Dynaimc Programming vs. Divide and Conquer__
Similarities: Both paradigms work by combining solutions to sub-problems.
Differences: Dynamic Programming is mainly used when the overlapping subproblems property is satisfied.

Examples: Binary Search, Fibonacci Series

## Optimal Substructure Property

A given problem is said to have the optimal substructure property if an optimal solution of the given problem can be obtained by using optimal solutions of its subproblems.

For example:
* __The Shortest Path Problem__
    * if a node x lies in the shortest path from source node u to destination node v then, the shortest path from u to v is the combination of shortest path from u to x and shortest path from x to v.
* All Pair Shortest Path
    * Floyd-Warshall
    * Bellman-Ford

Counter Example:
* __Longest Path Problem__ does NOT have the optimal substructure property. (Longest path without cycle between nodes). We know that other longer paths do not make other longest paths. It might even create a cycle.

### Example of Dynamic Programming:

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
It runs in O(2^n) time. The call tree below shows how our stack will be called. As you can see below, we call `fibonacci(3)` 3 times. It would be better if we can store this data for later on. This idea is __memoization__. Look below and we can see that we are creating __overlapping subproblems__. Thus we are doing unnecessary computations again and again to have this slow run time.

``` JavaScript
//                            fib(6)
//                       /                  \
//                  fib(5)                  fib(4)
//                 /     \                 /      \
//           fib(4)       fib(3)        fib(3)   fib(2)
//          /    \        /   \         /   \
//      fib(3) fib(2) fib(2) fib(1) fib(2) fib(1)
//     /   \
// fib(2)  fib(1)
```


## Tabulation vs Memoization

Two different ways to store the values so that the values of a problem can be reused. Two patterns of solving dynamic programming problem.

1. __Memoization__: Top Down (Start at the top of the big call tree and Record answers as you get them)
2. __Tabulation__: Bottom Up (Start at the bottom of the big call tree. Record all the answers you know you'll need and return the answer you want once you have it)

| | __Memoization__ <br> Top Down | __Tabulation__ <br> Bottom Up|
|---|---|---|
|__State__| State transition relation is easy to think | State Transition relation is difficult to think |
|__Code__| Code is easy and less complicated | Code gets complicated when lot of conditions are required |
|__Speed__| Slow due to lot of recursive calls and return statements | Fast, as we directly access previous states from the table |
|__Subproblem Solving__| If some subproblems in the subproblem space need not be solved at all, the memoized solution has the advantage of solving only those subproblems that are definitely required. | If all subproblems must be solved at least once, a bottom-up dynamic programming algorithm usually outperforms a top-down memoized algorithm by a constant factor |
|__Table Entries__| Unlike the tabulated version, all entries of the lookup table are not necessarily filled in memoized version. The table is filled on demand | In tabulated version, starting from the first entry, all entries are filled one by one |

__Memoization - Top Down Dynamic Programming__
Here we keep a lookup table or a cache of any answers that we have. We also call function multiple times and makes the calls until it gets to the bottom. As we start from the bottom and go to the top, we store the values in our lookup table or cache.
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
console.log(example.fibonacci(6)); //8
console.log(example.fibonacci(100)) // 354224848179262000000
// Answer above takes milliseconds to complete due to memoization
```

__Tabulation - Bottom Up Dynamic Programming__

Steps
1. Begin with initializing the base values of i
2. Run a loop that iterates over the remaining values of i
3. At every iteration i, f(n) updates the ith entry in the lookup table or cache by combining the solutions to the previously solved subproblems.
4. Finally, f(n) returns table[n]

With bottom up dynamic programming, we will still use a `this.cache`, but instead of writing `cache` as we're trying to find `fibonacci(n)`, we build the `cache` first and then return the  desired entry, `cache[n]`

This runs in O(n) time. Both approaches reduces our time complexity from exponential to linear time.

``` JavaScript
function fibCacheBuilder(n) {
  let cache = {1: 1, 2: 1};
  if (n < 3) return cache;

  for (let i = 3; i <= n; i++) { //Building the cache starting at 3
    cache[i] = cache[i - 1] + cache[i - 2]; //runs in O(n) time
  }

  return cache;
}

function fibonacci(n) {
  let cache = fibCacheBuilder(n); // calls the helper function
  return cache[n]; //returns the nth entry
}

console.log(fibonacci(6));
console.log(fibonacci(100));
```

### How to solve a Dynamic Programming Problem ?

Steps to solve a DP
1. Identify if it is a DP problem
2. Decide a state expression with least parameters
3. Formulate state relationship
4. Do tabulation (or add memoization)

__1 How to classify a problem as a DP problem?__
* Typically, all problems that require to maximize or minimize certain quantity or counting problems that say to count the arrangements under certain conditions or certain probability problems can be solved by using Dynamic Programming.
* All dynamic programing problems satisfy the overlapping subproblems property and most of the classic dynamic problems also satisfy the optimal substructure property. Once, we observe these properties in a given problem, be sure that it can be solved using DP.

__2 Deciding the State__
__State__ A state can be defined as the set of parameters that can uniquely identify a certain position or standing in the given problem. This set of parameters should be as small as possible to reduce state space.

__3 Formulating a relation among the states__
Find the patterns when you're formulating the state. The hardest part of for solving a DP problem and requires a lot of intuition, observation and practice.

__4 Adding memoization or tabulation for the state__
This is the easiest part of dynamic programming solution. We just need to store the state answer so that next time that state is required, we can directly use it from our memory.

### Practice Problem: Binomial Coefficient

__Combinations__ - When forming permutations, the order in which the elements are listed is important, but there are many cases when we are interested only in which elements are selected and we do not care about the order. For example, when playing poker, a hand consists of five cards dealt from a standard 52-card deck. The order in which the cords arrive in a hand does not matter, only the final selection of the five cards are important. When order is not important, the selection is called a combination rather than a permutation. More carefully, an r- combination from an n-set is an r-subset of the n-set. In other words, an r-combination of an n-set is an unordered selection of r distinct elements from the n-set.

An example:

C(n, r)   =  P(n, r) / r!   =     n! / (r!(n - r)!)

Suppose we have a club of 10 members. If we want to select a committee of 3 members, then there are
C(10, 3) = (10!)/ (3!(10-3)!) = 10 * 9 * 8  / (3 * 2 * 1) = 120
