/*
The Problem
Write a function that takes two parameters n and k and returns the value of
Binomial Coefficient C(n, k). For example, your function should return 6 for n = 4
and k = 2, and it should return 10 for n = 5 and k = 2.
*/

//inputs: C(1, 1) = 1, C(2, 1) = 2, C(3, 1) = 3

/* Value of C(n, k) can be recursively calcualted using the following standard
formula for Binomial coefficients.

C(n, k) = C(n-1, k-1) + C(n-1, k)
C(n, 0) = C(n, n) = 1
*/

function binomialCoef(n, k) {
  if (k === 0 || k === n) return 1;

  return binomialCoef(n - 1, k - 1) + binomialCoef(n - 1, k);
}
