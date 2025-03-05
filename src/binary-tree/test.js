// @ts-check
import test from 'ava';
import TreeNode from "../TreeNode.js";
import orderTraverse from './orderTraversal.js';
import reverseOrderTraverse from './reverseOrderTraversal.js';
import zigZagTraversal from './zigZagTraversal.js';
import avgLevel from './avgLevel.js';
import minDepth from './minDepth.js';
import rightView from './rightView.js';
import pathSum, {pathSumIterative} from './pathSum.js';
import isSameTree from './sameTree.js';
import sumOfAllPaths from './sumOfAllPaths.js';
import hasPath from './hasPath.js';
import leftView from './leftView.js';
import maxLevelSum from './maxLevelSum.js';

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

test('leftView', t => {
  const root1 = new TreeNode(8);
  root1.left = new TreeNode(3);
  root1.right = new TreeNode(10);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(6);
  root1.left.right.left = new TreeNode(4);
  root1.left.right.right = new TreeNode(7);
  root1.right.right = new TreeNode(14);
  root1.right.right.left = new TreeNode(13);

  const root2 = new TreeNode(8);
  root2.right = new TreeNode(10);
  root2.right.right = new TreeNode(14);

  t.is(leftView(root1), 4);
  t.is(leftView(new TreeNode(1)), 1);
  t.is(leftView(root2), 3);
});

test('pathSum', t => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);

  t.is(pathSum(root, 23), true);
  t.is(pathSum(root, 16), false);
  t.is(pathSum(root, 18), true);

  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);
  root2.left.left = new TreeNode(4);
  root2.left.right = new TreeNode(5);
  root2.right.left = new TreeNode(6);
  root2.right.right = new TreeNode(7);

  t.is(pathSum(root2, 10), true);
  //t.is(pathSumIterative(root2, 10), true);
});

test('sameTree', t => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);

  const root3 = new TreeNode(1);
  root3.left = new TreeNode(2);
  root3.right = new TreeNode(4);

  t.is(isSameTree(root, root2), true);
  t.is(isSameTree(root, root3), false);
});

test('sumOfAllPaths', t => {
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);

  t.is(sumOfAllPaths(root), 332);
});

test('hasPath', t => {
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);

  //t.is(hasPath(root, [1, 0, 7]), false);
  t.is(hasPath(root, [1, 1, 6]), true);
});

test('maxLevelSum', t => {
  const root = new TreeNode(1);
  root.left = new TreeNode(7);
  root.right = new TreeNode(0);
  root.left.left = new TreeNode(7);
  root.right.left = new TreeNode(-8);

  t.is(maxLevelSum(root), 2);
});