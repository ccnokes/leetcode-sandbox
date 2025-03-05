// @ts-check
import { MinHeap } from './minHeap.js';

/**
 * Given an integer array nums, return the third distinct maximum number in this array. 
 * If the third maximum does not exist, return the maximum number.
 * 
 * @param {number[]} nums
 * @returns {number}
 */
export function thirdMax(nums) {
  const heap = new MinHeap();
  const seenNums = new Set();

  // initialize first element
  heap.push(nums[0]);
  seenNums.add(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (seenNums.has(nums[i])) {
      continue;
    }
    if (nums[i] > heap.peek()) {
      heap.push(nums[i]);
    }
    while (heap.size > 3) {
      heap.pop();
    }
    seenNums.add(nums[i]);
  }
  
  return heap.peek();
}

// approach
// create a min heap so the smallest of 3 numbers is always on top.
//    this way getting the 3rd smallest is a 0(1) lookup
// create a Set of seen numbers. This will help handle duplicate numbers
// iterate thru the numbers
//    if we've seen a num before (check seenNums), skip
//    if greater than minHeap top, push to heap
//    add to seenNums
// return heap top

// [2, 2, 3, 1, -1, 0]
// 

// thirdMax([2, 2, 3, 1, -1, 0]);
// console.log(thirdMax([1, 5, 3, 6, 2, 6]));