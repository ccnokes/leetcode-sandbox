// @ts-check

/**
 * Given an array of integers, reverse it in place.
 * 
 * O(n)
 * 
 * @param {number[]} arr
 * @returns {number[]}
 */
export default function reverseArrayInPlace(arr) {
  // init two pointers at end and beginning
  // swap values
  // progress pointers
  // once pointers meet, we're done

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let startVal = arr[start];
    let endVal = arr[end];
    arr[start] = endVal;
    arr[end] = startVal;
    start++;
    end--;
  }

  return arr;
}