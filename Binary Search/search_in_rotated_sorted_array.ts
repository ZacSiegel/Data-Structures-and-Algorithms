// https://leetcode.com/problems/search-in-rotated-sorted-array/ 

function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    while(left <= right){
        let mid: number = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;

        // left side sorted
        if(nums[mid] >= nums[left]){
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // right side sorted
        if(nums[mid] <= nums[right]){
            if(target >= nums[mid] && target <= nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
