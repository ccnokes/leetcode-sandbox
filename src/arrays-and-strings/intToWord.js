// @ts-check

/*
Convert a non-negative integer num to its English words representation.
Constraints: 0 <= num <= 2^31 - 1

num = 123
"One Hundred Twenty Three"

----------------

hashmap of each 1-9, teens, 20s+, 100s, 1000s, etc up to billion
foreach "level", modulo and if the number changed, push to a string

look at num length
*/

const numsToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
};

/**
 *
 * @param {number} num
 * @returns {string}
 */
export default function intToWord(num) {
  let result = '';
  const numStr = String(num);
  let i = numStr.length - 1;

  while (i >= 0) {

  }


  return result;
}

/**
 * @param {number} num
 * @returns {string}
 */
function oneDigit(num) {
  if (num === 0) return '';
  return numsToWords[num];
}

/**
 * @param {number} num
 * @returns {string}
 */
function twoDigits(num) {
  if (num < 10) {
    return oneDigit(num);
  }
  if (num < 20) {
    return numsToWords[num];
  }
  else {
    const tensBase = Math.floor(num / 10) * 10;
    const tens = numsToWords[tensBase];
    const ones = oneDigit(num % 10);
    return [tens, ones].filter(str => !!str).join(' ');
  }
}

/**
 * @param {number} num
 * @returns {string}
 */
function threeDigits(num) {
  const hundredsBase = Math.floor(num / 100);
  const hundreds = `${numsToWords[hundredsBase]} ${numsToWords[100]}`;
  const remainderStr = twoDigits(num % 100)
  return `${hundreds} ${remainderStr}`;
}

console.log(threeDigits(937))
