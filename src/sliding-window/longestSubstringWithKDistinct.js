// @ts-check
/**
 * Given a string, find the length of the longest substring in it with no
 * more than K distinct characters.
 *
 * @param {string} str
 * @param {number} k
 * @returns {number}
 */
export default function longestSubstringWithKDistinct(str, k) {
  let maxLen = 0;
  let seenChars = {};
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if (!(rightChar in seenChars)) {
      seenChars[rightChar] = 0;
    }
    seenChars[rightChar]++;

    // shrink the window when we've seen too many chars
    while (Object.keys(seenChars).length > k) {
      const leftChar = str[left];
      seenChars[leftChar]--;
      if (seenChars[leftChar] <= 0) {
        delete seenChars[leftChar];
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// this seems brute-forcy
export function longestSubstringWithKDistinct_brute(str, k) {
  let maxLen = 0;

  for (let left = 0; left < str.length; left++) {
    let substr = str[left];
    let seen = [];
    let right = left + 1;
    while (seen.length <= k && right < str.length) {
      if (seen.indexOf(str[right]) === -1) {
        seen.push(str[right]);
      }
      if (seen.length <= k) substr += str[right];
      right++;
    }
    maxLen = Math.max(maxLen, substr.length);
    if (maxLen === substr.length) return maxLen;
  }

  return maxLen;
}
