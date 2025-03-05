// @ts-check

/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * 
 * @param {string[][]} grid 
 * @returns {number}
 */
export default function numOfIslands(grid) {
  let islandCount = 0;
  const visitedNodes = new Set();

  for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      const cellKey = getCellKey(rowIndex, colIndex);
      if (grid[rowIndex][colIndex] === '1' && !visitedNodes.has(cellKey)) {
        islandCount++;
        search(grid, rowIndex, colIndex, visitedNodes);
      }
    }
  }
  return islandCount;
}

/**
 * 
 * @param {string[][]} grid 
 * @param {number} rowIndex
 * @param {number} colIndex
 * @param {Set<string>} visitedNodes 
 */
function search(grid, rowIndex, colIndex, visitedNodes) {
  const cellKey = getCellKey(rowIndex, colIndex);
  if (
    rowIndex < 0 || 
    rowIndex >= grid.length ||
    colIndex < 0 || 
    colIndex >= grid[0].length || 
    grid[rowIndex][colIndex] === '0' || 
    visitedNodes.has(cellKey)
  ) {
    return;
  }
  
  visitedNodes.add(cellKey);

  search(grid, rowIndex - 1, colIndex, visitedNodes);
  search(grid, rowIndex + 1, colIndex, visitedNodes);
  search(grid, rowIndex, colIndex - 1, visitedNodes);
  search(grid, rowIndex, colIndex + 1, visitedNodes);
}

/**
 * @param {number} rowIndex
 * @param {number} colIndex
 * @returns {string}
 */
function getCellKey(rowIndex, colIndex) {
  return `${rowIndex},${colIndex}`;
}

// approach
// linear scan
// if we find "1", start recursive search
// keep track of visited nodes
// basically every triggered search is the num of islands 
// because when we search, we're expanding out in all directions till every
// contiguous "1" is visited

// think of it as (row, column)
// const grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ];
// console.log(numOfIslands(grid)); // should be 1
