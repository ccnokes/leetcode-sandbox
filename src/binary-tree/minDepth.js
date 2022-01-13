// @ts-check
import Denque from "denque";
import TreeNode from "../TreeNode.js";

/**
 * Find the minimum depth of a binary tree. The minimum depth is the
 * number of nodes along the shortest path from the root node to the nearest leaf node.
 *
 * @param {TreeNode} root
 * @returns {number}
 */
export default function minDepth(root) {
  let queue = new Denque([root]);
  let depth = -1;

  while (queue.length > 0) {
    let levelSize = queue.length;
    depth++;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (!curr.left && !curr.right) {
        return depth + 1; // we started at 0
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  return depth;
}
