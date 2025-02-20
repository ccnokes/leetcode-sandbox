// @ts-check

/**
 * Given a string, determine whether it's a palindrome or not
 * 
 * Time complexity: O(N)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
export default function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}
