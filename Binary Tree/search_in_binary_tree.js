// https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const searchBST = (root, val) => {
    while(root !== null){
        if(val < root.val){
            root = root.left;
        } else if (val > root.val){
            root = root.right;
        } else {
            return root
        }
    }
    return null
};
