// @ts-check

/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * @param {string} str
 * @returns {number}
 */
function findLengthOfLongestUniqueSubstring(str) {
  let maxLen = 0;
  let left = 0;
  const charIndex = new Map();

  for (let right = 0; right < str.length; right++) {
    // dupe found
    if (charIndex.has(str[right])) {
      left = Math.max(left, charIndex.get(str[right]) + 1);
    }
    charIndex.set(str[right], right);
    // update maxLen by calculating window size
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// abcb
//   l
//    r

// abcdbeb
// l
//     r

// Map { a: 0, b: 4, c:2, d:3, e:?,  }

// iterate through
// add char, index to charIndex Map

// on dupe found
// get dupe char index
// set maxLen
// reset left pointer to it
// update index map