// @ts-check
import ListNode from '../ListNode.js';

/**
 * @param {ListNode} head
 * @returns {boolean}
 */
export default function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; // two steps ahead
    slow = slow.next;
    if (slow === fast) { // found a cycle
      return true;
    }
  }

  return false;
}


/**
 * This version is simpler I think but uses O(n) space. Probably runs faster than the canonical solution though.
 * @param {ListNode} head
 * @returns {boolean}
 */
export function hasCycle_alt(head) {
  const seen = new Set();
  let curr = head;
  while (curr != null) {
    if (!seen.has(curr.next)) {
      return true;
    }
    seen.add(curr);
    curr = curr.next;
  }
  return false;
}
