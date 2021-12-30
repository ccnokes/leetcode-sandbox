// @ts-check
/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
export default function tripletSumToZero(nums) {
  const ret = [];

  // first sort it numerically
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (i > 0 && curr === nums[i - 1]) { // skip duplicate elements
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    let targetSum = -curr;

    while (left < right) {
      let currentSum = nums[left] + nums[right];
      if (currentSum === targetSum) {
        ret.push([-targetSum, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++; // skip same element to avoid duplicate triplets
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--; // skip same element to avoid duplicate triplets
        }
      }
      else if (targetSum > currentSum) {
        left++; // we need a pair with a bigger sum
      }
      else {
        right--; // we need a pair with a smaller sum
      }
    }
  }

  return ret;
}
