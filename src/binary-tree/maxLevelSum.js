// @ts-check
import TreeNode from "../TreeNode.js";

/**
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
 * Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 * 
 * 
 * BFS
 * create levels
 * then find level with max sum
 * 
 * @param {TreeNode=} root 
 * @returns {number}
 */
export default function maxLevelSum(root) {
  const queue = [root];
  const levelSums = [];
  // const levels = [];

  while(queue.length > 0) {
    const level = [];
    let size = queue.length; // stash the original queue size length, that way we don't process the next level too early

    // this for loop ignores i because we're shifting off the front of the queue
    // we just need to count the length of the queue
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node?.val);

      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
    // levels.push(level);
    
    // calculate level sum
    const levelSum = level.reduce((acc, val) => {
      return acc + (val ?? 0);
    }, 0);
    levelSums.push(levelSum);
  }
  // console.log(levels);

  // Math.max(...levelSums) returns the largest sum in the array
  // indexOf gets the index of it
  // then + 1 because arrays are 0 indexed but the problem defined the root as level 1
  return levelSums.indexOf(Math.max(...levelSums)) + 1;
}

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);

// console.log(maxLevelSum(root));