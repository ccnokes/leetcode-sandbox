// @ts-check

/**
 * iterative approach that still blows my mind
 *
 * time and space complexity: O(N * N!)
 * @param {number[]} nums
 * @returns {number[][]}
 */
export default function findPermutations2(nums) {
  const result = [];
  const permutations = [[]];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let n = permutations.length;
    for (let p = 0; p < n; p++) {
      let oldP = permutations.shift();
      for (let j = 0; j < oldP.length + 1; j++) {
        let newP = [...oldP];
        newP.splice(j, 0, curr);
        if (newP.length === nums.length) {
          result.push(newP);
        } else {
          permutations.push(newP);
        }
      }
    }
  }

  return result;
}

/**
 * Recursive approach that is understandable
 * The main idea is once you have an array with nums.length - 2,
 * you can build all the permutations by inserting the last element in every position. E.g:
 * We have: [3, 1] and [1, 3] and our last element is 5. So we insert 5 at every position in the array (0, 1, 2) and record that permutation
 *
 * time and space complexity: O(N * N!)
 * @param {number[]} nums
 * @returns {number[][]}
 */
function findPermutations(nums) {
  const result = [];

  function find(index, currentP) {
    // we only care about permutations that are the same length of the original array
    if (index === nums.length) {
      result.push(currentP);
    } else {
      // create a new permutation by adding the current number at every position
      for (let i = 0; i < currentP.length + 1; i++) { // `currentP.length + 1` because we're adding to the length
        let newP = [...currentP];
        newP.splice(i, 0, nums[index]);
        find(index + 1, newP);
      }
    }
  }

  find(0, []);

  return result;
}

