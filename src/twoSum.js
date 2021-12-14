/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 */

// brute force method
export function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }
}

// does cur - target = x?
// store cur -> index in map
export function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const result = target - cur;
    if (map[result] != null) {
      return [map[result], i];
    }
    map[cur] = i;
  }
}

// numbers is a sorted array
export function twoSumSorted(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while(i < j) {
    const sum = numbers[j] + numbers[i];
    if (sum === target) {
      return [i, j];
    }
    else if (sum > target) {
      j--;
    }
    else if (sum < target) {
      i++;
    }
  }
}
