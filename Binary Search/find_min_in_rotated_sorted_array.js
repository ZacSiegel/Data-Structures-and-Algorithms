// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = (nums) => {
    let left = 0
    let right = nums.length - 1
    
    while (left < right){
        let mid = Math.floor((left + right)/2)
        // if nums[mid] > nums[right], it means that nums[mid] is at the last
        // item of the rotated array on the left side
        // so we know from here that the min is between mid and right
        if(nums[mid] > nums[right]){
            left = mid + 1
        } else {
            right = mid 
        }
    }
    return nums[left]
};
