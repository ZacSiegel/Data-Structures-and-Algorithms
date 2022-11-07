// https://leetcode.com/problems/find-all-duplicates-in-an-array/

const findDuplicates = (nums) => {
    let map = {}
    for(let num of nums){
        map[num] ? map[num]++ : map[num] = 1
    }
    let result = []
    for(let key in map){
        if(map[key] > 1){
            result.push(parseInt(key))
        }
    }
    return result  
};
