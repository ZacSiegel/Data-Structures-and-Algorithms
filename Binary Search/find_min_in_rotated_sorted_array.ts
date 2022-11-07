// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    while(left < right){
        let mid: number = Math.floor((left + right) / 2);
        
        if(nums[mid] > nums[right]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};
