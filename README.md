# My leetcode sandbox

This is my attempt to get better at algorithms.

Most of these problems are coming from either this [Educative course](https://www.educative.io/courses/grokking-the-coding-interview) or [leetcode](https://leetcode.com/problemset/all).

### Bare minimum to know:

*Data structures*
- Linked lists
- Trees, tries, graphs
- Stacks and queues
- Heaps
- Vectors, array lists
- Hash tables

*Algorithms*
- Breadth-first search
- Depth-first search
- Binary search
- Merge sort
- Quick sort

*Concepts*
- Bit manipulation
- Memory (stack vs heap)
- Recursion
- Dynamic programming
- Big O time and space

And from another source:
*The 10 Most Important Concepts For Coding Interviews (algorithms and data structures)*
1. Logarithm (Complexity Analysis)
2. Graph Traversals (BFS & DFS)
3. Binary Search
4. Sliding Window
5. Recursion
6. 2 Algorithms (Inverting a binary tree & Reverse a Linked List)
7. Suffix Trees
8. Heaps
9. Dynamic programming
10. Sorting Algorithms (Quick & Merge)

### Glossary of some common math-y terms I can never remember:

- logarithm - A logarithm is a mathematical operation that determines how many times a certain number, called the base, is multiplied by itself to reach another number. The exponent or power to which a base must be raised to yield a given number. The inverse function to exponentiation. 10^3 = 1000 and log10(1000) = 3.
- median - is the middle number in a sorted, ascending or descending, list of numbers. Separates higher half from lower.
- complement - "a technique to encode a symmetric range of positive and negative integers in a way that they can use the same algorithm (hardware) for addition throughout the whole range." How you get one I think it depends on the representation. For example, in a binary representation you can flip bits to get the complement.

### Bitwise operators
- `^` XOR "exclusive or" -- returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s. Also will be true (1 or greater) if and only if its arguments differ. It returns zero if we take XOR of two same numbers. It returns the same number if we XOR with zero.

## Binary tree height

A complete binary trees' "height" (number of levels) can be represented as *log N*.

There's 7 nodes in this complete binary tree. How many levels are there?
```
     1
    /  \
   2    3
  / \   / \
 4   5  6  7
```

```
1 + floor(log(7))
= 3 levels
```
The first, root level is added in manually, then we get the floored log2 of the node count. That gets us the height of the tree.
In reverse you could say that `2^levels - 1 = approx node count`.
Note: In macOS spotlight, you can't specify the log base, but if you divide by `log(2)` it works. Eg: `1 + floor(log(7) / log(2)) = 3`

Balanced trees allow you to work in logarithmic time, rather than linear time, which scales better.
