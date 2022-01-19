// @ts-check
import TreeNode from '../TreeNode.js';

/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * https://leetcode.com/problems/same-tree
 *
 * @param {TreeNode} p - can be null
 * @param {TreeNode} q - can be null
 * @return {boolean}
 */
export default function isSameTree(p, q) {
  if (p === null && q === null) return true;
  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
}
