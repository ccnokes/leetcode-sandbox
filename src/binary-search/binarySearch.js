// @ts-check

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * 
 * @param {number[]} arr - sorted ASC
 * @param {number} target
 * @returns {number} index of target
 */
export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } 
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}