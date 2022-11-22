// https://leetcode.com/problems/maximum-product-of-three-numbers/

const maximumProduct = (nums) => {
    nums.sort((a, b) => a - b);
    let max1 = nums[0] * nums[1] * nums[nums.length - 1];
    let max2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    return Math.max(max1, max2)
};
