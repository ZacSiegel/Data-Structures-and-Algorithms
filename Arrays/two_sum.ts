function twoSum(nums: number[], target: number): number[] {
    let seen = {}
    
    for(let i = 0; i < nums.length; i++){
        
        let remaining: number = target - nums[i]
        
        if(remaining in seen){
            return [seen[remaining], i]
        }
        seen[nums[i]] = i
    }
    
};
