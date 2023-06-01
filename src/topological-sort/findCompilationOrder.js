
/**
 * topological sort to find compilation order, see https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/7n3O9w5REqw
 * Run time: O(n), or O(vertices + edges)
 * @param {string[][]} dependencies - [vertex, edge] format. E.g [["B","A"],["C","A"],["D","C"],["E","D"],["E","B"]]
 * @returns {string[]} - sorted order
 */
export default function findCompilationOrder(dependencies) {
  const sortedOrder = [];
  const queue = [];
  /** @type Map<string, string[]> */
  const graph = new Map();
  /** @type Map<string, number> */
  const indegree = new Map();

  dependencies.forEach(([edge, vertex]) => {
    // Build the graph from the input adjacency lists
    if (graph.has(vertex)) {
      graph.get(vertex).push(edge);
    }
    if (!graph.has(vertex)) {
      graph.set(vertex, [edge]);
    }

    // Store the indegree of each vertex in a hash map
    if (!indegree.has(edge)) {
      indegree.set(edge, 0);
    }
    if (!indegree.has(vertex)) {
      indegree.set(vertex, 0);
    }
    indegree.set(edge, indegree.get(edge) + 1);
  });

  // Add the sources to a queue
  for (const [dependency, indegreeCount] of indegree.entries()) {
    // NOTE that cyclic graphs will not have any sources, 
    // so the queue will be empty, and the returned sortOrder will be []
    if (indegreeCount === 0) {
      queue.push(dependency);
    }
  }

  while(queue.length > 0) {
    // Pop from the queue and store the node in a list, `sortedOrder`
    let vertex = queue.shift();

    if (graph.has(vertex)) {
      // Decrement the in-degrees of the node's children by 1.
      graph.get(vertex).forEach(edge => {
        indegree.set(edge, indegree.get(edge) - 1);
        // If the in-degree of a node becomes 0, add it to the source queue
        if (indegree.get(edge) === 0) {
          queue.push(edge);
        }
      });
    }

    sortedOrder.push(vertex);
    // Repeat until all vertices have been visited.
  }

  return sortedOrder;
}
