// @ts-check
import test from 'ava';
import { findKthLargest } from './findKthLargest.js';
import {thirdMax} from './thirdDistinctMaximum.js';

test('findKthLargest', t => {
  t.is(findKthLargest([3,2,1,5,6,4], 2), 5);
  t.is(findKthLargest([100, 1, 5, 6, 123, 2000, 4, 3], 5), 5);
});

test('thirdMax', t => {
  t.is(thirdMax([1, 5, 3, 6, 2, 6]), 3);
});