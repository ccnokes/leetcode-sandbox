// @ts-check

/**
 * Given two strings str1 and str2, determine if str2 is an anagram of str1 and return true if it is, and false otherwise.
 * An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original 
 * letters exactly once. For example, the words listen and silent are anagrams because they use the same letters with 
 * the same frequency, but in a different order.
 * 
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export default function isStringAnagram(str1, str2) {
  // if strings are different lengths, return false
  if (str1.length !== str2.length) {
    return false;
  }

  // NOTE an even more efficient solution would be to use one map and increment for str1 and decrement for str2.
  // at the end, all counts should equal 0
  const str1CharCount = new Map();
  const str2CharCount = new Map();

  for(let i = 0; i < str1.length; i++) {
    const str1Char = str1[i];
    const str2Char = str2[i];
    str1CharCount.set(str1Char, (str1CharCount.get(str1Char) ?? 0) + 1);
    str2CharCount.set(str2Char, (str2CharCount.get(str2Char) ?? 0) + 1);
  }

  for(const key of str1CharCount.keys()) {
    if (str1CharCount.get(key) !== str2CharCount.get(key)) {
      return false;
    }
  }

  return true;
}

// overall process:
// iterate each string
// count char frequencies in maps
// iterate maps, check each char frequency is same
// O(n)


/**
* O(n log n) solution that's easier
* 
* @param {string} str1
* @param {string} str2
* @return {boolean}
*/
function isStringAnagramEasy(str1, str2) {
  // if strings are different lengths, return false
  if (str1.length !== str2.length) {
    return false;
  }

  // sort both strings (2 * nlogn), check each char or convert to string and check strings
  const str1Sorted = Array.from(str1).sort().join('');
  const str2Sorted = Array.from(str2).sort().join('');

  return str1Sorted === str2Sorted;
}
