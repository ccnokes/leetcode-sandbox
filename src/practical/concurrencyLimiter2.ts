/**
  Implement a function that runs async tasks with a max concurrency limit. 
  Tasks are added dynamically; the limiter must start new ones as soon as a slot frees up.

  Should work for this kind of use case:
  const limiter = createLimiter(3);
  const results = await Promise.all(
    urls.map(url => limiter.run(() => fetch(url).then(r => r.json())))
  );
 */

type Task<T = unknown> = () => Promise<T>;

export function createConcurrencyLimiter(concurrencyLimit: number = 3) {
  const taskQueue: Task[] = [];
  let inFlightTaskCounter = 0;
  let isPaused = false;

  function process() {
    while (
      !isPaused &&
      taskQueue.length > 0 &&
      inFlightTaskCounter < concurrencyLimit
    ) {
      const task = taskQueue.shift()!; // assert not undefined because we checked the length above

      const taskPromise = task();
      inFlightTaskCounter++;
      taskPromise.finally(() => {
        inFlightTaskCounter--;
        process(); // recurse
      });
    }
  }

  process();

  return {
    run<T>(task: Task<T>): Promise<T> {
      // create an outer promise and forward the results of the task to it
      return new Promise((resolve, reject) => {
        taskQueue.push(() =>
          // handle synchronous error edge case --
          // Promise.resolve().then absorbs synchronous throws from task() the same way
          // .catch(reject) absorbs async rejections, so taskPromise is always a Promise and
          // downstream .finally() does not create an unhandled rejection.
          Promise.resolve()
            .then(() => task().then(resolve).catch(reject))
            .catch(reject),
        );
        process(); // kick off process
      });
    },
    pause() {
      isPaused = true;
    },
    resume() {
      isPaused = false;
      process();
    },
  };
}
