// @ts-check
/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param {string} str
 * @return {number}
 */
export default function lengthOfLongestSubstring(str) {
  if (str.length <= 1) return str.length;

  let maxLen = 0;
  let left = 0;
  let seenChars = new Set();

  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];

    while(seenChars.has(rightChar)) {
      seenChars.delete(str[left]);
      left++;
    }

    seenChars.add(rightChar);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

export function lengthOfLongestSubstring_brute(s) {
  if (s.length <= 1) return s.length;

  let maxLen = 0;

  for (let windowStart = 0; windowStart < s.length; windowStart++) {
    let substring = new Set().add(s[windowStart]);
    for (let windowEnd = windowStart + 1; windowEnd < s.length; windowEnd++) {
      if (!substring.has(s[windowEnd])) {
        substring.add(s[windowEnd]);
      } else {
        break;
      }
    }
    maxLen = Math.max(maxLen, substring.size);
  }

  return maxLen;
}
