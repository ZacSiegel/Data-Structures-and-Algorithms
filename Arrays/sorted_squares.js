// https://leetcode.com/problems/squares-of-a-sorted-array/

const sortedSquares = (nums) => {
    let squared = nums.map(num => num * num);
    return squared.sort((a, b) => a - b)
};
