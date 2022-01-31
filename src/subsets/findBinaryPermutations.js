/**

n = 2
----
00
10
01
11
----

result.push 00

for i < n
  len = result.length
  for j < len
    let subset = copy result[j]
    if subset[i] === 0
      subset[i] = 1
    else
      subset[i] = 0
    result.push subset

 */

/**
 * Find every binary combination for n. E.g:
 * n = 2
 * Expected: 00, 01, 10, 11
 *
 * Complexity for both is 2^n because that's how many possibilities there are
 *
 * @param {number} n
 * @returns {string[]}
 */
export default function findBinaryPermutations(n) {
  if (n === 0) return [];

  const result = [new Array(n).fill('0').join('')]; // seed it with initial

  for (let i = 0; i < n; i++) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      let subset = [...result[j]];
      if (subset[i] === '0') {
        subset[i] = '1';
      } else {
        subset[i] = '0';
      }
      result.push(subset.join(''));
    }
  }

  return result;
}
