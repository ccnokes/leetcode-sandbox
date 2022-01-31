// @ts-check

const items = ['Apple', 'Orange', 'Banana', 'Melon'];

/**
 *
 * @param {number[]} profits
 * @param {number[]} weights
 * @param {number} capacity
 * @returns {number}
 */
function getMaxProfit_2(profits, weights, capacity) {

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
function getMaxProfit_3(profits, weights, capacity) {

  function visit(capacity, currentIndex, profit = 0) {
    if (capacity <= 0 || currentIndex >= profits.length) return profit;

    let curr = items[currentIndex];
    console.log(curr, capacity, profit);

    // this gets everything we can until we exhaust our capacity
    if (weights[currentIndex] <= capacity) {
      return visit(capacity - weights[currentIndex], currentIndex + 1, profit + profits[currentIndex]);
    }

    // skip current and start there
    // this is a new combination to start checking
    visit(capacity, currentIndex + 1);
  }

  return visit(capacity, 0, 0);
}

function getMaxProfit(items, capacity) {
  const combos = [[]];

  for(let i = 0; i < items.length; i++) {
    let curr = items[i];
    let n = combos.length;
    for (let j = 0; j < n; j++) {
      
    }
  }

}


// console.log(getMaxProfit([4, 5, 3, 7], [2, 3, 1, 4], 5));
console.log(getMaxProfit(items, 5));
