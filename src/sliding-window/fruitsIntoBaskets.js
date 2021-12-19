// @ts-check
/**
 * Given an array of characters where each character represents a fruit tree, you are given two baskets,
 * and your goal is to put maximum number of fruits in each basket. The only restriction is that each
 * basket can have only one type of fruit. You can start with any tree, but you can’t skip a tree once
 * you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when
 * you have to pick from a third fruit type.
 *
 * Write a function to return the maximum number of fruits in both baskets.
 *
 * @param{string[]} fruits
 * @returns{number}
 */
export default function fruitsIntoBaskets(fruits) {
  let max = 0;
  let left = 0;
  /** @type Record<string, number> */
  let baskets = {};

  for (let right = 0; right < fruits.length; right++) {
    let curr = fruits[right];
    if (!(curr in baskets)) {
      baskets[curr] = 0;
    }
    baskets[curr]++;

    while(Object.keys(baskets).length > 2) {
      const leftFruit = fruits[left];
      baskets[leftFruit]--;
      if (baskets[leftFruit] <= 0) {
        delete baskets[leftFruit];
      }
      left++; //shrink the window
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}
