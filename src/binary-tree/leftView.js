// @ts-check
import Denque from "denque";
import TreeNode from "../TreeNode.js";

/**
 * There is a binary tree with N nodes. You are viewing the tree from its left side
 * and can see only the leftmost nodes at each level. Return the number of visible nodes.
 * Note: You can see only the leftmost nodes, but that doesn't mean they have to be left nodes.
 * The leftmost node at a level could be a right node.
 *
 * Solution:
 * every level will have at most 1 visible node and every level has at least 1 node
 * count the levels of the tree, visible nodes is equal to that
 * we could do that with breadth-first or depth-first search
 *
 * @param {TreeNode} root
 * @returns {number}
 */
export default function countLevels(root) {
  let levelCount = 0;

  // breadth-first search with queue
  const queue = new Denque([root]);

  while (queue.length > 0) {
    // cache queue length so we can know how many nodes are in this level
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift();
      // count this level (but only once)
      if (i === 0) {
        levelCount++;
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  return levelCount;
}
