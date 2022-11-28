// https://leetcode.com/problems/invert-binary-tree/

const invertTree = (root) => {
    
    if(root) {
        let tempNode = root.left
        root.left = root.right
        root.right = tempNode
    
        invertTree(root.left)
        invertTree(root.right)
    }
    return root
};
