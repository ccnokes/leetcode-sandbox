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
import depthFirstSearchIterative, {depthFirstSearchRecursive} from './dfs.js';
import isSameTree from './sameTree.js';
import sumOfAllPaths from './sumOfAllPaths.js';
import hasPath from './hasPath.js';

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

test('depthFirstSearch', t => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

  t.deepEqual(depthFirstSearchIterative(root), [1, 2, 4, 5, 3, 6, 7]);
  t.deepEqual(depthFirstSearchRecursive(root), [1, 2, 4, 5, 3, 6, 7]);
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
