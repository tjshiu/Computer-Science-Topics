# K'th Smallest/Largest Element in Unsorted Array

- We have an Array and a number(k) where k is smaller than the size of the array.
- Find the k'th smallest element

There are a number of ways to approach the problem.
1. Simple Solution time: O(nlogn) using algorithms such as Merge Sort, Heap Sort, etc. Return the element at index k- 1 in the sorted array.
2. Quick Select: time: O(n) on average, worse case O(n<sup>2</sup>)

``` JavaScript
const kthSmallest = (array, k) => {
  let sorted = mergeSort(array);
  return sorted[k - 1];
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  while (left.length  > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return result.concat(left).concat(right);
};
```
