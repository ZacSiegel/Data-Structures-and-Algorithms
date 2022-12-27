// https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
    let maxEndingHere: number = nums[0];
    let maxSoFar: number = nums[0];
    for(let i = 1; i < nums.length; i++){
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
};
