/**
 * Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray
 * whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 *
 * @param {number[]} arr
 * @param {number} s
 * @returns {number} the length of the smallest subarray
 */
export default function findSmallestSubArrayWithGivenSum(arr, s) {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while(windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart]; //slide window
      windowStart++;
    }
  }

  if (minLength === Infinity) return 0;
  return minLength;
}
