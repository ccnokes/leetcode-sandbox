/**
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
export default function addStringNumbers(num1, num2) {
  let result = []; // backwards
  const num1Digits = [...num1].map((digit) => parseInt(digit));
  const num2Digits = [...num2].map((digit) => parseInt(digit));

  let num1Digit = num1Digits.pop();
  let num2Digit = num2Digits.pop();
  let carry = 0;

  while (num1Digit !== undefined || num2Digit !== undefined) {
    let currentSum = (num1Digit ?? 0) + (num2Digit ?? 0) + carry;

    // handle carry
    if (currentSum >= 10) {
      carry = 1;
      currentSum = currentSum % 10;
    } else {
      carry = 0;
    }

    result.push(currentSum);

    num1Digit = num1Digits.pop();
    num2Digit = num2Digits.pop();
  }

  if (carry) {
    result.push(carry);
  }

  // reverse and to string
  return result.reverse().join('');
}
