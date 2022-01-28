// @ts-check
/**
 * Find index of `key` in sorted array, but we don't know which order it's sorted in, could be ascending or descending.
 *
 * This is a straight-forward binary search except that we need to check if the array is asc or desc and then invert our operations accordingly
 *
 * O(logN) time - we reduce the search range in half at every step
 * O(1) space - we don't allocate any additional structures, so constant space
 * @param {number[]} arr - could be asending or descending order
 * @param {number} key
 * @returns {number} index
 */
export default function orderAgnosticBinarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[end] > arr[start];

  while(start <= end) { // two pointers shrink inwards till they find one
    let mid = Math.floor(start + (end - start) / 2); // start + difference between end - start (the total sub-range we're considering), divided by 2 so we get the middle
    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) {
      if (key > arr[mid]) {
        start = mid + 1;
      }
      else if (key < arr[mid]) {
        end = mid - 1;
      }
    }
    // descending
    else {
      if (key > arr[mid]) {
        end = mid - 1;
      }
      else if (key < arr[mid]) {
        start = mid + 1;
      }
    }
  }

  return -1;
}
