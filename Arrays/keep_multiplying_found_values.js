// https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

const findFinalValue = (nums, original) => {
    let map = new Map();
    for(let num of nums) map.set(num, num)
    for(let [key, val] of map){
        if(map.has(original)) original *= 2
    }
    return original
};
