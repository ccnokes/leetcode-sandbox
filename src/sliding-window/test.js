import test from 'ava';
import { twoSum, twoSumSorted } from './twoSum.js';
import addTwoNumbers, { arrToLL, LLtoString } from './addTwoNumbers.js';
import lengthOfLongestSubstring from './lengthOfLongestSubstring.js';
import findMaxSumSubArray, {findMaxSumSubArray_brute} from './findMaxSumSubArray.js';
import findSmallestSubArrayWithGivenSum from './findSmallestSubArrayWithGivenSum.js';
import longestSubstringWithKDistinct from './longestSubstringWithKDistinct.js';
import maxConsecutiveOnes, { maxConsecutiveOnes_brute } from './maxConsecutiveOnes.js';
import fruitsIntoBaskets from './fruitsIntoBaskets.js';
import maxNumberVowels from './maxVowels.js';
import longestCommonPrefix from './longestCommonPrefix.js';

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

test('fruitsIntoBaskets', t => {
  t.is(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']), 3);
  t.is(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']), 5);
  t.is(fruitsIntoBaskets([]), 0);
  t.is(fruitsIntoBaskets(['A']), 1);
});

test('maxNumberVowels', t => {
  t.is(maxNumberVowels('leetcode', 3), 2);
  t.is(maxNumberVowels('aeiou', 2), 2);
  t.is(maxNumberVowels('abciiidef', 3), 3);
});

test('longestCommonPrefix', t => {
  t.is(longestCommonPrefix(["flower","flow","flight"]), 'fl');
  t.is(longestCommonPrefix(["dog","racecar","car"]), '');
  t.is(longestCommonPrefix(["flower","fkow"]), 'ow');
})