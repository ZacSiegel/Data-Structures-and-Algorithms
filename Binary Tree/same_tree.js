// https://leetcode.com/problems/same-tree/

const isSameTree = (p, q) => {
    // if we get to end of each tree at same time
    if(!p && !q) return true
    // if we get to end of one tree before other 
    // or vals aren't equal
    if((!p || !q) || p.val !== q.val) return false
    // recursivley check child nodes
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
