// @ts-check

/**
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.
 */

// Solution 1
// convert str2 into hashmap or Set
// start with expanded window at 0 and str1.length - 1
// but then you'd have to iterate the whole str1 every time, giving O(N^2)

// Solution 2
// convert str2 into hashmap with counts of each char
// copy hashmap with counts initialized to 0
// start window at 0, 0, left and right
// iterate forward and add matching chars to hashmap, shrink window while Object.keys(hashmap).length > str2.length
// if all chars have count >= target, then store (right - left + 1) string

/**
 *
 * NOTE this isn't a great solution... it works but you shouldn't need 2 while loops
 *
 * @param {string} str1 - length m
 * @param {string} str2 - length n
 * @returns {string} smallest substring that contains str2
 */
export default function minWindowSubstring(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return '';

  const countMap = getCountMap(str2);
  let left = 0;
  let substr = '';

  for (let right = 0; right < str1.length; right++) {
    const char = str1[right];

    if (char in countMap) {
      countMap[char].currentCount++;

      // found a matching substring
      if (checkCountsAreEqual(countMap)) {

        // come in as far as we can from left, removing unneeded chars to get shortest possible window
        while (left < right && !(str1[left] in countMap) || countMap[str1[left]].currentCount > countMap[str1[left]].targetCount) {
          const leftChar = str1[left];
          if (leftChar in countMap) {
            countMap[leftChar].currentCount--;
          }
          left++;
        }

        const newSubstr = str1.slice(left, right + 1);
        if (substr.length === 0 || newSubstr.length === Math.min(substr.length, newSubstr.length)) {
          substr = newSubstr;
        }

        // remove from window until counts aren't equal
        while (left < right && checkCountsAreEqual(countMap)) {
          const leftChar = str1[left];
          if (leftChar in countMap) {
            countMap[leftChar].currentCount--;
          }
          left++;
        }
      }
    }
  }

  return substr;
}

/**
 *
 * @param {Record<string, Record<string, number>>} countMap
 * @returns {boolean}
 */
function checkCountsAreEqual(countMap) {
  return Object.keys(countMap)
    .every(key => countMap[key].currentCount >= countMap[key].targetCount);
}

/**
 *
 * @param {string} str2
 * @returns {Record<string, Record<string, number>>}
 */
function getCountMap(str2) {
  return str2.split('').reduce((aggr, char) => {
    if (char in aggr) {
      aggr[char].targetCount++;
    } else {
      aggr[char] = {
        targetCount: 1,
        currentCount: 0
      };
    }
    return aggr;
  }, {});
}


// console.log(minWindowSubstring('ADOBECODEBANC', 'ABC'));
// ADOBEC
// CODEBA
// BANC <-- shortest
// console.log(minWindowSubstring('a', 'a'));
// console.log(minWindowSubstring('a', 'aa'));
// console.log(minWindowSubstring('ab', 'b'));
// console.log(minWindowSubstring('bba', 'ab'));
