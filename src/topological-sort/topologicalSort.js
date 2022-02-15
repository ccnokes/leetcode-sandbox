// @ts-check

/**
 * 
 * @param {number} vertices
 * @param {number[][]} edges
 */
function topologicalSort(vertices, edges) {

  // initialize graph
  const inDegree = new Array(vertices).fill(0); // count of incoming edges
  const graph = new Array(vertices).fill(0).map(() => []); // adjacency list graph

  edges.forEach(edge => {
    const parent = edge[0];
    const child = edge[1];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child]++; // increment child's inDegree
  });

}


topologicalSort(4, [
  [3, 2],
  [3, 0],
  [2, 0],
  [2, 1],
]);
