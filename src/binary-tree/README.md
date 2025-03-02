# Binary trees, breadth first and depth first search

- use cases for binary trees: routing tables, decision trees, expression evaluation, sorting, database indexes, Huffman coding data compression algorithm.

binary trees

- undirected
- acyclic
- vertices connected by one path/edge
- left side < parent node < right side, e.g
  8
  / \
  3 10
- hierarchical structure allows for efficient searching, insertion, and deletion operations on the data stored in the tree
- The time complexity for search and insert operations in trees is typically O(log n), where n is the number of elements in the tree. In contrast, the time complexity for search and insert operations in arrays and linked lists can be O(n),where n is the number of elements in the array or list.

### inorder traversal

At first traverse the left subtree, then visit the root, and then traverse the right subtree. Gets the value of the nodes in sorted order.

### preorder traversal

At first visit the root then traverse left subtree and then traverse the right subtree.

### postorder traversal

At first traverse left subtree then traverse the right subtree and then visit the root.

## DFS

depth first search

- usually uses stack (i.e array.pop())

## BFS

breadth first search

- usually uses queue (i.e array.shift())
