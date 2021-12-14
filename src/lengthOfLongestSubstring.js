// @ts-check
/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
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
