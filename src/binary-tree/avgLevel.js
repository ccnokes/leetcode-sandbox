// @ts-check
import Denque from "denque";
import TreeNode from "../TreeNode.js";

/**
 * 
 * @param {TreeNode} root
 * @returns {number[]}
 */
export default function avgLevel(root) {
  const results = [];

  const queue = new Denque([root]);

  while (queue.length > 0) {
    let levelLength = queue.length;
    let currentLevelSum = 0;
    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();
      currentLevelSum += curr.value;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    results.push(currentLevelSum / levelLength);
  }

  return results;
}
