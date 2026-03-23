// @ts-check
import TreeNode from '../TreeNode.js';

/**
Given a binary tree, return the inorder traversal of its nodes' values.

Example:
      10
     / \
    8   12
   / \
  6   9

ASC
Inorder traversal: [6, 8, 9, 10, 12]

Process: 
- the left most subtree has the smallest
- proceed up in this order: left, parent node, right

Call stack, in-order. Indent shows depth:
traverse(10)
  traverse(8)
    traverse(6)
      traverse(null) -> return
      push 6
      traverse(null) -> return
    push 8
    traverse(9)
      traverse(null) -> return
      push 9
      traverse(null) -> return
  push 10
  traverse(12)
    traverse(null) -> return
    push 12
    traverse(null) -> return

Result: [6, 8, 9, 10, 12]

 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
export function inorderTraversal(root) {
  if (!root) return [];

  /** @type number[] */
  const result = [];

  /**
   * @param {TreeNode} node
   */
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  return result;
}

// const root = new TreeNode(10);
// root.left = new TreeNode(8);
// root.right = new TreeNode(12);
// root.left.left = new TreeNode(6);
// root.left.right = new TreeNode(9);

// console.log(inorderTraversal(root));
