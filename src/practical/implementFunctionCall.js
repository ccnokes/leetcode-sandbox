/**
 * The Function.prototype.call() method calls the function with a given this value and arguments provided individually.
 * Implement your own Function.prototype.call without calling the native call method. 
 * 
 * To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.
 */

// this is the easy cheater way
Function.prototype.myCallEasy = function (thisArg, ...argArray) {
  const fn = this; // this is the calling function, multiplyAge in this case. Renaming for readability.
  return fn.apply(thisArg, argArray);
};

/**
 * without native bind/call/apply the only way we can call a function in a particular context is to
 * set it as a function on the object because a function's `this` is implicitly bound to the object
 * 
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  const fn = this; // this is the calling function, multiplyAge in this case. Renaming for readability.
  
  // set the function as a property on the object to take advantage of implicit binding
  const fnKey = Symbol(); // random key so we don't accidentally clobber something
  thisArg[fnKey] = fn; // set it on thisArg object

  const result = thisArg[fnKey](...argArray); // call it
  delete thisArg[fnKey]; // clean up property

  return result;
};


// example
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

