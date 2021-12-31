import test from 'ava';
import hasCycle from './hasCycle.js';
import ListNode from '../ListNode.js';
import findCycleLength from './findCycleLength.js';
import findCycleStart from './findCycleStart.js';
import isHappyNumber from './happyNumber.js';
import findMiddle from './findMiddle.js';
import isPalindrome from './isPalindrome.js';

const cyclicList = ListNode.from([1, 2, 3, 4, 5, 6]);
// the 6 points to the 3
cyclicList.next.next.next.next.next.next = cyclicList.next.next;


test('hasCycle', t => {
  t.is(hasCycle(cyclicList), true);
  t.is(hasCycle(ListNode.from([1, 2, 3])), false);
});

test('findCycleLength', t => {
  t.is(findCycleLength(cyclicList), 4);
});

test('findCycleStart', t => {
  t.is(findCycleStart(cyclicList), cyclicList.next.next);
});

test('isHappyNumber', t => {
  t.is(isHappyNumber(19), true);
  t.is(isHappyNumber(2), false);
  t.is(isHappyNumber(7), true);
  t.is(isHappyNumber(116), false);
});

test('findMiddle', t => {
  const list = ListNode.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  t.is(findMiddle(list), ListNode.at(list, 4)); // the `5` node is the middle, 4th index

  const list2 = ListNode.from([1, 2, 3, 4]);
  t.is(findMiddle(list2), ListNode.at(list2, 2)); // the `3` node is the middle, 2nd index
});

test('isPalindrome', t => {
  t.is(isPalindrome(ListNode.from([2, 4, 6, 4, 2])), true);
  t.is(isPalindrome(ListNode.from([2, 4, 6, 4, 2, 2])), false);
});
