class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        lookup = {}
        for i in nums:
            if i in lookup:
                return i
            else:   
                lookup[i] = 1 
