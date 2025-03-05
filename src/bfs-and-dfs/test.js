// @ts-check
import test from 'ava';
import TreeNode from "../TreeNode.js";
import depthFirstSearchIterative, {depthFirstSearchRecursive} from './dfs.js';
import numOfIslands from './numOfIslands.js';

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

test('numOfIslands', t => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ];
  t.is(numOfIslands(grid), 1);

  const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ];
  t.is(numOfIslands(grid2), 3);
});