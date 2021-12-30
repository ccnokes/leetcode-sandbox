// @ts-check
import ListNode from '../ListNode.js';
import findCycleLength from './findCycleLength.js';

/**
 * Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
export default function findCycleStart(head) {
  let len = findCycleLength(head);

  let p1 = head;
  let p2 = null;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = getNext((p1 || p2), len);
  }

  return p1;
}

/**
 * gets next ListNode that's n steps away
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
function getNext(head, n) {
  let i = 0;
  let node = head;
  while (i < n) {
    node = node.next;
    i++;
  }
  return node;
}
