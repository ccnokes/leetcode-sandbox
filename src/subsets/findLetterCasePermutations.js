// @ts-check

/**
Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52"
*/

/**
 * Given a string, find all of its permutations preserving the character sequence but changing case.
 * time and space complexity: O(N * 2^N)
 *
 * @param {string} str
 * @returns {string[]}
 */
export default function findLetterCasePermutations(str) {
  const result = [str]; // start with the initial string

  for (let i = 0; i < str.length; i++) {
    // skip numbers
    if (/\d/.test(str[i])) {
      continue;
    }

    let n = result.length; // we're going to for each over every result and clone and add to it

    for (let j = 0; j < n; j++) {
      let chars = result[j].split('');
      // flip it as needed
      if (chars[i] === chars[i].toLowerCase()) {
        chars[i] = chars[i].toUpperCase();
      } else {
        chars[i] = chars[i].toLowerCase();
      }
      result.push(chars.join(''));
    }
  }

  return result;
}

/**

ad52
Ad52
aD52
AD52

-----

result.push ad52

for a
if not uppercase, toUpperCase()
else, toLowerCase()
result.push

for d
if not uppercase, toUpperCase()
else, toLowerCase()
result.push

for a and d ???

-----
ad52
Ad52
aD52
AD52
-----
result.push ad52

for i < str.length
  n = result.length
  for j < n
    let subset = copy result[j]
    if subset[i] not uppercase, toUpperCase()
    else, toLowerCase()
    result.push

 */
