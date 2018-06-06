
function fibonacci(n) {
  if (n <= 0) return null;
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));


  //             6
  //           /  \
  //         5     4
  //       / \    / \
  //     4   3   3   2
  //    /\  /\  /\
  //   3 2 2 1 2 1
  //  /\
  // 2 1
