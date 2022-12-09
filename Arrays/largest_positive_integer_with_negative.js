// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

const findMaxK = (nums) => {
    const map = new Map();
    let maxResult = 0;
    for(let i = 0; i < nums.length; i++){
        let negative = nums[i] * -1   
        if(map.has(negative)){
            let currMax = Math.max(nums[i], map.get(negative))
            maxResult = Math.max(maxResult, currMax)
        }
        map.set(nums[i], nums[i])
    }
    return maxResult === 0 ? -1 : maxResult
};
