# Sliding window

- Useful when trying to find a contiguous subarray because it allows you to think in terms of a range of values.
- Usually there's left/right windowStart/windowEnd pointers and the "window" or "range" that these two pointers create expands or collapses depending on what we're looking for.
- Usually O(n).

Here's a classic sliding window problem: "find k consecutive integers with the largest sum in an array"

The naive approach is at each iteration, have another loop thru i+k-1 elements, calculate the sum, move forward and keep doing that.
This means our time complexity becomes O(nk) because at every step we're doing another loop of size k.

So a sliding window usually entails a technique to reduce that or eliminate that nested loop. In the example, as move slide window forward, we don't have to recompute the sum,
we can subtract the element exiting, add the element entering, and update the max sum accordingly.

Another classic example that's non-numeric: "Given a string, find the length of the longest substring without repeating characters."
TODO

### Typical characteristics:

- for loop
- sometimes a nested loop
- outside the loop, usually a pointer var, agrregate var (e.g max value)
- sometimes you'll want to be calculating the size of the window (e.g right - left + 1)
