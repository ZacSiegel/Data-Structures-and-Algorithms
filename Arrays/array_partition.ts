// https://leetcode.com/problems/array-partition/description/

function arrayPairSum(nums: number[]): number {
    nums.sort((a,b) => a - b);
    let output: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) output += nums[i];
    }
    return output;
};
