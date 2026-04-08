// @ts-check

/**
 * How could we generate a coupon code that is unique to the user and the coupon name,
 * but also verifiable without storing any state on the server?
 * We can use a secret key and a hashing algorithm to generate a code that is based
 * on the coupon name and the user ID. This way, we can verify the code by regenerating
 * it with the same inputs and comparing it to the provided code.
 */

import { createHmac } from 'node:crypto';

const SECRET = '7a2e4639-cc6f-444f-9de9-db87c40f184d'; // crypto.randomUUID();

/**
 * Generates a coupon code based on the coupon name and payload.
 * @param {string} couponName
 * @param {string} userId
 * @returns {string}
 */
function generateCode(couponName, userId) {
  const hmac = createHmac('sha256', SECRET);
  hmac.update(`${couponName}:${userId}`);
  return `${couponName}_${hmac.digest('hex').slice(0, 8).toUpperCase()}`;
}

/**
 * Verifies a coupon code by recomputing the HMAC from the coupon name and userId.
 * @param {string} code
 * @param {string} userId
 * @returns {boolean}
 */
function verifyCode(code, userId) {
  const [couponName] = code.split('_');
  const expectedCode = generateCode(couponName, userId);
  return expectedCode === code;
}

export { generateCode, verifyCode };
