// @ts-check
import test from 'ava';
import findAllSubsets from './findAllSubsets.js';
import findPermutations from './findPermutations.js';
import findLetterCasePermutations from './findLetterCasePermutations.js';
import findBinaryPermutations from './findBinaryPermutations.js';

test('findAllSubsets', t => {
  t.deepEqual(findAllSubsets([1, 5, 3]), [[], [1], [5], [1, 5], [3], [1, 3], [5, 3], [1, 5, 3]]);
});

test('findPermutations', t => {
  const expected = [
    [5, 3, 1],
    [3, 5, 1],
    [3, 1, 5],
    [5, 1, 3],
    [1, 5, 3],
    [1, 3, 5]
  ];
  t.deepEqual(findPermutations([1, 3, 5]), expected);
});

test('findLetterCasePermutations', t => {
  t.deepEqual(findLetterCasePermutations('ab7c'), [
    'ab7c', 'Ab7c',
    'aB7c', 'AB7c',
    'ab7C', 'Ab7C',
    'aB7C', 'AB7C'
  ]);
});

test('findBinaryPermutations', t => {
  t.deepEqual(findBinaryPermutations(2), ['00', '10', '01', '11']);
});
