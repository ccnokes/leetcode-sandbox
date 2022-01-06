// @ts-check

import TreeNode from "../TreeNode.js";

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
export default function orderTraverse(root) {
  const result = [];

  let queue = [root];

  while(queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      currentLevel.push(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    // this level is all done
    result.push(currentLevel);
  }

  return result;
}
