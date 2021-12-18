import test from 'ava';
import { twoSum, twoSumSorted } from './src/twoSum.js';
import addTwoNumbers, { arrToLL, LLtoString } from './src/addTwoNumbers.js';
import lengthOfLongestSubstring from './src/lengthOfLongestSubstring.js';
import findMaxSumSubArray, {findMaxSumSubArray_brute} from './src/findMaxSumSubArray.js';
import findSmallestSubArrayWithGivenSum from './src/findSmallestSubArrayWithGivenSum.js';
import longestSubstringWithKDistinct from './src/longestSubstringWithKDistinct.js';
import maxConsecutiveOnes, { maxConsecutiveOnes_brute } from './src/maxConsecutiveOnes.js';

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
  t.is(lengthOfLongestSubstring('abcabcbb'), 3);
  t.is(lengthOfLongestSubstring('bb'), 1);
  t.is(lengthOfLongestSubstring('pwwkew'), 3);
  t.is(lengthOfLongestSubstring(' '), 1);
  t.is(lengthOfLongestSubstring('au'), 2);
});

test('findMaxSumSubArray', t => {
  t.is(findMaxSumSubArray([2, 1, 5, 1, 3, 2], 3), 9); // max sub-array is [5, 1, 3]
  t.is(findMaxSumSubArray([2, 3, 4, 1, 5], 2), 7); // max sub-array is [3, 4]

  t.is(findMaxSumSubArray_brute([2, 1, 5, 1, 3, 2], 3), 9);
});

test('findSmallestSubArrayWithGivenSum', t => {
  t.is(findSmallestSubArrayWithGivenSum([2, 1, 5, 2, 3, 2], 7), 2);
  t.is(findSmallestSubArrayWithGivenSum([2, 1, 5, 2, 8], 7), 1);
  t.is(findSmallestSubArrayWithGivenSum([3, 4, 1, 1, 6], 8), 3);
});

test('longestSubstringWithKDistinct', t => {
  t.is(longestSubstringWithKDistinct('araaci', 2), 4);
  t.is(longestSubstringWithKDistinct('araaci', 1), 2);
  t.is(longestSubstringWithKDistinct('cbbebi', 3), 5);
  t.is(longestSubstringWithKDistinct('cbbebi', 10), 6);
});

test('maxConsecutiveOnes_brute', t => {
  t.is(maxConsecutiveOnes_brute([0, 0, 0, 0], 0), 0);
  t.is(maxConsecutiveOnes_brute([1, 0, 1], 2), 3);
  t.is(maxConsecutiveOnes_brute([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
  t.is(maxConsecutiveOnes_brute([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10);
  t.is(maxConsecutiveOnes_brute([1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 3), 10);
});

test('maxConsecutiveOnes', t => {
  t.is(maxConsecutiveOnes([0, 0, 0, 0], 0), 0);
  t.is(maxConsecutiveOnes([1, 0, 1], 2), 3);
  t.is(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
  t.is(maxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10);
  t.is(maxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 3), 10);
});
