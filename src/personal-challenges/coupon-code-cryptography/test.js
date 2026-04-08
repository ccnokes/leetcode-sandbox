// @ts-check
import test from 'ava';
import { generateCode, verifyCode } from './coupon-code-generator.js';

test('generateCode produces a deterministic code', (t) => {
  t.is(generateCode('CoolCoupon', 'user-123'), 'CoolCoupon_F1E2DD64');
  t.is(generateCode('FunCoupon', 'user-123'), 'FunCoupon_6C61A080');
});

test('generateCode produces different codes for different users', (t) => {
  t.not(
    generateCode('CoolCoupon', 'user-123'),
    generateCode('CoolCoupon', 'user-456'),
  );
});

test('verifyCode returns true for a valid code', (t) => {
  const code = generateCode('CoolCoupon', 'user-123');
  t.true(verifyCode(code, 'user-123'));
});

test('verifyCode returns false for a tampered code', (t) => {
  t.false(verifyCode('CoolCoupon_1AFV123A', 'user-123'));
});

test('verifyCode returns false for a code belonging to a different user', (t) => {
  const code = generateCode('CoolCoupon', 'user-456');
  t.false(verifyCode(code, 'user-123'));
});
