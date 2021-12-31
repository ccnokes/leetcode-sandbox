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
   * @param {number} n
   * @returns {ListNode}
   */
  static at(head, n) {
    let node = head;
    let i = 0;
    while (i < n) {
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
}
