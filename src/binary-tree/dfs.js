// @ts-check
import TreeNode from "../TreeNode.js";

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
export default function depthFirstSearch(root) {
  const nodes = [];
  const queue = [root];

  while (queue.length > 0) {
    let node = queue.pop();
    while (node != null) {
      // if we have 2 sides, we'll come back to the right
      if (node.left && node.right) queue.push(node.right);
      nodes.push(node.value);
      node = node.left || node.right;
    }
  }

  return nodes;
}
