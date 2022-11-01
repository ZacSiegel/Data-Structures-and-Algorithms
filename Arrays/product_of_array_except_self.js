// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
    const prefix = []
    for (let i=0; i<nums.length; i++) {
        // If i === 0, start with `1`, since there is no prefix
        if (i===0) {
            prefix[i] = 1
        } else {
            // Otherwise, multiply nums[i-1] times the prefix at position i-1,
            // and add that to the prefix array at position i
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }
    const suffix = []
    for (let i=nums.length - 1; i>=0; i--) {
        // For the last index, we have no suffix, so just add a 1 to that position
        if (i===nums.length - 1) {
            suffix[i] = 1
        } else {
            // Otherwise, we multiply nums[i+1] by the suffix at position i+1
            // and add that to the suffix array at position i
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }
    }
    
    // Finally, our result array should be the products of prefix * suffix for each position
    const result = []
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix[i] * suffix[i]
    }
    
    return result
};
