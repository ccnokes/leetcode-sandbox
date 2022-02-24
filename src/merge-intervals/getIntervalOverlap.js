// @ts-check
import Interval from "./Interval.js";

/**
 * Given a list of sorted intervals that may or may not overlap, find the total amount of overlap on all of them
 *
 * @param {Interval[]} intervals - list of sorted intervals that may or may not overlap
 * @returns {number}
 */
export default function getIntervalOverlap(intervals) {
  let sum = 0;

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    const prev = intervals[i - 1];
    if (prev.end > curr.start) {
      sum += prev.end - curr.start;
    }
  }

  return sum;
}


console.log(getIntervalOverlap([
  new Interval(1, 5),
  new Interval(3, 7),
  new Interval(5, 9),
]));
