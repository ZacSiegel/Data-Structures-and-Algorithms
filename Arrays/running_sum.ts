function runningSum(nums: number[]): number[] {
    let sum: number[] = [nums[0]]
    for(let i = 1; i < nums.length; i++){
        sum.push(nums[i] + sum[i-1])
    }
    return sum
};
