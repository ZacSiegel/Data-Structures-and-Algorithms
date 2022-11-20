// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
    const seen = {}
    
    for(let num of nums){
        seen[num] ? seen[num]++ : seen[num] = 1;
    }
    
    // populate bucket with empty arrays
    const bucket = []
    for(let i = 0; i <= nums.length; i++){
        bucket.push([])
    }
    
    // adds freq count of val into bucket
    // i of bucket corresponds with freq count of val
    // if there are 3 of a val, it will go into bucket[3]
    for(let key in seen){
        let count = seen[key]
        bucket[count].push(key)
    }
    
    let result = []
    for(let i = bucket.length - 1; i >= 0; i--){
        if(bucket[i].length === 0) continue
        // ... is used to flatten out values
        else result = [...result, ...bucket[i]]
    }
    return result.slice(0, k)
};
