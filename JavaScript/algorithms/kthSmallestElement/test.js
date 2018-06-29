/*
input: [7, 10, 4, 3, 20, 15], k = 3,
output: 7

input [7, 10, 4, 3, 20, 15], k = 4
output: 10;
*/

//
// const kthSmallest = (array, k) => {
//   let sorted = mergeSort(array);
//   return sorted[k - 1];
// };
//
// const mergeSort = (array) => {
//   if (array.length <= 1) return array;
//
//   let middle = Math.floor(array.length / 2);
//
//   let left = array.slice(0, middle);
//   let right = array.slice(middle);
//
//   return merge(mergeSort(left), mergeSort(right));
// };
//
// const merge = (left, right) => {
//   let result = [];
//   while (left.length  > 0 && right.length > 0) {
//     if (left[0] > right[0]) {
//       result.push(right.shift());
//     } else {
//       result.push(left.shift());
//     }
//   }
//
//   return result.concat(left).concat(right);
// };

const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
};

const partition = (array, l, r) => {
  let x = array[r];
  let i = l;

  for (let j = l; j <= r; j++) {
    if (array[j] <= x) {
      swap(array[i], array[j]);
      i++;
    }
  }
  swap(array[i], array[r]);
  return i;
};

const kthSmallest = (array, l, r, k) => {
  if (k > 0 && k <= r - l + 1) {
    let pos = partition(array, l, r);

    if (pos - 1 == k - 1) {
      return array[pos];
    }

    if (pos - 1 > k - 1) {
      return kthSmallest(array, l, pos - 1, k);
    }

    return kthSmallest(array, pos + 1, r, k - pos + l - 1);
  }

  return Math.max(...array);
};

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 0, 5, 4));
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 0, 5, 3));
