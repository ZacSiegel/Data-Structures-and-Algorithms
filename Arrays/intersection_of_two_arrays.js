// https://leetcode.com/problems/intersection-of-two-arrays/

const intersection = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let output = []
    
    for(let num of set1){
        if(set2.has(num)) output.push(num)
    }
    return output
};
