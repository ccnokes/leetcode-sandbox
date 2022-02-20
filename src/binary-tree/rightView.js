// @ts-check
import Denque from "denque";
import TreeNode from "../TreeNode.js";

/**
 * Given a binary tree, return an array containing nodes in its right view.
 * The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
 *
 * @param {TreeNode} root
 * @returns {TreeNode[]}
 */
export default function rightView(root) {
  const result = [];
  const queue = new Denque([root]);

  while (queue.length > 0) {
    let queueLength = queue.length;
    // let currentLevel = [];
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (i === queueLength - 1) { // if last node on level, push to results
        result.push(curr);
      }
      // currentLevel.push(curr);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right); // always push right last
    }
  }

  return result;
}
