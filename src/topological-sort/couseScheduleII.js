/**
https://leetcode.com/problems/course-schedule-ii/description/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites - [vertex, edge]
 * @return {number[]}
 */
export default function findOrder(numCourses, prerequisites) {
  const sortedOrder = [];
  const queue = [];
  /** @type Map<number, number[]> */
  const graph = new Map();
  /** @type Map<number, number> */
  const indegree = new Map(new Array(numCourses).fill(0).map((prereqs, index) => ([index, prereqs])));

  // Build the graph from the input adjacency lists
  prerequisites.forEach(([edge, vertex]) => {
    if (graph.has(vertex)) {
      graph.get(vertex).push(edge);
    }
    if (!graph.has(vertex)) {
      graph.set(vertex, [edge]);
    }
  });

  // Store the indegree of each vertex in a hash map
  prerequisites.forEach(([course]) => {
    if (!indegree.has(course)) {
      indegree.set(course, 1);
    } else {
      indegree.set(course, indegree.get(course) + 1);
    }
  });

  // Add the sources to a queue
  for (const [course, indegreeCount] of indegree.entries()) {
    if (indegreeCount === 0) {
      queue.push(course);
    }
  }

  while(queue.length > 0) {
    // Pop from the queue and store the node in a list, `sortedOrder`
    let course = queue.shift();

    if (graph.has(course)) {
      // Decrement the in-degrees of the node's children by 1.
      graph.get(course).forEach(prereq => {
        indegree.set(prereq, indegree.get(prereq) - 1);
        // If the in-degree of a node becomes 0, add it to the source queue
        if (indegree.get(prereq) === 0) {
          queue.push(prereq);
        }
      });
    }

    sortedOrder.push(course);
    // Repeat until all vertices have been visited.
  }

  return sortedOrder;
}
