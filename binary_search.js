// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4


const search = (nums, target) => {
    let start = 0
    let end = nums.length -1
    let mid = Math.floor((start + end) / 2)
    while(nums[mid] !== target && start <= end){
        if(target < nums[mid]){
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2)
    }
    if(nums[mid] === target){
        return mid
    }
    return -1
};
