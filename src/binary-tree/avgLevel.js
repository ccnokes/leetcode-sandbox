// @ts-check
import Denque from "denque";
import TreeNode from "../TreeNode.js";

/**
 * Given a binary tree, populate an array to represent the averages of all of its levels.
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
export default function avgLevel(root) {
  const results = [];

  const queue = new Denque([root]); // initialize with root

  while (queue.length > 0) {
    let levelLength = queue.length; // current queue will contain all the nodes in this level
    let currentLevelSum = 0;
    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();
      currentLevelSum += curr.value;
      // children are on the next level, push those to queue
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    // get the avg
    results.push(currentLevelSum / levelLength);
  }

  return results;
}
