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
 * Without call stack based recurion
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @returns {number[]}
 */
// export function pathSum2(root, sum) {
//   const queue = [root];

//   while (queue.length > 0) {
//     let path = [];
//     let targetSum = sum;
//     let curr = queue.pop();
//     while (curr != null) {
//       path.push(curr.value);

//       // we found the path
//       if (curr.value === targetSum && curr.left === null && curr.right === null) {
//         return path;
//       }

//       targetSum -= curr.value;
//       if (curr.left && curr.right) queue.push(curr.right);
//       curr = curr.left || curr.right;
//     }
//   }

//   return [];
// }
