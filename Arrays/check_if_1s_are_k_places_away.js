// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

const kLengthApart = (nums, k) => {
    let count = k
    for(let num of nums){
        if(num === 1){
            if(count < k) return false
            count = 0
        } else {
            count++
        }
    }
    return true
};
