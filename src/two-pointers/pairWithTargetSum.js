// @ts-check

/**
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param {number[]} nums - sorted
 * @param {number} target
 * @returns {number[] | undefined}
 */
export default function pairWithTargetSum(nums, target) {
  // setup two pointers at the beginning and end
  let right = nums.length - 1;
  let left = 0;

  while(left < right) {
    const sum = nums[right] + nums[left];
    if (sum === target) { // we found a pair
      return [left, right];
    }
    if (sum < target) { // move up the left so the sum gets bigger
      left++;
    }
    if (sum > target) { // bring in the right so the sum gets smaller
      right--;
    }
  }
}
