// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }
    for(let num in map){
        if(map[num] >= nums.length / 2)
            return num
    }
};
