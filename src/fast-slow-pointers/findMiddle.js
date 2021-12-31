// @ts-check
import ListNode from '../ListNode.js';

/**
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 * If the total number of nodes in the LinkedList is even, return the second middle node.
 *
 * Solution: the fast pointer moves twice as fast, so it'll be on the end when the slow is on the middle
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
export default function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
