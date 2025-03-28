// @ts-check
import test from 'ava';
import orderAgnosticBinarySearch from './orderAgnosticBinarySearch.js';
import findCeiling from './findCeiling.js';
import binarySearch from './binarySearch.js';

test('orderAgnosticBinarySearch', t => {
  t.is(orderAgnosticBinarySearch([1, 2, 3, 4, 5, 6, 7], 5), 4);
  t.is(orderAgnosticBinarySearch([5, 2, 1, 0, -1], 2), 1);
});

test('findCeiling', t => {
  t.is(findCeiling([4, 6, 10], 6), 1);
  t.is(findCeiling([4, 6, 10], 17), -1);
  t.is(findCeiling([4, 6, 10], -1), 0);
  t.is(findCeiling([1, 3, 8, 10, 15], 12), 4);
});

test('binarySearch', t => {
  t.is(binarySearch([1,2,3,4,5], 4), 3);
  t.is(binarySearch([1, 5], 4), -1);
  t.is(binarySearch([10, 20, 450, 1000], 20), 1);
});
