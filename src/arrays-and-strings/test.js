// @ts-check
import test from 'ava';
import romanNumeralToInt from './romanNumeralToInt.js';
import productExceptSelf from './productExceptSelf.js';
import isStringAnagram from './isStringAnagram.js';

test('romanNumeralToInt', t => {
  t.is(romanNumeralToInt('XIII'), 13);
  t.is(romanNumeralToInt('IV'), 4);
  t.is(romanNumeralToInt('MCMXCIV'), 1994);
  t.is(romanNumeralToInt('LVIII'), 58);
});

test('productExceptSelf', t => {
  t.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
});

test('isStringAnagram', t => {
  t.is(isStringAnagram('hello', 'bello'), false);
  t.is(isStringAnagram('listen', 'silent'), true);
  t.is(isStringAnagram('abc', 'bcaa'), false);
});