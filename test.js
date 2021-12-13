import test from 'ava';
import { twoSum, twoSumSorted } from './src/twoSum.js';
import addTwoNumbers, { arrToLL, LLtoString } from './src/addTwoNumbers.js';
import lengthOfLongestSubstring from './src/lengthOfLongestSubstring.js';
import findMaxSumSubArray, {findMaxSumSubArray_brute} from './src/findMaxSumSubArray.js';

// https://leetcode.com/problems/two-sum
test('twoSum', t => {
  t.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  t.deepEqual(twoSumSorted([2, 3, 3.5, 4, 7, 11, 15], 7), [1, 3]);
});

// https://leetcode.com/problems/add-two-numbers
test('addTwoNumbers', t => {
  t.is(
    LLtoString(
      addTwoNumbers(arrToLL([2, 4, 3]), arrToLL([5, 6, 4]))
    ),
    '708'
  );

  t.is(
    LLtoString(
      addTwoNumbers(arrToLL([9, 9, 9, 9, 9, 9, 9]), arrToLL([9, 9, 9, 9]))
    ),
    '89990001'
  );
});

test('lengthOfLongestSubstring', t => {
  t.is(lengthOfLongestSubstring('abcabcbb'), 'abc');
  t.is(lengthOfLongestSubstring('bb'), 'b');
  t.is(lengthOfLongestSubstring('pwwkew'), 'wke');
});

test('findMaxSumSubArray', t => {
  t.is(findMaxSumSubArray([2, 1, 5, 1, 3, 2], 3), 9); // max sub-array is [5, 1, 3]
  t.is(findMaxSumSubArray([2, 3, 4, 1, 5], 2), 7); // max sub-array is [3, 4]

  t.is(findMaxSumSubArray_brute([2, 1, 5, 1, 3, 2], 3), 9);
});
