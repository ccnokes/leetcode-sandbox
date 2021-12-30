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
}


