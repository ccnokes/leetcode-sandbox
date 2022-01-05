// @ts-check
/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * NOTE this works but isn't the canonical solution because it doesn't use binary search
 *
 * From: https://leetcode.com/problems/median-of-two-sorted-arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export default function findMedianSortedArrays(nums1, nums2) {
  const merged = [];

  let nums1Pointer = 0;
  let nums2Pointer = 0;

  while(nums1Pointer < nums1.length || nums2Pointer < nums2.length) {
    // if the element is undefined, basically say it's always greater
    const curr1 = nums1[nums1Pointer] ?? Infinity;
    const curr2 = nums2[nums2Pointer] ?? Infinity;
    // nums1 is smaller
    if (curr1 < curr2) {
      merged.push(curr1);
      nums1Pointer++;
    }
    // nums2 is smaller
    else if (curr2 < curr1) {
      merged.push(curr2);
      nums2Pointer++;
    }
    // they're equal
    else {
      merged.push(curr1);
      nums1Pointer++;
      merged.push(curr2);
      nums2Pointer++;
    }
  }

  const hasTwoMedians = merged.length % 2 === 0; // if it has an even length, there'll be two medians we have to avg
  const midIndex = Math.floor(merged.length / 2);

  if (hasTwoMedians) {
    const second = midIndex - 1;
    return (merged[midIndex] + merged[second]) / 2;
  } else {
    return merged[midIndex];
  }
}
