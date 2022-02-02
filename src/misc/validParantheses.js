// @ts-check

/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

/**
 *
 * time complexity: O(n) because it's just a linear search of the array
 * space complexity: O(n) because in the worst case our stack would look like '(((('. Other internal structures are constant.
 *
 * @param {string} str
 * @returns {boolean}
 */
export default function isValidParantheses(str) {
  const stack = [];
  const closers = new Set([')', '}', ']']);
  const matches = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    // push open parans to stack
    if (!closers.has(curr)) {
      stack.push(curr);
    }
    // if it's a closer, pop and compare
    else {
      const opener = stack.pop();
      // no matching opener found
      if (opener == null || matches[opener] !== curr) return false;
    }
  }

  // all opening parans should have had a matching closer that popped it off
  // so if there's anything left in the stack, it's invalid
  return stack.length === 0;
}
