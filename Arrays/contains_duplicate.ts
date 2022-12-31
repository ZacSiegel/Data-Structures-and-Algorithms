// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    let set = new Set();
    for(let num of nums){
        if(!set.has(num)) set.add(num)
        else return true
    }
    return false;
};
