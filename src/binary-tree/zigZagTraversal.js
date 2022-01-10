// @ts-check
import TreeNode from "../TreeNode.js";
import Denque from "denque";

/**
 * Given a binary tree, populate an array to represent its zigzag level order traversal.
 * You should populate the values of all nodes of the first level from left to right, then right to left
 * for the next level and keep alternating in the same manner for the following levels.
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */
export default function zigZagTraversal(root) {
  const result = [];

  let queue = new Denque([root]);
  let goingLeft = true; // are we zigging or zagging?

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = new Denque();
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (goingLeft) {
        currentLevel.push(curr.value);
      } else {
        currentLevel.unshift(curr.value);
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    // this level is all done
    result.push(currentLevel.toArray());
    goingLeft = !goingLeft; // flip
  }

  return result;
}
