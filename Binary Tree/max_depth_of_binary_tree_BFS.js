// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const maxDepth = (root) => {
    if(!root) return 0;
    // using BFS and counting levels
    let levels = 0 
    let queue = [root];
    
    while(queue.length > 0){
        // get current queue length
        let count = queue.length;
        
        for(let i = 0; i < count; i++){
            // currNode is node removed from front of queue
            let currNode = queue.shift();
            // if the currNode has children, add them to queue
            if(currNode.right) queue.push(currNode.right);
            if(currNode.left) queue.push(currNode.left);
            
        }
        levels++;
    }
    return levels;
};
