// https://leetcode.com/problems/maximum-average-subarray-i/

const findMaxAverage = (nums, k) => {
    let currSum = 0;
    for(let i = 0; i < k; i++){
        currSum += nums[i];
    }
    
    let maxSum = currSum;
    
    for(let i = k; i < nums.length; i++){
        currSum += nums[i] - nums[i - k];
        maxSum = Math.max(currSum, maxSum);
    }
    
    return maxSum / k

};
