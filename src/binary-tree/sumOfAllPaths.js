// @ts-check

import TreeNode from "../TreeNode.js";

/**
 * Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number.
 * Find the total sum of all the numbers represented by all paths.
 *
 * @param {TreeNode} root
 * @returns {number}
 */
export default function sumOfAllPaths(root) {
  let sum = 0;

  /**
   * @param {TreeNode} node
   * @param {string} numStr
   */
  function visit(node, numStr) {
    if (node === null) return;
    numStr += node.value;
    // we're at an end node
    if (node.left === null && node.right === null) {
      sum += parseInt(numStr, 10);
    }
    if (node.left) visit(node.left, numStr);
    if (node.right) visit(node.right, numStr);
  }

  visit(root, '');

  return sum;
}
