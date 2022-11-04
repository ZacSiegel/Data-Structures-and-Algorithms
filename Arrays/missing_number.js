// https://leetcode.com/problems/missing-number/

const missingNumber = (nums) => {
    let map = new Map()
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], i)
        }
        if(map.get(i) !== map.get(nums[i])) return i
    }
    return nums.length
};
