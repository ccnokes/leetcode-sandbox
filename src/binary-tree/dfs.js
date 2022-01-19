// @ts-check
import TreeNode from "../TreeNode.js";

/**
 * iterative approach
 * @param {TreeNode} root
 * @returns {number[]}
 */
export default function depthFirstSearchIterative(root) {
  const nodes = [];
  const stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    while (node != null) {
      // if we have 2 sides, we'll come back to the right
      if (node.left && node.right) stack.push(node.right);
      nodes.push(node.value);
      node = node.left || node.right;
    }
  }

  return nodes;
}

/**
 * recursive approach
 * @param {TreeNode} root
 * @returns {number[]}
 */
export function depthFirstSearchRecursive(root) {
  const nodes = [];

  /**
   * @param {TreeNode} node
   */
  function search(node) {
    if (node == null) return;
    nodes.push(node.value);
    search(node.left);
    search(node.right);
  }

  search(root);

  return nodes;
}
