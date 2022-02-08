# Two heaps
- useful for medians or problems that can be split in two

## Heaps
- Must be a complete binary tree, all levels must be filled except last. Last level must have left most nodes filled. Otherwise it's a binary tree.
- The parent node (i.e the root and every subtree root) must either be greater than or equal to the value of its child nodes. A min heap is the reverse.
- On a max heap, the largest node is the root, on a min heap the smallest node is the root. Max heap tends to be the default.
- Usually represented as an array. root is index 0, children are, from l to r: `2i + 1` and `2i + 2`.
- Not completely sorted, its partially ordered. That the max or min value is the root and accessible in 0(1) is the most important.
- on heaps, `peek` is O(1), `pop` and `push` is O(log N).
