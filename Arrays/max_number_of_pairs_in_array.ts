// https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/

function numberOfPairs(nums: number[]): number[] {
    let map = {};
    let count: number = 0;
    for(let num of nums){
        if(map[num]){
            delete map[num];
            count++;
        } else {
            map[num] = 1;
        };
    };
    let leftover: number = 0;
    for(let num in map){
        leftover++;
    };
    
    return [count, leftover]
};
