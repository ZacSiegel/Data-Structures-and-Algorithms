// https://leetcode.com/problems/minimum-size-subarray-sum/description/

function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0;
    let right: number = 0;
    let minLen: number = Infinity;
    let currSum: number = 0;
    while(right < nums.length){
        currSum += nums[right]
        while(currSum >= target){
            minLen = Math.min(minLen, right - left + 1);
            currSum -= nums[left];
            left++;
        }
        right++;
    }

    return minLen === Infinity ? 0 : minLen
};
