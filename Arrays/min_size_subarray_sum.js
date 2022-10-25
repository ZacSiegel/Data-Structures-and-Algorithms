// https://leetcode.com/problems/minimum-size-subarray-sum/

const minSubArrayLen = (target, nums) => {
    let start = 0
    let total = 0
    let minLength = Infinity
    for(let right = 0; right < nums.length; right++){
        total += nums[right]
        // if sum of window meets target, we can move start pointer
        while (total >= target){
            minLength = Math.min(minLength, right - start + 1)
            // start pointer can be increased to see if window can be shrunk
            // value must be subtracted from total to reflect sum of window
            total -= nums[start]
            start++
        }
    }
    return minLength === Infinity ? 0 : minLength
}
