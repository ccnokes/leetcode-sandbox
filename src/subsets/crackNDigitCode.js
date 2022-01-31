/**

n digits for the code
0-9 for each digit
digits can repeat
code must be n digits long

if n = 4, 4 places, 10 numbers possible, so 10^4 combos

n = 2
----
00
10
11
01
----

result.push 00

for i < n
  len = result.length
  for j < len
    subset = copy result[j]
    for k < n
      if (k != i)
        subset[i] = k
        result.push

 */

/**
 *
 * @param {number} n - number of digits
 * @returns {string[]}
 */
export default function crackNDigitCode(n) {
  const result = [new Array(n).fill('0').join('')];

  for (let i = 0; i < n; i++) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      let subset = [...result[j]];
      for (let k = 0; k < 10; k++) {
        if (subset[i] !== String(k)) {
          subset[i] = String(k);
          result.push(subset.join(''));
        }
      }
    }
  }

  return result;
}

// console.log(
//   crackNDigitCode(4)
// );

// same as above but as an infinite generator function that doesn't hold the whole set in memory
// it doesn't work 100% yet
function* crackNDigitCodeGen(n) {
  let code = new Array(n).fill('0');
  let lastChanged = 0;

  while (true) {
    // yield first, so we start at 00, compute next later
    yield code.join('');

    let curr = parseInt(code[lastChanged]);
    let nextDigit = (curr + 1) % 10; // wrap it around 100
    if (curr + 1 < 10) {
      code[lastChanged] = String(nextDigit);
    } else { // if we went beyond 10, move to next place
      lastChanged = lastChanged + 1 > code.length - 1 ? 0 : lastChanged + 1;
      code[lastChanged] = String(nextDigit);
    }
  }
}
const gen = crackNDigitCodeGen(2);
for (let n = 0; n < 100; n++) {
  console.log(gen.next().value);
}

