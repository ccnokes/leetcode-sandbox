// @ts-check
import Interval from "./Interval.js";

/**
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 *
 * @param {Interval[]} intervals
 * @returns {Interval[]}
 */
export default function mergeIntervals(intervals) {
  if (intervals.length < 2) return intervals;

  const merged = [];

  // first sort by start
  intervals.sort((a, b) => a.start - b.start);

  // hold reference to previous
  let start = intervals[0].start;
  let end = intervals[0].end;

  // start at 1 and iterate forward
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    // they overlap
    if (interval.start <= end) {
      end = Math.max(end, interval.end);
    }
    // no overlap
    else {
      merged.push(new Interval(start, end)); // push previous
      start = interval.start;
      end = interval.end;
    }
  }

  // add last
  merged.push(new Interval(start, end));

  return merged;
}

