// https://leetcode.com/problems/most-frequent-even-element/

const mostFrequentEven = (nums) => {
    const map = new Map();
    
    for(let num of nums){
        if(num % 2 === 0){
            map.set(num, ((map.get(num) || 0) + 1));
        }
    }
    
    let maxFreq = 0;
    let result = Infinity
    
    for(let [num, freq] of map){
        if(freq > maxFreq){
            maxFreq = freq
            result = num        
        }
        if (freq === maxFreq){
            result = Math.min(result, num)
        }
    }
    
    return result === Infinity ? -1 : result
};
