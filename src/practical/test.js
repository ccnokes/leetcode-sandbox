// @ts-check
import test from 'ava';
import './implementFunctionCall.js';
import LRUCache from './LRUCache.ts';
import promiseAll from './implementPromiseAll.js';
import debounce from './debounce.ts';
import { isOneStringSwapEqual } from './isOneStringSwapEqual.js';

test('Function.prototype.myCall', (t) => {
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

test('LRUCache', (t) => {
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

test('promiseAll', async (t) => {
  await promiseAll([]).then((results) => {
    t.deepEqual(results, []);
  });

  await promiseAll([Promise.resolve(1), Promise.resolve(2), 'abc']).then(
    (results) => {
      t.deepEqual(results, [1, 2, 'abc']);
    },
  );

  await promiseAll([
    Promise.reject(new Error('nope')),
    Promise.resolve(1),
    'abc',
  ]).catch((results) => {
    t.is(results instanceof Error, true);
  });
});

test('debounce', async (t) => {
  let wasCalled = false;

  const debounced = debounce(() => {
    wasCalled = true;
  }, 1);

  t.is(wasCalled, false);
  debounced();

  await wait(2);

  t.is(wasCalled, true);
});

test('isOneStringSwapEqual', (t) => {
  t.is(isOneStringSwapEqual('hello', 'goodbye'), false);
  t.is(isOneStringSwapEqual('kelb', 'kelb'), true);
  t.is(isOneStringSwapEqual('ab', 'ca'), false);
  t.is(isOneStringSwapEqual('bank', 'kanb'), true);
  t.is(isOneStringSwapEqual('ab', 'ba'), true);
});

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
