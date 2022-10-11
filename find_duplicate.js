// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

const findDuplicate = (nums) => {
    let numSet = new Set()
    for(let i = 0; i < nums.length; i++){
        if(numSet.has(nums[i])) return nums[i]
        numSet.add(nums[i])
    }
};
