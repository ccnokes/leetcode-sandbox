// @ts-check
import TreeNode from "../TreeNode.js";

/**
 * Given a binary tree and a number ‘S’, find if the tree has a path
 * from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @returns {boolean}
 */
export default function pathSum(root, sum) {
  if (root == null) return false;

  // we've found the path
  if (root.value === sum && root.left === null && root.right === null) return true;

  // recursively traverse the left and right subtrees
  return pathSum(root.left, sum - root.value) || pathSum(root.right, sum - root.value);
}

/**
 * Given a binary tree and a number ‘S’, find if the tree has a path
 * from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @returns {boolean}
 */
export function pathSumIterative(root, sum) {
  const stack = [root];
  let targetSum = sum;

  while (stack.length > 0) {
    let node = stack.pop();
    targetSum -= node.value;

    while (node != null) {
      // we found the path
      if (node.value === targetSum && root.left === null && root.right === null) {
        return true;
      }
      // adjust target if we're not on the last node
      if (node.left || node.right) targetSum -= node.value;
      // if we have 2 sides, we'll come back to the right
      if (node.left && node.right) stack.unshift(node.right);
      node = node.left || node.right; // take next descendant
    }

    targetSum = sum - root.value; // reset it
  }

  return false;
}
