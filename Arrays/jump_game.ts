// https://leetcode.com/problems/jump-game/description/

function canJump(nums: number[]): boolean {
    let goalPost: number = nums.length - 1;
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] + i >= goalPost) goalPost = i
    }

    return goalPost === 0 ? true : false;
};
