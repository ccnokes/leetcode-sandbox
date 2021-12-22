// @ts-check
/**
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 *
 * Solution: two pointers on either end of the array
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
export default function squareSorted(nums) {
  const ret = [];
  let left = 0;
  let right = nums.length - 1;

  while (ret.length < nums.length) {
    const L = nums[left];
    const R = nums[right];
    if (Math.abs(L) > Math.abs(R)) {
      left++;
      ret.unshift(L ** 2);
    } else {
      right--;
      ret.unshift(R ** 2);
    }
  }

  return ret;
}
