import test from 'ava';
import removeDuplicates from './removeDuplicates.js';
import squareSorted from './squareSorted.js';
import tripletSumToZero from './tripletSumToZero.js';
import pairWithTargetSum from './pairWithTargetSum.js';

test('removeDuplicates', t => {
  t.is(removeDuplicates([2, 3, 3, 3, 6, 9, 9]), 4);
  t.is(removeDuplicates([2, 2, 2, 11]), 2);
  t.is(removeDuplicates([]), 0);
  t.is(removeDuplicates([2]), 1);
});

test('squareSorted', t => {
  t.deepEqual(squareSorted([]), []);
  t.deepEqual(squareSorted([3]), [9]);
  t.deepEqual(squareSorted([-2, -1, 0, 2, 3]), [0, 1, 4, 4, 9]);
  t.deepEqual(squareSorted([-3, -1, 0, 1, 2]), [0, 1, 1, 4, 9]);
});

test('tripletSumToZero', t => {
  t.deepEqual(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]), [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
});

test('pairWithTargetSum', t => {
  t.deepEqual(pairWithTargetSum([1, 2, 3, 4, 6], 6), [1, 3]);
  t.deepEqual(pairWithTargetSum([2, 5, 9, 11], 11), [0, 2]);
});
