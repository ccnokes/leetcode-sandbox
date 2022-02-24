// @ts-check
import test from 'ava';
import findMedianSortedArrays from './findMedianSortedArrays.js';
import ListNode from '../ListNode.js';
import paint, {input, expected} from './paint.js';
import fibonacciSequence from './fibonacciSequence.js';
import isValidParantheses from './validParantheses.js';
import numUniqueEmails from './numUniqueEmails.js';
import rotationCipher from './rotationCipher.js';


test('findMedianSortedArray', t => {
  t.is(findMedianSortedArrays([1, 3], [2]), 2);
  t.is(findMedianSortedArrays([1, 3], [2, 4]), 2.5);
});

test('ListNode.reverseFrom', t => {
  const list = ListNode.from([1, 2, 3, 4, 5]);
  t.deepEqual(
    ListNode.reverseFrom(list, ListNode.at(list, 1), ListNode.at(list, 3)),
    ListNode.from([1, 4, 3, 2, 5])
  );

  const list2 = ListNode.from([1, 2, 3, 4, 5, 7, 8, 9]);
  t.deepEqual(
    ListNode.reverseFrom(list2, ListNode.at(list2, 2), ListNode.at(list2, 5)),
    ListNode.from([1, 2, 7, 5, 4, 3, 8, 9])
  );
});

test('paint', t => {
  t.deepEqual(paint(input, 3, 3, 'z'), expected);
});

test('fibonacciSequence', t => {
  t.is(fibonacciSequence(12), 144);
});

test('isValidParantheses', t => {
  t.is(isValidParantheses('()(()'), false);
  t.is(isValidParantheses('()'), true);
  t.is(isValidParantheses('()[]{}'), true);
  t.is(isValidParantheses('(()){[]}'), true);
  t.is(isValidParantheses('(())]'), false);
});

test('numUniqueEmails', t => {
  t.is(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]), 2);
});

test('rotationCipher', t => {
  t.is(rotationCipher('Zebra-493?', 3), 'Cheud-726?');
  t.is(rotationCipher('abcdefghijklmNOPQRSTUVWXYZ0123456789', 39), 'nopqrstuvwxyzABCDEFGHIJKLM9012345678');
});

