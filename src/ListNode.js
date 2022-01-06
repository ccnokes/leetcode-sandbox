// @ts-check

/** singly linked list node */
export default class ListNode {
  /**
   * @param {number} value
   * @param {ListNode=} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * Create a linked list from an array
   * @param {any[]} arr
   * @returns {ListNode}
   */
  static from(arr) {
    let head;
    let prev = null;
    for (let i = 0; i < arr.length; i++) {
      let curr = new ListNode(arr[i]);
      if (i === 0) {
        head = curr;
      }
      if (prev != null) {
        prev.next = curr;
      }
      prev = curr;
    }

    return head;
  }

  /**
   * get element at index
   * @param {ListNode} head
   * @param {number} index
   * @returns {ListNode}
   */
  static at(head, index) {
    let node = head;
    let i = 0;
    while (i < index) {
      node = node.next;
      i++;
    }
    return node;
  }

  /**
   * reverse list, returns new copy
   * @param {ListNode} head
   * @returns {ListNode}
   */
  static reverse(head) {
    let node = head;
    let newHead = new ListNode(node.value);

    while (node !== null && node.next !== null) {
      node = node.next;
      let next = new ListNode(node.value);
      next.next = newHead;
      newHead = next;
    }

    return newHead;
  }

  /**
   * reverse list in-place
   * @param {ListNode} head
   * @returns {ListNode}
   */
  static reverseInPlace(head) {
    let current = head;
    let prev = null;

    while (current !== null) {
      let next = current.next; // store next node
      current.next = prev; // reverse current node
      prev = current; // before we move to next, point prev to current
      current = next; // move to next node
    }

    return prev;
  }

/**
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
 *
 * @param {ListNode} head
 * @param {ListNode} p
 * @param {ListNode} q
 * @returns {ListNode}
 */
  static reverseFrom(head, p, q) {
    if (p === q) return head;

    let qNext = q.next;
    let prevP = head;

    // get the node previous to p
    while (prevP.next !== p) {
      prevP = prevP.next;
    }

    // reverse inner nodes like normal
    let current = p;
    let prev = null;

    while (current !== qNext) {
      let next = current.next; // store next node
      current.next = prev; // reverse current node
      prev = current; // before we move to next, point prev to current
      current = next; // move to next node
    }

    // swap pointers on p and q
    prevP.next = q;
    p.next = current; // current is 1 past last "inner" node, p is now end

    return head;
  }
}
