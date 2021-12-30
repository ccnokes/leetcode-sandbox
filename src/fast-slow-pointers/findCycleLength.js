// @ts-check

import ListNode from "../ListNode.js";

/**
 * @param {ListNode} head
 * @returns {number}
 */
export default function findCycleLength(head) {
  let len = 0;
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found cycle
      fast = fast.next; // move fast forward one
      len++; // start len at 1
      // run around again till they meet and count along the way
      while (fast !== slow) {
        fast = fast.next;
        len++;
      }
      break;
    }
  }

  return len;
}
