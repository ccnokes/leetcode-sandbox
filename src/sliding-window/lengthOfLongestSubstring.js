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

  // left and right pointers start at 0
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];

    // if we've seen this char, delete it, and shrink the window inwards from the left
    while(seenChars.has(rightChar)) {
      seenChars.delete(str[left]);
      left++;
    }

    seenChars.add(rightChar);

    // size of window = right - left + 1
    // update maxLen with the size if it's greater than what we've already seen
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
