// @ts-check
import Interval from "./Interval.js";

/**
 * Given a list of non-overlapping intervals sorted by their start time, insert a given
 * interval at the correct position and merge all necessary intervals to produce a list
 * that has only mutually exclusive intervals.
 *
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @returns {Interval[]}
 */
export default function insertInterval(intervals, newInterval) {

  let start = newInterval.start;
  let end = newInterval.end;
  let spliceStart = null;
  let spliceEnd = null;

  for (let i = 0; i < intervals.length; i++) {
    const curr = intervals[i];

    if (curr.end < start) {
      continue;
    }
    if (curr.start <= end) {
      spliceStart = spliceStart == null ? i : Math.min(spliceStart, i);
      spliceEnd = spliceEnd == null ? i : Math.max(spliceEnd, i);
      end = Math.max(end, curr.end);
      start = Math.min(start, curr.start);
    }
  }

  intervals.splice(spliceStart, spliceEnd - spliceStart || 1, new Interval(start, end));

  return intervals;
}


// export default function insertInterval(intervals, newInterval) {

//   let start = newInterval.start;
//   let end = newInterval.end;
//   let spliceStart = null;
//   let spliceEnd = null;

//   for (let i = 0; i < intervals.length; i++) {
//     const curr = intervals[i];

//     // this is where we start inserting
//     if (start <= curr.start) {
//       spliceStart = i;
//     }
//     // this is where we end inserting
//     if (end <= curr.end) {
//       spliceEnd = i;
//       end = Math.max(end, curr.end);
//     }

//     if (spliceStart !== null && spliceEnd !== null) {
//       break;
//     }
//   }

//   intervals.splice(spliceStart, spliceEnd - spliceStart, new Interval(start, end));

//   return intervals;
// }
