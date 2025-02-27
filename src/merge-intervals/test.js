import test from "ava";
import insertInterval from "./insertInterval.js";
import Interval from "./Interval.js";
import mergeIntervals from './mergeIntervals.js';
import findMaxConcurrent from "./findMaxConcurrent.js";

test('mergeIntervals', t => {
  t.deepEqual(
    mergeIntervals(
      Interval.fromArr([[1, 4], [2, 5], [3, 4], [7, 9]])
    ),
    Interval.fromArr([[1, 5], [7, 9]])
  );

  t.deepEqual(
    mergeIntervals(
      Interval.fromArr([[1, 3], [2, 6], [8, 10], [15, 18]])
    ),
    Interval.fromArr([[1, 6], [8, 10], [15, 18]])
  );

  t.deepEqual(
    mergeIntervals(
      Interval.fromArr([[1, 4], [4, 5]])
    ),
    Interval.fromArr([[1, 5]])
  );
});

test('findMaxConcurrent', t => {
  const testIntervals1 = [
      { start: 1, end: 5, id: 1 },
      { start: 2, end: 6, id: 2 },
      { start: 3, end: 7, id: 3 },
      { start: 8, end: 10, id: 4 }
  ];

  const testIntervals2 = [
      { start: 1, end: 3, id: 1 },
      { start: 4, end: 5, id: 2 },
  ];

  const testIntervals3 = [
      { start: 1, end: 10, id: 1 },
      { start: 2, end: 3, id: 2 },
      { start: 4, end: 5, id: 3 },
      { start: 6, end: 7, id: 4 }
  ];

  t.deepEqual(
    findMaxConcurrent(testIntervals1),
    { maxConcurrent: 3, concurrentIntervalIds: [1, 2, 3] }
  );

  t.deepEqual(
    findMaxConcurrent(testIntervals2),
    { maxConcurrent: 0, concurrentIntervalIds: [] }
  );

  t.deepEqual(
    findMaxConcurrent(testIntervals3),
    { maxConcurrent: 2, concurrentIntervalIds: [1, 2] }
  );
});

// test('insertInterval', t => {
//   t.deepEqual(
//     insertInterval(fromArr([
//       [1, 3],
//       [5, 7],
//       [8, 12]
//     ]), new Interval(4, 6)),
//     fromArr([[1, 3], [4, 7], [8, 12]])
//   );

//   t.deepEqual(
//     insertInterval(fromArr([
//       [1, 3],
//       [5, 7],
//       [8, 12]
//     ]), new Interval(4, 10)),
//     fromArr([[1, 3], [4, 12]])
//   );
// });
