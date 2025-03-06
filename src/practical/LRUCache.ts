
// key considerations:
// - track priority/usage - when the storage > capacity, remove least recently used from cache
// - NOTE usage is traditionally tracked via linked list, so that the tail is the least used
// - DS for storage - Map which tracks insertion order for us automatically if we're careful
// - efficient, constant time getting

// on get 
// if in cache, move key to top of priority list

// on put
// add to cache
// move key to top
// handle evictions


export default class LRUCache<T> {
  #map: Map<number, T>;
  readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.#map = new Map();
  }

  get(key: number): T | -1 {
    if (this.#map.has(key)) {
      const result = this.#map.get(key);
      
      // reinsert to update insertion order to front
      this.#map.delete(key);
      this.#map.set(key, result as T);

      return result!; // ! asserts not undefined
    }
    return -1;
  }

  put(key: number, value: T): void {
    // have to refresh insertion if we have it
    if (this.#map.has(key)) {
      this.#map.delete(key);
    }
    this.#map.set(key, value);

    // handle evictions
    if (this.#map.size > this.capacity) {
      const leastRecentlyUsedKey = this.#map.keys().next().value;
      this.#map.delete(leastRecentlyUsedKey);
    }
  }
}

// test cases
// check get/put works
// check capacity is correct
// check eviction works
