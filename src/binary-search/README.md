# Binary search

Binary search is a divide and conquer algorithm for efficiently finding elements in a sorted list. Instead of scanning every element, we can check the mid-point, remove half of the elements from the problem set, and recursively solve. This way the problem spaces cuts in half every iteration, so we can solve in O(log n) time.

Problems that match the pattern:

- sorted or partially sorted data
- support for direct addressing in the data structure
