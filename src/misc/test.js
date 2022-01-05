import test from 'ava';
import findMedianSortedArrays from './findMedianSortedArrays.js';

test('findMedianSortedArray', t => {
  t.is(findMedianSortedArrays([1, 3], [2]), 2);
  t.is(findMedianSortedArrays([1, 3], [2, 4]), 2.5);
});
