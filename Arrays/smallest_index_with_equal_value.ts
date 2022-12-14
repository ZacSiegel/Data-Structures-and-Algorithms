//https://leetcode.com/problems/smallest-index-with-equal-value/description/

function smallestEqual(nums: number[]): number {
    let min: number = Infinity;
    for(let i = 0; i < nums.length; i++){
        if(i % 10 === nums[i]) {
            min = Math.min(min, i);
        }
    }
    return min === Infinity ? -1 : min
};
