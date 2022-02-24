// @ts-check

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
-----------------------

divide and conquer (sort of)
for every i, we need to know the product of all the numbers before it and after it

*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
export default function productExceptSelf(nums) {
  const result = [];

  // fill in products of everything to right of curr index
  nums.reduceRight((aggr, curr, i) => {
    result[i] = aggr;
    return aggr * curr;
  }, 1);

  // fill in products of everything to left curr index
  nums.reduce((aggr, curr, i) => {
    result[i] *= aggr;
    return aggr * curr;
  }, 1);

  return result;
}
