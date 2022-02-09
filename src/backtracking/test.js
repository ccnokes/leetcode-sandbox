// @ts-check
import test from 'ava';
import combinationSum3 from './combinationSum3.js';
import binaryTreePaths from './binaryTreePaths.js';
import TreeNode from '../TreeNode.js';

test('combinationSum3', t => {
  t.deepEqual(combinationSum3(1, 1), [[1]]);
  t.deepEqual(combinationSum3(3, 7), [[1, 2, 4]]);
  t.deepEqual(combinationSum3(3, 9), [[1, 2, 6], [1, 3, 5], [2, 3, 4]]);
});

test('binaryTreePaths', t => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(5);

  t.deepEqual(binaryTreePaths(root), ['1->2->5', '1->3']);
  t.deepEqual(binaryTreePaths(new TreeNode(1)), ['1']);
});

