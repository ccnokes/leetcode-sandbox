// @ts-check
import * as HeapMod from 'collections/heap.js';
// @ts-ignore-nextline
const { Heap } = HeapMod.default;

/**
You're given a list of n integers arr[0..(n-1)].
You must compute a list output[0..(n-1)] such that, for each index i
(between 0 and n-1, inclusive), output[i] is equal to the product of the three largest elements out of arr[0..i] (or equal to -1 if i < 2, as arr[0..i] then includes fewer than three elements).

Note that the three largest elements used to form any product may have the same values as one another, but they must be at different indices in arr.
*/

// process
// edge case checks
// init max heap
// for each el, starting at 2, push to heap (log N time)
//    peek or pop 3
//    multiply them
//    push to result[i]


/**
 *
 * I think this is O(N * log N)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export default function findMaxProduct(arr) {
  if (arr.length < 3) return new Array(arr.length).fill(-1);

  const result = [-1, -1];
  const heap = new Heap(arr.slice(0, 2), null, (a, b) => a - b); // max heap, largest value on top

  for (let i = 2; i < arr.length; i++) {
    let curr = arr[i];

    // add to the heap
    // this is O(log N)
    heap.push(curr);

    // get the top 3 vals
    // this is ineffecient, is there a better way?
    // seems like you could have a method that peeks the top node and it's left and right in O(1)
    const vals = [heap.pop(), heap.pop(), heap.pop()];

    // multiply them to each other
    const product = vals.reduce((aggr, val) => aggr * val, 1);

    // set the value in result
    result.push(product);

    // now take those values and put them back on the heap
    vals.forEach(val => heap.push(val));
  }

  return result;
}
