// @ts-check

/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * find the max number of vowels in a contiguous substring of length k
 * 
 * string = 'bacacbefaobeacfe', k = 5
 *                   ^---^
 * > 4
 * 
 * string = 'abciiidef', k = 3
 * > 3
 * 
 * @param {string} string
 * @param {number} k
 * @returns {number}
 */
export default function maxNumberVowels(string, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  
  let max = 0;
  let currentCount = 0;

  // init max with first window value
  for (let i = 0; i < k; i++) {
    if (vowels.has(string[i])) {
      currentCount++;
    }
  }

  // break early because we've already found the max
  if (max === k) {
    return max;
  }
  
  max = currentCount;

  // i represents window end, new char to be added
  for (let i = k; i < string.length; i++) {
    // add new char
    if (vowels.has(string[i])) {
      currentCount++;
    }
    // remove outgoing char at window start
    if (vowels.has(string[i - k])) {
      currentCount--;
    }
    // calculate max
    max = Math.max(currentCount, max);
  }

  return max;
}
