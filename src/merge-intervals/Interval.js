// @ts-check

export default class Interval {
  /**
   * @param {number} start
   * @param {number} end
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

/**
 * @param {[number, number][]} arr
 * @returns {Interval[]}
 */
export function fromArr(arr) {
  return arr.map(([start, end]) => new Interval(start, end));
}
