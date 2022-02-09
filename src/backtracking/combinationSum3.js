// @ts-check

/*
Find all valid combinations of `k` numbers that sum up to `n` such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
*/

/**
 * @param {number} k - number of digits to use to sum
 * @param {number} target - target number
 * @return {number[][]}
 */
export default function combinationSum3(k, target) {
  const result = [];

  /**
   * @param {number[]} set
   * @param {number} sum
   * @param {number} start
   */
  function solve(set, sum, start) {
    // we found a working set, save the solution
    if (sum === target && set.length === k) result.push(set);

    // keep looking
    if (sum < target && set.length < k) {
      // start the loop at the start because we can't use duplicates
      for (let i = start; i < 10; i++) {
        // here's how the args work:
        // 1 - clone the set and add the current number to it
        // 2 - compute running sum
        // 3 - next index
        solve([...set, i], sum + i, i + 1);
      }
    }
  }

  solve([], 0, 1);

  return result;
}
