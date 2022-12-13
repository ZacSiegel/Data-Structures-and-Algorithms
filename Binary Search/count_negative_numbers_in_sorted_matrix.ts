// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

function countNegatives(grid: number[][]): number {
    let count: number = 0;
    for(let nums of grid){
        let left: number = 0;
        let right: number = nums.length - 1;
        while(left <= right){
            if(nums[right] >= 0) break
            if(nums[right] < 0){
                count++;
            }
            right--;
        }
    }
    return count;
};
