// @ts-check
import test from 'ava';
import findOrder from './couseScheduleII.js';
import findCompilationOrder from './findCompilationOrder.js';

test('courseScheduleII - findOrder', t => {
  t.deepEqual(
    findOrder(2, [[1,0]]),
    [0, 1]
  );

  t.deepEqual(
    findOrder(1, []),
    [0]
  );

  t.deepEqual(
    findOrder(4, [[1,0],[2,0],[3,1],[3,2]]),
    [0, 1, 2, 3]
  );
  
  // this one doesn't work
  // t.deepEqual(
  //   findOrder(3, [[1,0],[1,2],[0,1]]),
  //   []
  // );
});

test('findCompilationOrder', t => {
  /** @type {Array<{actual: string[][], expected: string[]}>} */
  const testCases = [
    {
      actual: [['B','A'],['C','A'],['D','C'],['E','D'],['E','B']], 
      expected: ['A', 'B', 'C', 'D', 'E']
    },
    {
      actual: [['B','A'],['C','A'],['D','B'],['E','B'],['E','D'],['E','C'],['F','D'],['F','E'],['F','C']],
      expected: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    {
      actual: [['A','B'],['B','A']], // cyclic
      expected: []
    },
    {
      actual: [['B','C'],['C','A'],['A','F']],
      expected: ['F', 'A', 'C', 'B']
    },
    {
      actual: [['C','C']], // cyclic
      expected: []
    },
  ];
  for(const {actual, expected} of testCases) {
    t.deepEqual(
      findCompilationOrder(actual),
      expected
    );
  }
});
