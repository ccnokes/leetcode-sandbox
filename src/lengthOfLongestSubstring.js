/**
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;
  let longest;

  for (let i = 0; i < s.length; i++) {
    let found = new Set().add(s[i]);
    if (!longest) longest = found;

    for (let j = i + 1; j < s.length; j++) {
      let next = s[j];
      if (!found.has(next)) {
        found.add(s[j]);
        if (found.size > longest.size) {
          longest = found;
        }
      } else {
        found = new Set().add(s[j]); // reset, starting with current
      }
    }
  }
  return Array.from(longest).join('');
}
