// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    // adding frequency count to hash map
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // assigning nums with each freq to spot in bucket
    // bucket spots are seperated by index values indicating
    // the frequency of the num inserted
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        // ... is used here to get the actal values from the set at each position
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) return result;
    }
};
