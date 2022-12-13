// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);
    let output: number[] = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target) output.push(i)
    }
    return output;
};
