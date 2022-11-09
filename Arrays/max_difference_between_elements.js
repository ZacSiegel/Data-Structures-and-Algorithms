// https://leetcode.com/problems/maximum-difference-between-increasing-elements/

const maximumDifference = (nums) => {
    let maxDiff = -1;
    let left = 0;
    let right = 1;
    while(left < nums.length){
        let currentDiff = nums[right] - nums[left];
        if(nums[right] > nums[left]){
            maxDiff = Math.max(maxDiff, currentDiff)
        } else {
            left = right
        }
        right++
    }
    return maxDiff
};
