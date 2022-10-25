// https://leetcode.com/problems/missing-number/

const missingNumber = nums => {
    let sum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum += i - nums[i];        
    }

    return sum;
};
