// @ts-check
/**
=== Prompt ===
https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

You are given two strings s1 and s2 of equal length. 
A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. 
Otherwise, return false.


Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.

=== Approach, thoughts ===

Edge cases
- strings are different lengths (assume yes but will check in beginning of function too)
- unicode chars? only alpha? (assume alpha only)
- case sensitive? (assume yes)

Examples
s1 = "bank", s2 = "kanb" -> true, swap 0,3 indexes
s1 = "test", s2 = "tset" -> true, swap 1,2 indexes
s1 = "test", s2 = "rest" -> false

General approach idea 1
assuming that s1 is the target string, s2 is the almost equal string

convert s2 to hashmap structure like below by comparing indexes to s1
s2Map = {
  0: {
    value: 'k',
    needs: 'b'
  },
  1: { value: 'a' },
  2: { value: 'n' },
  3: {
    value: 'b',
    needs: 'k'
  }
}

convert hashmap -> array
check length <= 2
return check [0].needs === [1].value

Complexity would be O(N) of s1

NOTE could simplify just build the array directly, when indexes don't match, push a {index, value, needs} entry
index not technically needed but comes at no cost if we ever wanted to return the indexes to swap
*/

/**
s1 = "kelb", s2 = "kelb" -> would return early because s1 === s2
s1 = "abc", s2 = "abd" -> check.length <= 2, return false
// s1 = "ab",  s2 = "ca" -> check.length <= 2, return false. check = [{index: 0, value: 'c', needs: 'a'}]
s1 = "test", s2 = "tset" -> check.length === 2, check = [{index: 1, value: 's', needs: 'e'}, {index: 2, value: 'e', needs: 's'}]

s1 = "ab",  s2 = "ca"
[
{ index: 0, value: 'c', needs: 'a' },
{ index: 1, value: 'a', needs: 'b' },
]
return check [0].needs === [1].value && [1].needs === [0].value, -> false
(need to check both sides of the swap)
*/

/**
 * Returns true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function isOneStringSwapEqual(s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  const mismatches = [];

  for (let i = 0; i < s2.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatches.push({ index: i, value: s2[i], needs: s1[i] });
    }
  }

  return (
    // more than one swap needed
    mismatches.length === 2 &&
    // will a swap in mismatches tuple make s2 === s1
    mismatches[0].needs === mismatches[1].value &&
    mismatches[1].needs === mismatches[0].value
  );
}

// see test.js
// console.log(
//   isOneStringSwapEqual('hello', 'goodbye'), // false
//   isOneStringSwapEqual('kelb', 'kelb'), // true
//   isOneStringSwapEqual('ab', 'ca'), // false
//   isOneStringSwapEqual('bank', 'kanb'), // true
//   isOneStringSwapEqual('ab', 'ba'), // true
// );
