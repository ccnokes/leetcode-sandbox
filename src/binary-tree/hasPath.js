// @ts-check

import TreeNode from "../TreeNode.js";

/**
 * Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
 * @param {TreeNode} root
 * @param {number[]} seq
 * @returns {boolean}
 */
export default function hasPath(root, seq) {

  /**
   * @param {TreeNode} node
   * @param {number} level
   * @returns {boolean}
   * */
  function visit(node, level) {
    if (node === null) return false;

    if (node.value === seq[level]) {
      if (node.left === null && node.right === null) {
        return true;
      }
      level++;

      return visit(node.left, level) || visit(node.right, level);
    }

    return false;
  }

  return visit(root, 0);
}
