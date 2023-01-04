// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/

const countKDifference = (nums, k) => {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) === k) count++
        }
    }
    return count
};
