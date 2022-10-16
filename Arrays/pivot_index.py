class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
            left_sum = 0
            right_sum = 0 
            for num in nums:
                right_sum += num
            for i in range(len(nums)):
                left_sum += nums[i] 
                if left_sum == right_sum:
                    return i
                right_sum -= nums[i] 
            return -1
