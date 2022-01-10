// @ts-check
import Denque from "denque";
import TreeNode from "../TreeNode.js";

/**
 * Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
 * You should populate the values of all nodes in each level from left to right in separate sub-arrays.
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */
export default function reverseOrderTraverse(root) {
  // using a proper Queue here for O(1) push/shift/unshift operations
  const result = new Denque();
  let queue = new Denque([root]);

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      currentLevel.push(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.unshift(currentLevel);
  }

  return result.toArray(); //ava.deepEqual doesn't play nice with comparing Denques to Array
}
