// @ts-check

/**
 * O(N*2^N)
 * @param {number[]} nums
 * @returns {number[][]}
 */
export default function findAllSubsets(nums) {
  /** @type number[][] */
  const subsets = [];

  subsets.push([]); // push initial

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const n = subsets.length;
    for (let j = 0; j < n; j++) {
      const set1 = [...subsets[j]]; // clone current permutation
      set1.push(curr);
      subsets.push(set1);
    }
  }

 return subsets;
}

