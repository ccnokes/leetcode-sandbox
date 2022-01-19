// @ts-check

/**
 * Node on a binary tree
 */
export default class TreeNode {
  /**
   * @param {number} value
   * @param {TreeNode=} left
   * @param {TreeNode=} right
   */
  constructor(value, left, right) {
    this.value = value || 0;
    this.left = left || null;
    this.right = right || null;
  }

  // for compatibility with other stuff
  get val() { return this.value }
}
