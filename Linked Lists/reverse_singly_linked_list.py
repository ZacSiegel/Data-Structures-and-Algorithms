# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseList(self, head):
        # Initialize prev pointer as NULL...
        prev = None
        # Initialize the curr pointer as the head...
        currentNode = head
        # Run a loop till curr points to NULL...
        while currentNode:
            # Initialize next pointer as the next pointer of curr...
            next = currentNode.next
            # Now assign the prev pointer to curr’s next pointer.
            currentNode.next = prev
            # Assign curr to prev, next to curr...
            prev = currentNode
            currentNode = next
        return prev       # Return the prev pointer to get the reverse linked list...
