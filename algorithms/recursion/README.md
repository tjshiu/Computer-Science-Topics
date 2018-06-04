# Recursion

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily.

A __recursive__ method is one that calls itself and with each time the method calls itself it tries to solve a smaller __subproblem__.

### Basics of Recursion:
* __base cases__ - a recursive methods should eventually reach a base case, or they just loop forever.
* __recursion__ - the method call to itself

### Steps for Programming Recursively:
1. Map out a recursive decomposition. Think about how you can break down the problem to smaller problems, and make it towards a base case.
2. Identify the base case(s): The base case will be the case when the stack stops growing - that is when the chain of defferred operations will begin to evaluate.
3. Think one level up from the base case. What will happen with your recursive method with a value that will require a single recursive call. How will you have to manipulate the value in order to return the right thing.
4. Ensure that your return values from any case (base case or otherwise) or always of the same type. If you need an array as the final return value, then the intermediate return value should be arrays.
5. Get a stack trace, if you are having difficulty with debugging.

### Direct vs Indirect Recursion?
If it calls the same function, it is direct recursive. If a function calls another function, it is indirect recursive.

### Tailed and non-tailed recursion
A recursive function is tail recursive when recursive call is the last thing executed by teh function.

## Mathematical Induction
Solving a problem using the solution(s) to these smaller sub-problems uses the math concept of __mathematical induction__ or simply __induction__.

## Recursion vs Iteration
Recursive methods can always be written __iteratively__: using loops and no recursion.

__Disadvantages of Recursive Programming over Iterative Programming__
* Recursive program has greater space requirements than iterative program as all functions will remain in stack until base case is reached.
* It also has greater time requirements because of function calls and return overhead.

__Advantages of Recursive Programming over Iterative Programming__
* Clean and simple way to write code
* Some are inherently recursive like tree traversals, Tower of Hanoi, etc.

## Recursion and Infinite Loops
Each nested method call you make adds to the stack of open method calls. The elements of the stack are called stack frames, and they contain the local variables used by that method. If you get caught in a recursive loop, the stack will grow infinietly until the system runs out of memory, which is called __stack overflow__.


## Examples:

### Towers of Hanoi:
### Inorder/Preorder/Postorder Tree Traversals
### DFS of Graph
