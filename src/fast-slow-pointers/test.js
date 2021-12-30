import test from 'ava';
import hasCycle from './hasCycle.js';
import ListNode from '../ListNode.js';
import findCycleLength from './findCycleLength.js';
import findCycleStart from './findCycleStart.js';
import isHappyNumber from './happyNumber.js';

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
