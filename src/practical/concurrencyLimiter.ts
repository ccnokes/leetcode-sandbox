/**
 Implement a function that runs async tasks with a max concurrency limit. 
 Tasks are added dynamically; the limiter must start new ones as soon as a slot frees up.
 */

/*
Plan

Task def: () => Promise<any>

API
- tasks can be added dynamically, so we need an add() method
- const limiter = createConcurrencyLimiter(initialTasks[]);
- limiter.add()

Internals
- queue of functions
- shift from queue until concurrencyLimit reached
- execute function
- keep track of inflight tasks
  Promises[] OR
  Map<id, Promise> - faster lookup, less array juggling
- when task is done (finally method), remove from array/Map
- shift from queue and push into inFlightTasks

Ways we could expand/improve this:
- configurable debug param
- visualizer :)
- dynamic concurrency limit based on system specs
- instrument analytics - measure back pressure (time queued, time to complete)
- cancellable
- evict and cancel tasks over time limit
- notification on queue drained/complete - onQueueComplete
*/

type Task = () => Promise<any>;

export function createConcurrencyLimiter(
  concurrencyLimit: number = 3,
  initialTasks?: Task[],
) {
  const taskQueue = [...(initialTasks ?? [])];
  const inFlightTasks = new Map<string, Promise<any>>();

  function process() {
    while (taskQueue.length > 0 && inFlightTasks.size < concurrencyLimit) {
      const task = taskQueue.shift();
      if (!task) return;

      const taskId = crypto.randomUUID();
      const taskPromise = task();
      inFlightTasks.set(taskId, taskPromise);

      taskPromise.finally(() => {
        inFlightTasks.delete(taskId);
        process(); // recurse
      });
    }
  }

  process();

  return {
    add(task: Task) {
      taskQueue.push(task);
      process(); // kick off process
    },
  };
}
