// @ts-check

/**
Problem:
Given an int x, find all divisors less than or equal to x that returns an integer

Solution:
I don't know if there's a better math-y way to do this, but we could iterate.

divisors = []
for i = x; i <= x; i--
  if (x % i) divisors.push(i)
return divisors

Possible optimizations probably come down to utilizing different math-y properties of numbers:
- the largest a divisor can be without a remainder is x/2
- if x % i === 0, then x/i will also be a divisor (12 % 6 === 0, and 12 / 6 = 2, so 2 is also a divisor
- all numbers are divisible by themself and 1

These optimizations can take it from O(n) to O(n/2) or O(sqrt n) which is significantly less. Linear to non-linear time.
*/

/**
 * @param {number} x 
 * @returns {number[]}
 */
function findDivisors_naive(x) {
  const divisors = [];

  // the largest a divisor can be without a remainder is x/2, so start with that to save some iterations
  for (let i = x; i > 0; i--) {
    if (x % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

/**
 * @param {number} x 
 * @returns {number[]}
 */
export default function findDivisors(x) {
  // seed it with x because a number is always divisible by itself
  const divisors = [x];

  // the largest a divisor without a remainder can be is x/2, so start with that to save some iterations
  for (let i = Math.floor(x / 2); i > 0; i--) {
    if (x % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
