// @ts-check

const charset = 'abcdefghijklmnopqrstuvwxyz';

/**
 * @param {string} charSet
 * @returns {Record<string, number>}
 * */
function getCharToCharCodeMap(charSet) {
  return charSet.split('').reduce((aggr, char, index) => {
    aggr[char] = index;
    return aggr;
  }, {});
}

/**
 * @param {Record<any, any>} obj
 * @returns {Record<any, any>}
 */
function invertObj(obj) {
  return Object.keys(obj).reduce((aggr, key) => {
    const val = obj[key];
    aggr[val] = key;
    return aggr;
  }, {});
}

/**
 * @param {string} input
 * @param {number} rotationFactor
 * @returns {string}
 */
export default function rotationalCipher(input, rotationFactor) {
  // will look like: { a: 1, b: 2, ... }. "code" is just an incrementing number, not an ASCII code
  const charToCode = getCharToCharCodeMap(charset);
  // will look like inverse: { 1: a, b: 2 }
  const codeToChar = invertObj(charToCode);

  return input.split('').map(str => {
    // handle numbers
    const int = parseInt(str, 10);
    if (!isNaN(int)) {
      return String((int + rotationFactor) % 10); // use modulo to wrap number around
    }

    // handle strings
    const lowerStr = str.toLowerCase();
    const isUppercase = lowerStr !== str;
    const code = charToCode[lowerStr];

    // it's not in our charset, so it may be a symbol
    if (code === undefined) return str;

    const nextCharCode = (code + rotationFactor) % charset.length; // use modulo to wrap char around the charset
    const nextChar = codeToChar[nextCharCode];
    return isUppercase ? nextChar.toUpperCase() : nextChar;
  }).join('');
}
