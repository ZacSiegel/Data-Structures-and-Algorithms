<!-- https://leetcode.com/problems/search-in-rotated-sorted-array/ -->

function search(nums: number[], target: number): number {
    let left: number = 0
    let right: number = nums.length - 1
    while(left <= right){
        let mid: number = Math.floor((right + left) / 2)
        
        if(nums[mid] === target) return mid
        
        // check if left side is sorted
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && nums[mid] >= target){
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        
        // check if right side is sorted
        if(nums[right] >= nums[mid]){
            if(nums[mid] <= target && target <= nums[right]){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return - 1
};
