# Find Pair in Array

- Given a sorted array and a number x, find the pair in array whose sum is closest to x

## Example:

Input: array = [10, 22, 28, 29, 30, 40], x = 54

Output: 22 and 30

## Simple Solution: (Time complexity O(n<sup>2</sup>))

Consider every pair and keep track of closest pair (absolute difference between pair sum and x is minimum). Finally print the closest pair.

## Efficient Solution:

1. Initialize a variable diff as infinit (Diff is ued to store the difference between pair and x). We need to find the minimum diff.
2. Intitilzie two index variables `l` and `r` in the given sorted array.
    a. Initialize first the leftmost index: `l = 0`.
    b. Initilize second the rightmost index: `r = n - 1`
3. Loop while `l < r`
    a. if abs(arr[l] + arr[r] - x) < diff then update diff and result
    b. if (arr[l] + arr[r] < x) then l++
    c. Else r--

``` JavaScript
const closeSum = (array, x) => {
  let idx1 = 0;
  let idx2 = 0;

  let l = 0;
  let r = array.length - 1;
  let diff = Infinity; // also Number.MAX_VALUE

  while (r > l) {
    if (Math.abs(array[l] + array[r] - x) < diff) {
      idx1 = l;
      idx2 = r;
      diff = Math.abs(array[l] + array[r] - x);
    }

    if (array[l] + array[r] > x) {
      r--;
    } else {
      l++;
    }
  }

  return [array[idx1], array[idx2]];
};

console.log(closeSum([10, 22, 28, 29, 30, 40], 54)); //[22, 30]
console.log(closeSum([1, 3, 4, 7, 10], 15)); // [4, 10]

```
