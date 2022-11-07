// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => {
    let map = {};
    for(let num of nums){
        map[num] ? map[num]++ : map[num] = 1;
    }
    for(let num in map){
        if(map[num] > 1) return true
    }
    return false;
};
