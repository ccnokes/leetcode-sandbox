// @ts-check
import test from 'ava';
import './implementFunctionCall.js';
import LRUCache from './LRUCache.ts';
import promiseAll from './implementPromiseAll.js';

test('Function.prototype.myCall', t => {
  function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
  }
  
  const mary = {
    age: 21,
  };
  
  const john = {
    age: 42,
  };
  t.is(multiplyAge.myCall(mary), 21);
  t.is(multiplyAge.myCall(john, 2), 84);
});

test('LRUCache', t => {
  const cache = new LRUCache(2);
  cache.put(1, 'a');
  cache.put(2, 'b');
  t.is(cache.capacity, 2);
  t.is(cache.get(1), 'a');
  t.is(cache.get(2), 'b');

  cache.put(3, 'c');
  t.is(cache.get(3), 'c');
  t.is(cache.get(1), -1);
});

test('promiseAll', async t => {
  await promiseAll([
    // Promise.reject(new Error('nope')),
    Promise.resolve(1),
    Promise.resolve(2),
    'abc'
  ])
  .then(results => {
    t.deepEqual(results, [1, 2, 'abc']);
  });

  await promiseAll([
    Promise.reject(new Error('nope')),
    Promise.resolve(1),
    'abc'
  ])
  .catch(results => {
    t.is(results instanceof Error, true);
  });
});