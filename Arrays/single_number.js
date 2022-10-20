// https://leetcode.com/problems/single-number/

const singleNumber = nums => {
    let dict = {}
    for(let num of nums){
        dict[num] ? dict[num]++ : dict[num] = 1
    }
    for(let val in dict){
        if(dict[val] === 1){
            return val
        }
    }
};
