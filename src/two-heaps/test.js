import test from 'ava';
import MedianStream from './MedianStream.js';

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
