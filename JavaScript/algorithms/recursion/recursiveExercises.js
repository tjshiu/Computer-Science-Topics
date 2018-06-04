/*
Write a recursive method, range, that takes a start and an end and returns an
array of all numbers in that range, exclusive. For example, range(1, 5) should
return [1, 2, 3, 4]. If end < start, you can return an empty array.
Write both a recursive and iterative version of sum of an array.
*/

function range(start, end) {
  if (end < start) return [];

  return range(start, end - 1).concat([end - 1]);
}

console.log(range(1, 5));
