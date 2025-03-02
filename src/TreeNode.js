// @ts-check

/**
 * Node on a binary tree
 */
export default class TreeNode {

  /**
   * @param {TreeNode=} node
   * @param {string} prefix
   * @param {boolean} isLeft
   */
  static print(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
  
    if (node?.right !== null) {
      TreeNode.print(node?.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
  
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node?.value}`);
  
    if (node?.left !== null) {
      TreeNode.print(node?.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  /**
   * @param {number} value
   * @param {TreeNode=} left
   * @param {TreeNode=} right
   */
  constructor(value, left, right) {
    this.value = value ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }

  // for compatibility with other stuff
  get val() { return this.value }
}
