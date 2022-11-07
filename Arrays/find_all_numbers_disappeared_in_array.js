// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = (nums) => {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
       if(!map.has(nums[i])){
           map.set(nums[i], i)
       }
    }
    let res = []
    // check if the index number is in map
    // should have all indices from 1 => n
    for(let i = 1; i<=nums.length;i++){
        if(!map.has(i)) res.push(i)
    }
    return res
};
