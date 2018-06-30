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
