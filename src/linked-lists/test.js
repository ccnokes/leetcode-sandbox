// @ts-check
import test from 'ava';
import mergeSorted from './mergeSorted.js';
import ListNode from '../ListNode.js';

test('mergeSorted', t => {
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);

  const list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);

  const result = mergeSorted(list1, list2);

  t.deepEqual(Array.from(result), [1, 1, 2, 3, 4, 4]);
});

test('mergeSorted - again', t => {
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);
  list1.next.next.next = new ListNode(5);
  list1.next.next.next.next = new ListNode(10);

  const list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);

  const result = mergeSorted(list1, list2);

  t.deepEqual(Array.from(result), [1, 1, 2, 3, 4, 4, 5, 10]);
});
