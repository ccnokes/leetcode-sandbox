// @ts-check
import * as HeapMod from 'collections/heap.js';
// @ts-ignore-nextline
const { Heap } = HeapMod.default;

/**
 * 
 * @param {number[][]} lists - sorted
 * @param {number} k 
 * @returns {number}
 */
export default function findKSmallestNumber(lists, k) {
  let kSmallest = 0;

  // init min heap
  // iterate through every list, push to min heap
  // pop min heap k times
  // return

  return kSmallest;
}

/**
 * nlog(n) because that's the typical complexity of sorting 
 * @param {number[][]} lists - sorted
 * @param {number} k 
 * @returns {number}
 */
function findKSmallestNumber_naive(lists, k) {
  // TODO handle edge cases

  // concat lists
  // .sort()
  // slice/splice k index

  const combinedList = lists.reduce((aggr, list) => {
    return aggr.concat(list);
  }, []);

  combinedList.sort();

  return combinedList[k - 1];
}