// https://leetcode.com/problems/number-of-arithmetic-triplets/

// Brute force O (N ^ 3) cubic time
const arithmeticTriplets = (nums, target) => {
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            for(let k = j; k < nums.length; k++){
                if(i < j && j < k){
                    if(nums[j] - nums[i] === target && nums[k] - nums[j] === target){
                        total++
                    }
                }
            }
        }
    }
    return total
};

// Optimized O(N) linear time
const arithmeticTriplets = (nums, target) => {
    let map = new Map();
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        let temp = nums[i] - target;
        
        if(map.has(temp) && map.has(temp - target)){
            count++;
        }
        map.set(nums[i] , i);
    }
    
    return count;
};
