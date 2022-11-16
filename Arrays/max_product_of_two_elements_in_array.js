// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

// O(n * n) time
const maxProduct = (nums) => {
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let currMax = (nums[i] - 1) * (nums[j] - 1)
            max = Math.max(currMax, max)
        }
    }
    return max 
};

// // O(nlogn) time
const maxProduct = (nums) => {
    let max = 0;
    nums.sort((a,b) =>b-a);
    return (nums[0] - 1) * (nums[1] - 1)
};
