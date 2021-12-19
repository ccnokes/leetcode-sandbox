// @ts-check
/**
 * sliding window approach
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export default function maxConsecutiveOnes(nums, k) {
  let maxLen = 0;
  let left = 0;
  let flips = k;

  for (let right = 0; right < nums.length; right++) {
    let curr = nums[right];
    if (curr === 0) flips--;
    while (flips < 0) {
      if (nums[left] === 0) flips++;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}


/**
 * brute force approach
 * @param {number[]} nums, all 0s and 1s like [1,0,1]
 * @param {number} k
 * @return {number}
 */
export function maxConsecutiveOnes_brute(nums, k) {
  let maxLen = 0;
  let flips = k;

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    let lastIndex = -1; // -1 in case no index works
    while (flips >= 0 && j < nums.length) {
      let curr = nums[j];
      if (curr === 0) flips--;
      if (flips < 0 || j >= nums.length) break; // if these are true, the lastIndex was the last good one
      lastIndex = j; // this index is good
      j++; // proceed to next one
    }

    flips = k; // reset flip count
    maxLen = Math.max(maxLen, lastIndex - i + 1);
    if (maxLen === nums.length) break; //it's as large as can be, return early
  }

  return maxLen;
}
