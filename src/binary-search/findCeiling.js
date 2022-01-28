// @ts-check

/**
 * Input: [1, 3, 8, 10, 15], target = 12
 * Output: 4
 *
 * process:
 *
 * modified binary search
 * pointers at start and end
 * find middle
 * if middle > target, set end to mid - 1
 * if middle < target, set start to mid + 1
 * else return middle
 */


/**
 * Given an array of numbers sorted in ascending order, find the ceiling of a given number `target`.
 * The ceiling of the `target` will be the smallest element in the given array greater than or equal to the `target`.
 *
 * time complexity: O(log N) because we half the range every time
 * space complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} index of ceiling
 */
export default function findCeiling(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  // exit it out early if we know this is true
  if (target > arr[end]) return -1;

  while (start <= end) {
    let midIndex = Math.floor(start + (end - start) / 2); // NOTE if there's only 2, will get the first one as the middle
    let mid = arr[midIndex];

    if (target < mid) { // bring end in
      end = midIndex - 1;
    }
    else if (target > mid) { // bring start up
      start = midIndex + 1;
    }
    else { // found it. Either it's equal or start, midIndex, and end are pointing at the same pointer
      return midIndex;
    }
  }

  return start;
}
