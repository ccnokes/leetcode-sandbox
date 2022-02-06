// @ts-check

import ListNode from '../ListNode.js';

/**
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * Merge in ASC order
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @returns {ListNode}
 */
export default function mergeSorted(head1, head2) {
  if (!head1 || !head2) return head1 || head2;

  let start;
  let next;
  let list1Next;
  let list2Next;

  // determine where to start things
  if (head1.val <= head2.val) {
    start = head1;
    list2Next = head2;
    list1Next = head1.next;
  } else {
    start = head2;
    list2Next = head2.next;
    list1Next = head1;
  }

  next = start;

  // iterate through, insert smaller of two as we go
  while (list1Next && list2Next) {
    if (list1Next.val < list2Next.val) {
      next.next = list1Next;
      list1Next = list1Next.next;
    } else {
      next.next = list2Next;
      list2Next = list2Next.next;
    }
    next = next.next;
  }

  // deal with leftovers by adding to end as-is
  if (list1Next || list2Next) {
    next.next = list1Next || list2Next;
  }

  return start;
}
