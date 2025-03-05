// @ts-check
import { MinHeap } from './minHeap.js';

/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 * 
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * 
 * Time Complexity: O(n log k)
 * Each of the n elements is processed once. However, heap operations take O(logk) time,
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
export function findKthLargest(nums, k) {
  const minHeap = new MinHeap();
  
  // add k elements to the heap
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // iterate through the rest of the elements
  for (let i = k; i < nums.length; i++) {
    // if greater than the top of the heap, pop and push
    // this way we maintain the largest k elements in the heap with the smallest on top
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  // return the smallest which is the kth largest
  return minHeap.peek();
}

/**
 * will have a longer run time because of sorting, O(n log n)
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function naiveFindKthLargest(nums, k) {
  nums.sort();
  return nums[nums.length - k];
}
