import test from "ava";
import insertInterval from "./insertInterval.js";
import Interval from "./Interval.js";
import mergeIntervals from './mergeIntervals.js';

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
