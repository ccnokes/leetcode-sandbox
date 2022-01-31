// @ts-check

// 1s are walls
// 0s are open path
// start at (0, 0)
const grid = [
  [0, 0, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0] // <-- exit
];

// can only move right and down
// must be a complete path of adjacent 0s

/**
 *
 * time and space complexity O(N) (I think)
 *
 * @param {number[][]} grid
 * @returns {number[][]} [col, row] coords to take
 */
export default function findPath(grid) {
  const path = [];
  const rowLength = grid[0].length - 1;
  const colHeight = grid.length - 1;

  /**
   * @param {number} col
   * @param {number} row
   */
  function visit(col, row) {
    if (grid[col][row] === 0) {
      path.push([col, row]);
      if (col <= colHeight - 1) visit(col + 1, row); // down
      if (row <= rowLength - 1) visit(col, row + 1); // right
    }
    // found the endpoint
    if (col === colHeight && row === rowLength) {
      path.push([col, row]);
    }
  }

  visit(0, 0);

  return path;
}

console.log(findPath(grid));
