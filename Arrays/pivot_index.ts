function pivotIndex(nums: number[]): number {
    let leftSum: number = 0;
    let rightSum: number = 0;
    for(let num of nums){
        rightSum += num
    }
    for(let i = 0; i < nums.length; i++){
        leftSum += nums[i];
        if(leftSum === rightSum) return i
        rightSum -= nums[i]
    }
    return -1
};
