// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {
    let slow = head;
    let fast  = head;
    // checks that neither fast nor it's pointer are null
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        // slow and fast meet because fast has "lapped" the slow pointer
        if(slow === fast) return true
        
    }
    return false
};
