/**
 * Set contains these methods now but sometimes it comes up that you need to implement it yourself
 */

// return new set containing only elements in all the sets
function intersect<T = unknown>(...sets: Set<T>[]) {
  return sets.reduce((aggr, set) => {
    // filter out elements not in set
    // by the end, we'll be left with only elements in all sets
    return new Set([...aggr].filter((item) => set.has(item)));
  });
}

console.log(
  intersect(new Set([1, 2, 3, 4]), new Set([2, 3, 4]), new Set([3, 4, 5]))
);

// return new set containing all elements in all the sets
function union<T = unknown>(...sets: Set<T>[]) {
  return sets.reduce((aggr, set) => {
    // spread in current and aggr, dupes automatically removed
    return new Set([...aggr, ...set]);
  });
}

console.log(union(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5]))); // 1,2,3,4,5

// TODO
// symmetric difference
// difference
// subset
// superset
// disjoint
