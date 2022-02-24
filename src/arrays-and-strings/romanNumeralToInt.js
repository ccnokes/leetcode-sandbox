// @ts-check

/*
Considerations/complexities:
- if a smaller numeral is placed in front of a larger one, it's subtracted, otherwise they're added
- this might mean we need two pointers or something? Or just a ref to the prev
- there are only six instances where subtraction is used so maybe another hashmap of those special cases

Solution:
hashmap of numerals -> int value
let sum = 0
take two at a time
  if
    matches special combo, subtract
    move forward 2
  else
    add the first to sum
    move forward 1
*/

const numeralVals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Given a roman numeral, convert it to an integer.
 * O(N) time complexity
 *
 * @param {string} str
 * @returns {number}
 */
export default function romanNumeralToInt(str) {
  let sum = 0;

  let i = str.length - 1;
  while (i >= 0) {
    const char = str[i];
    const nextChar = str[i - 1];

    // if next is less than current, we substract
    if (numeralVals[nextChar] < numeralVals[char]) {
      sum += numeralVals[char] - numeralVals[nextChar];
      i -= 2; // go forward 2
    }
    // add it
    else {
      sum += numeralVals[char];
      i -= 1;
    }
  }

  return sum;
}

