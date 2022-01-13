// @ts-check
import test from 'ava';
import TreeNode from "../TreeNode.js";
import orderTraverse from './orderTraversal.js';
import reverseOrderTraverse from './reverseOrderTraversal.js';
import zigZagTraversal from './zigZagTraversal.js';
import avgLevel from './avgLevel.js';
import minDepth from './minDepth.js';
import rightView from './rightView.js';

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

test('reverseOrderTraverse', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);

  t.deepEqual(
    reverseOrderTraverse(root),
    [
      [9, 10, 5],
      [7, 1],
      [12]
    ]
  );
});

test('zigZagTraversal', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.right.left.left = new TreeNode(20);
  root.right.left.right = new TreeNode(17);

  t.deepEqual(
    zigZagTraversal(root),
    [
      [12],
      [1, 7],
      [9, 10, 5],
      [17, 20]
    ]
  );
});

test('avgLevel', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);

  t.deepEqual(avgLevel(root), [12.0, 4.0, 6.5]);
});

test('minDepth', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left = new TreeNode(9);
  root.right.left.left = new TreeNode(11);

  t.is(minDepth(root), 3);
});

test('rightView', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left.left = new TreeNode(3);

  t.deepEqual(rightView(root), [root, root.right, root.right.right, root.left.left.left]);
});
