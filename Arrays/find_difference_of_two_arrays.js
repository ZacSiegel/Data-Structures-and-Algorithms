// https://leetcode.com/problems/find-the-difference-of-two-arrays/

const findDifference = (nums1, nums2) => {
    let map1 = new Map();
    let map2 = new Map();
    for(let num of nums1){
        map1.set(num, (map1.get(num) || 0) + 1)
    }
    
    for(let num of nums2){
        map2.set(num, (map2.get(num) || 0) + 1)

    }
    let result = [[],[]]
    for(let [key, val] of map1){
        if(!map2.has(key)){
            result[0].push(key)
        }
    }
    
    for(let [key, val] of map2){
        if(!map1.has(key)){
            result[1].push(key)
        }
    }
    return result
};
