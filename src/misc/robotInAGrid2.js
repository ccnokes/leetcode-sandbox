/*
There is a robot at location (0, 0) of a 10x10 grid of tiles. Each tile can be one of 8 different colors: (0, 1, ... 7).
There is a star at a known location (marked with the color -1) on the grid. You can program the robot by giving it a lookup
table of color to direction. The robot will sense the color of the tile it is currently on, and move in the
direction (Up, Down, Left, or Right) specified by the lookup table you provided. Output a lookup table that guides the
robot to the star, if such a table is possible.


Small Example Grid:


0,  1,  0,  0
0,  1, -1,  3
0,  0,  0,  2
0,  0,  0,  0

0: Right, 1: Down, 2: Up, 3: Left

*/

/**
* NOTE this is not the ideal solution. Ideal solution would use a backtracking algorithm I think
*
* @param {number[][]}
* @returns { {number: string} | undefined }
*/
// function findStarInstructions(grid) {

//   // find all the permutations in a list
//   const permutations = getAllPermutations(); // Array<{}>
//   const gridLength = grid[0].length - 1;
//   const gridHeight = grid.length - 1;

//   function right(currCol) {
//     if (currCol < gridLength) {
//       return currCol + 1;
//     } else {
//       return -1;
//     }
//   }

//   function left(currCol) {
//     if (currCol > 0) {
//       return currCol - 1;
//     } else {
//       return -1;
//     }
//   }

//   function up(currRow) {
//     if (currRow > 0) {
//       return currRow - 1;
//     } else {
//       return -1;
//     }
//   }

//   function down(currRow) {
//     if (currRow < gridHeight) {
//       return currRow + 1;
//     } else {
//       return -1;
//     }
//   }

//   function visit(instructions, col, row, seenCells) {
//     let curr = grid[col][row];

//     // we found it
//     if (curr === -1) {
//       return instructions;
//     }

//     // cycle found, these instructions don't work
//     if (`${col, row}` in seenCells) {
//       visit(permutations.pop(), 0, 0);
//     }
//     seenCells[`${col, row}`] = true;

//     let dir = instructions[curr];
//     let nextCol;
//     let nextRow;
//     switch (dir) {
//       case 'Right':
//         nextCol = right(col);
//         break;
//       case 'Left':
//         nextRow = left(col);
//         break;
//       case 'Up':
//         nextCol = up(row);
//         break;
//       case 'Down':
//         nextCol = down(row);
//         break;
//     }

//     // instructions don't work
//     if (nextCol === -1 || nextRow === -1) {
//       let nextInstructions = permutations.pop();
//       // no more instructions
//       if (nextInstructions == null) {
//         return;
//       }
//       visit(nextInstructions, 0, 0);
//     }

//     // instructions do work, continue
//     visit(instructions, nextCol, nextRow);
//   }

//   return visit(permutations.pop(), 0, 0, {});
// }


