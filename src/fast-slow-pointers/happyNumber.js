// @ts-check
/**
  Write an algorithm to determine if a number n is happy.

  A happy number is a number defined by the following process:

  Starting with any positive integer, replace the number by the sum of the squares of its digits.
  Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
  Those numbers for which this process ends in 1 are happy.
  Return true if n is a happy number, and false if not.
 *
 * @param {number} n
 *  @returns {boolean}
 */
export default function isHappyNumber(n) {
  let sum = 0;
  let iterations = 0;
  let currentDigits = getDigits(n);

  while (iterations < 50) { // NOTE this is sort of cheating, you're supposed to detect cycles
    sum = sumSquares(currentDigits);
    if (sum === 1) {
      return true;
    } else {
      currentDigits = getDigits(sum);
      iterations++;
    }
  }

  return false;
}

/**
 *
 * @param {number} n
 * @returns {number[]}
 */
function getDigits(n) {
  return String(n).split('').map(str => parseInt(str, 10));
}

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function sumSquares(nums) {
  return nums.reduce((aggr, curr) => {
      return aggr + curr ** 2;
    }, 0);
}
