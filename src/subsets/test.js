// @ts-check
import test from 'ava';
import findAllSubsets from './findAllSubsets.js';

test('findAllSubsets', t => {
  t.deepEqual(findAllSubsets([1, 5, 3]), [[], [1], [5], [1, 5], [3], [1, 3], [5, 3], [1, 5, 3]]);
});
