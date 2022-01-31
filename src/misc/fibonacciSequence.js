// @ts-check

/**
 * Without a cache/memoization, the recursive fibonacci sequence is around O(2^N) time and space complexity
 * But due to the number of duplicate computations, memoization brings it down to O(N) in time and space.
 * "Dynamic programming"
 *
 * @param {number} n - the nth number in the sequence
 * @returns {number}
 */
export default function fibonacciSequence(n) {
  const cache = {};

  function fib(n) {
    if (n < 2) return n;
    if (cache[n]) return cache[n];
    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
  }

  return fib(n);
}

// classic recursive approach that doesn't scale too well
// O(2^N)
function fibRecursive(n) {
  if (n < 2) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

/**
 * iterative approach
 *
 * @param {number} n
 * @returns {number}
 */
function fibonacciIterative(n) {
  if (n === 0) return 0;
  // next number is found by adding the 2 before it. We know it starts with [0, 1], so start there
  let a = 0;
  let b = 1;
  // starting with the 2nd index
  for (let i = 2; i < n; i++) {
    let c = a + b; // get next number
    a = b; // shift this up one
    b = c; // shift this up one
    // so next iteration is really b + c
  }
  // handle the final iteration here
  return a + b;
}

function getFibSequenceArr(n) {
  // handle the n < 2 cases procedurally
  let a = 0;
  const seq = [a];
  if (n === 0) {
    return seq;
  }
  let b = 1;
  seq.push(b);
  if (n === 1) {
    return seq;
  }

  for (let i = 2; i <= n; i++) {
    let c = a + b;
    seq.push(c);
    a = b;
    b = c;
  }
  return seq;
}
