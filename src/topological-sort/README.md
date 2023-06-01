# Topological sort

See https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/3wZ3DrjpJz9

Used to find valid orderings of elements that have dependencies on each other or priority. It can be used to "sequence" things. Sometimes there can be multiple valid orderings. The de-facto, canonical problem is a course list with pre-requisites and branching paths.

## partial order vs total order

A total order is something like sorting an array of ints in asending order: [1, 2, 4]. There's only one correct answer.

For some sorting problems, there's multiple correct answers. "Consider an example of course prerequisites where English I has to be taken before English II, and Mathematics can be taken whenever. Since there’s no obligation on when to take Mathematics, we can take it in any order as long as the dependency is respected—that is, as long as English I is taken before English II." Possible orderings are:

- English I, English II, Mathematics
- Mathematics, English I, English II
- English I, Mathematics, English II

## Steps to solve

This is Kahn's algorithm:

- Build the graph from the input adjacency lists
- Store the indegree of each vertex in a hash map
- Add the sources to a queue
- Pop from the queue and store the node in a list, `sortedOrder`
- Decrement the in-degrees of the node's children by 1. If the in-degree of a node becomes 0, add it to the source queue
- Repeat until all vertices have been visited. Return `sortedOrder`.

indegree = "The number of edges directed into a vertex in a directed graph". How many arrows/edges point to this vertex?
source = "a vertex with no incoming edges. A vertex with an indegree of 0."

Can also do depth-first search.

Vertex is the thing, edge is the relationship to another thing.
