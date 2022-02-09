// @ts-check

import TreeNode from "../TreeNode.js";

/**
 *
 * @param {TreeNode} root
 * @returns {string[]}
 */
export default function binaryTreePaths(root) {
  const paths = [];

  /**
   * @param {TreeNode} node
   * @param {number[]} path
   */
  function search(node, path) {
    if (node == null) return;

    // add current to path
    path.push(node.val);

    // we found a leaf, add path to `paths`
    if (!node.left && !node.right) {
      paths.push(path.join('->')); //format str
    }

    // continue searching
    if (node.left || node.right) {
      // copy path into next call so left and right tracks don't share same arr
      search(node.left, [...path]);
      search(node.right, [...path]);
    }
  }

  search(root, []);

  return paths;
}


