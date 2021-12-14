/**
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * @param {number[]} arr
 * @param {number} k
 */
export default function findMaxSumSubArray(arr, k) {
  let maxSum = 0;
  let windowStart = 0;
  let sum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    // slide the window
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[windowStart];
      windowStart++; // slide window ahead
    }
  }
  return maxSum;
}

// brute force approach
export function findMaxSumSubArray_brute(arr, k) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - k; i++) {
    let currentSum = arr[i];
    for (let j = 0; j < k - 1; j++) {
      currentSum += arr[i + 1 + j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
