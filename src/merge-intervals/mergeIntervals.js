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

// intervals = [[1,4], [3,7], [9,12]]
// intervals = [[1,5], [3,7], [4,6]]
// intervals = [[1,9], [3,8], [4,4]]
/**
 * NOTE account for some edge cases: 
 * [1,9], [4,5] (can fit into each other)
 * [1,4], [4,5] (equal start/end)
 * 
 * @param {[number, number][]} intervals 
 * @returns {[number, number][]}
 */
function mergeIntervalArrays(intervals) {
  // seed with first interval because they're sorted
  let result = [intervals[0]];
  
  // start with next interval
  for (let i = 1; i < intervals.length; i++) {
    const prevInterval = result[result.length - 1];
    const prevIntervalEnd = prevInterval[1];
    const intervalStart = intervals[i][0];
    // if prev interval end is greater than curr start, merge
    if (intervalStart <= prevIntervalEnd) {
      // update end time in prevInterval with this interval's end time if it's greater
      if (intervals[i][1] > prevInterval[1]) {
        prevInterval[1] = intervals[i][1]; 
      }
    }
    // otherwise no overlap, so push to results
    else {
      result.push(intervals[i]);
    }
  }
  
  return result;
}