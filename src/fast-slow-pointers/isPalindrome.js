// @ts-check
import ListNode from '../ListNode.js';
import findMiddle from './findMiddle.js';

/**
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
 * NOTE doesn't use O(1) space complexity because it copies half the list. Blegh.
 *
 * @param {ListNode} head
 * @returns {boolean}
 */
export default function isPalindrome(head) {
  let start = head;
  let middle = findMiddle(head);
  let reversed = ListNode.reverse(middle.next);

  while (start !== null && reversed !== null) {
    if (start.value !== reversed.value) {
      return false;
    }
    start = start.next;
    reversed = reversed.next;
  }

  return true;
}
