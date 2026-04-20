// @ts-check
import test from 'ava';
import { createConcurrencyLimiter } from './concurrencyLimiter2.ts';

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

  const limiter = createConcurrencyLimiter(limit);

  await Promise.all(
    Array.from({ length: n }, () =>
      limiter.run(async () => {
        concurrent += 1;
        maxConcurrent = Math.max(maxConcurrent, concurrent);
        await wait(25);
        concurrent -= 1;
        completed += 1;
      }),
    ),
  );

  t.true(maxConcurrent <= limit);
  t.is(maxConcurrent, limit);
  t.is(completed, n);
});

test('runs queued tasks after slots free up', async (t) => {
  const completed = [];

  const limiter = createConcurrencyLimiter(2);

  await Promise.all([
    limiter.run(async () => {
      await wait(15);
      completed.push('a');
    }),
    limiter.run(async () => {
      await wait(15);
      completed.push('b');
    }),
    limiter.run(async () => {
      await wait(15);
      completed.push('c');
    }),
  ]);

  t.deepEqual(completed.sort(), ['a', 'b', 'c']);
});

test('run resolves with the task return value', async (t) => {
  const limiter = createConcurrencyLimiter(2);
  const value = await limiter.run(async () => 42);
  t.is(value, 42);
});

test('run propagates task rejection', async (t) => {
  const limiter = createConcurrencyLimiter(2);
  const err = new Error('boom');
  await t.throwsAsync(
    limiter.run(async () => {
      throw err;
    }),
    { message: 'boom' },
  );
});

test('run propagates synchronous throw and still drains the queue', async (t) => {
  const limiter = createConcurrencyLimiter(2);
  const err = new Error('sync boom');
  await t.throwsAsync(
    limiter.run(() => {
      throw err;
    }),
    { message: 'sync boom' },
  );

  let ran = false;
  await limiter.run(async () => {
    ran = true;
  });
  t.true(ran);
});

test('pause stops starting new work; resume continues the queue', async (t) => {
  const started = [];
  const limiter = createConcurrencyLimiter(2);

  const slow = () =>
    limiter.run(async () => {
      started.push('run');
      await wait(100);
    });

  const p1 = slow();
  const p2 = slow();
  await waitUntil(() => started.length === 2);

  limiter.pause();

  const p3 = slow();
  await wait(30);
  t.is(started.length, 2, 'third task should not start while paused');

  limiter.resume();
  await Promise.all([p1, p2, p3]);
  t.is(started.length, 3);
});
