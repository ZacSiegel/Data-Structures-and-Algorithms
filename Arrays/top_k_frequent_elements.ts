// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let bucket = []
    for(let i = 0; i <= nums.length; i++){
        bucket.push([])
    }
    for(let [num, numFreq] of map){
        // console.log(num, numFreq)
        bucket[numFreq].push(num)
    }
                                   
    let output = []
    for(let i = bucket.length - 1; i >= 0; i--){
        if(bucket[i].length){
      // if ... is not used, bucket[i] will be an array with values inside
      // to just get the value, we use ...
            output.push(...bucket[i])
        }
    }
    return output.slice(0,k)
};
