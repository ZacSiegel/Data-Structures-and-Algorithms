// https://leetcode.com/problems/divide-array-into-equal-pairs/description/

function divideArray(nums: number[]): boolean {
    let set = new Set();
    for(let num of nums){
        if(!set.has(num)){
            set.add(num)
        } else {
            set.delete(num)
        }
    }

    return set.size === 0

};
