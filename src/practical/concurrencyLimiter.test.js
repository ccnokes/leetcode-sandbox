// @ts-check
import test from 'ava';
import { createConcurrencyLimiter } from './concurrencyLimiter.ts';

function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitUntil(condition, { timeoutMs = 2000, intervalMs = 5 } = {}) {
  const start = Date.now();
  while (!condition()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error('waitUntil: timeout');
    }
    await wait(intervalMs);
  }
}

test('never runs more tasks in parallel than the limit', async (t) => {
  const limit = 3;
  let concurrent = 0;
  let maxConcurrent = 0;

  const n = 12;
  let completed = 0;

  const makeTask = () => async () => {
    concurrent += 1;
    maxConcurrent = Math.max(maxConcurrent, concurrent);
    await wait(25);
    concurrent -= 1;
    completed += 1;
  };

  createConcurrencyLimiter(
    limit,
    Array.from({ length: n }, () => makeTask()),
  );

  await waitUntil(() => completed === n);

  t.true(maxConcurrent <= limit);
  t.is(maxConcurrent, limit);
});

test('runs queued tasks after slots free up', async (t) => {
  const completed = [];

  const makeTask = (id) => async () => {
    await wait(15);
    completed.push(id);
  };

  createConcurrencyLimiter(2, [
    () => makeTask('a')(),
    () => makeTask('b')(),
    () => makeTask('c')(),
  ]);

  await waitUntil(() => completed.length === 3);

  t.deepEqual(completed, ['a', 'b', 'c']);
});

test('add() starts work when the limiter began with no tasks', async (t) => {
  let ran = false;
  const limiter = createConcurrencyLimiter(2);
  limiter.add(async () => {
    ran = true;
  });

  await waitUntil(() => ran);

  t.true(ran);
});

test('add() schedules additional tasks after initial batch', async (t) => {
  const completed = [];

  const limiter = createConcurrencyLimiter(2, [
    async () => {
      await wait(10);
      completed.push(1);
    },
    async () => {
      await wait(10);
      completed.push(2);
    },
    async () => {
      await wait(10);
      completed.push(3);
    },
  ]);

  limiter.add(async () => {
    await wait(10);
    completed.push(4);
  });

  await waitUntil(() => completed.length === 4);

  t.deepEqual(completed.sort((a, b) => a - b), [1, 2, 3, 4]);
});
