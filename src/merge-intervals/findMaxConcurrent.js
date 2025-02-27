// @ts-check

/**
 * Given a list of intervals, find the maximum number of concurrent intervals.
 * 
 * Use sweep line algorithm to solve this
 * 
 * O n log n because of the sorting
 * 
 * @param {{start: number, end: number, id: number}[]} intervals - sorted
 * @returns {{maxConcurrent: number, concurrentIntervalIds: number[]}}
 */
export default function findMaxConcurrent(intervals) {
  // build events
  const events = [];
  intervals.forEach(interval => {
    events.push({time: interval.start, type: 'start', id: interval.id});
    events.push({time: interval.end, type: 'end', id: interval.id});
  });

  // sort asc
  events.sort((a, b) => a.time - b.time || (a.type === 'start' ? -1 : 1));

  let maxConcurrent = 0;
  let concurrentIntervalIds = [];
  let currentIntervals = new Set();

  for(let i = 0; i < events.length; i++) {
    const event = events[i];

    if (event.type === 'start') {
      currentIntervals.add(event.id);
    } else {
      currentIntervals.delete(event.id);
    }

    if (currentIntervals.size > maxConcurrent) {
      maxConcurrent = currentIntervals.size;
      concurrentIntervalIds = Array.from(currentIntervals);
    }
  }

  // handle special 0 overlap case
  if (maxConcurrent <= 1) {
    return { maxConcurrent: 0, concurrentIntervalIds: [] };
  }

  return {
    maxConcurrent,
    concurrentIntervalIds,
  };
}