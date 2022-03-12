// @ts-check
import test from 'ava';
import romanNumeralToInt from './romanNumeralToInt.js';
import productExceptSelf from './productExceptSelf.js';

test('romanNumeralToInt', t => {
  t.is(romanNumeralToInt('XIII'), 13);
  t.is(romanNumeralToInt('IV'), 4);
  t.is(romanNumeralToInt('MCMXCIV'), 1994);
  t.is(romanNumeralToInt('LVIII'), 58);
});

test('productExceptSelf', t => {
  t.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
});
