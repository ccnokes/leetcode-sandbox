// @ts-check

/**
 * https://leetcode.com/problems/longest-common-prefix/
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * @param {string[]} strings 
 * @returns {string}
 */
export default function longestCommonPrefix(strings) {
  let longestPrefix = '';
  let prefix = '';

  const shortestStrLen = Math.min(...strings.map(str => str.length));

  for (let i = 0; i < shortestStrLen; i++) {
    // set current to first string letter
    let currLetter = strings[0][i];

    // check all equal
    const allEq = strings.every(str => str[i] === currLetter);
    if (allEq) {
      prefix += currLetter;
    } else {
      prefix = prefix.slice(1);
    }
    // update longest
    if (prefix.length > longestPrefix.length) {
      longestPrefix = prefix;  
    }
  }

  return longestPrefix;
}

// think of strings as table, iterate through columns and check each row 
// if they're all equal, store that.
// sort of a sliding window