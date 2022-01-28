// @ts-check
import * as HeapMod from 'collections/heap.js';
// @ts-ignore-nextline
const { Heap } = HeapMod.default;

export default class MedianStream {
  // largest number is root
  // if an odd number of elements, maxHeap will have more
  maxHeap = new Heap([], null, (a, b) => a - b); // contains first half of numbers
  // smallest number is root
  minHeap = new Heap([], null, (a, b) => b - a); // contains second half of numbers

  /**
   * @param {number} num
   */
  insertNum(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }
    // balance the two heaps
    // either both the heaps will have equal number of elements or max-heap will have one
    // more element than the min-heap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  /**
   * @returns {number}
   */
  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
}
