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

  // both pointers start at head
  // fast will go ahead by 2, slow by 1
  // if they don't meet and fast hits the end, no cycle
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found cycle because the pointers met
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
