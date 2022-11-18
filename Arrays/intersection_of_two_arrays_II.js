// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1, nums2) => {
    let map = new Map();
    for(let num of nums1){
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    let output = []
    for(let num of nums2){
        if(map.has(num) && map.get(num) > 0){
            map.set(num, map.get(num) - 1);
            output.push(num)
        }
    }
    return output
};
