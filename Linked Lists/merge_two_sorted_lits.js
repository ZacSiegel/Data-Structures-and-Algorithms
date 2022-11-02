// https://leetcode.com/problems/merge-two-sorted-lists/

const mergeTwoLists = (list1, list2) => {
    // we need two variables because sortedHead will move 
    // through list and dummyHead remains at the "head" position
    let dummyHead = new ListNode()
    let sortedHead = dummyHead

    while (list1 && list2) {
        // if list1 val is smaller, add it onto sorted head
        if (list1.val < list2.val) {
            sortedHead.next = list1
            // move list1 pointer forward
            list1 = list1.next
        } else {
            // list2 val is smaller so it gets appended to sorted head
            sortedHead.next = list2
            // move list2 pointer forward
            list2 = list2.next
        }
        // moves sortedHead forward from current position to next list item
        sortedHead = sortedHead.next
    }
    // check to see if end of list1 or list2 has been reached
    // and append rest of list1 or list2 to new list
    if (list1) {
        sortedHead.next = list1
    } else if (list2) {
        sortedHead.next = list2
    }
    return dummyHead.next
};
