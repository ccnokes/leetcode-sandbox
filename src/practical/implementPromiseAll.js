// @ts-check

/**
 * Implement Promise.all
 * 
 * Promise.all() is a method that takes an iterable of elements (usually Promises) as an input, 
 * and returns a single Promise that resolves to an array of the results of the input promises. 
 
* This returned promise will resolve when all of the input's promises have resolved, or if the 
 * input iterable contains no promises. It rejects immediately upon any of the input promises
 * rejecting or non-promises throwing an error, and will reject with this first rejection message/error.
 * 
 * 
 * @param {Array<Promise<any> | any>} promises 
 * @returns {Promise}
 */
export default function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // pre-allocate array to avoid dynamic resizing
    const results = new Array(promises.length);
    let completed = 0;

    promises.forEach((promise, i) => {
      // handle primitive values by wrapping in a Promise
      // if promise = a rejected promise, this doesn't override that, it's still rejected
      Promise.resolve(promise)
        .then(val => {
          results[i] = val;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // short circuit promise chain on first rejection
    });
  });
}

// key considerations: 
// should return a promise
// that promise resolves when all other promises are resolved
// returns an array of resolved results that are ordered the same as what was passed in
// can pass in primitive values which should be passed through
// on any promise rejection, the return promise should reject with that value


// promiseAll([
//   // Promise.reject(new Error('nope')),
//   wait(2).then(() => 1),
//   wait(1).then(() => 2),
//   'abc'
// ])
// .then(console.log)
// .catch(console.error);

// function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
