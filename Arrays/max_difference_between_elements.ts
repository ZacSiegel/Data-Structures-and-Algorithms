// https://leetcode.com/problems/maximum-difference-between-increasing-elements/

function maximumDifference(nums: number[]): number {
    let left: number = 0;
    let right: number = 1;
    let maxDiff: number = -1;
    while(left < nums.length){
        let currentDiff: number = nums[right] - nums[left];
        if(nums[right] > nums[left]){
            maxDiff = Math.max(maxDiff, currentDiff)
        } else {
            left = right
        }
        right++;
    }
    return maxDiff;
};
