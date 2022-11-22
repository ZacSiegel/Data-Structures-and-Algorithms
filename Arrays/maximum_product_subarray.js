// https://leetcode.com/problems/maximum-product-subarray/

const maxProduct = (nums) => {
    let result = nums[0];
    let prevMax = nums[0]
    let prevMin = nums[0]
    for(let i =1; i < nums.length; i++){
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) itself is the largest
        // 3. number(-) * prevMin(-) is the largest 
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        // curMin is used to keep track of smallest negative value
        // smaller negative could result in bigger max for future nums
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);
        
        // updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin
        
        result = Math.max(curMax, result);
    }
    return result

};
