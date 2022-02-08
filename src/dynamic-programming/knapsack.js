// @ts-check

const items = ['Apple', 'Orange', 'Banana', 'Melon'];

/**
 * Brute force solution, O(2^N) complexity
 * @param {number[]} profits
 * @param {number[]} weights
 * @param {number} capacity
 * @returns {number}
 */
function getMaxProfit_Brute(profits, weights, capacity) {

  function visit(capacity, currentIndex) {
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    let curr = items[currentIndex];
    console.log(curr);

    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
      profit1 = profits[currentIndex] + visit(capacity - weights[currentIndex], currentIndex + 1);
    }

    // recursive call after excluding the element at the currentIndex
    let profit2 = visit(capacity, currentIndex + 1);

    return Math.max(profit1, profit2);
  }

  return visit(capacity, 0);
}

/**
 *
 * @param {number[]} profits
 * @param {number[]} weights
 * @param {number} capacity
 * @returns {number}
 */
function getMaxProfit_Memo(profits, weights, capacity) {
  const cache = []; // 2d array "grid"

  function visit(capacity, currentIndex) {
    // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    let curr = items[currentIndex];
    console.log(curr);

    cache[currentIndex] = cache[currentIndex] ?? [];
    if (cache[currentIndex][capacity] != null) {
      return cache[currentIndex][capacity];
    }

    // choose currentIndex, recurse
    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
      profit1 = profits[currentIndex] + visit(capacity - weights[currentIndex], currentIndex + 1);
    }

    // skip currentIndex, go to next
    let profit2 = visit(capacity, currentIndex + 1);

    cache[currentIndex][capacity] = Math.max(profit1, profit2);
    return cache[currentIndex][capacity];
  }

  return visit(capacity, 0);
}

/**
 * Bottom up approach using grid
 * @param {number[]} profits
 * @param {number[]} weights
 * @param {number} capacity
 * @returns {number}
 */
function getMaxProfit(profits, weights, capacity) {
  if (capacity <= 0 || profits.length == 0 || weights.length != profits.length) return 0;

  const grid = createGrid(profits.length, capacity + 1);

  // if we have only one weight, we will take it if it is not more than the capacity
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) grid[0][c] = profits[0];
  }

  for (let i = 1; i < profits.length; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0;

      if (weights[i] <= c) {
        profit1 = profits[i] + grid[i - 1][c - weights[i]];
      }

      let profit2 = grid[i - 1][c];

      // take the max
      grid[i][c] = Math.max(profit1, profit2);
    }
  }

  // get bottom right one
  return grid[profits.length - 1][capacity];
}

/**
 * @param {number} rows
 * @param {number} cols
 * @returns {number[][]}
 */
function createGrid(rows, cols) {
  return new Array(rows)
    .fill(0)
    .map(() => new Array(cols + 1).fill(0));
}

// console.log(getMaxProfit([1, 6, 10, 16], [1, 2, 3, 5], 7));
// console.log(getMaxProfit(items, 5));
