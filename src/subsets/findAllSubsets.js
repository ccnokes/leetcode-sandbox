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
    const n = subsets.length; // get the number of subsets we already have because we're going to work from those and double it with new subsets

    // on each subset
    for (let j = 0; j < n; j++) {
      const set1 = [...subsets[j]]; // clone current subset
      set1.push(curr); // add curr item to the cloned subset to create a new one
      subsets.push(set1); // add the subset
    }
  }

 return subsets;
}

