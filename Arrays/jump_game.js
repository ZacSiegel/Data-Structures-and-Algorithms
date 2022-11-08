// https://leetcode.com/problems/jump-game/

const canJump = (nums) => {
    let goal = nums.length - 1;
    for(let i = nums.length-2; i >= 0; i--){
        // if goal can be reached from current index
        // then the goalpost can be moved to the current index
        if(i + nums[i] >= goal){
            goal = i
        }
    }
    return goal === 0 ? true : false;
};
