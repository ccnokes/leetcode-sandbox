import test from 'ava';
import MedianStream from './MedianStream.js';
import findMaxProduct from './findMaxProduct.js';

test('MedianStream', t => {
  const medianStream = new MedianStream();
  medianStream.insertNum(3);
  medianStream.insertNum(1);
  t.is(medianStream.findMedian(), 2);

  medianStream.insertNum(5);
  t.is(medianStream.findMedian(), 3);

  medianStream.insertNum(4);
  t.is(medianStream.findMedian(), 3.5);
});

test('findMaxProduct', t => {
  t.deepEqual(findMaxProduct([100, 100]), [-1, -1]);
  t.deepEqual(findMaxProduct([1, 2, 3, 4, 5]), [-1, -1, 6, 24, 60]);
  t.deepEqual(findMaxProduct([2, 1, 2, 1, 2]), [-1, -1, 4, 4, 8]);
});
