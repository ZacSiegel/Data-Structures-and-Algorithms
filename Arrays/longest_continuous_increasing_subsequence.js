// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
// A continuous increasing subsequence is defined by two indices l and r (l < r) such that 
// it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// Example 1:
// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4.


var findLengthOfLCIS = function(nums) {
    if(nums.length <= 1) return nums.length
    let maxLen = 0
    // initialize window pointers
    let left = 0
    let right = 1
    
    while(right < nums.length ){
        // if number on right is smaller, move left pointer 
        // to where right pointer is
        if(nums[right-1] >= nums[right]){
            left = right
        }
        // increase right pointer by 1 either way
        right++
        // get maxLength by checking where right pointer is
        maxLen = Math.max(right - left, maxLen)
    }
    return maxLen
};
