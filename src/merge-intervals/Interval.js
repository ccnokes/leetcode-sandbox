// @ts-check

export default class Interval {
/**
 * @param {[number, number][]} arr
 * @returns {Interval[]}
 */
  static fromArr(arr) {
    return arr.map(([start, end]) => new Interval(start, end));
  }

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

