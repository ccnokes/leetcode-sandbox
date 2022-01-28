// @ts-check

/**
 *
input:
[['x', 'x', 'x', 'x', 'x'],
 ['x', 'x', 'x', 'x', 'x'],
 ['x', 'x', 'o', 'o', 'o'],
 ['x', 'x', 'o', 'x', 'x'],
 ['x', 'x', 'o', 'x', 'x']]

 paint(3, 3, 'z')
expected:
[['x', 'x', 'x', 'x', 'x'],
 ['x', 'x', 'x', 'x', 'x'],
 ['x', 'x', 'o', 'o', 'o'],
 ['x', 'x', 'o', 'z', 'z'],
 ['x', 'x', 'o', 'z', 'z']]

how do we get to the coords?

go to the coord row
start at the 0 of the row, find first the node that = fill
get the value
change the value of that coord
traverse

 */

/**
 * Given a matrix representing a canvas and x,y coordinates, make it so that the coordinates and surrounding areas
 * "fill" to new color
 *
 * 0(n) time complexity because at worst case, visit every node
 * O(n) space complexity because at worst case, visit every node in call stack(?)
 * @param {string[][]} canvas
 * @param {number} x
 * @param {number} y
 * @param {string} fill
 * @returns {string[][]}
 */
export default function paint(canvas, x, y, fill) {

  let start = canvas[y][x];
  let rowLength = canvas[y].length - 1;
  let colHeight = canvas.length - 1;

  /**
   * @param {number} x
   * @param {number} y
   */
  function visit(x, y) {
    if (canvas[y][x] === start) {
      canvas[y][x] = fill;
      if (x <= rowLength - 1) visit(x + 1, y);
      if (x >= 0 && x <= rowLength - 1) visit(x - 1, y);
      if (y <= colHeight - 1) visit(x, y + 1);
      if (y >= 0 && y <= colHeight - 1) visit(x, y - 1);
    }
  }

  visit(x, y);

  return canvas;
}

export const input = [
  ['x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'o', 'o', 'o'],
  ['x', 'x', 'o', 'x', 'x'],
  ['x', 'x', 'o', 'x', 'x']
];

export const expected = [
  ['x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'o', 'o', 'o'],
  ['x', 'x', 'o', 'z', 'z'], // <-- changes
  ['x', 'x', 'o', 'z', 'z']  // <-- changes
];
