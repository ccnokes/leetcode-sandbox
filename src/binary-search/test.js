// @ts-check
import test from 'ava';
import orderAgnosticBinarySearch from './orderAgnosticBinarySearch.js';

test('orderAgnosticBinarySearch', t => {
  t.is(orderAgnosticBinarySearch([1, 2, 3, 4, 5, 6, 7], 5), 4);
  t.is(orderAgnosticBinarySearch([5, 2, 1, 0, -1], 2), 1);
});
