// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
    let localMax: number = nums[0];
    let globalMax: number = nums[0];
    for(let i = 1; i < nums.length; i++){
        localMax = Math.max(localMax + nums[i], nums[i]);
        globalMax = Math.max(localMax, globalMax);
    } 
    return globalMax;
};
