// @ts-check
import TreeNode from "../TreeNode.js";

/**
 * 
 * @param {TreeNode=} root 
 */
export default function breadthFirstSearch(root) {
  const queue = [root];

  while(queue.length > 0) {
    const node = queue.shift();
    // console.log(node?.value);
    if(node?.left) queue.push(node.left);
    if(node?.right) queue.push(node.right);
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// breadthFirstSearch(root);
TreeNode.print(root);
