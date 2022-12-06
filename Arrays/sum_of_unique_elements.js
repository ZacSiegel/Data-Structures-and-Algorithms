// https://leetcode.com/problems/sum-of-unique-elements/

const sumOfUnique = (nums) => {
    let map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let total = 0
    for(let [key, val] of map){
        if(val === 1) total+= key
    }
    return total
};
