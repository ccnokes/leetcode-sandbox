// @ts-check
/**
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space; after removing the duplicates in-place
 * return the length of the subarray that has no duplicate in it.
 *
 * From a sorted array, get the length of the sub-array of unique elements.
 *
 * @param {number[]} nums
 * @returns {number}
 */
export default function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let last = 0; // pointer to last unique element we encountered
  let len = 1; // all non-empty arrays have at least 1 unique element
  for (let i = 1; i < nums.length; i++) {
    if (nums[last] !== nums[i]) {
      last = i;
      len++;
    }
  }
  return len;
}
