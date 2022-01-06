import test from 'ava';
import TreeNode from "../TreeNode.js";
import orderTraverse from './orderTraversal.js';

test('orderTraverse', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);

  t.deepEqual(
    orderTraverse(root),
    [
      [12],
      [7, 1],
      [9, 10, 5]
    ]
  );
});
